/**
 * Refraction for the floating nav's capsules. (The project pills had it too,
 * until its bright, bent rim read as a smeared ring over the posters' grain.)
 *
 * `refract(capsule)` builds SVG lenses for one capsule and redraws them whenever
 * the capsule changes size. Once they are drawn the capsule carries two `url(#…)`
 * values to use as its `backdrop-filter`, one per kind of lettering, and a
 * `data-refract` attribute to style against:
 *   --glass-lens-dim     for white lettering: the backdrop squeezed dark
 *   --glass-lens-bright  for ink lettering: the backdrop squeezed light, the clear
 *                        white glass of Apple's light mode
 * Chromium is the only engine that runs an SVG filter as a backdrop-filter;
 * elsewhere the declaration would switch the glass off, so the call does nothing
 * there and the capsule keeps its plain blur.
 *
 * Each lens merges two copies of the backdrop:
 *   body   frosted, then squeezed into a band of brightness the lettering reads on
 *          whatever lies behind (dim: 12%–36%; bright: 50%–100%), then given its
 *          colour back
 *   bezel  nearly clear, shifted by the map and left brighter than the body would
 *          leave it, shown only along the rim
 * The map tells the filter how far to shift each pixel: red and green are the x
 * and y shift (mid-grey = none), blue is how much of the bezel shows. The shift
 * runs along the capsule's edge normal, strongest at the rim and fading to nothing
 * one bezel in. The filter's negative scale turns that into an inward pull, so the
 * rim shows what lies deeper under the glass, squeezed, the way a thick lens edge
 * does.
 */
const BEZEL = 13; // px of rim that bends light

type Brands = { brands?: { brand: string }[] };
const chromium = (navigator as Navigator & { userAgentData?: Brands }).userAgentData?.brands?.some(
  ({ brand }) => brand === "Chromium",
);

/** A brightness squeeze, `slope × value + intercept`, and the saturation put back after it. */
type Grade = { slope: number; intercept: number; saturate: number };

const grades: Record<"dim" | "bright", { blur: number; body: Grade; bezel: Grade }> = {
  dim: {
    blur: 9,
    body: { slope: 0.24, intercept: 0.12, saturate: 2 },
    bezel: { slope: 0.55, intercept: 0.1, saturate: 1.5 },
  },
  bright: {
    blur: 5,
    body: { slope: 0.5, intercept: 0.5, saturate: 1.8 },
    bezel: { slope: 0.6, intercept: 0.4, saturate: 1.2 },
  },
};

const squeeze = ({ slope, intercept, saturate }: Grade, result: string) => `
    <feComponentTransfer>
      <feFuncR type="linear" slope="${slope}" intercept="${intercept}" />
      <feFuncG type="linear" slope="${slope}" intercept="${intercept}" />
      <feFuncB type="linear" slope="${slope}" intercept="${intercept}" />
    </feComponentTransfer>
    <feColorMatrix type="saturate" values="${saturate}" result="${result}" />`;

// The bezel bends each colour by its own amount, blue most, the way real glass
// splits light: a faint fringe wherever something with an edge lies under the rim.
const DISPERSION = { red: -40, green: -44, blue: -48 };

// Colour matrices that keep one channel, and the alpha.
const ONLY = {
  red: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
  green: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",
  blue: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
};

const channel = (colour: keyof typeof ONLY) => `
    <feDisplacementMap in="soft" in2="map" scale="${DISPERSION[colour]}" xChannelSelector="R" yChannelSelector="G" />
    <feColorMatrix type="matrix" values="${ONLY[colour]}" result="${colour}" />`;

