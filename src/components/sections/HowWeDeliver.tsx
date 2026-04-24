import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs through structured diagnostics.",
    icon: "🔍",
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description: "Create a tailored learning roadmap directly addressing your organizational goals.",
    icon: "📋",
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry needs and your team's schedule.",
    icon: "🚀",
  },
];

export function HowWeDeliver() {
  return (
    <section className="section-pad gradient-dark text-white" id="process">
      <div className="container-xl">
        <SectionHeader
          eyebrow="How We Deliver Results"
          title="A Structured Three-Step Approach to Skill Development"
          subtitle="Our battle-tested CAT framework ensures measurable outcomes at every stage."
          light
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-14 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 items-start">
                {/* Line + number */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-primary-800 mt-2 min-h-[40px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-4">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CAT framework image */}
          <div className="flex justify-center">
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm border border-white/10 max-w-sm w-full">
              <Image
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
                alt="CAT Framework — Customized, Adaptive, Transformative"
                width={440}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-center text-sm text-neutral-400 mt-4 font-medium">
                The CAT Framework — Our Proven Approach to Learning Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
