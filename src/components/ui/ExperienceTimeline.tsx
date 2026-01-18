'use client';

import { experience } from '@/lib/data';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceTimeline() {
    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent blur-[2px]" />
            </div>

            <div className="space-y-12 md:space-y-20">
                {experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 md:top-8 w-4 h-4 -translate-x-1/2 rounded-full z-10">
                            <div className="w-full h-full bg-neon-cyan rounded-full shadow-[0_0_15px_rgba(0,243,255,0.8)] animate-pulse" />
                            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                            <div className="relative group">
                                {/* Border Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/50 to-purple-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

                                {/* Card Body */}
                                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/5 transition-colors duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.company}</h3>

                                    <div className={`flex flex-wrap gap-4 items-center mb-4 text-neon-cyan ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                        <div className="flex items-center gap-2 text-sm bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
                                            <Briefcase size={14} />
                                            <span>{item.role}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Calendar size={14} />
                                            <span>{item.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <ul className={`space-y-2 ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="flex gap-2 items-start text-sm text-gray-400">
                                                <span className="text-neon-cyan mt-1.5">•</span>
                                                <span className={index % 2 !== 0 ? 'md:text-right' : ''}>
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Spacer for the other side */}
                        <div className="hidden md:block md:w-[calc(50%-40px)]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
