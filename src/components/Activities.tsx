import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import { activities } from "@/data/activities";

export default function Activities() {
  return (
    <section id="activities" className="section-scroll-offset bg-mint-100/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Activities"
          title="Every Day is an Opportunity to Learn"
          subtitle="From art and music to outdoor play and storytelling, our children explore, create and discover every single day."
        />
      </Container>

      <div className="mt-10 overflow-x-auto pb-4">
        <div className="no-scrollbar flex snap-x gap-5 px-5 sm:px-8" style={{ width: "max-content" }}>
          {activities.map((activity) => (
            <ActivityCard key={activity.name} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
