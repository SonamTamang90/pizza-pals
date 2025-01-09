import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { complementaryMenu } from "@/data/menuData";
import { Beer, CakeSlice, Croissant, Salad } from "lucide-react";

const MenuItem = ({ image, title, description, price }) => (
  <div className="flex items-center gap-6 mb-8 overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-28 h-28 rounded-full object-cover"
    />
    <div className="flex-1">
      <div className="flex items-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center">
          <div className="border-b border-dotted border-gray-300 flex-1 mx-4 w-32"></div>
          <span className="text-xl font-semibold text-gray-800">${price}</span>
        </div>
      </div>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  </div>
);

const ComplementarySection = () => {
  return (
    <section className="bg-dark-100 lg:py-24">
      <div className="max-w-7xl mx-auto lg:px-11">
        <div className="text-center mb-11">
          <div className="flex items-center justify-center gap-2 text-secondary uppercase font-semibold mb-5">
            <span className="inline-block h-0.5 w-3 bg-secondary"></span>
            <span>Perfect Companions</span>
            <span className="inline-block h-0.5 w-3 bg-secondary"></span>
          </div>
          <h2>Complete your meal</h2>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="lg:max-w-3xl mx-auto grid w-full grid-cols-4 mb-24">
            <TabsTrigger
              value="starters"
              className="group flex flex-col items-center gap-2"
            >
              <Salad
                className="h-11 w-11 group-hover:scale-110 transition-transform duration-200  group-data-[state=active]:text-primary-600"
                strokeWidth={0.5}
              />
              <span className={`text-lg`}>Starters</span>
            </TabsTrigger>
            <TabsTrigger
              value="nonvage"
              className="group flex flex-col items-center gap-2"
            >
              <Croissant
                className="h-11 w-11 group-data-[state=active]:text-primary-600"
                strokeWidth={0.5}
              />
              <span className="text-lg">Pastry</span>
            </TabsTrigger>

            <TabsTrigger
              value="dessert"
              className="group flex flex-col items-center gap-2"
            >
              <CakeSlice
                className="h-11 w-11 group-data-[state=active]:text-primary-600"
                strokeWidth={0.5}
              />
              <span className="text-lg">Dessert</span>
            </TabsTrigger>
            <TabsTrigger
              value="drinks"
              className="flex flex-col items-center gap-2"
            >
              <Beer className="h-11 w-11" strokeWidth={0.5} />
              <span className="text-lg">Drinks</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="starters"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          >
            {complementaryMenu.starters.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </TabsContent>

          {/* Add similar TabsContent for other categories */}
          <TabsContent value="nonvage">
            {/* Similar menu items for nonvage */}
          </TabsContent>
          <TabsContent value="vegetarian">
            {/* Similar menu items for vegetarian */}
          </TabsContent>
          <TabsContent value="dessert">
            {/* Similar menu items for dessert */}
          </TabsContent>
          <TabsContent value="drinks">
            {/* Similar menu items for drinks */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComplementarySection;
