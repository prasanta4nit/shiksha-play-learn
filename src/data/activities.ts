export type Activity = {
  name: string;
  icon: string;
  color: "sky" | "sun" | "tangerine" | "mint" | "blossom";
  image?: string; // path under /public — add real photos when available
};

// Replace `image` with a real photo path (e.g. "/images/activities/art.jpg")
// as soon as school photography for that activity is available.
export const activities: Activity[] = [
  { name: "Art & Craft", icon: "🎨", color: "blossom" },
  { name: "Drawing & Painting", icon: "🖌️", color: "sun" },
  { name: "Storytelling", icon: "📚", color: "sky" },
  { name: "Rhymes", icon: "🎤", color: "tangerine" },
  { name: "Dance", icon: "💃", color: "blossom" },
  { name: "Music", icon: "🎵", color: "mint" },
  { name: "Indoor Games", icon: "🧩", color: "sun" },
  { name: "Outdoor Play", icon: "🏃", color: "sky" },
  { name: "Clay Activities", icon: "🏺", color: "tangerine" },
  { name: "Role Play", icon: "🎭", color: "mint", image: "/images/photos/janmashtami-girls.jpg" },
  { name: "Educational Games", icon: "🧠", color: "blossom" },
  { name: "Nature Activities", icon: "🌱", color: "mint" },
  { name: "Festival Celebrations", icon: "🎉", color: "sun", image: "/images/photos/diwali-celebration.jpg" },
  { name: "Fancy Dress", icon: "👑", color: "blossom", image: "/images/photos/independence-day-fancy-dress.jpg" },
  { name: "Special Days", icon: "⭐", color: "sky" },
];
