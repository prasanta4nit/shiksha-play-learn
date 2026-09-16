import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";
import { school } from "@/data/school";

export default function Testimonials() {
  return (
    <section className="bg-blossom-100/40 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Parents Say" />

        <div className="mt-10 rounded-2xl bg-white/70 p-4 text-center text-sm text-ink-soft">
          The testimonials below are placeholders and will be replaced with
          genuine parent reviews once shared with us.
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>

        {school.social.googleReviews ? (
          <div className="mt-10 text-center">
            <Button href={school.social.googleReviews} variant="secondary">
              Google Reviews →
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
