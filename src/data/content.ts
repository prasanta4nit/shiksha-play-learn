export type IconCard = {
  icon: string;
  title: string;
  description: string;
  color: "sky" | "sun" | "tangerine" | "mint" | "blossom";
};

// Section 3 — Trust / Highlights
export const trustHighlights: IconCard[] = [
  {
    icon: "🧸",
    title: "Play-Based Learning",
    description: "Learning through fun, exploration and activities.",
    color: "sky",
  },
  {
    icon: "❤️",
    title: "Caring Environment",
    description: "A warm and supportive environment where every child matters.",
    color: "blossom",
  },
  {
    icon: "🎨",
    title: "Creative Development",
    description: "Encouraging imagination, creativity and curiosity.",
    color: "sun",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    description:
      "Supporting social, emotional, physical and cognitive development.",
    color: "mint",
  },
];

// Section 6 — Why Shiksha Play & Learn?
export const whyUsCards: IconCard[] = [
  { icon: "🎨", title: "Creativity", description: "Free expression through art, colours and imagination.", color: "blossom" },
  { icon: "🧠", title: "Early Learning", description: "Foundational skills built through engaging activities.", color: "sky" },
  { icon: "🎵", title: "Music & Movement", description: "Rhythm, songs and movement for joyful learning.", color: "mint" },
  { icon: "📚", title: "Stories & Rhymes", description: "Building language and imagination through storytelling.", color: "sun" },
  { icon: "🏃", title: "Active Play", description: "Physical activity that builds strength and confidence.", color: "tangerine" },
  { icon: "❤️", title: "Social & Emotional Development", description: "Learning to share, care and build friendships.", color: "blossom" },
];

// Section 4 — About highlights
export const aboutHighlights: { title: string; icon: string }[] = [
  { title: "Happy Learning", icon: "😊" },
  { title: "Caring Teachers", icon: "🧑‍🏫" },
  { title: "Fun Activities", icon: "🎉" },
  { title: "Child-Friendly Environment", icon: "🏡" },
];

export const aboutFocusAreas: string[] = [
  "Play",
  "Exploration",
  "Storytelling",
  "Art & craft",
  "Music and movement",
  "Social interaction",
  "Outdoor activities",
  "Creative expression",
  "Communication",
  "Confidence building",
];

// Section 2 — Hero floating cards
export const heroFloatingCards: { icon: string; label: string }[] = [
  { icon: "🎨", label: "Creative Learning" },
  { icon: "🧸", label: "Play-Based Learning" },
  { icon: "❤️", label: "Caring Environment" },
  { icon: "🌱", label: "Holistic Development" },
];
