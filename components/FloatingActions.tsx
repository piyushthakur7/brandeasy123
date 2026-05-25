"use client";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

export default function FloatingActions() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917741961239";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* AI Generator Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/ai-design"
          className="flex items-center gap-3 bg-surface border border-accent/50 text-text px-5 py-3 rounded-full shadow-lg hover:border-accent hover:text-accent transition-all group"
        >
          <Sparkles size={18} className="text-accent animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.1em] uppercase whitespace-nowrap">
            Generate AI Design
          </span>
        </Link>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20request%20a%20manufacturing%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-accent text-background px-5 py-4 rounded-full shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:bg-accent-dark transition-all group"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="text-[11px] font-black tracking-[0.15em] uppercase whitespace-nowrap">
          Get Quote
        </span>
      </motion.a>
    </div>
  );
}
