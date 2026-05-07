"use server";

import { GoogleGenAI } from "@google/genai";

export async function generateAIDesign(prompt: string, mode: string, brandName: string, aspectRatio: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured on the server.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    let systemContext = "";
    if (mode === "wall-art") systemContext = "Fine art gallery style wall decor, artistic, textured.";
    if (mode === "signage") systemContext = "Professional architectural signage, 3D letters, modern branding.";
    if (mode === "mural") systemContext = "Full wall mural art, immersive environment, detailed patterns.";

    const finalPrompt = mode === "signage" 
      ? `Generate a professional high-end signage design for a brand named "${brandName}". ${prompt}. Style: ${systemContext}. The output should be a photorealistic image of the sign mounted on a clean, architectural wall.`
      : `Generate a high-end masterpiece of wall art. Prompt: ${prompt}. Style: ${systemContext}, sophisticated, premium materials, high contrast, museum quality.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [{ text: finalPrompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any
        }
      }
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) throw new Error("No response from AI");

    for (const part of parts) {
      if (part.inlineData) {
        return {
          success: true,
          imageUrl: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
        };
      }
    }

    // Fallback if no image found but text exists
    const textPart = parts.find(p => p.text)?.text;
    if (textPart) {
      return { success: false, error: `AI returned text instead of image: ${textPart.slice(0, 100)}...` };
    }

    throw new Error("Could not generate a valid design.");
  } catch (err: any) {
    console.error("AI Generation Error:", err);
    return { success: false, error: err.message || "Failed to generate design." };
  }
}
