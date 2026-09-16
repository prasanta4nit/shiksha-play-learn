import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { StarShape } from "@/components/ui/Decor";
import { school } from "@/data/school";

export default function AdmissionCTA() {
  const whatsappHref = `https://wa.me/${school.contact.whatsappNumber}?text=${encodeURIComponent(
    school.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tangerine-500 via-tangerine-500 to-blossom-500 py-16 sm:py-20">
      <StarShape className="absolute left-[8%] top-8 h-6 w-6 text-white/60 animate-float" />
      <StarShape className="absolute right-[12%] bottom-10 h-8 w-8 text-white/50 animate-float-slower" />

      <Container className="relative text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Give Your Child a Joyful Start
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Discover a place where children can play, explore, learn and grow
          with confidence.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#admissions" variant="secondary">
            Enquire About Admission
          </Button>
          <Button href={`tel:${school.contact.phoneDial}`} variant="outline">
            Call Us
          </Button>
          <Button href={whatsappHref} variant="whatsapp">
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
