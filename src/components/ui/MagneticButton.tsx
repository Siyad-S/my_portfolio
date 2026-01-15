'use client';

import React, { useRef, MouseEvent } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!ref.current || !textRef.current) return;

        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        // Text moves slightly more for parallax effect
        const xToText = gsap.quickTo(textRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yToText = gsap.quickTo(textRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: unknown) => {
            const mouseEvent = e as globalThis.MouseEvent; // Cast for raw event listener
            const { clientX, clientY } = mouseEvent;
            const { height, width, left, top } = ref.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.35);
            yTo(y * 0.35);
            xToText(x * 0.1);
            yToText(y * 0.1);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            xToText(0);
            yToText(0);
        };

        ref.current.addEventListener("mousemove", handleMouseMove);
        ref.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            ref.current?.removeEventListener("mousemove", handleMouseMove);
            ref.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: ref });

    return (
        <button
            ref={ref}
            onClick={onClick}
            className={cn(
                "relative rounded-full border border-neon-cyan/50 px-8 py-3 text-neon-cyan uppercase tracking-widest hover:bg-neon-cyan/10 transition-colors z-50",
                className
            )}
        >
            <span ref={textRef} className="relative block z-10 pointer-events-none">
                {children}
            </span>
        </button>
    );
}
