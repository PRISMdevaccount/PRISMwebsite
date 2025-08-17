
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 via-white to-green-50 py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-purple-900"
        >
          About PRISM
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          PRISM (Pancreatic Mixed Reality Innovation for Surgical Management) is a cutting-edge
          platform designed to empower surgeons and radiologists during pancreatic surgery.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-purple-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Pancreatic surgery is one of the most complex and high-risk procedures in modern
            medicine. Our mission with PRISM is to improve outcomes by providing real-time,
            intuitive, and interactive visualization tools that guide surgeons through critical
            steps with confidence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/PRISM.png"
            alt="PRISM Device"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-purple-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            PRISM was born from the collaboration between engineers, surgeons, and researchers who
            shared a vision: to revolutionize pancreatic surgery using mixed reality. What started
            as an innovative concept quickly evolved into a practical, impactful solution that
            bridges cutting-edge technology with life-saving procedures.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-purple-900">Innovation</h3>
          <p className="text-gray-600 mt-4">
            We bring the latest in AR/VR and medical imaging to the operating room.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-purple-900">Collaboration</h3>
          <p className="text-gray-600 mt-4">
            Built hand-in-hand with surgeons and researchers to meet real-world needs.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-purple-900">Impact</h3>
          <p className="text-gray-600 mt-4">
            Designed to improve surgical outcomes and ultimately save lives.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
