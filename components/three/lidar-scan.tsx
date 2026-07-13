'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Points } from 'three';
import * as THREE from 'three';

export function LidarScan() {
  const groupRef = useRef<Group>(null);
  const pointsRef = useRef<Points>(null);

  const { geometry } = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2 + Math.sin(i * 0.01) * 0.5;
      const y = (Math.random() - 0.5) * 3;

      positions[i * 3 + 0] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { geometry };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial 
          size={0.08} 
          color="#00D4FF" 
          sizeAttenuation 
          transparent 
          opacity={0.8}
        />
      </points>

      {/* Concentric circles */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.05, 32, 32]} />
        <meshStandardMaterial 
          color="#00D4FF" 
          emissive="#00D4FF" 
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.04, 32, 32]} />
        <meshStandardMaterial 
          color="#0098B2" 
          emissive="#00A8CC" 
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 32, 32]} />
        <meshStandardMaterial 
          color="#006B82" 
          emissive="#00D4FF" 
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#00D4FF" 
          emissive="#00D4FF" 
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}
