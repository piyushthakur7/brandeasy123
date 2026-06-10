"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { categoryGroups } from "@/lib/products";
import { Layers, Printer } from "lucide-react";

export default function ProductCategoriesSection() {
  const signageCategories = categoryGroups["Signage & Displays"];
  const printCategories = categoryGroups["Print Business & Branding"];

  return (
    <section className="py-24 bg-surface/30 border-y border-surface-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] tracking-[0.2em] uppercase font-bold rounded-full mb-4 inline-block">
              Manufacturing Capabilities
            </span>
            <h2 className="text-text font-heading text-3xl md:text-5xl font-bold leading-[1.1]">
              Explore Our <span className="text-accent">Product Categories</span>
            </h2>
          </motion.div>
        </div>

        {/* Signage Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-surface-light pb-4">
            <div className="p-2 bg-accent/10 rounded-xl text-accent">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text">Signage & Displays</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {signageCategories.map((category, i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link href={`/products#${category.toLowerCase().replace(/\s+/g, "-")}`} className="block h-full">
                  <div className="group bg-surface rounded-2xl p-6 border border-surface-light hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full">
                    <h4 className="text-text font-heading font-bold mb-2 text-lg group-hover:text-accent transition-colors">{category}</h4>
                    <p className="text-text-muted text-xs leading-relaxed mb-6 font-normal">Premium customized {category.toLowerCase()} for corporate branding and storefronts.</p>
                    <div className="mt-auto pt-4 border-t border-surface-light w-full flex justify-between items-center text-accent text-[10px] font-bold tracking-[0.1em] uppercase">
                      <span>View Products</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Print Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-surface-light pb-4">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
              <Printer size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text">Print Business & Branding</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {printCategories.map((category, i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link href={`/products#${category.toLowerCase().replace(/\s+/g, "-")}`} className="block h-full">
                  <div className="group bg-surface rounded-2xl p-6 border border-surface-light hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full">
                    <h4 className="text-text font-heading font-bold mb-2 text-lg group-hover:text-blue-500 transition-colors">{category}</h4>
                    <p className="text-text-muted text-xs leading-relaxed mb-6 font-normal">High-quality {category.toLowerCase()} for promotional and marketing events.</p>
                    <div className="mt-auto pt-4 border-t border-surface-light w-full flex justify-between items-center text-blue-500 text-[10px] font-bold tracking-[0.1em] uppercase">
                      <span>View Products</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
