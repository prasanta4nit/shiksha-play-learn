import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section id="programs" className="section-scroll-offset bg-sky-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Programs"
          title="A Program for Every Stage of Early Learning"
          subtitle="Age-appropriate, play-based programs designed to help children grow with confidence, curiosity and joy."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.slug} {...program} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 text-base font-bold text-tangerine-500 hover:text-tangerine-700"
          >
            Explore Our Programs <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
