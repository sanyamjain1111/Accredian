import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="section-pad gradient-primary" id="contact">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-200">
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Want to Learn More About Our Training Solutions?
          </h2>
          <p className="text-lg text-primary-100 leading-relaxed max-w-xl">
            Get expert guidance for your team&apos;s success. Our advisors will craft a bespoke learning roadmap within 48 hours.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="ghost"
              size="lg"
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-hero"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href="mailto:enterprise@accredian.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/40 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>

          <p className="text-sm text-primary-200">
            Or email us at{" "}
            <a href="mailto:enterprise@accredian.com" className="underline underline-offset-2 hover:text-white transition-colors">
              enterprise@accredian.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
