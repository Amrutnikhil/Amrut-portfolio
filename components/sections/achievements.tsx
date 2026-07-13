'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks';

export function Achievements() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const achievements = [
    {
      year: '2024',
      title: 'L&T Funded Research Project',
      description: 'Developed autonomous floor tile laying robot with complete mechanical design and embedded systems integration',
      icon: '🤖',
      status: 'Completed',
      color: 'from-electric-blue to-blue-600',
    },
    {
      year: '2024',
      title: 'ROS2 Advanced Integration',
      description: 'Implemented complex robot control systems using ROS2 middleware with real-time performance',
      icon: '⚙️',
      status: 'In Progress',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      year: '2023-2024',
      title: 'Computer Vision Development',
      description: 'Created advanced perception systems using OpenCV and deep learning for autonomous navigation',
      icon: '👁️',
      status: 'Completed',
      color: 'from-cyan-400 to-teal-500',
    },
    {
      year: '2023',
      title: 'Product Design & Prototyping',
      description: 'Designed and prototyped multiple robotics systems from concept to functional prototypes',
      icon: '🔧',
      status: 'Completed',
      color: 'from-teal-500 to-green-600',
    },
    {
      year: '2022-2023',
      title: 'AI & Machine Learning Projects',
      description: 'Developed AI models for object detection, segmentation, and autonomous decision-making',
      icon: '🧠',
      status: 'Completed',
      color: 'from-green-500 to-emerald-600',
    },
    {
      year: '2022',
      title: 'Embedded Systems Expertise',
      description: 'Mastered embedded systems programming on Jetson Nano and ARM-based microcontrollers',
      icon: '💾',
      status: 'Completed',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 opacity-5 translate-x-1/2">
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
            Achievements & Timeline
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-electric-blue to-transparent mb-12"
          />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-electric-blue/50 to-transparent transform -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <div
                      className={`glass rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                        <span className="text-2xl ml-4">{achievement.icon}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{achievement.year}</span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            achievement.status === 'Completed'
                              ? 'bg-electric-blue/20 text-electric-blue'
                              : 'bg-amber-500/20 text-amber-400'
                          }`}
                        >
                          {achievement.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline point */}
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 rounded-full border-4 border-black bg-electric-blue animate-pulse-glow" />
                      <div className="absolute inset-0 w-6 h-6 rounded-full border-4 border-electric-blue/30 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Mobile timeline point */}
                  <div className="md:hidden absolute left-0 top-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative"
                    >
                      <div className="w-5 h-5 rounded-full border-3 border-black bg-electric-blue" />
                    </motion.div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden h-4" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-4 gap-4">
            {[
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies Mastered', value: '20+' },
              { label: 'Research Contributions', value: '3+' },
              { label: 'Awards & Recognition', value: '5+' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all">
                <div className="text-3xl font-bold text-electric-blue mb-2">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
