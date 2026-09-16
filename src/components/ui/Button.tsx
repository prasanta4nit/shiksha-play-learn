import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-tangerine-500 text-white shadow-soft hover:bg-tangerine-700 hover:shadow-soft-lg",
  secondary:
    "bg-white text-ink border-2 border-sky-300 hover:border-sky-500 hover:bg-sky-50",
  outline:
    "bg-transparent text-white border-2 border-white/80 hover:bg-white/15",
  whatsapp: "bg-mint-500 text-white shadow-soft hover:bg-mint-700",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold transition-all duration-200 ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
