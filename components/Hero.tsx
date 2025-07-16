import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gray-100">
      <Image
        src="/PRISM.png"
        alt="PRISM device"
        width={600}
        height={600}
        className="object-contain transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/70 p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-md">
          AI-Powered Mixed Reality for Pancreatic Surgery
        </h1>
        <p className="mt-4 text-lg max-w-xl text-gray-700">
          From CT scan segmentation to real-time surgical guidance — PRISM empowers surgeons every step of the way.
        </p>
      </div>
    </section>
  );
}
