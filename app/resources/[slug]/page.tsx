import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Resource", description: "Short supporting text goes here." };

export default function ResourcePlaceholderPage() {
  return (
    <PlaceholderPage
      eyebrow="Resources"
      title="Document title"
      description="Short supporting text goes here."
    />
  );
}
