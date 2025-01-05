import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "DISCOVER THE\nPERFECT PIZZA",
    subtitle: "Crafted with passion & tradition",
    price: "FROM $12.99",
    image: "/images/slides/slide-1.png",
    highlights: ["Wood Fired", "Fresh Dough", "Premium Toppings"],
  },
  {
    title: "AUTHENTIC\nITALIAN TASTE",
    subtitle: "Made with imported ingredients",
    price: "FROM $14.99",
    image: "/images/slides/slide-2.png",
    highlights: ["Italian Recipe", "Fresh Mozzarella", "Basil & Herbs"],
  },
  {
    title: "CRISPY\nPERFECTION",
    subtitle: "Hot & fresh from our ovens",
    price: "FROM $13.99",
    image: "/images/slides/slide-1.png",
    highlights: ["Thin Crust", "Rich Sauce", "Melted Cheese"],
  },
];

const HeroCarousel = () => {
  const options = {
    loop: true,
    duration: 20,
  };

  const autoplayOptions = {
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className="relative w-full h-[500px] md:h-[700px] overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-full touch-pan-y">
        {slides.map((slide, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75 scale-105 transform transition-transform duration-[20000ms] hover:scale-110"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
                <div className="text-white text-center">
                  {/* Animated Highlights */}
                  {/* <div className="flex justify-center gap-6 mb-8 mt-24">
                    {slide.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="bg-[#D69F17]/20 backdrop-blur-sm px-6 py-3 rounded-full"
                      >
                        <span className="text-white font-semibold">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div> */}

                  <h1 className="text-[46px] md:text-8xl font-bold mb-8 tracking-wide whitespace-pre-line leading-tight">
                    {slide.title}
                  </h1>

                  <div className="hidden md:blockflex items-baseline justify-center gap-4 mb-10">
                    <p className="text-2xl text-gray-200">{slide.subtitle}</p>
                    <span className="text-3xl font-bold text-[#D69F17]">
                      {slide.price}
                    </span>
                  </div>

                  <Button
                    className="bg-[#D69F17] rounded-full hover:bg-[#D69F17]/90 text-white px-10 py-6 md:py-7 text-2xl
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
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="opacity-0 hover:opacity-100 md:opacity-100 absolute left-8 right-8 top-1/2 flex justify-between -translate-y-1/2">
        <button
          onClick={scrollPrev}
          className="bg-black/30 hover:bg-[#D69F17] text-white w-11 h-11 md:w-16 md:h-16 flex items-center justify-center
            rounded-full backdrop-blur-sm transition-all duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 group-hover:-translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="bg-black/30 hover:bg-[#D69F17] text-white w-11 h-11 md:w-16 md:h-16 flex items-center justify-center
            rounded-full backdrop-blur-sm transition-all duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 group-hover:translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#D69F17] w-10"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
