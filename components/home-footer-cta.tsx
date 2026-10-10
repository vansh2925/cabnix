"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/site-data";

export function HomeFooterCta() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <section className="bg-[var(--navy)] text-white" aria-labelledby="footer-cta-heading">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14 lg:py-16">
        <div className="max-w-xl">
          <h2 id="footer-cta-heading" className="text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-white">
            Need a Product Quickly?
          </h2>
          <p className="mt-3 max-w-lg text-white/65">
            Have a requirement or need more information? Our team is ready to help with your enquiry.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={`mailto:${company.email}`} className="btn btn-light">
            Email Us
          </a>
          <Link href="/request-quote" className="btn btn-ghost-light">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
