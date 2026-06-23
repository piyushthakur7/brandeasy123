import PortfolioSection from "@/components/PortfolioSection";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import CTASection from "@/components/CTASection";
import { MessageCircle } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 flex flex-col items-center text-center">
        <p className="text-accent text-xs md:text-sm tracking-[0.5em] uppercase font-black mb-6">Our Work</p>
        <h1 className="text-text font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
          Premium <span className="text-[#0099D4] italic">Portfolio</span>
        </h1>
        <p className="text-text-muted max-w-3xl text-lg md:text-xl leading-relaxed mb-6 mx-auto">
          Explore our latest installations, brand rollouts, and custom printing projects. From grand corporate headquarters to highly detailed retail signage, we bring visions to life with exceptional quality.
        </p>
      </div>
      
      <div className="-mt-16">
        {/* We reuse the PortfolioSection but it normally has its own padding and title */}
        <PortfolioSection />
      </div>

      {/* WhatsApp Images Catalog Callout */}
      <section className="py-24 md:py-32 border-t border-surface-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative bg-gradient-to-br from-[#0A2733] to-[#0A2733]/95 rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-16 text-white border border-white/10 group">
            {/* Ambient glows */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#2DB34A]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#2DB34A]/15 transition-all duration-700" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#0099D4]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-[#2DB34A]/10 text-[#2DB34A] border border-[#2DB34A]/20 px-5 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase font-black mb-8">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2DB34A] animate-pulse" />
                  Live Gallery
                </span>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  Browse All Our Real-Time <br />
                  <span className="text-[#2DB34A] italic">WhatsApp Images</span> & Catalog
                </h2>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  We constantly upload photos of our latest corporate signs, retail backdrops, exhibition banners, and fabric setups directly to our WhatsApp Catalog. Check out our fresh projects and get direct design inspiration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
                <a
                  href={`https://wa.me/c/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918320282847"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-2xl hover:bg-[#1ebe5d] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20 font-serif text-xs md:text-sm font-black uppercase tracking-widest"
                >
                  <MessageCircle size={24} fill="currentColor" />
                  <span>Explore WhatsApp Images</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldChevronStrip />
      <CTASection />
    </div>
  );
}
