export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Quality", href: "/quality" },
  // { label: "Certificate", href: "/certificate" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type ProductMaterialRow = {
  part: string;
  material: string;
};

export type ProductTechnicalField = {
  label: string;
  value: string;
};

export type ProductSizeChartColumn = {
  key: string;
  label: string;
  group?: string;
};

export type ProductSizeChart = {
  columns: ProductSizeChartColumn[];
  rows: Record<string, string>[];
};

export type ProductModel = {
  id: string;
  label: string;
  image?: string;
  images?: string[];
  drawing?: string;
  drawings?: string[];
  descriptionImage?: string;
  sizeChart?: ProductSizeChart;
  specs?: Record<string, string>;
  description?: string[];
  materials?: string;
  technicalFields?: ProductTechnicalField[];
  applications?: string[];
  features?: string[];
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

const cableGlandAccessoryModels: ProductModel[] = [
  {
    id: "pvc-shroud",
    label: "PVC Shroud",
    image: "/images/products/accessories/pvc-shroud.png",
    images: ["/images/products/accessories/pvc-shroud.png"],
    description: [
      "We manufacture a wide range of PVC Shroud that is manufactured using high grade Polyvinylchloride. Our range is widely demanded amidst our clients, as these are known to provide additional protection & enhance IP rating of the Gland Termination.",
    ],
    technicalFields: [
      { label: "Material", value: "PVC" },
      {
        label: "Application",
        value:
          "Minimises the risk of dirt or foreign substances gathering on the cable gland body and / or point of cable to the gland interface.\nPVC Shroud are used for covering the Cable Glands as additional protection against weather conditions and corrosion.",
      },
    ],
    features: [
      "Provides additional protection & enhances IP rating of the Gland Termination.",
      "Effective solution to weather and corrosion protection of a cable gland.",
      "Available in same gland size compatible to each size of the cable gland.",
      "The arrow end of the sleeves is readily cut with a knife, enabling it to be slipped over a wide range of cable diameters and assists ease of installations.",
    ],
  },
  {
    id: "earth-tag",
    label: "Earth Tag",
    image: "/images/products/accessories/earth-tag.png",
    images: ["/images/products/accessories/earth-tag.png"],
    description: [
      "Earth Tag ensures earthing continuity between Gland and Enclosure.",
      "We have proficiency in offering Earthing Tag in various shapes and in all sizes. This tag acts as a means of connection or an earth bond around the cable gland. Fabricated using brass, aluminium & copper, this ensures earth continuity between the electrical equipment and to the gland. It can also be coated or plated as per customer specifications.",
    ],
    technicalFields: [
      { label: "Material", value: "Brass" },
      { label: "Plating", value: "Nickel Plated" },
      {
        label: "Application",
        value:
          "Used with cable gland, adaptor & reducer to provide a means of connecting a flexible earth bond.",
      },
    ],
    features: [
      "Means of connection or an earth bond around the cable gland.",
      "Available in various shapes and in all sizes.",
      "Ensures earth continuity between the electrical equipment & to gland.",
      "Can be coated or plated as per Customer Specification.",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Metric / Size" },
        { key: "code", label: "Product Code" },
      ],
      rows: [
        { size: "M16", code: "CXET-16" },
        { size: "M20", code: "CXET-20" },
        { size: "M25", code: "CXET-25" },
        { size: "M32", code: "CXET-32" },
        { size: "M40", code: "CXET-40" },
        { size: "M50", code: "CXET-50" },
        { size: "M63", code: "CXET-63" },
        { size: "M75", code: "CXET-75" },
        { size: "M80", code: "CXET-80" },
        { size: "M90", code: "CXET-90" },
      ],
    },
  },
  {
    id: "lock-nut",
    label: "Lock Nut",
    image: "/images/products/accessories/lock-nut.png",
    images: ["/images/products/accessories/lock-nut.png"],
    description: [
      "Our range of Lock Nut is designed by our team of technocrats who uses quality raw material like Brass, Aluminum and Galvanized Steel. Available in Metric, Imperial, NPT, BSPT, BSP, & PG, these are used in fastening glands to the gland plate.",
    ],
    technicalFields: [
      { label: "Material", value: "Brass, Aluminium & Galvanized Steel" },
    ],
    features: [
      "Used in fastening glands to the gland plate.",
      "Available in Metric, Imperial, NPT, BSPT, BSP, & PG.",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Size mm or inch" },
        { key: "code", label: "Product Code" },
      ],
      rows: [
        { size: "16mm or 5/8\"", code: "CXLN-16" },
        { size: "20mm or 3/4\"", code: "CXLN-20" },
        { size: "25mm or 1\"", code: "CXLN-25" },
        { size: "32mm or 1.1/4\"", code: "CXLN-32" },
        { size: "40mm or 1.1/2\"", code: "CXLN-40" },
        { size: "50mm or 2\"", code: "CXLN-50" },
        { size: "63mm or 2.1/2\"", code: "CXLN-63" },
        { size: "75mm or 3\"", code: "CXLN-75" },
        { size: "90mm or 3.1/2\"", code: "CXLN-90" },
      ],
    },
  },
];

