"use client";

import {
  Zap, Shield, BarChart2, Headphones, Globe, GraduationCap,
  LayoutGrid, Clock,
} from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Rapid Skill Deployment",
    description: "Go from gap analysis to live training in under 3 weeks with our accelerated onboarding process.",
    badge: "Fast",
    iconColor: "gradient-primary",
    variant: "elevated" as const,
  },
  {
    icon: GraduationCap,
    title: "IIT & Global Faculty",
    description: "Learn from professors and practitioners at IIT, IIM, INSEAD, and Fortune 500 companies.",
    iconColor: "bg-secondary-600",
    variant: "elevated" as const,
  },
  {
    icon: BarChart2,
    title: "Measurable ROI",
    description: "Pre and post assessments, skill dashboards, and manager reporting built into every program.",
    iconColor: "bg-accent-600",
    variant: "elevated" as const,
  },
  {
    icon: LayoutGrid,
    title: "Blended Learning Model",
    description: "Live sessions, self-paced content, cohort discussions, and 1-on-1 mentorship — seamlessly combined.",
    iconColor: "bg-green-600",
    variant: "elevated" as const,
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Programs available in English, Hindi, and regional languages to support diverse teams.",
    iconColor: "bg-teal-600",
    variant: "elevated" as const,
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description: "A named CSM for your account, plus 24/7 learner support via chat, email and phone.",
    badge: "24/7",
    iconColor: "bg-rose-600",
    variant: "elevated" as const,
  },
  {
    icon: Shield,
    title: "Compliance-Ready",
    description: "SOC 2 compliant platform with role-based access, SSO, and GDPR data handling.",
    iconColor: "bg-indigo-600",
    variant: "elevated" as const,
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekend, evening, and intensive formats designed around your workforce's availability.",
    iconColor: "bg-violet-600",
    variant: "elevated" as const,
  },
];

const benefits = [
  { number: 1, title: "Skill Gap Analysis",       description: "Diagnose exactly where each team member needs development.",     highlighted: true  },
  { number: 2, title: "Customized Learning Path",  description: "A roadmap built around your company goals, not a generic syllabus." },
  { number: 3, title: "Expert-Led Delivery",       description: "Every session run by a verified practitioner with 10+ years domain experience." },
  { number: 4, title: "Progress Tracking",         description: "Manager dashboards and cohort leaderboards keep learners accountable." },
  { number: 5, title: "Certificate & Recognition", description: "Industry-recognised certificates that employees can share on LinkedIn." },
  { number: 6, title: "Post-Program Alumni Access",description: "Lifelong access to recordings, community, and quarterly alumni sessions." },
];

export function FeatureCards() {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      {/* ---- Feature Grid ---- */}
      <section className="section-pad bg-white" id="features">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Why Accredian"
            title="Everything Your Enterprise Needs"
            subtitle="From rapid deployment to measurable ROI — every feature is built for real enterprise scale."
          />

          <div
            ref={ref}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className={cn(
                  "transition-all duration-500",
                  inView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
                )}
                style={{ animationDelay: inView ? `${i * 70}ms` : "0ms" }}
              >
                <FeatureCard {...f} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Benefits List ---- */}
      <section className="section-pad gradient-light" id="benefits">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left header */}
            <div className="lg:sticky lg:top-24">
              <SectionHeader
                eyebrow="The Process"
                title="How Accredian Transforms Your Team"
                subtitle="A six-step journey from gap diagnosis to certified, confident professionals — backed at every stage."
                centered={false}
              />
              <div className="mt-8 p-6 bg-white rounded-2xl border border-neutral-200 shadow-card">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Every engagement is guided by a dedicated Customer Success Manager who works as an extension of your L&amp;D team — ensuring programs run on time and on target.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4.8</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Average Client Satisfaction</p>
                    <p className="text-xs text-neutral-500">Based on 200+ enterprise programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right benefit cards */}
            <div ref={benefitsRef} className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={cn(
                    "transition-all duration-500",
                    benefitsInView ? "animate-fade-in-right opacity-100" : "opacity-0 translate-x-6"
                  )}
                  style={{ animationDelay: benefitsInView ? `${i * 100}ms` : "0ms" }}
                >
                  <BenefitCard {...b} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
