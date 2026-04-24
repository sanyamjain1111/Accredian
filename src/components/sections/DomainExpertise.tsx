import {
  Rocket,
  Brain,
  TrendingUp,
  Database,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";
import { DomainCard } from "@/components/ui/DomainCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LucideIcon } from "lucide-react";

const domains: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Rocket,    title: "Product & Innovation Hub",  description: "End-to-end product thinking and innovation frameworks." },
  { icon: Brain,     title: "Gen-AI Mastery",            description: "Generative AI, LLMs, prompt engineering and beyond." },
  { icon: TrendingUp,title: "Leadership Elevation",      description: "Strategic leadership for senior and mid-career managers." },
  { icon: Database,  title: "Tech & Data Insights",      description: "Data science, ML, analytics and cloud engineering." },
  { icon: Settings,  title: "Operations Excellence",     description: "Lean, Six Sigma, supply-chain and process optimization." },
  { icon: Globe,     title: "Digital Enterprise",        description: "Digital transformation, agile delivery and DevOps." },
  { icon: Banknote,  title: "Fintech Innovation Lab",    description: "Blockchain, payments, risk modelling and RegTech." },
];

export function DomainExpertise() {
  return (
    <section className="section-pad bg-white" id="domain">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Domain Expertise"
          title="Specialized Programs Designed to Fuel Innovation"
          subtitle="Seven deep-specialisation verticals covering every dimension of modern enterprise growth."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {domains.map((d) => (
            <DomainCard key={d.title} icon={d.icon} title={d.title} description={d.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