const brassCableGlandModels: ProductModel[] = [
  {
    id: "double-compression-weather-proof",
    label: "Double Compression Weather Proof Cable Glands",
    image: "/images/products/brass-cable-glands/double-compression-weather-proof.png",
    images: ["/images/products/brass-cable-glands/double-compression-weather-proof.png"],
    drawings: [
      "/images/products/brass-cable-glands/double-compression-weather-proof-drawing-section.png",
      "/images/products/brass-cable-glands/double-compression-weather-proof-drawing-end.png",
    ],
    technicalFields: [
      {
        label: "Body Material",
        value: "Brass (IS-319) Standard\n(Al. / S.S. / M.S. also available)",
      },
      {
        label: "Surface Finish",
        value: "Nickel Plated Standard\n(Chrome Natural Brass / Other finishes on request)",
      },
      {
        label: "Entry Threads",
        value: "BSC Standard\n(PG / Metric / NPT / BSP / also available)",
      },
      { label: "Sealing Rubber Ring", value: "Nitrile / Neoprene" },
      { label: "Gland Standard", value: "BS 6121" },
      { label: "Ingress Protection", value: "IP 66" },
      {
        label: "Accessories",
        value:
          "Compatible accessories can include PVC shrouds, adaptors, reducers, stopping plugs, etc. according to the selected gland and customer requirement.",
      },
    ],
    applications: [
      "Weather Proof Double Compression Glands are designed to provide weatherproof and dustproof protection with IP66 performance under normal climatic conditions.",
      "The use of suitable PVC shrouds provides additional protection where the glands are exposed to corrosive atmospheric conditions.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "code", label: "CXW Series", group: "CABNIX\nCode" },
        { key: "nipple", label: "Inches", group: "A\nNipple Entry" },
        { key: "length", label: "mm", group: "B\nLength" },
        { key: "af", label: "mm", group: "C\n(A/F)" },
        { key: "ac", label: "mm", group: "D\n(A/C)" },
        { key: "eDia", label: "Ø mm", group: "E\nDia." },
        { key: "fDia", label: "Ø mm", group: "F\nDia." },
      ],
      rows: [
        { from: "9.0", to: "12.0", code: "CXW 01SS", nipple: "3/4\"", length: "15.0", af: "22.0", ac: "25.0", eDia: "16.0", fDia: "14.0" },
        { from: "12.0", to: "16.5", code: "CXW 01S", nipple: "3/4\"", length: "15.0", af: "25.0", ac: "29.0", eDia: "17.5", fDia: "14.5" },
        { from: "16.5", to: "18.5", code: "CXW 01", nipple: "3/4\"", length: "15.0", af: "28.0", ac: "32.0", eDia: "20.0", fDia: "14.5" },
        { from: "16.5", to: "18.5", code: "CXW 01A", nipple: "1\"", length: "15.0", af: "28.0", ac: "32.0", eDia: "20.0", fDia: "20.5" },
        { from: "18.5", to: "20.0", code: "CXW 02", nipple: "1\"", length: "15.0", af: "29.5", ac: "33.0", eDia: "21.0", fDia: "19.0" },
        { from: "18.5", to: "20.0", code: "CXW 02A", nipple: "3/4\"", length: "15.0", af: "29.5", ac: "33.0", eDia: "21.0", fDia: "15.0" },
        { from: "20.0", to: "23.0", code: "CXW 03", nipple: "1\"", length: "15.0", af: "31.0", ac: "36.0", eDia: "23.5", fDia: "20.0" },
        { from: "23.0", to: "26.0", code: "CXW 04", nipple: "1\"", length: "15.0", af: "36.0", ac: "41.0", eDia: "27.0", fDia: "20.0" },
        { from: "23.0", to: "26.0", code: "CXW 04A", nipple: "1.1/4\"", length: "15.0", af: "36.0", ac: "41.0", eDia: "27.0", fDia: "26.0" },
        { from: "26.0", to: "30.0", code: "CXW 05", nipple: "1.1/4\"", length: "15.0", af: "40.0", ac: "46.0", eDia: "32.0", fDia: "26.0" },
        { from: "26.0", to: "30.0", code: "CXW 05A", nipple: "1.1/2\"", length: "15.0", af: "40.0", ac: "46.0", eDia: "32.0", fDia: "33.0" },
        { from: "30.0", to: "33.0", code: "CXW 06", nipple: "1.1/2\"", length: "15.0", af: "46.0", ac: "52.5", eDia: "35.0", fDia: "31.0" },
        { from: "30.0", to: "33.0", code: "CXW 06A", nipple: "1.1/4\"", length: "15.0", af: "46.0", ac: "52.5", eDia: "35.0", fDia: "27.0" },
        { from: "33.0", to: "37.0", code: "CXW 07", nipple: "1.1/2\"", length: "15.0", af: "48.5", ac: "56.0", eDia: "39.0", fDia: "32.0" },
        { from: "37.0", to: "41.0", code: "CXW 08", nipple: "2\"", length: "15.0", af: "55.5", ac: "64.0", eDia: "44.0", fDia: "43.5" },
        { from: "41.0", to: "46.0", code: "CXW 09", nipple: "2\"", length: "15.0", af: "56.5", ac: "65.0", eDia: "47.0", fDia: "42.0" },
        { from: "46.0", to: "52.0", code: "CXW 010", nipple: "2\"", length: "20.0", af: "65.0", ac: "75.0", eDia: "54.0", fDia: "45.0" },
        { from: "46.0", to: "52.0", code: "CXW 010A", nipple: "2.1/2\"", length: "20.0", af: "66.0", ac: "76.0", eDia: "54.0", fDia: "55.0" },
        { from: "52.0", to: "54.0", code: "CXW 011S", nipple: "2.1/2\"", length: "20.0", af: "71.0", ac: "82.0", eDia: "61.0", fDia: "56.0" },
        { from: "54.0", to: "61.0", code: "CXW 011", nipple: "2.1/2\"", length: "20.0", af: "78.0", ac: "90.0", eDia: "64.0", fDia: "56.0" },
        { from: "61.0", to: "66.0", code: "CXW 012", nipple: "3\"", length: "20.0", af: "84.0", ac: "96.0", eDia: "67.0", fDia: "64.0" },
        { from: "66.0", to: "72.0", code: "CXW 013A", nipple: "3\"", length: "20.0", af: "90.0", ac: "103.0", eDia: "76.0", fDia: "68.0" },
        { from: "72.0", to: "78.0", code: "CXW 013", nipple: "3.1/4\"", length: "20.0", af: "98.5", ac: "113.0", eDia: "80.0", fDia: "74.0" },
        { from: "78.0", to: "84.0", code: "CXW 014", nipple: "3.1/2\"", length: "20.0", af: "102.0", ac: "117.0", eDia: "90.0", fDia: "78.0" },
        { from: "84.0", to: "94.0", code: "CXW 015", nipple: "4\"", length: "20.0", af: "115.0", ac: "132.0", eDia: "97.0", fDia: "90.0" },
        { from: "94.0", to: "104.0", code: "CXW 016", nipple: "4.1/2\"", length: "20.0", af: "126.0", ac: "145.0", eDia: "106.0", fDia: "102.0" },
      ],
    },
  },
  {
    id: "double-compression-flame-proof",
    label: "Double Compression Flame Proof Cable Glands",
    image: "/images/products/brass-cable-glands/double-compression-flame-proof.png",
    images: ["/images/products/brass-cable-glands/double-compression-flame-proof.png"],
    drawings: [
      "/images/products/brass-cable-glands/double-compression-flame-proof-drawing-section.png",
      "/images/products/brass-cable-glands/double-compression-flame-proof-drawing-end.png",
    ],
    technicalFields: [
      {
        label: "Body Material",
        value: "Brass (IS-319) Standard\n(Al. / S.S. / M.S. also available)",
      },
      {
        label: "Surface Finish",
        value: "Nickel Plated Standard\n(Chrome Natural Brass / Other finishes on request)",
      },
      {
        label: "Entry Threads",
        value: "BSC Standard\n(PG / Metric / NPT / BSP / also available)",
      },
      { label: "Sealing Rubber Ring", value: "Nitrile / Neoprene" },
      { label: "Gland Standard", value: "BS 6121" },
      { label: "Ingress Protection", value: "IP 66" },
      {
        label: "Accessories",
        value:
          "Compatible accessories can include PVC shrouds, adaptors, reducers, stopping plugs, etc. according to the selected gland and customer requirement.",
      },
    ],
    applications: [
      "Flame Proof Double Compression Glands are designed for cable entry applications in hazardous areas containing flammable gases or vapours as well as suitable normal industrial environments.",
      "They provide weatherproof, water-resistant and dust-resistant protection up to IP66, where applicable to the specific product specification. The glands can also be used in hazardous climatic conditions where the required product specifications are met.",
      "When fitted with suitable PVC shrouds, the glands can provide additional protection for applications exposed to corrosive atmospheric conditions.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "code", label: "CXF Series", group: "CABNIX\nCode" },
        { key: "nipple", label: "Inches", group: "A\nNipple Entry" },
        { key: "length", label: "mm", group: "B\nLength" },
        { key: "af", label: "mm", group: "C\n(A/F)" },
        { key: "ac", label: "mm", group: "D\n(A/C)" },
        { key: "eDia", label: "Ø mm", group: "E\nDia." },
        { key: "fDia", label: "Ø mm", group: "F\nDia." },
      ],
      rows: [
        { from: "9.0", to: "12.0", code: "CXF 01SS", nipple: "3/4\"", length: "25.0", af: "22.0", ac: "25.0", eDia: "16.0", fDia: "14.0" },
        { from: "12.0", to: "16.5", code: "CXF 01S", nipple: "3/4\"", length: "25.0", af: "25.0", ac: "29.0", eDia: "17.5", fDia: "14.5" },
        { from: "16.5", to: "18.5", code: "CXF 01", nipple: "3/4\"", length: "25.0", af: "28.0", ac: "32.0", eDia: "20.0", fDia: "14.5" },
        { from: "16.5", to: "18.5", code: "CXF 01A", nipple: "1\"", length: "25.0", af: "28.0", ac: "32.0", eDia: "20.0", fDia: "20.5" },
        { from: "18.5", to: "20.0", code: "CXF 02", nipple: "1\"", length: "25.0", af: "29.5", ac: "33.0", eDia: "21.0", fDia: "19.0" },
        { from: "18.5", to: "20.0", code: "CXF 02A", nipple: "3/4\"", length: "25.0", af: "29.5", ac: "33.0", eDia: "21.0", fDia: "15.0" },
        { from: "20.0", to: "23.0", code: "CXF 03", nipple: "1\"", length: "25.0", af: "31.0", ac: "36.0", eDia: "23.5", fDia: "20.0" },
        { from: "23.0", to: "26.0", code: "CXF 04", nipple: "1\"", length: "25.0", af: "36.0", ac: "41.0", eDia: "27.0", fDia: "20.0" },
        { from: "23.0", to: "26.0", code: "CXF 04A", nipple: "1.1/4\"", length: "25.0", af: "36.0", ac: "41.0", eDia: "27.0", fDia: "26.0" },
        { from: "26.0", to: "30.0", code: "CXF 05", nipple: "1.1/4\"", length: "25.0", af: "40.0", ac: "46.0", eDia: "32.0", fDia: "26.0" },
        { from: "26.0", to: "30.0", code: "CXF 05A", nipple: "1.1/2\"", length: "25.0", af: "40.0", ac: "46.0", eDia: "32.0", fDia: "33.0" },
        { from: "30.0", to: "33.0", code: "CXF 06", nipple: "1.1/2\"", length: "25.0", af: "46.0", ac: "52.5", eDia: "35.0", fDia: "31.0" },
        { from: "30.0", to: "33.0", code: "CXF 06A", nipple: "1.1/4\"", length: "25.0", af: "46.0", ac: "52.5", eDia: "35.0", fDia: "27.0" },
        { from: "33.0", to: "37.0", code: "CXF 07", nipple: "1.1/2\"", length: "25.0", af: "48.5", ac: "56.0", eDia: "39.0", fDia: "32.0" },
        { from: "37.0", to: "41.0", code: "CXF 08", nipple: "2\"", length: "25.0", af: "55.5", ac: "64.0", eDia: "44.0", fDia: "43.5" },
        { from: "41.0", to: "46.0", code: "CXF 09", nipple: "2\"", length: "25.0", af: "56.5", ac: "65.0", eDia: "47.0", fDia: "42.0" },
        { from: "46.0", to: "52.0", code: "CXF 010", nipple: "2\"", length: "25.0", af: "65.0", ac: "75.0", eDia: "54.0", fDia: "45.0" },
        { from: "46.0", to: "52.0", code: "CXF 010A", nipple: "2.1/2\"", length: "25.0", af: "66.0", ac: "76.0", eDia: "54.0", fDia: "55.0" },
        { from: "52.0", to: "54.0", code: "CXF 011S", nipple: "2.1/2\"", length: "25.0", af: "71.0", ac: "82.0", eDia: "61.0", fDia: "56.0" },
        { from: "54.0", to: "61.0", code: "CXF 011", nipple: "2.1/2\"", length: "25.0", af: "78.0", ac: "90.0", eDia: "64.0", fDia: "56.0" },
        { from: "61.0", to: "66.0", code: "CXF 012", nipple: "3\"", length: "25.0", af: "84.0", ac: "96.0", eDia: "67.0", fDia: "64.0" },
        { from: "66.0", to: "72.0", code: "CXF 013A", nipple: "3\"", length: "25.0", af: "90.0", ac: "103.0", eDia: "76.0", fDia: "68.0" },
        { from: "72.0", to: "78.0", code: "CXF 013", nipple: "3.1/4\"", length: "25.0", af: "98.5", ac: "113.0", eDia: "80.0", fDia: "74.0" },
        { from: "78.0", to: "84.0", code: "CXF 014", nipple: "3.1/2\"", length: "25.0", af: "102.0", ac: "117.0", eDia: "90.0", fDia: "78.0" },
        { from: "84.0", to: "94.0", code: "CXF 015", nipple: "4\"", length: "25.0", af: "115.0", ac: "132.0", eDia: "97.0", fDia: "90.0" },
        { from: "94.0", to: "104.0", code: "CXF 016", nipple: "4.1/2\"", length: "25.0", af: "126.0", ac: "145.0", eDia: "106.0", fDia: "102.0" },
      ],
    },
  },
  {
    id: "double-compression-unarmoured-weather-proof",
    label: "Double Compression Unarmoured Weather Proof Cable Glands",
    image: "/images/products/brass-cable-glands/double-compression-unarmoured-weather-proof.png",
    images: ["/images/products/brass-cable-glands/double-compression-unarmoured-weather-proof.png"],
    drawings: [
      "/images/products/brass-cable-glands/double-compression-unarmoured-drawing-section.png",
      "/images/products/brass-cable-glands/double-compression-unarmoured-drawing-end.png",
    ],
    technicalFields: [
      {
        label: "Body Material",
        value: "Brass (IS-319) Standard\n(Al. / S.S. / M.S. also available)",
      },
      {
        label: "Surface Finish",
        value: "Nickel Plated Standard\n(Chrome Natural Brass / Other finishes on request)",
      },
      {
        label: "Entry Threads",
        value: "BSC Standard\n(PG / Metric / NPT / BSP / also available)",
      },
      { label: "Sealing Rubber Ring", value: "Nitrile / Neoprene" },
      { label: "Gland Standard", value: "BS 6121" },
      { label: "Ingress Protection", value: "IP 66" },
      {
        label: "Accessories",
        value:
          "Compatible accessories can include PVC shrouds, adaptors, reducers, stopping plugs, etc. according to the selected gland and customer requirement.",
      },
    ],
    applications: [
      "Weatherproof Double Compression Glands are designed to provide weatherproof and dustproof protection up to IP66, making them suitable for use under normal climatic conditions.",
      "When fitted with suitable PVC shrouds, they can also provide additional protection for applications exposed to corrosive atmospheric conditions.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "code", label: "CXW Series", group: "CABNIX\nCode" },
        { key: "nipple", label: "Inches", group: "A\nNipple Entry" },
        { key: "length", label: "mm", group: "B\nLength" },
        { key: "af", label: "mm", group: "C\n(A/F)" },
        { key: "ac", label: "mm", group: "D\n(A/C)" },
        { key: "eDia", label: "Ø mm", group: "E\nDia." },
        { key: "fDia", label: "Ø mm", group: "F\nDia." },
      ],
      rows: [
        { from: "9.0", to: "13.0", code: "CXW 01SS UN", nipple: "3/4\"", length: "15.0", af: "21.0", ac: "24.0", eDia: "13.0", fDia: "13.0" },
        { from: "13.0", to: "14.5", code: "CXW 01S UN", nipple: "3/4\"", length: "15.0", af: "25.0", ac: "29.0", eDia: "14.5", fDia: "14.5" },
        { from: "14.5", to: "18.0", code: "CXW 01A UN", nipple: "1\"", length: "15.0", af: "28.0", ac: "32.0", eDia: "18.0", fDia: "18.0" },
        { from: "18.0", to: "20.0", code: "CXW 02 UN", nipple: "1\"", length: "15.0", af: "31.5", ac: "36.5", eDia: "20.0", fDia: "20.0" },
        { from: "20.0", to: "23.0", code: "CXW 03SP UN", nipple: "M28", length: "15.0", af: "32.0", ac: "37.0", eDia: "23.0", fDia: "23.0" },
        { from: "23.0", to: "26.0", code: "CXW 04A UN", nipple: "1.1/4\"", length: "15.0", af: "38.0", ac: "44.0", eDia: "26.0", fDia: "26.0" },
        { from: "26.0", to: "30.0", code: "CXW 05A UN", nipple: "1.1/2\"", length: "15.0", af: "41.0", ac: "47.0", eDia: "30.0", fDia: "30.0" },
        { from: "30.0", to: "33.0", code: "CXW 06SP UN", nipple: "M40", length: "15.0", af: "47.0", ac: "54.0", eDia: "33.0", fDia: "33.0" },
        { from: "33.0", to: "36.0", code: "CXW 07SP UN", nipple: "M42", length: "15.0", af: "52.0", ac: "58.0", eDia: "36.0", fDia: "36.0" },
        { from: "36.0", to: "41.0", code: "CXW 08 UN", nipple: "2\"", length: "15.0", af: "56.0", ac: "64.0", eDia: "41.0", fDia: "41.0" },
        { from: "41.0", to: "44.0", code: "CXW 09 UN", nipple: "2\"", length: "15.0", af: "59.0", ac: "67.0", eDia: "46.0", fDia: "46.0" },
        { from: "44.0", to: "52.0", code: "CXW 010A UN", nipple: "2\"", length: "20.0", af: "66.5", ac: "77.0", eDia: "52.0", fDia: "52.0" },
        { from: "52.0", to: "60.0", code: "CXW 011SP UN", nipple: "M70", length: "20.0", af: "80.0", ac: "92.0", eDia: "60.0", fDia: "60.0" },
        { from: "60.0", to: "66.0", code: "CXW 012 UN", nipple: "3\"", length: "20.0", af: "85.0", ac: "97.0", eDia: "66.0", fDia: "66.0" },
        { from: "66.0", to: "72.0", code: "CXW 013 UN", nipple: "3.1/4\"", length: "20.0", af: "90.0", ac: "103.0", eDia: "72.0", fDia: "72.0" },
        { from: "72.0", to: "80.0", code: "CXW 014 UN", nipple: "3.1/2\"", length: "20.0", af: "105.0", ac: "122.0", eDia: "80.0", fDia: "80.0" },
        { from: "80.0", to: "90.0", code: "CXW 015 UN", nipple: "4\"", length: "20.0", af: "117.0", ac: "135.0", eDia: "90.0", fDia: "90.0" },
      ],
    },
  },
  {
    id: "single-compression",
    label: "Single Compression Cable Glands",
    image: "/images/products/brass-cable-glands/single-compression.png",
    images: ["/images/products/brass-cable-glands/single-compression.png"],
    drawings: [
      "/images/products/brass-cable-glands/single-compression-drawing-section.png",
      "/images/products/brass-cable-glands/single-compression-drawing-end.png",
    ],
    technicalFields: [
      { label: "Body Material", value: "Brass" },
      { label: "Surface Finish", value: "Nickel Plated Standard" },
      { label: "Entry Threads", value: "BSC Standard (Metric also available)" },
      { label: "Sealing Rubber Ring", value: "Natural" },
    ],
    applications: [
      "Suitable for armoured and unarmoured cable applications in normal climatic conditions.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "size", label: "mm", group: "Size" },
        { key: "sizeIn", label: "Inches", group: "Size" },
        { key: "d1", label: "Inches", group: "D1\nNipple Entry" },
        { key: "d2", label: "Ø mm", group: "D2\nDia." },
        { key: "d3", label: "Ø mm", group: "D3\nDia." },
        { key: "d4", label: "mm", group: "D4\n(A/F)" },
        { key: "d5", label: "mm", group: "D5\n(A/C)" },
        { key: "l1", label: "mm", group: "L1\nLength" },
      ],
      rows: [
        { from: "6.0", to: "9.0", size: "10", sizeIn: "3/8\"", d1: "5/8\"", d2: "12.5", d3: "12.7", d4: "18.0", d5: "20.5", l1: "7.0" },
        { from: "9.0", to: "12.0", size: "12", sizeIn: "1/2\"", d1: "5/8\"", d2: "12.0", d3: "15.0", d4: "20.5", d5: "23.5", l1: "7.0" },
        { from: "12.0", to: "14.0", size: "16", sizeIn: "5/8\"", d1: "3/4\"", d2: "15.0", d3: "15.0", d4: "20.5", d5: "23.5", l1: "7.0*" },
        { from: "14.0", to: "16.0", size: "19", sizeIn: "3/4\"", d1: "3/4\"", d2: "15.5", d3: "18.0", d4: "22.5", d5: "26.0", l1: "7.0*" },
        { from: "16.0", to: "18.0", size: "22", sizeIn: "7/8\"", d1: "3/4\"", d2: "15.5", d3: "20.0", d4: "25.5", d5: "29.0", l1: "7.0*" },
        { from: "18.0", to: "21.5", size: "25", sizeIn: "1\"", d1: "1\"", d2: "21.5", d3: "23.5", d4: "28.5", d5: "32.5", l1: "8.0*" },
        { from: "21.5", to: "26.0", size: "28", sizeIn: "1 1/8\"", d1: "1 1/8\"", d2: "25.0", d3: "27.5", d4: "33.5", d5: "38.0", l1: "8.5*" },
        { from: "26.0", to: "31.0", size: "32", sizeIn: "1 1/4\"", d1: "1 1/4\"", d2: "27.5", d3: "31.0", d4: "35.5", d5: "40.5", l1: "10.0*" },
        { from: "31.0", to: "34.0", size: "35", sizeIn: "1 3/8\"", d1: "1 3/8\"", d2: "30.0", d3: "35.5", d4: "40.5", d5: "47.0", l1: "10.0*" },
        { from: "34.0", to: "38.0", size: "38", sizeIn: "1 1/2\"", d1: "1 1/2\"", d2: "33.5", d3: "38.0", d4: "45.0", d5: "52.0", l1: "10.0*" },
        { from: "38.0", to: "42.0", size: "45", sizeIn: "1 3/4\"", d1: "1 3/4\"", d2: "39.5", d3: "44.0", d4: "50.5", d5: "58.5", l1: "11.0*" },
        { from: "42.0", to: "48.0", size: "50", sizeIn: "2\"", d1: "2\"", d2: "45.5", d3: "51.5", d4: "58.0", d5: "66.5", l1: "11.0*" },
        { from: "48.0", to: "54.0", size: "57", sizeIn: "2 1/4\"", d1: "2 1/4\"", d2: "52.5", d3: "57.0", d4: "64.0", d5: "74.0", l1: "11.0" },
        { from: "54.0", to: "60.0", size: "63", sizeIn: "2 1/2\"", d1: "2 1/2\"", d2: "58.0", d3: "63.0", d4: "70.0", d5: "80.0", l1: "13.0" },
        { from: "60.0", to: "66.0", size: "70", sizeIn: "2 3/4\"", d1: "2 3/4\"", d2: "62.0", d3: "70.0", d4: "78.0", d5: "89.0", l1: "13.0" },
        { from: "66.0", to: "72.0", size: "75", sizeIn: "3\"", d1: "3\"", d2: "74.0", d3: "70.0", d4: "83.5", d5: "96.5", l1: "13.5" },
        { from: "72.0", to: "78.0", size: "82", sizeIn: "3 1/4\"", d1: "3 1/4\"", d2: "75.5", d3: "81.0", d4: "90.0", d5: "103.5", l1: "14.0" },
        { from: "78.0", to: "84.0", size: "88", sizeIn: "3 1/2\"", d1: "3 1/2\"", d2: "77.5", d3: "84.0", d4: "94.5", d5: "109.5", l1: "15.0" },
        { from: "84.0", to: "92.0", size: "100", sizeIn: "4", d1: "4\"", d2: "92.5", d3: "100.0", d4: "110.0", d5: "127.0", l1: "15.0" },
      ],
    },
  },
  {
    id: "double-compression",
    label: "Double Compression Cable Glands",
    image: "/images/products/brass-cable-glands/double-compression.png",
    images: ["/images/products/brass-cable-glands/double-compression.png"],
    drawings: [
      "/images/products/brass-cable-glands/double-compression-drawing-section.png",
      "/images/products/brass-cable-glands/double-compression-drawing-end.png",
    ],
    technicalFields: [
      { label: "Body Material", value: "Brass" },
      { label: "Surface Finish", value: "Nickel Plated Standard" },
      { label: "Entry Threads", value: "BSC Standard (Metric / NPT also available)" },
      { label: "Sealing Rubber Ring", value: "Natural" },
    ],
    applications: [
      "Suitable for armoured and unarmoured cable applications under normal climatic conditions.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "size", label: "mm", group: "Size" },
        { key: "sizeIn", label: "Inches", group: "Size" },
        { key: "nipple", label: "Inches", group: "A\nNipple Entry" },
        { key: "length", label: "mm", group: "B\nLength" },
        { key: "af", label: "mm", group: "C\n(A/F)" },
        { key: "ac", label: "mm", group: "D\n(A/C)" },
        { key: "eDia", label: "Ø mm", group: "E\nDia." },
        { key: "fDia", label: "Ø mm", group: "F\nDia." },
      ],
      rows: [
        { from: "6.0", to: "9.0", size: "10", sizeIn: "3/8\"", nipple: "5/8\"", length: "25.0", af: "20.5", ac: "23.5", eDia: "10.0", fDia: "7.0" },
        { from: "9.0", to: "12.0", size: "12", sizeIn: "1/2\"", nipple: "5/8\"", length: "25.0", af: "22.5", ac: "26.0", eDia: "16.5", fDia: "11.0" },
        { from: "12.0", to: "16.0", size: "16", sizeIn: "5/8\"", nipple: "3/4\"", length: "25.0", af: "22.5", ac: "26.0", eDia: "16.5", fDia: "14.0" },
        { from: "16.0", to: "18.0", size: "19", sizeIn: "3/4\"", nipple: "3/4\"", length: "25.0", af: "25.5", ac: "29.5", eDia: "19.0", fDia: "15.0" },
        { from: "18.0", to: "20.0", size: "22", sizeIn: "7/8\"", nipple: "3/4\"", length: "25.0", af: "28.0", ac: "32.0", eDia: "20.0", fDia: "15.0" },
        { from: "18.0", to: "23.0", size: "25", sizeIn: "1\"", nipple: "1\"", length: "25.0", af: "31.0", ac: "35.5", eDia: "23.5", fDia: "20.0" },
        { from: "21.5", to: "26.0", size: "28", sizeIn: "1 1/8\"", nipple: "1 1/8\"", length: "25.0", af: "35.5", ac: "41.0", eDia: "27.0", fDia: "23.0" },
        { from: "26.0", to: "30.0", size: "32", sizeIn: "1 1/4\"", nipple: "1 1/4\"", length: "25.0", af: "41.0", ac: "47.0", eDia: "32.0", fDia: "25.5" },
        { from: "30.0", to: "33.0", size: "35", sizeIn: "1 3/8\"", nipple: "1 3/8\"", length: "25.0", af: "44.0", ac: "50.5", eDia: "35.0", fDia: "30.0" },
        { from: "33.0", to: "37.0", size: "38", sizeIn: "1 1/2\"", nipple: "1 1/2\"", length: "25.0", af: "47.0", ac: "54.0", eDia: "38.0", fDia: "31.5" },
        { from: "37.0", to: "43.0", size: "45", sizeIn: "1 3/4\"", nipple: "2\"", length: "25.0", af: "57.0", ac: "65.5", eDia: "47.0", fDia: "43.0" },
        { from: "43.0", to: "48.0", size: "50", sizeIn: "2\"", nipple: "2\"", length: "25.0", af: "59.0", ac: "68.0", eDia: "51.0", fDia: "43.0" },
        { from: "48.0", to: "54.0", size: "57", sizeIn: "2 1/4\"", nipple: "2 1/4\"", length: "25.0", af: "66.0", ac: "75.0", eDia: "57.0", fDia: "50.0" },
        { from: "54.0", to: "61.0", size: "63", sizeIn: "2 1/2\"", nipple: "2 1/2\"", length: "25.0", af: "77.0", ac: "89.0", eDia: "65.0", fDia: "57.0" },
        { from: "61.0", to: "67.0", size: "70", sizeIn: "2 3/4\"", nipple: "2 3/4\"", length: "25.0", af: "82.0", ac: "95.0", eDia: "72.0", fDia: "63.0" },
        { from: "67.0", to: "73.0", size: "75", sizeIn: "3\"", nipple: "3\"", length: "25.0", af: "90.0", ac: "105.0", eDia: "75.0", fDia: "65.0" },
        { from: "73.0", to: "78.0", size: "82", sizeIn: "3 1/4\"", nipple: "3 1/4\"", length: "25.0", af: "94.0", ac: "108.0", eDia: "83.0", fDia: "74.5" },
        { from: "78.0", to: "84.0", size: "88", sizeIn: "3 1/2\"", nipple: "3 1/2\"", length: "25.0", af: "103.0", ac: "119.0", eDia: "91.0", fDia: "79.0" },
        { from: "84.0", to: "94.0", size: "100", sizeIn: "4", nipple: "4\"", length: "25.0", af: "113.0", ac: "130.0", eDia: "98.0", fDia: "91.0" },
      ],
    },
  },
  {
    id: "flange-type",
    label: "Flange Type Cable Glands",
    image: "/images/products/brass-cable-glands/flange-type-photo.jpg",
    images: [
      "/images/products/brass-cable-glands/flange-type-photo.jpg",
      "/images/products/brass-cable-glands/flange-type.png",
    ],
    drawings: [
      "/images/products/brass-cable-glands/flange-type-drawing-top.png",
      "/images/products/brass-cable-glands/flange-type-drawing-side.png",
    ],
    description: [
      "Flange Type Cable Glands are manufactured from brass castings and accurately machined to the required dimensions. Designed primarily for armoured cable applications, these mechanical glands are suitable for outdoor installations.",
      "The gland consists of an oval-shaped brass flange body and clamping plate, secured with galvanised mild steel studs and nuts to provide firm clamping of the cable armour. A tapered cone and nut are provided for secure cable termination.",
      "The tapered design of the cone and body provides a firm and reliable grip on the cable armour, ensuring secure mechanical termination.",
    ],
    technicalFields: [
      { label: "Body Material", value: "Brass" },
      { label: "Surface Finish", value: "Brass" },
      { label: "Entry Threads", value: "BSC / ET" },
    ],
    applications: [
      "Generally suitable for armoured cables and outdoor installations.",
    ],
    sizeChart: {
      columns: [
        { key: "from", label: "From", group: "Suitable Cable\nOverall Dia" },
        { key: "to", label: "To", group: "Suitable Cable\nOverall Dia" },
        { key: "code", label: "CXFL Series", group: "CABNIX\nCode" },
        { key: "eDia", label: "Ø mm", group: "E\nDia." },
        { key: "lLength", label: "mm", group: "L\nLength" },
      ],
      rows: [
        { from: "12.0", to: "16.5", code: "CXFL 5", eDia: "15.0", lLength: "13.0" },
        { from: "15.0", to: "19.0", code: "CXFL 4", eDia: "19.0", lLength: "13.0" },
        { from: "18.5", to: "20.5", code: "CXFL 3", eDia: "19.5", lLength: "13.0" },
        { from: "20.5", to: "24.5", code: "CXFL 2", eDia: "25.0", lLength: "16.5" },
        { from: "24.0", to: "30.0", code: "CXFL 1", eDia: "31.0", lLength: "15.5" },
        { from: "29.5", to: "34.0", code: "CXFL 11", eDia: "31.0", lLength: "15.0" },
        { from: "32.5", to: "35.0", code: "CXFL 0", eDia: "37.5", lLength: "21.0" },
        { from: "34.5", to: "38.0", code: "CXFL 00", eDia: "37.5", lLength: "20.0" },
        { from: "37.0", to: "42.0", code: "CXFL 38", eDia: "42.0", lLength: "21.5" },
        { from: "40.5", to: "44.0", code: "CXFL 001", eDia: "49.0", lLength: "20.5" },
        { from: "43.5", to: "52.0", code: "CXFL 002", eDia: "53.5", lLength: "21.5" },
        { from: "51.0", to: "58.0", code: "CXFL 003", eDia: "60.0", lLength: "23.0" },
        { from: "56.5", to: "67.0", code: "CXFL 0033", eDia: "65.0", lLength: "25.5" },
        { from: "66.0", to: "76.0", code: "CXFL 004", eDia: "75.0", lLength: "22.5" },
        { from: "75.0", to: "83.0", code: "CXFL 005", eDia: "99.0", lLength: "22.5" },
      ],
    },
  },
  {
    id: "ip68",
    label: "IP68 Cable Glands",
    image: "/images/products/brass-cable-glands/ip68.png",
    images: [
      "/images/products/brass-cable-glands/ip68.png",
      "/images/products/brass-cable-glands/ip68-cutaway.png",
    ],
    materials: "Nickel Plated Brass",
    technicalFields: [
      { label: "Function", value: "Maximum strain relief across the clamping range. Trapezoidal thread design for high-torque tightening and secure assembly." },
      { label: "Thread", value: "PG, Metric" },
      { label: "Surface Finish", value: "Nickel Plated Brass" },
      { label: "Insert", value: "Polyamide PA6" },
      { label: "Ingress", value: "IP68" },
      { label: "Operating Temp.", value: "-30°C to +100°C" },
      { label: "Accessories", value: "Lock Nut, Neoprene Washer, Polyamide Insert and Perbunan O Ring" },
    ],
    applications: [
      "Suitable for applications requiring IP68 protection against dust, liquids, water, strain, twisting and vibration. PG/Metric Cable Glands are commonly used with measuring and control instruments, machinery and industrial equipment.",
      "They provide secure protection against movement, shaking and twisting, ensuring reliable cable entry and mechanical support.",
    ],
    sizeChart: {
      columns: [
        { key: "sr", label: "Sr. No." },
        { key: "type", label: "PG/M", group: "Type/Size" },
        { key: "clamping", label: "Range(mm)", group: "Clamping" },
        { key: "threadLength", label: "Length(mm)", group: "Entry Thread" },
        { key: "wrench", label: "Size(mm)", group: "Wrench" },
        { key: "maxAss", label: "Length", group: "Max Ass." },
      ],
      rows: [
        { sr: "1", type: "PG 7", clamping: "02-6.5", threadLength: "5.00", wrench: "14.00", maxAss: "23.00", code: "IP68-1" },
        { sr: "2", type: "PG 9", clamping: "03-08", threadLength: "6.00", wrench: "17.00", maxAss: "28.00", code: "IP68-2" },
        { sr: "3", type: "PG 11", clamping: "04-10", threadLength: "6.00", wrench: "20.00", maxAss: "29.00", code: "IP68-3" },
        { sr: "4", type: "PG 13.5", clamping: "05-12", threadLength: "6.50", wrench: "22.00", maxAss: "30.00", code: "IP68-4" },
        { sr: "5", type: "PG 16", clamping: "08-14", threadLength: "6.50", wrench: "24.00", maxAss: "31.00", code: "IP68-5" },
        { sr: "6", type: "PG 21", clamping: "11-18", threadLength: "7.00", wrench: "30.00", maxAss: "36.00", code: "IP68-6" },
        { sr: "7", type: "PG 29", clamping: "16-25", threadLength: "8.00", wrench: "40.00", maxAss: "41.00", code: "IP68-7" },
        { sr: "8", type: "PG 36", clamping: "22-32", threadLength: "9.00", wrench: "50.00", maxAss: "46.00", code: "IP68-8" },
        { sr: "9", type: "PG 42", clamping: "28-38", threadLength: "10.00", wrench: "57.00", maxAss: "52.00", code: "IP68-9" },
        { sr: "10", type: "PG 48", clamping: "34-44", threadLength: "5.00", wrench: "64.00", maxAss: "52.00", code: "IP68-10" },
        { sr: "11", type: "M 12", clamping: "02-6.5", threadLength: "5.00", wrench: "14.00", maxAss: "24.50", code: "IP68-11" },
        { sr: "12", type: "M 16", clamping: "03-08", threadLength: "5.00", wrench: "17.00", maxAss: "27.00", code: "IP68-12" },
        { sr: "13", type: "M 20", clamping: "05-12", threadLength: "6.00", wrench: "22.00", maxAss: "30.00", code: "IP68-13" },
        { sr: "14", type: "M 25", clamping: "09-16", threadLength: "7.00", wrench: "27.00", maxAss: "35.00", code: "IP68-14" },
        { sr: "15", type: "M 32", clamping: "12-21", threadLength: "8.00", wrench: "34.00", maxAss: "38.00", code: "IP68-15" },
        { sr: "16", type: "M 40", clamping: "18-28", threadLength: "8.00", wrench: "43.00", maxAss: "43.00", code: "IP68-16" },
        { sr: "17", type: "M 50", clamping: "26-36", threadLength: "9.00", wrench: "55.00", maxAss: "47.50", code: "IP68-17" },
        { sr: "18", type: "M 63", clamping: "36-48", threadLength: "10.00", wrench: "65.00", maxAss: "58.50", code: "IP68-18" },
        { sr: "19", type: "M 70", clamping: "40-53", threadLength: "15.00", wrench: "74.00", maxAss: "59.00", code: "IP68-19" },
        { sr: "20", type: "M75", clamping: "48-63", threadLength: "15.00", wrench: "79.00", maxAss: "59.00", code: "IP68-20" },
        { sr: "21", type: "M 80", clamping: "53-68", threadLength: "15.00", wrench: "85.00", maxAss: "62.00", code: "IP68-21" },
        { sr: "22", type: "M 90", clamping: "60-75", threadLength: "20.00", wrench: "95.00", maxAss: "70.00", code: "IP68-22" },
      ],
    },
  },
  {
    id: "bw",
    label: "BW Cable Gland",
    image: "/images/products/brass-cable-glands/bw.png",
    images: [
      "/images/products/brass-cable-glands/bw.png",
      "/images/products/brass-cable-glands/bw-cutaway.png",
    ],
    materials: "Brass BS 2874",
    technicalFields: [
      { label: "Material", value: "Brass BS 2874" },
      { label: "Thread", value: "Metric, NPT" },
      { label: "Cable Type", value: "SWA Cable" },
      { label: "Operating Temp.", value: "-80°C to +300°C" },
      { label: "Accessories", value: "Shroud, Earth Tag, Galvanized Steel, Lock Nut and Serrated Washer" },
    ],
    applications: [
      "Provides mechanical cable retention and electrical continuity through secure termination of the cable armour, making it suitable for indoor applications. The gland is designed for easy and efficient installation.",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Size" },
        { key: "metric", label: "Metric", group: 'Thread "C"' },
        { key: "npt", label: "NPT", group: 'Thread "C"' },
        { key: "threadLength", label: 'Thread\nLength "D"' },
        { key: "cableAMax", label: 'Cable Dia.\n"A" Max.' },
        { key: "cableBMax", label: 'Cable Dia.\n"B" Max.' },
        { key: "armour", label: "Armour\nWire Dia." },
        { key: "acrossFlat", label: "Across\nFlat" },
        { key: "acrossCorners", label: "Across\nCorners" },
        { key: "code", label: "CABNIX\nCode" },
      ],
      rows: [
        { size: "20S", metric: "20", npt: "1/2\"", threadLength: "10", cableAMax: "11.5", cableBMax: "15.5", armour: "0.90-1.25", acrossFlat: "21.25", acrossCorners: "23.25", code: "CXBW20S" },
        { size: "20", metric: "20", npt: "1/2\"", threadLength: "10", cableAMax: "14", cableBMax: "20", armour: "1.25-1.60", acrossFlat: "23.85", acrossCorners: "27.25", code: "CXBW20" },
        { size: "25", metric: "25", npt: "1\"", threadLength: "10", cableAMax: "20.5", cableBMax: "26", armour: "1.60-2.00", acrossFlat: "34", acrossCorners: "37", code: "CXBW25" },
        { size: "32", metric: "32", npt: "1\"", threadLength: "15", cableAMax: "27", cableBMax: "33.9", armour: "1.60-2.00", acrossFlat: "40.5", acrossCorners: "45.5", code: "CXBW32" },
        { size: "40", metric: "40", npt: "1½\"", threadLength: "15", cableAMax: "33", cableBMax: "41.5", armour: "2.00-2.50", acrossFlat: "48", acrossCorners: "54.5", code: "CXBW40" },
        { size: "50S", metric: "50", npt: "2\"", threadLength: "15", cableAMax: "38.5", cableBMax: "47", armour: "2.00-2.50", acrossFlat: "55", acrossCorners: "60", code: "CXBW50S" },
        { size: "50", metric: "50", npt: "2\"", threadLength: "15", cableAMax: "44", cableBMax: "52", armour: "2.50", acrossFlat: "63", acrossCorners: "71", code: "CXBW50" },
        { size: "63S", metric: "63", npt: "2\"", threadLength: "15", cableAMax: "51", cableBMax: "59.2", armour: "2.50", acrossFlat: "70.5", acrossCorners: "75.5", code: "CXBW63S" },
        { size: "63", metric: "63", npt: "2½\"", threadLength: "15", cableAMax: "56.8", cableBMax: "65.5", armour: "2.50", acrossFlat: "75", acrossCorners: "84.5", code: "CXBW63" },
        { size: "75S", metric: "75", npt: "2½\"", threadLength: "15", cableAMax: "63", cableBMax: "74", armour: "2.50-3.15", acrossFlat: "85", acrossCorners: "90", code: "CXBW75S" },
        { size: "75", metric: "75", npt: "3\"", threadLength: "15", cableAMax: "68.5", cableBMax: "79.5", armour: "3.15", acrossFlat: "92.25", acrossCorners: "102.5", code: "CXBW75" },
        { size: "82", metric: "82", npt: "3\"", threadLength: "15", cableAMax: "74.3", cableBMax: "84.4", armour: "3.15", acrossFlat: "95", acrossCorners: "105", code: "CXBW82" },
        { size: "90", metric: "90", npt: "3\"", threadLength: "15", cableAMax: "82", cableBMax: "91", armour: "3.15", acrossFlat: "99", acrossCorners: "110", code: "CXBW90" },
      ],
    },
  },
  {
    id: "cw",
    label: "CW Cable Gland",
    image: "/images/products/brass-cable-glands/cw.png",
    images: [
      "/images/products/brass-cable-glands/cw.png",
      "/images/products/brass-cable-glands/cw-cutaway.png",
    ],
    materials: "Brass BS 2874",
    technicalFields: [
      { label: "Material", value: "Brass BS 2874" },
      { label: "Thread", value: "Metric, NPT" },
      { label: "Cable Type", value: "SWA Cable" },
      { label: "Operating Temp.", value: "-60°C to +130°C" },
      { label: "Features", value: "Universal anyway clamping ring" },
      { label: "Accessories", value: "PVC Shroud, Earth Tag, Lock Nut, Serrated Washer and Entry Thread Seal" },
    ],
    applications: [
      "Provides a mechanical seal on the SWA cable outer sheath, while also providing mechanical cable retention and electrical continuity through secure termination of the cable armour. Suitable for both indoor and outdoor applications.",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Size" },
        { key: "metric", label: "Metric", group: 'Thread "C"' },
        { key: "npt", label: "NPT", group: 'Thread "C"' },
        { key: "threadLength", label: 'Thread\nLength "D"' },
        { key: "cableAMax", label: 'Cable Dia.\n"A" Max.' },
        { key: "diaBMin", label: "Min.", group: 'Cable Dia.\n"B"' },
        { key: "diaBMax", label: "Max.", group: 'Cable Dia.\n"B"' },
        { key: "armour", label: "Armour\nWire Dia." },
        { key: "acrossFlat", label: "Across\nFlat" },
        { key: "acrossCorners", label: "Across\nCorners" },
        { key: "code", label: "CABNIX\nCode" },
      ],
      rows: [
        { size: "16", metric: "16", npt: "-", threadLength: "10", cableAMax: "8.6", diaBMin: "6.1", diaBMax: "12", armour: "0.90", acrossFlat: "20", acrossCorners: "23", code: "CXCW16" },
        { size: "20S", metric: "20", npt: "1/2\"", threadLength: "10", cableAMax: "11.8", diaBMin: "9.5", diaBMax: "16.2", armour: "0.90-1.25", acrossFlat: "24", acrossCorners: "27", code: "CXCW20S" },
        { size: "20", metric: "20", npt: "1/2\"", threadLength: "10", cableAMax: "14", diaBMin: "13", diaBMax: "20.25", armour: "0.90-1.25", acrossFlat: "27.7", acrossCorners: "31", code: "CXCW20" },
        { size: "25", metric: "25", npt: "3/4\"", threadLength: "10", cableAMax: "20.3", diaBMin: "18", diaBMax: "26", armour: "1.20-1.60", acrossFlat: "35", acrossCorners: "39", code: "CXCW25" },
        { size: "32", metric: "32", npt: "1¼\"", threadLength: "10", cableAMax: "26.5", diaBMin: "23", diaBMax: "33.7", armour: "1.60-2.00", acrossFlat: "43", acrossCorners: "47.5", code: "CXCW32" },
        { size: "40", metric: "40", npt: "1½\"", threadLength: "13", cableAMax: "33.2", diaBMin: "28", diaBMax: "40.1", armour: "1.60-2.00", acrossFlat: "51.5", acrossCorners: "57", code: "CXCW40" },
        { size: "50S", metric: "50", npt: "2\"", threadLength: "13", cableAMax: "40", diaBMin: "34.5", diaBMax: "45.75", armour: "2.00-2.50", acrossFlat: "58.5", acrossCorners: "65", code: "CXCW50S" },
        { size: "50", metric: "50", npt: "2\"", threadLength: "13", cableAMax: "44", diaBMin: "39.6", diaBMax: "53.1", armour: "2.00-2.50", acrossFlat: "66", acrossCorners: "73", code: "CXCW50" },
        { size: "63S", metric: "63", npt: "2½\"", threadLength: "14", cableAMax: "50", diaBMin: "44", diaBMax: "59.4", armour: "2.50", acrossFlat: "72", acrossCorners: "80", code: "CXCW63S" },
        { size: "63", metric: "63", npt: "2½\"", threadLength: "14", cableAMax: "56", diaBMin: "54.5", diaBMax: "65", armour: "2.50", acrossFlat: "80", acrossCorners: "89", code: "CXCW63" },
        { size: "75S", metric: "75", npt: "3\"", threadLength: "15", cableAMax: "62", diaBMin: "59", diaBMax: "71.4", armour: "2.50", acrossFlat: "86.5", acrossCorners: "97", code: "CXCW75S" },
        { size: "75", metric: "75", npt: "3\"", threadLength: "15", cableAMax: "69.5", diaBMin: "66.7", diaBMax: "78", armour: "2.50", acrossFlat: "94", acrossCorners: "105", code: "CXCW75" },
        { size: "90", metric: "90", npt: "3½\"", threadLength: "20", cableAMax: "80", diaBMin: "76.2", diaBMax: "89.25", armour: "2.50-3.15", acrossFlat: "106", acrossCorners: "118.7", code: "CXCW90" },
        { size: "100", metric: "100", npt: "-", threadLength: "20", cableAMax: "91", diaBMin: "86", diaBMax: "102", armour: "3.15-4.00", acrossFlat: "123", acrossCorners: "133", code: "CXCW100" },
        { size: "110", metric: "110", npt: "-", threadLength: "20", cableAMax: "100", diaBMin: "101", diaBMax: "110.5", armour: "3.15-4.00", acrossFlat: "134", acrossCorners: "144", code: "CXCW110" },
        { size: "115", metric: "115", npt: "-", threadLength: "20", cableAMax: "102", diaBMin: "101.5", diaBMax: "110.5", armour: "3.15-4.00", acrossFlat: "134", acrossCorners: "144", code: "CXCW115" },
      ],
    },
  },
  {
    id: "e1fw",
    label: "E1FW Cable Gland",
    image: "/images/products/brass-cable-glands/e1fw.png",
    images: [
      "/images/products/brass-cable-glands/e1fw.png",
      "/images/products/brass-cable-glands/e1fw-cutaway.png",
    ],
    materials: "Brass BS 2874 and also available in Nickel Plated Brass",
    technicalFields: [
      { label: "Material", value: "Brass BS 2874 and also available in Nickel Plated Brass" },
      { label: "Thread", value: "Metric, NPT and PG" },
      { label: "Cable Type", value: "Steel Wire (SWA) Cable" },
      { label: "Operating Temp.", value: "-60°C to +130°C" },
      { label: "Features", value: "Displacement seal and Two part Armour Lock" },
      { label: "Accessories", value: "Shroud, Earth Tag, Lock Nut, Serrated Washer, Entry Thread Seal, Adapter and Reducer" },
    ],
    applications: [
      "Provides a flameproof seal on the inner sheath and an environmental seal on the outer sheath of various types of armoured cables, suitable for indoor and outdoor applications in hazardous areas including Zone 1, Zone 2 and Zone 22.",
      "It also provides mechanical cable retention and electrical continuity through secure termination of the cable armour.",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Size" },
        { key: "metric", label: "Metric", group: 'Thread "C"' },
        { key: "npt", label: "NPT", group: 'Thread "C"' },
        { key: "threadLength", label: 'Thread\nLength "D"' },
        { key: "cableMin", label: "Min.", group: "Cable Range\nDia." },
        { key: "cableMax", label: "Max.", group: "Cable Range\nDia." },
        { key: "diaBMin", label: "Min.", group: "Cable Dia.\nB" },
        { key: "diaBMax", label: "Max.", group: "Cable Dia.\nB" },
        { key: "armour", label: "Armour\nWire Dia." },
        { key: "acrossFlat", label: "Across\nFlat" },
        { key: "code", label: "CABNIX\nCode" },
      ],
      rows: [
        { size: "16", metric: "16", npt: "-", threadLength: "15.00", cableMin: "3.10", cableMax: "8.60", diaBMin: "6.10", diaBMax: "12.00", armour: "0.90", acrossFlat: "24.50", code: "CXE1FW16" },
        { size: "20S", metric: "20", npt: "1/2\"", threadLength: "15.00", cableMin: "6.10", cableMax: "11.60", diaBMin: "9.50", diaBMax: "16.20", armour: "0.90-1.25", acrossFlat: "24.50", code: "CXE1FW20S" },
        { size: "20", metric: "20", npt: "1/2\"", threadLength: "15.00", cableMin: "6.50", cableMax: "13.90", diaBMin: "13.00", diaBMax: "20.25", armour: "0.90-1.25", acrossFlat: "28.00", code: "CXE1FW20" },
        { size: "25", metric: "25", npt: "3/4\"", threadLength: "15.00", cableMin: "11.10", cableMax: "19.90", diaBMin: "18.00", diaBMax: "26.00", armour: "1.25-1.60", acrossFlat: "38.00", code: "CXE1FW25" },
        { size: "32", metric: "32", npt: "1\"", threadLength: "15.00", cableMin: "17.00", cableMax: "26.15", diaBMin: "23.00", diaBMax: "33.70", armour: "1.60-2.00", acrossFlat: "46.00", code: "CXE1FW32" },
        { size: "40", metric: "40", npt: "1¼\"", threadLength: "15.00", cableMin: "22.00", cableMax: "32.10", diaBMin: "28.00", diaBMax: "40.10", armour: "1.60-2.00", acrossFlat: "54.00", code: "CXE1FW40" },
        { size: "50S", metric: "50", npt: "1½\"", threadLength: "15.00", cableMin: "29.80", cableMax: "38.10", diaBMin: "34.50", diaBMax: "45.75", armour: "2.00-2.50", acrossFlat: "61.50", code: "CXE1FW50S" },
        { size: "50", metric: "50", npt: "2\"", threadLength: "15.00", cableMin: "36.90", cableMax: "43.30", diaBMin: "39.60", diaBMax: "53.10", armour: "2.00-2.50", acrossFlat: "70.00", code: "CXE1FW50" },
        { size: "63S", metric: "63", npt: "2\"", threadLength: "15.00", cableMin: "42.20", cableMax: "49.90", diaBMin: "44.00", diaBMax: "59.40", armour: "2.00-2.50", acrossFlat: "76.00", code: "CXE1FW63S" },
        { size: "63", metric: "63", npt: "2½\"", threadLength: "15.00", cableMin: "48.30", cableMax: "54.90", diaBMin: "54.50", diaBMax: "65.00", armour: "2.00-2.50", acrossFlat: "80.00", code: "CXE1FW63" },
        { size: "75S", metric: "75", npt: "2½\"", threadLength: "15.00", cableMin: "54.20", cableMax: "62.00", diaBMin: "59.00", diaBMax: "71.40", armour: "2.00-2.50", acrossFlat: "89.00", code: "CXE1FW75S" },
        { size: "75", metric: "75", npt: "3\"", threadLength: "15.00", cableMin: "59.80", cableMax: "66.90", diaBMin: "66.70", diaBMax: "78.00", armour: "2.50-3.00", acrossFlat: "98.50", code: "CXE1FW75" },
        { size: "90", metric: "90", npt: "3\"", threadLength: "18.00", cableMin: "66.60", cableMax: "79.30", diaBMin: "76.20", diaBMax: "89.25", armour: "3.00-3.50", acrossFlat: "113.00", code: "CXE1FW90" },
        { size: "100", metric: "100", npt: "3½\"", threadLength: "20.00", cableMin: "77.00", cableMax: "91.00", diaBMin: "86.00", diaBMax: "102.00", armour: "3.15-4.00", acrossFlat: "123.00", code: "CXE1FW100" },
        { size: "110", metric: "110", npt: "-", threadLength: "20.00", cableMin: "86.00", cableMax: "100.00", diaBMin: "101.00", diaBMax: "110.50", armour: "3.15-4.00", acrossFlat: "134.00", code: "CXE1FW110" },
        { size: "115", metric: "115", npt: "-", threadLength: "20.00", cableMin: "86.00", cableMax: "102.00", diaBMin: "101.50", diaBMax: "110.50", armour: "3.15-4.00", acrossFlat: "134.00", code: "CXE1FW115" },
      ],
    },
  },
  {
    id: "a2f-flameproof-exd",
    label: "A2F Flameproof Exd Cable Gland",
    image: "/images/products/brass-cable-glands/a2f-flameproof-exd.png",
    images: [
      "/images/products/brass-cable-glands/a2f-flameproof-exd.png",
      "/images/products/brass-cable-glands/a2f-cutaway.png",
    ],
    sizeChart: {
      columns: [
        { key: "size", label: "Size" },
        { key: "metric", label: "Metric", group: 'Thread "C"' },
        { key: "npt", label: "NPT", group: 'Thread "C"' },
        { key: "threadLength", label: 'Thread\nLength "D"' },
        { key: "minA", label: 'Min. "A"', group: "Cable Range\nDia." },
        { key: "maxB", label: 'Max. "B"', group: "Cable Range\nDia." },
        { key: "acrossFlat", label: "Across\nFlat" },
        { key: "acrossCorners", label: "Across\nCorners" },
        { key: "code", label: "CABNIX\nCode" },
      ],
      rows: [
        { size: "16", metric: "16", npt: "-", threadLength: "15", minA: "3.1", maxB: "8.6", acrossFlat: "21", acrossCorners: "23", code: "CXA2F16" },
        { size: "20S", metric: "20", npt: "1/2\"", threadLength: "15", minA: "6.1", maxB: "11.6", acrossFlat: "24", acrossCorners: "26.5", code: "CXA2F20S" },
        { size: "20", metric: "20", npt: "1/2\"", threadLength: "15", minA: "6.5", maxB: "13.9", acrossFlat: "27", acrossCorners: "30", code: "CXA2F20" },
        { size: "25", metric: "25", npt: "3/4\"", threadLength: "15", minA: "11.1", maxB: "19.9", acrossFlat: "36", acrossCorners: "39.75", code: "CXA2F25" },
        { size: "32", metric: "32", npt: "1\"", threadLength: "15", minA: "17", maxB: "26.15", acrossFlat: "41", acrossCorners: "46", code: "CXA2F32" },
        { size: "40", metric: "40", npt: "1¼\"", threadLength: "15", minA: "22", maxB: "32.1", acrossFlat: "49.25", acrossCorners: "55", code: "CXA2F40" },
        { size: "50S", metric: "50", npt: "1½\"", threadLength: "15", minA: "29.8", maxB: "38.1", acrossFlat: "54.75", acrossCorners: "61.3", code: "CXA2F50S" },
        { size: "50", metric: "50", npt: "2\"", threadLength: "15", minA: "36.9", maxB: "43.3", acrossFlat: "60", acrossCorners: "66.5", code: "CXA2F50" },
        { size: "63S", metric: "63", npt: "2\"", threadLength: "15", minA: "42.2", maxB: "49.9", acrossFlat: "70.25", acrossCorners: "77.5", code: "CXA2F63S" },
        { size: "63", metric: "63", npt: "2½\"", threadLength: "15", minA: "48.3", maxB: "54.9", acrossFlat: "74.75", acrossCorners: "83", code: "CXA2F63" },
        { size: "75S", metric: "75", npt: "2½\"", threadLength: "15", minA: "54.2", maxB: "62", acrossFlat: "80", acrossCorners: "89", code: "CXA2F75S" },
        { size: "75", metric: "75", npt: "3\"", threadLength: "15", minA: "59.8", maxB: "66.9", acrossFlat: "84", acrossCorners: "94", code: "CXA2F75" },
        { size: "90", metric: "90", npt: "3\"", threadLength: "18", minA: "66.6", maxB: "79.3", acrossFlat: "107", acrossCorners: "119.7", code: "CXA2F90" },
        { size: "100", metric: "100", npt: "3½\"", threadLength: "20", minA: "77", maxB: "91", acrossFlat: "122", acrossCorners: "132", code: "CXA2F100" },
        { size: "110", metric: "110", npt: "-", threadLength: "20", minA: "86", maxB: "100", acrossFlat: "138", acrossCorners: "148", code: "CXA2F110" },
        { size: "115", metric: "115", npt: "-", threadLength: "20", minA: "86", maxB: "102", acrossFlat: "138", acrossCorners: "148", code: "CXA2F115" },
      ],
    },
    materials: "Brass BS 2874 and also available in Nickel Plated Brass",
    technicalFields: [
      { label: "Material", value: "Brass BS 2874 and also available in Nickel Plated Brass" },
      { label: "Thread", value: "Metric, NPT and PG" },
      { label: "Operating Temp.", value: "-60°C to +130°C" },
      { label: "Features", value: "Outer Displacement seal" },
      { label: "Accessories", value: "Shroud, Earth Tag, Lock Nut, Serrated Washer, Entry Thread Seal, Adaptor and Reducer" },
    ],
    applications: [
      "Provides a combined flameproof and environmental seal on the outer sheath of various types of unarmoured cables, making it suitable for indoor and outdoor installations in hazardous areas.",
    ],
  },
];