const lens = (id: string, { blur, body, bezel }: (typeof grades)["dim"]) => `
  <filter id="${id}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB" primitiveUnits="userSpaceOnUse">
    <feImage x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map" />

    <feGaussianBlur in="SourceGraphic" stdDeviation="${blur}" edgeMode="duplicate" />
    ${squeeze(body, "body")}

    <feGaussianBlur in="SourceGraphic" stdDeviation="2" edgeMode="duplicate" result="soft" />
    ${channel("red")}
    ${channel("green")}
    ${channel("blue")}
    <feComposite in="red" in2="green" operator="arithmetic" k2="1" k3="1" />
    <feComposite in2="blue" operator="arithmetic" k2="1" k3="1" />
    ${squeeze(bezel, "bent")}
    <feColorMatrix in="map" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 1 0 0" result="rim" />
    <feComposite in="bent" in2="rim" operator="in" result="bezel" />

    <feMerge>
      <feMergeNode in="body" />
      <feMergeNode in="bezel" />
    </feMerge>
  </filter>`;

let lenses: SVGSVGElement | undefined; // one hidden <svg> holds every capsule's lens
let count = 0;

export function refract(capsule: HTMLElement) {
  if (!chromium) return;

  if (!lenses) {
    lenses = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    lenses.setAttribute("aria-hidden", "true");
    lenses.setAttribute("focusable", "false");
    lenses.style.cssText = "position:absolute;width:0;height:0";
    document.body.append(lenses);
  }

  const id = `glass-lens-${++count}`;
  for (const [kind, grade] of Object.entries(grades)) lenses.insertAdjacentHTML("beforeend", lens(`${id}-${kind}`, grade));
  const lensMaps = lenses.querySelectorAll<SVGFEImageElement>(`[id^="${id}-"] feImage`);
  const canvas = document.createElement("canvas");
  const ink = canvas.getContext("2d");

  const draw = () => {
    const width = capsule.offsetWidth;
    const height = capsule.offsetHeight;
    if (!lensMaps.length || !ink || !width || !height) return;

    canvas.width = width;
    canvas.height = height;
    const map = ink.createImageData(width, height);
    const halfW = width / 2;
    const halfH = height / 2;
    const radius = Math.min(halfW, halfH);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Signed distance to the capsule's edge, and the edge normal there.
        const px = x + 0.5 - halfW;
        const py = y + 0.5 - halfH;
        const qx = Math.abs(px) - (halfW - radius);
        const qy = Math.abs(py) - (halfH - radius);
        const ox = Math.max(qx, 0);
        const oy = Math.max(qy, 0);
        const reach = Math.hypot(ox, oy);
        const depth = radius - reach - Math.min(Math.max(qx, qy), 0);

        let nx = 0;
        let ny = 0;
        if (reach > 0) {
          nx = (ox / reach) * Math.sign(px);
          ny = (oy / reach) * Math.sign(py);
        } else if (qx > qy) nx = Math.sign(px);
        else ny = Math.sign(py);

        // 0 at the rim, 1 one bezel in. The shift eases out over the whole
        // bezel; the bezel itself stays solid for its outer fifth, then fades.
        const t = Math.min(1, Math.max(0, depth / BEZEL));
        const bend = (1 - t) ** 2;
        const fade = Math.min(1, Math.max(0, (t - 0.2) / 0.8));
        const i = (y * width + x) * 4;
        map.data[i] = 128 + 127 * nx * bend;
        map.data[i + 1] = 128 + 127 * ny * bend;
        map.data[i + 2] = 255 * (1 - fade * fade * (3 - 2 * fade));
        map.data[i + 3] = 255;
      }
    }

    ink.putImageData(map, 0, 0);
    const href = canvas.toDataURL();
    for (const lensMap of lensMaps) {
      lensMap.setAttribute("href", href);
      lensMap.setAttribute("width", String(width));
      lensMap.setAttribute("height", String(height));
    }
    for (const kind of Object.keys(grades)) capsule.style.setProperty(`--glass-lens-${kind}`, `url(#${id}-${kind})`);
    capsule.setAttribute("data-refract", "");
  };

  new ResizeObserver(draw).observe(capsule);
}
