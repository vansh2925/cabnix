import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutWelcome } from "@/components/about-welcome";
import { AboutStory } from "@/components/about-story";
import { AboutMission } from "@/components/about-mission";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CABNIX, a specialized brand of Varudi Brass Products, manufactures brass cable glands, cable gland accessories, and precision brass components from Jamnagar, Gujarat, India.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWelcome />
      <AboutStory />
      <AboutMission />
    </>
  );
}
