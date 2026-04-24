"use client";

import {
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Users2,
  Award,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const trustPoints = [
  {
    icon: Clock,
    title: "Response within 48 hours",
    desc: "A dedicated enterprise advisor will reach out with a personalised proposal.",
  },
  {
    icon: CheckCircle2,
    title: "No commitment required",
    desc: "Explore your options freely — no contracts until you're ready.",
  },
  {
    icon: ShieldCheck,
    title: "Your data is secure",
    desc: "GDPR-compliant handling. We never share your information with third parties.",
  },
  {
    icon: Users2,
    title: "500+ enterprises trust us",
    desc: "Join Bayer, ADP, Reliance, and hundreds of others already growing with Accredian.",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "enterprise@accredian.com",
    href: "mailto:enterprise@accredian.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 80 6999 9536",
    href: "tel:+918069999536",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "4th Floor, 250, Phase IV, Udyog Vihar, Gurugram",
    href: undefined,
  },
];

const stats = [
  { icon: Award, value: "IIT Backed", label: "Faculty & Curriculum" },
  { icon: Users2, value: "10K+", label: "Learners Trained" },
  { icon: CheckCircle2, value: "98%", label: "Satisfaction Rate" },
];

export function ContactSection() {
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="section-pad bg-neutral-50" id="contact">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Get Started Today"
          title="Let&apos;s Build Your Enterprise Learning Strategy"
          subtitle="Fill in the form and a dedicated Accredian enterprise advisor will reach out within 48 hours with a tailored program proposal."
        />

        <div ref={ref} className="mt-14 grid lg:grid-cols-5 gap-10 items-start">
          {/* ---- Left: Form ---- */}
          <div
            className={cn(
              "lg:col-span-3 bg-white rounded-2xl border border-neutral-200 shadow-elevated p-8 md:p-10 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Enquire Now</h3>
                <p className="text-xs text-neutral-500">Free consultation · No commitment</p>
              </div>
            </div>

            <LeadCaptureForm />
          </div>

          {/* ---- Right: Info panel ---- */}
          <div
            className={cn(
              "lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Stats bar */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-primary-200 mb-4 uppercase tracking-wider">
                Why enterprises choose us
              </p>
              <div className="flex flex-col gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-600/60 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-primary-200" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{value}</p>
                      <p className="text-xs text-primary-300">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust points */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-6 flex flex-col gap-5">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                What happens next
              </h4>
              {trustPoints.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{title}</p>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-6 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Prefer to reach out directly?
              </h4>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-700 leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
