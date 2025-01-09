import { useEffect, useState } from "react";
import Logo from "./navigation/Logo";
import NavLinks from "./navigation/NavLinks";
import RighNav from "./navigation/RightNav";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
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
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-11 md:py-4">
        <div className="h-16 flex items-center justify-between">
          <Logo onScrolled={isScrolled} />
          <NavLinks onScrolled={isScrolled} />
          <RighNav onScrolled={isScrolled} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
