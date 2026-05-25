const fs = require('fs');
const generateCjs = fs.readFileSync('C:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\generate.cjs', 'utf-8');
const rawImagesMatch = generateCjs.match(/const rawImages = `([\s\S]*?)`;/);
const rawImages = rawImagesMatch[1];
const imagesArr = rawImages.split('\n').map(l => l.trim()).filter(Boolean);
console.log("First image:", imagesArr[0]);
const match = imagesArr[0].match(/public\\products\\(product\d+)\\(.+)$/);
console.log("Match:", match);
