/**
 * The chapters of The Scroll That Stole Time's project page (the third section,
 * `ProjectChapters`), in reading order. Each chapter is one pointer in the sticky
 * list beside the text.
 *
 * `blocks` run top to bottom: a string is a paragraph, an object is a picture.
 * Pictures live in `public/projects/the-scroll-that-stole-time/chapters/`; to
 * swap one, replace the file keeping its name, or point `src` at a new one.
 *
 * Only chapter 1's text is from the new design. Chapters 2 to 7 carry stand-in
 * text, the matching passages of the studio's 2025 case study on the old site,
 * until the design's own copy arrives. Every picture is a stand-in too: frames
 * from that case study (the design's chapter 1 picture is a market scene).
 */
export interface ChapterImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Chapter {
  /** Anchor id, also used by the pointer that links to it. */
  id: string;
  title: string;
  blocks: (string | ChapterImage)[];
}

const dir = "/projects/the-scroll-that-stole-time/chapters";

export const chapters: Chapter[] = [
  {
    id: "the-seed-of-an-idea",
    title: "The Seed of an Idea",
    blocks: [
      "Picture this: Guwahati, Assam—a place where cinema is talked about as much as tea and samosas. Growing up here, I was raised on the stories of the greats—The Good, The Bad, and The Ugly, Lawrence of Arabia, and Casablanca—thanks to my dad’s epic movie recaps. I was hooked, but it wasn’t until I caught myself endlessly scrolling through Instagram, stuck in the doomscrolling vortex, that the idea for my debut short film The Scroll that Stole Time really clicked.",
      {
        src: `${dir}/seed-of-an-idea.jpg`,
        alt: "Aarav eats at the table, eyes on his phone",
        width: 832,
        height: 372,
      },
      "The film is my answer to a question we all should probably ask ourselves: Are we controlling our phones, or are they controlling us? Armed with nothing but my Panasonic Lumix S5iiX, my DJI Mini 4 Pro drone, and a budget of ₹0 (yes, you read that right), I dove into this film with more passion than money. And trust me, passion is free!",
    ],
  },
  {
    id: "the-films-concept",
    title: "The Film’s Concept",
    blocks: [
      "At its core, this film questions our society’s relationship with technology. Aarav’s day unfolds in a sequence of digital distractions, forcing him—and hopefully the audience—to question who’s really in control. When Aarav locks his phone and finally breathes in his surroundings, it’s a small, but meaningful rebellion against a life controlled by screens.",
      {
        src: `${dir}/films-concept.jpg`,
        alt: "Aarav in a pub, staring into his phone",
        width: 1600,
        height: 711,
      },
      "The film wraps with a final twist, introducing Aarav’s doppelgänger. Is he free, or is he still in a larger system? It’s a mystery, one that leaves us pondering if true freedom from our devices is ever achievable.",
    ],
  },
  {
    id: "cinematic-inspirations-and-style",
    title: "Cinematic Inspirations and Style",
    blocks: [
      "Days before filming, I stumbled onto a video essay about Wong Kar-wai’s Chungking Express, and it led me to watch the entire film in awe. It hit me: maybe I didn’t need meticulous plans or a full crew (it helps to have a crew!). Wong’s style of raw, on-the-spot filming resonated deeply. So, we went guerrilla-style, capturing unplanned shots and raw emotion wherever we could find it. The market scenes, dream sequences, and glitchy effects were inspired by this approach, adding a surreal twist to Aarav’s journey from reality into the digital maze.",
      {
        src: `${dir}/cinematic-inspirations.jpg`,
        alt: "Close-up of Aarav in a café, in faded sepia",
        width: 981,
        height: 456,
      },
    ],
  },
  {
    id: "improvisation",
    title: "Improvisation",
    blocks: [
      "Initially, the script featured a young woman trapped in social media scroll-land. But plans changed when I faced the small hurdle of… a lack of locations, cast, and budget. The local mall permissions? Didn’t pan out. The Instagram-recruited actress? Got busy. Enter Phillips Neog, a 9-to-5 pro who knows his way around a camera and, thankfully, my script. Thus, Aarav, a man in his 30s, took over the storyline. With a quick rewrite and a shift from malls to local markets and lakes, The Scroll that Stole Time became an improvised love letter to Guwahati.",
      {
        src: `${dir}/improvisation.jpg`,
        alt: "Aarav sits on the rocks under a lone tree by the lake",
        width: 981,
        height: 438,
      },
      "Improvisation quickly became my middle name. Armed with my dad’s shoes, a few natural light sources, and Phillips’s expressive talents, we set out to capture Aarav’s descent into the digital void. The result? A series of scenes as spontaneous as they were soul-searching.",
    ],
  },
  {
    id: "the-production-process",
    title: "The Production Process",
    blocks: [
      "Imagine creating a film with no crew, no lighting, and no snack budget. I wore many hats on this shoot—director, editor, costume designer (ironing shirts, anyone?), and chief snack provider. Natural light became my best friend, and my editing skills became my safety net. My toolkit: my trusty Panasonic Lumix S5iiX, DJI Mini 4 Pro, and a willingness to do whatever it took, even if that meant ironing Phillips’s shirt and offering my own shirt and my brother’s jacket.",
      {
        src: `${dir}/production-process.jpg`,
        alt: "Drone view over the lake, a lone boat on the water",
        width: 981,
        height: 435,
      },
      "Budget limitations? They’re the mother-in-law of invention. Turns out, when your budget is tight, creativity flows. When Phillips wore white on a grey day that screamed “no contrast,” I quickly improvised, lending him my own shirt to bring out the colors in post.",
    ],
  },
  {
    id: "themes-explored",
    title: "Themes Explored",
    blocks: [
      "One thing I wanted to highlight was Guwahati’s blend of natural beauty and urban life. Each location—whether it was Chandubi Lake or a bustling local café—contrasts sharply with Aarav’s endless scrolling. The peaceful river represents real life, flowing by as Aarav sits still, lost in a digital storm. The choice of these spots wasn’t just about convenience; they reflect how we often overlook the beauty around us while we’re glued to our screens.",
      {
        src: `${dir}/themes-explored.jpg`,
        alt: "Aarav, seen from behind, faces a wall of bookshelves",
        width: 981,
        height: 438,
      },
    ],
  },
  {
    id: "post-production",
    title: "Post-Production",
    blocks: [
      "As I submit this to film festivals, I’m excited to see how it resonates with viewers. Will people feel the pull to disconnect, even if for a moment? If I’ve learned anything from Aarav’s journey, it’s that sometimes, the real magic happens not on the screen but in the world around us.",
      {
        src: `${dir}/post-production.jpg`,
        alt: "Aarav lies in the dark, his face lit blue",
        width: 806,
        height: 360,
      },
      "The Scroll that Stole Time is more than just a film; it’s a small wake-up call. If one person puts down their phone mid-scroll and glances up at the world, I’ll consider it a win. I hope this film offers a bit of humor, a touch of introspection, and maybe—just maybe—a reason to think twice before diving into the next reel.",
    ],
  },
];
