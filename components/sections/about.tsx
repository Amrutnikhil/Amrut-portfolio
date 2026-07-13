'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const specializations = [
    'Robotics',
    'Embedded Systems',
    'Computer Vision',
    'Autonomous Navigation',
    'Mechanical Design',
    'Product Development',
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-black overflow-hidden">
      {/* Background grid decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-electric-blue to-transparent mb-12"
          />

          {/* Main content grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left column - Bio */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="glass rounded-lg p-8">
                <h3 className="text-xl font-semibold text-electric-blue mb-4">
                  Final-Year Electronics & Communication Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m a robotics engineer and embedded systems specialist at PES University, passionate about developing intelligent systems that solve real-world problems. With a minor in Computer Science and hands-on experience in research and product development, I focus on creating sophisticated robotics solutions that combine mechanical engineering, embedded systems, and artificial intelligence.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Currently, I&apos;m working on autonomous systems and have contributed to an L&T funded research project involving advanced robotics development.
                </p>
              </div>
            </motion.div>

            {/* Right column - Stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">10+</div>
                <p className="text-sm text-gray-400">Technical Projects</p>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">5+</div>
                <p className="text-sm text-gray-400">Years Learning</p>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">PES</div>
                <p className="text-sm text-gray-400">University</p>
              </div>
            </motion.div>
          </div>

          {/* Specializations */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Core Specializations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specializations.map((spec, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-4 text-center cursor-pointer group"
                >
                  <p className="text-white group-hover:text-electric-blue transition-colors">{spec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience timeline */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold mb-8">Experience Highlights</h3>
            <div className="space-y-6">
              <div className="glass rounded-lg p-6 border-l-4 border-electric-blue">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">L&T Funded Research Intern</h4>
                  <span className="text-xs text-electric-blue">2024</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Developed an autonomous floor tile laying robot with complete mechanical design and embedded systems integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Robotics', 'ROS2', 'Jetson Nano', 'CAD Design'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass rounded-lg p-6 border-l-4 border-white/20">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">Robotics Development</h4>
                  <span className="text-xs text-gray-400">Ongoing</span>
                </div>
                <p className="text-gray-400">
                  Building advanced robotics systems with computer vision, LiDAR integration, and autonomous navigation capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
