"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "About the Course",
    items: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian offers certificate programs, executive programs, and post-graduate certificates across tech, leadership, data, operations, fintech, and more — all customizable to your organizational needs.",
      },
      {
        q: "What domain specializations are available?",
        a: "We cover Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
      },
      {
        q: "Can programs be customized for our company?",
        a: "Absolutely. Every engagement begins with a Skill Gap Analysis, after which we build a tailored roadmap specific to your team's roles, industry, and business objectives.",
      },
    ],
  },
  {
    category: "About the Delivery",
    items: [
      {
        q: "How are programs delivered?",
        a: "We offer flexible blended delivery — live instructor-led sessions, self-paced online modules, group workshops, and 1:1 mentorship. Programs can be fully online, hybrid, or on-site.",
      },
      {
        q: "What is the typical duration of an enterprise program?",
        a: "Programs range from intensive 2-day workshops to 6-month post-graduate tracks depending on depth, scope, and your organizational capacity.",
      },
    ],
  },
  {
    category: "Miscellaneous",
    items: [
      {
        q: "How do I get started?",
        a: "Click 'Enquire Now' or email enterprise@accredian.com. Our team will schedule a discovery call to understand your needs and propose a tailored solution.",
      },
      {
        q: "Is there post-program support?",
        a: "Yes. Learners get access to alumni networks, recorded sessions, and ongoing mentor office hours even after the program concludes.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const btnId = `faq-btn-${uid}`;
  const panelId = `faq-panel-${uid}`;

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <button
        id={btnId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-semibold text-neutral-800 text-sm md:text-base">{q}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="section-pad bg-white" id="faq">
      <div className="container-xl max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before getting started."
        />

        <div className="mt-12 flex flex-col gap-10">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <FAQItem key={item.q} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
