import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const edgePoints = [
  {
    number: "01",
    title: "Customised Learning Paths",
    description: "Programs tailored to your industry, role, and organizational goals — not generic off-the-shelf content.",
  },
  {
    number: "02",
    title: "IIT & World-Class Faculty",
    description: "Learn from practitioners and academics with deep domain expertise from top global institutions.",
  },
  {
    number: "03",
    title: "Blended Delivery Model",
    description: "Seamlessly combine live sessions, self-paced modules, and mentorship for maximum engagement.",
  },
  {
    number: "04",
    title: "Measurable ROI",
    description: "Skill gap assessments and post-program evaluations ensure tangible, trackable business impact.",
  },
];

export function AccredianEdge() {
  return (
    <section className="section-pad gradient-light" id="edge">
      <div className="container-xl">
        <SectionHeader
          eyebrow="The Accredian Edge"
          title="Key Aspects of Our Strategic Training"
          subtitle="What sets our enterprise programs apart from every other L&amp;D solution in the market."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-white p-6 shadow-elevated max-w-sm w-full">
              <Image
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
                alt="Accredian Edge - Strategic Training Framework"
                width={480}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {edgePoints.map((point) => (
              <div
                key={point.number}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <span className="text-3xl font-bold text-primary-200 block mb-3">
                  {point.number}
                </span>
                <h3 className="font-bold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
