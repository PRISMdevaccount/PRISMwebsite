import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-6 text-center"
    >
      <h1 className="text-3xl font-bold mb-4">About PRISM</h1>
      <p className="text-lg text-gray-700">
        PRISM (Pancreatic Mixed Reality Innovation for Surgical Management) is a
        cutting-edge tool designed to assist surgeons and radiologists in
        planning and navigating pancreatic surgeries. By combining advanced 3D
        visualization, real-time guidance, and patient-specific models, PRISM
        aims to improve surgical outcomes and support healthcare providers in
        their fight against pancreatic cancer.
      </p>
    </motion.div>
  );
}
