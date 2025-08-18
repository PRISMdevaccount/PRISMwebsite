
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

  // Regular tetrahedron with one vertex at top, centered on Y-axis
  const a = 1.632993; // edge length for unit tetrahedron
  const vertices = new Float32Array([
    // Face 1
    0, a/2, 0,    -a/2, -a/6, a/(2*Math.sqrt(3)),    a/2, -a/6, a/(2*Math.sqrt(3)),
    // Face 2 
    0, a/2, 0,    a/2, -a/6, a/(2*Math.sqrt(3)),     0, -a/6, -a/Math.sqrt(3),
    // Face 3
    0, a/2, 0,    0, -a/6, -a/Math.sqrt(3),          -a/2, -a/6, a/(2*Math.sqrt(3)),
    // Base face
    -a/2, -a/6, a/(2*Math.sqrt(3)),    0, -a/6, -a/Math.sqrt(3),    a/2, -a/6, a/(2*Math.sqrt(3)),
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
    <mesh ref={meshRef} geometry={geometry} scale={2}>
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