import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section id="events" className="section-scroll-offset bg-sun-100/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Events & Celebrations"
          title="Learning, Celebrating & Creating Memories"
          subtitle="From festivals to annual day, our children celebrate every occasion with joy, colour and creativity."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.name} {...event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
