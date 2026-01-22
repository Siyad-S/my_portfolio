'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '@/lib/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper-custom.css'; // We might need this for custom styles, or just use Tailwind

export default function ProjectSlider() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />

            <div className="relative group w-full py-8">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="w-full !pb-14"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="!w-[300px] md:!w-[450px] !flex !justify-center">
                            <div className="w-full transition-all duration-300 hover:scale-105">
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
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev-custom absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/50 border border-white/10 rounded-full text-white cursor-pointer hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all backdrop-blur-sm">
                        <ChevronLeft size={24} />
                    </div>
                    <div className="swiper-button-next-custom absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/50 border border-white/10 rounded-full text-white cursor-pointer hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all backdrop-blur-sm">
                        <ChevronRight size={24} />
                    </div>

                    {/* Custom Pagination Style Override */}
                    <style jsx global>{`
                        .swiper-pagination-bullet {
                            background: rgba(255, 255, 255, 0.5);
                        }
                        .swiper-pagination-bullet-active {
                            background: #00f3ff; /* neon-cyan */
                        }
                    `}</style>
                </Swiper>
            </div>
        </>
    );
}
