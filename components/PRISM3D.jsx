import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

function TriangularPrism() {
  const meshRef = useRef();

  // Rotate the prism
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  // Define a triangular shape
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(1, 0);
  shape.lineTo(0.5, 1);
  shape.lineTo(0, 0);

  // Extrude settings to give it depth
  const extrudeSettings = { depth: 1, bevelEnabled: false };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshStandardMaterial color="purple" />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <TriangularPrism />
    </Canvas>
  );
}
