"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Factory } from "lucide-react";
import { products } from "@/lib/products";

export default function HeroSection() {
  // Filter for products that have valid images to use as slides
  const slideProducts = products.filter(p => p.images && p.images.length > 0).slice(0, 8);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slideProducts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slideProducts.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] md:blur-[130px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[90px] md:blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Pitch, Description, specs, double CTAs */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left">
            
            {/* Top Micro Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 w-fit"
            >
              <Sparkles size={13} className="text-accent animate-pulse" />
              <span className="text-accent text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em]">India's Premium Signage & Print Products</span>
            </motion.div>
            
            {/* Main Catchy Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-text font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
            >
              Discover Premium <br />
              <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Corporate Signages & Displays</span>
            </motion.h1>
            
            {/* Context Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl"
            >
              Explore our extensive catalog of state-of-the-art 3D letters, LED signs, and promotional materials. Choose your product and get instant dimensional quotes.
            </motion.p>
            
            {/* Horizontal Specs Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              <div className="flex items-center gap-3 p-3.5 bg-surface/40 backdrop-blur-md border border-surface-light rounded-2xl shadow-sm">
                <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">LED Glow</p>
                  <p className="text-xs text-text font-bold">5-Year Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-surface/40 backdrop-blur-md border border-surface-light rounded-2xl shadow-sm">
                <div className="p-2.5 bg-accent-orange/10 rounded-xl text-accent-orange">
                  <Factory size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Fabrication</p>
                  <p className="text-xs text-text font-bold">In-House CNC</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-surface/40 backdrop-blur-md border border-surface-light rounded-2xl shadow-sm">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Quality</p>
                  <p className="text-xs text-text font-bold">100% Inspected</p>
                </div>
              </div>
            </motion.div>
            
            {/* Action CTAs row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Browse Catalog <ArrowRight size={14} />
              </Link>
              <Link
                href="/ai-design"
                className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-light text-text border border-surface-light hover:border-accent/40 font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Sparkles size={14} className="text-accent" /> Design with AI
              </Link>
            </motion.div>
            
          </div>
          
          {/* Right Column: Visual Frame and Floating Assurances */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[360px] lg:min-h-[440px] pt-8 lg:pt-0">
            
            {/* Floating Glassmorphic Card 1 - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-4 left-0 md:-left-4 z-20 bg-surface/85 backdrop-blur-md border border-surface-light p-3.5 rounded-2xl shadow-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="p-2 bg-accent/10 text-accent rounded-xl text-sm font-bold">⭐</div>
              <div>
                <p className="text-[10px] text-text font-black uppercase tracking-wider">100+ Brands</p>
                <p className="text-[9px] text-text-muted">Trust Brand Easy</p>
              </div>
            </motion.div>
            
            {/* Floating Glassmorphic Card 2 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-4 right-0 md:-right-4 z-20 bg-surface/85 backdrop-blur-md border border-surface-light p-3.5 rounded-2xl shadow-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="p-2 bg-accent-orange/10 text-accent-orange rounded-xl text-sm font-bold">🛡️</div>
              <div>
                <p className="text-[10px] text-text font-black uppercase tracking-wider">ISO Certified</p>
                <p className="text-[9px] text-text-muted">Signage Fabrication</p>
              </div>
            </motion.div>
            
            {/* Main Visual Image Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative w-full aspect-[4/3] bg-gradient-to-tr from-accent/5 to-transparent border border-surface-light rounded-3xl overflow-hidden shadow-2xl p-6 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 p-6 flex items-center justify-center"
                >
                  {slideProducts[currentSlide] && (
                    <Image
                      src={slideProducts[currentSlide].images[0]}
                      alt={slideProducts[currentSlide].title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-4 sm:p-12 pb-24 group-hover:scale-[1.04] transition-transform duration-700"
                      unoptimized
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls (Arrows) */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideProducts.length) % slideProducts.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-surface/80 hover:bg-surface border border-surface-light text-text rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideProducts.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-surface/80 hover:bg-surface border border-surface-light text-text rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>

              {/* Floating Glassmorphic Fumes Text Banner */}
              {slideProducts[currentSlide] && (
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-background/85 dark:bg-slate-900/85 backdrop-blur-md border border-surface-light px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-4">
                  <div className="overflow-hidden">
                    <span className="text-accent text-[9px] font-black uppercase tracking-wider block mb-0.5">
                      {slideProducts[currentSlide].category}
                    </span>
                    <span className="fumes-text text-xs sm:text-sm font-extrabold tracking-wide block truncate max-w-[150px] sm:max-w-[200px]">
                      {slideProducts[currentSlide].title}
                    </span>
                  </div>
                  <Link
                    href={`/products/${slideProducts[currentSlide].id}`}
                    className="bg-accent hover:bg-accent-dark text-background text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shrink-0 whitespace-nowrap"
                  >
                    Specs &rarr;
                  </Link>
                </div>
              )}
              
            </motion.div>
            
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
