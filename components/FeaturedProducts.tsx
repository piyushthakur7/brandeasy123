"use client";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categoryLinks = [
  { label: "3D Letters", hash: "3d-acrylic-letters" },
  { label: "LED Boards", hash: "led-sign-boards" },
  { label: "ACP Panels", hash: "acp-panels" },
  { label: "Signboards", hash: "premium-signboards" },
  { label: "Vinyl Banners", hash: "flex-&-vinyl-banners" },
  { label: "Promo Stands", hash: "stands-&-promo-displays" },
  { label: "Branding", hash: "branding-&-marketing-materials" }
];

export default function FeaturedProducts() {
  const featured = products.filter(p => p.isFeatured).length > 0 
    ? products.filter(p => p.isFeatured).slice(0, 6)
    : products.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Curated Collection</p>
              <h2 className="text-text font-heading text-3xl md:text-5xl font-bold leading-[1.1]">
                Product <span className="text-accent">Showcase</span>
              </h2>
            </div>
            <div>
              <Link 
                href="/products" 
                className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-text group hover:text-accent transition-colors"
              >
                Browse Catalog
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featured.length > 0 ? (
            featured.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-sans italic">Our latest collection is arriving soon. Check back shortly.</p>
            </div>
          )}
        </div>

        {/* Categories Quick Links */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
             {categoryLinks.map((link) => (
               <Link 
                 key={link.label}
                 href={`/products#${link.hash}`}
                 className="px-6 py-3 rounded-full border border-surface-light text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-all bg-surface"
               >
                 {link.label}
               </Link>
             ))}
        </div>
      </div>
    </section>
  );
}
