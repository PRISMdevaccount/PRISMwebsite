import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function TriangularPrism() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
  });

  // Vertices duplicated per face for proper per-face coloring
  const vertices = new Float32Array([
    // Side 1
     0, 1, 0,   -1, -1, 1,   1, -1, 1,
    // Side 2
     0, 1, 0,    1, -1, 1,   0, -1, -1,
    // Side 3
     0, 1, 0,    0, -1, -1, -1, -1, 1,
    // Base
    -1, -1, 1,   0, -1, -1,   1, -1, 1,
  ]);

  const colors = new Float32Array([
    // Side 1 - dark purple
    0.36, 0.17, 0.57,
    0.36, 0.17, 0.57,
    0.36, 0.17, 0.57,
    // Side 2 - light purple
    0.72, 0.64, 1.0,
    0.72, 0.64, 1.0,
    0.72, 0.64, 1.0,
    // Side 3 - light green
    0.81, 1.0, 0.84,
    0.81, 1.0, 0.84,
    0.81, 1.0, 0.84,
    // Base - tan
    0.91, 0.76, 0.65,
    0.91, 0.76, 0.65,
    0.91, 0.76, 0.65,
  ]);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial vertexColors={true} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <TriangularPrism />
    </Canvas>
  );
}
