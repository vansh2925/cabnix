import { productsHeroSrc } from "@/lib/template";
import { PageHero } from "@/components/page-hero";

export function ProductsHero({ current }: { current?: string }) {
  return (
    <PageHero
      title="Products"
      headingId="products-hero-heading"
      imageSrc={productsHeroSrc}
      crumbs={
        current
          ? [
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { label: current },
            ]
          : [
              { href: "/", label: "Home" },
              { label: "Products" },
            ]
      }
    />
  );
}
