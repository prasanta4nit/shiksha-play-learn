// Central school configuration.
// Replace placeholder values (marked with TODO) with verified school details
// before launch. Keeping this separate from UI components means the whole
// site can be re-branded or corrected by editing this one file.

export const school = {
  name: "Shiksha Play & Learn Pre-School",
  shortName: "Shiksha Play & Learn",
  // Other names parents search for. The first is the exact spelling on the
  // school's Google Business Profile listing. Used in structured data so
  // search engines treat them all as this school.
  alternateNames: [
    "Shiksha Play & Learn Pre - School",
    "Shiksha Play School",
    "Shiksha Play & Learn",
    "Shiksha Play and Learn Pre-School",
    "Shiksha Pre-School",
  ],
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
    // Exact coordinates from the school's verified Google Maps place listing.
    geo: {
      latitude: 23.7458578,
      longitude: 86.1508101,
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=23.7458578,86.1508101&z=17&output=embed",
    // The school's own Google Maps place link (verified).
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/5Rk7WSNU6Lbkvy4K9",
    // Google Business Profile listing ("Shiksha Play & Learn Pre - School").
    googleBusinessProfileUrl: "https://maps.google.com/?cid=8446446555614477034",
  },

  contact: {
    // Sourced from the school's own promotional banner.
    phoneDisplay: "+91 70044 10918",
    phoneDial: "+917004410918",
    phoneAltDisplay: "+91 84348 65787",
    phoneAltDial: "+918434865787",
    // TODO: confirm which of the two numbers above is active on WhatsApp
    whatsappNumber: "917004410918",
    whatsappPrefilledMessage:
      "Hello, I would like to know more about admission at Shiksha Play & Learn Pre-School.",
    // TODO: add the school's real email address (hidden while empty)
    email: "",
    timings: "Monday – Saturday, 9:00 AM – 12:30 PM",
    openingHours: "Mo-Sa 09:00-12:30", // same as `timings`, schema.org format
    // Canonical URL for metadata, sitemap and robots (no trailing slash).
    // The domain on the school's banner (www.shikshapreschool.in) is not
    // registered, so pointing search engines at it keeps the site out of
    // results. Set NEXT_PUBLIC_SITE_URL in Vercel if a custom domain is added.
    website: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shiksha-play-learn.vercel.app",
  },

  social: {
    youtube: "https://www.youtube.com/@playschooldugda",
    // TODO: add real Facebook page URL
    facebook: "",
    instagram: "https://www.instagram.com/dugdasplps",
    // TODO: add real Google Business Profile review link
    googleReviews: "",
  },

  seo: {
    titleDefault:
      "Shiksha Play & Learn Pre-School | Shiksha Play School, Dugda, Bokaro",
    titleTemplate: "%s | Shiksha Play & Learn Pre-School",
    description:
      "Shiksha Play & Learn Pre-School (Shiksha Play School) in Dugda, Bokaro, Jharkhand offers a safe, caring and play-based preschool experience for Play Group, Nursery, LKG and UKG. Where little minds play, learn and grow.",
    keywords: [
      "Shiksha Play & Learn Pre-School",
      "Shiksha Play & Learn Pre - School",
      "Shiksha Play School",
      "Shiksha Play & Learn Dugda",
      "Shiksha Play School Dugda",
      "Shiksha Play School Bokaro",
      "Play School in Dugda",
      "Preschool in Dugda",
      "Play School in Bokaro",
      "Preschool in Bokaro",
      "Nursery School in Dugda",
      "Kindergarten in Dugda",
    ],
    // Google Search Console ownership token, rendered as a
    // <meta name="google-site-verification"> tag. Public by design.
    googleSiteVerification: "H3yI8Ql9Ia1B7cVrTaTrgsVAL2_mRigLeiQebIiNEKY",
  },

  founded: undefined as number | undefined, // TODO: set founding year if publicly stated
};

export type School = typeof school;
