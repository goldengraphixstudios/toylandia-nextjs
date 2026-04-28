import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyToylandia from "@/components/WhyToylandia";
import HowToBuy from "@/components/HowToBuy";
import ProductWorlds from "@/components/ProductWorlds";
import FamilyValue from "@/components/FamilyValue";
import Wholesale from "@/components/Wholesale";
import Reviews from "@/components/Reviews";
import WaysToOrder from "@/components/WaysToOrder";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyToylandia />
      <HowToBuy />
      <ProductWorlds />
      <FamilyValue />
      <Wholesale />
      <Reviews />
      <WaysToOrder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
