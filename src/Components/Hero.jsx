import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Innovative IT Solutions for Your Business",
    description:
      "Empowering businesses with cutting-edge technology solutions and unparalleled support",
    buttonText: "Contact Us",
    background: "from-blue-900 via-blue-800 to-blue-900",
    image: "./img/2.png",
  },
  {
    title: "Secure Your Business with Smart Technology",
    description:
      "Comprehensive security solutions designed to protect your assets and data",
    buttonText: "Contact Us",
    background: "from-indigo-900 via-indigo-800 to-indigo-900",
    image: "./img/3.png",
  },
  {
    title: "24/7 Expert IT Support",
    description:
      "Round-the-clock technical support to keep your business running smoothly",
    buttonText: "Contact Us",
    background: "from-purple-900 via-purple-800 to-purple-900",
    image: "./img/contact.jpg",
  },
];

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-screen flex items-center">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.background} opacity-60`}
              />

              {/* Additional Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-black opacity-40" />

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg px-2 sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center gap-2 transition-colors duration-300"
                  >
                    <a href="tel:tel:+917365841234" className="flex gap-2">
                      <Phone />
                      {slide.buttonText}
                    </a>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
