import { aboutHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function AboutHero() {
  return (
    <PageHero
      title="About Us"
      headingId="about-hero-heading"
      imageSrc={aboutHeroSrc}
      wrapClass="about-wrap"
      crumbs={[
        { href: "/", label: "Home" },
        { label: "About Us" },
      ]}
    />
  );
}
