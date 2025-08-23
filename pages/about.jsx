import { Heart, Brain, Zap, Shield, Eye, Stethoscope } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Page Title */}
        <SectionWrapper className="bg-gradient-to-br from-purple-100 to-green-50 rounded-3xl p-10 shadow-lg">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
              About PRISM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pancreatic Mixed Reality Innovation for Surgical Management
            </p>
          </div>
        </SectionWrapper>

        {/* Introduction Section */}
        <SectionWrapper className="bg-gradient-to-br from-purple-50 to-green-100 rounded-3xl p-10 shadow-lg">
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
              <div className="bg-gradient-to-br from-purple-200 to-green-100 w-72 h-72 rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-purple-700 font-bold text-2xl">
                  PRISM
                </span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Mission Section */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 to-purple-50 rounded-3xl p-10 shadow-lg text-center space-y-6">
          <h2 className="text-4xl font-semibold text-green-600">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            PRISM aims to revolutionize pancreatic surgery by providing
            low-cost, high-impact technology that enhances surgical precision,
            reduces risks, and supports medical professionals in improving
            patient outcomes.
          </p>
        </SectionWrapper>

        {/* Values Section */}
        <SectionWrapper className="bg-gradient-to-br from-purple-50 to-green-50 rounded-3xl p-10 shadow-lg">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                Combining AI and mixed reality for next-generation surgical
                support.
              </p>
            </div>
            <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-700">
                Designed to be low-cost and easy to integrate into clinical
                workflows.
              </p>
            </div>
            <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                Impact
              </h3>
              <p className="text-gray-700">
                Helping reduce complication rates and improve patient outcomes.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Features Section */}
        <SectionWrapper className="bg-gradient-to-br from-purple-100 to-green-50 rounded-3xl p-10 shadow-lg text-center space-y-12">
          <h2 className="text-4xl font-bold text-purple-700">Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { icon: Heart, color: "text-pink-500", title: "Real-Time Visualization", desc: "See organs and vessels live during surgery with MR overlays." },
              { icon: Brain, color: "text-purple-500", title: "AI Segmentation", desc: "Automatic organ and tumor detection from CT scans." },
              { icon: Zap, color: "text-yellow-500", title: "Fast Processing", desc: "Optimized pipeline ensures smooth experience for clinicians." },
              { icon: Shield, color: "text-green-500", title: "Risk Reduction", desc: "Helps minimize complications and safeguard patients." },
              { icon: Eye, color: "text-blue-500", title: "Enhanced Precision", desc: "Surgeons gain sharper visualization for complex cases." },
              { icon: Stethoscope, color: "text-red-500", title: "Clinician-Friendly", desc: "Easy-to-use design integrates smoothly into workflows." },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div
                key={title}
                className="p-6 bg-white/70 backdrop-blur-sm border rounded-2xl shadow hover:shadow-lg transition"
              >
                <Icon className={`mx-auto ${color} mb-4`} size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
}
