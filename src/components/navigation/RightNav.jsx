import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const RightNav = ({ onScrolled }) => {
  // In a real app, this would come from your cart state management
  const cartItemCount = 2;

  return (
    <div className="flex items-center gap-4">
      <Button className="hidden md:block bg-primary hover:bg-orange-600 text-white font-semibold px-6">
        Book A Table
      </Button>

      <div className="relative">
        <Link to="/cart">
          <ShoppingCart
            size={24}
            className={`${
              onScrolled ? "text-zinc-950" : "text-white"
            } hover:text-primary-500`}
          />
        </Link>

        {cartItemCount > 0 && (
          <div
            className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold
            w-5 h-5 flex items-center justify-center rounded-full"
          >
            {cartItemCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightNav;
