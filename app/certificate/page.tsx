import type { Metadata } from "next";
import { CertificateHero } from "@/components/certificate-hero";
import { CertificateIntro } from "@/components/certificate-intro";
import { CertificateGrid } from "@/components/certificate-grid";

export const metadata: Metadata = {
  title: "Certificate",
  description:
    "CABNIX certification documents and quality credentials will be presented here as they become available.",
};

export default function CertificatePage() {
  return (
    <>
      <CertificateHero />
      <CertificateIntro />
      <CertificateGrid />
    </>
  );
}
