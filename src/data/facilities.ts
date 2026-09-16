export type Facility = {
  name: string;
  description: string;
  icon: string;
};

// IMPORTANT: Only keep facilities that actually exist at Shiksha Play & Learn
// Pre-School. Remove or edit any item below that doesn't reflect reality —
// this list is shown to parents as factual information about the school.
export const facilities: Facility[] = [
  {
    name: "Child-Friendly Classrooms",
    description: "Bright and engaging learning spaces.",
    icon: "🏫",
  },
  {
    name: "Play Area",
    description: "A space for children to play, move and explore.",
    icon: "🤸",
  },
  {
    name: "Activity Areas",
    description: "Dedicated areas for creative and hands-on activities.",
    icon: "✂️",
  },
  {
    name: "Safe Environment",
    description: "A supervised and child-friendly environment.",
    icon: "🛡️",
  },
  {
    name: "Learning Resources",
    description: "Age-appropriate books, toys and learning materials.",
    icon: "🧸",
  },
  {
    name: "Clean & Hygienic Spaces",
    description: "A clean environment designed with young children in mind.",
    icon: "✨",
  },
];
