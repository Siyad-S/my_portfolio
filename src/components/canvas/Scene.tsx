'use client';

import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';

export default function Scene() {
    return (
        <Canvas
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
            eventSource={typeof window !== 'undefined' ? document.body : undefined}
        >
            <View.Port />
            <Preload all />
        </Canvas>
    );
}
