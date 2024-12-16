import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')] 
        bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in-down max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Experience Fine Dining
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Indulge in an unforgettable culinary journey with our carefully crafted menu
        </p>
        <Button 
          onClick={scrollToReservation}
          className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-white px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105"
        >
          Make a Reservation
        </Button>
      </div>
    </section>
  );
};

export default Hero;