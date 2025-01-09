import React from "react";
import Carousel from "@/components/Carousel"; // Import our reusable carousel
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroCarousel = () => {
  const slides = [
    {
      title: "DISCOVER THE PERFECT PIZZA",
      subtitle: "Crafted with passion & tradition",
      price: "FROM $12.99",
      image: "/images/slides/slide-1.png",
      highlights: ["Wood Fired", "Fresh Dough", "Premium Toppings"],
    },
    {
      title: "AUTHENTIC ITALIAN TASTE",
      subtitle: "Made with imported ingredients",
      price: "FROM $14.99",
      image: "/images/slides/slide-2.png",
      highlights: ["Italian Recipe", "Fresh Mozzarella", "Basil & Herbs"],
    },
    {
      title: "CRISPY PERFECTION",
      subtitle: "Hot & fresh from our ovens",
      price: "FROM $13.99",
      image: "/images/slides/slide-1.png",
      highlights: ["Thin Crust", "Rich Sauce", "Melted Cheese"],
    },
  ];

  // Custom slide renderer for hero section
  const renderHeroSlide = (slide, index) => (
    <div
      className="flex-[0_0_100%] min-w-0 relative h-[500px] md:h-[700px] overflow-hidden"
      key={index}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover brightness-75 scale-105 transform transition-transform duration-[20000ms] hover:scale-110"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center lg:pt-20">
          <div className="text-center">
            <h1 className="text-white mb-8 whitespace-pre-line">
              {slide.title}
            </h1>

            <div className="hidden md:flex items-baseline justify-center gap-4 mb-10">
              <p className="text-2xl text-gray-200">{slide.subtitle}</p>
              <span className="text-3xl font-bold text-primary">
                {slide.price}
              </span>
            </div>

            <Button
              className="font-bebas tracking-wider bg-primary rounded-[4px] text-white px-14 py-6 md:py-7 text-xl font-semibold uppercase
                group relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Order Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div
                className="absolute inset-0 bg-black/20 transform translate-y-full 
                group-hover:translate-y-0 transition-transform duration-300"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Custom indicator styles
  const indicatorClassName = "bg-white/50 hover:bg-white/75";
  const activeIndicatorClassName = "bg-[#D69F17] w-10";

  return (
    <Carousel
      slides={slides}
      renderSlide={renderHeroSlide}
      showNavButtons={true}
      showIndicators={true}
      autoplay={true}
      autoplayInterval={6000}
      className="w-full"
      indicatorClassName={indicatorClassName}
      activeIndicatorClassName={activeIndicatorClassName}
      options={{
        loop: true,
        duration: 20,
      }}
    />
  );
};

export default HeroCarousel;
