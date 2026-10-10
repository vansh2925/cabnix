"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactHeroSrc } from "@/lib/template";

export function ContactHero() {
  const [failed, setFailed] = useState(false);

  return (
    <section className="page-hero" aria-labelledby="contact-hero-heading">
      <div className="absolute inset-0 overflow-hidden bg-[var(--navy)]">
        {failed ? (
          <div className="h-full w-full bg-[var(--stage-2)]" aria-hidden="true" />
        ) : (
          <Image
            src={contactHeroSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-[var(--navy)]/70" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex min-h-[18rem] items-end pb-10 pt-10 md:min-h-[24rem] md:pb-12 md:pt-12 lg:min-h-[26.5rem] lg:items-center lg:pb-0 lg:pt-0">
        <div className="wrap flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-center">
          <h1
            id="contact-hero-heading"
            className="text-[clamp(2rem,4vw,3.15rem)] font-semibold tracking-[-0.03em] text-white"
          >
            Contact Us
          </h1>
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/45">
                &gt;
              </li>
              <li className="text-white">
                <span aria-current="page">Contact Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
