import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-[75vh] bg-hero-bg bg-cover bg-center">
    <div className="max-w-6xl mx-auto h-full flex items-center justify-center">
      <div className="text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-grotesk tracking-wide uppercase font-bold text-5xl lg:text-7xl text-white mb-4"
        >
          Naples' Finest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto text-lg text-white"
        >
          Discover the taste of Naples with our handcrafted pizzas made fresh
          daily.
        </motion.p>
      </div>
    </div>
  </section>
);

export default HeroSection;
