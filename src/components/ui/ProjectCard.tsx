'use client';

// @ts-ignore
import { Tilt } from 'react-tilt';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Tooltip from './Tooltip';

interface ProjectCardProps {
    title: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    color: string; // dominant color for glow
    onClick?: () => void;
}

export default function ProjectCard({ title, tech, image, github, live, color, onClick }: ProjectCardProps) {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <Tilt options={defaultOptions} className="w-full h-full">
            <div
                onClick={onClick}
                className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 group bg-gray-900/40 backdrop-blur-sm cursor-pointer"
                style={{ boxShadow: `0 0 0px ${color}00` }} // Dynamic glow base
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                {/* Thumbnail Placeholder - In real app use Next/Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})`, opacity: 0.6 }}
                />

                {/* Glow Effect on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
                />

                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/5 text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {github ? (
                            <Tooltip content="View Source">
                                <Link
                                    href={github}
                                    target="_blank"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors block"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={20} />
                                </Link>
                            </Tooltip>
                        ) : (
                            <Tooltip content="Private Repository">
                                <button
                                    disabled
                                    className="p-2 bg-white/5 rounded-full text-white/20 cursor-not-allowed block"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={20} />
                                </button>
                            </Tooltip>
                        )}
                        {live ? (
                            <Tooltip content="Live Demo">
                                <Link
                                    href={live}
                                    target="_blank"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors block"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </Tooltip>
                        ) : (
                            <Tooltip content="Private Deployment">
                                <button
                                    disabled
                                    className="p-2 bg-white/5 rounded-full text-white/20 cursor-not-allowed block"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={20} />
                                </button>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </div>
        </Tilt>
    );
}
