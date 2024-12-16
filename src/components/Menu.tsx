import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const foodItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
    price: "$28",
    image: "/placeholder.svg",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle and parmesan",
    price: "$24",
    image: "/placeholder.svg",
    category: "Main Course"
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    description: "Prime cut tenderloin with red wine reduction",
    price: "$34",
    image: "/placeholder.svg",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp romaine, garlic croutons, parmesan, classic dressing",
    price: "$14",
    image: "/placeholder.svg",
    category: "Starters"
  },
];

const drinkItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Martini",
    description: "Craft gin, dry vermouth, olive or lemon twist",
    price: "$16",
    image: "/placeholder.svg",
    category: "Cocktails"
  },
  {
    id: 2,
    name: "House Red Wine",
    description: "Selected premium red wine by our sommelier",
    price: "$12",
    image: "/placeholder.svg",
    category: "Wine"
  },
  {
    id: 3,
    name: "Craft Lemonade",
    description: "Fresh squeezed lemons, mint, house-made syrup",
    price: "$6",
    image: "/placeholder.svg",
    category: "Non-Alcoholic"
  },
  {
    id: 4,
    name: "Espresso",
    description: "Double shot of our premium house blend",
    price: "$4",
    image: "/placeholder.svg",
    category: "Coffee"
  },
];

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
      />
    </div>
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl">{item.name}</CardTitle>
        <span className="text-lg font-semibold text-restaurant-gold">
          {item.price}
        </span>
      </div>
      <span className="text-sm text-muted-foreground">{item.category}</span>
    </CardHeader>
    <CardContent>
      <CardDescription>{item.description}</CardDescription>
    </CardContent>
  </Card>
);

const Menu = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-restaurant-charcoal">
        Our Menu
      </h2>
      <Tabs defaultValue="food" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
        <TabsContent value="food" className="animate-fade-in-down">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {foodItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drinks" className="animate-fade-in-down">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {drinkItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Menu;