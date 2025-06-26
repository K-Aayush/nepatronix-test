"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { useState } from "react";
import { Button } from "../ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const carouselVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imgSrc: string;
}

const features: Feature[] = [
  {
    icon: "🔍",
    title: "Precision Diagnostics",
    description:
      "AI algorithms analyze medical data to deliver highly accurate diagnostic insights.",
  },
  {
    icon: "⏱️",
    title: "Instant Results",
    description:
      "Get diagnostic suggestions in seconds, enabling swift treatment decisions.",
  },
  {
    icon: "🛡️",
    title: "Secure Processing",
    description:
      "Patient data is processed with end-to-end encryption, ensuring privacy.",
  },
  {
    icon: "📚",
    title: "Evidence-Based Insights",
    description:
      "Leverage a vast database of medical knowledge for informed diagnoses.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "AI-assisted diagnosis has transformed our clinic’s efficiency and accuracy.",
    author: "Dr. Sarah Lee",
    role: "Chief Physician",
    imgSrc: "/static/testimonial-1.jpg",
  },
  {
    quote:
      "The speed of AI diagnostics allows us to treat patients faster than ever.",
    author: "Dr. Mark Patel",
    role: "Cardiologist",
    imgSrc: "/static/testimonial-2.jpg",
  },
  {
    quote: "Secure and reliable, this tool is a game-changer for our practice.",
    author: "Dr. Emily Chen",
    role: "General Practitioner",
    imgSrc: "/static/testimonial-3.jpg",
  },
];

export const metadata = {
  title: "AI-Assisted Diagnosis",
  description: "Revolutionize healthcare with AI-powered diagnostic tools.",
  openGraph: {
    title: "AI-Assisted Diagnosis",
    description: "Revolutionize healthcare with AI-powered diagnostic tools.",
    images: "/images/ai-diagnosis-hero.png",
  },
};

const AIAssistedDiagnosisPage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <main
      className="min-h-screen pt-[80px] bg-gray-100"
      style={{ paddingTop: "80px" }}
    >
      <AnalyticsRequester id="ai-diagnosis" />

      {/* Hero Section */}
      <motion.section
        className="py-20 text-white bg-gradient-to-b from-blue-900 to-cyan-700"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        aria-label="AI-Assisted Diagnosis Hero"
      >
        <div className="px-6 mx-auto text-center max-w-7xl">
          <motion.h1
            className="mb-4 text-4xl font-bold md:text-5xl"
            variants={itemVariants}
          >
            AI-Powered Diagnosis
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto mb-8 text-lg md:text-2xl"
            variants={itemVariants}
          >
            Unlock faster, more accurate diagnoses with cutting-edge AI
            technology designed for healthcare professionals.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://calendly.com/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 font-semibold text-black transition-all duration-300 rounded-lg shadow-md bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Schedule a call"
            >
              Get Started
            </motion.a>
            <Button
              variant="outline"
              className="text-white transition-all duration-300 border-white hover:bg-white hover:text-black hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Ads (Commented as in your code) */}
      {/* <Ads page="services/ai-diagnosis" index={1} /> */}

      {/* Features Carousel */}
      <section className="px-6 py-16" aria-label="AI Diagnosis Features">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core Features
          </motion.h2>
          <motion.div
            className="p-8 shadow-lg bg-white/80 backdrop-blur-md rounded-2xl"
            variants={carouselVariants}
            key={currentFeature}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <span className="text-6xl" aria-hidden="true">
                {features[currentFeature].icon}
              </span>
              <div>
                <h3 className="mb-2 text-3xl font-semibold text-gray-800">
                  {features[currentFeature].title}
                </h3>
                <p className="text-xl text-gray-600">
                  {features[currentFeature].description}
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevFeature}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Previous feature"
            >
              ←
            </button>
            <button
              onClick={nextFeature}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Next feature"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Ads (Commented as in your code) */}
      {/* <Ads page="services/ai-diagnosis" index={2} /> */}

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white" aria-label="Testimonials">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col h-full p-6 transition-shadow duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-lg"
                variants={itemVariants}
                role="article"
                aria-labelledby={`testimonial-title-${index}`}
              >
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className="object-cover mx-auto mb-4 rounded-full"
                  loading="eager"
                />
                <p className="flex-1 mb-4 italic text-center text-gray-600">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <h3
                    id={`testimonial-title-${index}`}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <motion.section
        className="py-20 text-center text-white bg-cyan-800"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        aria-label="Call to Action"
      >
        <motion.h2 className="mb-6 text-3xl font-bold" variants={itemVariants}>
          Ready to Enhance Your Diagnostics?
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto mb-8 text-lg"
          variants={itemVariants}
        >
          Join leading healthcare providers in adopting AI for better patient
          outcomes.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <a
              href="https://calendly.com/schedule"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a demo"
            >
              Schedule a Demo
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default AIAssistedDiagnosisPage;
