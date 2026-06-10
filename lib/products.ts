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

  // Additional Detailing Properties
  features?: string[];
  useCases?: string[];
  extendedDescription?: string;
}

export const categoryGroups = {
  "Signage & Displays": [
    "3D Acrylic Letters",
    "LED Sign Boards",
    "ACP Panels",
    "Premium Signboards",
  ],
  "Print Business & Branding": [
    "Flex & Vinyl Banners",
    "Stickers & Custom Decals",
    "Stands & Promo Displays",
    "Branding & Marketing Materials",
  ]
};

export const categories = [
  "3D Acrylic Letters",
  "LED Sign Boards",
  "ACP Panels",
  "Premium Signboards",
  "Flex & Vinyl Banners",
  "Stickers & Custom Decals",
  "Stands & Promo Displays",
  "Branding & Marketing Materials"
];

export const products: Product[] = [
  {
    "id": "product-media-concept-1",
    "title": "Aluminium Channel Letters (2MM Acrylic)",
    "description": "Premium Aluminium Channel Letters with 2MM Acrylic. High durability and precise finish. Base price for up to 24 inch, 2.5 inch embossed. Get a quote for other sizes (3\" or 4\" embossed).",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-1.png"
    ],
    "material": "Aluminium & 2MM Acrylic",
    "thickness": "2.5 inch to 4 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 140,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": true,
    "extendedDescription": "This premium aluminium channel letter is built with a heavy-duty frame and 2MM high-grade acrylic for maximum light diffusion. It's perfectly suited for high-impact outdoor visibility.",
    "features": [
      "Rust-proof aluminium body structure",
      "High-intensity LED backlighting",
      "Weather-resistant seal for outdoor use",
      "Customizable font and colors"
    ],
    "useCases": [
      "Corporate Headquarters",
      "Retail Storefronts",
      "Boutique Hotels",
      "Shopping Malls"
    ]
  },
  {
    "id": "product-media-concept-2",
    "title": "Aluminium Channel Letters (3MM Acrylic)",
    "description": "Premium Aluminium Channel Letters with 3MM Acrylic. Higher thickness for better glow and rigidity. Base price for up to 24 inch, 2.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-2.png"
    ],
    "material": "Aluminium & 3MM Acrylic",
    "thickness": "2.5 inch to 4 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 180,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false,
    "extendedDescription": "Upgraded with 3MM acrylic, these channel letters offer superior structural rigidity and a smoother light dispersion. Ideal for larger letters where flex is a concern.",
    "features": [
      "Extra thick 3MM acrylic face",
      "Even light distribution without hot spots",
      "Durable aluminium returns",
      "Energy-efficient LED modules"
    ],
    "useCases": [
      "Large scale building signs",
      "Premium retail environments",
      "Hospitality facades"
    ]
  },
  {
    "id": "product-media-concept-3",
    "title": "Aluminium Channel Letters (3MM Astari Acrylic)",
    "description": "Premium Aluminium Channel Letters with 3MM Astari Acrylic for superior quality and finish. Base price for up to 24 inch, 2.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-3.png"
    ],
    "material": "Aluminium & 3MM Astari Acrylic",
    "thickness": "2.5 inch to 4 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 200,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-4",
    "title": "S.S 202 Matt & Glossy Letters",
    "description": "Stainless Steel 202 grade letters in Matt and Glossy finishes. Durable and elegant. Base price for 8-12 inch, 0.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-4.png"
    ],
    "material": "S.S 202",
    "thickness": "0.5 inch to 2 inch Embossed",
    "lightingType": "None",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 220,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-5",
    "title": "S.S 304 Matt & Glossy Letters",
    "description": "Stainless Steel 304 grade letters in Matt and Glossy finishes. Rust-proof and premium. Base price for 8-12 inch, 0.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-5.png"
    ],
    "material": "S.S 304",
    "thickness": "0.5 inch to 2 inch Embossed",
    "lightingType": "None",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 240,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": true
  },
  {
    "id": "product-media-concept-6",
    "title": "Gold & Rose Gold Mirror / Hairline Letters",
    "description": "Luxurious Gold and Rose Gold finish letters in Mirror and Hairline textures. Base price for 8-12 inch, 0.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-6.png"
    ],
    "material": "Stainless Steel / Titanium Coating",
    "thickness": "0.5 inch to 2 inch Embossed",
    "lightingType": "None",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 280,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": true
  },
  {
    "id": "product-media-concept-7",
    "title": "Gold & Rose Gold Letters with Solid Acrylic",
    "description": "Premium Gold & Rose Gold letters paired with solid acrylic for a rich 3D effect. Base price for 8-12 inch, 0.5 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-7.png"
    ],
    "material": "Metal & Solid Acrylic",
    "thickness": "0.5 inch to 2 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 300,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-8",
    "title": "M.S & G.I Powder Coated Letters",
    "description": "Mild Steel and Galvanized Iron letters with high-quality powder coating. Base price for 8-12 inch, 1 inch embossed. Powder coating at 45/-.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-8.png"
    ],
    "material": "M.S & G.I",
    "thickness": "1 inch to 1.5 inch Embossed",
    "lightingType": "None",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 320,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-9",
    "title": "M.S & G.I Acrylic Bulb Letters",
    "description": "Vintage and industrial style bulb letters made from M.S & G.I with acrylic. Base price for 8-12 inch, 1 inch embossed.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-9.png"
    ],
    "material": "M.S & G.I / Acrylic",
    "thickness": "1 inch to 3 inch Embossed",
    "lightingType": "LED Frontlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 320,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": true
  },
  {
    "id": "product-media-concept-10",
    "title": "Solid Acrylic Inlay Letters",
    "description": "Solid acrylic inlay letters for sharp and bright signage. Base price for up to 12 inch size with 26mm acrylic.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-10.png"
    ],
    "material": "26MM Acrylic",
    "thickness": "26MM",
    "lightingType": "LED Frontlit",
    "installationType": "Stud Mount / Flush Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 370,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-11",
    "title": "Non Lit Acrylic Letters (6MM & 8MM)",
    "description": "Classic non-lit acrylic letters available in 6mm and 8mm thickness. Base price for up to 12 inch.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product-media-concept-11.png"
    ],
    "material": "6MM / 8MM Acrylic",
    "thickness": "6MM or 8MM",
    "lightingType": "None",
    "installationType": "Adhesive / Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 370,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "2-4 Business Days",
    "isFeatured": false
  },
  {
    "id": "product-media-concept-12",
    "title": "LED Flexy Neon",
    "description": "Flexible LED Neon signs for vibrant and customizable displays. 6MM & 8MM neon options. Base price per meter.",
    "category": "LED Sign Boards",
    "images": [
      "/products/product-media-concept-12.png"
    ],
    "material": "LED Neon Flex / Acrylic Base",
    "thickness": "6MM / 8MM",
    "lightingType": "Neon",
    "installationType": "Wall Mounted",
    "durability": "Indoor Only",
    "pricingUnit": "unit",
    "basePrice": 1200,
    "minimumOrder": "1 Meter",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": true
  },
  {
    "id": "product1",
    "title": "Alluminium profile changeable directory board",
    "description": "Brand Easy imported Aluminium profile, changeable name plate. cmyk uv print",
    "category": "Premium Signboards",
    "images": [
      "/products/product1/image.png",
      "/products/product1/image copy 2.png",
      "/products/product1/image copy 3.png",
      "/products/product1/image copy 4.png",
      "/products/product1/image copy.png"
    ],
    "material": "Imported Aluminium Profile & UV Print",
    "thickness": "1 inch Frame",
    "lightingType": "None",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "unit",
    "basePrice": 1350,
    "minimumOrder": "1 Unit",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": true
  },
  {
    "id": "product2",
    "title": "Ss letter with blue color",
    "description": "Original ss 304..",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product2/image.png"
    ],
    "material": "Stainless Steel 304 & Blue Acrylic Overlay",
    "thickness": "1.5 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 290,
    "minimumOrder": "10 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": true
  },
  {
    "id": "product3",
    "title": "Ss letter back side 10mm acrylic and ss dot cutting",
    "description": "Original ss 304,cnc dot cutting, base 10mm acrylic imported and led 5 year warranty.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product3/image.png",
      "/products/product3/image copy 2.png",
      "/products/product3/image copy 3.png",
      "/products/product3/image copy 4.png",
      "/products/product3/image copy.png"
    ],
    "material": "Stainless Steel 304, CNC Dot Cut & 10mm Acrylic Base",
    "thickness": "2 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud / Spacer Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 320,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": true
  },
  {
    "id": "product4",
    "title": "Ss with 10mm acrylic glow sign letter",
    "description": "Original ss 304, imported acrylic, brand led 5 year warranty",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product4/image.png",
      "/products/product4/image copy 2.png",
      "/products/product4/image copy 3.png",
      "/products/product4/image copy 4.png",
      "/products/product4/image copy 5.png",
      "/products/product4/image copy 6.png",
      "/products/product4/image copy.png"
    ],
    "material": "Stainless Steel 304 & 10mm Imported Acrylic",
    "thickness": "2 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 280,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": true
  },
  {
    "id": "product5",
    "title": "Led board",
    "description": "Led board 5 year warranty",
    "category": "LED Sign Boards",
    "images": [
      "/products/product5/image.png"
    ],
    "material": "High Quality Acrylic face & ACP Box Frame",
    "thickness": "3 inch Box",
    "lightingType": "LED Frontlit",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 160,
    "minimumOrder": "20 SqFt",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": false
  },
  {
    "id": "product6",
    "title": "Acp Panel  Board",
    "description": "PVDF silver texture acp panel with 2 layer uv printing",
    "category": "ACP Panels",
    "images": [
      "/products/product6/image.png"
    ],
    "material": "PVDF Silver Texture Aluminium Composite Panel",
    "thickness": "3mm / 4mm Panel",
    "lightingType": "None",
    "installationType": "Structure / Wall Mounted",
    "durability": "Outdoor Only",
    "pricingUnit": "sqft",
    "basePrice": 400,
    "minimumOrder": "50 SqFt",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": false
  },
  {
    "id": "product7",
    "title": "all type led sign board manufacturing",
    "description": "all type led sign board manufacturing with multi-color options and high durability.",
    "category": "LED Sign Boards",
    "images": [
      "/products/product7/image.png",
      "/products/product7/image copy 2.png",
      "/products/product7/image copy 3.png",
      "/products/product7/image copy 4.png",
      "/products/product7/image copy 5.png",
      "/products/product7/image copy 6.png",
      "/products/product7/image copy 7.png",
      "/products/product7/image copy 8.png",
      "/products/product7/image copy 9.png",
      "/products/product7/image copy.png"
    ],
    "material": "Custom Acrylic / Metal Shell with Bright LEDs",
    "thickness": "3 inch Standard",
    "lightingType": "LED Backlit",
    "installationType": "Wall / Pole Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 450,
    "minimumOrder": "15 SqFt",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": false
  },
  {
    "id": "product8",
    "title": "led board manufacturing pune 5 year warranty",
    "description": "led 5 year warranty",
    "category": "LED Sign Boards",
    "images": [
      "/products/product8/image.png",
      "/products/product8/image copy 2.png",
      "/products/product8/image copy 3.png",
      "/products/product8/image copy 4.png",
      "/products/product8/image copy 5.png",
      "/products/product8/image copy 6.png",
      "/products/product8/image copy 7.png",
      "/products/product8/image copy 8.png",
      "/products/product8/image copy 9.png",
      "/products/product8/image copy.png"
    ],
    "material": "Premium Acrylic Sheet & Heavy Metal Frame",
    "thickness": "3.5 inch Box",
    "lightingType": "LED Frontlit",
    "installationType": "Structure Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 400,
    "minimumOrder": "15 SqFt",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product9",
    "title": "tag , bach printing",
    "description": "all type tag and bach printing service",
    "category": "Branding & Marketing Materials",
    "images": [
      "/products/product9/image.png",
      "/products/product9/image copy 2.png",
      "/products/product9/image copy 3.png",
      "/products/product9/image copy 4.png",
      "/products/product9/image copy 5.png",
      "/products/product9/image copy.png"
    ],
    "material": "Premium Cardboard / PVC Sheet & Metal Pin",
    "thickness": "1.5mm",
    "lightingType": "None",
    "installationType": "Safety Pin / Magnetic clip",
    "durability": "Indoor Only",
    "pricingUnit": "unit",
    "basePrice": 15,
    "minimumOrder": "100 Units",
    "turnaroundTime": "2-4 Business Days",
    "isFeatured": false
  },
  {
    "id": "product10",
    "title": "clip on freme with uv translit backlit print",
    "description": "2 year warranty cof",
    "category": "Stands & Promo Displays",
    "images": [
      "/products/product10/image.png",
      "/products/product10/image copy 2.png",
      "/products/product10/image copy 3.png",
      "/products/product10/image copy 4.png",
      "/products/product10/image copy.png"
    ],
    "material": "Slim Aluminium Clip-on Frame & UV Translit Backlit Print",
    "thickness": "1 inch Profile",
    "lightingType": "Edge-lit",
    "installationType": "Wall Mounted / Hanging",
    "durability": "Indoor Only",
    "pricingUnit": "sqft",
    "basePrice": 780,
    "minimumOrder": "5 SqFt",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product11",
    "title": "Home name plate",
    "description": "Acrylic box name plate with led glow sign.",
    "category": "Premium Signboards",
    "images": [
      "/products/product11/image.png",
      "/products/product11/image copy 2.png",
      "/products/product11/image copy 3.png",
      "/products/product11/image copy 4.png",
      "/products/product11/image copy 5.png",
      "/products/product11/image copy 6.png",
      "/products/product11/image copy 7.png",
      "/products/product11/image copy 8.png",
      "/products/product11/image copy.png"
    ],
    "material": "Heavy Duty Acrylic Box & Bright LED Modules",
    "thickness": "2 inch Box",
    "lightingType": "LED Backlit",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "unit",
    "basePrice": 3000,
    "minimumOrder": "1 Unit",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product12",
    "title": "SS letter with back 10 mm acrylic letter",
    "description": "Original ss use code 304.and 10mm 040 acrylic with led 5 year warranty power supply 2 year warranty.",
    "category": "3D Acrylic Letters",
    "images": [
      "/products/product12/image.png",
      "/products/product12/image copy 2.png",
      "/products/product12/image copy 3.png",
      "/products/product12/image copy 4.png",
      "/products/product12/image copy 5.png",
      "/products/product12/image copy 6.png",
      "/products/product12/image copy 7.png",
      "/products/product12/image copy 8.png",
      "/products/product12/image copy 9.png",
      "/products/product12/image copy.png"
    ],
    "material": "Stainless Steel 304 Face & 10mm Base Acrylic",
    "thickness": "2.5 inch Embossed",
    "lightingType": "LED Backlit",
    "installationType": "Stud Mount",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "inch",
    "basePrice": 260,
    "minimumOrder": "8 Inches",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product13",
    "title": "Led board",
    "description": "450 per square feet start",
    "category": "LED Sign Boards",
    "images": [
      "/products/product13/image.png",
      "/products/product13/image copy 2.png",
      "/products/product13/image copy 3.png",
      "/products/product13/image copy 4.png",
      "/products/product13/image copy 5.png",
      "/products/product13/image copy 6.png",
      "/products/product13/image copy 7.png",
      "/products/product13/image copy 8.png",
      "/products/product13/image copy 9.png",
      "/products/product13/image copy.png"
    ],
    "material": "Sleek Acrylic & High Intensity LED Modules",
    "thickness": "3 inch",
    "lightingType": "LED Frontlit",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 450,
    "minimumOrder": "15 SqFt",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product14",
    "title": "Id card printing",
    "description": "Pvc card 1.02mm printing and logo ingreving and less print satin material available size 16mm,18mm,20mm",
    "category": "Branding & Marketing Materials",
    "images": [
      "/products/product14/image.png",
      "/products/product14/image copy 2.png",
      "/products/product14/image copy 3.png",
      "/products/product14/image copy 4.png",
      "/products/product14/image copy 5.png",
      "/products/product14/image copy 6.png",
      "/products/product14/image copy.png"
    ],
    "material": "PVC 1.02mm Sheet & Fine Satin Ribbon Lanyard",
    "thickness": "1.02mm Card",
    "lightingType": "None",
    "installationType": "Lanyard Attachment",
    "durability": "Indoor Only",
    "pricingUnit": "unit",
    "basePrice": 70,
    "minimumOrder": "50 Units",
    "turnaroundTime": "2-4 Business Days",
    "isFeatured": false
  },
  {
    "id": "product15",
    "title": "Sign name board",
    "description": "Acrylic material and Laser cutting,led use in board",
    "category": "Premium Signboards",
    "images": [
      "/products/product15/image.png",
      "/products/product15/image copy 2.png",
      "/products/product15/image copy 3.png",
      "/products/product15/image copy 4.png",
      "/products/product15/image copy 5.png",
      "/products/product15/image copy 6.png",
      "/products/product15/image copy 7.png",
      "/products/product15/image copy 8.png",
      "/products/product15/image copy 9.png",
      "/products/product15/image copy.png"
    ],
    "material": "Premium Cast Acrylic Sheet & Laser Cut Letters",
    "thickness": "8mm Face",
    "lightingType": "LED Frontlit",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 500,
    "minimumOrder": "5 SqFt",
    "turnaroundTime": "3-5 Business Days",
    "isFeatured": false
  },
  {
    "id": "product16",
    "title": "Rolling standy board",
    "description": "Alluminium base rolling standy and platinum black back flex 260 gsm.printing KMC pro ink Polo turbo machine.",
    "category": "Stands & Promo Displays",
    "images": [
      "/products/product16/image.png"
    ],
    "material": "Aluminium Rolling Base & 260 GSM Platinum Black Back Flex",
    "thickness": "Standard Hardware",
    "lightingType": "None",
    "installationType": "Free Standing",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "unit",
    "basePrice": 1250,
    "minimumOrder": "1 Unit",
    "turnaroundTime": "2-3 Business Days",
    "isFeatured": false
  },
  {
    "id": "product17",
    "title": "Vinyl printing eco solvent",
    "description": "Vinyl printing 120 mic .mimaki and Roland machine printing cartridges ink.8000 rs lifter cartage.",
    "category": "Flex & Vinyl Banners",
    "images": [
      "/products/product17/image.png",
      "/products/product17/image copy 2.png",
      "/products/product17/image copy 3.png",
      "/products/product17/image copy 4.png",
      "/products/product17/image copy 5.png",
      "/products/product17/image copy 6.png",
      "/products/product17/image copy 7.png",
      "/products/product17/image copy 8.png",
      "/products/product17/image copy 9.png",
      "/products/product17/image copy.png"
    ],
    "material": "120 Micron High-Opacity Vinyl Sheet (Eco Solvent Print)",
    "thickness": "120 Microns",
    "lightingType": "None",
    "installationType": "Self Adhesive Backing",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 25,
    "minimumOrder": "10 SqFt",
    "turnaroundTime": "1-2 Business Days",
    "isFeatured": false
  },
  {
    "id": "product18",
    "title": "Star flex printing",
    "description": "Original star flex printing 4 pass printing.polo turbo machine printing KMC pro ink use in Printing.2year outdoor warranty.",
    "category": "Flex & Vinyl Banners",
    "images": [
      "/products/product18/image.png",
      "/products/product18/image copy 2.png",
      "/products/product18/image copy 3.png",
      "/products/product18/image copy 4.png",
      "/products/product18/image copy 5.png",
      "/products/product18/image copy 6.png",
      "/products/product18/image copy 7.png",
      "/products/product18/image copy.png"
    ],
    "material": "Original Star Flex Sheet (Polo Turbo Machine 4-Pass Print)",
    "thickness": "340 GSM",
    "lightingType": "None",
    "installationType": "Metal Eyelets / Frame Stretch",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 18,
    "minimumOrder": "20 SqFt",
    "turnaroundTime": "1-2 Business Days",
    "isFeatured": false
  },
  {
    "id": "product19",
    "title": "Flex printing services",
    "description": "Platinum flex printing 240 gsm . machine polo turbo KMC pro ink use.kmc Pro ink price -1700 litter",
    "category": "Flex & Vinyl Banners",
    "images": [
      "/products/product19/image.png",
      "/products/product19/image copy 2.png",
      "/products/product19/image copy.png"
    ],
    "material": "Platinum Flex Sheet (Polo Turbo Machine KMC Pro Ink)",
    "thickness": "240 GSM",
    "lightingType": "None",
    "installationType": "Framing / Stapling",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 7,
    "minimumOrder": "50 SqFt",
    "turnaroundTime": "1-2 Business Days",
    "isFeatured": false
  },
  {
    "id": "product20",
    "title": "Wooden Easel stand",
    "description": "Standard Wooden Easel Display Board Stand for art and commercial displays.",
    "category": "Stands & Promo Displays",
    "images": [
      "/products/product20/image.png",
      "/products/product20/image copy 2.png",
      "/products/product20/image copy 3.png",
      "/products/product20/image copy 4.png",
      "/products/product20/image copy 5.png",
      "/products/product20/image copy 6.png",
      "/products/product20/image copy 7.png",
      "/products/product20/image copy 8.png",
      "/products/product20/image copy 9.png",
      "/products/product20/image copy.png"
    ],
    "material": "Premium Polish Finished Teak Wood Frame",
    "thickness": "Standard Size (5 Feet Height)",
    "lightingType": "None",
    "installationType": "Free Standing Easel",
    "durability": "Indoor Only",
    "pricingUnit": "unit",
    "basePrice": 1250,
    "minimumOrder": "1 Unit",
    "turnaroundTime": "2-4 Business Days",
    "isFeatured": false
  },
  {
    "id": "product21",
    "title": "Led sign board.",
    "description": "Led 5 year warranty and power supply 2 year warranty",
    "category": "LED Sign Boards",
    "images": [
      "/products/product21/image.png"
    ],
    "material": "Imported Acrylic face & Metal Backing Box",
    "thickness": "3 inch Box",
    "lightingType": "LED Frontlit",
    "installationType": "Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 160,
    "minimumOrder": "20 SqFt",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product22",
    "title": "Orignal star backlight uv printing with 5 year board warranty",
    "description": "Orignal star backlight and led trip use in board .led 5 year warranty and power supply 2 year warranty.",
    "category": "LED Sign Boards",
    "images": [
      "/products/product22/image.png",
      "/products/product22/image copy 2.png",
      "/products/product22/image copy 3.png",
      "/products/product22/image copy 4.png",
      "/products/product22/image copy.png"
    ],
    "material": "Original Star Backlit Flex, LED Strip Layout & Metal Board Frame",
    "thickness": "4 inch Box Frame",
    "lightingType": "LED Backlit",
    "installationType": "Structure / Wall Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 450,
    "minimumOrder": "10 SqFt",
    "turnaroundTime": "4-6 Business Days",
    "isFeatured": false
  },
  {
    "id": "product23",
    "title": "Led glow sign board manufacturing wholesale",
    "description": "Brand Easy LED board with 5 year warranty and power supply 2 year warranty. Imported acrylic and board one year service.",
    "category": "LED Sign Boards",
    "images": [
      "/products/product23/image.png",
      "/products/product23/image copy 2.png",
      "/products/product23/image copy 3.png",
      "/products/product23/image copy 4.png",
      "/products/product23/image copy 5.png",
      "/products/product23/image copy.png"
    ],
    "material": "Imported Acrylic Shell, Brand Easy LEDs & GI Frame",
    "thickness": "3 inch Box Frame",
    "lightingType": "LED Backlit",
    "installationType": "Structure Mounted",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 160,
    "minimumOrder": "30 SqFt",
    "turnaroundTime": "5-7 Business Days",
    "isFeatured": false
  },
  {
    "id": "product24",
    "title": "Flex printing 240 gsm rate only 7 rs square feet",
    "description": "240 gsm KMC PRO INK use in printing",
    "category": "Flex & Vinyl Banners",
    "images": [
      "/products/product24/image.png",
      "/products/product24/image copy 2.png",
      "/products/product24/image copy.png"
    ],
    "material": "240 GSM Flex Sheet (KMC Pro Ink Print)",
    "thickness": "240 GSM",
    "lightingType": "None",
    "installationType": "Eyelets / Grommets",
    "durability": "Indoor/Outdoor",
    "pricingUnit": "sqft",
    "basePrice": 7,
    "minimumOrder": "100 SqFt",
    "turnaroundTime": "1-2 Business Days",
    "isFeatured": false
  }
];
