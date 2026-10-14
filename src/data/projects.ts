/**
 * Projects shown in the homepage work section, in display order.
 *
 * The order mirrors the Figma frame: a full-width feature, then a pair, then a
 * feature, then a pair. In each pair the first entry is the left card (image
 * above its caption) and the second is the right card (caption above its image).
 *
 * `image` files live in `public/projects/` and are the poster exports from the
 * design file, saved as JPEG at their export size. To update one, replace the
 * file keeping its name, or point `src` somewhere else.
 *
 * `href` is a placeholder for every project until case-study pages and video
 * links exist.
 *
 * Set `uncropped` when the image carries lettering of its own, like a release
 * poster: the card then shows all of it (see `ProjectCard`), so give the image's
 * pixel size as `width` and `height`. Such a project can also give a `still`, a
 * frame without lettering for places that crop the picture small (the About
 * section's cards).
 */
export type ProjectAction = "case-study" | "watch";

export interface Project {
  /** Two-digit label shown as "[ 01 ]". */
  number: string;
  /** Short name, used for accessible link labels. */
  title: string;
  /** Caption shown under or over the poster. */
  description: string;
  action: ProjectAction;
  href: string;
  image: { src: string; alt: string; width?: number; height?: number } | null;
  /** Show the whole image: no crop, no parallax zoom, caption underneath. */
  uncropped?: boolean;
  /** A frame without lettering, used instead of `image` where it is cropped small. */
  still?: { src: string; alt: string };
}

export const projects: Project[] = [
  {
    number: "01",
    title: "The Scroll That Stole Time",
    description:
      "The Scroll That Stole Time: A debut short film shot in Guwahati, exploring how social media quietly steals our lives away. Currently in film festival circuit.",
    action: "case-study",
    href: "/projects",
    image: {
      src: "/projects/the-scroll-that-stole-time.jpg",
      alt: "Poster for The Scroll That Stole Time: Phillips Neog lit by his phone, with the FICIMAD 2026 Best Essay Film and FICSAMAS 2025 Official Selection laurels",
      width: 1600,
      height: 900,
    },
    uncropped: true,
    still: {
      src: "/projects/the-scroll-that-stole-time-still.jpg",
      alt: "Still from The Scroll That Stole Time",
    },
  },
  {
    number: "03",
    title: "Be The Change",
    description:
      "Documentary: Balipara Foundation, Be The Change. Portraits of hope, change and resilience across Nagaland’s valleys.",
    action: "watch",
    href: "/projects",
    image: {
      src: "/projects/be-the-change.jpg",
      alt: "Still from Be The Change",
    },
  },
  {
    number: "02",
    title: "Rural Futures Fellowship",
    description:
      "Documentary: Balipara Foundation RuFu Fellowship Foundation. A journey into grassroots rewilding the North East Indian region and ecological storytelling.",
    action: "watch",
    href: "/projects",
    image: {
      src: "/projects/rural-futures-fellowship.jpg",
      alt: "Still from The Rural Futures Fellowship",
    },
  },
  {
    number: "04",
    title: "Waikato Museum Showcase",
    description:
      "Waikato Museum Showcase (Edited in New Zealand). A highlight reel for one of New Zealand’s leading art and cultural museums in the district of Waikato.",
    action: "case-study",
    href: "/projects",
    image: {
      src: "/projects/waikato-museum-showcase.jpg",
      alt: "Still from the Waikato Museum showcase",
    },
  },
  {
    number: "06",
    title: "Majuli Music Festival 2023",
    description:
      "Majuli Music Festival 2023 Cinematic Trailer. A celebration of culture, music, and community through immersive visuals.",
    action: "watch",
    href: "/projects",
    image: {
      src: "/projects/majuli-music-festival.jpg",
      alt: "Still from the Majuli Music Festival trailer",
    },
  },
  {
    // The design file repeats project 01's caption here, so the description is
    // only the name from the poster until the real caption is written.
    number: "05",
    title: "River City Sound Sessions",
    description: "River City Sound Sessions.",
    action: "watch",
    href: "/projects",
    image: {
      src: "/projects/project-05.jpg",
      alt: "Title card for River City Sound Sessions",
    },
  },
];
