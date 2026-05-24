"use client";
import { Sparkles, PenTool, Wrench } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AIDesignPage() {
  return (
    <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center pt-24 pb-20 relative overflow-hidden">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto bg-surface border border-surface-light rounded-sm flex items-center justify-center text-accent mb-8 shadow-2xl">
            <Wrench size={40} className="animate-pulse" />
          </div>
          
          <span className="inline-block px-4 py-1.5 bg-surface-light text-text-muted text-[10px] font-bold uppercase tracking-widest rounded-sm mb-6">
            Under Development
          </span>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            AI Design <span className="text-accent">Studio</span>
          </h1>
          
          <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            We are currently upgrading our AI generation tools to better handle precise 3D signage and industrial printing requirements. The new platform will be available soon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-accent text-background px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <PenTool size={18} />
              Manual Design Request
            </Link>
            <Link 
              href="/products"
              className="w-full sm:w-auto bg-surface border border-surface-light text-text px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:border-accent transition-all flex items-center justify-center"
            >
              Browse Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
