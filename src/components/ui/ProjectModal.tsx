'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Github, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        tech: string[];
        image: string;
        github: string;
        live: string;
        liveAdmin?: string;
        color: string;
        company?: string;
        type?: string;
        description?: string;
        features?: string[];
        details?: { title: string; content: string; }[];
        gallery?: string[];
    } | null;
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } }
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900/50 backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        style={{
                            background: `linear-gradient(145deg, ${project.color}15, #0a0a0a)`,
                            borderColor: `${project.color}20`,
                            boxShadow: `0 0 50px ${project.color}10`
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Section - Locked height on mobile, full height on desktop */}
                        <div className="w-full md:w-1/2 h-[300px] md:h-auto shrink-0 bg-black/50 relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover/contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:hidden" />
                        </div>

                        {/* Content Section - Scrollable */}
                        <div
                            className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar min-h-0 overscroll-y-contain relative z-10"
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-white/10" style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}>
                                    Case Study
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-white/10 bg-white/5 text-gray-400">
                                    {project?.company ? `Developed at ${project.company}` : `Developed as a ${project?.type}`}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mb-8 shrink-0">
                                {!project.live ? (
                                    <button
                                        disabled
                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-500 cursor-not-allowed transition-all"
                                    >
                                        <span>Live Demo (Private)</span>
                                        <ExternalLink size={18} />
                                    </button>
                                ) : (
                                    <>
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
                                        >
                                            <span>Live Demo</span>
                                            <ExternalLink size={18} />
                                        </Link>
                                        {project.liveAdmin && (
                                            <Link
                                                href={project.liveAdmin}
                                                target="_blank"
                                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
                                            >
                                                <span>Live Admin Demo</span>
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                    </>
                                )}

                                {!project.github ? (
                                    <button
                                        disabled
                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-500 cursor-not-allowed transition-all"
                                    >
                                        <Github size={20} />
                                        <span>Company Repository (Private)</span>
                                    </button>
                                ) : (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all group"
                                    >
                                        <Github size={20} />
                                        <span>View Source</span>
                                    </Link>
                                )}
                            </div>

                            <div className="space-y-6 flex-grow">
                                <h3 className="text-xl font-semibold text-white">Overview</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {project.description || "No description available for this project."}
                                </p>

                                {project.features && (
                                    <>
                                        <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                                    <ChevronRight className="mt-1 flex-shrink-0" size={16} style={{ color: project.color }} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {project.details && (
                                    <div className="mt-8 space-y-6">
                                        <h3 className="text-xl font-semibold text-white">System Architecture & Features</h3>
                                        <div className="space-y-4">
                                            {project.details.map((detail, i) => (
                                                <div key={i} className="border-l-2 pl-4" style={{ borderColor: project.color }}>
                                                    <h4 className="text-white font-medium mb-1">{detail.title}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{detail.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>


                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
