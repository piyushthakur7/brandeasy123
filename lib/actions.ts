"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAIDesign(
  prompt: string,
  material: string,
  industry: string,
  aspectRatio: string
): Promise<{ success: boolean; error?: string; imageUrl?: string; title?: string }> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return { success: false, error: "Gemini API key is missing. Please add GEMINI_API_KEY to your .env.local file." };
    }

    // We will use gemini-1.5-flash as it is the most stable and universally available model on all API tiers.
    // We use it to enhance the prompt for Pollinations.ai, since the API key doesn't have access to Imagen 3.
    let enhancedPrompt = "";
    let generatedTitle = `Custom ${material} Design`;
    
    try {
      const textResponse = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: `You are an expert AI image prompt engineer. 
The user wants: "${prompt}"
Material/Style: ${material}
Industry context: ${industry}

Task 1: Write a short, accurate title for what is being designed (max 5 words, e.g. "Neon Cricket Tournament Banner").
Task 2: Write a highly detailed, comma-separated list of keywords optimized for an AI image generator to create a stunning, high-resolution masterpiece. Stay faithful to what they requested.

Format your response exactly like this:
TITLE: <title>
PROMPT: <keywords>`
      });

      const text = textResponse.text?.trim() || "";
      const titleMatch = text.match(/TITLE:\s*(.*)/i);
      const promptMatch = text.match(/PROMPT:\s*([\s\S]*)/i);
      
      if (titleMatch && titleMatch[1]) {
        generatedTitle = titleMatch[1].trim();
      }
      if (promptMatch && promptMatch[1]) {
        enhancedPrompt = promptMatch[1].trim();
      }
    } catch (textError) {
      console.warn("Text enhancement failed, using base prompt:", textError);
    }

    // Bulletproof fallback: if Gemini text generation fails, just use the raw user prompt
    if (!enhancedPrompt) {
      enhancedPrompt = `${prompt}, ${material} style, ${industry}, 8k resolution, masterpiece, ultra-detailed, photorealistic, cinematic lighting`;
    }
    
    const seed = Math.floor(Math.random() * 1000000);
    let width = 1024, height = 576;
    if (aspectRatio === "1:1") { width = 1024; height = 1024; }
    else if (aspectRatio === "9:16") { width = 576; height = 1024; }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=${width}&height=${height}&seed=${seed}&nologo=true`;
    
    return { success: true, imageUrl, title: generatedTitle };
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return {
      success: false,
      error: error?.message || "An error occurred while generating the design.",
    };
  }
}
