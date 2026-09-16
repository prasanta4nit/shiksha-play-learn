import { SchoolEvent } from "@/data/events";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function EventCard({ name, date, description, icon, image }: SchoolEvent) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <PhotoPlaceholder
        src={image}
        alt={name}
        icon={icon}
        gradient="from-blossom-100 via-sun-100 to-sky-100"
        className="h-40 w-full"
        showCaption={false}
      />
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-tangerine-500">
          {date}
        </span>
        <h3 className="mt-1 text-lg font-bold text-ink">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}
