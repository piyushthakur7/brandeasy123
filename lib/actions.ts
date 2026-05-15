"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAIDesign(
  prompt: string,
  mode: string,
  brandName: string,
  aspectRatio: string
): Promise<{ success: boolean; error?: string; imageUrl?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return { success: false, error: "Gemini API key is missing." };
    }

    let basePrompt = "";
    if (mode === "signage") {
      basePrompt = `Professional architectural signage design for a brand named "${brandName}". ${prompt}. High quality, realistic lighting, highly detailed.`;
    } else if (mode === "wall-art") {
      basePrompt = `Fine art gallery style wall decor. ${prompt}. High quality, artistic, beautiful, detailed.`;
    } else if (mode === "mural") {
      basePrompt = `Full wall mural art design. ${prompt}. Immersive environment, highly detailed patterns.`;
    } else {
      basePrompt = prompt;
    }

    // Since Imagen requires a paid plan, we use Gemini Flash to enhance the prompt
    // and then use Pollinations (a free community AI image generator) to render it.
    const textResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert AI image prompt engineer. Take the following description and rewrite it into a highly detailed, comma-separated list of keywords optimized for an AI image generator. Do not include any conversational text, just the keywords.\n\nDescription: ${basePrompt}`
    });

    const enhancedPrompt = textResponse.text?.trim() || basePrompt;
    
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
