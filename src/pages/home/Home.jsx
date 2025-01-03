import MenuTab from "@/components/menu/MenuTab";
import { Clock, Medal, Utensils } from "lucide-react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />

      {/* Menu Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="font-grotesk tracking-wide uppercase font-bold text-5xl mb-4">
              Made by Napoletans
            </h2>
            <p className="text-lg text-zinc-600">
              Crispy, chewy, and perfectly charred – our artisanal pizzas are
              made with love using century-old recipes.
            </p>
          </div>
        </div>

        <MenuTab />
      </section>
      {/* Menu Section */}

      {/* About Section */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="font-grotesk tracking-wide uppercase font-bold text-5xl mb-4">
                Nothing brings people together like a good pizza
              </h2>
              <p className="text-lg text-gray-700">
                Welcome to Artisan Slice, where passion for authentic Italian
                pizza meets modern creativity. Since 1995, we've been crafting
                the perfect pizzas using time-honored techniques and the finest
                ingredients sourced both locally and from Italy.
              </p>
              <p className="text-lg text-gray-700">
                Our story began with a simple dream: to bring the genuine taste
                of Naples to our community. Three generations of pizza artisans
                have perfected our signature dough recipe, which ferments for 72
                hours to develop its distinctive flavor and texture.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <Utensils className="w-8 h-8 mx-auto text-red-500 mb-2" />
                  <p className="font-semibold">Artisanal Quality</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto text-red-500 mb-2" />
                  <p className="font-semibold">30 Years Experience</p>
                </div>
                <div className="text-center">
                  <Medal className="w-8 h-8 mx-auto text-red-500 mb-2" />
                  <p className="font-semibold">Award Winning</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/about.png"
                alt="Pizza maker crafting dough"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/*About Section */}

      {/* Our locations Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="font-grotesk tracking-wide uppercase font-bold text-5xl mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-zinc-600">
              Experience our restaurants in prime locations across the city.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/location-1.jpg"
                alt="Location 1"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="font-grotesk tracking-wide uppercase font-bold text-2xl mb-2">
                Downtown
              </h3>
              <p className="text-lg text-zinc-600">
                123 Main St. <br />
                New York, NY 10001
              </p>
            </div>
            <div className="text-center">
              <img
                src="/location-2.jpg"
                alt="Location 2"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="font-grotesk tracking-wide uppercase font-bold text-2xl mb-2">
                Midtown
              </h3>
              <p className="text-lg text-zinc-600">
                456 Main St. <br />
                New York, NY 10002
              </p>
            </div>
            <div className="text-center">
              <img
                src="/location-3.jpg"
                alt="Location 3"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="font-grotesk tracking-wide uppercase font-bold text-2xl mb-2">
                Uptown
              </h3>
              <p className="text-lg text-zinc-600">
                789 Main St. <br />
                New York, NY 10003
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our locations Section */}
    </div>
  );
};

export default Home;
