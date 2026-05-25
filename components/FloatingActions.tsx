"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function FloatingActions() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917741961239";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
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
