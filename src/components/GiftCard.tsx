import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";

const GiftCard = () => {
  return (
    <section id="gift-cards" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-restaurant-charcoal">
              Give the Gift of Fine Dining
            </h2>
            <p className="text-lg text-muted-foreground">
              Share the experience of exceptional cuisine with your loved ones. Our gift cards are perfect for any occasion.
            </p>
            <Button className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-white">
              <Gift className="mr-2" />
              Purchase Gift Card
            </Button>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/placeholder.svg"
                alt="Gift Card"
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;