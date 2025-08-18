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

  // Tetrahedron vertices positioned for Y-axis rotation
  // Top vertex at (0, √(2/3), 0), bottom vertices forming equilateral triangle
  const h = Math.sqrt(2/3); // height from center to top vertex
  const r = Math.sqrt(3)/3; // radius of base triangle
  
  const vertices = new Float32Array([
    // Face 1 (top vertex to two base vertices)
    0, h, 0,    -r, -h/2, 0.5,    r, -h/2, 0.5,
    // Face 2 (top vertex to two base vertices)  
    0, h, 0,    r, -h/2, 0.5,     0, -h/2, -1,
    // Face 3 (top vertex to two base vertices)
    0, h, 0,    0, -h/2, -1,      -r, -h/2, 0.5,
    // Face 4 (base triangle)
    -r, -h/2, 0.5,    0, -h/2, -1,    r, -h/2, 0.5,
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