"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#F3FAFD]">
      {/* Dynamic Background with Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-gradient-to-l from-[#0099D4]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-gradient-to-tr from-[#2DB34A]/5 to-transparent blur-3xl" />
        <div className="floral-bg absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#2DB34A]" />
              <span className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase">Premium Wall Decor</span>
            </div>
            
            <h1 className="text-[#0A2733] font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
              Transform <br />
              <span className="text-[#0099D4] italic font-medium">Your Space</span> <br />
              Into A Gallery.
            </h1>
            
            <p className="text-[#2A5566] text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed">
              Curated collections of premium metal, wood, and canvas art. Handcrafted to elevate your home and workspace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Link 
                href="/shop"
                className="bg-[#0A2733] text-white px-10 py-5 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#2DB34A] transition-all hover:scale-105 shadow-2xl shadow-slate-300 active:scale-95 flex items-center gap-3"
              >
                Explorer Collection
                <ChevronRight size={14} />
              </Link>
              <Link 
                href="/ai-design"
                className="bg-white border-2 border-[#0A2733]/10 text-[#0A2733] px-10 py-5 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase hover:border-[#2DB34A] hover:text-[#2DB34A] transition-all backdrop-blur-sm shadow-sm"
              >
                AI Art Assistant
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {['photo-1534528741775-53994a69daeb', 'photo-1507003211169-0a1dd7228f2d', 'photo-1494790108377-be9c29b29330', 'photo-1500648767791-00dcc994a43e'].map((id, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                    <Image 
                      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=100&h=100`} 
                      alt="Interior Designer" 
                      width={50} 
                      height={50} 
                    />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0A2733]/40">
                Loved by 12,000+ <br /> Interior Designers
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[0.75rem] border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/hero_art.png" 
                alt="Featured Wall Art"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-white/80 text-[10px] font-black tracking-widest uppercase mb-2 block">Premium Gallery Series</span>
                <p className="text-white font-serif text-2xl font-bold italic">Curated Masterpiece #01</p>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E4F7E9] rounded-xl flex items-center justify-center">
                  <Star className="text-[#2DB34A]" fill="currentColor" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quality Rating</p>
                  <p className="text-lg font-black text-[#0A2733]">4.9 / 5.0</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
