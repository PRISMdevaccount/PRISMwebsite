// components/PRISM3D.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useRef } from 'react';

function TriangularPrism() {
  const meshRef = useRef();

  // Rotate around Y-axis (horizontal rotation)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={12}
          array={new Float32Array([
            // Base triangle (y = -0.5)
            -0.5, -0.5, -0.5,   0.5, -0.5, -0.5,   0, -0.5, 0.5,
            // Top triangle (y = 0.5)
            -0.5, 0.5, -0.5,    0.5, 0.5, -0.5,    0, 0.5, 0.5,
          ])}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          count={6}
          array={new Float32Array([
            0.5, 0.2, 0.8, // dark purple
            0.8, 0.7, 1.0, // light purple
            0.7, 1.0, 0.8, // light green
            0.5, 0.2, 0.8,
            0.8, 0.7, 1.0,
            0.7, 1.0, 0.8,
          ])}
          itemSize={3}
        />
      </bufferGeometry>

      {/* Materials for sides */}
      <meshStandardMaterial color="#5D2C91" /> {/* Dark purple */}
      <meshStandardMaterial color="#B8A2FF" /> {/* Light purple */}
      <meshStandardMaterial color="#CFFFD6" /> {/* Light green */}
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
