"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it comes into view
    threshold: 0.6,     // section is considered "visible" when 60% is in view
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      {children}
    </motion.section>
  );
}
