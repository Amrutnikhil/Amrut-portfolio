'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'Jan 2026 — Present',
    title: 'Research Intern — Autonomous Industrial Robot',
    company: 'L&T Construction & PES University',
    description: [
      'Contributed to building an autonomous industrial floor tile laying robot, spanning mechanical design, electrical systems, embedded software, and system integration from concept to working prototype.',
      'Designed the complete mechanical architecture including robot chassis, aluminium extrusion frame, payload support structure, and modular assemblies using Fusion 360 and SolidWorks.',
      'Architected the electrical system — power distribution, motor drivers, sensor fusion circuits, and wiring harnesses — ensuring reliable communication across robotic subsystems.',
      'Deployed NVIDIA Jetson Nano for onboard embedded processing, integrating LiDAR, IMU, encoders, and ToF sensors with closed-loop motor control for precision operation.',
      'Developed ROS-based navigation and motion-control algorithms, enabling autonomous path planning and real-time obstacle avoidance.',
      'Built embedded HMI interfaces for operator interaction, system monitoring, and real-time status visualization on the robot platform.',
      'Participated in BOM development, component selection, prototype testing, and design reviews throughout the product development lifecycle.',
    ],
    tags: [
      'ROS',
      'Jetson Nano',
      'LiDAR',
      'IMU',
      'Fusion 360',
      'SolidWorks',
      'Python',
      'C++',
      'OpenCV',
      'HMI Design',
    ],
  },
  {
    date: 'Short-Term Research',
    title: 'UAV Systems Researcher',
    company: 'Indian Institute of Science (IISc) — UAV Laboratory',
    description: [
      'Conducted research on UAV flight dynamics, propulsion systems, avionics architectures, and onboard electronics for autonomous aerial platforms at the IISc UAV Laboratory.',
      'Assisted in designing and prototyping a UAV platform — contributing to airframe development, propulsion system selection, weight optimization, and component placement for flight stability.',
      'Gained hands-on experience with drone architecture, sensor integration, flight controllers, and mission planning for autonomous aerial systems.',
      'Applied principles of aerodynamics, structural design, and embedded electronics to develop a functional drone prototype.',
    ],
    tags: [
      'UAV Design',
      'Flight Dynamics',
      'Sensor Integration',
      'Propulsion Systems',
      'Avionics',
      'Prototyping',
    ],
  },
  {
    date: 'Jun 2025 — Aug 2025',
    title: 'Artificial Intelligence Intern',
    company: 'Virtual Internship',
    description: [
      'Designed and developed an AI Agent workflow automation pipeline capable of executing multi-step tasks with minimal human intervention using Agentic AI frameworks.',
      'Trained and evaluated machine learning models for task classification and automation, achieving approximately 85% accuracy on evaluation datasets.',
      'Built end-to-end AI systems integrating LLM-based reasoning, tool usage, and adaptive decision-making for workflow optimization.',
    ],
    tags: ['Python', 'Machine Learning', 'Agentic AI', 'LLMs', 'Prompt Engineering'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050505] section-padding section-divider">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">EXPERIENCE</div>
        <h2 className="section-heading">Work Experience</h2>

        <div className="mt-12 space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-[#00D4FF] border-4 border-[#050505]" />

              {/* Date Badge */}
              <div className="badge-accent inline-block mb-3">{exp.date}</div>

              {/* Content Card */}
              <div className="card-base p-6 card-hover">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{exp.company}</p>

                {/* Description Bullets */}
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#00D4FF] flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
