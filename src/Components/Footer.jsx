import React from "react";
import { Facebook } from "feather-icons-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-x-0 gap-y-5 md:gap-5">
          <div className="col-span-1 space-y-5">
            <div className="flex justify-center sm:block">
              <img src="./img/logo.png" alt="" className="w-52" />
            </div>
            <p className="text-gray-400 text-center sm:text-left">
              Empowering businesses with innovative IT solutions.
            </p>
          </div>
          <div className="col-span-3 w-full flex flex-col sm:flex-row justify-between pr-0 sm:pr-20 md:pr-0 sm:justify-evenly gap-10 ">
            <div className="flex flex-col items-center sm:block">
              <h4 className="text-lg font-semibold text-left mb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 ">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-lg font-semibold mb-4 text-center sm:text-left">
                Connect With Us
              </h4>
              <div className="flex justify-self-center sm:justify-self-start space-x-4">
                <a
                  href="https://www.facebook.com/DSnetworksolutions"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://wa.me/+35699906873/?text=Help%20me%20with"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="mailto:Dhiman@dsnetworksokution.in"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="">
              <h4 className="text-lg font-semibold mb-4 text-center sm:text-left">
                Support
              </h4>
              <div className="flex justify-self-center sm:justify-self-start space-x-4">
                <a
                  href="mailto:helpdiskinfo@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DSNetworkSolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
