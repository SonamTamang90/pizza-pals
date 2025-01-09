import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { useState } from "react";

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

const MenuCard = ({ pizza }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { code, image, title, description, price, rating } = pizza;
  return (
    <Card
      key={code}
      className="relative overflow-hidden cursor-pointer rounded-[8px]"
      onMouseEnter={() => setHoveredCard(code)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover"
          animate={hoveredCard === code ? "hover" : "initial"}
          variants={imageVariants}
        />
        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">
          CODE: {code}
        </div>
      </div>

      <CardHeader className="pt-6">
        <div className="flex flex-col gap-3 justify-between items-start">
          <div className="flex items-center">{renderStars(rating)}</div>
          <CardTitle className="font-bebas text-xl text-dark-700 tracking-wider font-bold ">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-base text-dark-300 mt-2 min-h-[48px]">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between items-center relative overflow-hidden">
        <span className="font-bebas text-3xl font-bold text-secondary">
          {price}
        </span>
        <AnimatePresence>
          {hoveredCard === code && (
            <MotionButton
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="font-bebas text-base tracking-wider bg-primary hover:bg-primary-600/90 text-white absolute right-6"
            >
              <span className="mt-1">Add to Cart</span>
            </MotionButton>
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
