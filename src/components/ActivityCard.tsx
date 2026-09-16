import { Activity } from "@/data/activities";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const gradientClasses: Record<Activity["color"], string> = {
  sky: "from-sky-100 to-sky-300",
  sun: "from-sun-100 to-sun-300",
  tangerine: "from-tangerine-100 to-tangerine-300",
  mint: "from-mint-100 to-mint-300",
  blossom: "from-blossom-100 to-blossom-300",
};

export default function ActivityCard({ name, icon, color, image }: Activity) {
  return (
    <div className="w-56 shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-soft sm:w-64">
      <PhotoPlaceholder
        src={image}
        alt={name}
        icon={icon}
        gradient={gradientClasses[color]}
        className="h-36 w-full"
        showCaption={false}
      />
      <div className="p-4">
        <h3 className="text-base font-bold text-ink">{name}</h3>
      </div>
    </div>
  );
}
