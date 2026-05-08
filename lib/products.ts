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
  // ─── BANNERS: VINYL BANNERS ───
  {
    id: "banner-v-01",
    title: "Standard Vinyl Banner",
    description: "High-quality 13oz vinyl banner for versatile indoor and outdoor use. Durable, weather-resistant, and vibrant.",
    price: 1299,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: [],
    sizes: ["3x6 ft", "4x8 ft", "Custom"],
    colors: ["Full Color"],
    material: "13oz Vinyl",
    features: ["Weatherproof", "Grommets included"],
    isFeatured: true
  },
  {
    id: "banner-v-02",
    title: "Vinyl Safety Banners",
    description: "Essential safety messaging on durable vinyl. Perfect for construction sites, warehouses, and industrial zones.",
    price: 1499,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: [],
    sizes: ["2x4 ft", "3x6 ft"],
    colors: ["Safety Yellow/Red"],
    material: "Heavy-duty Vinyl",
    features: ["High Visibility", "Tear Resistant"]
  },
  {
    id: "banner-v-03",
    title: "Vinyl Advisory Banners",
    description: "Informative advisory banners for public spaces and businesses. Professional look with clear messaging.",
    price: 1399,
    category: "Banners",
    subcategory: "Vinyl Banners",
    images: [],
    sizes: ["3x5 ft", "4x8 ft"],
    colors: ["Full Color"],
    material: "Premium Vinyl",
    features: ["UV Protected", "Easy Install"]
  },

  // ─── BANNERS: CLOTH/FABRIC BANNERS ───
  {
    id: "banner-f-01",
    title: "Polyester Fabric Banners",
    description: "Elegant and lightweight polyester fabric banners. Ideal for indoor displays, trade shows, and upscale events.",
    price: 1899,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["3x6 ft", "4x8 ft"],
    colors: ["Full Color"],
    material: "Polyester Fabric",
    features: ["Wrinkle Resistant", "Washable"]
  },
  {
    id: "banner-f-02",
    title: "Step and Repeat Fabric Banners",
    description: "Professional backdrop for red carpet events and photo ops. Non-glare fabric ensures perfect photography.",
    price: 4500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["8x8 ft", "8x10 ft"],
    colors: ["Custom Logo Pattern"],
    material: "Matte Fabric",
    features: ["Seamless", "Non-glare"],
    isFeatured: true
  },
  {
    id: "banner-f-03",
    title: "Processed Fabric Banners",
    description: "Specially treated fabric for enhanced durability and color depth. Premium feel for corporate environments.",
    price: 2199,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["3x5 ft", "4x6 ft"],
    colors: ["Vibrant Full Color"],
    material: "Treated Polyester",
    features: ["Deep Color Saturation", "Indoor/Outdoor"]
  },
  {
    id: "banner-f-04",
    title: "Fabric Mesh Banners",
    description: "Breathable fabric mesh for wind-prone areas. Combines the elegance of fabric with wind-permeable utility.",
    price: 1999,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["4x8 ft", "Custom"],
    colors: ["Full Color"],
    material: "Fabric Mesh",
    features: ["Wind Resistant", "Lightweight"]
  },
  {
    id: "banner-f-05",
    title: "Canvas Banners",
    description: "Classic canvas material for a sophisticated, artistic look. Perfect for galleries, boutique shops, and interior decor.",
    price: 2500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["2x3 ft", "3x4 ft"],
    colors: ["Natural/Full Color"],
    material: "Cotton Canvas",
    features: ["Textured Finish", "Premium Look"]
  },
  {
    id: "banner-f-06",
    title: "Hanging Clamp Bar Banner",
    description: "Easy-to-install hanging banners with professional clamp bars. Ideal for retail window displays and ceiling mounts.",
    price: 2800,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["24x36 in", "36x48 in"],
    colors: ["Full Color"],
    material: "Polyester with Aluminum Bars",
    features: ["Includes Hardware", "Double Sided Option"]
  },
  {
    id: "banner-f-07",
    title: "Double Sided Fabric Banners",
    description: "Premium fabric banners with high-opacity liner to prevent show-through. Perfect for suspended displays and directional signage.",
    price: 3500,
    category: "Banners",
    subcategory: "Cloth/Fabric Banners",
    images: [],
    sizes: ["3x6 ft", "4x8 ft"],
    colors: ["Full Color Both Sides"],
    material: "High-Opacity Polyester",
    features: ["Double Sided Printing", "Blockout Liner"]
  },

  // ─── BANNERS: SAFETY BANNERS & SIGNS ───
  {
    id: "banner-s-01",
    title: "Safety Compliance Signs",
    description: "Standardized safety signs for regulatory compliance. Durable materials for long-term placement.",
    price: 899,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["12x18 in", "18x24 in"],
    colors: ["OSHA Standard Colors"],
    material: "Rigid Plastic / Vinyl",
    features: ["Regulatory Compliant", "Pre-drilled Holes"]
  },
  {
    id: "banner-s-02",
    title: "Safety Roll Up Banner Stands",
    description: "Portable safety messaging for temporary zones or training areas. Quick to deploy and easy to move.",
    price: 3200,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["33x80 in"],
    colors: ["High-Contrast Safety"],
    material: "Aluminum Stand + Vinyl",
    features: ["Retractable", "Includes Bag"]
  },
  {
    id: "banner-s-03",
    title: "Emergency Medical Tents 10x10",
    description: "Rapid-deployment medical and emergency shelter. Custom printed with cross symbols or organization logos.",
    price: 15500,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["10x10 ft"],
    colors: ["White/Red/Blue"],
    material: "Heavy-duty Water-resistant Fabric",
    features: ["Pop-up Frame", "Flame Retardant"]
  },
  {
    id: "banner-s-04",
    title: "Safety Supplies - Face Shield",
    description: "Anti-fog protective face shields for industrial and medical safety compliance. Lightweight and comfortable for long-term wear.",
    price: 150,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["One Size"],
    colors: ["Clear"],
    material: "PET / PC",
    features: ["Anti-fog", "Adjustable Band"]
  },
  {
    id: "banner-s-05",
    title: "Touch-Free Dispenser Sign",
    description: "Wall-mounted sign with integrated touch-free sanitizer dispenser support. Promotes hygiene and safety in high-traffic areas.",
    price: 2500,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["12x36 in"],
    colors: ["Custom Branding"],
    material: "Metal / PVC",
    features: ["Touch-free Design", "Custom Graphics"]
  },
  {
    id: "banner-s-06",
    title: "Promotional Face Masks",
    description: "Custom printed reusable face masks for brand visibility and safety. Breathable fabric with high-quality logo printing.",
    price: 120,
    category: "Banners",
    subcategory: "Safety Banners & Signs",
    images: [],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Custom Print"],
    material: "3-Layer Cotton/Polyester",
    features: ["Washable", "Adjustable Loops"]
  },

  // ─── BANNERS: POLITICAL BANNERS & SIGNS ───
  {
    id: "banner-p-01",
    title: "Political Campaign Banners",
    description: "Large format banners for political rallies and campaign headquarters. High impact and weather resistant.",
    price: 1699,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: [],
    sizes: ["4x8 ft", "5x10 ft"],
    colors: ["Full Color"],
    material: "13oz Vinyl",
    features: ["Bulk Discounts", "Vibrant Print"]
  },
  {
    id: "banner-p-02",
    title: "Political Yard Signs",
    description: "Classic corrugated plastic yard signs with wire H-stakes. The standard for election visibility.",
    price: 450,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: [],
    sizes: ["18x24 in"],
    colors: ["Full Color"],
    material: "Corrugated Plastic",
    features: ["Includes H-Stake", "Weatherproof"]
  },
  {
    id: "banner-p-03",
    title: "Political Campaign Flyers",
    description: "High-quality glossy flyers for door-to-door campaigning. Vibrant colors and sharp text to deliver your message effectively.",
    price: 5,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: [],
    sizes: ["A5", "A4"],
    colors: ["Full Color"],
    material: "130gsm Gloss Paper",
    features: ["Double Sided", "Bulk Discounts"]
  },
  {
    id: "banner-p-04",
    title: "Hand Held Political Flags",
    description: "Small handheld flags for rallies and parades. Lightweight and easy to wave, perfect for showing candidate support.",
    price: 85,
    category: "Banners",
    subcategory: "Political Banners & Signs",
    images: [],
    sizes: ["12x18 in"],
    colors: ["Custom Candidate Graphics"],
    material: "Polyester with Plastic Stick",
    features: ["Lightweight", "Weather Resistant"]
  },

  // ─── BANNERS: FENCE BANNERS ───
  {
    id: "banner-fn-01",
    title: "Vinyl Fence Banners",
    description: "Custom banners designed specifically for fence mounting. Perfect for site perimeters and events.",
    price: 1450,
    category: "Banners",
    subcategory: "Fence Banners",
    images: [],
    sizes: ["3x6 ft", "4x10 ft"],
    colors: ["Full Color"],
    material: "Premium Vinyl",
    features: ["Reinforced Edges", "Grommets Every 2ft"]
  },
  {
    id: "banner-fn-02",
    title: "Fabric Mesh Fence Banners",
    description: "High-end fabric mesh for fence wraps. Breathable, elegant, and durable against wind.",
    price: 1850,
    category: "Banners",
    subcategory: "Fence Banners",
    images: [],
    sizes: ["4x8 ft", "6x12 ft"],
    colors: ["Full Color"],
    material: "Polyester Mesh",
    features: ["Wind Permeable", "Matte Finish"]
  },

  // ─── STANDS & DISPLAYS ───
  {
    id: "stand-01",
    title: "Retractable Roll-Up Banner Stand",
    description: "Professional retractable banner stand with premium aluminum base. Sets up in 60 seconds. Includes padded carry bag for easy transport.",
    price: 3500,
    category: "Stands & Displays",
    subcategory: "Banner Stands",
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
    sizes: ["Single Head", "Double Head", "Triple Head"],
    colors: ["Silver", "Black"],
    material: "Aluminium + LED",
    features: ["Adjustable Angle", "Low Heat", "Clip Mount", "Energy Efficient"]
  }
];
