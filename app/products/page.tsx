import type { Metadata } from "next";
import { ProductsHero } from "@/components/products-hero";
import { ProductsListing } from "@/components/products-listing";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our range of products designed for industrial and electrical applications.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsListing />
    </>
  );
}
