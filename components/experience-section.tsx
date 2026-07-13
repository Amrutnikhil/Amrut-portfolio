'use client';

import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      date: 'Jan 2026 — Present',
      title: 'Research Intern — Autonomous Industrial Robot',
      company: 'L&T Construction & PES University',
      bullets: [
        'Contributed to building an autonomous industrial floor tile laying robot — spanning mechanical design, electrical architecture, embedded software, and full system integration from concept to prototype.',
        'Designed the mechanical architecture including robot chassis, aluminium extrusion frame, and modular assemblies using Fusion 360 and SolidWorks. Performed load calculations, actuator selection, and structural analysis.',
        'Architected the electrical system — power distribution, motor drivers, sensor circuits, and wiring harnesses for reliable communication across subsystems.',
        'Deployed NVIDIA Jetson Nano for onboard processing, integrating LiDAR, IMU, and encoders with closed-loop motor control for precision operation.',
        'Developed ROS-based navigation, motion-control algorithms, and embedded HMI interfaces for operator interaction and system monitoring.',
        'Led BOM development, component selection, prototype testing, and design reviews across the full product lifecycle.',
      ],
      tech: ['ROS', 'Jetson Nano', 'LiDAR', 'Fusion 360', 'SolidWorks', 'Python', 'C++', 'OpenCV', 'HMI Design'],
    },
    {
      date: 'Short-Term Research',
      title: 'UAV Systems Researcher',
      company: 'Indian Institute of Science (IISc) — UAV Laboratory',
      bullets: [
        'Conducted research on UAV flight dynamics, propulsion systems, avionics, and onboard electronics for autonomous aerial platforms.',
        'Assisted in designing and prototyping a UAV platform — airframe development, propulsion selection, weight optimization, and component placement.',
        'Applied aerodynamics, structural design, and embedded electronics principles to develop a functional drone prototype.',
      ],
      tech: ['UAV Design', 'Flight Dynamics', 'Sensor Integration', 'Propulsion', 'Prototyping'],
    },
    {
      date: 'Jun 2025 — Aug 2025',
      title: 'Artificial Intelligence Intern',
      company: 'Virtual Internship',
      bullets: [
        'Designed and built an AI Agent workflow automation pipeline using Agentic AI frameworks, capable of multi-step task execution with minimal human intervention.',
        'Trained and evaluated ML models for task classification and automation, achieving approximately 85% accuracy.',
        'Built end-to-end AI systems integrating LLM-based reasoning, tool usage, and adaptive decision-making.',
      ],
      tech: ['Python', 'Machine Learning', 'Agentic AI', 'LLMs', 'Prompt Engineering'],
    },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Work Experience</h2>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} className="relative pl-12 md:pl-16" variants={itemVariants}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-4 top-2 w-3 h-3 rounded-full bg-[#00D4FF] md:left-[18px]" />

                {/* Content Card */}
                <div className="card-base card-hover p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 md:text-right">{exp.date}</div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-gray-300 flex gap-3">
                        <span className="text-[#00D4FF] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
