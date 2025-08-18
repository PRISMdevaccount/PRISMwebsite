import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function PRISMTetrahedron() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Multi-axis rotation that creates a revolving effect
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.rotation.z += 0.005;
      
      // Add some floating motion when hovered
      if (hovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
      } else {
        meshRef.current.position.y = 0;
        meshRef.current.scale.setScalar(1);
      }
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
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <meshPhongMaterial 
        vertexColors 
        shininess={hovered ? 100 : 30}
        transparent={hovered}
        opacity={hovered ? 0.9 : 1}
      />
    </mesh>
  );
}

export default function PRISM3D() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
      >
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.4} />
        
        {/* Main directional light with shadows */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Additional accent lights for more dramatic effect */}
        <pointLight position={[-10, 0, -20]} color="#5D2C91" intensity={0.3} />
        <pointLight position={[0, -10, 0]} color="#B8A2FF" intensity={0.2} />
        
        <PRISMTetrahedron />
        
        {/* Invisible ground plane to receive shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshPhongMaterial transparent opacity={0} />
        </mesh>
      </Canvas>
    </div>
  );
}