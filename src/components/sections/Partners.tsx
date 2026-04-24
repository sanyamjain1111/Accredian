import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const partners = [
  { name: "Reliance",  src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",  width: 100 },
  { name: "HCL",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",  width: 80  },
  { name: "IBM",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",  width: 80  },
  { name: "CRIF",      src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png", width: 80  },
  { name: "ADP",       src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",  width: 80  },
  { name: "Bayer",     src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",width: 80  },
];

// Duplicate for infinite marquee effect
const allPartners = [...partners, ...partners];

export function Partners() {
  return (
    <section className="section-pad bg-white" id="partners">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Proven Partnerships"
          title="Successful Collaborations With the Industry&apos;s Best"
          subtitle="Trusted by leading global enterprises to train and upskill their workforce."
        />
      </div>

      {/* Infinite scrolling logo strip */}
      <div className="mt-12 overflow-hidden relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-16 animate-marquee w-max items-center py-4" role="list" aria-label="Partner logos">
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              role="listitem"
              aria-hidden={i >= partners.length ? "true" : undefined}
              className="flex items-center justify-center h-14 shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