const brassInsertModels: ProductModel[] = [
  {
    id: "brass-inserts",
    label: "Brass Inserts",
    image: "/images/products/brass-inserts/insert-01.jpg",
    images: [
      "/images/products/brass-inserts/insert-01.jpg",
      "/images/products/brass-inserts/insert-02.jpg",
      "/images/products/brass-inserts/insert-03.jpg",
      "/images/products/brass-inserts/insert-04.jpg",
    ],
    description: [
      "The wide range of Brass Inserts include threaded molding inserts, ultrasonic molding inserts, knurled molding inserts, molding inserts for plastic, wood molding inserts and more. The range of standard and high quality molding inserts designed to molded into the plastic, wood or any molded components.",
      "We are looked upon as one of the prominent Brass Inserts Suppliers in India. The brass used in the manufacturing of these Brass Inserts is of optimum quality that ensures high durability, tensile strength and resistance to corrosion. High temperature bearing capacity has also made these Brass Inserts ideal for various industrial applications.",
    ],
    technicalFields: [
      {
        label: "Material",
        value:
          "Free Cutting Brass IS 319 Type (I) or BS 249 Type (I) or High Grade\nAny Special Brass Material Composition as per customers requirement",
      },
      {
        label: "Threads",
        value: "ISO Metric (MM Threads)\nBA, BSW (Inches), UNC, UNF or\nAny as per custom design",
      },
      {
        label: "Length / Size",
        value:
          "Begins from M2 or equivalent threads and up to any size as per custom design or requirement",
      },
      {
        label: "Finish and Coating",
        value:
          "Natural, Nickel Plated, Tin Plated brass inserts or any coating as per customer specification.",
      },
      {
        label: "Also Available",
        value: "Brass Round Knurled Inserts\nBrass Hexagonal Inserts\nBrass Square Inserts",
      },
    ],
    features: [
      "Threads as per International Go & Not Go Standards.",
      "Deep Groove for maximum Pull Out Resistance.",
      "Knurling Available: Diamond, Straight, Unidirectional.",
      "Both blind and through brass inserts are available with no minimum Qty.",
    ],
  },
];

