'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Robotics',
      skills: ['ROS2', 'ROS', 'Motion Planning', 'Sensor Fusion', 'Robot Kinematics', 'Path Planning'],
      color: '#00D4FF',
    },
    {
      title: 'Embedded Systems',
      skills: ['C++', 'C', 'Jetson Nano', 'ARM', 'RTOS', 'Microcontrollers'],
      color: '#00A8CC',
    },
    {
      title: 'Computer Vision & AI',
      skills: ['OpenCV', 'TensorFlow', 'PyTorch', 'Object Detection', 'Image Processing', 'Deep Learning'],
      color: '#0098B2',
    },
    {
      title: 'CAD & Design',
      skills: ['Fusion 360', 'SolidWorks', 'AutoCAD', 'Mechanical Design', 'PCB Design', 'Simulation'],
      color: '#006B82',
    },
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'MATLAB'],
      color: '#004A5C',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Linux', 'Docker', 'Gazebo', 'RViz', 'VS Code'],
      color: '#00D4FF',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-black to-dark-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <div className="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-electric-blue to-transparent mb-12"
          />

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass rounded-lg p-6 h-full hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: category.color }}
                    />
                    <h3 className="text-lg font-semibold text-white group-hover:text-electric-blue transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Proficiency</span>
                      <span>90%+</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: '90%' } : { width: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: category.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Radar visualization concept */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-lg p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Skill Matrix</h3>
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto max-h-80"
            >
              {/* Concentric circles */}
              {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                <circle
                  key={`circle-${i}`}
                  cx="200"
                  cy="200"
                  r={100 * scale}
                  fill="none"
                  stroke="rgba(0,212,255,0.2)"
                  strokeWidth="1"
                />
              ))}

              {/* Radar spokes */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const x = 200 + Math.cos(angle - Math.PI / 2) * 100;
                const y = 200 + Math.sin(angle - Math.PI / 2) * 100;
                return (
                  <line
                    key={`spoke-${i}`}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke="rgba(0,212,255,0.15)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Polygon vertices */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const r = 75;
                const x = 200 + Math.cos(angle) * r;
                const y = 200 + Math.sin(angle) * r;
                return (
                  <circle
                    key={`vertex-${i}`}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#00D4FF"
                    opacity="0.8"
                  />
                );
              })}

              {/* Polygon */}
              <polygon
                points={Array.from({ length: 6 })
                  .map((_, i) => {
                    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                    const r = 75;
                    const x = 200 + Math.cos(angle) * r;
                    const y = 200 + Math.sin(angle) * r;
                    return `${x},${y}`;
                  })
                  .join(' ')}
                fill="rgba(0,212,255,0.1)"
                stroke="#00D4FF"
                strokeWidth="2"
                opacity="0.7"
              />

              {/* Labels */}
              {['Robotics', 'Embedded', 'Vision', 'CAD', 'Programming', 'Tools'].map((label, i) => {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 130;
                const y = 200 + Math.sin(angle) * 130;
                return (
                  <text
                    key={`label-${i}`}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill="#00D4FF"
                    fontSize="12"
                    fontWeight="500"
                  >
                    {label}
                  </text>
                );
              })}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
