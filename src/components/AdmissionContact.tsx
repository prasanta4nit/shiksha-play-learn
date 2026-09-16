import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { school } from "@/data/school";

export default function AdmissionContact() {
  const whatsappHref = `https://wa.me/${school.contact.whatsappNumber}?text=${encodeURIComponent(
    school.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section id="admissions" className="section-scroll-offset bg-mint-100/40 py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          eyebrow="Admissions"
          title="Contact Us for Admission"
          subtitle="Call, WhatsApp or visit us directly — our team will be happy to help with admission."
        />

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-soft-lg sm:p-10">
          <div className="flex flex-col items-center gap-2 text-ink">
            <span className="text-2xl" aria-hidden>
              📞
            </span>
            <p className="text-xl font-bold">{school.contact.phoneDisplay}</p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 text-ink-soft">
            <span className="text-2xl" aria-hidden>
              📍
            </span>
            <p className="max-w-sm">{school.location.fullAddress}</p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`tel:${school.contact.phoneDial}`} variant="primary">
              Call Now
            </Button>
            <Button href={whatsappHref} variant="whatsapp">
              WhatsApp Us
            </Button>
            <Button href={school.location.googleMapsDirectionsUrl} variant="secondary">
              Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
