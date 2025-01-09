import { Calendar, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const RighNav = ({ onScrolled }) => {
  const cartItemCount = 2;
  return (
    <div className="flex items-center gap-6">
      <Link
        to="/book-table"
        className="hidden lg:flex items-center gap-2 text-sm bg-dark-900 text-white py-2 px-5 rounded-full"
      >
        <Calendar size={16} />
        <span className="mt-1">Book A Table</span>
      </Link>
      <div className="relative">
        <Link
          to="/cart"
          className={`${onScrolled ? "text-dark-900" : "text-white"}`}
        >
          <ShoppingCart size={24} />
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

export default RighNav;
