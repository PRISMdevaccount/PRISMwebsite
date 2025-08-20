export default function Story() {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 via-green-50 to-white py-20 px-6 overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-8">
          Why We Built <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">PRISM</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Pancreatic cancer is one of the most difficult cancers to treat surgically. 
          With <span className="font-semibold text-purple-700">PRISM</span>, we aim to empower surgeons and radiologists with 
          real-time assistance during both the pre-operative and intra-operative phases 
          of surgery. From automatic CT scan segmentation to AI-assisted organ detection 
          in mixed reality, PRISM is designed to reduce surgical complications by up to 
          <span className="font-semibold text-green-600"> 30%</span> and bring modern, accessible innovation to the operating room — 
          all at a low cost.
        </p>
      </div>
    </section>
  );
}
