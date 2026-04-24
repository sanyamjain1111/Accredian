"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  /** Delay in milliseconds before the entrance animation starts */
  delay?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  className?: string;
  /** Wrapper element type */
  as?: React.ElementType;
}

const hiddenClass: Record<Direction, string> = {
  up:    "opacity-0 translate-y-8",
  down:  "opacity-0 -translate-y-8",
  left:  "opacity-0 translate-x-8",
  right: "opacity-0 -translate-x-8",
  none:  "opacity-0",
};

/**
 * Wraps its children in a container that fades/slides in
 * when it enters the viewport.
 *
 * @example
 * <ScrollReveal direction="up" delay={100}>
 *   <MyCard />
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className,
  as: Tag = "div",
}: ScrollRevealProps) {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-x-0 translate-y-0" : hiddenClass[direction],
        className
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
