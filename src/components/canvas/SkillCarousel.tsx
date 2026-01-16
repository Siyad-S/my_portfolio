'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Image, Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '@/lib/data';

function SkillItem({ index, total, tech, radius }: { index: number; total: number; tech: typeof skills[0], radius: number }) {
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const [hovered, setHover] = useState(false);
    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        // Look at camera
        ref.current.lookAt(state.camera.position);
    });

    return (
        <group position={[x, 0, z]} ref={ref}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    scale={hovered ? 1.2 : 1}
                >
                    <circleGeometry args={[0.4, 32]} />
                    <meshBasicMaterial color="#1a1a1a" transparent opacity={0.8} />

                    {/* Icon */}
                    <Image
                        url={(tech as any).iconUrl || `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                        transparent
                        scale={0.5}
                        position={[0, 0, 0.01]} // Slightly in front
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Label on Hover */}
                <Text
                    position={[0, -0.7, 0]}
                    fontSize={0.2}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={hovered ? 1 : 0}
                >
                    {tech.name}
                </Text>
            </Float>
        </group>
    );
}

export default function SkillCarousel() {
    const groupRef = useRef<THREE.Group>(null!);
    const { viewport } = useThree();

    // Responsive radius logic
    const radius = useMemo(() => {
        if (viewport.width < 5) return 2.2;  // Mobile (slightly wider)
        if (viewport.width < 8) return 2.8;  // Tablet
        return 3.5;                          // Desktop (wide)
    }, [viewport.width]);

    const isMobile = viewport.width < 5;
    const globalScale = isMobile ? 0.75 : 1;

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.1;
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 0.1]} scale={globalScale}>
            <OrbitControls makeDefault enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            {skills.map((tech, i) => (
                <SkillItem key={tech.name} index={i} total={skills.length} tech={tech} radius={radius} />
            ))}
        </group>
    );
}
