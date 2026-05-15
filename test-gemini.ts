import { generateAIDesign } from "./lib/actions.js";

async function test() {
  console.log("Testing Gemini AI Generation...");
  const result = await generateAIDesign("a bright orange neon sign", "signage", "TestBrand", "1:1");
  if (result.success) {
    console.log("Success! Generated image starts with:", result.imageUrl?.slice(0, 50) + "...");
  } else {
    console.error("Failed:", result.error);
  }
}

test();
