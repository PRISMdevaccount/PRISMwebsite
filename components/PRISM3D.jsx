import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function TriangularPrism() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // rotate flat around Y-axis
    }
  });

  // Vertices duplicated per face (so each face can have unique color)
  const vertices = new Float32Array([
    // Side 1
    0, 1, 0,   -1, 0, -1,    1, 0, -1,
    // Side 2
    0, 1, 0,    1, 0, -1,    0, 0, 1,
    // Side 3
    0, 1, 0,    0, 0, 1,    -1, 0, -1,
    // Base
   -1, 0, -1,   0, 0, 1,     1, 0, -1,
  ]);

  // Per-face colors (duplicated per vertex)
  const faceColors = [
    "#5D2C91", // dark purple
    "#B8A2FF", // light purple
    "#CFFFD6", // light green
    "#EBC7A8", // peach/tan
  ];

  const colors = [];
  faceColors.forEach(hex => {
    const c = new THREE.Color(hex);
    for (let i = 0; i < 3; i++) { // 3 vertices per face
      colors.push(c.r, c.g, c.b);
    }
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
  geometry.computeVertexNormals();

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <ambientLight intensity={1} />
      <TriangularPrism />
    </Canvas>
  );
}
