'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { View } from '@react-three/drei';
import Navbar from '@/components/layout/Navbar';
import Parallax from '@/components/ui/Parallax';
import ProjectSlider from '@/components/ui/ProjectSlider';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';
import ContactForm from '@/components/ui/ContactForm';
import { projects, socials, aboutMe } from '@/lib/data';
import * as Icons from 'lucide-react';
import Scene from '@/components/canvas/Scene';
// @ts-ignore
import { Tilt } from 'react-tilt';

// Dynamic imports for 3D components
const ParticleHelix = dynamic(() => import('@/components/canvas/HeroParticles'), { ssr: false });
const TechCarousel = dynamic(() => import('@/components/canvas/SkillCarousel'), { ssr: false });
const ContactWave = dynamic(() => import('@/components/canvas/ContactWave'), { ssr: false });
const ScrollIndicator = dynamic(() => import('@/components/ui/ScrollIndicator'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-10% 0px -10% 0px' }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (workRef.current) observer.observe(workRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    // Hero Text Stagger
    gsap.from(".hero-text-char", {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    });
  }, { scope: container });

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div ref={container} className="relative w-full overflow-x-hidden">

        {/* GLOBAL 3D SCENE (Background canvas) */}
        <Scene />

        {/* HERO SECTION */}
        <section id="home" ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* 3D View for Hero - Puts 3D content here */}
          <View index={1} className="absolute inset-0 z-0">
            <ParticleHelix />
          </View>

          <div className="relative z-10 text-center px-4 mix-blend-difference">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tight text-white mb-6 select-none">
              <span className="hero-text-char inline-block">S</span>
              <span className="hero-text-char inline-block">I</span>
              <span className="hero-text-char inline-block">Y</span>
              <span className="hero-text-char inline-block">A</span>
              <span className="hero-text-char inline-block">D</span>
              <span className="inline-block m-2"></span>
              <span className="hero-text-char inline-block">S</span>
            </h1>
            <h2 className="text-xl md:text-4xl font-light text-gray-300 tracking-widest uppercase mb-8">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {socials.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 text-gray-400 group"
                    aria-label={social.name}
                  >
                    {Icon ? <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /> : social.name}
                  </a>
                );
              })}
            </div>
            {/* Scroll Indicator for Hero */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <ScrollIndicator targetId="about" direction="down" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="relative py-20 md:py-32 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8">
              <Parallax speed={0.8}>
                <h2 className="text-sm font-bold tracking-[0.2em] text-neon-cyan uppercase mb-4">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  {aboutMe[0].title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
                  {aboutMe[0].description}
                </p>
              </Parallax>
            </div>
            {/* Image / 3D Container - Now with 2D Tilt Interaction */}
            <Tilt className="h-[300px] md:h-[500px] w-full" options={{ max: 10, scale: 1.02, speed: 500, glaze: true }}>
              {/* Premium Container with rounded corners and shadow */}
              <div className="relative w-full h-full overflow-hidden border border-white/10 group rounded-lg shadow-2xl shadow-neon-cyan/20 bg-gray-900">

                {/* Premium Overlay / Lighting */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />

                {/* Image: Grayscale to Color */}
                <img
                  src={aboutMe[0].imagePath}
                  alt="About Me"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Cyber Border Effect */}
                <div className="absolute inset-0 border border-white/5 z-20 pointer-events-none rounded-lg" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-neon-cyan/50 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,243,255,0.2)] rounded-lg" />
              </div>
            </Tilt>
          </div>
        </section>

        {/* TECH STACK CAROUSEL */}
        <section id="skills" ref={skillsRef} className="relative py-32 h-[80vh] flex items-center justify-center bg-black/20 overflow-hidden">
          <div ref={techRef} className="absolute inset-0 w-full h-full">
            <View index={2} className="w-full h-full">
              <TechCarousel />
            </View>
          </div>
          <div className="pointer-events-none z-10 text-center">
            <h2 className="text-4xl font-bold text-white/10 uppercase tracking-widest">Skills</h2>
          </div>

          {/* Scroll Indicators for Skills */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
            <ScrollIndicator targetId="about" direction="up" />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <ScrollIndicator targetId="experience" direction="down" />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" ref={experienceRef} className="relative py-20 md:py-32 px-6 bg-black/40">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-neon-cyan uppercase mb-4">Brief History</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h3>
            </div>

            <ExperienceTimeline />

            {/* Scroll Indicators for Experience */}
            <div className="flex justify-center mt-16 relative z-20">
              <ScrollIndicator targetId="work" direction="down" />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - THE GRID */}
        <section id="work" ref={workRef} className="relative py-20 md:py-32 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Worked Projects</h2>
            <div className="w-full">
              <ProjectSlider />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" ref={contactRef} className="relative py-20 md:py-32 px-6 border-t border-white/5 overflow-hidden">
          {/* 3D Background for Contact Section */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <View index={3} className="w-full h-full">
              <ContactWave />
            </View>
          </div>

          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Let's work together.</h2>
              <p className="text-xl text-gray-400">Have a project in mind? Let's build something amazing.</p>
            </div>

            <div className="w-full max-w-5xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            {socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as any;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  {Icon ? <Icon size={20} /> : social.name}
                </a>
              );
            })}
          </div>
          <p>© {new Date().getFullYear()} Build by Siyad S. All rights reserved.</p>
        </footer>
      </div >
    </>
  );
}
