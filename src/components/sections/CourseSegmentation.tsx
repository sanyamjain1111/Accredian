"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const segments = [
  {
    id: "program",
    label: "Program Specific",
    categories: "Certificate, Executive, Post Graduate Certificate",
    img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    description:
      "Choose from certificate-level upskilling, executive programs, or full post-graduate certifications — whichever fits your team's development stage.",
  },
  {
    id: "industry",
    label: "Industry Specific",
    categories: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    description:
      "Vertically focused curricula built for the real challenges of your sector — regulatory, technical, and operational.",
  },
  {
    id: "topic",
    label: "Topic Specific",
    categories: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    description:
      "Drill deep into a specific discipline with rigorous, practitioner-led modules that deliver real hands-on skills.",
  },
  {
    id: "level",
    label: "Level Specific",
    categories: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    description:
      "Programs calibrated to existing knowledge and career stage so every learner is challenged — never overwhelmed.",
  },
];

export function CourseSegmentation() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((s) => s.id === active)!;

  return (
    <section className="section-pad gradient-light" id="solutions">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Tailored Course Segmentation"
          title="Custom-fit Courses for Every Professional Focus"
          subtitle="Explore four dimensions of segmentation to find exactly the right learning path."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* Tab list */}
          <div className="flex flex-col gap-3">
            {segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setActive(seg.id)}
                className={cn(
                  "flex flex-col gap-1 text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer",
                  active === seg.id
                    ? "border-primary-600 bg-white shadow-elevated"
                    : "border-transparent bg-white/60 hover:bg-white hover:border-neutral-200"
                )}
              >
                <span className={cn("font-bold", active === seg.id ? "text-primary-700" : "text-neutral-800")}>
                  {seg.label}
                </span>
                <span className="text-sm text-neutral-500">{seg.categories}</span>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
            <div className="relative h-56 w-full">
              <Image
                src={current.img}
                alt={current.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{current.label}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
