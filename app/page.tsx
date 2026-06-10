import HeroSection from "@/components/HeroSection";
import ClientTrustSection from "@/components/ClientTrustSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientTrustSection />
      <ProductCategoriesSection />
      <FeaturedProducts />
      <PortfolioSection />
      <CTASection />
    </>
  );
}
