import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
import { facilities } from "@/data/facilities";

export default function Facilities() {
  return (
    <section id="facilities" className="section-scroll-offset py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Facilities"
          title="A Safe & Happy Environment for Little Learners"
          subtitle="Every corner of our school is designed to keep children safe, engaged and comfortable."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.name} {...facility} />
          ))}
        </div>
      </Container>
    </section>
  );
}
