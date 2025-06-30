"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Insight {
  type: "EBOOK" | "BLOG";
  title: string;
  desc: string;
  img: string;
  link: string;
  date?: string;
}

const features: Feature[] = [
  {
    icon: "👍",
    title: "Personalized Recommendations",
    desc: "AI-driven systems match patients to optimal care, reducing wait times and improving outcomes.",
  },
  {
    icon: "🕵️‍♂️",
    title: "Fraud Detection",
    desc: "Real-time anomaly detection ensures secure patient data and transactions.",
  },
  {
    icon: "💲",
    title: "Price Optimization",
    desc: "AI insights optimize pricing to stay competitive and maximize revenue.",
  },
  {
    icon: "⚙️",
    title: "Supply Chain Optimization",
    desc: "Streamline medical supply chains for timely delivery of essentials.",
  },
  {
    icon: "🛒",
    title: "Customer Analysis",
    desc: "Data-driven analytics enhance patient engagement and care.",
  },
  {
    icon: "📈",
    title: "Demand Forecasting",
    desc: "Predict patient needs to optimize scheduling and resources.",
  },
  {
    icon: "⚙️",
    title: "Market Basket Analysis",
    desc: "Optimize service offerings by identifying patient care affinities.",
  },
];

const Telemedicine = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="flex items-center w-full min-h-screen bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        aria-label="Telemedicine Hero Section"
      >
        <div className="flex flex-col items-center max-w-[1280px] px-6 py-16 mx-auto md:flex-row">
          {/* Left Content */}
          <motion.div className="flex-1 text-white" variants={heroVariants}>
            <div className="mb-3 text-xl font-semibold tracking-wider text-yellow-300">
              Med-Tech
            </div>
            <h1 className="mb-6 text-6xl font-extrabold leading-tight md:text-8xl">
              Revolutionize Telemedicine with AI
            </h1>
            <p className="max-w-xl mb-8 text-xl leading-relaxed md:text-3xl">
              Transform patient care with AI-driven telemedicine solutions that
              optimize operations and enhance outcomes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold text-black transition-all duration-300 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule a call"
              >
                Contact Us →
              </motion.a>
            </div>
          </motion.div>
          {/* Right Content (Image/Illustration) */}
          <motion.div
            className="flex justify-center flex-1 mt-12 md:mt-0"
            variants={heroVariants}
          >
            <Image
              src="/static/telmedicine-vector.png"
              alt="Telemedicine Illustration"
              width={400}
              height={400}
              className="object-contain w-[36rem] h-[36rem]"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Telemedicine Features Section */}
      <section
        className="px-4 py-20 bg-gray-50 md:px-12"
        aria-label="Telemedicine Features"
      >
        <div className="mx-auto max-w-[1280px]">
          <motion.h2
            className="mb-16 text-4xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our AI Solutions
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="article"
                aria-labelledby={`feature-title-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <span className="text-5xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                </div>
                <h2
                  id={`feature-title-${index}`}
                  className="mb-3 text-3xl font-bold text-gray-800"
                >
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            {features.slice(4).map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="article"
                aria-labelledby={`feature-title-${index + 4}`}
              >
                <div className="flex justify-center mb-4">
                  <span className="text-5xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                </div>
                <h2
                  id={`feature-title-${index + 4}`}
                  className="mb-3 text-2xl font-bold text-gray-800"
                >
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Telemedicine;
