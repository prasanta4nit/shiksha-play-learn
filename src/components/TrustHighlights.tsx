import Container from "@/components/ui/Container";
import FeatureCard from "@/components/FeatureCard";
import { trustHighlights } from "@/data/content";

export default function TrustHighlights() {
  return (
    <section className="relative -mt-10 sm:-mt-14">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
