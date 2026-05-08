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
  "Banners",
  "Stands & Displays",
  "Table Covers & Displays",
  "Custom Flags",
  "Signs & Decals",
  "Asset Tags",
  "Marketing Materials",
  "Accessories"
];

export const products: Product[] = [
  // ─── BANNERS ───
  {
    id: "banner-01",
    title: "Custom Vinyl Banner",
    description: "Heavy-duty 13oz vinyl banner with vibrant full-color printing. Perfect for outdoor events, grand openings, and promotions. Weather-resistant and UV-protected.",
    price: 1299,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["3x6 ft", "4x8 ft", "5x10 ft", "Custom"],
    colors: ["Full Color Print"],
    material: "13oz Vinyl",
    features: ["UV Resistant", "Weatherproof", "Hemmed Edges", "Metal Grommets"],
    isFeatured: true
  },
  {
    id: "banner-02",
    title: "Eco-Friendly Fabric Banner",
    description: "Sustainable fabric banner printed with eco-solvent inks. Lightweight, wrinkle-resistant, and ideal for indoor trade shows and corporate events.",
    price: 1899,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["3x5 ft", "4x6 ft", "5x8 ft"],
    colors: ["Full Color Print"],
    material: "Recycled Polyester Fabric",
    features: ["Eco-Friendly Inks", "Machine Washable", "Wrinkle Resistant", "Pole Pockets"],
    isFeatured: true
  },
  {
    id: "banner-03",
    title: "Step & Repeat Backdrop",
    description: "Professional red carpet-style backdrop with repeating logo pattern. Perfect for press events, photo ops, and brand activations.",
    price: 4500,
    category: "Banners",
    subcategory: "Event Banners",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["6x8 ft", "8x8 ft", "8x10 ft"],
    colors: ["Full Color Print"],
    material: "Premium Matte Vinyl",
    features: ["Non-Glare Finish", "Custom Logo Repeat", "Quick Setup", "Hardware Included"],
    isFeatured: true
  },
  {
    id: "banner-04",
    title: "Mesh Outdoor Banner",
    description: "Wind-permeable mesh banner perfect for fences and building wraps. Allows airflow while maintaining vibrant graphics.",
    price: 1599,
    category: "Banners",
    subcategory: "Fence Banners",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["3x6 ft", "4x8 ft", "Custom"],
    colors: ["Full Color Print"],
    material: "9oz Mesh Vinyl",
    features: ["Wind Resistant", "Zip Ties Included", "Fade Proof", "Double Stitched"]
  },

  // ─── STANDS & DISPLAYS ───
  {
    id: "stand-01",
    title: "Retractable Roll-Up Banner Stand",
    description: "Professional retractable banner stand with premium aluminum base. Sets up in 60 seconds. Includes padded carry bag for easy transport.",
    price: 3500,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["33x80 in", "36x92 in", "47x80 in"],
    colors: ["Silver Base", "Black Base"],
    material: "Aluminum + Premium Vinyl Print",
    features: ["60-Second Setup", "Carry Bag Included", "Interchangeable Graphics", "Adjustable Height"],
    isFeatured: true
  },
  {
    id: "stand-02",
    title: "Pop-Up Trade Show Display",
    description: "Curved magnetic pop-up display with seamless graphics. Creates a stunning 10ft backdrop for trade shows and exhibitions.",
    price: 18500,
    category: "Stands & Displays",
    subcategory: "Trade Show Display Packages",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["8ft Curved", "10ft Curved", "10ft Straight"],
    colors: ["Full Color Print"],
    material: "Magnetic Frame + Fabric Panels",
    features: ["Tool-Free Assembly", "LED Spotlights", "Wheeled Case", "Lifetime Frame Warranty"],
    isFeatured: true
  },
  {
    id: "stand-03",
    title: "Canopy Tent 10x10",
    description: "Custom printed canopy tent with full-color roof and optional sidewalls. Sturdy steel frame with easy pop-up mechanism.",
    price: 12000,
    category: "Stands & Displays",
    subcategory: "Canopy Tents",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["10x10 ft", "10x15 ft", "10x20 ft"],
    colors: ["Full Color Print", "Solid Colors Available"],
    material: "600D Polyester + Steel Frame",
    features: ["UV 50+ Protection", "Water Resistant", "Carry Bag", "Sidewalls Optional"]
  },
  {
    id: "stand-04",
    title: "Promotional Counter Display",
    description: "Portable promotional counter with custom wrap graphics. Perfect for sampling, registration desks, and product demos.",
    price: 7500,
    category: "Stands & Displays",
    subcategory: "Promotional Counters",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["Standard (40x15x36 in)", "Wide (48x15x36 in)"],
    colors: ["Full Color Wrap"],
    material: "Lightweight Aluminum + Fabric Wrap",
    features: ["Internal Shelf", "Portable", "Custom Graphics", "Carry Case"]
  },

  // ─── TABLE COVERS & DISPLAYS ───
  {
    id: "table-01",
    title: "Premium Fitted Table Cover",
    description: "Custom printed 4-sided fitted table cover with full-color branding. Wrinkle-resistant fabric gives a polished, professional look.",
    price: 3200,
    category: "Table Covers & Displays",
    subcategory: "Fitted Table Covers",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["4ft Table", "6ft Table", "8ft Table"],
    colors: ["Full Color Print", "Solid Color + Logo"],
    material: "Premium Polyester Knit",
    features: ["Machine Washable", "Wrinkle Free", "Open Back Option", "Flame Retardant"],
    isFeatured: true
  },
  {
    id: "table-02",
    title: "Stretch Table Cover",
    description: "Sleek spandex stretch table cover with custom printing. Fits snugly for a modern, clean presentation at any event.",
    price: 2800,
    category: "Table Covers & Displays",
    subcategory: "Stretch Table Covers",
    images: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["4ft Table", "6ft Table", "8ft Table"],
    colors: ["Full Color Print"],
    material: "4-Way Stretch Spandex",
    features: ["Snug Fit", "Machine Washable", "Foot Pockets", "Dye-Sublimation Print"]
  },
  {
    id: "table-03",
    title: "Custom Table Runner",
    description: "Branded table runner with your logo and messaging. Drapes beautifully over standard table covers for layered branding.",
    price: 1500,
    category: "Table Covers & Displays",
    subcategory: "Table Runners & Toppers",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["24x72 in", "30x72 in", "36x90 in"],
    colors: ["Full Color Print"],
    material: "Premium Polyester Twill",
    features: ["Double-Sided Print", "Hemmed Edges", "Vibrant Colors", "Compact Fold"]
  },

  // ─── CUSTOM FLAGS ───
  {
    id: "flag-01",
    title: "Feather Flag with Ground Spike",
    description: "Eye-catching feather flag with single or double-sided printing. Includes ground spike, cross base, and water bag for versatile placement.",
    price: 2500,
    category: "Custom Flags",
    subcategory: "Advertising Flags",
    images: [
      "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["8ft (Small)", "11ft (Medium)", "15ft (Large)"],
    colors: ["Full Color Print"],
    material: "110gsm Knitted Polyester",
    features: ["360° Visibility", "Ground Spike + Cross Base", "Carry Bag", "Rotating Pole"],
    isFeatured: true
  },
  {
    id: "flag-02",
    title: "Teardrop Flag Banner",
    description: "Distinctive teardrop-shaped flag perfect for outdoor events and storefronts. Fiberglass flexible pole withstands wind.",
    price: 2800,
    category: "Custom Flags",
    subcategory: "Advertising Flags",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["7ft", "10ft", "14ft"],
    colors: ["Full Color Print"],
    material: "Knitted Polyester + Fiberglass Pole",
    features: ["Wind Resistant", "Double-Sided Available", "Multiple Base Options", "Quick Assembly"]
  },
  {
    id: "flag-03",
    title: "Custom Desk Flag Set",
    description: "Elegant desk flag with chrome-plated stand. Perfect for corporate offices, conference rooms, and reception desks.",
    price: 800,
    category: "Custom Flags",
    subcategory: "Desk Flags",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["4x6 in", "6x9 in"],
    colors: ["Full Color Print"],
    material: "Satin Fabric + Chrome Stand",
    features: ["Chrome Plated Stand", "Double-Sided Print", "Gift Box Packaging", "Premium Finish"]
  },

  // ─── SIGNS & DECALS ───
  {
    id: "sign-01",
    title: "Acrylic Office Sign Board",
    description: "Professional acrylic sign with UV-printed graphics and stainless steel standoffs. Perfect for office lobbies and reception areas.",
    price: 3500,
    category: "Signs & Decals",
    subcategory: "Office Signs",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["12x18 in", "18x24 in", "24x36 in"],
    colors: ["Clear", "Frosted", "Black"],
    material: "5mm Premium Acrylic",
    features: ["UV Direct Print", "Stainless Steel Standoffs", "Indoor/Outdoor", "Scratch Resistant"],
    isFeatured: true
  },
  {
    id: "sign-02",
    title: "Custom Floor Decals",
    description: "Anti-slip floor graphics with vibrant full-color printing. Perfect for retail stores, events, and directional signage.",
    price: 999,
    category: "Signs & Decals",
    subcategory: "Floor Decals",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["12 in Round", "18 in Round", "24x36 in Rectangle"],
    colors: ["Full Color Print"],
    material: "Anti-Slip Vinyl with Lamination",
    features: ["Anti-Slip Surface", "Easy Apply & Remove", "Scuff Resistant", "Indoor Safe"]
  },
  {
    id: "sign-03",
    title: "Vehicle Wrap & Car Decals",
    description: "Full or partial vehicle wraps with premium cast vinyl. Transform your fleet into mobile billboards with stunning graphics.",
    price: 15000,
    category: "Signs & Decals",
    subcategory: "Vehicle Wraps",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["Partial Wrap", "Half Wrap", "Full Wrap"],
    colors: ["Full Color Print"],
    material: "3M Premium Cast Vinyl",
    features: ["3M Warranty", "Paint Safe Removal", "UV Protected", "Professional Install Available"]
  },

  // ─── ASSET TAGS ───
  {
    id: "asset-01",
    title: "Metal Asset Tags - Aluminium",
    description: "Durable anodized aluminium asset tags with laser-engraved serial numbers and barcodes. Built for industrial tracking.",
    price: 45,
    category: "Asset Tags",
    subcategory: "Metal Asset Tags",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["1x3 in", "1.5x3 in", "2x4 in"],
    colors: ["Silver", "Black", "Blue"],
    material: "Anodized Aluminium",
    features: ["Laser Engraved", "Scratch Proof", "Chemical Resistant", "Adhesive Backing"],
    isFeatured: true
  },
  {
    id: "asset-02",
    title: "QR Code Asset Tags",
    description: "Smart QR code asset tags for digital inventory management. Scan to access asset details, maintenance logs, and more.",
    price: 35,
    category: "Asset Tags",
    subcategory: "QR Asset Tags",
    images: [
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["1x1 in", "1.5x1.5 in", "2x2 in"],
    colors: ["White", "Silver"],
    material: "Polyester with Lamination",
    features: ["Unique QR Codes", "Tamper Evident", "Weatherproof", "Bulk Discounts"]
  },
  {
    id: "asset-03",
    title: "Tamper-Proof Void Labels",
    description: "Security labels that reveal VOID pattern when removed. Essential for warranty seals, electronics, and high-value assets.",
    price: 25,
    category: "Asset Tags",
    subcategory: "Security Labels",
    images: [
      "https://images.unsplash.com/photo-1586953208270-767889fa9b08?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["0.75x1.5 in", "1x2 in", "1.5x3 in"],
    colors: ["Silver", "Red", "Blue"],
    material: "Tamper-Proof Polyester",
    features: ["VOID Pattern", "Serial Numbered", "Custom Print", "High Adhesion"]
  },

  // ─── MARKETING MATERIALS ───
  {
    id: "marketing-01",
    title: "Premium Business Cards",
    description: "Luxury business cards with spot UV, foil stamping, and premium 400gsm cardstock. Make unforgettable first impressions.",
    price: 999,
    category: "Marketing Materials",
    subcategory: "Business Cards",
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["3.5x2 in Standard", "3.5x2 in Rounded", "Square 2.5x2.5 in"],
    colors: ["Full Color + Foil"],
    material: "400gsm Silk Laminated Card",
    features: ["Spot UV Available", "Gold/Silver Foil", "500 Cards Min Order", "Free Design Help"],
    isFeatured: true
  },
  {
    id: "marketing-02",
    title: "Tri-Fold Brochure Pack",
    description: "Professional tri-fold brochures with glossy or matte finish. Ideal for product catalogs, menus, and company profiles.",
    price: 2500,
    category: "Marketing Materials",
    subcategory: "Brochures & Flyers",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["A4 Tri-Fold", "A3 Bi-Fold", "DL Size"],
    colors: ["Full Color Both Sides"],
    material: "170gsm Art Paper",
    features: ["Gloss/Matte Lamination", "250 Pcs Min", "Custom Folds", "Pantone Matching"]
  },
  {
    id: "marketing-03",
    title: "Custom Sticker Sheets",
    description: "Die-cut custom stickers with premium vinyl material. Perfect for product labeling, packaging, and promotional giveaways.",
    price: 599,
    category: "Marketing Materials",
    subcategory: "Stickers & Labels",
    images: [
      "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["2x2 in", "3x3 in", "Custom Die-Cut"],
    colors: ["Full Color Print"],
    material: "Premium Vinyl with Lamination",
    features: ["Die-Cut Shapes", "Waterproof", "UV Protected", "Easy Peel"]
  },

  // ─── ACCESSORIES ───
  {
    id: "acc-01",
    title: "Banner Hanging Hardware Kit",
    description: "Complete hardware kit for banner installation. Includes bungee cords, S-hooks, zip ties, and ceiling hangers.",
    price: 499,
    category: "Accessories",
    subcategory: "Hardware Kits",
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["Standard Kit", "Pro Kit"],
    colors: ["Silver"],
    material: "Stainless Steel & Nylon",
    features: ["Universal Fit", "Indoor/Outdoor", "Easy Install", "Reusable"]
  },
  {
    id: "acc-02",
    title: "Cross Base & Water Bag Set",
    description: "Heavy-duty cross base with water fillable bag for flag poles and banner stands. Provides stable support on any surface.",
    price: 899,
    category: "Accessories",
    subcategory: "Flag Accessories",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["Standard", "Heavy Duty"],
    colors: ["Black"],
    material: "Steel Cross Base + PVC Water Bag",
    features: ["15kg Water Capacity", "Foldable Design", "Universal Fit", "Anti-Slip Pads"]
  },
  {
    id: "acc-03",
    title: "LED Spotlight for Displays",
    description: "Adjustable LED spotlight clip for trade show displays and banner stands. Energy-efficient warm white illumination.",
    price: 1200,
    category: "Accessories",
    subcategory: "Display Lighting",
    images: [
      "https://images.unsplash.com/photo-1565814329452-e1462d862baa?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["Single Head", "Double Head", "Triple Head"],
    colors: ["Silver", "Black"],
    material: "Aluminium + LED",
    features: ["Adjustable Angle", "Low Heat", "Clip Mount", "Energy Efficient"]
  }
];
