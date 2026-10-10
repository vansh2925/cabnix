import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductFamilyDetail } from "@/components/product-family-detail";
import { ProductsHero } from "@/components/products-hero";
import { getProductFamily, homepageProductRange, productFamilies } from "@/lib/template";

type PageProps = {
  params: Promise<{ family: string }>;
};

export function generateStaticParams() {
  const slugs = new Set([
    ...productFamilies.map((family) => family.slug),
    ...homepageProductRange.map((item) => item.slug),
  ]);

  return [...slugs].map((family) => ({ family }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { family } = await params;
  const item = getProductFamily(family);

  if (!item) {
    return { title: "Products" };
  }

  return { title: item.name, description: item.description };
}

export default async function ProductFamilyPage({ params }: PageProps) {
  const { family } = await params;
  const item = getProductFamily(family);

  if (!item) {
    notFound();
  }

  return (
    <>
      <ProductsHero current={item.name} />
      <ProductFamilyDetail family={item} />
    </>
  );
}
