"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const spaces = [
  { name: "Retail Storefront", type: "LED Glow Signage", location: "Bangalore", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
  { name: "Corporate Office", type: "3D Acrylic Letters", location: "Mumbai", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=800" },
  { name: "Tech Park Hoarding", type: "Industrial Printing", location: "Hyderabad", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800" },
  { name: "Manufacturing Plant", type: "On-site Installation", location: "Pune", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
];

export default function PortfolioSection() {
  return (
    <section className="bg-surface py-24 md:py-32 border-y border-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-[10px] tracking-[0.2em] uppercase font-bold mb-4">Past Projects</p>
            <h2 className="text-text font-heading text-3xl md:text-5xl font-bold leading-tight">
              Recent <span className="text-accent">Installations</span>
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-block bg-background border border-surface-light text-text px-8 py-4 rounded-sm text-sm tracking-widest uppercase font-bold hover:border-accent transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {spaces.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[300px] md:h-[450px] rounded-sm overflow-hidden cursor-pointer border border-surface-light"
            >
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{p.location}</p>
                      <h3 className="text-text font-heading text-2xl md:text-3xl font-bold leading-none">{p.name}</h3>
                    </div>
                    <div className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase hidden md:block border border-surface-light px-2 py-1 rounded-sm bg-background/50 backdrop-blur-sm">
                      {p.type}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
