"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

/* ---- Inline SVG social icons (lucide-react removed brand icons) ---- */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const socialLinks = [
  { Icon: FacebookIcon,  href: "https://facebook.com/accredianlearn",                             label: "Facebook" },
  { Icon: LinkedinIcon,  href: "https://www.linkedin.com/company/accredianedu/",                  label: "LinkedIn" },
  { Icon: TwitterIcon,   href: "https://twitter.com/accredianedu",                                label: "Twitter" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/accredian_edu",                         label: "Instagram" },
  { Icon: YoutubeIcon,   href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",       label: "YouTube" },
];

const footerLinks = {
  Company: [
    { label: "About Accredian",  href: "https://accredian.com/About" },
    { label: "Blog & Insights",  href: "https://blog.accredian.com/" },
    { label: "Why Accredian",    href: "https://accredian.com/whyaccredian" },
    { label: "Careers",          href: "#" },
    { label: "Press & Media",    href: "#" },
  ],
  Solutions: [
    { label: "Tech Professionals",      href: "#tech" },
    { label: "Non-Tech Professionals",  href: "#non-tech" },
    { label: "Emerging Professionals",  href: "#emerging" },
    { label: "Senior Leadership",       href: "#senior" },
    { label: "Custom Programs",         href: "#contact" },
  ],
  Domains: [
    { label: "Product & Innovation",   href: "#domain" },
    { label: "Gen-AI Mastery",         href: "#domain" },
    { label: "Leadership Elevation",   href: "#domain" },
    { label: "Tech & Data Insights",   href: "#domain" },
    { label: "Operations Excellence",  href: "#domain" },
  ],
  Resources: [
    { label: "Case Studies",           href: "#" },
    { label: "Whitepapers",            href: "#" },
    { label: "Webinars",               href: "#" },
    { label: "Partner Portal",         href: "#" },
    { label: "Help Centre",            href: "#" },
  ],
};

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-2xl px-8 py-10 md:py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-wider mb-2">Stay Ahead</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            L&amp;D Insights Straight to Your Inbox
          </h3>
          <p className="text-primary-200 text-sm leading-relaxed">
            Weekly briefings on workforce trends, AI in enterprise learning, and expert program spotlights.
          </p>
        </div>
        <div className="w-full md:w-auto md:min-w-[340px]">
          {submitted ? (
            <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/40 rounded-xl px-5 py-4">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
              <p className="text-green-300 text-sm font-medium">You&apos;re subscribed! Check your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-primary-300 text-sm focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-white text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors shrink-0 flex items-center gap-1.5"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
          <p className="text-primary-400 text-xs mt-2.5">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" id="footer">
      {/* Newsletter */}
      <div className="container-xl pt-14 pb-4">
        <NewsletterForm />
      </div>

      {/* Main footer */}
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column — 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl text-white">
                Accredian <span className="text-primary-400">Enterprise</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Cultivate high-performance teams through expert learning. Next-gen expertise, measurable outcomes, for enterprises of all sizes.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5 mb-8">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Contact block */}
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <a href="tel:+918069999536" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                +91 80 6999 9536
              </a>
              <a href="mailto:enterprise@accredian.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                enterprise@accredian.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  4th Floor, 250, Phase IV, Udyog Vihar,<br />
                  Sector 18, Gurugram, Haryana 122015
                </span>
              </div>
            </div>
          </div>

          {/* Link columns — 4 cols */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider + certifications/trust badges */}
      <div className="border-t border-neutral-800">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              ISO 9001 Certified
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              NASSCOM Member
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              GDPR Compliant
            </span>
          </div>
          <p className="text-xs text-neutral-500">A Brand of FullStack Education Pvt Ltd</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 Accredian Enterprise. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
