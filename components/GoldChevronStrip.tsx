"use client";
import { motion } from "motion/react";

export default function GoldChevronStrip() {
  const items = [
    "🚚 Free Shipping Over ₹999",
    "🎨 Free Design Proofs",
    "⚡ 3-5 Day Delivery",
    "💎 Premium Quality Guaranteed",
    "📞 1800-XXX-XXXX",
  ];

  return (
    <div className="bg-gradient-to-r from-[#0A2733] via-[#0d3b4a] to-[#0A2733] overflow-hidden py-2.5 border-b border-white/10">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-0 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-0">
            {items.map((item) => (
              <div key={item} className="flex items-center">
                <span className="text-[11px] font-semibold tracking-wide text-white/80 px-6">
                  {item}
                </span>
                <span className="text-[#2DB34A] text-xs">|</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
