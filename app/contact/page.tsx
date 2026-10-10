import type { Metadata } from "next";
import { ContactHero } from "@/components/contact-hero";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact CABNIX for product information and industrial enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
