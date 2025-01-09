import { Link } from "react-router-dom";
import Logo from "../navigation-1/Logo";
import { Facebook, FacebookIcon, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative lg:pt-20">
      <div className="absolute w-full h-full top-0 left-0">
        <img src="/images/about-banner.png" />
      </div>
      <div className="relative max-w-7xl mx-auto px-8 lg:px-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center mb-3">
              <img
                src="/images/logo/black-logo.png"
                alt="Brand dark logo"
                width={150}
              />
            </Link>
            <p>
              We serve the best pizza in town with fresh ingredients and
              traditional recipes that have been passed down through
              generations.
            </p>
          </div>

          <div>
            <h3 className="mb-5">Opening Hours</h3>
            <div className="mb-3">
              <p>Monday - Friday</p>
              <p className="text-dark-500">09:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p>Saturday - Sunday</p>
              <p className="text-dark-500">10:00 AM - 11:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5">Let's Talk</h3>
            <div className="mb-3">
              <p>Phone</p>
              <p className="text-dark-500">1-800-888-000</p>
            </div>
            <div>
              <p className="text-dark-300">Fax</p>
              <p className="text-dark-500">1-800-888-111</p>
            </div>
          </div>
          <div>
            <h3 className="mb-5">Our locations</h3>
            <div className="mb-3">
              <p className="text-dark-300">Manhattan Branch</p>
              <p className="text-dark-500">
                123 Pizza Street, Manhattan, NY 10001
              </p>
            </div>
            <div>
              <p className="text-dark-300">Brooklyn Branch</p>
              <p className="text-dark-500">
                456 Pizza Avenue, Brooklyn, NY 11201
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-zinc-200 mt-8 py-8">
        <div className="max-w-7xl mx-auto lg:px-11">
          <div className="flex items-center justify-between">
            <p className="text-dark-300 text-center md:text-left">
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="text-dark-300 flex gap-5">
              <Link to="#">Terms & Conditions</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
            <div className="text-dark-300 flex gap-5">
              <Link to="#">
                <Instagram />
              </Link>
              <Link to="#">
                <Facebook />
              </Link>
              <Link to="#">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
