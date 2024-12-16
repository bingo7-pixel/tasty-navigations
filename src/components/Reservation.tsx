import { Card, CardContent } from "@/components/ui/card";
import { ReservationForm } from "./reservation/ReservationForm";

const Reservation = () => {
  return (
    <section id="reservation" className="bg-restaurant-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-restaurant-charcoal text-center mb-8 animate-fade-in-down">
            Make a Reservation
          </h2>
          <Card className="transform transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <ReservationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reservation;