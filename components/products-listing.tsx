import { ProductRangeCards } from "@/components/product-range-cards";
import { productListingIntro } from "@/lib/template";

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

        <div className="mt-12">
          <ProductRangeCards />
        </div>
      </div>
    </section>
  );
}
