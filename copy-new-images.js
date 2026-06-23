const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\33c8c540-eb90-426d-a35b-9e53e1725e95';
const destDir = 'c:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { src: 'product_media_concept_1_1782206594540.png', dest: 'product-media-concept-1.png' },
  { src: 'product_media_concept_2_1782206683569.png', dest: 'product-media-concept-2.png' },
  { src: 'product_media_concept_3_1782206705555.png', dest: 'product-media-concept-3.png' },
  { src: 'product_media_concept_4_1782206719053.png', dest: 'product-media-concept-4.png' }
];

filesToCopy.forEach(f => {
  const srcPath = path.join(srcDir, f.src);
  const destPath = path.join(destDir, f.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.src} to ${f.dest}`);
  } else {
    console.log(`File not found: ${srcPath}`);
  }
});
