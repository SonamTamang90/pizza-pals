import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Downtown Store",
      address: "123 Pizza Street, Downtown, City",
      phone: "+1 234 567 8901",
      hours: "Mon-Sun: 11:00 AM - 10:00 PM",
    },
    {
      name: "Westside Location",
      address: "456 Pasta Avenue, Westside, City",
      phone: "+1 234 567 8902",
      hours: "Mon-Sun: 11:00 AM - 11:00 PM",
    },
    {
      name: "Eastside Branch",
      address: "789 Italian Road, Eastside, City",
      phone: "+1 234 567 8903",
      hours: "Mon-Sun: 11:00 AM - 9:00 PM",
    },
  ];

  const labelWithAsterisk = (text) => (
    <label className="block text-base font-medium mb-2">
      {text} <span className="text-red-500">*</span>
    </label>
  );

  const inputClasses =
    "h-14 px-6 text-lg border border-secondary-600/70 focus:border-secondary-700 rounded-[4px] focus-visible:ring-secondary-600 placeholder:font-thin placeholder:text-lg placeholder:text-zinc-500";

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/banner.png")',
          backgroundPosition: "center 65%",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            {/* Breadcrumb */}
            <Breadcrumb className="text-white mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contact" className="text-white">
                    Contact
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-7xl uppercase font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">We'd Love to Hear From You</p>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="max-w-7xl mx-auto  lg:px-20 px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary-600" />
              <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
              <ul className="space-y-2 text-slate-600">
                {locations.map((loc, index) => (
                  <li key={index} className="text-sm">
                    {loc.address}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Working Hours Card */}
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary-600" />
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday: 11:00 AM - 11:00 PM</li>
                <li>Sunday: 12:00 PM - 9:00 PM</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Details Card */}
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-secondary-600" />
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 234 567 8900</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@pizzapals.com</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="pb-11 pt-8">
        <div className="max-w-7xl mx-auto  lg:px-20 px-4">
          {/* <h2 className="text-5xl font-bold uppercase text-center mb-12">
            Find Us On The Map
          </h2> */}
          {/* Placeholder for Google Maps - Replace with actual Google Maps integration */}
          <div className="h-[400px] bg-slate-200 rounded-lg">
            <img
              src="/api/placeholder/1200/400"
              alt="Map placeholder"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold uppercase text-center mb-8">
            Send Us a Message
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Fields marked with <span className="text-red-500">*</span> are
            required
          </p>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                {labelWithAsterisk("Name")}
                <Input
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2">
                {labelWithAsterisk("Email")}
                <Input
                  required
                  type="email"
                  placeholder="Your email"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="space-y-2">
              {labelWithAsterisk("Subject")}
              <Input
                required
                placeholder="Message subject"
                className={inputClasses}
              />
            </div>
            <div className="space-y-2">
              {labelWithAsterisk("Message")}
              <Textarea
                required
                placeholder="Write your message here..."
                className={`min-h-[200px] p-6 text-lg border border-secondary-600/70 focus:border-secondary-700 rounded-[4px] focus-visible:ring-secondary-600 resize-none placeholder:text-lg placeholder:font-thin placeholder:text-zinc-500`}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-14 text-lg bg-secondary-600 hover:bg-secondary-700 transition-colors duration-200"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
