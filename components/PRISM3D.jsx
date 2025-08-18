"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function PRISMTetrahedron() {
  const meshRef = useRef();

  // Spin around the central vertical axis (apex ↔ base centroid)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // horizontal spin per your definition
    }
  });

  // Regular tetrahedron aligned to Y axis:
  // Base: y = -h ; Apex: y = +h, with r=1 and h = sqrt(2)/2
  const r = 1;
  const h = Math.sqrt(2) / 2;

  const v0 = [0,  h, 0];                 // apex (on Y axis)
  const v1 = [ r, -h, 0];
  const v2 = [-r/2, -h,  (Math.sqrt(3)/2)*r];
  const v3 = [-r/2, -h, -(Math.sqrt(3)/2)*r];

  // Duplicate vertices per face so each triangle can have a solid, unique color
  const positions = new Float32Array([
    ...v0, ...v1, ...v2,   // Face 1
    ...v0, ...v2, ...v3,   // Face 2
    ...v0, ...v3, ...v1,   // Face 3
    ...v1, ...v3, ...v2,   // Base
  ]);

  // Your brand colors per face (exact hex shades)
  const faceHex = ["#5D2C91", "#B8A2FF", "#CFFFD6", "#EBC7A8"];
  const colorsArr = [];
  faceHex.forEach(hex => {
    const c = new THREE.Color(hex);
    // 3 vertices per face:
    for (let i = 0; i < 3; i++) colorsArr.push(c.r, c.g, c.b);
  });
  const colors = new Float32Array(colorsArr);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();

  return (
    <mesh ref={meshRef} geometry={geometry} scale={2.2}>
      {/* Basic material = exact hex colors (no lighting washout) */}
      <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <Canvas camera={{ position: [0, 1.3, 5], fov: 50 }}>
      {/* Lights won't affect MeshBasicMaterial colors but keep them if you switch materials later */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <PRISMTetrahedron />
    </Canvas>
  );
}
