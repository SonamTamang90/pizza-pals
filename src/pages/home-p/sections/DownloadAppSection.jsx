const DownloadAppSection = () => {
  return (
    <section className="relative bg-[#FFC107] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-20">
          {/* Left Content */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DOWNLOAD MOBILE APP AND
              <div className="text-[#8B4513] mt-2">SAVE UP TO 20%</div>
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
              primis libero tempus, blandit varius
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="transition-transform hover:scale-105 duration-300"
              >
                <img
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  className="h-14 object-contain"
                />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-105 duration-300"
              >
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  className="h-14 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:h-[500px] flex items-end justify-center">
            {/* Phone Image */}
            <div className="relative z-20 mb-[-20px] max-w-[300px] lg:max-w-none">
              <img
                src="/images/app-mockup.png"
                alt="Mobile App"
                className="w-full h-auto"
              />
            </div>
            {/* Food Images */}
            <div className="absolute bottom-0 right-0 z-10">
              <img
                src="/images/burger.png"
                alt="Burger"
                className="w-[250px] lg:w-[300px] h-auto"
              />
            </div>
            <div className="absolute bottom-10 left-0 z-10">
              <img
                src="/images/fries.png"
                alt="Fries"
                className="w-[100px] lg:w-[150px] h-auto"
              />
            </div>
            <div className="absolute bottom-20 left-20 z-10">
              <img
                src="/images/cola.png"
                alt="Cola"
                className="w-[100px] lg:w-[120px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
