import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { CloudShape, StarShape } from "@/components/ui/Decor";
import { heroFloatingCards } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-scroll-offset relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-cream pb-20 pt-14 sm:pb-28 sm:pt-20"
    >
      <CloudShape className="absolute left-[4%] top-16 h-10 w-16 text-white animate-float-slower opacity-90 sm:h-14 sm:w-24" />
      <CloudShape className="absolute right-[8%] top-8 h-8 w-14 text-white animate-float opacity-80 sm:h-12 sm:w-20" />
      <StarShape className="absolute right-[18%] top-40 h-5 w-5 text-sun-500 animate-float" />
      <StarShape className="absolute left-[12%] top-64 h-4 w-4 text-blossom-500 animate-float-slower" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold tracking-widest text-tangerine-700 shadow-soft">
            PLAY • LEARN • GROW
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Where Little Minds{" "}
            <span className="text-tangerine-500">Play, Learn</span> &amp;{" "}
            <span className="text-mint-700">Grow</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            At Shiksha Play &amp; Learn Pre-School, we provide a joyful and
            nurturing environment where children learn through play,
            creativity, exploration and meaningful experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#admissions" variant="primary">
              Enquire for Admission
            </Button>
            <Button href="#about" variant="secondary">
              Explore Our School
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Stylized illustrative artwork (not an actual photo of a real
              classroom or staff) used for hero visual impact. The About
              section below uses a real, unedited school photo. */}
          <PhotoPlaceholder
            src="/images/photos/hero-illustration.png"
            alt="Illustration of a joyful celebration at a Shiksha Play & Learn Pre-School classroom"
            icon="🧒🎉"
            gradient="from-sun-100 via-tangerine-100 to-blossom-100"
            className="aspect-[4/3] w-full rounded-[2.5rem] shadow-soft-lg"
          />

          <div className="absolute -left-4 -top-6 hidden w-44 animate-float rounded-2xl bg-white p-3 shadow-soft-lg sm:block">
            <FloatingCard {...heroFloatingCards[0]} />
          </div>
          <div className="absolute -right-4 top-10 hidden w-44 animate-float-slower rounded-2xl bg-white p-3 shadow-soft-lg sm:block">
            <FloatingCard {...heroFloatingCards[1]} />
          </div>
          <div className="absolute -bottom-6 left-6 hidden w-48 animate-float-slower rounded-2xl bg-white p-3 shadow-soft-lg md:block">
            <FloatingCard {...heroFloatingCards[2]} />
          </div>
          <div className="absolute -bottom-8 right-2 hidden w-48 animate-float rounded-2xl bg-white p-3 shadow-soft-lg lg:block">
            <FloatingCard {...heroFloatingCards[3]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <span className="text-sm font-bold text-ink">{label}</span>
    </div>
  );
}
