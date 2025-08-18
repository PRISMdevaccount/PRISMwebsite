import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function PrismMesh() {
  const ref = useRef();

  // Rotate continuously
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={ref}>
      {/* Box geometry: width, height, depth */}
      <boxGeometry args={[2, 1, 1]} />
      {/* Materials for each face: order is +x, -x, +y, -y, +z, -z */}
      <meshStandardMaterial attach="material-0" color="#4B0082" /> {/* dark purple */}
      <meshStandardMaterial attach="material-1" color="#C8A2C8" /> {/* light purple */}
      <meshStandardMaterial attach="material-2" color="#90EE90" /> {/* light green */}
      <meshStandardMaterial attach="material-3" color="#C8A2C8" /> {/* light purple */}
      <meshStandardMaterial attach="material-4" color="#4B0082" /> {/* dark purple */}
      <meshStandardMaterial attach="material-5" color="#90EE90" /> {/* light green */}
    </mesh>
  );
}

export default function Prism3D() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {/* The prism mesh */}
        <PrismMesh />
        {/* Optional controls (rotate with mouse) */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
