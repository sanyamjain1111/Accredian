/**
 * FeatureCard
 * Used to showcase product features / capabilities.
 * Variants: "default" | "elevated" | "glass" | "gradient"
 */
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";

type FeatureCardVariant = "default" | "elevated" | "glass" | "gradient";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  variant?: FeatureCardVariant;
  iconColor?: string;   // Tailwind bg class e.g. "bg-primary-600"
  className?: string;
}

const variantBase: Record<FeatureCardVariant, string> = {
  default:  "bg-white border border-neutral-200 hover:border-primary-200",
  elevated: "bg-white border border-neutral-100 shadow-elevated hover:shadow-[0_20px_40px_-8px_rgb(37_99_235_/_0.18)]",
  glass:    "bg-white/60 backdrop-blur-md border border-white/80 shadow-sm",
  gradient: "bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100 hover:border-primary-300",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  href,
  variant = "default",
  iconColor = "gradient-primary",
  className,
}: FeatureCardProps) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      className={cn(
        "group relative flex flex-col gap-5 p-6 rounded-2xl transition-all duration-300 cursor-default gradient-border",
        variantBase[variant],
        href && "cursor-pointer",
        "hover:-translate-y-1 hover:shadow-elevated",
        className
      )}
    >
      {/* Optional badge */}
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-accent-100 text-accent-700 px-2.5 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
          iconColor
        )}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-neutral-900 text-base leading-snug">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>

      {/* Arrow (shown on hover for linked cards) */}
      {href && (
        <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mb-1">
          Learn more
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      )}
    </Tag>
  );
}
