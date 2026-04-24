"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight, PlayCircle, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  "Fully Tailored to Your Business Goals",
  "Industry-Specific Curriculum Design",
  "Expert Faculty from IITs & Global Firms",
];

const trustLogos = [
  { name: "Reliance",  src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" },
  { name: "IBM",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" },
  { name: "HCL",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" },
  { name: "ADP",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" },
  { name: "Bayer",     src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" },
];

const floatingStats = [
  { icon: Users,    value: "10K+", label: "Professionals Trained",   color: "bg-primary-600",   delay: "delay-300" },
  { icon: BookOpen, value: "200+", label: "Sessions Delivered",      color: "bg-secondary-600", delay: "delay-400" },
  { icon: Award,    value: "5K+",  label: "Active Learners",         color: "bg-accent-600",    delay: "delay-500" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative overflow-hidden bg-white hero-grid-bg min-h-[85vh] flex items-center">
      {/* ---- Gradient orbs ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary-100 opacity-50 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-secondary-100 opacity-40 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-accent-100 opacity-25 blur-[80px]"
      />

      <div className="container-xl relative w-full py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ========== Left — Copy ========== */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Badge */}
            <div className={mounted ? "animate-fade-in-up" : "opacity-0"}>
              <Badge variant="blue" className="gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse inline-block" />
                Enterprise Learning Platform
              </Badge>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-neutral-900 ${
                mounted ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              Next-Gen Expertise{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">For Your Enterprise</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-neutral-600 leading-relaxed max-w-lg ${
                mounted ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              Cultivate high-performance teams through expert learning.
              Accelerate growth with programs engineered around your business goals and industry demands.
            </p>

            {/* Highlights */}
            <ul
              className={`flex flex-col gap-3 ${mounted ? "animate-fade-in-up delay-300" : "opacity-0"}`}
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div
              className={`flex flex-wrap gap-3 mt-1 ${mounted ? "animate-fade-in-up delay-400" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="group shadow-hero animate-pulse-glow"
                onClick={() => scrollToSection("#contact")}
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => scrollToSection("#domain")}
              >
                <PlayCircle className="w-5 h-5 text-primary-600" />
                Explore Programs
              </Button>
            </div>

            {/* Trust logos */}
            <div className={`mt-2 ${mounted ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-3">
                Trusted by leading enterprises
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {trustLogos.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ========== Right — Visual ========== */}
          <div
            className={`relative order-1 lg:order-2 ${
              mounted ? "animate-fade-in-right delay-200" : "opacity-0"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-hero ring-1 ring-neutral-200">
              <Image
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                alt="Enterprise team collaboration and upskilling"
                width={680}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>

            {/* ---- Floating stat cards ---- */}
            {floatingStats.map(({ icon: Icon, value, label, color, delay }, i) => (
              <div
                key={label}
                className={`absolute bg-white rounded-2xl px-4 py-3.5 shadow-elevated ring-1 ring-neutral-200/80 flex items-center gap-3 ${
                  mounted ? `animate-scale-in ${delay}` : "opacity-0"
                } animate-float`}
                style={{
                  // Position cards around the image
                  ...(i === 0 && { bottom: "1.5rem", left: "-1rem" }),
                  ...(i === 1 && { top: "1.5rem",    right: "-1rem" }),
                  ...(i === 2 && { bottom: "6rem",   right: "-1rem" }),
                  animationDelay: i === 0 ? "0.4s, 0.8s" : i === 1 ? "0.6s, 1.2s" : "0.8s, 1.6s",
                }}
              >
                <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm leading-none mb-0.5">{value}</p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              </div>
            ))}

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="absolute -z-10 -inset-4 rounded-[2rem] border-2 border-dashed border-primary-200/50 animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
