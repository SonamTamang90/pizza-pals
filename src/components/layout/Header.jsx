import { useEffect, useState } from "react";
import Logo from "../navigation/Logo";
import Navigation from "../navigation/Navigation";
import RightNav from "../navigation/RightNav";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-20 h-full">
        <div className="h-full flex items-center justify-between">
          <Logo onScrolled={isScrolled} />
          <Navigation onScrolled={isScrolled} />
          <RightNav onScrolled={isScrolled} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
