// pages/contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-green-50 flex items-center justify-center p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-10 border border-purple-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Whether you’re an investor, potential
          partner, or simply curious about PRISM, drop us a message.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-purple-50 p-6 rounded-xl shadow-md border border-purple-100"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-purple-800 mb-2">
              Investment & Partnerships
            </h2>
            <p className="text-gray-700 text-sm">
              Looking to partner with PRISM or support our mission in
              revolutionizing pancreatic surgery? Reach out via email below.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-50 p-6 rounded-xl shadow-md border border-green-100"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              General Inquiries
            </h2>
            <p className="text-gray-700 text-sm">
              Have a question about PRISM or our team? We’re happy to answer
              anything you’d like to know.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:diyaramakrishnan009@gmail.com"
            className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
          >
            Email Us: diyaramakrishnan009@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
}
