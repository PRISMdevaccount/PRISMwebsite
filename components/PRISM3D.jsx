import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function PRISMTetrahedron() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // rotate around Y axis (vertical)
    }
  });

  // Perfect tetrahedron vertices
  const vertices = new Float32Array([
    1, 1, 1,   -1, -1, 1,   -1, 1, -1,   // Face 1
    1, 1, 1,   -1, -1, 1,    1, -1, -1,   // Face 2
    1, 1, 1,   -1, 1, -1,    1, -1, -1,   // Face 3
   -1, -1, 1,  -1, 1, -1,    1, -1, -1,   // Base (Face 4)
  ]);

  // One color per face
  const faceColors = [
    "#5D2C91", // dark purple
    "#B8A2FF", // light purple
    "#CFFFD6", // light green
    "#EBC7A8", // peach/tan
  ];

  const colors = [];
  faceColors.forEach(hex => {
    const c = new THREE.Color(hex);
    for (let i = 0; i < 3; i++) {
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
      <PRISMTetrahedron />
    </Canvas>
  );
}