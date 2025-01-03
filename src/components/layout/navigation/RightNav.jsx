import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const RightNav = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button className="hidden md:block">Book a Table</Button>
      <Button variant="outline" size="icon" className="">
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default RightNav;
