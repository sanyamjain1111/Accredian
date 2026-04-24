"use client";

import {
  Brain,
  BarChart3,
  Users2,
  Smartphone,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    eyebrow: "Adaptive Learning Engine",
    title: "Personalised Learning Paths at Scale",
    description:
      "Our AI-powered platform curates each learner&apos;s journey based on their role, skill gaps, and career goals — no two learners see the same content sequence. Programs adapt in real time as proficiency improves.",
    points: [
      "Pre-assessment maps individual knowledge gaps",
      "AI recommends modules in optimal order",
      "Progress-aware content difficulty adjustment",
      "Manager-visible learner milestone dashboard",
    ],
    visual: {
      title: "Learning Intelligence",
      icon: Brain,
      items: [
        { label: "Personalised Paths", value: 98, color: "bg-primary-500" },
        { label: "Completion Rate", value: 91, color: "bg-secondary-500" },
        { label: "Skill Match Score", value: 87, color: "bg-green-500" },
      ],
    },
    imageRight: true,
    bg: "bg-white",
  },
  {
    eyebrow: "Real-Time Analytics",
    title: "Measurable ROI on Every Training Dollar",
    description:
      "Go beyond attendance tracking. Our analytics suite gives HR leaders and managers a live view of team skill health, course progress, assessment outcomes, and business-aligned metrics in one unified dashboard.",
    points: [
      "Live cohort progress heatmaps",
      "Pre/post skill gap assessment reports",
      "Manager-facing team skill scorecards",
      "Export-ready ROI reports for leadership",
    ],
    visual: {
      title: "Enterprise Dashboard",
      icon: BarChart3,
      items: [
        { label: "Teams Tracked", value: 94, color: "bg-accent-500" },
        { label: "Reporting Accuracy", value: 99, color: "bg-primary-500" },
        { label: "Decision Speed", value: 83, color: "bg-secondary-500" },
      ],
    },
    imageRight: false,
    bg: "bg-neutral-50",
  },
  {
    eyebrow: "Mentorship & Community",
    title: "Expert Mentors. Peer Cohorts. Real Connection.",
    description:
      "Learning doesn&apos;t happen in isolation. Every program includes live expert sessions, structured peer discussion forums, and 1-on-1 mentorship from IIT faculty and senior industry practitioners.",
    points: [
      "Weekly live sessions with domain experts",
      "Dedicated 1-on-1 mentorship slots",
      "Peer cohort Slack/WhatsApp communities",
      "Guest lectures from Fortune 500 leaders",
    ],
    visual: {
      title: "Mentorship Network",
      icon: Users2,
      items: [
        { label: "Expert Mentors", value: 92, color: "bg-green-500" },
        { label: "Learner Satisfaction", value: 97, color: "bg-primary-500" },
        { label: "Cohort Engagement", value: 88, color: "bg-secondary-500" },
      ],
    },
    imageRight: true,
    bg: "bg-white",
  },
];

const platformHighlights = [
  { icon: Smartphone, label: "Mobile-First LMS" },
  { icon: Award, label: "Industry Certifications" },
  { icon: Layers, label: "Blended Delivery" },
];

function ProgressBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-neutral-500 mb-1.5">
        <span>{label}</span>
        <span className="font-semibold text-neutral-700">{value}%</span>
      </div>
      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", color)}
          style={{ width: `${value}%`, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function CapabilityVisual({ visual, inView, imageRight }: {
  visual: (typeof capabilities)[0]["visual"];
  inView: boolean;
  imageRight: boolean;
}) {
  const Icon = visual.icon;
  return (
    <div
      className={cn(
        "flex justify-center transition-all duration-700",
        inView
          ? "opacity-100 translate-x-0"
          : imageRight
            ? "opacity-0 translate-x-10"
            : "opacity-0 -translate-x-10"
      )}
    >
      <div className="relative w-full max-w-md">
        {/* Decorative background blob */}
        <div className="absolute -inset-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl blur-xl opacity-60" />
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-elevated p-7">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-neutral-900">{visual.title}</span>
            <span className="ml-auto flex items-center gap-1 text-xs text-green-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* Progress bars */}
          <div className="flex flex-col gap-4">
            {visual.items.map((item, i) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={inView ? item.value : 0}
                color={item.color}
                delay={300 + i * 150}
              />
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-400">Last updated: just now</span>
            <span className="text-xs font-semibold text-primary-600 flex items-center gap-1">
              View full report <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityRow({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.15 });
  const isRight = capability.imageRight;

  return (
    <div ref={ref} className={cn("section-pad", capability.bg)}>
      <div className="container-xl">
        <div className={cn("grid lg:grid-cols-2 gap-14 items-center", isRight && "")}>
          {/* Text side */}
          <div
            className={cn(
              "flex flex-col gap-6 transition-all duration-700",
              isRight ? "lg:order-1" : "lg:order-2",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
                {capability.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight mb-4">
                {capability.title}
              </h3>
              <p
                className="text-neutral-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: capability.description }}
              />
            </div>

            <ul className="flex flex-col gap-3">
              {capability.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-neutral-600">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary-500 shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className={isRight ? "lg:order-2" : "lg:order-1"}>
            <CapabilityVisual visual={capability.visual} inView={inView} imageRight={isRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformCapabilities() {
  return (
    <div id="platform">
      {/* Section header */}
      <div className="section-pad bg-neutral-50 pb-0">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Platform Capabilities"
            title="Everything Your Enterprise Needs to Grow"
            subtitle="One integrated platform for skill assessment, personalised learning, expert mentorship, and measurable impact — built for organisations at scale."
          />

          {/* Highlights bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {platformHighlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-neutral-200 shadow-sm text-sm font-medium text-neutral-700"
              >
                <Icon className="w-4 h-4 text-primary-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating rows */}
      {capabilities.map((cap, i) => (
        <CapabilityRow key={cap.eyebrow} capability={cap} index={i} />
      ))}
    </div>
  );
}
