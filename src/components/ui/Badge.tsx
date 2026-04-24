import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeVariant = "blue" | "indigo" | "amber" | "green" | "gray";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue:   "bg-primary-100 text-primary-800",
  indigo: "bg-secondary-100 text-secondary-800",
  amber:  "bg-accent-100 text-accent-800",
  green:  "bg-green-100 text-green-800",
  gray:   "bg-neutral-100 text-neutral-700",
};

export function Badge({ variant = "blue", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
