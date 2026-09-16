import { Program } from "@/data/programs";

const colorClasses: Record<Program["color"], { badge: string; ring: string; icon: string }> = {
  sky: { badge: "bg-sky-100 text-sky-700", ring: "ring-sky-200", icon: "bg-sky-500" },
  sun: { badge: "bg-sun-200 text-sun-700", ring: "ring-sun-300", icon: "bg-sun-500" },
  tangerine: { badge: "bg-tangerine-100 text-tangerine-700", ring: "ring-tangerine-300", icon: "bg-tangerine-500" },
  mint: { badge: "bg-mint-200 text-mint-700", ring: "ring-mint-300", icon: "bg-mint-500" },
  blossom: { badge: "bg-blossom-200 text-blossom-700", ring: "ring-blossom-300", icon: "bg-blossom-500" },
};

export default function ProgramCard({ name, ageRange, color, icon, focus }: Program) {
  const c = colorClasses[color];
  return (
    <div className={`flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ${c.ring} transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white ${c.icon}`}>
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{name}</h3>
      <span className={`mt-2 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold ${c.badge}`}>
        Age: {ageRange}
      </span>
      <ul className="mt-5 space-y-2 text-sm text-ink-soft">
        {focus.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 text-mint-500" aria-hidden>●</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
