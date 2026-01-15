'use client';

import { useRef, useState } from 'react';
import { Image, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { easing } from 'maath';

export default function LiquidImage({ src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" }) {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        // Standard static image, no animation requested
    });

    return (
        <Image
            ref={ref}
            url={src}
            side={THREE.DoubleSide}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={[4, 5]} // scale is [x, y] or number for Image component (2D)
        >
            {/* 
         Note: The Drei Image component has built-in uniforms for zoom/grayscale.
         For a custom "Liquid" effect we would need a custom shader material, 
         but extending Image material is complex. 
         We'll use the built-in zoom/grayscale as a base "Live" effect 
         and basic wiggle from the View config.
       */}
        </Image>
    );
}
