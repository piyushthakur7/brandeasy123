"use client";
import { motion } from "motion/react";

export default function BrandStatementSection() {
  return (
    <section className="py-24 md:py-32 bg-white flex flex-col items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase mb-8">The Ethos</p>
        <h2 className="text-[#0A2733] font-serif text-3xl md:text-5xl font-black leading-tight mb-12">
          "Art is not just what you see, but what you <span className="text-[#0099D4] italic">experience</span> in your own sanctuary."
        </h2>
        <div className="w-24 h-px bg-slate-200 mx-auto mb-12" />
        <p className="text-slate-500 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
          At Brand Easy Art, we believe your walls tell your story. Our curated collection of high-end wall decor 
          is handcrafted with precision, blending modern aesthetics with timeless craftsmanship to transform 
          every workspace and home into a masterpiece.
        </p>
      </motion.div>
    </section>
  );
}
