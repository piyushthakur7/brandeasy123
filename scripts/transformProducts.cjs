const fs = require('fs');

// Read the original file to parse it safely
const originalPath = './lib/products.ts';
let content = fs.readFileSync(originalPath, 'utf8');

// The new interface to inject at the top
const newInterfaceAndCategories = `export interface ProductSpecification {
  name: string;
  value: string;
}

export interface PricingTier {
  quantity: string;
  price: number;
  unit: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryGroup: "Signage Products" | "Print & Branding" | "Display Solutions";

  image: string;
  gallery?: string[];

  shortDescription: string;
  extendedDescription: string;

  features: string[];
  specifications: ProductSpecification[];

  applications: string[];

  pricingTiers: PricingTier[];

  relatedProductIds: string[];

  featured: boolean;
}

export const categoryGroups = {
  "Signage Products": [
    "Acrylic Letters",
    "LED Sign Boards",
    "ACP Sign Boards",
    "Glow Sign Boards",
    "Channel Letters",
    "Premium Signboards"
  ],
  "Print & Branding": [
    "Flex Printing",
    "Vinyl Printing",
    "Stickers",
    "Corporate Printing",
    "ID Cards",
    "Branding Materials"
  ],
  "Display Solutions": [
    "Roll-Up Stands",
    "Exhibition Displays",
    "Display Systems",
    "Promotional Displays"
  ]
};

export const categories = [
  ...categoryGroups["Signage Products"],
  ...categoryGroups["Print & Branding"],
  ...categoryGroups["Display Solutions"]
];
`;

// Simple mapping logic. In a real scenario we'd transpile TS, but here we can just use regex/eval if we isolate the array.
// Let's isolate the products array string.
const arrayStartIndex = content.indexOf('export const products: Product[] = [');
const arrayString = content.substring(arrayStartIndex);

// We'll write a new file completely manually to ensure perfect formatting and no loss.
// Actually, since I am an AI, I can just write the new file directly, but it's 800+ lines.
// Let's use eval to parse the old products.
const transpiledCode = content
  .replace(/export interface[\s\S]*?export const products:/, 'const products =')
  .replace(/export const categoryGroups =[\s\S]*?export const products:/, 'const products =')
  .replace(/export const categories =[\s\S]*?const products =/, 'const products =')
  .replace('Product[]', '')
  .replace(/import.*?;\n/g, '');

let oldProducts;
try {
  // We need to strip the typescript types
  const jsCode = transpiledCode.replace(/: Product\[\]/g, '');
  eval(jsCode + '; oldProducts = products;');
} catch (e) {
  console.error("Failed to eval:", e);
}

if (oldProducts) {
  const mapCategoryGroup = (oldCat) => {
    if (oldCat.toLowerCase().includes('stand') || oldCat.toLowerCase().includes('display')) return 'Display Solutions';
    if (oldCat.toLowerCase().includes('print') || oldCat.toLowerCase().includes('tag') || oldCat.toLowerCase().includes('sticker') || oldCat.toLowerCase().includes('flex') || oldCat.toLowerCase().includes('vinyl') || oldCat.toLowerCase().includes('card') || oldCat.toLowerCase().includes('branding')) return 'Print & Branding';
    return 'Signage Products';
  };

  const mapCategory = (oldCat) => {
    const group = mapCategoryGroup(oldCat);
    if (group === 'Signage Products') {
      if (oldCat.includes('3D') || oldCat.includes('Letter')) return 'Acrylic Letters';
      if (oldCat.includes('LED') || oldCat.includes('Neon')) return 'LED Sign Boards';
      if (oldCat.includes('ACP')) return 'ACP Sign Boards';
      return 'Premium Signboards';
    }
    if (group === 'Print & Branding') {
      if (oldCat.includes('Flex')) return 'Flex Printing';
      if (oldCat.includes('Vinyl')) return 'Vinyl Printing';
      if (oldCat.includes('Sticker')) return 'Stickers';
      if (oldCat.includes('Card') || oldCat.includes('Tag')) return 'ID Cards';
      return 'Branding Materials';
    }
    return 'Roll-Up Stands';
  };

  const newProducts = oldProducts.map(p => {
    const catGroup = mapCategoryGroup(p.category);
    const cat = mapCategory(p.category);
    return {
      id: p.id,
      name: p.title,
      slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      category: cat,
      categoryGroup: catGroup,
      image: p.images && p.images.length > 0 ? p.images[0] : '',
      gallery: p.images || [],
      shortDescription: p.description,
      extendedDescription: p.extendedDescription || p.description + " Manufactured in-house with premium materials to ensure durability and high visual impact.",
      features: p.features || [
        "In-house precision manufacturing",
        "Premium grade materials",
        "Customizable dimensions",
        "Weather-resistant construction"
      ],
      specifications: [
        { name: "Material", value: p.material || "Standard" },
        { name: "Thickness", value: p.thickness || "Standard" },
        { name: "Lighting", value: p.lightingType || "None" },
        { name: "Installation", value: p.installationType || "Standard" },
        { name: "Durability", value: p.durability || "Indoor/Outdoor" }
      ],
      applications: p.useCases || [
        "Retail Stores",
        "Corporate Offices",
        "Shopping Malls",
        "Exhibitions"
      ],
      pricingTiers: [
        { quantity: p.minimumOrder || "1", price: p.basePrice || 0, unit: p.pricingUnit || "unit" },
        { quantity: "Bulk Order", price: (p.basePrice || 0) * 0.9, unit: p.pricingUnit || "unit" }
      ],
      relatedProductIds: [],
      featured: !!p.isFeatured
    };
  });

  // Assign related products randomly
  newProducts.forEach(p => {
    const related = newProducts.filter(r => r.categoryGroup === p.categoryGroup && r.id !== p.id).slice(0, 4);
    p.relatedProductIds = related.map(r => r.id);
  });

  const finalOutput = newInterfaceAndCategories + "\nexport const products: Product[] = " + JSON.stringify(newProducts, null, 2) + ";\n";
  
  fs.writeFileSync('./lib/products.ts', finalOutput);
  console.log("Successfully transformed products.ts!");
} else {
  console.log("Failed to parse old products");
}
