import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = ({
  showAtHeight = 400, // Height at which button appears
  bottom = "2rem", // Bottom position
  right = "2rem", // Right position
  backgroundColor = "#F21905", // Primary color
  hoverColor = "#d41704", // Hover color
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAtHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [showAtHeight]);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed -right-2 z-50 p-3 rounded-[4px] shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
          style={{
            bottom,
            right,
            backgroundColor,
          }}
          whileHover={{
            backgroundColor: hoverColor,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
