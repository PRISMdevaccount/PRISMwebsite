import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Support() {
  return (
    <>
      <Head>
        <title>Support Us | PRISM</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex flex-col items-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-10 text-center"
        >
          Support PRISM
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 max-w-6xl w-full">
          {/* Why Invest */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100"
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              Why Invest in PRISM?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Cutting-edge Technology:</strong> Our platform brings
                Mixed Reality to pancreatic surgery — a first of its kind.
              </li>
              <li>
                <strong>High Impact:</strong> Pancreatic cancer has one of the
                lowest survival rates. PRISM helps surgeons operate with greater
                accuracy, improving patient outcomes.
              </li>
              <li>
                <strong>Scalable Innovation:</strong> The technology can be
                adapted for other complex surgeries in the future.
              </li>
              <li>
                <strong>Growing Market:</strong> Surgical navigation systems are
                projected to grow rapidly in the next decade.
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Interested in investing? Reach out to us at:
            </p>
            <a
              href="mailto:diyaramakrishnan009@gmail.com"
              className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Why Partner */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-green-100"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Why Partner With Us?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Clinical Collaboration:</strong> Work with us on trials
                and studies that validate PRISM’s effectiveness.
              </li>
              <li>
                <strong>Academic & Research Impact:</strong> Joint publications
                and presentations in top surgical and medical conferences.
              </li>
              <li>
                <strong>Shared Mission:</strong> Together we can advance surgical
                precision and save lives.
              </li>
              <li>
                <strong>Networking:</strong> Join a growing network of surgeons,
                hospitals, and innovators.
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              If your institution or company wants to partner with PRISM, contact
              us at:
            </p>
            <a
              href="mailto:diyaramakrishnan009@gmail.com"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
