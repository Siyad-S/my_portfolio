'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Environment, Text3D } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

function Geometry({ position, color, geometry }: { position: [number, number, number], color: string, geometry: React.ReactNode }) {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.15;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
            <mesh ref={mesh} position={position} castShadow receiveShadow>
                {geometry}
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={false}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <Canvas
                shadows
                className="w-full h-full pointer-events-none"
                camera={{ position: [0, 0, 10], fov: 30 }}
            >
                <Lights />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <group>
                    <Geometry position={[-2, 1, 0]} color="#00f3ff" geometry={<icosahedronGeometry args={[1, 0]} />} />
                    <Geometry position={[2, -1, 0]} color="#bc13fe" geometry={<octahedronGeometry args={[1, 0]} />} />
                    <Geometry position={[0, 0, -2]} color="#ffffff" geometry={<torusGeometry args={[1.5, 0.2, 16, 100]} />} />
                </group>

                <Environment preset="city" />
                <Rig />
            </Canvas>
        </div>
    );
}

function Lights() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={20} color="#00f3ff" />
            <pointLight position={[-10, -10, -10]} intensity={10} color="#bc13fe" />
            <spotLight position={[0, 10, 0]} intensity={10} angle={0.5} penumbra={1} />
        </>
    );
}

function Rig() {
    useFrame((state) => {
        // Rotate camera slightly based on mouse position
        const { pointer, camera } = state;
        const x = pointer.x * 0.5;
        const y = pointer.y * 0.5;

        camera.position.x += (x - camera.position.x) * 0.05;
        camera.position.y += (y - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });
    return null;
}
