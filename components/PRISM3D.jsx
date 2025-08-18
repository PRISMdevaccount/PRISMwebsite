import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function PRISMTetrahedron() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      // Revolving motion (like rotating around central vertical axis)
      meshRef.current.rotation.y += 0.01;
    }
  });

  // Perfect tetrahedron vertices (same as before)
  const vertices = new Float32Array([
    1, 1, 1,   -1, -1, 1,   -1, 1, -1,   // Face 1
    1, 1, 1,   -1, -1, 1,    1, -1, -1,  // Face 2
    1, 1, 1,   -1, 1, -1,    1, -1, -1,  // Face 3
   -1, -1, 1,  -1, 1, -1,    1, -1, -1,  // Base (Face 4)
  ]);

  // Face colors (kept vibrant)
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
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1} // hover scale-up
    >
      <meshStandardMaterial
        vertexColors
        flatShading
        emissive={hovered ? "#ffffff" : "#000000"} // glow effect on hover
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas
      camera={{ position: [4, 3, 6], fov: 50 }}
      style={{ width: "100%", height: "500px" }}
    >
      {/* Lights for shadow and glow */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <PRISMTetrahedron />
    </Canvas>
  );
}
