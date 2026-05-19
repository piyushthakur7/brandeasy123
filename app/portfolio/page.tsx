import PortfolioSection from "@/components/PortfolioSection";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import CTASection from "@/components/CTASection";
import { MessageCircle } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="pt-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10">
        <p className="text-[#2DB34A] text-[10px] tracking-[0.5em] uppercase font-black mb-4">Our Work</p>
        <h1 className="text-[#0A2733] font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
          Premium <span className="text-[#0099D4] italic">Portfolio</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-sm leading-relaxed mb-4">
          Explore our latest installations, brand rollouts, and custom printing projects. From grand corporate headquarters to highly detailed retail signage, we bring visions to life with exceptional quality.
        </p>
      </div>
      
      <div className="bg-white -mt-10">
        {/* We reuse the PortfolioSection but it normally has its own padding and title */}
        <PortfolioSection />
      </div>

      {/* WhatsApp Images Catalog Callout */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative bg-gradient-to-br from-[#0A2733] to-[#0A2733]/95 rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-16 text-white border border-white/10 group">
            {/* Ambient glows */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#2DB34A]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#2DB34A]/15 transition-all duration-700" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#0099D4]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-[#2DB34A]/10 text-[#2DB34A] border border-[#2DB34A]/20 px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-black mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#2DB34A] animate-pulse" />
                  Live Gallery
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Browse All Our Real-Time <br />
                  <span className="text-[#2DB34A] italic">WhatsApp Images</span> & Catalog
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  We constantly upload photos of our latest corporate signs, retail backdrops, exhibition banners, and fabric setups directly to our WhatsApp Catalog. Check out our fresh projects and get direct design inspiration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
                <a
                  href="https://wa.me/c/917741961239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl hover:bg-[#1ebe5d] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20 font-serif text-[10px] font-black uppercase tracking-widest"
                >
                  <MessageCircle size={20} fill="currentColor" />
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
