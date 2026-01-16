'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
    targetId: string;
    direction: 'up' | 'down';
    className?: string;
}

export default function ScrollIndicator({ targetId, direction, className }: ScrollIndicatorProps) {
    const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.button
            onClick={scrollToTarget}
            initial={{ opacity: 0, y: 0 }}
            animate={{
                opacity: 1,
                y: [0, direction === 'down' ? 10 : -10, 0]
            }}
            transition={{
                y: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                },
                opacity: { duration: 0.5 }
            }}
            className={cn(
                "p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-neon-cyan hover:bg-neon-cyan/20 transition-colors z-20 cursor-pointer lg:hidden",
                className
            )}
            aria-label={`Scroll ${direction} to ${targetId}`}
        >
            {direction === 'down' ? (
                <ChevronDown size={24} />
            ) : (
                <ChevronUp size={24} />
            )}
        </motion.button>
    );
}
