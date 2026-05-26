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
    id: "product-media-concept-1",
    title: "Aluminium Channel Letters (2MM Acrylic)",
    description: "Premium Aluminium Channel Letters with 2MM Acrylic. High durability and precise finish. Base price for up to 24 inch, 2.5 inch embossed. Get a quote for other sizes (3\" or 4\" embossed).",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-1.png"],
    material: "Aluminium & 2MM Acrylic",
    thickness: "2.5 inch to 4 inch Embossed",
    lightingType: "LED Backlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 140,
    minimumOrder: "10 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: true
  },
  {
    id: "product-media-concept-2",
    title: "Aluminium Channel Letters (3MM Acrylic)",
    description: "Premium Aluminium Channel Letters with 3MM Acrylic. Higher thickness for better glow and rigidity. Base price for up to 24 inch, 2.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-2.png"],
    material: "Aluminium & 3MM Acrylic",
    thickness: "2.5 inch to 4 inch Embossed",
    lightingType: "LED Backlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 180,
    minimumOrder: "10 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-3",
    title: "Aluminium Channel Letters (3MM Astari Acrylic)",
    description: "Premium Aluminium Channel Letters with 3MM Astari Acrylic for superior quality and finish. Base price for up to 24 inch, 2.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-3.png"],
    material: "Aluminium & 3MM Astari Acrylic",
    thickness: "2.5 inch to 4 inch Embossed",
    lightingType: "LED Backlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 200,
    minimumOrder: "10 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-4",
    title: "S.S 202 Matt & Glossy Letters",
    description: "Stainless Steel 202 grade letters in Matt and Glossy finishes. Durable and elegant. Base price for 8-12 inch, 0.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-4.png"],
    material: "S.S 202",
    thickness: "0.5 inch to 2 inch Embossed",
    lightingType: "None",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 220,
    minimumOrder: "8 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-5",
    title: "S.S 304 Matt & Glossy Letters",
    description: "Stainless Steel 304 grade letters in Matt and Glossy finishes. Rust-proof and premium. Base price for 8-12 inch, 0.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-5.png"],
    material: "S.S 304",
    thickness: "0.5 inch to 2 inch Embossed",
    lightingType: "None",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 240,
    minimumOrder: "8 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: true
  },
  {
    id: "product-media-concept-6",
    title: "Gold & Rose Gold Mirror / Hairline Letters",
    description: "Luxurious Gold and Rose Gold finish letters in Mirror and Hairline textures. Base price for 8-12 inch, 0.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-6.png"],
    material: "Stainless Steel / Titanium Coating",
    thickness: "0.5 inch to 2 inch Embossed",
    lightingType: "None",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 280,
    minimumOrder: "8 Inches",
    turnaroundTime: "4-6 Business Days",
    isFeatured: true
  },
  {
    id: "product-media-concept-7",
    title: "Gold & Rose Gold Letters with Solid Acrylic",
    description: "Premium Gold & Rose Gold letters paired with solid acrylic for a rich 3D effect. Base price for 8-12 inch, 0.5 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-7.png"],
    material: "Metal & Solid Acrylic",
    thickness: "0.5 inch to 2 inch Embossed",
    lightingType: "LED Backlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 300,
    minimumOrder: "8 Inches",
    turnaroundTime: "4-6 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-8",
    title: "M.S & G.I Powder Coated Letters",
    description: "Mild Steel and Galvanized Iron letters with high-quality powder coating. Base price for 8-12 inch, 1 inch embossed. Powder coating at 45/-.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-8.png"],
    material: "M.S & G.I",
    thickness: "1 inch to 1.5 inch Embossed",
    lightingType: "None",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 320,
    minimumOrder: "8 Inches",
    turnaroundTime: "4-6 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-9",
    title: "M.S & G.I Acrylic Bulb Letters",
    description: "Vintage and industrial style bulb letters made from M.S & G.I with acrylic. Base price for 8-12 inch, 1 inch embossed.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-9.png"],
    material: "M.S & G.I / Acrylic",
    thickness: "1 inch to 3 inch Embossed",
    lightingType: "LED Frontlit",
    installationType: "Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 320,
    minimumOrder: "8 Inches",
    turnaroundTime: "5-7 Business Days",
    isFeatured: true
  },
  {
    id: "product-media-concept-10",
    title: "Solid Acrylic Inlay Letters",
    description: "Solid acrylic inlay letters for sharp and bright signage. Base price for up to 12 inch size with 26mm acrylic.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-10.png"],
    material: "26MM Acrylic",
    thickness: "26MM",
    lightingType: "LED Frontlit",
    installationType: "Stud Mount / Flush Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 370,
    minimumOrder: "10 Inches",
    turnaroundTime: "3-5 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-11",
    title: "Non Lit Acrylic Letters (6MM & 8MM)",
    description: "Classic non-lit acrylic letters available in 6mm and 8mm thickness. Base price for up to 12 inch.",
    category: "3D Acrylic Letters",
    images: ["/products/product-media-concept-11.png"],
    material: "6MM / 8MM Acrylic",
    thickness: "6MM or 8MM",
    lightingType: "None",
    installationType: "Adhesive / Stud Mount",
    durability: "Indoor/Outdoor",
    pricingUnit: "inch",
    basePrice: 370,
    minimumOrder: "10 Inches",
    turnaroundTime: "2-4 Business Days",
    isFeatured: false
  },
  {
    id: "product-media-concept-12",
    title: "LED Flexy Neon",
    description: "Flexible LED Neon signs for vibrant and customizable displays. 6MM & 8MM neon options. Base price per meter.",
    category: "LED Boards",
    images: ["/products/product-media-concept-12.png"],
    material: "LED Neon Flex / Acrylic Base",
    thickness: "6MM / 8MM",
    lightingType: "Neon",
    installationType: "Wall Mounted",
    durability: "Indoor Only",
    pricingUnit: "unit",
    basePrice: 1200,
    minimumOrder: "1 Meter",
    turnaroundTime: "3-5 Business Days",
    isFeatured: true
  }
];
