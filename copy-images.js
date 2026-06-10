const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\d24ffa41-c10e-47d0-bf1d-f80430928053';
const destDir = 'c:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public\\products';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { src: 'vinyl_print_1781106357395.png', dest: 'product17.png' },
  { src: 'star_flex_1781106373242.png', dest: 'product18.png' },
  { src: 'flex_print_1781106390713.png', dest: 'product19.png' },
  { src: 'clip_on_frame_1781106405227.png', dest: 'product10.png' },
  { src: 'rollup_stand_1781106421863.png', dest: 'product16.png' },
  { src: 'wooden_easel_1781106438846.png', dest: 'product20.png' },
  { src: 'name_tag_1781106455335.png', dest: 'product9.png' },
  { src: 'id_card_1781106471504.png', dest: 'product14.png' }
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