const brassElectricComponentModels: ProductModel[] = [
  {
    id: "brass-electric-components",
    label: "Brass Electric Components",
    image: "/images/products/brass-electric-parts/electric-01.jpg",
    images: [
      "/images/products/brass-electric-parts/electric-01.jpg",
      "/images/products/brass-electric-parts/electric-02.jpg",
      "/images/products/brass-electric-parts/electric-03.jpg",
      "/images/products/brass-electric-parts/electric-04.jpg",
    ],
    description: [
      "We are manufacturing all Kinds of Brass Electrical Components and Brass Electrical Fittings like Electrical Plug Pins, Sockets Pins, Brass Neutral Links, Brass Terminal Block, Brass Connectors, Brass Contacts and more. Brass Electrical Components are consumed in various applications like Toggle Switches, Modular Switches, Switchgears, Fuse Switches, Plug Pins & Sockets and many Electrical & Electronics Equipment or Parts.",
      "Brass Electrical Parts for various industries including Power Generation, Electronic Industry, Solar Energy, Automotive Industry, Medical Industry, Electrical and Engineering Assembly.",
    ],
    technicalFields: [
      {
        label: "Material",
        value:
          "Free Cutting Brass IS 319 Type (I) or BS 249 Type (I) or High Grade\nAny Special Brass Material Composition as per customers requirement",
      },
      {
        label: "Threads",
        value:
          "ISO Metric, MM, PG, BSW, BSP, BSB, BSF, BA, NPT, NPTF, UNC, UNF, UNEF\nAny threads as per customer's design",
      },
      {
        label: "Finish and Coating",
        value: "Natural, Nickel Plated, Tin Plated or any coating as per customer specification.",
      },
    ],
    features: [
      "Electrical Insulating Components",
      "Auto Electrical Parts And Equipments",
      "Electrical Terminals",
      "Electrical Sockets",
      "Neutral Links",
      "Panel Board Accessories",
      "Electrical Pins",
      "Switch Gear Accessories",
      "Terminal Blocks",
    ],
  },
];

