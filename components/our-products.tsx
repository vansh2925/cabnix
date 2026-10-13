import { ProductRangeCards } from "@/components/product-range-cards";

export function OurProducts() {
  return (
    <section className="bg-white">
      <div className="wrap section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Our Products Range</h2>
          <p className="mt-4 text-[var(--muted)]">
            Explore our range of products designed for industrial applications.
          </p>
        </div>

        <div className="mt-14">
          <ProductRangeCards />
        </div>
      </div>
    </section>
  );
}
