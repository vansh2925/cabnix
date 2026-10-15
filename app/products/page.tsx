import type { Metadata } from "next";
import { ProductsHero } from "@/components/products-hero";
import { ProductsListing } from "@/components/products-listing";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Brass cable glands, cable gland accessories, brass inserts, and precision brass components from CABNIX.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsListing />
    </>
  );
}
