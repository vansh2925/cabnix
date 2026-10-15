import type { Metadata } from "next";
import { RequestQuoteForm } from "@/components/request-quote-form";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Submit an enquiry for CABNIX brass cable glands and components.",
};

export default function RequestQuotePage() {
  return (
    <div className="wrap section">
      <p className="eyebrow">Request a quote</p>
      <h1 className="h1 mt-4 max-w-[18ch]">Submit an enquiry</h1>
      <p className="lead mt-4">
        Send product requirements to CABNIX for brass cable glands, accessories, and precision brass components.
      </p>
      <RequestQuoteForm />
    </div>
  );
}
