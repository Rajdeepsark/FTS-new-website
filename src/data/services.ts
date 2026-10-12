/**
 * Services listed in the homepage services section, in display order (the order
 * of the design file's list, top to bottom).
 *
 * `description` is stand-in copy: the design shows the section's intro sentence
 * under every service, so each line here was written to have something to change
 * as the list moves. Replace with the studio's own wording.
 *
 * `image` files live in `public/services/` at 1100 × 701 (the 342 × 218 frame of
 * the design). They are stand-ins too, cropped from the studio's own photographs
 * and one project poster. To change one, replace the file keeping its name.
 */
export interface Service {
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export const services: Service[] = [
  {
    name: "Voice-over/ Dubbing/Recording",
    description: "Voice-overs, dubbing and clean studio recording for films, ads and digital content.",
    image: { src: "/services/voice-over.jpg", alt: "A café seen through its window at night" },
  },
  {
    name: "Podcast Production",
    description: "Podcasts recorded, edited and mixed from start to finish, in audio or on camera.",
    image: { src: "/services/podcast.jpg", alt: "A street lamp in heavy rain" },
  },
  {
    name: "Drone Photo/videography",
    description: "Aerial photographs and footage that show a place, an event or a story from above.",
    image: { src: "/services/drone.jpg", alt: "The sun setting over a lake and hills" },
  },
  {
    name: "Photography",
    description: "Photography for brands, events, products and people, shot with a filmmaker’s eye.",
    image: { src: "/services/photography.jpg", alt: "A crowd on a hillside above a festival ground lit up at night" },
  },
  {
    name: "Documentary & Short films",
    description: "Documentaries and short films, carried from the first idea to the final cut.",
    image: { src: "/services/documentary.jpg", alt: "Still from The Scroll That Stole Time" },
  },
  {
    name: "Youtube & Instagram Content Creation",
    description: "Videos planned, shot and edited for YouTube and Instagram, made to fit the feed.",
    image: { src: "/services/social.jpg", alt: "Traffic on a city road in the rain at night" },
  },
  {
    name: "Ad Films & Corporate Films",
    description: "Ad films and corporate films that say clearly what a brand stands for.",
    image: { src: "/services/ad-films.jpg", alt: "Bare tree branches against a blue evening sky" },
  },
];
