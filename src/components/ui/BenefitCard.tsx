/**
 * BenefitCard
 * Numbered or check-mark style card to list benefits / selling points.
 */
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface BenefitCardProps {
  number?: number;
  title: string;
  description: string;
  highlighted?: boolean;
  className?: string;
}

export function BenefitCard({
  number,
  title,
  description,
  highlighted = false,
  className,
}: BenefitCardProps) {
  return (
    <div
      className={cn(
        "group relative flex gap-5 p-6 rounded-2xl border transition-all duration-300",
        highlighted
          ? "border-primary-300 bg-primary-50 shadow-card"
          : "border-neutral-200 bg-white hover:border-primary-200 hover:shadow-card",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {/* Number / Check indicator */}
      <div className="shrink-0">
        {number !== undefined ? (
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors duration-300",
              highlighted
                ? "gradient-primary text-white"
                : "bg-neutral-100 text-neutral-500 group-hover:gradient-primary group-hover:text-white"
            )}
          >
            {String(number).padStart(2, "0")}
          </div>
        ) : (
          <CheckCircle2
            className={cn(
              "w-6 h-6 mt-0.5 transition-colors duration-300",
              highlighted ? "text-primary-600" : "text-neutral-400 group-hover:text-primary-500"
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-neutral-900 text-sm leading-snug">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>

      {/* Highlighted accent line */}
      {highlighted && (
        <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full gradient-primary" />
      )}
    </div>
  );
}
