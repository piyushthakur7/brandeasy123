const fs = require('fs');

const generateCjs = fs.readFileSync('C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\generate.cjs', 'utf-8');

const rawDetailsMatch = generateCjs.match(/const rawDetails = `([\s\S]*?)`;/);
const rawImagesMatch = generateCjs.match(/const rawImages = `([\s\S]*?)`;/);

const rawDetails = rawDetailsMatch[1];
const rawImages = rawImagesMatch[1];

const blocks = rawDetails.split('---').map(b => b.trim()).filter(Boolean);
const imagesArr = rawImages.split('\n').map(l => l.trim()).filter(Boolean);

const imageMap = {};
imagesArr.forEach(p => {
  const pNormalized = p.replace(/\\\\/g, '/').replace(/\\/g, '/');
  const match = pNormalized.match(/public\/products\/(product\d+)\/(.+)$/);
  if (match) {
    const prod = match[1];
    const relPath = '/products/' + prod + '/' + match[2];
    if (!imageMap[prod]) imageMap[prod] = [];
    imageMap[prod].push(relPath);
  }
});

function cleanPrice(priceStr) {
  const firstPrice = priceStr.split(' ')[0];
  const p = firstPrice.replace(/[^0-9.]/g, '');
  return parseFloat(p) || 0;
}

let out = `export interface Product {
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
`;

blocks.sort((a, b) => {
    const aMatch = a.match(/product(\d+)/);
    const bMatch = b.match(/product(\d+)/);
    if(aMatch && bMatch) return parseInt(aMatch[1]) - parseInt(bMatch[1]);
    return 0;
});

blocks.forEach((b, i) => {
  const lines = b.split('\n');
  const fileMatch = lines[0].match(/product\d+/);
  if(!fileMatch) return;
  const prodId = fileMatch[0];
  
  const title = lines[1] ? lines[1].trim() : ('Product ' + prodId);
  const rawPriceStr = lines[2] ? lines[2].trim() : '0';
  const price = cleanPrice(rawPriceStr);
  const rawDesc = lines.slice(3).join(' ').trim();
  
  const images = imageMap[prodId] || [];
  
  let category = "Signboards";
  let material = "Standard";
  let thickness = "Custom";
  let lightingType = "None";
  let installationType = "Wall Mounted";
  let durability = "Indoor/Outdoor";
  let pricingUnit = "sqft";
  let minimumOrder = "10 SqFt";
  let turnaroundTime = "3-5 Business Days";

  const titleLower = title.toLowerCase() + " " + rawDesc.toLowerCase();
  
  if (titleLower.includes("print") || titleLower.includes("flex") || titleLower.includes("vinyl") || titleLower.includes("banner")) {
    category = "Flex & Vinyl Printing";
    material = titleLower.includes("vinyl") ? "120 Mic Vinyl" : (titleLower.includes("flex") ? "240 GSM Flex / Star Flex" : "Printing Substrate");
    thickness = "Standard";
    installationType = "Eyelets / Adhesive Application";
    durability = titleLower.includes("vinyl") ? "Indoor Only" : "Outdoor Only";
    pricingUnit = "sqft";
    minimumOrder = "50 SqFt";
    turnaroundTime = "1-3 Business Days";
  } else if (titleLower.includes("card") || titleLower.includes("tag") || titleLower.includes("easel") || titleLower.includes("bach")) {
    category = "Branding & Accessories";
    material = titleLower.includes("card") ? "PVC 1.02mm" : (titleLower.includes("easel") ? "Wood" : "Custom Material");
    pricingUnit = "unit";
    minimumOrder = "100 Units";
    turnaroundTime = "2-4 Business Days";
  } else if (titleLower.includes("acp")) {
    category = "ACP Panels";
    material = "PVDF ACP Panel";
    thickness = "3mm / 4mm";
    installationType = "Frame Mount";
    pricingUnit = "sqft";
    minimumOrder = "10 SqFt";
  } else if (titleLower.includes("letter") || titleLower.includes("ss")) {
    category = "3D Acrylic Letters";
    material = "SS 304 & Acrylic";
    thickness = "Custom Depth";
    pricingUnit = "inch";
    minimumOrder = "10 Inches";
    installationType = "Stud Mount";
    if (titleLower.includes("led") || titleLower.includes("glow")) {
      lightingType = "LED Backlit";
    }
  } else if (titleLower.includes("led") || titleLower.includes("glow")) {
    category = "LED Boards";
    material = "Acrylic / Metal Frame";
    lightingType = "LED Frontlit";
    pricingUnit = "sqft";
    minimumOrder = "10 SqFt";
  } else if (titleLower.includes("name plate")) {
    category = "Signboards";
    material = "Acrylic / SS";
    pricingUnit = "fixed";
    minimumOrder = "1 Board";
  } else if (titleLower.includes("standy")) {
    category = "Signboards";
    material = "Aluminum Base & Flex";
    pricingUnit = "fixed";
    minimumOrder = "1 Unit";
  }

  // description overrides
  const description = rawDesc 
    ? "Premium " + title + ". " + rawDesc 
    : "High quality " + title + " designed for maximum durability and professional finish. Suitable for various corporate and retail environments.";

  out += '  {\n';
  out += '    id: "' + prodId + '",\n';
  out += '    title: "' + title.replace(/"/g, '\\"') + '",\n';
  out += '    description: "' + description.replace(/"/g, '\\"') + '",\n';
  out += '    category: "' + category + '",\n';
  out += '    images: ' + JSON.stringify(images) + ',\n';
  out += '    material: "' + material + '",\n';
  out += '    thickness: "' + thickness + '",\n';
  out += '    lightingType: "' + lightingType + '",\n';
  out += '    installationType: "' + installationType + '",\n';
  out += '    durability: "' + durability + '",\n';
  out += '    pricingUnit: "' + pricingUnit + '",\n';
  out += '    basePrice: ' + price + ',\n';
  out += '    minimumOrder: "' + minimumOrder + '",\n';
  out += '    turnaroundTime: "' + turnaroundTime + '",\n';
  out += '    isFeatured: ' + (i < 4 || prodId === 'product17' || prodId === 'product19' ? 'true' : 'false') + '\n';
  out += '  },\n';
});

out += '];\n';

fs.writeFileSync('C:\\\\Users\\\\tpiyu\\\\brandeasyfinal\\\\brandeasy123\\\\lib\\\\products.ts', out, 'utf-8');
console.log('Done generating products.ts');
