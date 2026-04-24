"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise. Our tech workforce's capability scores jumped by 34% in six months.",
    name: "Arjun Mehta",
    role: "Head of Learning & Development",
    company: "ADP",
    initials: "AM",
    rating: 5,
    logoSrc:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    logoAlt: "ADP",
    avatarColor: "bg-primary-600",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded. The real-time analytics dashboard gave our managers unprecedented visibility into team skill health.",
    name: "Priya Sharma",
    role: "VP – Talent & Organisation",
    company: "Bayer",
    initials: "PS",
    rating: 5,
    logoSrc:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    logoAlt: "Bayer",
    avatarColor: "bg-secondary-600",
  },
  {
    quote:
      "Choosing Accredian for the learning & development of our employees was a transformative decision. The value derived is immense. Our non-tech business teams can now confidently use AI tools to drive decisions.",
    name: "Vikram Singh",
    role: "Chief People Officer",
    company: "Reliance",
    initials: "VS",
    rating: 5,
    logoSrc:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    logoAlt: "Reliance",
    avatarColor: "bg-accent-600",
  },
  {
    quote:
      "The blended delivery model perfectly fit our global workforce. Live sessions with IIT faculty combined with self-paced content meant our 2,000+ employees in 12 countries could learn without disrupting operations.",
    name: "Ananya Krishnan",
    role: "Global L&D Director",
    company: "Infosys BPM",
    initials: "AK",
    rating: 5,
    logoSrc:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    logoAlt: "Infosys BPM",
    avatarColor: "bg-green-600",
  },
];

const partnerLogos = [
  { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg", alt: "ADP" },
  { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg", alt: "Bayer" },
  { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png", alt: "Reliance" },
  { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg", alt: "Infosys" },
];

const aggregates = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "10K+", label: "Learners Trained" },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 ring-2 ring-white shadow-sm", color)}>
      {initials}
    </div>
  );
}

type Testimonial = typeof testimonials[0];

function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 md:p-10 text-white flex flex-col gap-6 h-full">
      <Quote className="w-12 h-12 text-primary-400 shrink-0" />
      <p className="text-lg leading-relaxed text-primary-50 flex-1">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-4 pt-4 border-t border-primary-600">
        <Avatar initials={t.initials} color={t.avatarColor} />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white truncate">{t.name}</p>
          <p className="text-sm text-primary-300 truncate">{t.role}</p>
          <p className="text-xs text-primary-400 mt-0.5">{t.company}</p>
        </div>
        <div className="shrink-0">
          <StarRating count={t.rating} />
        </div>
      </div>
    </div>
  );
}

function CompactCard({ t, onClick, active }: { t: Testimonial; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left rounded-xl border p-5 flex flex-col gap-3 transition-all duration-300",
        active
          ? "border-primary-300 bg-primary-50 shadow-sm"
          : "border-neutral-200 bg-white hover:border-primary-200 hover:shadow-sm"
      )}
    >
      <Quote className={cn("w-5 h-5", active ? "text-primary-500" : "text-neutral-300")} />
      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
        <Avatar initials={t.initials} color={t.avatarColor} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-neutral-900 truncate">{t.name}</p>
          <p className="text-xs text-neutral-500 truncate">{t.company}</p>
        </div>
        <StarRating count={t.rating} />
      </div>
    </button>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const prev = useCallback(() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);

  return (
    <section className="section-pad bg-white" id="testimonials">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="Trusted by Industry Leaders Across the Globe"
          subtitle="Real outcomes, real feedback — from the enterprises who transformed their teams with Accredian."
        />

        {/* Aggregate stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aggregates.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-1 py-5 rounded-xl bg-primary-50 border border-primary-100">
              <span className="text-2xl font-bold text-primary-700">{a.value}</span>
              <span className="text-xs text-neutral-500 text-center">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Main layout */}
        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div
            className="lg:col-span-3 relative min-h-[340px]"
            role="region"
            aria-label="Customer testimonial"
            aria-live="polite"
            aria-atomic="true"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={cn(
                  "transition-all duration-500",
                  i === active
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                )}
              >
                <FeaturedCard t={t} />
              </div>
            ))}

            {/* Prev / Next */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
              <button onClick={prev} aria-label="Previous testimonial" className="w-9 h-9 rounded-full bg-primary-600/80 hover:bg-primary-600 flex items-center justify-center text-white transition-colors">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button onClick={next} aria-label="Next testimonial" className="w-9 h-9 rounded-full bg-primary-600/80 hover:bg-primary-600 flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Compact cards */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <CompactCard key={t.name} t={t} onClick={() => setActive(i)} active={i === active} />
            ))}
          </div>
        </div>

        {/* Mobile dot indicators */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={cn("h-2 rounded-full transition-all duration-300", i === active ? "bg-primary-600 w-6" : "bg-neutral-300 w-2")}
            />
          ))}
        </div>

        {/* Partner logos */}
        <div className="mt-14 pt-10 border-t border-neutral-100">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">Empowering teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="relative h-8 w-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="80px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
