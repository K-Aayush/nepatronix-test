"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DroneTech = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Refs for scroll-triggered animations
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  // Constants for titles
  const heroTitle = "Drone Technology Solutions";
  const aboutTitle = "Why Choose Our Drone Technology?";
  const servicesTitle = "Our Drone Services";
  const contactTitle = "Get in Touch";

  // Constants for map data
  const aboutItems = [
    {
      title: "Advanced Technology",
      desc: "Leveraging AI and IoT for smarter drones.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored drone applications for your industry.",
    },
    {
      title: "Global Reach",
      desc: "Serving clients worldwide with scalable solutions.",
    },
  ];

  const serviceItems = [
    {
      title: "Aerial Imaging",
      desc: "Capture stunning visuals with high-resolution drone photography and videography.",
      icon: "📷",
    },
    {
      title: "Drone Delivery",
      desc: "Efficient and reliable delivery systems for logistics and e-commerce.",
      icon: "🚚",
    },
    {
      title: "Surveillance & Security",
      desc: "Real-time monitoring with advanced drone surveillance technology.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="py-16 text-white bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900">
      {/* Hero Section */}
      <section
        id="drone-tech-hero"
        className="min-h-[60vh] flex items-center justify-center text-center px-4"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="mb-6 text-4xl font-extrabold md:text-6xl"
            variants={itemVariants}
          >
            {heroTitle}
          </motion.h2>
          <motion.p
            className="mb-8 text-xl md:text-2xl"
            variants={itemVariants}
          >
            Transforming industries with innovative drone solutions for aerial
            imaging, delivery, and surveillance.
          </motion.p>
          <motion.a
            href="/services"
            className="inline-block px-6 py-3 font-semibold text-white transition-transform transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="drone-tech-about" ref={aboutRef} className="py-16">
        <motion.div
          className="px-4 mx-auto text-center max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="mb-8 text-3xl font-bold md:text-4xl"
            variants={itemVariants}
          >
            {aboutTitle}
          </motion.h3>
          <motion.p
            className="max-w-3xl mx-auto mb-6 text-base md:text-xl"
            variants={itemVariants}
          >
            Our drone technology division at Nepatronix delivers cutting-edge
            solutions tailored to your needs, from precision agriculture to
            advanced security systems.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3"
            variants={containerVariants}
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 bg-opacity-50 rounded-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 150, 255, 0.5)",
                }}
              >
                <h4 className="mb-4 text-lg font-semibold md:text-xl">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="drone-tech-services"
        ref={servicesRef}
        className="py-16 bg-gray-900 bg-opacity-50"
      >
        <motion.div
          className="px-4 mx-auto text-center max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="mb-8 text-3xl font-bold md:text-4xl"
            variants={itemVariants}
          >
            {servicesTitle}
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
          >
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-900 bg-opacity-50 rounded-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 150, 255, 0.5)",
                }}
              >
                <div className="mb-4 text-3xl md:text-4xl">{service.icon}</div>
                <h4 className="mb-4 text-lg font-semibold md:text-xl">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="drone-tech-contact" ref={contactRef} className="py-16">
        <motion.div
          className="max-w-3xl px-4 mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="mb-8 text-3xl font-bold md:text-4xl"
            variants={itemVariants}
          >
            {contactTitle}
          </motion.h3>
          <motion.p
            className="mb-6 text-base md:text-xl"
            variants={itemVariants}
          >
            Ready to soar with our drone technology solutions? Contact us to
            learn more!
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={itemVariants}
          >
            <p className="text-xl">
              Email:{" "}
              <a href="mailto:contact@nepatronix.org" className="text-blue-300">
                contact@nepatronix.org
              </a>
            </p>
            <p className="text-xl">
              Phone:{" "}
              <a href="tel:+977 9803661701" className="text-blue-300">
                +977 9803661701
              </a>
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-6 py-3 font-semibold text-white transition-transform transform bg-purple-500 rounded-lg hover:bg-purple-600 hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default DroneTech;
