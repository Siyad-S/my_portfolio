'use client';

import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '@/lib/data';

// Module-level cache so textures are loaded once and reused across renders
const textureCache = new Map<string, THREE.Texture>();

function SkillIcon({ url }: { url: string }) {
    const [texture, setTexture] = useState<THREE.Texture | null>(() => textureCache.get(url) || null);

    useEffect(() => {
        if (!url) return;
        if (textureCache.has(url)) {
            setTexture(textureCache.get(url)!);
            return;
        }

        let isMounted = true;
        const img = new window.Image();
        img.crossOrigin = 'anonymous';

        img.onload = () => {
            if (!isMounted) return;
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, 256, 256);
                ctx.drawImage(img, 0, 0, 256, 256);
                const tex = new THREE.CanvasTexture(canvas);
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.needsUpdate = true;
                textureCache.set(url, tex);
                setTexture(tex);
            }
        };

        img.onerror = () => {
            // Fallback: direct TextureLoader
            const loader = new THREE.TextureLoader();
            loader.load(url, (tex) => {
                if (!isMounted) return;
                tex.colorSpace = THREE.SRGBColorSpace;
                textureCache.set(url, tex);
                setTexture(tex);
            });
        };

        img.src = url;

        return () => {
            isMounted = false;
        };
    }, [url]);

    if (!texture) return null;

    return (
        <mesh position={[0, 0, 0.015]}>
            <planeGeometry args={[0.46, 0.46]} />
            <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
    );
}

function SkillItem({ index, total, tech, radius, itemScale }: { index: number; total: number; tech: typeof skills[0], radius: number, itemScale: number }) {
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const [hovered, setHover] = useState(false);
    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        // Look at camera
        ref.current.lookAt(state.camera.position);
    });

    const baseScale = itemScale;
    const hoverScale = hovered ? 1.25 : 1;
    const finalMeshScale = baseScale * hoverScale;
    const iconUrl = (tech as any).iconUrl || `/icons/${tech.slug}.svg`;

    return (
        <group position={[x, 0, z]} ref={ref}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <group
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    scale={finalMeshScale}
                >
                    {/* Background Circle Badge */}
                    <mesh position={[0, 0, 0]}>
                        <circleGeometry args={[0.4, 32]} />
                        <meshBasicMaterial color={hovered ? '#222222' : '#141414'} transparent opacity={0.9} side={THREE.DoubleSide} />
                    </mesh>

                    {/* Outer Ring Border */}
                    <mesh position={[0, 0, 0.005]}>
                        <ringGeometry args={[0.38, 0.4, 32]} />
                        <meshBasicMaterial color={hovered ? tech.color : '#2d2d2d'} transparent opacity={hovered ? 1 : 0.6} side={THREE.DoubleSide} />
                    </mesh>

                    {/* Icon */}
                    <SkillIcon url={iconUrl} />
                </group>

                {/* Label on Hover */}
                <Text
                    position={[0, -0.65 * itemScale, 0]}
                    fontSize={0.22 * itemScale}
                    color={hovered ? tech.color : 'white'}
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

    // Responsive radius and item scale logic
    const { radius, itemScale } = useMemo(() => {
        if (viewport.width < 5) {
            // Mobile
            return { radius: 2.2, itemScale: 0.6 };
        } else if (viewport.width < 8) {
            // Tablet
            return { radius: 2.8, itemScale: 0.8 };
        } else {
            // Desktop
            return { radius: 3.5, itemScale: 1 };
        }
    }, [viewport.width]);

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.1;
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 0.1]}>
            <OrbitControls makeDefault enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            {skills.map((tech, i) => (
                <SkillItem
                    key={tech.name}
                    index={i}
                    total={skills.length}
                    tech={tech}
                    radius={radius}
                    itemScale={itemScale}
                />
            ))}
        </group>
    );
}
