import { certificateHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function CertificateHero() {
  return (
    <PageHero
      title="Certificate"
      headingId="certificate-hero-heading"
      imageSrc={certificateHeroSrc}
      crumbs={[
        { href: "/", label: "Home" },
        { label: "Certificate" },
      ]}
    />
  );
}
