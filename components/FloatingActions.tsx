"use client";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function FloatingActions() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919310011931";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* AI Generator Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/ai-design"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all whitespace-nowrap">
            AI Sign Designer
          </span>
          <Sparkles size={24} className="fill-white/20" />
        </Link>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in custom signage for my brand.")}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:bg-[#1ebe5d] transition-colors group"
      >
        <span className="text-[10px] font-black tracking-[0.2em] uppercase max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all whitespace-nowrap">
          Chat with Experts
        </span>
        <MessageCircle size={24} fill="currentColor" />
      </motion.a>
    </div>
  );
}
