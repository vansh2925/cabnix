import { contactHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function ContactHero() {
  return (
    <PageHero
      title="Contact Us"
      headingId="contact-hero-heading"
      imageSrc={contactHeroSrc}
      crumbs={[
        { href: "/", label: "Home" },
        { label: "Contact Us" },
      ]}
    />
  );
}
