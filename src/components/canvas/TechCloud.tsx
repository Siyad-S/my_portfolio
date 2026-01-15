'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = ['React', 'Next.js', 'TS', 'Node', 'Three.js', 'Tailwind', 'GSAP', 'Zustand', 'Prisma', 'Postgres'];

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
    const fontProps = { fontSize: 0.25, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef<THREE.Mesh>(null!);

    useFrame(({ camera }) => {
        // Make text face camera
        if (ref.current) {
            ref.current.quaternion.copy(camera.quaternion);
        }
    });

    return (
        <Text ref={ref} position={position} {...fontProps} color="#bc13fe">
            {children}
        </Text>
    );
}

export default function TechCloud() {
    const count = skills.length;
    const radius = 2;

    // Create a spherical distribution of words
    const words = useMemo(() => {
        const temp = [];
        const phiSpan = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phiSpan * i;
            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            temp.push([new THREE.Vector3(x * radius, y * radius, z * radius), skills[i]] as [THREE.Vector3, string]);
        }
        return temp;
    }, [count, radius]);

    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.1;
        groupRef.current.rotation.x += delta * 0.05;
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos}>{word}</Word>
            ))}
        </group>
    );
}
