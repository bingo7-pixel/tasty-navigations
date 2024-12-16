import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="menu" className="h-screen bg-restaurant-cream" />
      <div id="gift-cards" className="h-screen bg-white" />
      <div id="delivery" className="h-screen bg-restaurant-cream" />
      <div id="pickup" className="h-screen bg-white" />
      <div id="reservation" className="h-screen bg-restaurant-cream" />
      <Footer />
    </div>
  );
};

export default Index;