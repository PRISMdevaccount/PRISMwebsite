// components/Hero.jsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-white overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full"
      ></motion.div>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        {/* Left side: Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 mb-12 md:mb-0 md:pr-12 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 leading-tight">
            PRISM
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
            Surgical AI Assistant for pancreatic surgery. Enhance precision and
            streamline complex procedures with intelligent guidance.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <motion.a
              href="/support-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition"
            >
              Support Us
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-purple-700 border border-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right side: Decorative Image/Graphic */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          {/* Rotating prism */}
          <motion.div
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-80 h-80 bg-gradient-to-tr from-purple-400 to-green-300 rounded-3xl shadow-2xl"
          ></motion.div>

          {/* Animated pancreas outline overlay */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            className="absolute w-60 h-32 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          >
            {/* Simplified pancreas shape */}
            <path d="M 20 60 Q 60 20, 120 40 T 180 55 Q 150 85, 60 80 Q 40 75, 20 60 Z" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
