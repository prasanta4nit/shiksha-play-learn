export type SchoolEvent = {
  name: string;
  date: string; // display string, e.g. "November 14" or "TBA"
  description: string;
  icon: string;
  image?: string; // add a real photo path once available
};

// Sample event categories from the brand brief. Update dates and
// descriptions each year, and add new events as they're celebrated.
export const events: SchoolEvent[] = [
  {
    name: "Children's Day",
    date: "November 14",
    description: "A fun-filled day celebrating our little learners.",
    icon: "🎈",
    image: "/images/photos/childrens-day.jpg",
  },
  {
    name: "Independence Day",
    date: "August 15",
    description: "Flag hoisting and patriotic activities with our children.",
    icon: "🇮🇳",
    image: "/images/photos/independence-day-flag-hoisting.jpg",
  },
  {
    name: "Republic Day",
    date: "January 26",
    description: "Celebrating the day with songs, colours and activities.",
    icon: "🎊",
    image: "/images/photos/republic-day.jpg",
  },
  {
    name: "Janmashtami",
    date: "TBA",
    description: "Festive celebrations with costumes and stories.",
    icon: "🪈",
    image: "/images/photos/janmashtami-boys-1.jpg",
  },
  {
    name: "Holi",
    date: "TBA",
    description: "A joyful celebration of colours, safely enjoyed at school.",
    icon: "🎨",
  },
  {
    name: "Diwali",
    date: "TBA",
    description: "Diyas, rangoli and festive craft activities.",
    icon: "🪔",
    image: "/images/photos/diwali-classroom.jpg",
  },
  {
    name: "Christmas",
    date: "December 25",
    description: "Festive fun with songs, crafts and celebrations.",
    icon: "🎄",
    image: "/images/photos/christmas-boys.jpg",
  },
  {
    name: "Annual Day",
    date: "TBA",
    description: "Our children showcase a year of learning and fun.",
    icon: "🏆",
  },
  {
    name: "Sports Activities",
    date: "TBA",
    description: "Fun physical activities and friendly games.",
    icon: "🥇",
  },
  {
    name: "Fancy Dress",
    date: "TBA",
    description: "Children dress up and express their imagination.",
    icon: "👒",
    image: "/images/photos/independence-day-fancy-dress.jpg",
  },
  {
    name: "Teacher's Day",
    date: "September 5",
    description: "Celebrating and appreciating our wonderful teachers.",
    icon: "🍎",
    image: "/images/photos/teachers-day-cake.jpg",
  },
  {
    name: "Special Activity Days",
    date: "Throughout the year",
    description: "Themed days that add extra joy to learning.",
    icon: "🌈",
    image: "/images/photos/diwali-rangoli.jpg",
  },
];
