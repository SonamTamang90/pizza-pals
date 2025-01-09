import HeroSection from "./sections/Hero";
import MenuSection from "./sections/MenuSection";
// import TestimonialSection from "./sections/TestimonialSection";
// import LocationSection from "./sections/LocationSection";
import GallerySection from "./sections/GallerySection";
import PopularMenu from "./sections/Categories";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <MenuSection />
      <PopularMenu />
      {/* <TestimonialSection />
      <LocationSection /> */}
      {/* <GallerySection /> */}
    </div>
  );
};

export default Home;
