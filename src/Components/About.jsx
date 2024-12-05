import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="h-max lg:min-h-screen flex items-center justify-center flex-col py-10 sm:py-20 w-full bg-gray-100 overflow-hidden relative"
    >
      <div className="custom-shape-divider-bottom-1733166493 z-20 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 200"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill fill-white"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center h-full "
        >
          <div>
            <img
              src="./img/team.jpg"
              alt="Team working together"
              className="rounded-lg shadow-xl h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left ">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 text-center sm:text-left ">
              With over a decade of experience in IT services, we've been at the
              forefront of technological innovation, helping businesses
              transform and thrive in the digital age. Our mission is to provide
              cutting-edge IT solutions that drive growth and efficiency for our
              clients.
            </p>
            <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower businesses through innovative technology solutions
                  and exceptional service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Innovation, integrity, excellence, and customer-first approach
                  guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
