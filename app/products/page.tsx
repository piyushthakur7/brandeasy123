"use client";
import { products, categories as categoryList } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "motion/react";
import { ChevronRight, Filter } from "lucide-react";
import Link from "next/link";

export default function ProductsListingPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Complete Catalog</p>
            <h1 className="text-text font-heading text-4xl md:text-5xl font-bold leading-tight">
              Industrial <span className="text-accent">Signage & Printing</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">
              <Filter size={14} />
              Filter Catalog
            </button>
            <div className="h-4 w-px bg-surface-light" />
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-accent text-background rounded text-[11px] font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg"
            >
              Upload Requirement
            </Link>
          </motion.div>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-3 mb-20">
          {categoryList.map((category, i) => (
            <motion.a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 bg-surface border border-surface-light rounded-sm text-[11px] font-bold uppercase tracking-widest text-text hover:text-accent hover:border-accent transition-all whitespace-nowrap"
            >
              {category}
            </motion.a>
          ))}
        </div>

        {/* Categorized Products */}
        <div className="space-y-32">
          {categoryList.map((category, idx) => {
            const categoryProducts = products.filter(p => p.category === category);
            if (categoryProducts.length === 0) return null;

            return (
              <section 
                key={category} 
                id={category.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-32"
              >
                <div className="flex items-center justify-between mb-10 border-b border-surface-light pb-6">
                  <div>
                    <h2 className="text-text font-heading text-2xl md:text-3xl font-bold mb-2">
                       {category}
                    </h2>
                    <p className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em]">
                      {categoryProducts.length} Product Specifications
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.map((product, pIdx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: pIdx * 0.05 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
