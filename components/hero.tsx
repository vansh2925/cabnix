import Image from "next/image";
import Link from "next/link";
import { heroImageSrc } from "@/lib/template";

export function Hero() {
  return (
    <section className="hero-full relative w-full" aria-label="Introduction">
      <div className="hero-visual">
        <Image
          src={heroImageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/[0.45]" aria-hidden="true" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="hero-copy w-full max-w-[56.25rem] text-center">
            <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.35)] md:text-[3.5rem] lg:text-[4.5rem]">
              Engineering
              <br />
              Precision
              <br />
              Excellence
            </h1>
            <p className="mx-auto mt-5 max-w-[36rem] text-base leading-7 text-white md:text-[1.05rem] [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
              Precision components engineered for industrial applications.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/about-us"
                className="btn min-h-11 bg-white px-7 text-[var(--navy)] hover:bg-[#ececec]"
              >
                Know More
              </Link>
              <Link href="/products" className="btn min-h-11 bg-[#00488d] px-7 text-white hover:bg-[#003a73]">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
