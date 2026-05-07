"use client";
import { motion } from "motion/react";

export default function MarqueeStrip() {
  const items = [
    "Handcrafted Excellence",
    "Global Shipping",
    "Sustainable Materials",
    "Artisan Quality",
    "Curated Collection",
    "Interior Masterpieces"
  ];

  return (
    <div className="py-12 bg-[#0A2733] overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center">
            {items.map((item) => (
              <span 
                key={item} 
                className="text-white/20 text-5xl md:text-7xl font-serif italic font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
