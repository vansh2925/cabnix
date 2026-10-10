"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  featuredProductHref,
  productCardCopy,
  productFamilies,
  productListingIntro,
  type ProductFamily,
} from "@/lib/template";

function FamilyImage({ family }: { family: ProductFamily }) {
  const [failed, setFailed] = useState(!family.image);

  if (failed) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-[#ececec] text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
        Image placeholder
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#ececec]">
      <Image
        src={family.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function ProductsListing() {
  return (
    <section className="bg-white" aria-labelledby="our-products-heading">
      <div className="wrap py-16 md:py-20 lg:py-24">
        <div className="text-center">
          <h2 id="our-products-heading" className="h2">
            Our Products
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-[var(--navy)]/20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--navy)]" />
            <span className="h-px w-10 bg-[var(--navy)]/20" />
          </div>
          <p className="mx-auto mt-6 max-w-[40rem] text-[1.05rem] leading-8 text-[var(--muted)]">
            {productListingIntro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((family) => (
            <article
              key={family.id}
              className="flex h-full flex-col border border-[var(--border)] bg-white shadow-[0_8px_24px_rgba(16,24,32,0.04)]"
            >
              <FamilyImage family={family} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">{family.name}</h3>
                <p className="mt-3 flex-1 text-[0.98rem] leading-7 text-[var(--muted)]">{productCardCopy}</p>
                <Link href={featuredProductHref(family.slug)} className="btn btn-primary mt-6 self-start">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