export const productFamilies: ProductFamily[] = [
  {
    id: "brass-cable-glands",
    name: "Brass Cable Glands",
    slug: "brass-cable-glands",
    description: "Product description will be added here.",
    image: "/images/products/brass-cable-glands/main.jpg",
    models: brassCableGlandModels,
  },
  {
    id: "brass-inserts",
    name: "Brass Inserts",
    slug: "brass-inserts",
    description: "Product description will be added here.",
    image: "/images/products/brass-inserts/range-card.png",
    models: brassInsertModels,
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
    name: "Cable Gland Accessories",
    slug: "accessories",
    description: "Product description will be added here.",
    image: "/images/products/accessories/main.jpg",
    models: cableGlandAccessoryModels,
  },
  {
    id: "brass-electric-parts",
    name: "Brass Electric Components",
    slug: "brass-electric-parts",
    description: "Product description will be added here.",
    image: "",
    models: brassElectricComponentModels,
  },
];

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

export const homepageProductRange: FeaturedProduct[] = [
  { slug: "brass-cable-glands", name: "Brass Cable Glands", category: "Products", description: productCardCopy, imageSrc: "/images/products/brass-cable-glands/range-wide.png" },
  { slug: "brass-inserts", name: "Brass Inserts", category: "Products", description: productCardCopy, imageSrc: "/images/products/brass-inserts/range-wide.png" },
  { slug: "accessories", name: "Cable Gland Accessories", category: "Products", description: productCardCopy, imageSrc: "/images/products/accessories/range-wide.png" },
  { slug: "brass-electric-parts", name: "Brass Electric Components", category: "Products", description: productCardCopy, imageSrc: "/images/products/brass-electric-parts/electric-01.jpg" },
];

