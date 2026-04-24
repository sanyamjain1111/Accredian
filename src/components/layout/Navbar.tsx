"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "Tech Professionals",     href: "#tech" },
      { label: "Non-Tech Professionals", href: "#non-tech" },
      { label: "Leadership Programs",    href: "#leadership" },
    ],
  },
  { label: "Domain Expertise", href: "#domain" },
  { label: "Our Edge",         href: "#edge" },
  { label: "Testimonials",     href: "#testimonials" },
  { label: "FAQ",              href: "#faq" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Navbar() {
  const [open, setOpen]                     = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [activeSection, setActiveSection]   = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks
      .flatMap((l) => (l.dropdown ? l.dropdown.map((d) => d.href) : [l.href]))
      .map((h) => h.replace("#", ""))
      .filter(Boolean);

    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        scrollToSection(href);
        setOpen(false);
      }
    },
    []
  );

  const isActive = (href: string) => href.replace("#", "") === activeSection;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/97 backdrop-blur-lg shadow-[0_2px_20px_rgb(0,0,0,0.08)] border-b border-neutral-200/80"
          : "bg-white/90 backdrop-blur-sm border-b border-neutral-200/50"
      )}
    >
      <nav
        className={cn(
          "container-xl flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg gradient-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-base md:text-lg">A</span>
          </div>
          <span className="font-bold text-lg md:text-xl text-neutral-900 tracking-tight">
            Accredian <span className="text-primary-700">Enterprise</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(link.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-neutral-600 hover:text-primary-700 hover:bg-primary-50/60"
                )}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      activeDropdown === link.label && "rotate-180"
                    )}
                  />
                )}
              </a>
              {isActive(link.href) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-600" />
              )}
              {link.dropdown && (
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-52 bg-white rounded-xl border border-neutral-200 shadow-elevated py-2 z-20 transition-all duration-200 origin-top",
                    activeDropdown === link.label
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-neutral-600">Login</Button>
          <Button size="sm" className="animate-pulse-glow">Enquire Now</Button>
        </div>

        {/* Animated Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition-colors gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={cn("block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-300", open && "translate-y-2 rotate-45")} />
          <span className={cn("block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-200", open && "opacity-0 scale-x-0")} />
          <span className={cn("block w-5 h-0.5 bg-neutral-700 rounded-full transition-all duration-300", open && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-[520px] opacity-100 border-t border-neutral-200" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-xl py-4 pb-6 flex flex-col">
          {navLinks.map((link, i) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                  isActive(link.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-neutral-700 hover:text-primary-700 hover:bg-primary-50/60",
                  open && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
                {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />}
              </a>
              {link.dropdown && (
                <div className="ml-4 flex flex-col gap-0.5 mt-1 mb-1">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center gap-2 px-4 py-2 text-xs text-neutral-500 hover:text-primary-600 rounded-lg hover:bg-primary-50/60 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-neutral-100">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Enquire Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
