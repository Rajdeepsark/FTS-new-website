/**
 * Settings for the homepage camera bench (`CameraBench.astro`): the sliders, lens
 * profiles and colour sentiments it offers, and how a set of slider positions
 * turns into the picture's look. The component's markup and its script both
 * import this file, so the first paint and the live controls always agree.
 */

export type LevelId = "contrast" | "silver" | "exposure" | "grain";

/** Slider positions, each 0–100. */
export type Levels = Record<LevelId, number>;

/** The four sliders, top to bottom. */
export const levelControls: { id: LevelId; label: string }[] = [
  { id: "contrast", label: "Contrast scale" },
  { id: "silver", label: "Silver matrix" },
  { id: "exposure", label: "Exposure level" },
  { id: "grain", label: "Grain density" },
];

export interface Lens {
  id: string;
  label: string;
  /** Viewfinder read-outs: bottom-left aperture line and top-right frame rate line. */
  aperture: string;
  timing: string;
  /** Where the sliders settle when the lens is picked. */
  levels: Levels;
  /** Character of the glass itself, applied on top of the sliders. */
  sepia: number;
  saturate: number;
  /** Softness in px. */
  blur: number;
}

/**
 * The first lens is the one selected on load; its levels are the thumb positions
 * drawn in Figma (218 / 135 / 218 / 336px along a 436px travel).
 * Framing, zoom and vignette per lens are CSS, keyed on the id: see the
 * `[data-lens]` rules in the component.
 */
export const lenses: Lens[] = [
  {
    id: "anamorphic",
    label: "Anamorphic",
    aperture: "F/1.8 Prime",
    timing: "24 FPS // Shutter 1/48",
    levels: { contrast: 50, silver: 31, exposure: 50, grain: 77 },
    sepia: 0,
    saturate: 1,
    blur: 0,
  },
  {
    id: "prime-50",
    label: "50mm Prime",
    aperture: "F/1.4 Prime",
    timing: "24 FPS // Shutter 1/50",
    levels: { contrast: 58, silver: 6, exposure: 78, grain: 22 },
    sepia: 0,
    saturate: 1.08,
    blur: 0,
  },
  {
    id: "super-8",
    label: "Super 8",
    aperture: "F/2.8 Zoom",
    timing: "18 FPS // Shutter 1/40",
    levels: { contrast: 36, silver: 16, exposure: 72, grain: 100 },
    sepia: 0.3,
    saturate: 1.25,
    blur: 0.7,
  },
  {
    id: "noir",
    label: "Classic Noir",
    aperture: "F/4 Prime",
    timing: "24 FPS // Shutter 1/48",
    levels: { contrast: 84, silver: 100, exposure: 62, grain: 58 },
    sepia: 0,
    saturate: 1,
    blur: 0,
  },
];

/** Colour grades. The tint layers per sentiment are CSS, keyed on the id. */
export const sentiments: { id: string; label: string }[] = [
  { id: "cyan", label: "Anamorphic Cyan" },
  { id: "gold", label: "Warm Gold" },
  { id: "sepia", label: "Vintage Sepia" },
  { id: "none", label: "None" },
];

export interface Look {
  brightness: number;
  contrast: number;
  grayscale: number;
  /** Opacity of the grain layer. */
  grain: number;
}

/**
 * Slider positions → filter values.
 *   exposure  2.8 stops end to end. The middle of the slider is half brightness,
 *             which is the 50% #100E0E veil Figma lays over the photo; 86 shows
 *             the photo untouched and the top overexposes it by a third
 *   contrast  the middle is neutral, the ends are roughly ×0.55 and ×1.8
 *   silver    straight monochrome mix
 *   grain     eased so the low end stays fine
 */
export const look = ({ contrast, silver, exposure, grain }: Levels): Look => ({
  brightness: 0.5 * 2 ** (((exposure - 50) / 50) * 1.4),
  contrast: 2 ** (((contrast - 50) / 50) * 0.85),
  grayscale: silver / 100,
  grain: 0.42 * (grain / 100) ** 1.2,
});

/** ISO read-out for an exposure position; the middle of the slider is ISO 1200. */
const ISO_STOPS = [150, 200, 300, 400, 600, 800, 1200, 1600, 2400, 3200, 4800, 6400, 9600];
export const iso = (exposure: number) =>
  ISO_STOPS[Math.round((Math.min(100, Math.max(0, exposure)) / 100) * (ISO_STOPS.length - 1))];
