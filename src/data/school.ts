// Central school configuration.
// Replace placeholder values (marked with TODO) with verified school details
// before launch. Keeping this separate from UI components means the whole
// site can be re-branded or corrected by editing this one file.

export const school = {
  name: "Shiksha Play & Learn Pre-School",
  shortName: "Shiksha Play & Learn",
  brandLine: "PLAY • LEARN • GROW",
  tagline: "Where Little Minds Play, Learn & Grow",
  subTagline: "A joyful beginning to your child's learning journey.",

  logo: {
    line1: "Shiksha",
    line2: "PLAY & LEARN",
    line3: "PRE-SCHOOL",
    image: "/images/logo.jpg",
  },

  location: {
    area: "Dugda",
    city: "Bokaro",
    state: "Jharkhand",
    country: "India",
    // Sourced from the school's own promotional banner.
    fullAddress: "Budhidih, Roadside, Near BCCL Colony, Dugda, Bokaro, Jharkhand",
    // TODO: replace with verified PIN code
    postalCode: "",
    // TODO: replace with exact coordinates (currently an approximate Dugda, Bokaro location) for pinpoint map + local SEO schema accuracy
    geo: {
      latitude: 23.8103,
      longitude: 86.1614,
    },
    // TODO: replace with a precise Google Maps embed/place link once the exact pin is confirmed
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Budhidih,+Near+BCCL+Colony,+Dugda,+Bokaro,+Jharkhand&output=embed",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Budhidih,+Near+BCCL+Colony,+Dugda,+Bokaro,+Jharkhand",
  },

  contact: {
    // TODO: temporary contact number — replace with the school's real number before launch.
    phoneDisplay: "+91 96434 27131",
    phoneDial: "+919643427131",
    whatsappNumber: "919643427131",
    whatsappPrefilledMessage:
      "Hello, I would like to know more about admission at Shiksha Play & Learn Pre-School.",
    // TODO: replace with the school's real email address
    email: "info@shikshapreschool.in",
    timings: "Monday – Saturday, 9:00 AM – 12:30 PM",
    website: "https://www.shikshapreschool.in",
  },

  social: {
    youtube: "https://www.youtube.com/@playschooldugda",
    // TODO: add real Facebook page URL
    facebook: "",
    // TODO: add real Instagram profile URL
    instagram: "",
    // TODO: add real Google Business Profile review link
    googleReviews: "",
  },

  seo: {
    titleDefault:
      "Shiksha Play & Learn Pre-School | Play School in Dugda, Bokaro",
    titleTemplate: "%s | Shiksha Play & Learn Pre-School",
    description:
      "Shiksha Play & Learn Pre-School in Dugda, Bokaro, Jharkhand offers a safe, caring and play-based preschool experience for Play Group, Nursery, LKG and UKG. Where little minds play, learn and grow.",
    keywords: [
      "Shiksha Play & Learn Pre-School",
      "Shiksha Play & Learn Dugda",
      "Shiksha Play School Dugda",
      "Play School in Dugda",
      "Preschool in Dugda",
      "Play School in Bokaro",
      "Preschool in Bokaro",
      "Nursery School in Dugda",
      "Kindergarten in Dugda",
    ],
  },

  founded: undefined as number | undefined, // TODO: set founding year if publicly stated
};

export type School = typeof school;
