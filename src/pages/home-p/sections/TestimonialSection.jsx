import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "The best pizza I've ever had! The crust is perfectly crispy, and the toppings are always fresh. Their Margherita pizza is simply outstanding.",
  },
  {
    name: "Michael Thompson",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "Been ordering from here for over a year now. The consistency in quality and service is remarkable. The BBQ Chicken pizza is my go-to!",
  },
  {
    name: "Emily Chen",
    role: "Food Critic",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "Authentic Italian flavors that transport you straight to Naples. The attention to detail in every pizza is commendable.",
  },
  {
    name: "David Wilson",
    role: "Local Resident",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "Quick delivery, amazing taste, and great value for money. Their customer service is top-notch too!",
  },
];

const TestimonialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const [activeIndex, setActiveIndex] = React.useState(0);

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
    <section
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/banner.png)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            CUSTOMER REVIEWS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto px-6 md:px-0">
            See what our valued customers have to say about their experience
            with our pizzas
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl" ref={emblaRef}>
          <div className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="relative bg-white rounded-2xl p-10 shadow-lg mx-4">
                    {/* Main Content Container */}
                    <div className="flex-col md:flex gap-8">
                      {/* Left Side - Profile */}
                      <div className="flex-shrink-0 mb-8 md:mb-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-2xl object-cover shadow-md"
                        />
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-grow relative">
                        {/* Quote Icon - Behind text */}
                        <div className="absolute right-0 -top-2">
                          <Quote
                            className="w-24 h-24 text-gray-100"
                            strokeWidth={1}
                          />
                        </div>

                        <div className="relative">
                          {/* Rating */}
                          <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-[#D69F17] text-[#D69F17]"
                              />
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light italic">
                            {testimonial.review}
                          </p>

                          {/* Author Info */}
                          <div className="border-t pt-4 border-gray-100">
                            <h4 className="font-bold text-xl text-gray-900 mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-[#F21905] font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${
                    index === activeIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
