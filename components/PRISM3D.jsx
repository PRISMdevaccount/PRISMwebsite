import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function TriangularPrism() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
  });

  // Regular tetrahedron vertices (all equilateral triangles)
  const sqrt2over3 = Math.sqrt(2) / 3;
  const sqrt6over3 = Math.sqrt(6) / 3;

  const vertices = new Float32Array([
    0, 0, 1,                    // top vertex
    2 * sqrt2over3, 0, -1 / 3,  // base vertex 1
    -sqrt2over3, sqrt6over3, -1 / 3, // base vertex 2
    -sqrt2over3, -sqrt6over3, -1 / 3, // base vertex 3
  ]);

  // Faces (each face is a triangle)
  const indices = new Uint16Array([
    0, 1, 2, // side 1
    0, 2, 3, // side 2
    0, 3, 1, // side 3
    1, 3, 2, // base
  ]);

  // One color per face (duplicate vertices so faces can be solid colored)
  const faceColors = [
    new THREE.Color("#5D2C91"), // dark purple
    new THREE.Color("#B8A2FF"), // light purple
    new THREE.Color("#CFFFD6"), // light green
    new THREE.Color("#EBC7A8"), // peach/tan
  ];

  // Expand to per-vertex colors (3 vertices per face)
  const colors = [];
  indices.forEach((_, i) => {
    const faceIndex = Math.floor(i / 3);
    const c = faceColors[faceIndex];
    colors.push(c.r, c.g, c.b);
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
  geometry.computeVertexNormals();

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial vertexColors side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <TriangularPrism />
    </Canvas>
  );
}
