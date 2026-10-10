export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Certificate", href: "/certificate" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type ProductModel = {
  id: string;
  label: string;
  specs?: Record<string, string>;
};

export type ProductMaterialRow = {
  part: string;
  material: string;
};

export type ProductTechnicalField = {
  label: string;
  value: string;
};

export type ProductGallery = {
  main?: string;
  detail?: string;
  drawing?: string;
};

export type ProductFamily = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  gallery?: ProductGallery;
  overview?: string;
  materials?: string;
  materialsTable?: ProductMaterialRow[];
  technicalDetails?: string;
  technicalFields?: ProductTechnicalField[];
  applications?: string[];
  catalogueFile?: string;
  datasheetFile?: string;
  models: ProductModel[];
};

const placeholderModels: ProductModel[] = [
  { id: "variant-01", label: "Variant 01" },
  { id: "variant-02", label: "Variant 02" },
  { id: "variant-03", label: "Variant 03" },
];

export const productFamilies: ProductFamily[] = [
  {
    id: "brass-cable-glands",
    name: "Brass Cable Glands",
    slug: "brass-cable-glands",
    description: "Product description will be added here.",
    image: "/images/products/brass-cable-glands/main.jpg",
    models: placeholderModels,
  },
  {
    id: "stainless-steel-cable-glands",
    name: "Stainless Steel Cable Glands",
    slug: "stainless-steel-cable-glands",
    description: "Product description will be added here.",
    image: "/images/products/stainless-steel-cable-glands/main.jpg",
    models: placeholderModels,
  },
  {
    id: "industrial-cable-glands",
    name: "Industrial Cable Glands",
    slug: "industrial-cable-glands",
    description: "Product description will be added here.",
    image: "/images/products/industrial-cable-glands/main.jpg",
    models: placeholderModels,
  },
  {
    id: "emc-cable-glands",
    name: "EMC Cable Glands",
    slug: "emc-cable-glands",
    description: "Product description will be added here.",
    image: "/images/products/emc-cable-glands/main.jpg",
    models: placeholderModels,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Product description will be added here.",
    image: "/images/products/accessories/main.jpg",
    models: placeholderModels,
  },
];

export const productNavItems = productFamilies.map((family) => ({
  label: family.name,
  href: `/products/${family.slug}`,
}));

export const productListingIntro =
  "Explore our range of products designed for industrial and electrical applications.";

export const productCardCopy = "Designed for industrial and electrical applications.";

export type FeaturedProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  imageSrc: string;
};

export const catalogueProducts: FeaturedProduct[] = productFamilies.map((family) => ({
  slug: family.slug,
  name: family.name,
  category: "Products",
  description: productCardCopy,
  imageSrc: "",
}));

export const homepageProductRange: FeaturedProduct[] = [
  { slug: "brass-cable-glands", name: "Brass Cable Glands", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "brass-inserts", name: "Brass Inserts", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "brass-fittings", name: "Brass Fittings", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "brass-ceramic", name: "Brass Ceramic", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "brass-rods", name: "Brass Rods", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "brass-electric-parts", name: "Brass Electric Parts", category: "Products", description: productCardCopy, imageSrc: "" },
  { slug: "hose-barb", name: "Hose Barb", category: "Products", description: productCardCopy, imageSrc: "" },
];

export function featuredProductHref(slug: string) {
  return `/products/${slug}`;
}

function familyFromRangeItem(item: FeaturedProduct): ProductFamily {
  return {
    id: item.slug,
    name: item.name,
    slug: item.slug,
    description: "Product description will be added here.",
    image: "",
    models: placeholderModels,
  };
}

export function getProductFamily(slug: string) {
  const existing = productFamilies.find((family) => family.slug === slug);
  if (existing) {
    return existing;
  }

  const rangeItem = homepageProductRange.find((item) => item.slug === slug);
  return rangeItem ? familyFromRangeItem(rangeItem) : undefined;
}

export const productsHeroSrc = "/images/products-hero.jpg";

