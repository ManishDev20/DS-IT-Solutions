import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center sm:text-left text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-center sm:text-left text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">
                  Paschim Duramari D, West Bengal 735233 (India).
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">Malta europe</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 flex gap-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  +91 7365841234
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="email:dhiman@dsnetworksolution.in"
                  alt=""
                  className="text-gray-600 flex gap-2 hover:text-blue-600"
                >
                  <Mail className="w-6 h-6 text-blue-600" />{" "}
                  dhiman@dsnetworksolution.in
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <img
              src="./img/contact.jpg"
              alt=""
              className="w-[500px] shadow-xl rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
