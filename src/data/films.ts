/**
 * The Films page's filmography, in its three tiers: the featured film, Selected
 * Work and More Work. Copy, years, credits and YouTube ids are from the Films
 * page of the studio's live site (flyingturtlestudio.in/films/, as of
 * 2026-10-17), and so are the stills, saved into `public/films/` at their
 * export size (about 1900px wide); each still's alt text was written for it.
 * The featured film shows its release poster instead, from `public/projects/`.
 * To swap a still, replace the file keeping its name, or point `src` elsewhere.
 *
 * `youtubeId` is the film's public video: pressing the still opens it in the
 * page's lightbox (`FilmLightbox`), and "Watch on YouTube" opens it on YouTube.
 * The featured film is still in festivals and has no public video, so its still
 * leads to its case study (`href`) and the page offers a private screener.
 */
export interface Film {
  title: string;
  year: string;
  /** Who did what: "Edited by Kaushik Sharma". */
  credit: string;
  logline: string;
  /** The film's public video on YouTube. */
  youtubeId?: string;
  /** Where the still leads when there is no public video. */
  href?: string;
  image: { src: string; alt: string; width: number; height: number };
}

/** A festival laurel on the featured film. */
export interface Laurel {
  /** "Winner", "Official Selection". */
  label: string;
  /** The award, or the festival when the laurel is a selection. */
  title: string;
  /** Festival and city, or city and country. */
  where: string;
}

/** The film's own page on YouTube. */
export const watchUrl = (youtubeId: string) => `https://www.youtube.com/watch?v=${youtubeId}`;

export const featured: Film & { note: string; laurels: Laurel[] } = {
  title: "The Scroll That Stole Time",
  year: "2025–26",
  credit: "Written, Produced, Directed, Shot & Edited by Kaushik Sharma",
  logline:
    "Aarav can’t stop scrolling, but the real problem isn’t the phone. It’s the quiet feeling that his time no longer belongs to him. A calm, unsettling short about attention in the modern world, shot on the streets and quiet corners of Guwahati.",
  note: "Currently in film festivals.",
  href: "/projects/the-scroll-that-stole-time",
  // The release poster, the same file as the case study's hero (it replaced the
  // live site's riverbank still on 2026-10-18). It carries lettering and the
  // laurels, so the page shows it whole at 16:9.
  image: {
    src: "/projects/the-scroll-that-stole-time.jpg",
    alt: "Poster for The Scroll That Stole Time: Phillips Neog lit by his phone, with the FICIMAD 2026 Best Essay Film and FICSAMAS 2025 Official Selection laurels",
    width: 1600,
    height: 900,
  },
  laurels: [
    { label: "Winner", title: "Best Essay Film", where: "FICIMAD 2026 · Madrid" },
    { label: "Official Selection", title: "FICSAMAS", where: "São Mateus do Sul · Brazil" },
  ],
};

/** Documentaries for the Balipara Foundation, and the two Majuli Music Festival films. */
export const selected: Film[] = [
  {
    title: "BPF RuFu Fellowship Film",
    year: "2022",
    credit: "Edited by Kaushik Sharma",
    logline:
      "A documentary made for the Balipara Foundation’s RuFu Fellowship, following grassroots rewilding and ecological restoration work across Northeast India.",
    youtubeId: "9zkik9m9oT8",
    image: {
      src: "/films/bpf-rufu-fellowship.jpg",
      alt: "Opening title card from the BPF RuFu Fellowship film. The words “The Rural Futures Fellowship” over a low aerial shot flying through a misty, sunlit pine forest.",
      width: 1906,
      height: 1068,
    },
  },
  {
    title: "Rural Futures Rewilding Award, Ivan Zhimomi, Nagaland",
    year: "2022",
    credit: "Edited by Kaushik Sharma",
    logline:
      "A portrait of Ivan Zhimomi of Sukhai village, who mobilized his community to build a network of conserved areas protecting forests and rivers from overhunting, destructive fishing and jhum-linked deforestation.",
    youtubeId: "CGLRG-IRJUE",
    image: {
      src: "/films/rural-futures-rewilding-award.jpg",
      alt: "Title card reading “Be The Change” over a man standing with his back to camera, looking out across forested hill ranges in Nagaland under a wide cloudy sky.",
      width: 1909,
      height: 1062,
    },
  },
  {
    title: "Majuli Music Festival Promo",
    year: "2022",
    credit: "Edited by Kaushik Sharma",
    logline:
      "A short cinematic promo for the Majuli Music Festival, capturing the culture, music and community of the river island.",
    youtubeId: "3PWUBCuddQc",
    image: {
      src: "/films/majuli-music-festival-promo.jpg",
      alt: "Still from the Majuli Music Festival promo. A singer performs mid-song at a microphone under a beam of stage light, flanked by a guitarist and a drum kit.",
      // Cropped from the live site export (1918 x 924) to the left 1480 x 880: the
      // export was a player screenshot with its controls along the right and bottom.
      width: 1480,
      height: 880,
    },
  },
  {
    title: "Cinematic Majuli Music Festival",
    year: "2025",
    credit: "Edited by Kaushik Sharma",
    logline:
      "A cinematic trailer capturing the Majuli Music Festival’s atmosphere of culture, music and community through immersive visuals.",
    youtubeId: "MFUilYQx1RU",
    image: {
      src: "/films/cinematic-majuli-music-festival.jpg",
      alt: "Still from the Cinematic Majuli Music Festival trailer. A dancer in a cream and red mekhela sador raises both arms mid-performance, lit from behind by stage spotlights.",
      width: 1903,
      height: 1066,
    },
  },
];

