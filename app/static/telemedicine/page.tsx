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

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

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

// const insights: Insight[] = [
//   {
//     type: "EBOOK",
//     title: "AI in Retail Roadmap 2024",
//     desc: "Unlock the Future of Retail: Essential Executive Insights",
//     img: "/images/insight-retail-roadmap.png",
//     link: "/ebooks/retail-roadmap-2024.pdf",
//   },
//   {
//     type: "BLOG",
//     title: "The Transformative Power of AI in Retail",
//     desc: "A Strategic Imperative for Leaders",
//     date: "January 18, 2024",
//     img: "/images/insight-value-ai-retail.png",
//     link: "/blog/ai-in-retail",
//   },
//   {
//     type: "BLOG",
//     title: "AI in Supply Chain Management",
//     desc: "How AI is Transforming Supply Chain Efficiency",
//     date: "January 11, 2024",
//     img: "/images/insight-supply-chain.png",
//     link: "/blog/ai-supply-chain",
//   },
// ];

const page = () => {
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
        <div className="flex flex-col items-center max-w-[88rem] px-6 py-16 mx-auto md:flex-row">
          {/* Left Content */}
          <motion.div className="flex-1 text-white" variants={heroVariants}>
            <div className="mb-3 text-lg font-semibold tracking-wider text-yellow-300">
              Med-Tech
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Revolutionize Telemedicine with AI
            </h1>
            <p className="max-w-lg mb-8 text-xl leading-relaxed md:text-2xl">
              Transform patient care with AI-driven telemedicine solutions that
              optimize operations and enhance outcomes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="https://calendly.com/schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold text-black transition-all duration-300 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule a call"
              >
                SCHEDULE A CALL →
              </motion.a>
              <motion.a
                href="/ebooks/telemedicine-ai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold text-black transition-all duration-300 bg-white border border-yellow-400 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download eBook"
              >
                DOWNLOAD EBOOK
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
        <div className="mx-auto max-w-[88rem]">
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
                  className="mb-3 text-2xl font-bold text-gray-800"
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

      {/* Related Insights Section */}
      {/* <section
        className="px-4 py-20 bg-white md:px-12"
        aria-label="Related Insights"
      >
        <motion.h2
          className="mb-16 text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Related Insights
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="article"
              aria-labelledby={`insight-title-${index}`}
            >
              <Image
                src={insight.img}
                alt={insight.title}
                width={600}
                height={224}
                style={{ objectFit: "cover", width: "100%", height: "224px" }}
                priority
              />
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-2 text-xs font-semibold text-blue-600">
                  {insight.type}
                </div>
                <h3
                  id={`insight-title-${index}`}
                  className="mb-2 text-xl font-bold text-gray-800"
                >
                  {insight.title}
                </h3>
                {insight.date && (
                  <div className="mb-2 text-xs text-gray-500">
                    {insight.date}
                  </div>
                )}
                <p className="flex-1 mb-4 text-gray-600">{insight.desc}</p>
                <Link
                  href={insight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-auto font-semibold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label={
                    insight.type === "EBOOK"
                      ? `Download ${insight.title}`
                      : `Read more about ${insight.title}`
                  }
                >
                  {insight.type === "EBOOK" ? "DOWNLOAD EBOOK" : "READ MORE"}{" "}
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default page;
