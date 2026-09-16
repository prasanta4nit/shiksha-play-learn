import Container from "@/components/ui/Container";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { aboutFocusAreas, aboutHighlights } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-scroll-offset py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <PhotoPlaceholder
          src="/images/photos/teachers-day-group-2.jpg"
          alt="Children and teachers at Shiksha Play & Learn Pre-School"
          icon="🏫🧒"
          gradient="from-mint-100 via-sky-100 to-blossom-100"
          className="aspect-[4/3] w-full rounded-[2.5rem] shadow-soft-lg lg:order-1"
        />

        <div>
          <span className="inline-block rounded-full bg-mint-200 px-4 py-1 text-sm font-semibold text-mint-700">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            A Happy Place to Begin Learning
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            At Shiksha Play &amp; Learn Pre-School, we believe children learn
            best when they feel happy, safe and free to explore. Our approach
            blends playful discovery with gentle guidance, giving every child
            room to grow at their own pace.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {aboutFocusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <span className="text-sm font-bold text-ink">{item.title}</span>
              </div>
            ))}
          </div>

          <a
            href="#programs"
            className="mt-8 inline-flex items-center gap-2 text-base font-bold text-tangerine-500 hover:text-tangerine-700"
          >
            Discover Our Approach <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
