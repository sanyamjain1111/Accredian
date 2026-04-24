import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  company,
  logoSrc,
  logoAlt,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 p-8 rounded-2xl bg-white border border-neutral-200 shadow-card hover:shadow-elevated transition-all duration-300",
        className
      )}
    >
      <Quote className="w-8 h-8 text-primary-300 shrink-0" />
      <p className="text-neutral-700 leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4 mt-2 pt-4 border-t border-neutral-100">
        <div className="relative h-10 w-24">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
        <span className="text-sm font-semibold text-neutral-600">{company}</span>
      </div>
    </div>
  );
}
