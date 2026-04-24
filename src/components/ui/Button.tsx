import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-800 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-500",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-secondary-400",
  outline:
    "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500",
  ghost:
    "text-primary-700 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500",
};

const sizeStyles: Record<Size, string> = {
  sm:  "px-4 py-2 text-sm rounded-lg",
  md:  "px-6 py-3 text-base rounded-xl",
  lg:  "px-8 py-4 text-lg rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export { Button };
