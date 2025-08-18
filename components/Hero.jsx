import Prism3D from './Prism3D';

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-20 py-20">
      
      {/* Left side: Title & Description */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          PRISM
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Pancreatic Mixed Reality Innovation for Surgical Management.
          Helps surgeons during pre-operative and intra-operative phases by
          providing AI-assisted organ and tumor detection in real time.
        </p>
      </div>

      {/* Right side: 3D Model */}
      <div className="md:w-1/2 w-full hover:scale-105 transition-transform duration-500">
        <Prism3D />
      </div>

    </section>
  );
}
