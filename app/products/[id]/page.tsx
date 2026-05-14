"use client";
import { use, useState, useMemo } from "react";
import { products } from "@/lib/products";
import { ChevronRight, Star, Share2, MessageCircle, Monitor, Clock, Award, CloudRain, Mic, Camera, Video, Plus, Minus, Truck } from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data for variants
const MOCK_VARIANTS = [
  { id: "hand", label: "Hand Flags", img: "/images/products/vinyl_banner.png" },
  { id: "rect", label: "Rectangle Flags", img: "/images/products/step_and_repeat.png" },
  { id: "pers", label: "Personalized Flags", img: "/images/products/event_canopy.png" },
  { id: "feather", label: "Feather Flag - Mesh", img: "/images/products/popup_display.png" }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedType, setSelectedType] = useState(MOCK_VARIANTS[0].id);
  const [pantone, setPantone] = useState("");
  const [instructions, setInstructions] = useState("");
  const [quantity, setQuantity] = useState(51);

  if (!product) return notFound();

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const getDiscountedPrice = (qty: number) => {
    let discount = 0;
    if (qty >= 250) discount = 0.25;
    else if (qty >= 100) discount = 0.22;
    else if (qty >= 50) discount = 0.20;
    else if (qty >= 10) discount = 0.15;
    else if (qty >= 2) discount = 0.12;
    return product.price * (1 - discount);
  };

  const currentPrice = getDiscountedPrice(quantity);
  const originalPrice = product.price;
  const currentDiscountPercent = quantity >= 250 ? 25 : quantity >= 100 ? 22 : quantity >= 50 ? 20 : quantity >= 10 ? 15 : quantity >= 2 ? 12 : 0;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="min-h-screen pt-24 pb-40 bg-[#F8FAFC]">
      {/* Breadcrumbs */}
      <div className="bg-white py-4 mb-8 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-3 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/shop" className="hover:text-[#00AEEF] transition-colors">Custom Flags</Link>
            <ChevronRight size={14} />
            <span className="text-slate-400">Advertising Flags</span>
            <ChevronRight size={14} />
            <span className="text-[#00AEEF]">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Visuals - Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-square w-full bg-white border border-slate-200">
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
                      className="object-contain p-4"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                      <Image src="/images/products/vinyl_banner.png" alt="mock" fill className="object-contain p-4" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Thumbnails */}
            <div 
              className="flex gap-4 overflow-x-auto pb-2" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-24 aspect-square bg-white border shrink-0 transition-all ${selectedImage === i ? "border-[#00AEEF]" : "border-slate-200 hover:border-[#00AEEF]/50"}`}
                >
                  <Image src={img} alt={`Preview ${i}`} fill className="object-cover p-1" />
                </button>
              ))}
              {/* Mock extra thumbnails just for visual matching */}
              {[1,2,3,4,5].map((_, i) => (
                <button key={`mock-${i}`} className={`relative w-24 aspect-square bg-white border shrink-0 transition-all border-slate-200 hover:border-[#00AEEF]/50`}>
                   <Image src="/images/products/vinyl_banner.png" alt="Preview mock" fill className="object-cover p-1 opacity-50" />
                </button>
              ))}
            </div>
          </div>

          {/* Details - Right Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 border border-slate-200">
            {/* Header section */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
                <a href="#reviews" className="underline hover:text-[#00AEEF]">Write a Review</a>
                <span className="text-slate-300">|</span>
                <a href="#specs" className="underline hover:text-[#00AEEF]">Product Specification</a>
                <span className="text-slate-300">|</span>
                <span>SKU: <span className="font-medium text-slate-800">BBCFMHF</span></span>
                <span className="text-slate-300">|</span>
                <button className="hover:text-[#00AEEF]"><Share2 size={16} /></button>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-[#FFF8E7] text-[#B8860B] px-4 py-2 text-sm border border-[#F5DEB3]">
                <Truck size={16} />
                <span>Standard by <strong>22 May, Friday</strong></span>
              </div>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-4 gap-4 py-6 border-y border-slate-100 mb-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] bg-[#F0F9FF]">
                  <Monitor size={24} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Custom Design</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] bg-[#F0F9FF]">
                  <Clock size={24} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Fast Turnaround</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] bg-[#F0F9FF]">
                  <Award size={24} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] bg-[#F0F9FF]">
                  <CloudRain size={24} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Weatherproof</span>
              </div>
            </div>

            {/* Flag Type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-800 mb-4">Flag Type</label>
              <div className="flex flex-wrap gap-4">
                {MOCK_VARIANTS.map((v) => (
                  <button 
                    key={v.id}
                    onClick={() => setSelectedType(v.id)}
                    className={`flex flex-col items-center p-2 border rounded-md transition-all w-[120px] ${selectedType === v.id ? "border-[#00AEEF] shadow-sm ring-1 ring-[#00AEEF]" : "border-slate-200 hover:border-[#00AEEF]/50"}`}
                  >
                    <div className="relative w-full aspect-[4/3] mb-2 bg-slate-50">
                      <Image src={v.img} alt={v.label} fill className="object-contain p-2" />
                    </div>
                    <span className="text-[11px] text-center text-slate-600">{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Select */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-800 mb-4">Size (W X H)</label>
              <div className="border border-slate-200 rounded-t-md border-b-0 inline-block px-6 py-2 text-[#00AEEF] text-sm font-medium border-b-2 border-b-white relative top-[2px] bg-white z-10">
                Popular Sizes
              </div>
              <div className="border border-slate-200 p-6 rounded-md rounded-tl-none bg-white">
                <div className="flex flex-wrap gap-4">
                  {product.sizes.map((size, idx) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`relative px-4 py-2 text-sm border rounded transition-all ${selectedSize === size ? "border-[#00AEEF] text-[#00AEEF]" : "border-slate-200 text-slate-600 hover:border-[#00AEEF]/50"}`}
                    >
                      {idx === 0 && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39B54A] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm">
                          Preferred
                        </div>
                      )}
                      {size}
                    </button>
                  ))}
                  {/* Mock extra sizes to match screenshot */}
                  <button className={`px-4 py-2 text-sm border border-slate-200 rounded text-slate-600 hover:border-[#00AEEF]/50`}>12 Inch x 8 Inch</button>
                  <button className={`px-4 py-2 text-sm border border-slate-200 rounded text-slate-600 hover:border-[#00AEEF]/50`}>18 Inch x 12 Inch</button>
                  <button className={`px-4 py-2 text-sm border border-slate-200 rounded text-slate-600 hover:border-[#00AEEF]/50`}>36 Inch x 24 Inch</button>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Download the Design guideline: <a href="#" className="text-[#00AEEF] underline">Download Template</a>
              </div>
            </div>

            {/* Pantone */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3">
                Pantone + Color Bridge Coated (optional)
                <span className="w-4 h-4 rounded border border-slate-300 text-slate-400 inline-flex items-center justify-center text-[10px]">?</span>
              </label>
              <input 
                type="text" 
                value={pantone}
                onChange={(e) => setPantone(e.target.value)}
                className="w-full border border-slate-300 rounded p-3 text-sm focus:outline-none focus:border-[#00AEEF]"
              />
            </div>

            {/* Specific Instructions */}
            <div className="mb-8 bg-slate-50/50 p-6 border border-slate-100">
              <label className="block text-sm font-semibold text-slate-800 mb-3">Specific Instructions (Optional)</label>
              <textarea 
                rows={4}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full border border-slate-300 rounded p-3 text-sm focus:outline-none focus:border-[#00AEEF] mb-2"
              ></textarea>
              <p className="text-xs text-slate-500 mb-3">You can now use voice notes to add your comment</p>
              <button className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#00AEEF] transition-colors">
                <Mic size={16} />
                <span className="underline">Add a Voice note</span>
              </button>
            </div>

            {/* Print Side */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-800">Print Side</span>
              <span className="text-sm text-slate-600">Single</span>
              <span className="w-4 h-4 rounded border border-slate-300 text-slate-400 inline-flex items-center justify-center text-[10px]">?</span>
            </div>

            {/* Quantity Discount */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-800 mb-4">Save Big! Buy More. (Quantity Discount)</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[
                  { min: "Min 2", price: (product.price * 0.88).toFixed(2), save: "12%" },
                  { min: "10 +", price: (product.price * 0.85).toFixed(2), save: "15%" },
                  { min: "50 +", price: (product.price * 0.80).toFixed(2), save: "20%", active: quantity >= 50 && quantity < 100 },
                  { min: "100 +", price: (product.price * 0.78).toFixed(2), save: "22%", active: quantity >= 100 && quantity < 250 },
                  { min: "250 +", price: (product.price * 0.75).toFixed(2), save: "25%", active: quantity >= 250 }
                ].map((tier, i) => (
                  <button 
                    key={i} 
                    onClick={() => {
                      const baseQty = parseInt(tier.min.replace(/[^0-9]/g, ''));
                      setQuantity(baseQty);
                    }}
                    className={`flex-shrink-0 flex flex-col items-center justify-center p-4 border w-[130px] bg-white transition-all ${tier.active ? "border-[#00AEEF] ring-1 ring-[#00AEEF]" : "border-slate-200 hover:border-[#00AEEF]/50"}`}
                  >
                    <span className="text-sm text-slate-700 mb-1">{tier.min} for</span>
                    <span className="text-sm font-bold text-slate-900 mb-3">₹{tier.price} /unit</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">Save {tier.save}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Customer Reviews Section */}
        <div id="reviews" className="mt-16 bg-white p-8 border border-slate-200">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">Customer Reviews</h2>
            <button className="bg-[#00AEEF] text-white px-6 py-2 text-sm font-medium hover:bg-[#0099D4] transition-colors">
              Write a Review
            </button>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative w-24 h-16 bg-orange-100 flex-shrink-0">
                 {product.images && product.images[0] && <Image src={product.images[0]} alt="product" fill className="object-cover" />}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-[#003B5C]">Review this product</h3>
                <p className="text-sm text-slate-500 mt-1">{product.title}</p>
              </div>
            </div>

            <div className="flex gap-1 text-slate-200 mb-6 items-center">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              <span className="text-sm text-slate-500 ml-2">Click stars to rate</span>
            </div>

            <form className="space-y-4">
              <input type="text" placeholder="Title of your Review" className="w-full border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#00AEEF]" />
              <textarea placeholder="Your review" rows={4} className="w-full border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#00AEEF]"></textarea>
              <input type="text" placeholder="Full name" className="w-full border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#00AEEF]" />
              <input type="email" placeholder="Your email" className="w-full border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#00AEEF]" />
              
              <div className="flex gap-4 pt-2">
                <button type="button" className="w-24 h-24 border border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-[#00AEEF] transition-colors">
                  <Camera size={32} />
                  <span className="text-[10px] bg-slate-400 text-white px-2 py-0.5 rounded-sm">upload photo</span>
                </button>
                <button type="button" className="w-24 h-24 border border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-[#00AEEF] transition-colors">
                  <Video size={32} />
                  <span className="text-[10px] bg-slate-400 text-white px-2 py-0.5 rounded-sm">upload video</span>
                </button>
              </div>

              <div className="flex justify-end gap-2 pt-6">
                <button type="button" className="px-8 py-2 bg-slate-400 text-white text-sm hover:bg-slate-500 transition-colors">Cancel</button>
                <button type="submit" className="px-8 py-2 bg-[#00AEEF] text-white text-sm hover:bg-[#0099D4] transition-colors">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* Sticky Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-50 py-4">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-end gap-6">
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-800">₹{(currentPrice * quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              <span className="text-[10px] text-slate-500">(Incl. GST)</span>
            </div>
            
            {currentDiscountPercent > 0 && (
              <div className="flex flex-col items-start gap-1 border-r border-slate-200 pr-6 mr-2">
                <span className="text-sm text-slate-400 line-through">₹{(originalPrice * quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                <span className="bg-[#39B54A] text-white text-[10px] font-bold px-2 py-0.5 rounded">Save {currentDiscountPercent}%</span>
              </div>
            )}
          </div>

          <div className="flex items-center border border-slate-200 rounded h-10">
            <button onClick={() => handleQuantityChange(-1)} className="w-10 h-full flex items-center justify-center text-slate-400 hover:bg-slate-50 border-r border-slate-200"><Minus size={14} /></button>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-16 h-full text-center text-sm font-bold focus:outline-none appearance-none"
            />
            <button onClick={() => handleQuantityChange(1)} className="w-10 h-full flex items-center justify-center text-slate-400 hover:bg-slate-50 border-l border-slate-200"><Plus size={14} /></button>
          </div>

          <button className="bg-[#00AEEF] text-white px-8 py-3 rounded text-sm font-bold hover:bg-[#0099D4] transition-colors shadow-lg shadow-[#00AEEF]/20">
            Select Design Method
          </button>

        </div>
      </div>

    </div>
  );
}

