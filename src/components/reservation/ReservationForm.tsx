import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ReservationFormFields } from "./ReservationFormFields";
import { ReservationFormData } from "./types";
import { useToast } from "@/components/ui/use-toast";

export const ReservationForm = () => {
  const { toast } = useToast();
  const form = useForm<ReservationFormData>();

  const onSubmit = (data: ReservationFormData) => {
    toast({
      title: "Reservation Submitted",
      description: "We'll confirm your reservation shortly via email.",
    });
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in-down">
        <ReservationFormFields form={form} />
        <Button
          type="submit"
          className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90 text-white transform transition-all duration-300 hover:scale-105"
        >
          Reserve Table
        </Button>
      </form>
    </Form>
  );
};