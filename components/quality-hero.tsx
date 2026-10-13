import { qualityHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function QualityHero() {
  return (
    <PageHero
      title="Quality Assurance"
      headingId="quality-hero-heading"
      imageSrc={qualityHeroSrc}
      wrapClass="about-wrap"
      overlayClass="bg-black/28"
      imageClass="object-cover object-[center_42%]"
      crumbs={[
        { href: "/", label: "Home" },
        { label: "Quality Assurance" },
      ]}
    />
  );
}
