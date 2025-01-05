import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Logo from "../navigation/Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About Us</h3>
            <Logo />
            <p className="text-gray-400 mb-6">
              We serve the best pizza in town with fresh ingredients and
              traditional recipes that have been passed down through
              generations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#F21905] hover:bg-[#F21905]/90 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#F21905] hover:bg-[#F21905]/90 p-2 rounded-full transition-colors"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#F21905] hover:bg-[#F21905]/90 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#F21905] hover:bg-[#F21905]/90 p-2 rounded-full transition-colors"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-[#F21905]" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-400">09:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-[#F21905]" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-gray-400">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About",
                "Menu",
                "Shop",
                "Blog",
                "Contact",
                "Delivery",
                "FAQs",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#F21905] flex-shrink-0" />
                <p className="text-gray-400">
                  123 Pizza Street, New York, NY 10001
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F21905] flex-shrink-0" />
                <p className="text-gray-400">+1 234 567 890</p>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F21905] flex-shrink-0" />
                <p className="text-gray-400">info@pizzashop.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Pizza Shop. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
