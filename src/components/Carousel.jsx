import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

const Carousel = ({
  slides = [], // Array of slide content
  showNavButtons = true, // Show/hide next/prev buttons
  showIndicators = true, // Show/hide slide indicators
  autoplay = true, // Enable/disable autoplay
  autoplayInterval = 5000, // Autoplay interval in milliseconds
  className = "", // Additional CSS classes
  renderSlide, // Custom slide renderer function
  indicatorClassName = "", // Custom className for indicators
  activeIndicatorClassName = "", // Custom className for active indicator
}) => {
  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
    },
    [
      autoplay &&
        Autoplay({
          delay: autoplayInterval,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
    ]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Scroll to specific slide
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Update active index and scroll states
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Set up slide selection tracking and autoplay
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Default slide renderer
  const defaultRenderSlide = (slide, index) => (
    <div key={index} className="flex-[0_0_100%] min-w-0 relative">
      {typeof slide === "string" ? (
        <img
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full">{slide}</div>
      )}
    </div>
  );

  // Navigation buttons component
  const NavigationButtons = () =>
    showNavButtons && (
      <div className="absolute left-4 right-4 top-1/2 flex justify-between -translate-y-1/2 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 pointer-events-auto transition-opacity duration-300 ${
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="h-11 w-11 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 pointer-events-auto transition-opacity duration-300 ${
            !canScrollNext && "opacity-50 cursor-not-allowed"
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight className="h-11 w-11 text-white" />
        </Button>
      </div>
    );

  // Indicators component
  const Indicators = () =>
    showIndicators && (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? `w-6 bg-primary ${activeIndicatorClassName}`
                : `bg-white/50 hover:bg-white/75 ${indicatorClassName}`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );

  return (
    <div className={`relative overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) =>
          renderSlide
            ? renderSlide(slide, index)
            : defaultRenderSlide(slide, index)
        )}
      </div>

      <NavigationButtons />
      <Indicators />
    </div>
  );
};

export default Carousel;
