import { Facility } from "@/data/facilities";

export default function FacilityCard({ name, description, icon }: Facility) {
  return (
    <div className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun-200 text-2xl text-sun-700">
        <span aria-hidden>{icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-ink">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}
