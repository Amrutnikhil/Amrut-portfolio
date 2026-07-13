'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '../three/hero-scene';
import { useCountUp } from '@/lib/hooks';

export function Hero() {
  const projects = useCountUp(10, 2000);
  const research = useCountUp(1, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-black via-dark-gray to-black" />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <motion.div
          className="max-w-5xl mx-auto w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-2">Designing Intelligent</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-white glow-electric">
                Robotics Systems
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light"
          >
            Robotics Engineer | Embedded Systems | Autonomous Navigation | Product Development
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {[
              { label: 'Technical Projects', value: projects, suffix: '+' },
              { label: 'L&T Research', value: research, suffix: '' },
              { label: 'ROS2 Development', value: '5+', suffix: '' },
              { label: 'AI & Vision', value: '8+', suffix: '' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={statVariants}
                className="glass rounded-lg p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-electric-blue mb-1">
                  {typeof stat.value === 'string' ? stat.value : `${stat.value}${stat.suffix}`}
                </div>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button className="relative px-8 py-3 text-white font-semibold rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-electric-blue transition-transform duration-300 group-hover:scale-110" />
              <span className="relative block">View Projects</span>
            </button>

            <button className="relative px-8 py-3 text-electric-blue font-semibold rounded-lg border border-electric-blue/50 hover:border-electric-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              <span>Download Resume</span>
            </button>

            <button className="relative px-8 py-3 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300">
              <span>Get in Touch</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-electric-blue rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
