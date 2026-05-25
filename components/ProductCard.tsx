"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import Image from "next/image";
import { MessageCircle, ExternalLink } from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  
  const whatsappLink = getWhatsAppQuoteLink(product.title, product.basePrice, {
    url: typeof window !== "undefined" ? `${window.location.origin}/products/${product.id}` : ""
  });

  return (
    <div 
      className="group bg-surface rounded-lg overflow-hidden border border-surface-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-background">
        {product.images && product.images.length > 0 ? (
          <Image 
            src={product.images[0]} 
            alt={product.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-light/20 text-text-muted">
             <span className="text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
          </div>
        )}
        
        {/* Hover Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-accent rounded text-background shadow-lg transition-transform hover:scale-105 active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={16} />
          </a>
        </div>

        {product.isFeatured && (
          <div className="absolute top-3 left-3 bg-accent-orange text-background text-[8px] font-black tracking-widest uppercase px-2 py-1 rounded shadow-lg">
            Popular
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
          <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-accent block mb-2">
            {product.category}
          </span>
          <h3 className="font-heading text-lg font-bold text-text group-hover:text-accent transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-text-muted mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-surface-light">
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-4">
            <div className="flex flex-col">
              <span className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Material</span>
              <span className="text-xs text-text font-medium truncate" title={product.material}>{product.material}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Lighting</span>
              <span className="text-xs text-text font-medium truncate" title={product.lightingType}>{product.lightingType}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Durability</span>
              <span className="text-xs text-text font-medium truncate" title={product.durability}>{product.durability}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Install Support</span>
              <span className="text-xs text-text font-medium truncate" title={product.installationType}>{product.installationType}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest group-hover:text-accent-dark transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Get Quote <ExternalLink size={12} />
            </a>
            <span className="text-text-muted text-[10px] uppercase font-bold tracking-widest group-hover:translate-x-1 transition-transform">
              View Specs →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
