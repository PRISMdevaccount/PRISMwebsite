// SectionWrapper.jsx
import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 md:px-12 py-16" // ✅ padding only, no bg
    >
      {children}
    </motion.section>
  );
}
