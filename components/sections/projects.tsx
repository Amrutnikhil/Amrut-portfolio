'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks';
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: 'Autonomous Floor Tile Laying Robot',
      description: 'L&T Funded Research Project - A fully autonomous robot system for precision floor tile placement with advanced motion planning and perception.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      technologies: ['ROS2', 'Jetson Nano', 'LiDAR', 'CAD Design', 'Motion Planning'],
      features: [
        'Mechanical system design',
        'ROS2 integration',
        'LiDAR mapping',
        'Motion planning',
        'Vacuum gripper system',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Computer Vision System',
      description: 'Advanced computer vision pipeline for real-time object detection and tracking using deep learning models.',
      image: 'https://images.unsplash.com/photo-1591696205602-3ec5d8cf2c4a?w=500&h=400&fit=crop',
      technologies: ['OpenCV', 'Python', 'TensorFlow', 'CUDA'],
      features: [
        'Real-time detection',
        'Multi-object tracking',
        'Custom model training',
        'GPU acceleration',
        'Live video processing',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Embedded Systems Platform',
      description: 'Custom embedded platform for robotic control with real-time operating system capabilities and sensor fusion.',
      image: 'https://images.unsplash.com/photo-1573166364572-db1b8fc801d0?w=500&h=400&fit=crop',
      technologies: ['C++', 'RTOS', 'ARM', 'Sensor Fusion'],
      features: [
        'Multi-sensor integration',
        'Real-time control',
        'Low-latency processing',
        'Power optimization',
        'Wireless communication',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Navigation Agent',
      description: 'Autonomous navigation system using reinforcement learning and path planning algorithms for robotics.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b891?w=500&h=400&fit=crop',
      technologies: ['Python', 'PyTorch', 'ROS2', 'Navigation Stack'],
      features: [
        'Path planning',
        'Obstacle avoidance',
        'ML-based prediction',
        'Real-time optimization',
        'Multi-robot coordination',
      ],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 opacity-5 -translate-x-1/2">
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
            Featured Projects
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-electric-blue to-transparent mb-12"
          />

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass rounded-lg overflow-hidden h-full flex flex-col hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all duration-300">
                  {/* Project image */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: 45 }}
                        whileHover={{ scale: 1.1, rotate: 135 }}
                        className="w-10 h-10 rounded-lg bg-electric-blue/20 flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 text-electric-blue" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Features</p>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {project.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1 h-1 bg-electric-blue rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-white/30"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 px-4 py-2 rounded-lg bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue flex items-center justify-center gap-2 transition-all duration-300 border border-electric-blue/30 hover:border-electric-blue/60"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
