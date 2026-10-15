import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Submit an enquiry for CABNIX brass cable glands and components.",
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
