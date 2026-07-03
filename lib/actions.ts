"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAIDesign(
  prompt: string,
  material: string,
  industry: string,
  aspectRatio: string
): Promise<{ success: boolean; error?: string; imageUrl?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return { success: false, error: "Gemini API key is missing. Please add GEMINI_API_KEY to your .env.local file." };
    }

    // Use Gemini to create a faithful, enhanced image prompt from the user's description
    const textResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert AI image prompt engineer for a printing and signage company called "Brand Easy".

A customer has described what they want:
- Description: "${prompt}"
- Preferred material/style: ${material}
- Their business type: ${industry}

Your job: Rewrite this into a highly detailed, comma-separated list of keywords optimized for an AI image generator. 
IMPORTANT RULES:
1. Stay FAITHFUL to what the customer actually described. If they want a banner, generate a banner. If they want a signboard, generate a signboard.
2. Incorporate the material style (${material}) as an aesthetic influence (e.g. if "Neon Glow" make it neon-styled, if "3D Acrylic" make it look like polished acrylic lettering).
3. Use the industry (${industry}) only as subtle context for the design theme.
4. Output ONLY comma-separated keywords. No conversational text.`
    });

    const enhancedPrompt = textResponse.text?.trim() || `${prompt}, ${material} style, ${industry}, professional design, high quality, photorealistic`;
    
    // Generate an image URL using Pollinations.ai with the enhanced prompt
    // We add a random seed to bypass caching
    const seed = Math.floor(Math.random() * 1000000);
    let width = 1024, height = 1024;
    
    if (aspectRatio === "16:9") { width = 1024; height = 576; }
    else if (aspectRatio === "9:16") { width = 576; height = 1024; }
    else if (aspectRatio === "4:3") { width = 1024; height = 768; }
    else if (aspectRatio === "3:4") { width = 768; height = 1024; }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=${width}&height=${height}&seed=${seed}&nologo=true`;

    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return {
      success: false,
      error: error?.message || "An error occurred while generating the design.",
    };
  }
}
