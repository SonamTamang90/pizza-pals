import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Expand, Star, StarHalf } from "lucide-react";
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
    rating: 5,
  },
  {
    code: "P003",
    title: "QUATTRO FORMAGGI",
    description: "Mozzarella, gorgonzola, parmesan, provolone, fresh herbs",
    price: "$18.75",
    image: "/images/pizzas/pizza-3.png",
    rating: 5,
  },
  {
    code: "P004",
    title: "BBQ CHICKEN",
    description: "Grilled chicken, red onions, BBQ sauce, cilantro, mozzarella",
    price: "$17.35",
    image: "/images/pizzas/pizza-4.png",
    rating: 5,
  },
  {
    code: "P005",
    title: "MEDITERRANEAN",
    description:
      "Feta, olives, sun-dried tomatoes, spinach, red onions, oregano",
    price: "$16.50",
    image: "/images/pizzas/pizza-5.png",
    rating: 5,
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
    rating: 5,
  },
  {
    code: "P008",
    title: "HAWAIIAN DELUXE",
    description: "Ham, pineapple, bacon, roasted red peppers, mozzarella",
    price: "$16.75",
    image: "/images/pizzas/pizza-1.png",
    rating: 5,
  },
];

const MenuSection = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const fullStar = index < Math.floor(rating);
      const halfStar =
        !fullStar && index < Math.ceil(rating) && rating % 1 >= 0.5;

      return (
        <span key={index} className="text-xl">
          {fullStar ? (
            <Star fill="#D39121" stroke="#D39121" size={20} />
          ) : halfStar ? (
            <StarHalf fill="#D39121" stroke="#D39121" size={20} />
          ) : (
            <Star className="text-gray-300" />
          )}
        </span>
      );
    });
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
    <section>
      {/* section header */}
      <div
        className="text-center py-20"
        style={{
          backgroundImage: 'url("/images/about-banner.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center gap-2 text-secondary uppercase font-semibold mb-5">
          <span className="inline-block h-0.5 w-3 bg-secondary"></span>
          <span>Authentic Pizza</span>
          <span className="inline-block h-0.5 w-3 bg-secondary"></span>
        </div>
        <h2 className="font-bebas lg:text-6xl text-dark-700 tracking-wider">
          Explore Our Menu
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-11 lg:pb-20">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.code}
              className="relative overflow-hidden cursor-pointer rounded-[8px]"
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
                {/* <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/90 hover:bg-[#F21905] text-[#F21905] hover:text-white p-2 rounded-full transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="bg-white/90 hover:bg-[#F21905] text-[#F21905] hover:text-white p-2 rounded-full transition-colors">
                    <Expand size={20} />
                  </button>
                </div> */}
              </div>

              <CardHeader className="pt-6">
                <div className="flex flex-col gap-3 justify-between items-start">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <CardTitle className="font-bebas text-xl text-dark-700 tracking-wider font-bold ">
                    {product.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-dark-300 mt-2 min-h-[48px]">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between items-center relative overflow-hidden">
                <span className="font-bebas text-3xl font-bold text-secondary">
                  {product.price}
                </span>
                <AnimatePresence>
                  {hoveredCard === product.code && (
                    <MotionButton
                      variants={buttonVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="font-bebas text-base tracking-wider bg-primary-600 hover:bg-primary-600/90 text-white absolute right-6"
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
