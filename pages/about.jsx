import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-purple-700 mb-12 text-center">
          About PRISM
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              PRISM (Pancreatic Mixed Reality Innovation for Surgical Management) 
              is an advanced tool designed for surgeons and radiologists. It assists 
              in both pre-operative planning and intra-operative navigation, combining 
              AI-driven segmentation and mixed reality visualization to support precise, 
              safe pancreatic surgeries.
            </p>
            <p className="text-lg text-gray-700">
              With PRISM, clinicians can upload patient CT scans to visualize crucial 
              organs and tumors, and during surgery, the MR headset provides real-time 
              detection of organs and blood vessels, potentially reducing complication 
              rates by 10–30%.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-purple-100 w-64 h-64 rounded-lg flex items-center justify-center text-purple-700 font-bold text-xl shadow-md">
              PRISM Image
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Mission Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            PRISM aims to revolutionize pancreatic surgery by providing low-cost, 
            high-impact technology that enhances surgical precision, reduces risks, 
            and supports medical professionals in improving patient outcomes.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Innovation</h3>
            <p className="text-gray-700">
              Combining AI and mixed reality for next-generation surgical support.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Accessibility</h3>
            <p className="text-gray-700">
              Designed to be low-cost and easy to integrate into clinical workflows.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Impact</h3>
            <p className="text-gray-700">
              Helping reduce complication rates and improve patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