export const catalogueProducts: FeaturedProduct[] = homepageProductRange;

export function featuredProductHref(slug: string) {
  return `/products/${slug}`;
}

export const productNavItems = homepageProductRange.map((item) => ({
  label: item.name,
  href: featuredProductHref(item.slug),
}));

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

export const productsHeroSrc = "/images/products-hero.png";

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

export const applicationsBackground = "/images/applications/section-background.png";

export const manufacturingMedia = {
  heroSrc: "",
  accents: [
    { title: "Manufacturing", image: "" },
    { title: "Quality Inspection", image: "" },
    { title: "Finished Products", image: "" },
  ],
};

export const manufacturingCatalogue = {
  coverSrc: "/images/catalogue-cabnix.jpg",
  href: "/resources/catalogues",
};

export const socialLinks: { label: string; href: string }[] = [];

export const heroImageSrc = "/images/hero-01.jpg";

export const aboutHeroSrc = "/images/about-hero.png";
export const aboutMainSrc = "/images/about-main.jpg";

export const certificateHeroSrc = "/images/certificate-hero.png";
export const qualityHeroSrc = "/images/quality-banner.jpg";

export const qualityPolicy = {
  eyebrow: "Quality Assurance",
  title: "Quality Policy",
  intro: [
    "At CABNIX, quality is built into manufacturing — from precision machining and finishing through inspection and packing. As a specialized brand of Varudi Brass Products with 20+ years of brass manufacturing experience since 2003, we focus on consistent workmanship so customers receive reliable brass cable glands, cable gland accessories, and precision brass components.",
    "We serve electrical, plumbing, and industrial applications from Jamnagar, Gujarat, India, and support both standard products and components developed to customer drawings, dimensions, and technical specifications.",
  ],
  image: "/images/quality-main.jpg",
  imageAlt: "CABNIX technicians inspecting a machined brass component at a CNC machine",
  pillars: [
    {
      title: "Standards and Policy",
      text: "Quality sits at the centre of our manufacturing standards. We work to defined product requirements, agreed specifications, and customer drawings.",
    },
    {
      title: "Inspection Process",
      text: "Precision machining is followed by inspection so components leave the workshop with consistent workmanship and dimensional care.",
    },
    {
      title: "Packaging and Dispatch",
      text: "The same attention continues through packing and dispatch, so products reach buyers in the condition specified.",
    },
  ],
} as const;

