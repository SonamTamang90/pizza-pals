import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "CLASSIC ITALIAN PIZZAS",
    description: "Fresh basil pesto ricotta mozzarella topped with herbs",
    image: "/images/pizzas/pizza-1.png",
  },
  {
    title: "SPECIALTY CREATIONS",
    description: "Unique blend artisan cheese garlic drizzled olive oil",
    image: "/images/pizzas/pizza-2.png",
  },
  {
    title: "VEGETARIAN SELECTION",
    description: "Garden fresh veggies mixed peppers roasted mushrooms",
    image: "/images/pizzas/pizza-3.png",
  },
  {
    title: "GOURMET DELIGHTS",
    description: "Premium truffle sauce prosciutto topped parmesan",
    image: "/images/pizzas/pizza-4.png",
  },
  {
    title: "SPICY FAVORITES",
    description: "Spiced pepperoni jalapeno crushed chili pepper blend",
    image: "/images/pizzas/pizza-5.png",
  },
  {
    title: "SWEET DESSERT PIZZAS",
    description: "Nutella fresh berries mascarpone dusted powdered sugar",
    image: "/images/pizzas/pizza-6.png",
  },
];

const Navigation = ({ onScrolled }) => {
  const textColorClass = onScrolled ? "text-zinc-950" : "text-white";
  const hoverColorClass = "hover:text-primary-600";

  return (
    <NavigationMenu className="max-w-6xl mx-auto hidden lg:block">
      <NavigationMenuList className="gap-5">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`font-bebas text-[20px] tracking-wider font-medium p-2 transition-colors ${textColorClass} ${hoverColorClass}`}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`font-bebas tracking-wider text-[20px] text-white font-medium ${textColorClass} ${hoverColorClass}`}
          >
            OUR MENU
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {menuItems.map((item, index) => (
                  <NavigationMenuLink
                    key={index}
                    className="flex items-start gap-4 group hover:bg-slate-50 rounded-lg p-2 transition-colors"
                  >
                    {/* Left - Small square image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Right - Title and Description */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bebas tracking-wider font-medium text-slate-900 group-hover:text-secondary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Regular menu items using the dynamic color classes */}
        {[
          { to: "/about", text: "ABOUT" },
          { to: "/locations", text: "LOCATION" },
          { to: "/contact", text: "CONTACT" },
        ].map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink
              className={`font-bebas text-[20px] tracking-wider font-medium p-2 transition-colors ${textColorClass} ${hoverColorClass}`}
            >
              <Link to={item.to}>{item.text}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <NavigationMenuViewport className="relative mt-2 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg" />
    </NavigationMenu>
  );
};

export default Navigation;
