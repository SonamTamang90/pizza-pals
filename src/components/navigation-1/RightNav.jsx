import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShoppingCart } from "lucide-react";
import { useState } from "react";

const RightNav = ({ onScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);
  // In a real app, this would come from your cart state management
  const cartItemCount = 2;

  return (
    <div className="flex items-center gap-4">
      <Link
        to="/book-table"
        className="font-bebas text-sm tracking-wider bg-dark-700 flex items-center gap-1.5 text-white py-2 px-5 rounded-full"
      >
        <Calendar className="w-4 h-4" />
        <span className="mt-0.5">Book a table</span>
      </Link>

      <div className="relative">
        <Link to="/cart">
          <ShoppingCart
            size={24}
            className={`${
              onScrolled ? "text-dark-700" : "text-white"
            } hover:text-primary-600`}
          />
        </Link>

        {cartItemCount > 0 && (
          <div
            className="font-bebas absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold
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
