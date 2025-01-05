import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Expand } from "lucide-react";
import { useState } from "react";

const products = [
  {
    code: "P001",
    title: "MARGHERITA SUPREME",
    description:
      "Fresh mozzarella, basil, cherry tomatoes, extra virgin olive oil",
    price: "$14.99",
    image: "/images/pizzas/pizza-1.png",
    rating: 5,
  },
  {
    code: "P002",
    title: "PEPPERONI FEAST",
    description: "Double pepperoni, mozzarella, Italian herbs, signature sauce",
    price: "$16.99",
    image: "/images/pizzas/pizza-2.png",
    rating: 4.5,
  },
  {
    code: "P003",
    title: "QUATTRO FORMAGGI",
    description: "Mozzarella, gorgonzola, parmesan, provolone, fresh herbs",
    price: "$18.75",
    image: "/images/pizzas/pizza-3.png",
    rating: 4.5,
  },
  {
    code: "P004",
    title: "BBQ CHICKEN",
    description: "Grilled chicken, red onions, BBQ sauce, cilantro, mozzarella",
    price: "$17.35",
    image: "/images/pizzas/pizza-4.png",
    rating: 4,
  },
  {
    code: "P005",
    title: "MEDITERRANEAN",
    description:
      "Feta, olives, sun-dried tomatoes, spinach, red onions, oregano",
    price: "$16.50",
    image: "/images/pizzas/pizza-5.png",
    rating: 4.5,
  },
  {
    code: "P006",
    title: "MEAT LOVERS",
    description: "Pepperoni, sausage, bacon, ground beef, ham, mozzarella",
    price: "$19.99",
    image: "/images/pizzas/pizza-6.png",
    rating: 5,
  },
  {
    code: "P007",
    title: "BUFFALO RANCH",
    description:
      "Buffalo chicken, ranch sauce, red onions, blue cheese crumbles",
    price: "$17.99",
    image: "/images/pizzas/pizza-7.png",
    rating: 4,
  },
  {
    code: "P008",
    title: "HAWAIIAN DELUXE",
    description: "Ham, pineapple, bacon, roasted red peppers, mozzarella",
    price: "$16.75",
    image: "/images/pizzas/pizza-1.png",
    rating: 4.5,
  },
];

const MenuSection = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < Math.floor(rating) ? "text-[#D69F17]" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const MotionButton = motion(Button);

  const imageVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const buttonVariants = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      y: 100,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F21905] mb-4">
            EXPLORE OUR MENU
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.code}
              className="relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(product.code)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover"
                  animate={hoveredCard === product.code ? "hover" : "initial"}
                  variants={imageVariants}
                />
                {/* Code Overlay */}
                <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">
                  CODE: {product.code}
                </div>
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/90 hover:bg-[#F21905] text-[#F21905] hover:text-white p-2 rounded-full transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="bg-white/90 hover:bg-[#F21905] text-[#F21905] hover:text-white p-2 rounded-full transition-colors">
                    <Expand size={20} />
                  </button>
                </div>
              </div>

              <CardHeader className="pt-6">
                <div className="flex flex-col justify-between items-start">
                  <CardTitle className="text-lg font-bold">
                    {product.title}
                  </CardTitle>
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                </div>
                <CardDescription className="text-gray-600 mt-2 min-h-[48px]">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between items-center relative overflow-hidden">
                <span className="text-2xl font-bold text-[#F21905]">
                  {product.price}
                </span>
                <AnimatePresence>
                  {hoveredCard === product.code && (
                    <MotionButton
                      variants={buttonVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="bg-[#D69F17] hover:bg-[#D69F17]/90 text-white absolute right-6"
                    >
                      Add to Cart
                    </MotionButton>
                  )}
                </AnimatePresence>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
