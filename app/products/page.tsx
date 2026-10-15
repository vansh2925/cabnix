import type { Metadata } from "next";
import { ProductsHero } from "@/components/products-hero";
import { ProductsListing } from "@/components/products-listing";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Brass cable glands, cable gland accessories, electric components, and brass inserts from CABNIX.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsListing />
    </>
  );
}
