"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, Settings, Factory, Building2 } from "lucide-react";

const trustBadges = [
  { icon: Factory, label: "In-House", highlight: "Manufacturing" },
  { icon: Settings, label: "Precision", highlight: "Engineering" },
  { icon: Building2, label: "Pan-India", highlight: "Installations" },
];

export default function HeroSection() {
  return (
    <section className="bg-background pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Hero Container */}
        <div className="relative rounded-sm overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center border border-surface-light shadow-xl">
          {/* Background Image - Realistic Industrial Manufacturing */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
              alt="Industrial Manufacturing Facility"
              fill
              className="object-cover opacity-40 mix-blend-luminosity grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="relative z-10 w-full px-8 md:px-16 py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-surface border border-surface-light text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm mb-6 shadow-sm">
                B2B Signage & Printing Partner
              </span>
              
              <h1 className="text-text font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
                Industrial Grade <br />
                <span className="text-accent">Branding Solutions</span>
              </h1>
              
              <p className="text-text-muted text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                We manufacture premium 3D letters, ACP signage, and flex printing for enterprises. Precision engineering meets rapid pan-India deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="https://wa.me/917741961239?text=Hi,%20I%20would%20like%20to%20get%20a%20manufacturing%20quote%20for%20my%20signage%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-accent text-background px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Get Manufacturing Quote
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-surface border border-surface-light text-text px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:border-accent hover:bg-surface-light transition-all flex items-center justify-center"
                >
                  Book Site Inspection
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {trustBadges.map((badge, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              key={badge.label} 
              className="bg-surface border border-surface-light rounded-sm p-6 flex items-center gap-4 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-sm bg-surface-light flex items-center justify-center shrink-0 text-accent">
                <badge.icon size={24} />
              </div>
              <div>
                <span className="text-text-muted font-bold text-xs uppercase tracking-widest block mb-1">{badge.label}</span>
                <span className="text-text font-bold text-sm uppercase tracking-widest">{badge.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
