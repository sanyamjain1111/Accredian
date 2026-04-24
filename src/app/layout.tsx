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
  authors: [{ name: "Accredian", url: "https://enterprise.accredian.com" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enterprise.accredian.com",
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
    canonical: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
