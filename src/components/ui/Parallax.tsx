'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
    children: React.ReactNode;
    speed?: number; // 1 is normal, 0.5 is slow, 2 is fast
    className?: string;
    id?: string;
}

export default function Parallax({ children, speed = 1, className, id }: ParallaxProps) {
    const trigger = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!trigger.current || !target.current) return;

        gsap.fromTo(target.current,
            {
                yPercent: -20 * speed // Start slightly up
            },
            {
                yPercent: 20 * speed, // End slightly down
                ease: "none",
                scrollTrigger: {
                    trigger: trigger.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0
                }
            }
        );
    }, { scope: trigger, dependencies: [speed] });

    return (
        <div ref={trigger} className={cn("relative overflow-hidden", className)} id={id}>
            <div ref={target} className="relative will-change-transform">
                {children}
            </div>
        </div>
    );
}
