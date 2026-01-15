'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    delay?: number;
}

export default function Tooltip({ content, children, delay = 0.2 }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, delay }}
                        className="absolute bottom-full mb-2 px-3 py-1.5 bg-gray-900 border border-white/10 text-white text-[9px] rounded-lg shadow-xl whitespace-nowrap z-50 backdrop-blur-md"
                    >
                        {content}
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900/90" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
