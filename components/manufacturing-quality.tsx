import Image from "next/image";
import Link from "next/link";
import { manufacturingCatalogue } from "@/lib/template";

export function ManufacturingQuality() {
  return (
    <section className="bg-[#e8e8e8]" aria-labelledby="catalogue-heading">
      <div className="wrap flex flex-col items-center gap-8 py-12 md:flex-row md:items-center md:gap-12 md:py-16 lg:py-[4.5rem]">
        <div className="relative z-[1] w-[10.5rem] shrink-0 bg-white md:w-[12.5rem] md:shadow-[0_12px_32px_rgba(16,24,32,0.1)] lg:w-[13.5rem]">
          {manufacturingCatalogue.coverSrc ? (
            <div className="relative aspect-[3/4] w-full">
              <Image src={manufacturingCatalogue.coverSrc} alt="" fill className="object-cover" sizes="220px" />
            </div>
          ) : (
            <div className="flex aspect-[3/4] w-full flex-col items-center justify-center border border-[var(--border)] px-4 text-center">
              <p className="eyebrow text-[var(--muted)]">Catalogue</p>
            </div>
          )}
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h2 id="catalogue-heading" className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            Explore Our Catalogue
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Discover our product range, technical information, and resources in one place.
          </p>
          <Link href={manufacturingCatalogue.href} className="btn btn-primary mt-7">
            View Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
