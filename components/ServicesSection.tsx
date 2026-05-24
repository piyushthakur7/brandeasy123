"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const collections = [
  {
    title: "Sign Boards",
    desc: "Premium LED glow signs, 3D letters, and ACP panelling for high-impact storefronts.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    tag: "High Demand",
  },
  {
    title: "Flex & Vinyl Printing",
    desc: "Large format eco-solvent and platinum flex printing for outdoor hoardings.",
    img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
  {
    title: "3D Acrylic Letters",
    desc: "Precision laser-cut acrylic and SS 304 letters for corporate branding.",
    img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=600",
    tag: "Premium",
  },
  {
    title: "In-shop Branding",
    desc: "Complete interior branding including wall vinyls, directory boards, and standees.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
  {
    title: "Corporate Printing",
    desc: "ID cards, tags, brochures, and bulk offset printing for daily corporate use.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
  {
    title: "Installation Services",
    desc: "Professional rigging and installation by our certified on-site engineering team.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-[10px] tracking-[0.2em] uppercase font-bold mb-4">Manufacturing Capabilities</p>
            <h2 className="text-text font-heading text-3xl md:text-5xl font-bold leading-[1.1]">
              Core <span className="text-accent">Services</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collections.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href="/products" className="block h-full">
                <div className="group bg-surface rounded-sm overflow-hidden border border-surface-light hover:border-accent transition-colors duration-300 relative h-full flex flex-col items-start">
                  <div className="h-48 w-full overflow-hidden relative bg-surface-light">
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    />
                  </div>
                  
                  <div className="p-6 pt-4 flex-1 flex flex-col">
                    {s.tag && (
                      <span className="absolute top-4 right-4 text-[10px] bg-accent-orange text-background font-bold px-2 py-1 tracking-widest uppercase rounded-sm z-10">
                        {s.tag}
                      </span>
                    )}
                    <h3 className="text-text font-heading font-bold mb-2 text-xl">{s.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 font-normal">{s.desc}</p>
                    <div className="mt-auto pt-4 border-t border-surface-light w-full text-accent text-[10px] font-bold tracking-[0.2em] uppercase group-hover:translate-x-1 transition-transform">
                      View Specifications →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-block bg-surface border border-surface-light text-text px-8 py-4 rounded-sm text-sm tracking-widest uppercase font-bold hover:border-accent transition-all"
          >
            Browse Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
