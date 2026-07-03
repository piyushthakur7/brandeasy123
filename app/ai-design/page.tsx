"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, Wand2, ArrowRight, Download, RefreshCw, Box, Zap, Settings, PenTool } from "lucide-react";
import Link from "next/link";
// Using regular img for AI-generated external images (no next/image hostname restrictions)
import { generateAIDesign } from "@/lib/actions";

export default function AIDesignPage() {
  const [prompt, setPrompt] = useState("");
  const [material, setMaterial] = useState("3D Acrylic");
  const [industry, setIndustry] = useState("Retail Store");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedTitle, setGeneratedTitle] = useState<string | null>(null);

  const materials = ["3D Acrylic", "Neon Glow", "SS 304 Metal", "Flex / Vinyl"];
  const industries = ["Retail Store", "Corporate Office", "Restaurant/Cafe", "Hospitality", "Medical"];

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      // Call the server action
      const result = await generateAIDesign(prompt, material, industry, "16:9");
      
      if (result.success && result.imageUrl) {
        setGeneratedImage(result.imageUrl);
        setGeneratedTitle(result.title || `Custom ${material} Design`);
      } else {
        console.error("Failed to generate design:", result.error);
        alert(result.error || "Failed to generate design. Please ensure GEMINI_API_KEY is set in .env.local");
      }
    } catch (error) {
      console.error("Error generating design:", error);
      alert("An unexpected error occurred while generating the design.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 text-text">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-[10px] uppercase font-bold tracking-widest text-text-muted hover:text-accent transition-colors mb-6 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center text-accent">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-black">AI Design <span className="text-accent">Studio</span></h1>
              <p className="text-sm text-text-muted mt-1">Generate conceptual industrial signage based on your requirements.</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Left Controls Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface border border-surface-light p-6 rounded-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-dark"></div>
              
              <h2 className="text-[11px] uppercase font-black tracking-widest mb-6 flex items-center gap-2 text-text">
                <Settings size={14} className="text-accent" /> Configure Design
              </h2>

              {/* Prompt */}
              <div className="mb-6">
                <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Describe Your Signboard</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. A modern minimalist coffee shop sign with warm backlighting..."
                  className="w-full bg-background border border-surface-light rounded-sm p-4 text-sm text-text focus:outline-none focus:border-accent transition-colors resize-none h-32 placeholder:text-surface-light"
                />
              </div>

              {/* Industry */}
              <div className="mb-6">
                <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2 flex items-center gap-1"><Box size={12}/> Business Type</label>
                <select 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-background border border-surface-light rounded-sm p-3 text-sm text-text focus:outline-none focus:border-accent appearance-none cursor-pointer"
                >
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>

              {/* Material Preference */}
              <div className="mb-8">
                <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-1"><Zap size={12}/> Material Engine</label>
                <div className="grid grid-cols-2 gap-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setMaterial(mat)}
                      className={`py-2 px-3 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all border ${material === mat ? 'bg-accent/10 border-accent text-accent' : 'bg-background border-surface-light text-text-muted hover:border-text-muted'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className={`w-full py-4 rounded-sm flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest transition-all shadow-lg ${isGenerating || !prompt ? 'bg-surface-light text-text-muted cursor-not-allowed' : 'bg-accent text-background hover:bg-accent-dark hover:-translate-y-1 hover:shadow-accent/20'}`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 size={18} />
                    Generate Concept
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Canvas Panel */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="bg-surface border border-surface-light rounded-md flex-1 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
              
              <AnimatePresence mode="wait">
                {/* Empty State */}
                {!isGenerating && !generatedImage && (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 border border-dashed border-surface-light rounded-sm flex items-center justify-center text-surface-light mb-6">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-2">Ready to Render</h3>
                    <p className="text-sm text-text-muted max-w-sm">Enter your specifications on the left to generate an AI-powered visualization of your custom industrial signage.</p>
                  </motion.div>
                )}

                {/* Generating State */}
                {isGenerating && (
                  <motion.div 
                    key="generating"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-10"
                  >
                    {/* Futuristic Scanning Animation */}
                    <div className="relative w-64 h-64 border border-surface-light/50 rounded-sm overflow-hidden bg-background mb-8">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                      <motion.div 
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent to-accent/40 border-b border-accent shadow-[0_0_15px_rgba(255,165,0,0.5)]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PenTool size={48} className="text-surface-light/20" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
                        <RefreshCw size={14} className="animate-spin" /> Processing Vectors
                      </h3>
                      <p className="text-xs text-text-muted font-mono">Applying {material} physics & lighting...</p>
                    </div>
                  </motion.div>
                )}

                {/* Result State */}
                {generatedImage && !isGenerating && (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-background"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={generatedImage} 
                      alt="Generated Signboard"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* UI Overlay on Result */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                          <span className="inline-block px-2 py-1 bg-accent/20 text-accent text-[8px] font-black uppercase tracking-widest rounded mb-2">Concept Rendered</span>
                          <h3 className="text-xl font-heading font-bold text-white mb-1">
                            {generatedTitle || `Custom ${material} Design`}
                          </h3>
                          <p className="text-xs text-text-muted/80 font-mono">"{prompt}"</p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={generatedImage}
                            download="brandeasy-ai-concept.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-surface/80 backdrop-blur-sm border border-surface-light rounded-sm hover:border-text transition-colors text-text"
                          >
                            <Download size={18} />
                          </a>
                          <a 
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918320282847"}?text=${encodeURIComponent(`Hi, I generated a concept in your AI Studio: "${generatedTitle || prompt}". Can we discuss a manufacturing quote?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-background px-6 py-3 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                          >
                            <MessageCircle size={16} /> Get Quote For This
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <p className="text-[10px] text-text-muted text-center mt-4 uppercase tracking-widest font-bold">
               * AI Concepts are for visualization purposes only. Actual fabrication is subject to structural engineering limits.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
