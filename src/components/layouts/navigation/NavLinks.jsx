import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PATHS } from "@/routes/paths";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: PATHS.HOME, label: "Home" },
  { path: PATHS.MENU, label: "Our Menu" },
  { path: PATHS.ABOUT, label: "About" },
  { path: PATHS.SHOP, label: "Shop" },
  { path: PATHS.CONTACT, label: "Contact" },
];

const NavLinks = ({ onScrolled }) => {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="gap-6">
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink
              asChild
              className={`text-xl ${
                onScrolled ? "text-dark-900" : "text-white"
              }`}
            >
              <NavLink to={item.path}>{item.label}</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
