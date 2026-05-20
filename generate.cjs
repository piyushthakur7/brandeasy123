const fs = require('fs');

const rawDetails = `
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\detals
Alluminium profile changeable directory board
₹1,350.00 ₹1,650.00
Co sign material imported Alluminium profile, changeable name plate.cmyk uv print 
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product10\\details.txt
clip on freme with uv translit backlit print
₹780.00
2 year warranty
cof
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product11\\details.txt
Home name plate
₹3,000.00
Acrylic box name plate with led glow sign.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\details.txt
SS letter with back 10 mm acrylic letter
₹260.00
Original ss use code 304.and 10mm 040 acrylic with led 5 year warranty power supply 2 year warranty.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product13\\details.txt
Led board
₹450.00
450 per square feet start
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product14\\deatils.txt
Id card printing
₹70.00
Pvc card 1.02mm printing and logo ingreving and less print satin material available size 16mm,18mm,20mm
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product15\\details.txt
Sign name board
₹500.00
Acrylic material and Laser cutting,led use in board
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product16\\details.txt
Rolling standy board
₹1,250.00
Alluminium base rolling standy and platinum black back flex 260 gsm.printing KMC pro ink Polo turbo machine.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\details.txt
Vinyl printing eco solvent
₹25.00
Vinyl printing 120 mic .mimaki and Roland machine printing cartridges ink.8000 rs lifter cartage.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\details.txt
Star flex printing
₹18.00
Original star flex printing 4 pass printing.polo turbo machine printing KMC pro ink use in Printing.2year outdoor warranty.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product19\\details.txt
Flex printing services
₹7.00
Platinum flex printing 240 gsm . machine polo turbo KMC pro ink use.kmc Pro ink price -1700 litter
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product2\\product_2_deatils.txt
Ss letter with blue color
₹290.00 ₹340.00
Original ss 304..
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\details.txt
Wooden Easel stand
₹1,250.00
1
11
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product21\\details22
Led sign board.
₹160.00
Led 5 year warranty and power supply 2 year warranty
https://sanaviprintpoint.co.in/
14
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\details.txt
Orignal star backlight uv printing with 5 year board warranty
₹450.00
Orignal star backlight and led trip use in board .led 5 year warranty and power supply 2 year warranty.
https://sanaviprintpoint.co.in/
13
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\details.txt
Led glow sign board manufacturing wholesale
₹160.00
Led sunsign 5 year warranty and power supply 2 year warranty.impoted acrylic and board one year serv
https://sanaviprintpoint.co.in/
12
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product24\\details.txt
Flex printing 240 gsm rate only 7 rs square feet
₹7.00
240 gsm KMC PRO INK use in printing
https://sanaviprintpoint.co.in/
Flex
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\deatils.txt
Ss letter back side 10mm acrylic and ss dot cutting
₹320.00 ₹380.00
Original ss 304,cnc dot cutting, base 10mm acrylic imported and led 5 year warranty.
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\details.txt
Ss with 10mm acrylic glow sign letter
₹280.00 ₹320.00
Original ss 304, imported acrylic, brand led 5 year warranty
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product5\\deatils.txt
Led board
₹160.00 ₹210.00
Led board 5 year warranty
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product6\\details.txt
Acp Panel  Board
₹400.00 ₹450.00
PVDF silver texture acp panel with 2 layer uv printing
SP011
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\details.txt
all type led sign board manufacturing
₹1.00
all type
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\details.txt
led board manufacturing pune 5 year warranty
₹400.00
led 5 year warranty
---
FILE: C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\details.txt
tag , bach printing
₹15.00
all type tag and bach printing service
tb
---
`;

const rawImages = `
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product1\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product10\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product10\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product10\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product10\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product11\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product11\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product11\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product11\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product12\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product13\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product13\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product13\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product14\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product14\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product14\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product14\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product15\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product15\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product15\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product16\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 7.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 8.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy 9.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product17\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy 7.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product18\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product19\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product19\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product19\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product2\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 7.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 8.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy 9.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product20\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product21\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product22\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product23\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product24\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product24\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product24\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product3\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product4\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product5\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product6\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 7.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 8.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy 9.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product7\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 6.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 7.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 8.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy 9.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product8\\image.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image copy 2.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image copy 3.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image copy 4.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image copy 5.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image copy.png
C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products\\product9\\image.png
`;

const blocks = rawDetails.split('---').map(b => b.trim()).filter(Boolean);
const imagesArr = rawImages.split('\n').map(l => l.trim()).filter(Boolean);

const imageMap = {};
imagesArr.forEach(p => {
  const match = p.match(/public\\products\\(product\d+)\\(.+)$/);
  if (match) {
    const prod = match[1];
    const relPath = '/products/' + prod + '/' + match[2].replace(/\\/g, '/');
    if (!imageMap[prod]) imageMap[prod] = [];
    imageMap[prod].push(relPath);
  }
});

let out = `export interface Product {
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
  "Sign Boards & Letters",
  "Printing & Banners",
  "Accessories & Others"
];

export const products: Product[] = [
`;

function cleanPrice(priceStr) {
  const firstPrice = priceStr.split(' ')[0];
  const p = firstPrice.replace(/[^0-9.]/g, '');
  return parseFloat(p) || 0;
}

function expandDescription(desc) {
  if (!desc) return "Premium quality product with exceptional durability. Designed to meet your business and personal branding needs.";
  const str = desc.trim().replace(/\n/g, ' ');
  return `Premium ${str}. Crafted with top-quality materials to ensure longevity and a professional finish. Perfect for businesses looking to enhance their visibility with top-tier signage and branding solutions.`;
}

// Ensure product1, product2 etc are sorted numerically
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
  const description = expandDescription(rawDesc);
  
  const images = imageMap[prodId] || [];
  
  let category = "Sign Boards & Letters";
  const titleLower = title.toLowerCase();
  if (titleLower.includes("print") || titleLower.includes("flex") || titleLower.includes("vinyl") || titleLower.includes("banner")) {
    category = "Printing & Banners";
  } else if (titleLower.includes("card") || titleLower.includes("tag") || titleLower.includes("easel")) {
    category = "Accessories & Others";
  }

  out += `  {
    id: "${prodId}",
    title: "${title.replace(/"/g, '\\"')}",
    description: "${description.replace(/"/g, '\\"')}",
    price: ${price},
    category: "${category}",
    subcategory: "Standard",
    images: ${JSON.stringify(images)},
    sizes: ["Standard"],
    colors: ["Full Color"],
    material: "Standard Material",
    features: ["High Quality", "Durable"],
    isFeatured: ${i < 4 ? 'true' : 'false'}
  },\n`;
});

out += `];`;

fs.writeFileSync('C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\lib\\products.ts', out, 'utf-8');
console.log('Done generating products.ts');
