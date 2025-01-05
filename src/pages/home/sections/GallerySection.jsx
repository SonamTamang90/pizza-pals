import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/pizzas/pizza-1.png",
    alt: "BBQ Chicken Pizza",
    className: "col-span-2 row-span-2", // Large feature image
  },
  {
    id: 2,
    src: "/images/pizzas/pizza-2.png",
    alt: "Margherita Pizza",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/pizzas/pizza-3.png",
    alt: "Veggie Supreme",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/pizzas/pizza-4.png",
    alt: "Pepperoni Special",
    className: "col-span-2 row-span-1", // Wide image
  },
  {
    id: 5,
    src: "/images/pizzas/pizza-5.png",
    alt: "Mediterranean",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/images/pizzas/pizza-6.png",
    alt: "Seafood Pizza",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "/images/pizzas/pizza-7.png",
    alt: "Classic Supreme",
    className: "col-span-2 row-span-1", // Wide image at bottom
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F21905] mb-4">
            IMAGE GALLERY
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </p>
        </div>

        {/* Fixed Grid Gallery Layout */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[250px] grid-flow-dense">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.className}`}
              whileHover="hover"
              initial="initial"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                variants={imageVariants}
                className="w-full h-full object-cover"
              />
              <motion.div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-center px-4"
                >
                  <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                  <p className="text-sm text-white/80">Click to view</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                variants={modalVariants}
                className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white z-10 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
