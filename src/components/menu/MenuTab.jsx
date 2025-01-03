import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import MenuItem from "./MenuItem";

const menuData = {
  pizza: [
    {
      id: 1,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-1.jpg",
      price: "$10",
      isHot: true,
    },
    {
      id: 2,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-2.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 3,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-3.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 4,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-4.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 5,
      name: "Pizza Margherita",
      desc: "Pepperoni, sausage, bacon, ham, and beef",
      img: "/pizza-5.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 6,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-6.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 7,
      name: "Ultimate Meat Pizza",
      desc: "Pepperoni, sausage, bacon, ham, and beef",
      img: "/pizza-1.jpg",
      price: "$10",
      isHot: false,
    },
    {
      id: 8,
      name: "Pizza Margherita",
      desc: "Tomato sauce, fresh mozzarella, fresh basil",
      img: "/pizza-3.jpg",
      price: "$10",
      isHot: false,
    },
  ],
  appetizers: [],
  desserts: [],
  bar: [],
};

const MenuTab = () => {
  return (
    <Tabs defaultValue="pizza" className="max-w-5xl mx-auto">
      <TabsList className="flex justify-center space-x-4 mb-12">
        <TabsTrigger value="appetizers" className="border border-zinc-300">
          Appetizers
        </TabsTrigger>
        <TabsTrigger value="pizza">Pizza</TabsTrigger>
        <TabsTrigger value="desserts">Desserts</TabsTrigger>
        <TabsTrigger value="bar">Bar</TabsTrigger>
      </TabsList>

      {Object.entries(menuData).map(([category, items]) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                desc={item.desc}
                img={item.img}
                price={item.price}
                isHot={item.isHot}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MenuTab;
