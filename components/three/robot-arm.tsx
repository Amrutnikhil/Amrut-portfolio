'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export function RobotArm() {
  const groupRef = useRef<Group>(null);
  const baseRef = useRef<Mesh>(null);
  const armRef = useRef<Mesh>(null);
  const clawRef = useRef<Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }

    if (armRef.current) {
      armRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.3;
    }

    if (clawRef.current) {
      clawRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh ref={baseRef} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.3} />
      </mesh>

      {/* Main arm segment */}
      <mesh ref={armRef} position={[0, 0.3, 0]}>
        <boxGeometry args={[0.2, 1.5, 0.2]} />
        <meshStandardMaterial color="#111111" emissive="#00D4FF" emissiveIntensity={0.2} />
      </mesh>

      {/* Secondary arm segment */}
      <mesh position={[0, 1.3, 0.5]}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial color="#1a1a1a" emissive="#00D4FF" emissiveIntensity={0.15} />
      </mesh>

      {/* Gripper/Claw */}
      <mesh ref={clawRef} position={[0, 2, 1]} scale={0.8}>
        <octahedronGeometry args={[0.3]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.4} />
      </mesh>

      {/* Connection points - glowing spheres */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.6} />
      </mesh>

      <mesh position={[0, 1.8, 0.5]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
