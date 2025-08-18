import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function TriangularPrism() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // horizontal rotation
    }
  });

  // 4 vertices of a tetrahedron
  const vertices = new Float32Array([
    0, 1, 0,    // top vertex
    -1, -1, -1, // base vertex 1
    1, -1, -1,  // base vertex 2
    0, -1, 1,   // base vertex 3
  ]);

  // 4 triangular faces (indices)
  const indices = new Uint16Array([
    0, 1, 2, // side 1
    0, 2, 3, // side 2
    0, 3, 1, // side 3
    1, 3, 2, // base
  ]);

  return (
    <mesh ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={vertices.length / 3}
          array={vertices}
          itemSize={3}
        />
        <setIndex attach="index" array={indices} />
      </bufferGeometry>

      <meshStandardMaterial color="#5D2C91" /> {/* all faces same color */}
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
