export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  isFeatured?: boolean;
  
  // B2B Specification Driven Properties
  material: string;
  thickness: string;
  lightingType: "None" | "LED Backlit" | "LED Frontlit" | "Neon" | "Edge-lit";
  installationType: string;
  durability: "Indoor/Outdoor" | "Indoor Only" | "Outdoor Only";
  pricingUnit: "sqft" | "inch" | "fixed" | "unit";
  basePrice: number; // Price per unit/sqft/inch
  minimumOrder: string;
  turnaroundTime: string;
}

export const categories = [
  "Signboards",
  "Flex & Vinyl Printing",
  "ACP Panels",
  "LED Boards",
  "Branding & Accessories",
  "3D Acrylic Letters"
];

export const products: Product[] = [
  {
    id: "product1",
    title: "Aluminum Profile Changeable Directory Board",
    description: "Premium Cosign material imported aluminum profile, changeable name plate with CMYK UV print. Crafted for longevity and professional finish.",
    category: "Signboards",
    images: ["/products/product1/image.png"],
    material: "Aluminum Profile & UV Printed Plates",
    thickness: "Custom",
    lightingType: "None",
    installationType: "Wall Mounted",
    durability: "Indoor Only",
    pricingUnit: "fixed",
    basePrice: 1350,
    minimumOrder: "1 Board",
    turnaroundTime: "3-5 Business Days",
    isFeatured: true
  },
  {
    id: "product2",
    title: "SS Letter with Blue Color",
    description: "Premium Original SS 304 cut letters, ideal for durable outdoor business naming.",
    category: "3D Acrylic Letters",
    images: ["/products/product2/image.png"],
    material: "SS 304",
    thickness: "Custom Depth",
    lightingType: "None",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 290,
    minimumOrder: "10 Inches",
    turnaroundTime: "5-7 Business Days",
    isFeatured: true
  },
  {
    id: "product3",
    title: "SS Letter Backside 10mm Acrylic",
    description: "SS 304 with CNC dot cutting, base 10mm imported acrylic and LED with 5-year warranty.",
    category: "LED Boards",
    images: ["/products/product3/image.png"],
    material: "SS 304 + 10mm Acrylic",
    thickness: "10mm Acrylic Base",
    lightingType: "LED Backlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 320,
    minimumOrder: "10 Inches",
    turnaroundTime: "7-10 Business Days",
    isFeatured: true
  },
  {
    id: "product17",
    title: "Vinyl Printing Eco Solvent",
    description: "Premium Vinyl printing 120 mic. Mimaki and Roland machine printing.",
    category: "Flex & Vinyl Printing",
    images: ["/products/product17/image.png"],
    material: "120 Mic Vinyl",
    thickness: "Standard",
    lightingType: "None",
    installationType: "Adhesive Application",
    durability: "Indoor Only",
    pricingUnit: "sqft",
    basePrice: 25,
    minimumOrder: "10 SqFt",
    turnaroundTime: "1-3 Business Days",
    isFeatured: false
  },
  {
    id: "product19",
    title: "Platinum Flex Printing",
    description: "Platinum flex printing 240 gsm using KMC Pro ink for durable outdoor banners.",
    category: "Flex & Vinyl Printing",
    images: ["/products/product19/image.png"],
    material: "240 GSM Flex",
    thickness: "Standard",
    lightingType: "None",
    installationType: "Eyelets / Frame Mount",
    durability: "Outdoor Only",
    pricingUnit: "sqft",
    basePrice: 7,
    minimumOrder: "50 SqFt",
    turnaroundTime: "1-3 Business Days",
    isFeatured: true
  },
  {
    id: "product6",
    title: "ACP Panel Board",
    description: "Premium PVDF silver texture ACP panel with 2 layer UV printing.",
    category: "ACP Panels",
    images: ["/products/product6/image.png"],
    material: "PVDF ACP Panel",
    thickness: "3mm / 4mm",
    lightingType: "None",
    installationType: "Frame Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "sqft",
    basePrice: 400,
    minimumOrder: "10 SqFt",
    turnaroundTime: "5-7 Business Days",
    isFeatured: false
  }
];