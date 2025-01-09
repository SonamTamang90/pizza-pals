import { pizzas } from "@/data/menuData";
import MenuCard from "./MenuCard";

const MenuGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pizzas.map((pizza) => (
        <MenuCard key={pizza.code} pizza={pizza} />
      ))}
    </div>
  );
};

export default MenuGrid;
