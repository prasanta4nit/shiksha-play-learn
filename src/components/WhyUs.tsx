import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import { whyUsCards } from "@/data/content";

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Shiksha Play & Learn?"
          title="Learning Should Feel Like Fun"
          subtitle="We create everyday moments of joy that help children build skills for a lifetime of learning."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsCards.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
