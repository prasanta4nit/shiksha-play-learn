export type Program = {
  slug: string;
  name: string;
  ageRange: string;
  color: "sky" | "sun" | "tangerine" | "mint" | "blossom";
  icon: string; // emoji used as a lightweight, dependency-free icon
  focus: string[];
};

// Editable program catalogue. Update age ranges, focus areas or add new
// programs here — the Programs section renders directly from this list.
export const programs: Program[] = [
  {
    slug: "play-group",
    name: "Play Group",
    ageRange: "2 – 3 Years",
    color: "sky",
    icon: "🧸",
    focus: [
      "Social interaction",
      "Communication",
      "Motor skills",
      "Music and movement",
      "Play activities",
    ],
  },
  {
    slug: "nursery",
    name: "Nursery",
    ageRange: "3 – 4 Years",
    color: "sun",
    icon: "🖍️",
    focus: [
      "Early language",
      "Numbers",
      "Storytelling",
      "Creativity",
      "Activity-based learning",
    ],
  },
  {
    slug: "lkg",
    name: "LKG",
    ageRange: "4 – 5 Years",
    color: "mint",
    icon: "📖",
    focus: [
      "Early literacy",
      "Numeracy",
      "Communication",
      "Creative activities",
      "School readiness",
    ],
  },
  {
    slug: "ukg",
    name: "UKG",
    ageRange: "5 – 6 Years",
    color: "blossom",
    icon: "🎓",
    focus: [
      "Reading",
      "Writing",
      "Mathematics",
      "General awareness",
      "School readiness",
    ],
  },
];
