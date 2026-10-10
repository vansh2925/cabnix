import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { OurProducts } from "@/components/our-products";
import { WhyChooseUs } from "@/components/why-choose-us";
import { OurApplications } from "@/components/our-applications";
import { ManufacturingQuality } from "@/components/manufacturing-quality";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurProducts />
      <WhyChooseUs />
      <OurApplications />
      <ManufacturingQuality />
    </>
  );
}
