"use client";
import { UploadCloud, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UploadCTASection() {
  return (
    <section className="bg-surface py-20 border-y border-surface-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-background mx-auto mb-8 shadow-xl shadow-accent/20">
          <UploadCloud size={32} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
          Have a Design Ready?
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
          Upload your specifications, architectural drawings, or logo files. Our engineers will review them and provide a comprehensive manufacturing quote within 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="flex items-center justify-center gap-2 bg-text text-background px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-all w-full sm:w-auto"
          >
            Upload Requirements
            <ArrowRight size={18} />
          </Link>
          <span className="text-text-muted text-xs uppercase tracking-widest font-bold">OR</span>
          <Link 
            href="/products"
            className="flex items-center justify-center gap-2 border border-surface-light bg-background text-text px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:border-accent transition-all w-full sm:w-auto"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
