'use client';

import { motion } from 'framer-motion';

const specializations = [
  { icon: '🤖', title: 'Robotics & Automation', description: '' },
  { icon: '⚡', title: 'Embedded Systems', description: '' },
  { icon: '👁️', title: 'Computer Vision', description: '' },
  { icon: '✈️', title: 'UAV Systems', description: '' },
  { icon: '🔧', title: 'Mechanical Design & CAD', description: '' },
  { icon: '📦', title: 'Product Development', description: '' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] section-padding section-divider"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label">ABOUT</div>
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Column */}
          <div className="space-y-6 text-gray-300">
            <p>
              Final-year Electronics & Communication Engineering student at PES University, Bengaluru, with a Minor in Computer Science. I work at the intersection of hardware and software — designing robotic systems, building embedded solutions, and developing intelligent applications that solve real-world engineering problems.
            </p>
            <p>
              My experience spans the full product development lifecycle: from mechanical design and CAD modeling in Fusion 360 and SolidWorks, to electrical architecture and sensor integration, to embedded programming on platforms like NVIDIA Jetson Nano, and high-level AI and computer vision algorithms. I thrive in multidisciplinary environments where robotics, electronics, and computer science converge.
            </p>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {specializations.map((spec, idx) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="card-base p-4 card-hover text-center"
              >
                <div className="text-3xl mb-2">{spec.icon}</div>
                <div className="text-sm font-semibold text-white">{spec.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
