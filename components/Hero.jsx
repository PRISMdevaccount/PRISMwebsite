// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full opacity-30 animate-pulse"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        {/* Left side: Text */}
        <div className="flex-1 mb-12 md:mb-0 md:pr-12 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 leading-tight">
            PRISM
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
            Surgical AI Assistant for pancreatic surgery. Enhance precision and streamline complex procedures with intelligent guidance.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-purple-700 border border-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side: Decorative Image/Graphic */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-80 bg-gradient-to-tr from-purple-400 to-green-300 rounded-3xl shadow-2xl transform rotate-6 animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
}
