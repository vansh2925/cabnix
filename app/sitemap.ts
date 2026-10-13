import type { MetadataRoute } from "next";
import { catalogueProducts, featuredProductHref } from "@/lib/template";

const siteUrl = "https://www.cabnix.in";

const staticRoutes = [
  "/",
  "/about",
  "/about-us",
  "/quality",
  // "/certificate",
  "/contact",
  "/products",
  "/request-quote",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...staticRoutes,
    ...catalogueProducts.map((product) => featuredProductHref(product.slug)),
  ];

  return pages.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.7,
  }));
}
