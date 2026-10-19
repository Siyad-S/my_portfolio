'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Terminal, Compass, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-[#050505] text-white selection:bg-neon-cyan selection:text-black">
      {/* Background ambient neon glow effects */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-cyan/15 rounded-full blur-[140px] opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px] opacity-60"
      />

      {/* Cyberpunk background grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-neon-cyan uppercase mb-6 backdrop-blur-md shadow-lg shadow-black/20"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span>Error 404 // Route Desynchronized</span>
        </motion.div>

        {/* 404 Glitch / Gradient Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none my-2"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-none bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,243,255,0.25)]">
            404
          </h1>
          <div 
            aria-hidden="true" 
            className="absolute inset-0 text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-none text-neon-cyan/20 blur-sm pointer-events-none -z-10"
          >
            404
          </div>
        </motion.div>

        {/* Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            Lost in the Digital Void
            <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            The destination coordinates you requested do not exist in this sector or have been collapsed into deep space.
          </p>
        </motion.div>

        {/* Terminal Diagnostic Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-8 text-left font-mono text-xs text-gray-300 backdrop-blur-md shadow-2xl relative group overflow-hidden"
        >
          {/* Top Bar of Terminal */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[11px] text-gray-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                system_diagnostics.log
              </span>
            </div>
            <span className="text-[10px] text-neon-purple tracking-widest uppercase">FAIL_SAFE_ENGAGED</span>
          </div>

          {/* Diagnostic Log Lines */}
          <div className="space-y-1.5 text-[11px] sm:text-xs">
            <p className="text-gray-400">
              <span className="text-neon-cyan">&gt;</span> STATUS: <span className="text-rose-400 font-semibold">404 NOT_FOUND</span>
            </p>
            <p className="text-gray-400">
              <span className="text-neon-cyan">&gt;</span> PROTOCOL: <span className="text-gray-200">HTTP/2_TRANSMISSION</span>
            </p>
            <p className="text-gray-400">
              <span className="text-neon-cyan">&gt;</span> RESOLUTION: <span className="text-gray-200">Reroute to safe node or return home</span>
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-neon-cyan text-black font-semibold text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)] hover:bg-white transition-all duration-300 group"
          >
            <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Return to Orbit</span>
          </Link>

          <Link
            href="/#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 group"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Explore Work</span>
          </Link>
        </motion.div>

        {/* Quick Sector Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-500"
        >
          <span>QUICK NODES:</span>
          <Link href="/#about" className="hover:text-neon-cyan transition-colors">
            // ABOUT
          </Link>
          <span className="text-white/10">•</span>
          <Link href="/#skills" className="hover:text-neon-cyan transition-colors">
            // SKILLS
          </Link>
          <span className="text-white/10">•</span>
          <Link href="/#experience" className="hover:text-neon-cyan transition-colors">
            // EXPERIENCE
          </Link>
          <span className="text-white/10">•</span>
          <Link href="/#contact" className="hover:text-neon-cyan transition-colors">
            // CONTACT
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
