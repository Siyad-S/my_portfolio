'use client';

import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400; // Approximate card width
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />

            <div className="relative group">
                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 p-2 md:p-3 bg-black/50 border border-white/10 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-neon-cyan/20 hover:text-neon-cyan"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 p-2 md:p-3 bg-black/50 border border-white/10 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-neon-cyan/20 hover:text-neon-cyan"
                    aria-label="Scroll Right"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slider Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="min-w-[85vw] md:min-w-[400px] snap-center">
                            <ProjectCard
                                title={project.title}
                                tech={project.tech}
                                image={project.image}
                                github={project.github}
                                live={project.live}
                                color={project.color}
                                onClick={() => setSelectedProject(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
