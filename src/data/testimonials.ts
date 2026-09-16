export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  isPlaceholder: boolean;
  photo?: string;
};

// IMPORTANT: These are clearly-marked PLACEHOLDER testimonials only.
// Do not present them as real parent reviews. Replace `isPlaceholder: false`
// and the content with genuine, consented parent testimonials once supplied.
export const testimonials: Testimonial[] = [
  {
    name: "Parent Name",
    role: "Parent of a Nursery student",
    quote:
      "Placeholder testimonial — replace with a real parent review once available.",
    isPlaceholder: true,
  },
  {
    name: "Parent Name",
    role: "Parent of a Play Group student",
    quote:
      "Placeholder testimonial — replace with a real parent review once available.",
    isPlaceholder: true,
  },
  {
    name: "Parent Name",
    role: "Parent of a UKG student",
    quote:
      "Placeholder testimonial — replace with a real parent review once available.",
    isPlaceholder: true,
  },
];
