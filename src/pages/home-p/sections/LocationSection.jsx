import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Manhattan Branch",
    address: "123 Pizza Street, Manhattan, NY 10001",
    phone: "+1 234 567 890",
    hours: "9:00 AM - 10:00 PM",
    image: "/images/locations/location-1.jpg",
  },
  {
    id: 2,
    name: "Brooklyn Branch",
    address: "456 Pizza Avenue, Brooklyn, NY 11201",
    phone: "+1 234 567 891",
    hours: "9:00 AM - 11:00 PM",
    image: "/images/locations/location-2.jpg",
  },
  {
    id: 3,
    name: "Queens Branch",
    address: "789 Pizza Road, Queens, NY 11101",
    phone: "+1 234 567 892",
    hours: "10:00 AM - 10:00 PM",
    image: "/images/locations/location-3.jpg",
  },
];

const LocationSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F21905] mb-4">
          OUR LOCATIONS
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto px-6 md:px-0">
          Visit us today at any of our branches and experience the best pizza in
          town. Find the nearest location to you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-[#F21905] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-[#F21905] flex-shrink-0" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3 items-center">
                    <Clock className="w-5 h-5 text-[#F21905] flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Open Daily</p>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
