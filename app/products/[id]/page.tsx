"use client";
import { use, useState, useEffect } from "react";
import { products } from "@/lib/products";
import { 
  ChevronRight, 
  ArrowLeft, 
  Ruler, 
  Package, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  Building2,
  ShoppingBag,
  Hotel,
  Utensils,
  Compass,
  Activity,
  Target,
  Sparkles,
  Layers,
  Award,
  Zap,
  Percent,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { getWhatsAppQuoteLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams?.id);
  
  if (!product) return (
    <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-background text-text">
      <h1 className="text-2xl font-bold font-heading mb-4">Product Not Found</h1>
      <p className="text-text-muted mb-8">The requested product could not be found in our catalog.</p>
      <Link href="/products" className="px-6 py-3 bg-accent text-background rounded font-bold uppercase tracking-widest hover:bg-accent-dark transition-colors">
        Back to Catalog
      </Link>
    </div>
  );

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

  // Dynamic Industry Applications mapping based on Category
  const getIndustryApplications = (category: string) => {
    const lowercaseCat = category.toLowerCase();
    if (lowercaseCat.includes("acrylic") || lowercaseCat.includes("led") || lowercaseCat.includes("sign") || lowercaseCat.includes("acp") || lowercaseCat.includes("panel")) {
      return [
        { 
          title: "Luxury Retail & Fronts", 
          description: "High-brightness and sharp detailing ensure storefront visibility and brand allure day and night.", 
          icon: ShoppingBag, 
          gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 border-blue-500/20" 
        },
        { 
          title: "Corporate Lobbies", 
          description: "Sleek and professional finishes perfect for receptions, conference rooms, and director office branding.", 
          icon: Building2, 
          gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border-emerald-500/20" 
        },
        { 
          title: "Boutique Hotels", 
          description: "Elegant backlit halo illumination creating a premium, welcoming atmosphere for visitors and guests.", 
          icon: Hotel, 
          gradient: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border-amber-500/20" 
        },
        { 
          title: "Cafes & Dining", 
          description: "Custom ambient signage and neon layouts that give restaurants an inviting and highly photographable interior.", 
          icon: Utensils, 
          gradient: "from-pink-500/10 to-rose-500/10 dark:from-pink-500/20 dark:to-rose-500/20 border-pink-500/20" 
        },
      ];
    } else if (lowercaseCat.includes("flex") || lowercaseCat.includes("vinyl") || lowercaseCat.includes("banner") || lowercaseCat.includes("stand")) {
      return [
        { 
          title: "Trade Shows & Expos", 
          description: "Portable, high-impact roll-up stands and banner mounts that install easily to establish custom booths.", 
          icon: Compass, 
          gradient: "from-purple-500/10 to-violet-500/10 dark:from-purple-500/20 dark:to-violet-500/20 border-purple-500/20" 
        },
        { 
          title: "Retail Outlets", 
          description: "Promotional window decals, hanging banners, and advertising stands to broadcast seasonal sales.", 
          icon: ShoppingBag, 
          gradient: "from-sky-500/10 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/20 border-sky-500/20" 
        },
        { 
          title: "Conferences & Events", 
          description: "Professional step-and-repeat backdrops, media walls, and welcome banners for premium guest events.", 
          icon: Building2, 
          gradient: "from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20 border-emerald-500/20" 
        },
        { 
          title: "Outdoor Marketing", 
          description: "Heavy-duty, weather-resistant flex prints designed for building banners and high-wind environments.", 
          icon: Activity, 
          gradient: "from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border-red-500/20" 
        },
      ];
    } else {
      return [
        { 
          title: "Corporate Identity", 
          description: "Professional badges, tags, and office printing solutions to unify your corporate team branding.", 
          icon: Building2, 
          gradient: "from-cyan-500/10 to-sky-500/10 dark:from-cyan-500/20 dark:to-sky-500/20 border-cyan-500/20" 
        },
        { 
          title: "Marketing Campaigns", 
          description: "High-grade custom stickers, labels, and decals to distribute and expand branding outreach.", 
          icon: Target, 
          gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20 border-amber-500/20" 
        },
        { 
          title: "Exhibitor Kits", 
          description: "Customized promotional packages including hang tags, stands, and print materials for expos.", 
          icon: Compass, 
          gradient: "from-teal-500/10 to-emerald-500/10 dark:from-teal-500/20 dark:to-emerald-500/20 border-teal-500/20" 
        },
        { 
          title: "Premium Packaging", 
          description: "Top-tier custom hang tags, product branding cards, and decals to elevate your packaging design.", 
          icon: ShoppingBag, 
          gradient: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border-indigo-500/20" 
        },
      ];
    }
  };

  const applications = getIndustryApplications(product.category);

  // Key Brand Benefits (applicable to industrial branding & signage)
  const brandBenefits = [
    {
      title: "Maximum Visibility",
      description: "Optimized materials and LED brightness configurations ensure your signage stands out clearly in any light conditions.",
      icon: Eye
    },
    {
      title: "Increased Foot Traffic",
      description: "Vibrant designs and premium manufacturing finishes turn passing pedestrians into prospective store customers.",
      icon: TrendingUp
    },
    {
      title: "Strong Brand Authority",
      description: "State-of-the-art signage fabrication reflects professional quality, instilling trust in your corporate identity.",
      icon: Target
    },
    {
      title: "24/7 Ambient Marketing",
      description: "Continuous exposure. Even during non-operating hours, illuminated signage keeps promoting your brand.",
      icon: Clock
    },
    {
      title: "Outstanding Durability",
      description: "Tough materials engineered specifically to withstand UV rays, heavy dust, and moisture for long-lasting display life.",
      icon: ShieldCheck
    },
    {
      title: "High ROI Efficiency",
      description: "Low-voltage energy-efficient Samsung LEDs combined with zero-maintenance frames offer substantial cost savings.",
      icon: Award
    }
  ];

  // Helper component for Icon
  function Eye(props: any) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }

  function TrendingUp(props: any) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    )
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-text floral-bg pb-24">
      {/* Breadcrumbs Navigation */}
      <div className="bg-surface/50 backdrop-blur-md border-b border-surface-light py-4 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
              <ArrowLeft size={12}/> Home
            </Link>
            <ChevronRight size={14} className="text-surface-light" />
            <Link href="/products" className="hover:text-accent transition-colors">B2B Catalog</Link>
            <ChevronRight size={14} className="text-surface-light" />
            <span className="text-text max-w-[200px] truncate">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Dynamic Immersive Hero Section */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Product Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">{product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
              {product.title}
            </h1>
            
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
              {product.description}
            </p>

            {/* Quick specifications icons strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-surface border border-surface-light rounded-xl">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Package size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Material</p>
                  <p className="text-xs text-text font-bold truncate max-w-[120px]" title={product.material}>{product.material}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface border border-surface-light rounded-xl">
                <div className="p-2 bg-accent-orange/10 rounded-lg text-accent-orange">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Durability</p>
                  <p className="text-xs text-text font-bold truncate max-w-[120px]" title={product.durability}>{product.durability}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface border border-surface-light rounded-xl col-span-2 sm:col-span-1">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Turnaround</p>
                  <p className="text-xs text-text font-bold truncate max-w-[120px]" title={product.turnaroundTime}>{product.turnaroundTime}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
              <button 
                onClick={() => scrollToSection("quote-builder")}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-accent/30"
              >
                Get Free Quote <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => scrollToSection("specifications")}
                className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-light text-text border border-surface-light font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
              >
                View Technical Specs
              </button>
            </div>
          </div>

          {/* Right Column - Premium Image Visuals Container */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] w-full bg-surface border border-surface-light rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-6 flex items-center justify-center"
                >
                  {product.images && product.images.length > 0 ? (
                    <Image 
                      src={product.images[selectedImage]} 
                      alt={product.title} 
                      fill 
                      className="object-contain p-2 hover:scale-105 transition-transform duration-700"
                      priority
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-muted">
                      <Package size={48} className="mb-2 stroke-1" />
                      <span className="text-xs font-bold uppercase tracking-widest">Image Coming Soon</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Gallery Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 aspect-[4/3] bg-surface border shrink-0 transition-all rounded-lg overflow-hidden ${selectedImage === i ? "border-accent ring-2 ring-accent/20" : "border-surface-light hover:border-accent/40"}`}
                  >
                    <Image src={img} alt={`Preview ${i}`} fill className="object-cover p-1" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Installations Showcase / Project Gallery */}
      {product.images && product.images.length > 0 && (
        <section className="py-16 bg-surface/30 border-y border-surface-light transition-colors">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-3 py-1 bg-accent-orange/10 text-accent-orange text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                Work Showcase
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-text mb-4">
                Premium {product.title} Gallery
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Discover our installation craftsmanship. We process all designs with absolute accuracy and engineering rigidity to deliver premium commercial branding.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-surface border border-surface-light hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(idx)}
                >
                  <Image 
                    src={img} 
                    alt={`${product.title} view ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text">View Spec Image {idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Perfect For These Applications */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
            Target Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text mb-4">
            Perfect For These Applications
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Engineered specifically to fulfill branding, structural integrity, and architectural parameters across diverse business venues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, idx) => {
            const AppIcon = app.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col p-6 bg-gradient-to-br ${app.gradient} border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-3 bg-background rounded-xl w-fit shadow-sm mb-6 text-text">
                  <AppIcon size={24} />
                </div>
                <h3 className="text-lg font-heading font-bold text-text mb-3">{app.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed flex-grow">{app.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Technical Specifications Blueprint Panel */}
      <section id="specifications" className="py-20 bg-surface/30 border-y border-surface-light scroll-mt-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Specs Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-full inline-block">
                Technical Data
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text">
                Technical Specifications
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Review the structural parameters of {product.title}. We use top-tier materials to ensure consistent color quality, luminous intensity, and wind rigidity.
              </p>

              {/* Quality certified stamp */}
              <div className="flex items-center gap-4 p-4 bg-background border border-surface-light rounded-2xl shadow-sm w-fit">
                <div className="p-3 bg-accent/10 text-accent rounded-full">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Quality Certified</p>
                  <p className="text-xs text-text-muted">Specifications meet international standards</p>
                </div>
              </div>
            </div>

            {/* Right Specs Table/Blueprint Column */}
            <div className="lg:col-span-7 bg-background border border-surface-light rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="font-heading font-bold text-lg text-text border-b border-surface-light pb-4 mb-6 flex items-center gap-2">
                <Layers size={18} className="text-accent" /> Blueprint Attributes
              </h3>
              
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Face & Side Material</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.material}
                  </dd>
                </div>
                
                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Emboss Thickness</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.thickness}
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Illumination Style</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.lightingType}
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Installation Method</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.installationType}
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Operating Lifespan</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> Indoor/Outdoor Grade
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Standard Turnaround</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.turnaroundTime}
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Minimum Order Qty</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> {product.minimumOrder}
                  </dd>
                </div>

                <div className="border-b border-surface-light pb-3">
                  <dt className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Pricing Format</dt>
                  <dd className="text-sm text-text font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" /> Starting ₹{product.basePrice} / {product.pricingUnit}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Key Brand Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-accent-orange/10 text-accent-orange text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
            Key Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text mb-4">
            Why Choose Our Signages?
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            We deliver state-of-the-art production quality that translates directly into visual impact, brand status, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandBenefits.map((benefit, idx) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-surface border border-surface-light rounded-2xl hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Background soft color splash */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                
                <div className="relative z-10 flex gap-4">
                  <div className="p-3.5 bg-accent/10 text-accent rounded-xl w-fit h-fit shrink-0">
                    <BenefitIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-text mb-2 group-hover:text-accent transition-colors">{benefit.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Interactive Custom Quote Builder */}
      <section id="quote-builder" className="py-20 bg-surface/30 border-t border-surface-light scroll-mt-24 transition-colors">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-background border border-surface-light rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* decorative accents */}
            <div className="absolute top-0 right-0 w-2 h-24 bg-accent" />
            <div className="absolute top-0 right-0 w-24 h-2 bg-accent" />
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3 py-1 bg-accent/10 text-accent text-[9px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                Interactive Quote Calculator
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text mb-2">
                Estimate Your Requirement
              </h2>
              <p className="text-text-muted text-xs">
                Configure your dimensions and quantities below. Our system will generate a live base estimation to share on WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Dimensions controls (rendered only if pricing is sqft/inch) */}
              {(product.pricingUnit === 'sqft' || product.pricingUnit === 'inch') ? (
                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                    1. Set Size Dimensions
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                        Width ({product.pricingUnit})
                      </label>
                      <div className="relative">
                        <input 
                          type="number" 
                          min="1"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 1))}
                          className="w-full bg-surface border border-surface-light rounded-xl p-4 text-sm font-bold text-text focus:outline-none focus:border-accent transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-text-muted uppercase">{product.pricingUnit}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                        Height ({product.pricingUnit})
                      </label>
                      <div className="relative">
                        <input 
                          type="number" 
                          min="1"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 1))}
                          className="w-full bg-surface border border-surface-light rounded-xl p-4 text-sm font-bold text-text focus:outline-none focus:border-accent transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-text-muted uppercase">{product.pricingUnit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-surface border border-surface-light rounded-xl text-xs text-text-muted space-y-1">
                    <p className="font-bold text-text flex items-center gap-1.5"><Ruler size={14} className="text-accent" /> Total Coverage Size</p>
                    <p>{width} x {height} = <span className="font-bold text-text">{(width * height).toLocaleString()} Total {product.pricingUnit}</span> per unit.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                    1. Pricing Model
                  </h3>
                  <div className="p-5 bg-surface border border-surface-light rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-accent-orange/10 text-accent-orange rounded-xl">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase font-bold tracking-wider">Pricing Method</p>
                      <p className="text-base font-bold text-text">Fixed Price Per Unit</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    This product is priced on a flat rate basis per unit instead of dimensional layout bounds. Set your target quantity on the right to build your request.
                  </p>
                </div>
              )}

              {/* Quantity controls */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-light pb-2">
                  2. Order Quantity
                </h3>
                
                <div>
                  <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                    Quantity Required
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full bg-surface border border-surface-light rounded-xl p-4 text-sm font-bold text-text focus:outline-none focus:border-accent transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-text-muted uppercase">units</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 px-1">
                    <span className="text-[10px] text-text-muted">Minimum Order: <strong className="text-text">{product.minimumOrder}</strong></span>
                    <span className="text-[10px] text-text-muted">Base price: <strong className="text-text">₹{product.basePrice}/{product.pricingUnit}</strong></span>
                  </div>
                </div>

                <div className="p-4 bg-surface border border-surface-light rounded-xl text-xs text-text-muted space-y-1">
                  <p className="font-bold text-text flex items-center gap-1.5"><Clock size={14} className="text-blue-500" /> Lead Turnaround Time</p>
                  <p>Estimated dispatch within <span className="font-bold text-text">{product.turnaroundTime}</span>.</p>
                </div>
              </div>
            </div>

            {/* Total estimation & WhatsApp CTA */}
            <div className="bg-surface border border-surface-light rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Estimated Base Price</p>
                <p className="text-3xl font-heading font-black text-text">
                  ₹{estimatedTotal.toLocaleString()}
                </p>
                <p className="text-[10px] text-text-muted mt-1">* GST & shipping costs calculated upon final design</p>
              </div>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="fill-white" />
                Share Details on WhatsApp
              </a>
            </div>

            {/* Trust assurances footer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-surface-light text-center">
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-text flex items-center gap-1"><CheckCircle2 size={12} className="text-accent" /> 100% Inspected</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-text flex items-center gap-1"><CheckCircle2 size={12} className="text-accent" /> Secure Packing</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-text flex items-center gap-1"><CheckCircle2 size={12} className="text-accent" /> Pan-India Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-text flex items-center gap-1"><CheckCircle2 size={12} className="text-accent" /> 5-Yr LED Warranty</span>
              </div>
            </div>
            
          </div>
          
          <p className="text-[11px] text-text-muted text-center leading-relaxed mt-6">
            Disclaimer: The calculated price is a base estimate for regular dimensions. Final invoicing may vary based on exact font complexities, mounting structures, vector complexity, and logistics. Our design experts will share a finalized design vector diagram and quotation via WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
}
