'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function ContactGlobe() {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // ref.current.rotation.y = t * 0.2; // Let OrbitControls handle rotation or add autoRotate to mesh if desired
    });

    return (
        <group>
            <OrbitControls makeDefault enableZoom={false} autoRotate autoRotateSpeed={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#bc13fe" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#00f3ff" />

            {/* Outer Distorted Sphere */}
            <Sphere ref={ref} args={[2, 64, 64]}>
                <MeshDistortMaterial
                    color="#1a1a1a"
                    emissive="#bc13fe"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={1}
                    distort={0.5}
                    speed={2}
                    wireframe
                />
            </Sphere>

            {/* Inner Solid Core for Depth */}
            <Sphere args={[1.5, 32, 32]}>
                <meshStandardMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={0.2}
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </group>
    );
}
