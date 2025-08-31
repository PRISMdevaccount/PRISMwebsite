import { motion } from "framer-motion";
import { Heart, Brain, Zap, Shield, Eye, Stethoscope } from "lucide-react";
import Navbar from "../components/Navbar"; // ✅ import Navbar

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Navbar at top */}
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
              About PRISM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pancreatic Mixed Reality Innovation for Surgical Management
            </p>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-purple-100" />

          {/* Introduction Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-purple-700">PRISM</span> is
                an advanced tool designed for surgeons and radiologists. It
                assists in both pre-operative planning and intra-operative
                navigation, combining AI-driven segmentation and mixed reality
                visualization to support precise, safe pancreatic surgeries.
              </p>
              <p className="text-lg text-gray-700">
                With PRISM, clinicians can upload patient CT scans to visualize
                crucial organs and tumors. During surgery, the MR headset
                provides real-time detection of organs and blood vessels,
                potentially reducing complication rates by{" "}
                <span className="font-semibold text-green-600">10–30%</span>.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-purple-200 to-green-100 p-2 rounded-2xl shadow-md">
              <img
              src="/PRISM.png"
              alt="PRISM Logo"
              className="w-72 h-72 object-contain rounded-xl bg-white"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-green-100" />

          {/* Mission Section */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-semibold text-green-600">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              PRISM aims to revolutionize pancreatic surgery by providing
              low-cost, high-impact technology that enhances surgical precision,
              reduces risks, and supports medical professionals in improving
              patient outcomes.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-purple-100" />

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                Combining AI and mixed reality for next-generation surgical
                support.
              </p>
            </div>
            <div className="p-8 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-700">
                Designed to be low-cost and easy to integrate into clinical
                workflows.
              </p>
            </div>
            <div className="p-8 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Impact
              </h3>
              <p className="text-gray-700">
                Helping reduce complication rates and improve patient outcomes.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-green-100" />

          {/* Features Section */}
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-bold text-purple-700">Features</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Heart className="mx-auto text-pink-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Real-Time Visualization
                </h3>
                <p className="text-gray-600">
                  See organs and vessels live during surgery with MR overlays.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Brain className="mx-auto text-purple-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI Segmentation
                </h3>
                <p className="text-gray-600">
                  Automatic organ and tumor detection from CT scans.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Zap className="mx-auto text-yellow-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fast Processing
                </h3>
                <p className="text-gray-600">
                  Optimized pipeline ensures smooth experience for clinicians.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Shield className="mx-auto text-green-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Risk Reduction
                </h3>
                <p className="text-gray-600">
                  Helps minimize complications and safeguard patients.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Eye className="mx-auto text-blue-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Enhanced Precision
                </h3>
                <p className="text-gray-600">
                  Surgeons gain sharper visualization for complex cases.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
                <Stethoscope className="mx-auto text-red-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Clinician-Friendly
                </h3>
                <p className="text-gray-600">
                  Easy-to-use design integrates smoothly into workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
