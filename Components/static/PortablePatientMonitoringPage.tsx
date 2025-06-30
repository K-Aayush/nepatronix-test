"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { Button } from "../ui/button";

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const rotateVariants: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface Feature {
  title: string;
  description: string;
  imgSrc: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imgSrc: string;
}

const features: Feature[] = [
  {
    title: "Continuous Health Tracking",
    description:
      "Monitor heart rate, blood pressure, and more in real-time with compact wearables.",
    imgSrc: "/static/monitoring-device.png",
  },
  {
    title: "Seamless Data Sync",
    description:
      "Sync health data to cloud platforms for instant access by healthcare providers.",
    imgSrc: "/static/data-sync.jpg",
  },
  {
    title: "Patient-Friendly Design",
    description:
      "Lightweight, comfortable devices designed for all-day wear and ease of use.",
    imgSrc: "/static/wearable-design.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "These devices have made remote patient care effortless and reliable.",
    author: "Dr. Anna Thompson",
    role: "Endocrinologist",
    imgSrc: "/static/testimonial-4.jpg",
  },
  {
    quote:
      "Real-time data has improved our ability to respond to patient needs quickly.",
    author: "Dr. Rajesh Kumar",
    role: "Neurologist",
    imgSrc: "/static/testimonial-5.jpg",
  },
  {
    quote:
      "Patients appreciate the simplicity and comfort of these monitoring tools.",
    author: "Dr. Laura Evans",
    role: "Primary Care Physician",
    imgSrc: "/static/testimonial-6.jpg",
  },
];

const PortablePatientMonitoringPage = () => {
  return (
    <main className="min-h-screen bg-white" style={{ paddingTop: "50px" }}>
      <AnalyticsRequester id="portable-patient-monitoring" />

      {/* Hero Section */}
      <motion.section
        className="relative py-32 text-white bg-gradient-to-b from-orange-600 to-amber-500"
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        aria-label="Portable Patient Monitoring Hero"
      >
        <div className="flex flex-col items-center max-w-[1280px] gap-8 px-6 mx-auto md:flex-row">
          <motion.div className="md:w-1/2" variants={slideVariants}>
            <h1 className="mb-4 text-5xl font-bold md:text-7xl">
              Advanced Portable Monitoring
            </h1>
            <p className="max-w-md mb-6 text-xl md:text-2xl">
              Transform patient care with wearable devices that provide
              real-time health insights anytime, anywhere.
            </p>
            <Button
              asChild
              className="px-6 py-2 text-xl font-semibold text-orange-600 transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started"
              >
                Get Started
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="relative flex justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/static/portable-monitoring-hero.jpg"
              alt="Portable Monitoring Device"
              width={1200}
              height={1200}
              className="object-contain rounded-lg w-[400px] h-[400px]"
              loading="eager"
              quality={100}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Ads (Commented) */}
      {/* <Ads page="services/portable-patient-monitoring" index={1} /> */}

      {/* Features Section */}
      <section
        className="px-6 py-16 bg-gray-100"
        aria-label="Portable Monitoring Features"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                variants={rotateVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ rotate: 2, transition: { duration: 0.3 } }}
              >
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={1200}
                  height={1200}
                  loading="eager"
                  className="object-cover w-[250px] h-auto mb-4 rounded-lg "
                />
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ads (Commented) */}
      {/* <Ads page="services/portable-patient-monitoring" index={2} /> */}

      {/* Testimonials Grid */}
      <section className="px-6 py-16 bg-white" aria-label="Testimonials">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Professionals
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={slideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-between h-full p-6 overflow-hidden rounded-lg shadow-md bg-orange-50"
                variants={rotateVariants}
                role="article"
                aria-labelledby={`testimonial-title-${index}`}
              >
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className="object-cover mb-4 rounded-lg"
                  loading="eager"
                  quality={100}
                />
                <p className="flex-1 max-w-md mb-4 text-lg italic text-center text-gray-600">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <h3
                    id={`testimonial-title-${index}`}
                    className="text-xl font-semibold text-gray-800"
                  >
                    {testimonial.author}
                  </h3>
                  <p className="text-lg text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer with Newsletter */}
      <motion.section
        className="py-20 text-center text-white bg-orange-600"
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        aria-label="Call to Action"
      >
        <motion.h2 className="mb-6 text-3xl font-bold" variants={slideVariants}>
          Stay Ahead in Patient Care
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto mb-8 text-xl"
          variants={slideVariants}
        >
          Discover how portable monitoring can transform your practice.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          variants={slideVariants}
        >
          <Button
            asChild
            className="px-6 py-2 font-semibold text-orange-600 transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started"
            >
              Get Started
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default PortablePatientMonitoringPage;
