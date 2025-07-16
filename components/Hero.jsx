import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-[90vh]">
      {/* LEFT SIDE — TEXT */}
      <div className="md:w-1/2 bg-purple-100 flex flex-col justify-center items-start p-12 text-gray-800">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          PRISM: AI Assistance for Pancreatic Surgery
        </h1>
        <p className="text-lg max-w-md">
          Real-time Mixed Reality guidance for surgeons and radiologists — from
          pre-operative planning to intra-operative precision.
        </p>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="md:w-1/2 bg-white flex justify-center items-center p-12">
        <div className="transition-transform duration-500 hover:rotate-[15deg] hover:scale-105">
          <Image
            src="/PRISM.png"
            alt="PRISM Device"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
