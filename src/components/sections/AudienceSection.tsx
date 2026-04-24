"use client";

import { Code2, Users, TrendingUp, Crown, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Code2,
    label: "Tech Professionals",
    tag: "Engineering · Data · AI",
    description:
      "Upskill engineers, data scientists, and tech leads with cutting-edge, practitioner-led curriculum aligned to real project contexts.",
    benefits: [
      "Cloud, AI & ML certifications",
      "System design & architecture",
      "Tech-to-leadership pathways",
    ],
    accent: "from-primary-500 to-primary-700",
    bg: "bg-primary-50",
    tagColor: "bg-primary-100 text-primary-700",
    borderHover: "hover:border-primary-300",
    iconBg: "bg-primary-600",
    id: "tech",
  },
  {
    icon: Users,
    label: "Non-Tech Professionals",
    tag: "Business · Operations · HR",
    description:
      "Bridge the digital gap for business, marketing, operations, and HR teams. Build data fluency and AI adoption skills.",
    benefits: [
      "Digital literacy & automation tools",
      "Data-driven decision making",
      "AI strategy for business teams",
    ],
    accent: "from-secondary-500 to-secondary-700",
    bg: "bg-secondary-50",
    tagColor: "bg-secondary-100 text-secondary-700",
    borderHover: "hover:border-secondary-300",
    iconBg: "bg-secondary-600",
    id: "non-tech",
  },
  {
    icon: TrendingUp,
    label: "Emerging Professionals",
    tag: "High-Potential · Early-Career",
    description:
      "Accelerate your organisation's top talent pipeline. Give high-potential employees the skills to step into senior roles faster.",
    benefits: [
      "Fast-track career development",
      "Peer cohort & mentorship model",
      "Leadership readiness programs",
    ],
    accent: "from-accent-500 to-accent-700",
    bg: "bg-accent-50",
    tagColor: "bg-accent-100 text-accent-700",
    borderHover: "hover:border-accent-300",
    iconBg: "bg-accent-600",
    id: "emerging",
  },
  {
    icon: Crown,
    label: "Senior Leadership",
    tag: "C-Suite · VP · Director",
    description:
      "Equip executives and senior managers with strategic foresight, transformational leadership, and board-level decision-making skills.",
    benefits: [
      "Executive coaching & workshops",
      "Strategic transformation programs",
      "Board-ready leadership skills",
    ],
    accent: "from-green-500 to-emerald-700",
    bg: "bg-green-50",
    tagColor: "bg-green-100 text-green-700",
    borderHover: "hover:border-green-300",
    iconBg: "bg-green-600",
    id: "senior",
  },
];

function AudienceCard({
  audience,
  index,
  inView,
}: {
  audience: (typeof audiences)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = audience.icon;
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-card transition-all duration-500 cursor-default",
        audience.borderHover,
        "hover:shadow-elevated hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r ${audience.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon + Tag row */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl ${audience.iconBg} flex items-center justify-center shadow-sm`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${audience.tagColor}`}>
          {audience.tag}
        </span>
      </div>

      {/* Title + Description */}
      <h3 className="text-xl font-bold text-neutral-900 mb-3">{audience.label}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed mb-5">{audience.description}</p>

      {/* Benefits */}
      <ul className="flex flex-col gap-2.5 mb-6 flex-1">
        {audience.benefits.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm text-neutral-600">
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`#${audience.id}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:gap-3 transition-all duration-200 group/link"
      >
        Explore programs
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}

export function AudienceSection() {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="section-pad bg-neutral-50" id="solutions">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Built For Your Entire Organisation"
          title="Programs Designed for Every Professional Level"
          subtitle="Whether you&apos;re reskilling a team of engineers, empowering business leaders, or developing emerging talent — we have a program for every layer of your workforce."
        />

        <div ref={ref} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <AudienceCard key={audience.id} audience={audience} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom trust note */}
        <p className="text-center text-sm text-neutral-400 mt-10">
          Trusted by{" "}
          <span className="text-neutral-700 font-semibold">500+ enterprises</span> across India, Middle East, and Southeast Asia.
        </p>
      </div>
    </section>
  );
}