/** Campaign films, Wintec student productions, and a motorcycle ride through Meghalaya. */
export const more: Film[] = [
  {
    title: "Project WASH",
    year: "2016",
    credit: "Edited by Kaushik Sharma",
    logline:
      "A record of water, sanitation and hygiene lectures delivered to nearly 1,000 school children across rural and urban Assam, using Project WET curriculum material in partnership with World Merit and JONAK.",
    youtubeId: "mmmDR0JjfaI",
    image: {
      src: "/films/project-wash.jpg",
      alt: "Title card from Project WASH. Three schoolchildren in blue uniforms wash their hands at an outdoor bamboo tap stand in Assam, with the words “Project WASH, Assam, India” overlaid.",
      width: 1912,
      height: 1072,
    },
  },
  {
    title: "The Refillution (RefillNZ)",
    year: "2019",
    credit: "Shot & Edited by Kaushik Sharma",
    logline:
      "A campaign film for RefillNZ, promoting refill stations in cafes and bars across New Zealand to cut single-use plastic at the source.",
    youtubeId: "M632RnKS6Pc",
    image: {
      src: "/films/the-refillution.jpg",
      alt: "Still from The Refillution. A cafe worker answers the on-screen question “Why do you support RefillNZ?” in front of a brightly coloured street mural.",
      width: 1912,
      height: 1063,
    },
  },
  {
    title: "Portrait of Waikato Museum",
    year: "2018",
    credit: "Sound Recordist, Sound Designer & Editing Supervisor, Kaushik Sharma",
    logline: "A highlight reel showcasing Waikato Museum, made as part of a Wintec student production.",
    youtubeId: "YHH0eG30mV8",
    image: {
      src: "/films/portrait-of-waikato-museum.jpg",
      alt: "Opening frame of Portrait of Waikato Museum. The museum’s black-and-white logo lockup, “Waikato Museum, Te Whare Taonga o Waikato”, centred on a plain white card.",
      width: 1911,
      height: 1069,
    },
  },
  {
    title: "River City Sound Sessions Vol. 7, Spark Week",
    year: "2018",
    credit: "Vision Mixer & Video Editor, Kaushik Sharma",
    logline: "A cinematic promo reel shot and edited for local indie bands in Hamilton, New Zealand.",
    youtubeId: "fZ_CwmvP2CY",
    image: {
      src: "/films/river-city-sound-sessions.jpg",
      alt: "Title card from River City Sound Sessions Vol. 7. The series’ pink and magenta bridge logo glowing against a black background.",
      width: 1906,
      height: 1057,
    },
  },
  {
    title: "Shillong to Cherrapunji on KTM ADV 390 S",
    year: "2026",
    credit: "Ridden, Shot & Edited by Kaushik Sharma",
    logline:
      "A motovlog following a ride from Shillong to Cherrapunji through Meghalaya’s misty hill roads, shot on drone and action cams.",
    youtubeId: "TcmDpIzY7N0",
    image: {
      src: "/films/shillong-to-cherrapunji.jpg",
      alt: "Rider’s-eye still from the Shillong to Cherrapunji motovlog. Handlebars and instrument cluster in the foreground, rain-slicked Meghalaya street traffic and shopfronts glowing blue at dusk ahead.",
      width: 1909,
      height: 1060,
    },
  },
];
