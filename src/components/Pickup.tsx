import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const Pickup = () => {
  return (
    <section id="pickup" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-restaurant-charcoal">
            Pickup Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Skip the wait and order ahead. Your meal will be ready when you arrive.
          </p>
          <Button className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-white">
            <Package className="mr-2" />
            Order Pickup Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pickup;