'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { RobotArm } from './robot-arm';
import { LidarScan } from './lidar-scan';

export function HeroScene() {
  return (
    <Canvas
      className="w-full h-full"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      
      <Suspense fallback={null}>
        <Environment preset="night" background={false} />
        
        {/* Scene setup */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00D4FF" />
        
        {/* Main robot arm */}
        <RobotArm />
        
        {/* LiDAR scan overlay */}
        <group position={[0, 0, -3]} scale={0.7}>
          <LidarScan />
        </group>
      </Suspense>

      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
        enablePan={false}
      />
    </Canvas>
  );
}