export const qualityWhy = {
  eyebrow: "Why",
  title: "CABNIX",
  text: "Our quality policy has always been minimizing rejection and supplying the most thoroughly inspected material to our customers. To achieve customer satisfaction we have developed a quality system in which we have enacted strict inspection, packaging and dispatch standards.",
} as const;

export const qualityEquipment = [
  {
    title: "Spectrometer — Metal Composition Testing",
    image: "/images/quality/spectrometer.jpg",
    imageAlt: "Optical emission spectrometer used for metal composition testing",
  },
  {
    title: "Vernier Calipers",
    image: "/images/quality/vernier-calipers.jpg",
    imageAlt: "Digital vernier caliper measuring a machined component",
  },
  {
    title: "Thread Gauges — Plug",
    image: "/images/quality/thread-gauge-plug.jpg",
    imageAlt: "Go and no-go thread plug gauge",
  },
  {
    title: "Thread Gauges — Ring",
    image: "/images/quality/thread-gauge-ring.jpg",
    imageAlt: "Thread ring gauges",
  },
  {
    title: "Thread Pitch Diameter Micrometer",
    image: "/images/quality/thread-micrometer.jpg",
    imageAlt: "Micrometers and calipers used for thread and dimensional checking",
  },
  {
    title: "Radius Gauges",
    image: "/images/quality/radius-gauges.jpg",
    imageAlt: "Radius gauge set for profile checking",
  },
] as const;

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

export const resourcesHeroSrc = "/images/resources-hero.png";
export const contactHeroSrc = "/images/contact-hero.png";

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
