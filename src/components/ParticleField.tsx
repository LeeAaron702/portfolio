"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;

export default function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 2;
      arr.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi) - 2,
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        scale: 0.01 + Math.random() * 0.025,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    mouseRef.current.x += (pointer.x * viewport.width * 0.3 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * viewport.height * 0.3 - mouseRef.current.y) * 0.02;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      const wave = Math.sin(t * p.speed + p.offset);

      dummy.position.set(
        p.x + wave * 0.3 + mouseRef.current.x * 0.15,
        p.y + Math.cos(t * p.speed * 0.7 + p.offset) * 0.3 + mouseRef.current.y * 0.15,
        p.z + wave * 0.2
      );
      dummy.scale.setScalar(p.scale * (1 + wave * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#2563EB" transparent opacity={0.4} />
    </instancedMesh>
  );
}
