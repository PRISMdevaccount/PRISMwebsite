export default function Story() {
  const features = [
    { title: "AI CT Segmentation", desc: "Automatic detection & mapping of critical organs.", icon: "🧠" },
    { title: "Mixed Reality Guidance", desc: "3D overlays during surgery for real-time support.", icon: "🩺" },
    { title: "Risk Reduction", desc: "Lower surgical complications by up to 30%.", icon: "✨" },
    { title: "Accessible Innovation", desc: "Designed for scalability and low-cost adoption.", icon: "🌍" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-purple-50 via-green-50 to-white py-24 px-6 overflow-hidden">
      {/* Decorative floating gradient prisms */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-purple-300 to-green-300 rotate-45 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-24 w-64 h-64 bg-gradient-to-r from-green-300 to-purple-300 -rotate-12 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
          Why We Built{" "}
          <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            PRISM
          </span>
        </h2>

        {/* Gradient divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-400 mx-auto rounded-full mb-10"></div>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
          Pancreatic cancer is one of the most difficult cancers to treat surgically.
          With <span className="font-semibold text-purple-700">PRISM</span>, we aim to empower surgeons 
          and radiologists with real-time assistance during both the pre-operative 
          and intra-operative phases of surgery. From automatic CT scan segmentation 
          to AI-assisted organ detection in mixed reality, PRISM is designed to reduce 
          surgical complications by up to 
          <span className="font-semibold text-green-600"> 30%</span> and bring modern, accessible 
          innovation to the operating room — all at a low cost.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/70 rounded-2xl shadow-md backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
