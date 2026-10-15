import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Resource",
  description: "CABNIX technical documents and product resources will be added here.",
};

export default function ResourcePlaceholderPage() {
  return (
    <PlaceholderPage
      eyebrow="Resources"
      title="Resource"
      description="CABNIX technical documents and product resources will be added here."
    />
  );
}
