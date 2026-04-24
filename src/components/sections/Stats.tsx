"use client";

import { TrendingUp, Users, BookOpen, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  barWidth: string;
}

const stats: StatItem[] = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "Equipped for exceptional career success across top enterprises.",
    icon: Users,
    color: "text-primary-600",
    bgColor: "bg-primary-50 border-primary-100",
    barWidth: "w-full",
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered",
    description: "High-impact live and recorded sessions with global faculty.",
    icon: BookOpen,
    color: "text-secondary-600",
    bgColor: "bg-secondary-50 border-secondary-100",
    barWidth: "w-10/12",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Active Learners",
    description: "Currently engaged in programs that drive real-world results.",
    icon: TrendingUp,
    color: "text-accent-600",
    bgColor: "bg-accent-50 border-accent-100",
    barWidth: "w-8/12",
  },
  {
    value: 4.8,
    suffix: "/5",
    label: "Average Rating",
    description: "Consistently rated excellent by enterprise learning managers.",
    icon: Star,
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-100",
    barWidth: "w-11/12",
  },
];

function AnimatedStat({ stat, inView, index }: { stat: StatItem; inView: boolean; index: number }) {
  const formatted = useCountUp({
    target: stat.value,
    duration: 2200,
    start: inView,
    decimals: stat.value % 1 !== 0 ? 1 : 0,
  });

  const Icon = stat.icon;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-5 p-6 rounded-2xl border bg-white transition-all duration-500 group gradient-border",
        "hover:-translate-y-1 hover:shadow-elevated",
        inView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
      )}
      style={{ animationDelay: inView ? `${index * 120}ms` : "0ms" }}
    >
      {/* Icon + value row */}
      <div className="flex items-start justify-between gap-4">
        <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center shrink-0", stat.bgColor)}>
          <Icon className={cn("w-6 h-6", stat.color)} strokeWidth={1.75} />
        </div>
        {/* Big counter */}
        <div className="text-right">
          <div className="flex items-end justify-end gap-0.5 leading-none">
            <span className={cn("text-4xl md:text-5xl font-bold tabular-nums", stat.color)}>
              {formatted}
            </span>
            <span className={cn("text-2xl font-bold pb-1", stat.color)}>{stat.suffix}</span>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-neutral-900 text-base">{stat.label}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{stat.description}</p>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-[2s] ease-out",
            stat.color.replace("text-", "bg-")
          )}
          style={{
            width: inView
              ? `${(parseInt(stat.barWidth.split("/")[0].replace("w-", "")) / parseInt(stat.barWidth.split("/")[1] || "1")) * 100}%`
              : "0%",
          }}
        />
      </div>
    </div>
  );
}

export function Stats() {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-pad bg-neutral-50" id="stats">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Our Track Record"
          title="The Numbers Behind Our Success"
          subtitle="Real impact, measurable outcomes — across thousands of enterprise learners worldwide."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
        >
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>

        {/* Bottom trust line */}
        <div
          className={cn(
            "mt-10 text-center transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-sm text-neutral-400 font-medium">
            Numbers updated quarterly &mdash; verified by internal L&amp;D audits
          </p>
        </div>
      </div>
    </section>
  );
}
