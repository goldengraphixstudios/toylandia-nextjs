import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyToylandia from "@/components/WhyToylandia";
import HowToBuy from "@/components/HowToBuy";
import ProductWorlds from "@/components/ProductWorlds";
import FamilyValue from "@/components/FamilyValue";
import Wholesale from "@/components/Wholesale";
import Reviews from "@/components/Reviews";
import WaysToOrder from "@/components/WaysToOrder";
import BlogHighlights from "@/components/BlogHighlights";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ShopChoicePopup from "@/components/ShopChoicePopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ShopChoicePopup />
      <Navbar />
      <Hero />
      <HowToBuy />
      <WhyToylandia />
      <ProductWorlds />
      <FamilyValue />
      <Wholesale />
      <BlogHighlights />
      <Reviews />
      <WaysToOrder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
