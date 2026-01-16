'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function ContactWave() {
    const ref = useRef<THREE.Points>(null!);

    // Grid parameters
    const count = 100; // 100x100 grid = 10000 particles
    const sep = 0.2; // Separation between points

    const positions = useMemo(() => {
        const temp = new Float32Array(count * count * 3);
        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);
                const y = 0;
                temp[i * 3] = x;
                temp[i * 3 + 1] = y;
                temp[i * 3 + 2] = z;
                i++;
            }
        }
        return temp;
    }, [count, sep]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const positions = ref.current.geometry.attributes.position.array as Float32Array;

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);

                // Wave calculation
                // y = sin(x + t) + cos(z + t)
                positions[i * 3 + 1] = Math.sin(x * 0.5 + t) * 0.5 + Math.sin(z * 0.5 + t * 0.5) * 0.5;
                i++;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    // Responsive scaling
    const { viewport } = useThree();
    const isMobile = viewport.width < 5;
    const scale = isMobile ? 0.7 : 1;
    const yPos = isMobile ? -1.5 : -2;

    return (
        <group scale={scale}>
            {/* Tilted view for the wave */}
            <group rotation={[Math.PI / 8, 0, 0]} position={[0, yPos, 0]}>
                <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                    <PointMaterial
                        transparent
                        color="#bc13fe"
                        size={0.03}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.6}
                    />
                </Points>
            </group>
        </group>
    );
}
