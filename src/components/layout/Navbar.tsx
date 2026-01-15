'use client';

import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

interface NavbarProps {
    activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
    const navRef = useRef<HTMLElement>(null);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' }
    ];

    useGSAP(() => {
        const showNav = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.3
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            }
        });
    }, { scope: navRef });

    const lenis = useLenis();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        // activeSection is controlled by parent, no need to set local state
        lenis?.scrollTo(href, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
        });
    };

    return (
        <nav ref={navRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
            <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-neon-cyan",
                            activeSection === item.name.toLowerCase() ? "text-neon-cyan" : "text-gray-400"
                        )}
                        onClick={(e) => handleScroll(e, item.href)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
