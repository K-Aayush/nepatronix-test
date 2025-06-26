"use client";

import React from "react";
import Head from "next/head";
import { motion, Variants } from "framer-motion";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import InnovationCard from "../../components/InnovationCard";
import ProjectCard from "../../components/ProjectCard";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const innovations = [
  {
    title: "AI-Driven Diagnostics",
    description:
      "Harnessing artificial intelligence to revolutionize early detection and diagnostic precision.",
    imgSrc: "/static/ai-diagnostics.png",
  },
  {
    title: "Next-Gen Wearables",
    description:
      "Developing advanced wearable devices for continuous health monitoring and data integration.",
    imgSrc: "/static/wearable-tech.png",
  },
  {
    title: "Robotic Surgical Systems",
    description:
      "Pioneering robotic technologies for minimally invasive, high-precision surgeries.",
    imgSrc: "/static/robotic-surgery.png",
  },
];

const projects = [
  {
    title: "Smart Bio-Implants",
    description:
      "Creating biocompatible implants with real-time health monitoring capabilities.",
    imgSrc: "/static/smart-implants.png",
  },
  {
    title: "AI Telemedicine Platform",
    description:
      "Building intelligent platforms for seamless remote patient care and consultations.",
    imgSrc: "/static/telemedicine-ai.png",
  },
];

const RDPage = () => {
  return (
    <main
      className="min-h-screen pt-[80px] bg-gray-900"
      style={{ paddingTop: "80px" }}
    >
      <Head>
        <title>Nepatronix R&D - Innovating Med-Tech Solutions</title>
        <meta
          name="description"
          content="Discover Nepatronix's groundbreaking research and development in medical technology."
        />
      </Head>

      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        aria-label="R&D Hero"
      >
        <Hero
          title="Innovating the Future of Med-Tech"
          subtitle="Nepatronix's R&D division is redefining healthcare through cutting-edge technology and innovation."
          ctaText="Explore Our Research"
        />
      </motion.section>

      <section
        className="px-6 py-16 bg-gray-800/50"
        aria-label="R&D Innovations"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Research Focus
          </motion.h2>
          <div className="space-y-8">
            {innovations.map((innovation, index) => (
              <InnovationCard
                key={index}
                title={innovation.title}
                description={innovation.description}
                imgSrc={innovation.imgSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-900" aria-label="R&D Projects">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ongoing R&D Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={slideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        aria-label="Collaborate with Us"
      >
        <ContactForm />
      </motion.section>

      <Footer />
    </main>
  );
};

export default RDPage;
