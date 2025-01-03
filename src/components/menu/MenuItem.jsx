import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const MenuItem = ({ name, desc, img, price, isHot }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border border-zinc-200 rounded-[8px] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <img src={img} alt={name} className="object-contain w-full h-full" />
      </motion.div>

      <div className="flex flex-col p-4">
        <h3 className="text-zinc-800 font-grotesk font-bold text-lg uppercase mb-2">
          {name}
        </h3>
        <p className="text-sm font-thin text-zinc-600">{desc}</p>
        <div className="flex justify-between items-center mt-4 h-10">
          <span className="text-lg font-bold">{price}</span>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button className="bg-secondary-600 hover:bg-secondary-600/90 text-zinc-900 flex items-center justify-center gap-2">
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
