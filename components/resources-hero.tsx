import { resourcesHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function ResourcesHero() {
  return (
    <PageHero
      title="Resource Centre"
      headingId="resources-hero-heading"
      imageSrc={resourcesHeroSrc}
      crumbs={[
        { href: "/", label: "Home" },
        { label: "Resources" },
      ]}
    />
  );
}
