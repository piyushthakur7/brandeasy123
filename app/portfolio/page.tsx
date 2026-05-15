import PortfolioSection from "@/components/PortfolioSection";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import CTASection from "@/components/CTASection";

export default function PortfolioPage() {
  return (
    <div className="pt-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <p className="text-[#2DB34A] text-[10px] tracking-[0.5em] uppercase font-black mb-4">Our Work</p>
        <h1 className="text-[#0A2733] font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
          Premium <span className="text-[#0099D4] italic">Portfolio</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-sm leading-relaxed mb-12">
          Explore our latest installations, brand rollouts, and custom printing projects. From grand corporate headquarters to highly detailed retail signage, we bring visions to life with exceptional quality.
        </p>
      </div>

      <GoldChevronStrip />
      
      <div className="bg-white">
        {/* We reuse the PortfolioSection but it normally has its own padding and title */}
        <PortfolioSection />
      </div>

      <GoldChevronStrip />
      <CTASection />
    </div>
  );
}
