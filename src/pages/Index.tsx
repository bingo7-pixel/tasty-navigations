import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import GiftCard from "@/components/GiftCard";
import Delivery from "@/components/Delivery";
import Pickup from "@/components/Pickup";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <GiftCard />
      <Delivery />
      <Pickup />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Index;