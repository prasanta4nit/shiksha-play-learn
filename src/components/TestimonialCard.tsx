import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ name, role, quote, isPlaceholder }: Testimonial) {
  return (
    <div className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft">
      {isPlaceholder ? (
        <span className="absolute right-5 top-5 rounded-full bg-sun-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-sun-700">
          Placeholder
        </span>
      ) : null}
      <span className="text-3xl text-tangerine-300" aria-hidden>
        “
      </span>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft italic">
        {quote}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-lg text-sky-700">
          🧑‍👩‍👦
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          {role ? <p className="text-xs text-ink-soft">{role}</p> : null}
        </div>
      </div>
    </div>
  );
}
