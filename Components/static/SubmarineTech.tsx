"use client";

import { motion, useInView, Variants, Transition } from "framer-motion";
import { useRef } from "react";

const SubmarineTech = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
        ease: "easeInOut",
      } as Transition,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      } as Transition,
    },
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
  const heroTitle = "Submarine Technology Innovations";
  const aboutTitle = "Why Our Submarine Solutions?";
  const servicesTitle = "Our Submarine Capabilities";
  const contactTitle = "Dive In with Us";

  // Constants for map data
  const aboutItems = [
    {
      title: "Deep-Sea Precision",
      desc: "Cutting-edge tech for navigating extreme underwater conditions.",
    },
    {
      title: "Tailored Systems",
      desc: "Customized submarine solutions for diverse industries.",
    },
    {
      title: "Sustainable Exploration",
      desc: "Eco-friendly technology for marine conservation.",
    },
  ];

  const serviceItems = [
    {
      title: "Ocean Exploration",
      desc: "Advanced submarines for uncovering the mysteries of the deep sea.",
      icon: "🌊",
    },
    {
      title: "Marine Data Collection",
      desc: "High-precision tools for oceanographic research and analysis.",
      icon: "🔍",
    },
    {
      title: "Underwater Defense",
      desc: "Robust submarine systems for security and defense applications.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="py-16 text-white bg-gradient-to-bl from-blue-900 via-sky-700 to-cyan-800">
      {/* Hero Section */}
      <section
        id="submarine-tech-hero"
        className="min-h-[70vh] flex items-center justify-center text-center px-4"
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
          <motion.p className="mb-8 text-lg md:text-xl" variants={itemVariants}>
            Leading the way in underwater innovation with advanced submarine
            solutions for exploration, research, and defense.
          </motion.p>
          <motion.a
            href="/services"
            className="inline-block px-6 py-3 font-semibold text-white transition-transform transform rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Our Capabilities
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="submarine-tech-about" ref={aboutRef} className="py-16">
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
            className="max-w-3xl mx-auto mb-6 text-base md:text-lg"
            variants={itemVariants}
          >
            At Nepatronix, our submarine technology division pioneers solutions
            for the toughest underwater challenges, from deep-sea exploration to
            environmental monitoring.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3"
            variants={containerVariants}
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-cyan-800 bg-opacity-60"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
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
        id="submarine-tech-services"
        ref={servicesRef}
        className="py-16 bg-cyan-700 bg-opacity-60"
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
                className="p-6 rounded-lg bg-cyan-800 bg-opacity-60"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
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
      <section id="submarine-tech-contact" ref={contactRef} className="py-16">
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
            className="mb-6 text-base md:text-lg"
            variants={itemVariants}
          >
            Ready to explore the depths with our submarine technology? Get in
            touch today!
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={itemVariants}
          >
            <p>
              Email:{" "}
              <a href="mailto:contact@nepatronix.org" className="text-cyan-300">
                contact@nepatronix.org
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+977 9803661701" className="text-cyan-300">
                +977 9803661701
              </a>
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-6 py-3 font-semibold text-white transition-transform transform rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SubmarineTech;
