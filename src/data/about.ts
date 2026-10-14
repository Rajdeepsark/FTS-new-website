/**
 * The About page's lists: the founder's training and career, awards, and press.
 * Copy is word for word from the studio's live site (flyingturtlestudio.in/about/,
 * as of 2026-10-14); press links checked the same day.
 */

export interface CareerFact {
  label: string;
  /** One entry per line. */
  lines: string[];
  /** A quieter line under the others. */
  note?: string;
}

export const career: CareerFact[] = [
  { label: "Trained at", lines: ["Whistling Woods International", "Waikato Institute of Technology (Wintec)"] },
  { label: "Edited for", lines: ["Doordarshan", "Mukta Arts", "Māori Television"] },
  { label: "Based in", lines: ["Guwahati, Assam, India"], note: "Working worldwide, remote and on location." },
];

export interface Award {
  year: string;
  title: string;
  /** Who gave it, and where. */
  from: string;
  /** Won by The Scroll That Stole Time; the page links the film's case study. */
  forScroll?: boolean;
  note?: string;
}

export const awards: Award[] = [
  {
    year: "2026",
    title: "Best Essay Film (Short Movies)",
    from: "Festival Internacional de Cine Independiente de Madrid (FICIMAD) 2026, Spain.",
    forScroll: true,
    note: "Presented by festival director Tomás Pérez Torrella; the film was featured in FICIMAD’s official 2026 magazine, described as made “with humility, craftsmanship, and love,” with its style compared to a Black Mirror-like narrative set in Assam.",
  },
  {
    year: "2025",
    title: "Official Selection",
    from: "Festival Internacional de Cinema de São Mateus do Sul (FICSAMAS), Brazil.",
    forScroll: true,
  },
  {
    year: "2019",
    title: "Images and Sound Award for Excellence in Editing",
    from: "Waikato Institute of Technology (Wintec), New Zealand.",
  },
  {
    year: "2018",
    title: "Nominated, International Adult Learner Award",
    from: "Waikato Institute of Technology (Wintec), New Zealand.",
  },
];

export interface PressItem {
  outlet: string;
  headline: string;
  href: string;
}

export const press: PressItem[] = [
  {
    outlet: "The Assam Tribune",
    headline: "Guwahati filmmaker’s debut short movie wins top honour at Madrid film festival",
    href: "https://m.dailyhunt.in/news/india/english/the+assam+tribune-epaper-assamtri/guwahati+filmmakers+debut+short+movie+wins+top+honour+at+madrid+film+festival-newsid-n717060030",
  },
  {
    outlet: "GuwahatiPlus",
    headline: "Assam filmmaker Kaushik Sharma wins Best Essay Film award at Madrid International Film Festival",
    href: "https://www.guwahatiplus.com/assam/assam-filmmaker-kaushik-sharma-wins-best-essay-film-award-at-madrid-international-film-festival",
  },
  {
    outlet: "FICIMAD on Instagram",
    headline: "FICIMAD features the film and the win",
    href: "https://www.instagram.com/p/DaH_O2VoxsJ/",
  },
];
