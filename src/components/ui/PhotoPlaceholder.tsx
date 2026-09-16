import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  icon?: string;
  className?: string;
  gradient?: string; // Tailwind gradient classes, e.g. "from-sky-100 to-sky-300"
  showCaption?: boolean;
};

// Renders a real photo when `src` is provided. Otherwise renders a tasteful
// pastel placeholder so layouts can be reviewed before real school
// photography is supplied. Swap in a `src` (under /public/images) to
// upgrade any slot to a real photo without touching layout code.
export default function PhotoPlaceholder({
  src,
  alt,
  icon = "📷",
  className = "",
  gradient = "from-sky-100 via-mint-100 to-sun-100",
  showCaption = true,
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="text-5xl sm:text-6xl" aria-hidden>
        {icon}
      </span>
      {showCaption ? (
        <span className="mt-3 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm">
          Real school photo coming soon
        </span>
      ) : null}
    </div>
  );
}
