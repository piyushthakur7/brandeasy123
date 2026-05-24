import HeroSection from "@/components/HeroSection";
import ClientTrustSection from "@/components/ClientTrustSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import UploadCTASection from "@/components/UploadCTASection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientTrustSection />
      <ServicesSection />
      <FeaturedProducts />
      <PortfolioSection />
      <ProcessWorkflow />
      <UploadCTASection />
      <CTASection />
    </>
  );
}
