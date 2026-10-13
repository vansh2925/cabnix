import type { Metadata } from "next";
import { QualityHero } from "@/components/quality-hero";
import { QualityPolicy } from "@/components/quality-policy";
import { QualityWhy } from "@/components/quality-why";
import { QualityEquipment } from "@/components/quality-equipment";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "CABNIX quality assurance for brass cable glands, cable gland accessories, and precision brass components, with inspection built into machining, finishing, and packing.",
};

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <QualityPolicy />
      <QualityWhy />
      <QualityEquipment />
    </>
  );
}
