/**
 * Projects shown in the homepage work section, in display order.
 *
 * The order mirrors the Figma frame: a full-width feature, then a pair, then a
 * feature, then a pair. In each pair the first entry is the left card (image
 * above its caption) and the second is the right card (caption above its image).
 *
 * `image` files live in `public/projects/`. The current files are temporary
 * stills from the studio's own footage; replace them with the real posters,
 * keeping the file names, or point `src` somewhere else.
 *
 * `href` is a placeholder for every project until case-study pages and video
 * links exist.
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
  image: { src: string; alt: string } | null;
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
    // The design file repeats project 01's caption here; swap in the real
    // sixth project when it is decided.
    number: "05",
    title: "The Scroll That Stole Time",
    description:
      "The Scroll That Stole Time: A debut short film shot in Guwahati, exploring how social media quietly steals our lives away. Currently in film festival circuit.",
    action: "watch",
    href: "/projects",
    image: {
      src: "/projects/project-05.jpg",
      alt: "Still from The Scroll That Stole Time",
    },
  },
];
