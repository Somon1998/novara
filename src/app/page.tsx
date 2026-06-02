import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <ProductsSection />
        <WhyChooseUs />
        <HowToOrder />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
