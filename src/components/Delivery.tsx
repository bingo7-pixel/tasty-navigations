import { Button } from "@/components/ui/button";
import { Truck, MapPin } from "lucide-react";

const Delivery = () => {
  return (
    <section id="delivery" className="bg-restaurant-cream py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-restaurant-charcoal">
            Delivery Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Enjoy our delicious meals in the comfort of your home. We deliver within a 5-mile radius.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-restaurant-charcoal hover:bg-restaurant-charcoal/90">
              <Truck className="mr-2" />
              Order Delivery Now
            </Button>
            <Button variant="outline" className="border-restaurant-charcoal text-restaurant-charcoal hover:bg-restaurant-charcoal hover:text-white">
              <MapPin className="mr-2" />
              Check Delivery Area
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;