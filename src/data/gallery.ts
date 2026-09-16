export type GalleryCategory =
  | "All"
  | "Classroom"
  | "Activities"
  | "Events"
  | "Celebrations"
  | "Outdoor";

export type GalleryImage = {
  id: string;
  category: Exclude<GalleryCategory, "All">;
  alt: string;
  src?: string; // add real photo path under /public/images/gallery
  colorFrom: string;
  colorTo: string;
};

// Real photographs from Shiksha Play & Learn Pre-School. Add more by
// dropping files under /public/images/photos and adding an entry with a
// `src`. Any entry without `src` falls back to a soft placeholder tile.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Classroom", alt: "Children with a Happy Diwali poster in the classroom", src: "/images/photos/diwali-classroom.jpg", colorFrom: "from-sky-100", colorTo: "to-sky-300" },
  { id: "g2", category: "Classroom", alt: "Children and teachers indoors during Teacher's Day", src: "/images/photos/teachers-day-group-2.jpg", colorFrom: "from-blossom-100", colorTo: "to-blossom-300" },
  { id: "g3", category: "Activities", alt: "Rangoli craft activity", src: "/images/photos/diwali-rangoli.jpg", colorFrom: "from-mint-100", colorTo: "to-mint-300" },
  { id: "g4", category: "Events", alt: "Teacher's Day celebration with teachers and children", src: "/images/photos/teachers-day-group-1.jpg", colorFrom: "from-sun-100", colorTo: "to-sun-300" },
  { id: "g5", category: "Events", alt: "Teacher's Day cake", src: "/images/photos/teachers-day-cake.jpg", colorFrom: "from-tangerine-100", colorTo: "to-tangerine-300" },
  { id: "g6", category: "Celebrations", alt: "Janmashtami costumes", src: "/images/photos/janmashtami-boys-1.jpg", colorFrom: "from-blossom-100", colorTo: "to-blossom-300" },
  { id: "g7", category: "Celebrations", alt: "Janmashtami celebration with children in costume", src: "/images/photos/janmashtami-boys-2.jpg", colorFrom: "from-sky-100", colorTo: "to-sky-300" },
  { id: "g8", category: "Celebrations", alt: "Janmashtami celebration with girls in costume", src: "/images/photos/janmashtami-girls.jpg", colorFrom: "from-sun-100", colorTo: "to-sun-300" },
  { id: "g9", category: "Celebrations", alt: "Christmas celebration with Santa", src: "/images/photos/christmas-boys.jpg", colorFrom: "from-mint-100", colorTo: "to-mint-300" },
  { id: "g10", category: "Celebrations", alt: "Christmas celebration with children in festive outfits", src: "/images/photos/christmas-girls.jpg", colorFrom: "from-blossom-100", colorTo: "to-blossom-300" },
  { id: "g11", category: "Celebrations", alt: "Diwali celebration with rangoli and diyas", src: "/images/photos/diwali-celebration.jpg", colorFrom: "from-tangerine-100", colorTo: "to-tangerine-300" },
  { id: "g12", category: "Outdoor", alt: "Independence Day fancy dress in police and army costumes", src: "/images/photos/independence-day-fancy-dress.jpg", colorFrom: "from-sky-100", colorTo: "to-sky-300" },
  { id: "g13", category: "Outdoor", alt: "Independence Day flag hoisting ceremony", src: "/images/photos/independence-day-flag-hoisting.jpg", colorFrom: "from-sun-100", colorTo: "to-sun-300" },
  { id: "g14", category: "Events", alt: "Teacher's Day celebration with balloons and banner", src: "/images/photos/teachers-day-balloons.jpg", colorFrom: "from-mint-100", colorTo: "to-mint-300" },
  { id: "g15", category: "Celebrations", alt: "Children's Day fancy dress celebration", src: "/images/photos/childrens-day.jpg", colorFrom: "from-sun-100", colorTo: "to-sun-300" },
  { id: "g16", category: "Celebrations", alt: "Republic Day celebration with patriotic costumes", src: "/images/photos/republic-day.jpg", colorFrom: "from-tangerine-100", colorTo: "to-tangerine-300" },
  { id: "g17", category: "Celebrations", alt: "Christmas celebration with Santa and children", src: "/images/photos/christmas-group-2.jpg", colorFrom: "from-blossom-100", colorTo: "to-blossom-300" },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Classroom",
  "Activities",
  "Events",
  "Celebrations",
  "Outdoor",
];
