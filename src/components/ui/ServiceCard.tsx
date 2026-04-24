/**
 * ServiceCard
 * Full-bleed image card with an overlay and category tag.
 * Good for courses, case studies, or featured domains.
 */
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl block bg-neutral-900",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Background image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-neutral-900/10 transition-opacity duration-300 group-hover:from-neutral-900/95" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
        {/* Category tag */}
        <span className="self-start text-xs font-semibold text-white bg-primary-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full mb-1">
          {category}
        </span>

        <h3 className="font-bold text-white text-lg leading-snug">{title}</h3>

        {description && (
          <p className="text-sm text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
            {description}
          </p>
        )}

        {href && (
          <div className="flex items-center gap-1 text-xs font-semibold text-primary-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-1">
            Explore
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </Tag>
  );
}
