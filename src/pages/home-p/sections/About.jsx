const About = () => {
  return (
    <section
      className="py-20 h-[70vh]"
      style={{
        backgroundImage: 'url("/images/about-banner.png")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto lg:px-11">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h3 className="text-secondary uppercase font-semibold mb-3 gap-2 flex items-center justify-self-center">
            <span className="inline-block h-0.5 w-3 bg-secondary"></span>
            Who we are
            <span className="inline-block h-0.5 w-3 bg-secondary"></span>
          </h3>
          <h2 className="font-bebas text-3xl md:text-6xl text-dark-700 mb-4">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-2">
          <div>djfldskjf</div>
          <div className="p-16">
            <img
              src="./images/owner.png"
              alt="Owner photo"
              className="-rotate-3 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
