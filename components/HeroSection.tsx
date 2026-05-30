"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Factory } from "lucide-react";

export default function HeroSection() {
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
              <span className="text-accent text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em]">Premium B2B Signage Fabrication</span>
            </motion.div>
            
            {/* Main Catchy Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-text font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
            >
              Fabricating High-Impact <br />
              <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Brand Signages</span>
            </motion.h1>
            
            {/* Context Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl"
            >
              Transform your business facade with state-of-the-art 3D letters, LED signs, ACP cladding, and premium promotional standees. Engineered with accuracy and delivered across India.
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
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Logistics</p>
                  <p className="text-xs text-text font-bold">Pan-India Install</p>
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
            
            {/* Main Visual Image frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative w-full aspect-[4/3] bg-gradient-to-tr from-accent/5 to-transparent border border-surface-light rounded-3xl overflow-hidden shadow-2xl p-6 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              <Image
                src="/hero_art.png"
                alt="Premium Brand Easy 3D Signage Showcase"
                fill
                priority
                className="object-contain p-4 hover:scale-[1.04] transition-transform duration-700"
                unoptimized
              />
            </motion.div>
            
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
