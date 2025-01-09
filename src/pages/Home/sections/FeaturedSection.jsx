import MenuGrid from "@/features/Menu/MenuGrid";

const FeaturedSection = () => {
  return (
    <section className="lg:pb-20">
      <div
        className="text-center mb-11 lg:pt-24"
        style={{
          backgroundImage: 'url("/images/about-banner.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center gap-2 text-secondary uppercase font-semibold mb-5">
          <span className="inline-block h-0.5 w-3 bg-secondary"></span>
          <span>Authentic Pizza</span>
          <span className="inline-block h-0.5 w-3 bg-secondary"></span>
        </div>
        <h2>Explore Our Menu</h2>
      </div>
      <div className="max-w-7xl mx-auto lg:px-11">
        <MenuGrid />
      </div>
    </section>
  );
};

export default FeaturedSection;
