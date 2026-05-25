"use client";
import { use, useState, useEffect } from "react";
import { products } from "@/lib/products";
import { ChevronRight, ArrowLeft, Ruler, Package, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) return notFound();

  const [selectedImage, setSelectedImage] = useState(0);
  const [width, setWidth] = useState<number>(1);
  const [height, setHeight] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  // Calculate estimated price based on unit type
  useEffect(() => {
    let total = 0;
    if (product.pricingUnit === 'sqft' || product.pricingUnit === 'inch') {
      total = width * height * product.basePrice * quantity;
    } else {
      total = product.basePrice * quantity;
    }
    setEstimatedTotal(total);
  }, [width, height, quantity, product.basePrice, product.pricingUnit]);

  const whatsappLink = getWhatsAppQuoteLink(
    `${product.title} (Qty: ${quantity}${product.pricingUnit !== 'fixed' && product.pricingUnit !== 'unit' ? `, Size: ${width}x${height} ${product.pricingUnit}` : ''})`,
    estimatedTotal,
    { url: typeof window !== "undefined" ? window.location.href : "" }
  );

  return (
    <div className="min-h-screen pt-24 pb-40 bg-background text-text">
      {/* Breadcrumbs */}
      <div className="bg-surface py-4 mb-8 border-b border-surface-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><ArrowLeft size={12}/> Home</Link>
            <ChevronRight size={14} className="text-surface-light" />
            <Link href="/products" className="hover:text-accent transition-colors">B2B Catalog</Link>
            <ChevronRight size={14} className="text-surface-light" />
            <span className="text-text">{product.category}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Visuals - Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full bg-surface border border-surface-light rounded-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 p-8 flex items-center justify-center"
                >
                  {product.images && product.images.length > 0 ? (
                    <Image 
                      src={product.images[selectedImage]} 
                      alt={product.title} 
                      fill 
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-muted">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-24 aspect-[4/3] bg-surface border shrink-0 transition-all rounded-sm ${selectedImage === i ? "border-accent" : "border-surface-light hover:border-accent/50"}`}
                  >
                    <Image src={img} alt={`Preview ${i}`} fill className="object-cover p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details - Right Column (6 cols) */}
          <div className="lg:col-span-6">
            {/* Header section */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-surface-light text-text-muted text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">{product.title}</h1>
              <p className="text-text-muted text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-surface-light mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest flex items-center gap-1"><Package size={12}/> Material</span>
                <span className="text-sm text-text font-medium">{product.material}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest flex items-center gap-1"><Ruler size={12}/> Thickness</span>
                <span className="text-sm text-text font-medium">{product.thickness}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest flex items-center gap-1"><ShieldCheck size={12}/> Lighting</span>
                <span className="text-sm text-text font-medium">{product.lightingType}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest flex items-center gap-1"><Clock size={12}/> Turnaround</span>
                <span className="text-sm text-text font-medium">{product.turnaroundTime}</span>
              </div>
            </div>

            {/* Pricing Calculator */}
            <div className="bg-surface border border-surface-light p-6 rounded-sm mb-8">
              <h3 className="text-sm font-bold text-text mb-4 flex items-center gap-2">
                Custom Quote Builder
                <span className="text-[10px] font-normal text-text-muted px-2 py-0.5 bg-surface-light rounded-sm">Provide details for an accurate estimate</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {(product.pricingUnit === 'sqft' || product.pricingUnit === 'inch') && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Width ({product.pricingUnit})</label>
                      <input 
                        type="number" 
                        min="1"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value) || 1)}
                        className="w-full bg-background border border-surface-light rounded-sm p-3 text-sm text-text focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Height ({product.pricingUnit})</label>
                      <input 
                        type="number" 
                        min="1"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value) || 1)}
                        className="w-full bg-background border border-surface-light rounded-sm p-3 text-sm text-text focus:outline-none focus:border-accent"
                      />
                    </div>
                  </>
                )}
                <div className={product.pricingUnit === 'fixed' || product.pricingUnit === 'unit' ? 'col-span-2' : 'col-span-2'}>
                  <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Quantity</label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    className="w-full bg-background border border-surface-light rounded-sm p-3 text-sm text-text focus:outline-none focus:border-accent"
                  />
                  <p className="text-[10px] text-text-muted mt-2">Minimum Order: {product.minimumOrder}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-light">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Estimated Total</p>
                  <p className="text-2xl font-bold text-text">₹{estimatedTotal.toLocaleString()}</p>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-accent-dark transition-all shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle size={18} />
                  Share on WhatsApp
                </a>
              </div>
            </div>

            <div className="text-xs text-text-muted leading-relaxed">
              * Note: The estimated total is for reference purposes. Final pricing may vary based on specific design requirements, complex installations, and bulk shipping constraints. Our team will provide an exact quote upon reviewing your specifications.
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
