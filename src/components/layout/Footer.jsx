import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Pizza Pal's</h3>
            <p className="text-sm leading-relaxed">
              Crafting authentic Italian pizzas with passion and tradition since
              1995. Every slice tells our story of quality and dedication.
            </p>
            {/* Social Links moved under about section */}
            <div className="pt-4">
              <div className="flex space-x-5">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Hours - Moved to second position */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hours</h3>
            <ul className="">
              <li className="space-y-2">
                <div className=" space-y-1">
                  <p className="text-sm">Monday - Thursday: 11am - 10pm</p>
                  <p className="text-sm">Friday - Saturday: 11am - 11pm</p>
                  <p className="text-sm">Sunday: 12pm - 9pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@pizzapalslice.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Pizza Street,
                  <br />
                  Foodville, FV 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Our Menu
              </a>
              <a
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Order Online
              </a>
              <a
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Reservations
              </a>
              <a
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Pizza Pals. All rights reserved.
            </p>
            <nav className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
