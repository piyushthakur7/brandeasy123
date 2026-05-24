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
        href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to request a quote for signage/printing.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-accent text-white p-4 rounded-full shadow-2xl hover:bg-accent-dark transition-colors group"
      >
        <span className="text-[10px] font-black tracking-[0.2em] uppercase max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all whitespace-nowrap pl-2">
          Request Quote
        </span>
        <MessageCircle size={24} fill="currentColor" />
      </motion.a>
    </div>
  );
}
