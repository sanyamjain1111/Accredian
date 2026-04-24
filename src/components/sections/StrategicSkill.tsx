import { Monitor, Users, Star, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const profiles = [
  {
    icon: Monitor,
    title: "Tech Professionals",
    description: "Enhance expertise, embrace emerging technologies, and drive innovation across your engineering org.",
    bg: "bg-primary-50",
    iconBg: "gradient-primary",
  },
  {
    icon: Users,
    title: "Non-Tech Professionals",
    description: "Adapt digitally, build cross-functional fluency, and collaborate confidently in tech-first environments.",
    bg: "bg-secondary-50",
    iconBg: "bg-secondary-600",
  },
  {
    icon: Star,
    title: "Emerging Professionals",
    description: "Develop powerful in-demand skills for rapid career acceleration from day one.",
    bg: "bg-accent-50",
    iconBg: "bg-accent-600",
  },
  {
    icon: Briefcase,
    title: "Senior Professionals",
    description: "Strengthen strategic thinking, executive presence, and leadership decision-making capabilities.",
    bg: "bg-green-50",
    iconBg: "bg-green-600",
  },
];

export function StrategicSkill() {
  return (
    <section className="section-pad bg-white" id="tech">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Strategic Skill Enhancement"
          title="Programs for Every Professional Persona"
          subtitle="Whether your team is technical, managerial, or still starting out — we have a program built for them."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map(({ icon: Icon, title, description, bg, iconBg }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col gap-5 p-6 rounded-2xl border border-neutral-200 hover:shadow-elevated transition-shadow duration-300",
                bg
              )}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconBg)}>
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
