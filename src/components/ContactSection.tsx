import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { school } from "@/data/school";

export default function ContactSection() {
  const whatsappHref = `https://wa.me/${school.contact.whatsappNumber}?text=${encodeURIComponent(
    school.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section id="contact" className="section-scroll-offset py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="We'd Love to Meet You" />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-soft sm:p-9">
            <h3 className="font-display text-xl font-bold text-ink">{school.name}</h3>

            <ul className="mt-6 space-y-4 text-sm text-ink-soft">
              <ContactRow icon="📍" label={school.location.fullAddress} />
              <ContactRow icon="📞" label={school.contact.phoneDisplay} />
              <ContactRow icon="📱" label={`WhatsApp: ${school.contact.phoneDisplay}`} />
              <ContactRow icon="✉️" label={school.contact.email} />
              <ContactRow icon="🕘" label={school.contact.timings} />
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={school.location.googleMapsDirectionsUrl} variant="secondary">
                Get Directions
              </Button>
              <Button href={`tel:${school.contact.phoneDial}`} variant="primary">
                Call Now
              </Button>
              <Button href={whatsappHref} variant="whatsapp">
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              src={school.location.googleMapsEmbedUrl}
              className="h-80 w-full lg:h-full lg:min-h-[22rem]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing the location of ${school.name}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ icon, label }: { icon: string; label: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-lg" aria-hidden>
        {icon}
      </span>
      <span>{label}</span>
    </li>
  );
}
