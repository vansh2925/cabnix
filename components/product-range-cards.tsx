import Image from "next/image";
import Link from "next/link";
import {
  featuredProductHref,
  homepageProductRange,
  type FeaturedProduct,
} from "@/lib/template";

const cardAspect = "16 / 10";

function ProductRangeCard({ product }: { product: FeaturedProduct }) {
  const href = featuredProductHref(product.slug);

  return (
    <article className="flex h-full flex-col">
      <Link href={href} className="group block">
        <div
          className="relative overflow-hidden border border-[var(--border)] bg-white"
          style={{ aspectRatio: cardAspect }}
        >
          {product.imageSrc ? (
            <Image
              src={product.imageSrc}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              quality={90}
              className="object-contain p-4 sm:p-5"
            />
          ) : (
            <div className="absolute inset-0 bg-[#f4f5f6]" aria-hidden="true" />
          )}
        </div>
        <h3 className="pt-5 text-lg font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--navy)]">
          {product.name}
        </h3>
      </Link>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{product.description}</p>
      <Link href={href} className="btn btn-primary mt-6 self-start">
        Read more
      </Link>
    </article>
  );
}

export function ProductRangeCards() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
      {homepageProductRange.map((product) => (
        <ProductRangeCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
