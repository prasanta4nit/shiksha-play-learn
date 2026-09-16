import { IconCard } from "@/data/content";

const colorClasses: Record<IconCard["color"], string> = {
  sky: "bg-sky-100 text-sky-700",
  sun: "bg-sun-200 text-sun-700",
  tangerine: "bg-tangerine-100 text-tangerine-700",
  mint: "bg-mint-200 text-mint-700",
  blossom: "bg-blossom-200 text-blossom-700",
};

export default function FeatureCard({ icon, title, description, color }: IconCard) {
  return (
    <div className="group rounded-3xl bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${colorClasses[color]}`}
      >
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}
