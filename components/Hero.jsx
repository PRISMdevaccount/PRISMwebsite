// components/Hero.jsx
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import PRISM3D and disable SSR
const PRISM3D = dynamic(() => import('./PRISM3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="hero-container flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white">
      {/* Left side: Text */}
      <div className="hero-text flex-1 mb-8 md:mb-0 md:pr-12">
        <h1 className="text-5xl font-bold text-purple-800">
          PRISM
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Surgical AI Assistant for pancreatic surgery
        </p>
      </div>

      {/* Right side: 3D Model */}
      <div className="hero-model flex-1 w-full md:w-auto h-96">
        <Suspense fallback={<div className="text-center">Loading 3D Model...</div>}>
          <PRISM3D />
        </Suspense>
      </div>
    </section>
  );
}
