"use client";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function GoldChevronStrip() {
  return (
    <div className="bg-[#D4AF37] overflow-hidden py-1 border-y border-[#B8860B]">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-10%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-4 items-center"
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-widest text-[#0A2733] uppercase">Pure Luxury • Premium Craftsmanship • Brand Easy Art</span>
            <ChevronRight size={12} className="text-[#0A2733]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
