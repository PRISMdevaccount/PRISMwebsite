import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen bg-gradient-to-r from-purple-50 via-green-50 to-white py-20 px-6 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-purple-800 mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            PRISM
          </span>
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-purple-700">PRISM</span> (Pancreatic Mixed Reality Innovation for Surgical Management) is an advanced tool designed for surgeons and radiologists. It assists in both pre-operative planning and intra-operative navigation, combining AI-driven segmentation and mixed reality visualization to support precise, safe pancreatic surgeries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With PRISM, clinicians can upload patient CT scans to visualize crucial organs and tumors, and during surgery, the MR headset provides real-time detection of organs and blood vessels, potentially reducing complication rates by{" "}
              <span className="font-semibold text-green-600">10–30%</span>.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 bg-gradient-to-tr from-purple-400 to-green-300 rounded-3xl shadow-2xl flex items-center justify-center text-white font-bold text-2xl transform rotate-6 hover:rotate-0 transition">
              PRISM Image
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            PRISM aims to revolutionize pancreatic surgery by providing low-cost, high-impact technology that enhances surgical precision, reduces risks, and supports medical professionals in improving patient outcomes.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-4">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-purple-300 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Innovation
              </h3>
              <div className="w-12 h-1 bg-purple-300 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">
                Combining AI and mixed reality for next-generation surgical support.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-green-300 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Accessibility
              </h3>
              <div className="w-12 h-1 bg-green-300 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">
                Designed to be low-cost and easy to integrate into clinical workflows.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-purple-300 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Impact
              </h3>
              <div className="w-12 h-1 bg-purple-300 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">
                Helping reduce complication rates and improve patient outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section with "cute connecting lines" */}
        <div className="relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
            Features of PRISM
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-12 rounded-full"></div>

          <div className="relative flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Line (horizontal or vertical depending on screen size) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-green-400 -z-10"></div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-green-400 -z-10"></div>

            {/* Boxes */}
            <div className="p-6 bg-white rounded-2xl shadow-lg w-64">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                AI Segmentation
              </h3>
              <p className="text-gray-600 text-sm">
                Automatic detection of organs and tumors from CT scans.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg w-64">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                Mixed Reality
              </h3>
              <p className="text-gray-600 text-sm">
                Overlay 3D anatomical models in real-time during surgery.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg w-64">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Real-time Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                AI-assisted navigation to reduce surgical complications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
