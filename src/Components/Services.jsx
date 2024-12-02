import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Wifi,
  Shield,
  Building2,
  Flame,
  Monitor,
  Phone,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Wi-Fi Camera Security",
    description:
      "Advanced wireless surveillance solutions for comprehensive security coverage.",
  },
  {
    icon: Shield,
    title: "Alarm System",
    description:
      "State-of-the-art alarm systems to protect your property 24/7.",
  },
  {
    icon: Building2,
    title: "Business Security",
    description:
      "Complete security solutions tailored for businesses of all sizes.",
  },
  {
    icon: Flame,
    title: "Fire Detection",
    description: "Early warning systems to protect your assets and people.",
  },
  {
    icon: Monitor,
    title: "IT Support Services",
    description: "Comprehensive IT support for SMEs with rapid response times.",
  },
  {
    icon: Phone,
    title: "Telecoms & Mobile",
    description:
      "Modern telecommunication solutions for seamless connectivity.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Secure and scalable cloud solutions for your business needs.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT and security services to meet
            all your business needs
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
