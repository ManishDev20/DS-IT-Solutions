import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed  w-full transition-all duration-300 py-2 bg-[#091230]  z-[9999]">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-10 shrink-0 my-2">
            <a href="/" className="text-2xl font-bold text-blue-600">
              <img src="./img/logo2.webp" alt="" className="w-16" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-white hover:text-[#42c0ff] transition-colors duration-75 font-medium`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex gap-5 bg-blue-200 py-2 px-5 rounded-full bg-opacity-[20%]">
              <a
                href="https://www.facebook.com/DSnetworksolutions?mibextid=ZbWKwL"
                className="text-white hover:text-blue-500 "
              >
                <FaFacebook className="sm:text-2xl" />
              </a>
              <a
                href="https://wa.me/+35699906873/?text=Help%20me%20with"
                className="text-white hover:text-green-500"
              >
                <FaWhatsapp className="sm:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/dsnetworksolutions?_l=en_US"
                className="text-white hover:text-blue-500"
              >
                <FaLinkedin className="sm:text-2xl" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white h-screen text-center text-xl py-5 sm:py-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-10 w-max mx-auto py-5">
            <a
              href="https://www.facebook.com/DSnetworksolutions?mibextid=ZbWKwL"
              className="text-blue-500 "
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsnetworksolutions?_l=en_US"
              className="text-blue-500"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://wa.me/+35699906873/?text=Help%20me%20with"
              className="text-green-500"
            >
              <FaWhatsappSquare className="text-3xl" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
