"use client";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef } from "react";

function Prism() {
  const meshRef = useRef();

  // Rotate horizontally (around X axis)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // horizontal roll
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2, 3]} />
      <meshStandardMaterial
        attach="material-0"
        color="#9B5DE5" // vibrant purple
      />
      <meshStandardMaterial
        attach="material-1"
        color="#00F5D4" // vibrant green
      />
      <meshStandardMaterial
        attach="material-2"
        color="#F15BB5" // vibrant pink
      />
      <meshStandardMaterial
        attach="material-3"
        color="#9B5DE5"
      />
      <meshStandardMaterial
        attach="material-4"
        color="#00F5D4"
      />
      <meshStandardMaterial
        attach="material-5"
        color="#F15BB5"
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="w-full h-[500px] flex items-center justify-center bg-white">
      <motion.div
        className="w-[400px] h-[400px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Prism />
        </Canvas>
      </motion.div>
    </section>
  );
}
