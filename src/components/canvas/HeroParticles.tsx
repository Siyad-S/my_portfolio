'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function ParticleHelix() {
    const ref = useRef<THREE.Points>(null!);
    const { viewport, mouse } = useThree();

    const count = 4000; // Optimal particle count for performance

    const { positions, velocities, initialPositions } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        const initialPositions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = THREE.MathUtils.randFloatSpread(10);
            const x = THREE.MathUtils.randFloatSpread(10);
            const y = THREE.MathUtils.randFloatSpread(10);
            const z = THREE.MathUtils.randFloatSpread(10);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            initialPositions[i * 3] = x;
            initialPositions[i * 3 + 1] = y;
            initialPositions[i * 3 + 2] = z;

            velocities[i * 3] = 0;
            velocities[i * 3 + 1] = 0;
            velocities[i * 3 + 2] = 0;
        }

        return { positions, velocities, initialPositions };
    }, []);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        // Safety check if geometry/attributes are ready
        if (!ref.current?.geometry?.attributes?.position) return;

        const posArray = ref.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const index = i * 3;

            // Current position
            let px = posArray[index];
            let py = posArray[index + 1];
            let pz = posArray[index + 2];

            // Flow Field Calculation (Trigonometric swirl)
            // Creating a curl-like vector field based on position and time
            const frequency = 0.3;
            const flowX = Math.sin(py * frequency + time * 0.5) * Math.cos(pz * frequency + time * 0.1);
            const flowY = Math.sin(pz * frequency + time * 0.5) * Math.cos(px * frequency + time * 0.1);
            const flowZ = Math.sin(px * frequency + time * 0.5) * Math.cos(py * frequency + time * 0.1);

            // Convert normalized mouse coords to world coords approximately (assuming z=0 plane)
            const mx = mouse.x * viewport.width / 2;
            const my = mouse.y * viewport.height / 2;
            const dx = px - mx;
            const dy = py - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let mouseForceX = 0;
            let mouseForceY = 0;
            let mouseForceZ = 0;

            // Increased interaction radius and force
            const interactionRadius = 6;
            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) * 4; // Stronger force
                mouseForceX = (dx / dist) * force;
                mouseForceY = (dy / dist) * force;
                mouseForceZ = force * 2; // Also push back in Z for 3D feel
            }

            // Apply forces to velocity with inertia
            velocities[index] += (flowX * 2 + mouseForceX) * delta * 0.5;
            velocities[index + 1] += (flowY * 2 + mouseForceY) * delta * 0.5;
            velocities[index + 2] += (flowZ * 2 + mouseForceZ) * delta * 0.5;

            // Apply velocity to position
            posArray[index] += velocities[index] * delta;
            posArray[index + 1] += velocities[index + 1] * delta;
            posArray[index + 2] += velocities[index + 2] * delta;

            // Damping (friction)
            velocities[index] *= 0.95;
            velocities[index + 1] *= 0.95;
            velocities[index + 2] *= 0.95;

            // Boundary check: if too far, reset to random position near center to keep the flow alive
            const bounds = 8;
            if (Math.abs(px) > bounds || Math.abs(py) > bounds || Math.abs(pz) > bounds) {
                posArray[index] = THREE.MathUtils.randFloatSpread(10);
                posArray[index + 1] = THREE.MathUtils.randFloatSpread(10);
                posArray[index + 2] = THREE.MathUtils.randFloatSpread(10);
                velocities[index] = 0;
                velocities[index + 1] = 0;
                velocities[index + 2] = 0;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;

        // Parallax & Auto Rotation
        // Rotate the entire group slightly based on mouse position for depth
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.2, delta * 2);
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.2 + time * 0.05, delta * 2);
    });

    // Responsive scale
    const isMobile = viewport.width < 5;
    const isTablet = viewport.width >= 5 && viewport.width < 8;
    const scale = isMobile ? 0.6 : isTablet ? 0.8 : 1;

    return (
        <group scale={scale}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}
