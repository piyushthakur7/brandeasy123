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

    let finalPrompt = "";
    if (mode === "signage") {
      finalPrompt = `Professional architectural signage design for a brand named "${brandName}". ${prompt}. High quality, realistic lighting, highly detailed.`;
    } else if (mode === "wall-art") {
      finalPrompt = `Fine art gallery style wall decor. ${prompt}. High quality, artistic, beautiful, detailed.`;
    } else if (mode === "mural") {
      finalPrompt = `Full wall mural art design. ${prompt}. Immersive environment, highly detailed patterns.`;
    } else {
      finalPrompt = prompt;
    }

    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-001',
        prompt: finalPrompt,
        config: {
            numberOfImages: 1,
            aspectRatio: aspectRatio as "1:1" | "3:4" | "4:3" | "9:16" | "16:9",
            outputMimeType: 'image/jpeg',
        }
    });

    const base64Image = response.generatedImages?.[0]?.image?.imageBytes;
    
    if (!base64Image) {
      return { success: false, error: "Failed to generate image." };
    }

    return {
      success: true,
      imageUrl: `data:image/jpeg;base64,${base64Image}`,
    };
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return {
      success: false,
      error: error?.message || "An error occurred while generating the design.",
    };
  }
}