export const whyChooseFeatures = [
  {
    title: "Quality & Reliability",
    description: "Focused on consistent quality, precision and reliable brass components.",
  },
  {
    title: "Precision Manufacturing",
    description: "Precision machining and manufacturing for consistent component quality.",
  },
  {
    title: "Custom Components",
    description: "Customized brass components developed to meet specific application requirements.",
  },
  {
    title: "Customer Satisfaction",
    description: "Committed to dependable products, responsive service and long-term customer relationships.",
  },
] as const;

export const whyChoosePanel = {
  value: "20+",
  label: "Years of\nExperience",
  copy: "CABNIX is specialized in the design and manufacturing of brass cable glands, precision brass components and cable entry solutions for electrical, plumbing and industrial applications.",
  href: "/about-us",
};

export const whyChooseMedia = {
  topRightSrc: "/images/why-choose-1.jpg",
  bottomLeftSrc: "/images/why-choose-2.jpg",
};

export type ApplicationItem = {
  title: string;
  image: string;
  slug: string;
};

export const applications: ApplicationItem[] = [
  {
    title: "Electrical and Electronics",
    image: "/images/applications/electrical-and-electronics.jpg",
    slug: "electrical-and-electronics",
  },
  {
    title: "Industrial Automation",
    image: "/images/applications/industrial-automation.jpg",
    slug: "industrial-automation",
  },
  {
    title: "Oil and Gas",
    image: "/images/applications/oil-and-gas.jpg",
    slug: "oil-and-gas",
  },
  {
    title: "Engineering and Machinery",
    image: "/images/applications/engineering-and-machinery.jpg",
    slug: "engineering-and-machinery",
  },
  {
    title: "Power and Energy",
    image: "/images/applications/power-and-energy.jpg",
    slug: "power-and-energy",
  },
  {
    title: "Marine and Offshore",
    image: "/images/applications/marine-and-offshore.jpg",
    slug: "marine-and-offshore",
  },
  {
    title: "Building and Construction",
    image: "/images/applications/building-and-construction.jpg",
    slug: "building-and-construction",
  },
  {
    title: "Renewable Energy",
    image: "/images/applications/renewable-energy.jpg",
    slug: "renewable-energy",
  },
];

export const applicationsBackground = "/images/applications/section-background.jpg";

export const manufacturingMedia = {
  heroSrc: "",
  accents: [
    { title: "Manufacturing", image: "" },
    { title: "Quality Inspection", image: "" },
    { title: "Finished Products", image: "" },
  ],
};

export const manufacturingCatalogue = {
  coverSrc: "",
  href: "/resources/catalogues",
};

export const socialLinks: { label: string; href: string }[] = [];

export const heroImageSrc = "/images/hero-01.jpg";

export const aboutHeroSrc = "/images/about-hero.jpg";
export const aboutMainSrc = "/images/about-main.jpg";

export const certificateHeroSrc = "/images/certificate-hero.jpg";

export type CertificateItem = {
  title: string;
  image: string;
  document: string;
};

export const certificates: CertificateItem[] = [
  { title: "Certificate Document 01", image: "/images/certificates/certificate-01.jpg", document: "" },
  { title: "Certificate Document 02", image: "/images/certificates/certificate-02.jpg", document: "" },
  { title: "Certificate Document 03", image: "/images/certificates/certificate-03.jpg", document: "" },
];

export const resourcesHeroSrc = "/images/resources-hero.jpg";
export const contactHeroSrc = "/images/contact-hero.jpg";

export type ResourceType = "catalogue" | "datasheet" | "certificate" | "drawing" | "cad" | "brochure";

export type ResourceItem = {
  id: string;
  title: string;
  type: ResourceType;
  category: string;
  series: string;
  file: string;
  size: string;
};

export const resourceTypeLabels: Record<ResourceType, string> = {
  catalogue: "Catalogue",
  datasheet: "Datasheet",
  certificate: "Certificate",
  drawing: "Drawing",
  cad: "CAD",
  brochure: "Brochure",
};

export const resourceTabs = [
  { id: "all", label: "All" },
  { id: "catalogue", label: "Catalogues" },
  { id: "datasheet", label: "Datasheets" },
  { id: "certificate", label: "Certificates" },
] as const;

export const resources: ResourceItem[] = [];

export const heroSpecialties = [
  "Cable Glands",
  "Brass Components",
  "Cable Gland Accessories",
  "Industrial Cable Management",
  "Custom Manufacturing",
] as const;
