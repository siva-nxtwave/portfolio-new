"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 450;

  // Generate random positions on sphere surface and interior
  const [positions] = React.useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.5;

      const sinPhi = Math.sin(phi);
      pos[i * 3] = r * sinPhi * Math.cos(theta);
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.08;
      pointsRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38BDF8"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

function GlowingOrb() {
  const orbRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(t * 1.5) * 0.1;
      orbRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={orbRef}>
        <sphereGeometry args={[1.2, 48, 48]} />
        <meshStandardMaterial
          color="#2563EB"
          wireframe
          roughness={0.1}
          metalness={0.8}
          emissive="#06B6D4"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[420px] sm:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        frameloop={isInView ? "always" : "never"}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06B6D4" />
        <GlowingOrb />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
