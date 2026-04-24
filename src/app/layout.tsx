import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
    template: "%s | Accredian Enterprise",
  },
  description:
    "Cultivate high-performance teams through expert learning. Tailored corporate training programs in AI, leadership, data, and more.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "L&D programs",
    "upskilling",
    "AI training",
    "leadership development",
    "Accredian",
  ],
  authors: [{ name: "Accredian", url: "https://accredian-gilt.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://accredian-gilt.vercel.app",
    siteName: "Accredian Enterprise",
    title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
    description:
      "Cultivate high-performance teams through expert learning. Tailored corporate training programs in AI, leadership, data, and more.",
    images: [
      {
        url: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@accredianedu",
    title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
    description: "Cultivate high-performance teams through expert learning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://accredian-gilt.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Accredian Enterprise",
  url: "https://accredian-gilt.vercel.app",
  logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  description:
    "Cultivate high-performance teams through expert learning. Tailored corporate training programs in AI, leadership, data, and more.",
  sameAs: [
    "https://www.linkedin.com/company/accredian",
    "https://twitter.com/accredianedu",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9079553088",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        {/* Skip navigation — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
