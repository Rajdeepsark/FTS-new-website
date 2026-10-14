/**
 * Services listed in the homepage services section, in display order: from the
 * idea (directing, script, locations) through the shoot and post-production to
 * platform content, commercial work and weddings. Names and descriptions are the
 * studio's own wording.
 *
 * `image` files live in `public/services/` in the 1100 × 701 shape of the design's
 * 342 × 218 frame (1100 wide where the source allows, smaller otherwise). They are
 * stand-ins: the studio's own photographs, and crops of its project stills and of
 * the hero art (weddings). To change one, replace the file keeping its name.
 */
export interface Service {
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export const services: Service[] = [
  {
    name: "Directing",
    description:
      "Every project runs from idea to final cut under one clear vision, covering performance, pacing and visual tone throughout. Nothing is handed off halfway, so the story stays consistent from the first script read to the final grade.",
    image: { src: "/services/directing.jpg", alt: "Still from The Scroll That Stole Time" },
  },
  {
    name: "Scriptwriting & Story Development",
    description:
      "Scripts and story outlines for documentaries, short films and branded content are built from a real idea, not a template. Existing scripts also get shaped and tightened, with structure and dialogue refined before the shoot begins.",
    image: {
      src: "/services/scriptwriting.jpg",
      alt: "A man in front of framed paintings, from the Waikato Museum showcase",
    },
  },
  {
    name: "Location Scouting",
    description:
      "Locations are scouted and locked well before a shoot, with light, sound, access and permissions worked out in advance. Good locations save a production, so scouting is treated as part of the script, not an afterthought.",
    image: { src: "/services/location-scouting.jpg", alt: "A man looking out over misty hills, from Be The Change" },
  },
  {
    name: "Cinematography / Shooting",
    description:
      "Camera work covers everything from handheld run-and-gun documentary shoots to controlled, planned commercial productions. Strong frames come together quickly, even with limited light, time or crew.",
    image: { src: "/services/cinematography.jpg", alt: "A singer and a band on stage at the Majuli Music Festival" },
  },
  {
    name: "Drone Photography & Videography",
    description:
      "A DJI Mini 4 Pro brings aerial shots that add scale and context, whether it’s a landscape, a festival crowd or a building. Drone footage is used with intent, only where it genuinely adds to the story.",
    image: { src: "/services/drone.jpg", alt: "The sun setting over a lake and hills" },
  },
  {
    name: "Photography",
    description:
      "Stills work runs alongside video, covering behind-the-scenes documentation, posters, portraits and event coverage. The same eye for light and composition carries across both formats.",
    image: { src: "/services/photography.jpg", alt: "A crowd on a hillside above a festival ground lit up at night" },
  },
  {
    name: "Editing",
    description:
      "All editing happens in-house, cut for rhythm and story rather than simply trimmed together. Short social cuts and full documentaries alike are finished in 4K, with clean, broadcast-ready exports.",
    image: { src: "/services/editing.jpg", alt: "A grid of stills from the Majuli Music Festival trailer" },
  },
  {
    name: "Color Grading",
    description:
      "Every project is graded in DaVinci Resolve for a consistent, cinematic look. Color is treated as a creative choice, not just a technical fix, since it shapes a film’s mood as much as anything else.",
    image: {
      src: "/services/color-grading.jpg",
      alt: "Phillips Neog lit by coloured light from his phone, from The Scroll That Stole Time",
    },
  },
  {
    name: "Sound Design & Audio Post",
    description:
      "The audio layer of a film is built through sound design and mixing so it feels immersive rather than simply watchable. Clean, balanced sound carries as much weight as the picture.",
    image: { src: "/services/sound-design.jpg", alt: "Musicians, cymbals and microphones at the Majuli Music Festival" },
  },
  {
    name: "Voice-over, Dubbing & Recording",
    description:
      "Voice-over and dubbing for documentaries, ads and narration-led projects are recorded, directed and produced end to end, with voice talent arranged when a project needs it.",
    image: { src: "/services/voice-over.jpg", alt: "A café seen through its window at night" },
  },
  {
    name: "YouTube & Instagram Content",
    description:
      "Short and long-form content is planned, shot and edited around how people actually watch on these platforms. Mobile-first framing and formats fit Reels, Shorts and long-form video.",
    image: { src: "/services/social.jpg", alt: "Traffic on a city road in the rain at night" },
  },
  {
    name: "Podcast Production",
    description:
      "Audio and video podcast production runs start to finish, from recording setup to final edit, including multi-cam setups and highlight clips for social media.",
    image: { src: "/services/podcast.jpg", alt: "A street lamp in heavy rain" },
  },
  {
    name: "Ad Films & Corporate Films",
    description:
      "Ad films and corporate videos are made to stay honest to a brand rather than feel like generic stock content, covering concept, scripting, shooting and edit.",
    image: { src: "/services/ad-films.jpg", alt: "Bare tree branches against a blue evening sky" },
  },
  {
    name: "Wedding Films",
    description:
      "Wedding films are shot and edited with a documentary eye, capturing real moments rather than staged ones.",
    image: { src: "/services/wedding.jpg", alt: "A hillside of red and pink flowers in golden light" },
  },
];
