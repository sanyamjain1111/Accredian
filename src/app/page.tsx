import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Partners } from "@/components/sections/Partners";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { PlatformCapabilities } from "@/components/sections/PlatformCapabilities";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { StrategicSkill } from "@/components/sections/StrategicSkill";
import { HowWeDeliver } from "@/components/sections/HowWeDeliver";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <AudienceSection />
      <FeatureCards />
      <PlatformCapabilities />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <StrategicSkill />
      <HowWeDeliver />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
