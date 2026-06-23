import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { products } from '@/lib/products';

export async function GET() {
  try {
    const srcDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\33c8c540-eb90-426d-a35b-9e53e1725e95';
    const publicDir = 'c:\\Users\\tpiyu\\brandeasyfinal\\brandeasy123\\public';

    const generatedImages = {
      'product-media-concept-1.png': 'product_media_concept_1_1782206594540.png',
      'product-media-concept-2.png': 'product_media_concept_2_1782206683569.png',
      'product-media-concept-3.png': 'product_media_concept_3_1782206705555.png',
      'product-media-concept-4.png': 'product_media_concept_4_1782206719053.png',
      'product-media-concept-6.png': 'product_media_concept_6_1782207672180.png',
      'product-media-concept-9.png': 'product_media_concept_9_1782207690252.png',
      'product-media-concept-12.png': 'product_media_concept_12_1782207658611.png',
    };

    let results = [];
    const defaultFallbackImage = path.join(srcDir, generatedImages['product-media-concept-1.png']);

    // First, copy the explicitly generated images to public/products/
    const productsDestDir = path.join(publicDir, 'products');
    if (!fs.existsSync(productsDestDir)) {
      fs.mkdirSync(productsDestDir, { recursive: true });
    }
    for (const [destName, srcName] of Object.entries(generatedImages)) {
      const srcPath = path.join(srcDir, srcName);
      const destPath = path.join(productsDestDir, destName);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        results.push(`Copied ${srcName} to ${destName}`);
      }
    }

    // Now loop through all products and ensure EVERY image path exists
    products.forEach(product => {
      product.images.forEach(imagePath => {
        // imagePath is like "/products/product1/image.png"
        // It should map to c:\Users\tpiyu\brandeasyfinal\brandeasy123\public\products\product1\image.png
        
        // Remove leading slash for path.join
        const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
        const fullDestPath = path.join(publicDir, relativePath);
        
        // Check if the file already exists
        if (!fs.existsSync(fullDestPath)) {
          // Ensure directory exists
          const dirName = path.dirname(fullDestPath);
          if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName, { recursive: true });
          }
          
          // Determine which generated image to use as fallback based on category or name
          let sourceToCopy = defaultFallbackImage;
          if (product.id === 'product-media-concept-12' || product.title.toLowerCase().includes('neon')) {
             sourceToCopy = path.join(srcDir, generatedImages['product-media-concept-12.png']);
          } else if (product.title.toLowerCase().includes('gold')) {
             sourceToCopy = path.join(srcDir, generatedImages['product-media-concept-6.png']);
          } else if (product.title.toLowerCase().includes('bulb')) {
             sourceToCopy = path.join(srcDir, generatedImages['product-media-concept-9.png']);
          } else if (product.title.toLowerCase().includes('s.s') || product.title.toLowerCase().includes('steel')) {
             sourceToCopy = path.join(srcDir, generatedImages['product-media-concept-4.png']);
          }

          if (fs.existsSync(sourceToCopy)) {
             fs.copyFileSync(sourceToCopy, fullDestPath);
             results.push(`Created missing image: ${imagePath} using fallback`);
          }
        }
      });
    });

    return NextResponse.json({ success: true, count: results.length, results });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
