import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Short supporting text goes here.",
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
