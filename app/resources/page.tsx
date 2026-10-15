import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources-hero";
import { ResourcesLibrary } from "@/components/resources-library";

export const metadata: Metadata = {
  title: "Resources",
  description: "CABNIX technical documents and product resources will be added here.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesLibrary />
    </>
  );
}
