export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: string[];
  material: string;
  features: string[];
  isFeatured?: boolean;
}

export const categories = [
  "Printed & Canvas Art",
  "Photography",
  "Metal Wall Art",
  "Wooden Wall Art",
  "Tapestries & Textiles",
  "Decorative Mirrors",
  "Digital Wall Art"
];

export const products: Product[] = [
  {
    id: "canvas-01",
    title: "Ethereal Horizon Canvas",
    description: "A breathtaking abstract landscape capturing the meeting of sky and sea. High-quality canvas with fade-resistant inks.",
    price: 4999,
    category: "Printed & Canvas Art",
    subcategory: "Canvas Prints",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["12x18", "18x24", "24x36"],
    colors: ["Natural", "Gold Edge", "Black Edge"],
    material: "Poly-cotton Canvas",
    features: ["UV Resistant", "Ready to Hang", "Hand-stretched"],
    isFeatured: true
  },
  {
    id: "metal-01",
    title: "Geometric Sunburst Sculpture",
    description: "Intricate laser-cut metal art with a hand-polished gold finish. Adds a modern architectural dimension to any wall.",
    price: 12500,
    category: "Metal Wall Art",
    subcategory: "Metal Sculptures",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["24x24", "36x36"],
    colors: ["Gold", "Matte Black", "Copper"],
    material: "Powder-coated Mild Steel",
    features: ["Laser Precision", "Anti-rust Coating", "3D Wall Spacers"],
    isFeatured: true
  },
  {
    id: "photo-01",
    title: "Varanasi Morning Ghats",
    description: "Limited edition black and white photography capturing the spiritual essence of the Ganges at dawn.",
    price: 3500,
    category: "Photography",
    subcategory: "Travel Photography",
    images: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["8x10", "11x14", "16x20"],
    colors: ["Black Frame", "White Frame", "Oak Frame"],
    material: "Fine Art Luster Paper",
    features: ["Archival Quality", "Museum Grade Matting", "Anti-glare Glass"],
    isFeatured: true
  },
  {
    id: "wood-01",
    title: "Mandala Carved Plaque",
    description: "Hand-carved reclaimed teak wood featuring traditional mandala patterns. Each piece is unique with natural wood grain.",
    price: 8900,
    category: "Wooden Wall Art",
    subcategory: "Wood Carvings",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["18x18", "24x24"],
    colors: ["Dark Teak", "Natural Ash", "Whitewash"],
    material: "Reclaimed Solid Teak",
    features: ["Handcarved", "Sustainability Sourced", "Organic Wax Finish"],
    isFeatured: true
  },
  {
    id: "mirror-01",
    title: "Art Deco Sunray Mirror",
    description: "A stunning focal point with geometric bevelled glass panels. Blends functional mirror with high-end wall decor.",
    price: 15999,
    category: "Decorative Mirrors",
    subcategory: "Ornate Mirrors",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["30\" Diameter", "36\" Diameter"],
    colors: ["Silver", "Champagne Gold"],
    material: "Crystal Glass & Metal Frame",
    features: ["High Clarity", "Distortion Free", "Safety Backing"],
    isFeatured: true
  },
  {
    id: "digital-01",
    title: "Cyberpunk Cityscape Mural",
    description: "Neo-futuristic digital art for modern urban spaces. High-resolution print on peel-and-stick premium fabric.",
    price: 18000,
    category: "Digital Wall Art",
    subcategory: "Wall Murals",
    images: [
      "https://images.unsplash.com/photo-1518384401463-d3876163c195?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["8ft x 10ft", "10ft x 12ft"],
    colors: ["Standard"],
    material: "Self-adhesive Fabric Texture",
    features: ["Removable", "No wall residue", "Customizable dimensions"],
    isFeatured: true
  },
  {
    id: "tapestry-01",
    title: "Boho Macrame Dream",
    description: "Hand-knotted 100% natural cotton macrame wall hanging on a driftwood branch. Brings a soft, organic texture to your walls.",
    price: 3200,
    category: "Tapestries & Textiles",
    subcategory: "Macrame Art",
    images: [
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["24x36", "36x48"],
    colors: ["Cream", "Sage Green"],
    material: "Natural Cotton & Driftwood",
    features: ["100% Handmade", "Sustainable Materials", "Easy to Hang"],
    isFeatured: true
  },
  {
    id: "canvas-02",
    title: "Golden Hour Abstract",
    description: "A warm, texturized abstract painting with gold leaf accents. Reflections of the sun on a calm lake.",
    price: 6500,
    category: "Printed & Canvas Art",
    subcategory: "Framed Prints",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["18x24", "24x36"],
    colors: ["Black Frame", "Gold Frame"],
    material: "Premium Canvas & Floating Frame",
    features: ["Gold Leaf Accents", "Archival Inks", "Signed by Artist"],
    isFeatured: true
  },
  {
    id: "metal-02",
    title: "Urban Skyline Grill",
    description: "Minimalist black metal wall grill depicting a stylized city skyline. Perfect for modern office spaces.",
    price: 9500,
    category: "Metal Wall Art",
    subcategory: "Metal Wall Grills",
    images: [
      "https://images.unsplash.com/photo-1518384401463-d3876163c195?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["48x12", "60x18"],
    colors: ["Jet Black", "Industrial Grey"],
    material: "Laser-cut Mild Steel",
    features: ["Weather Resistant", "Easy Mounting", "Architectural Scale"]
  },
  {
    id: "wood-02",
    title: "Vintage Wood Plaque Set",
    description: "A set of 3 distressed wood plaques with botanical botanical illustrations. Warm rustic appeal.",
    price: 4800,
    category: "Wooden Wall Art",
    subcategory: "Wood Plaques",
    images: [
      "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["10x10 each"],
    colors: ["Rustic Brown"],
    material: "Aged Pine Wood",
    features: ["Set of 3", "Distressed Finish", "Botanical Art Prints"]
  },
  {
    id: "photo-02",
    title: "Parisienne Street Life",
    description: "Candid street photography from the heart of Paris. Capturing the timeless elegance of French architecture and light.",
    price: 4500,
    category: "Photography",
    subcategory: "Travel Photography",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["16x24", "24x36"],
    colors: ["Silver Frame", "Black Frame"],
    material: "Museum Grade Photo Paper",
    features: ["Limited Edition", "COA Included", "Glass Glazing"]
  },
  {
    id: "mirror-02",
    title: "Geometric Prisma Mirror",
    description: "A minimalist mirror with a 3D faceted frame. Plays with light and reflection from every angle.",
    price: 11000,
    category: "Decorative Mirrors",
    subcategory: "Minimalist Mirrors",
    images: [
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["24x24", "30x30"],
    colors: ["Black Edge", "Rose Gold Edge"],
    material: "Faceted Glass & Resin Frame",
    features: ["Unique Design", "Clear Reflection", "Horizontal/Vertical Mounting"]
  },
  {
    id: "poster-01",
    title: "Bauhaus Exhibition Poster",
    description: "Classic 1923 exhibition poster. Bold primary colors and geometric forms. High-quality matte paper.",
    price: 1500,
    category: "Printed & Canvas Art",
    subcategory: "Art Prints",
    images: ["https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800"],
    sizes: ["A1", "A2", "A3"],
    colors: ["Standard"],
    material: "250gsm Silk Finish Paper",
    features: ["Premium Matte Finish", "Sustainable Paper", "Tube Shipping"]
  },
  {
    id: "photo-03",
    title: "Vintage Camera Collection",
    description: "Sepia-toned close-up of a collection of 1950s Leica cameras. Perfect for studios and offices.",
    price: 2800,
    category: "Photography",
    subcategory: "Vintage Photography",
    images: ["https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&q=80&w=800"],
    sizes: ["12x12", "18x18"],
    colors: ["Aged Wood Frame", "Black Frame"],
    material: "Textured Fine Art Paper",
    features: ["Vintage Tone", "Acid-free Mount", "Dust-sealed"]
  },
  {
    id: "metal-03",
    title: "Custom Monogram Sign",
    description: "Personalized family name sign in elegant cursive script. Weather-proof for porch or garden.",
    price: 5500,
    category: "Metal Wall Art",
    subcategory: "Metal Signs",
    images: ["https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800"],
    sizes: ["18\" Wide", "24\" Wide"],
    colors: ["Black", "White", "Raw Steel"],
    material: "1.5mm Heavy Duty Steel",
    features: ["Personalized", "Outdoor Safe", "Powder Coated"]
  },
  {
    id: "wood-03",
    title: "Live Edge Floating Shelf Art",
    description: "A combination of natural live-edge walnut shelf and integrated resin art. Functional wall sculpture.",
    price: 14500,
    category: "Wooden Wall Art",
    subcategory: "Reclaimed Wood Art",
    images: ["https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?auto=format&fit=crop&q=80&w=800"],
    sizes: ["36\" Length"],
    colors: ["Natural Walnut"],
    material: "Walnut Wood & Blue Resin",
    features: ["One-of-a-kind", "Locally Sourced Wood", "Smooth Epoxy Finish"]
  },
  {
    id: "digital-02",
    title: "Fractal Neon Dream",
    description: "Abstract digital fractal art with vibrant neon colors. Giclée print on acrylic for deep gloss effect.",
    price: 7800,
    category: "Digital Wall Art",
    subcategory: "Digital Prints",
    images: ["https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800"],
    sizes: ["20x20", "30x30"],
    colors: ["Acrylic Mount"],
    material: "4mm Premium Acrylic",
    features: ["High Gloss", "Shatterproof", "Back-mounted hanging mechanism"]
  }
];
