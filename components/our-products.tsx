import Image from "next/image";
import Link from "next/link";
import {
  featuredProductHref,
  homepageProductRange,
  type FeaturedProduct,
} from "@/lib/template";

function ProductMedia({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return <div className="absolute inset-0 bg-[#e8e8e8]" aria-hidden="true" />;
  }

  return <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />;
}

function ProductCard({ product }: { product: FeaturedProduct }) {
  const href = featuredProductHref(product.slug);

  return (
    <article className="product-card">
      <div className="product-card-media">
        <ProductMedia src={product.imageSrc} alt={product.name} />
        <div className="product-card-overlay" aria-hidden="true">
          <p className="product-card-overlay-copy">{product.description}</p>
          <span className="btn btn-light mt-6">Read more</span>
        </div>
        <Link href={href} className="absolute inset-0 z-[2]" aria-label={`${product.name}: read more`} />
      </div>

      <div className="pt-5">
        <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">
          <Link href={href} className="relative z-[3] transition-colors hover:text-[var(--navy)]">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{product.category}</p>
      </div>

      <div className="product-card-touch">
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{product.description}</p>
        <Link href={href} className="btn btn-primary mt-5">
          Read more
        </Link>
      </div>
    </article>
  );
}

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

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {homepageProductRange.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
