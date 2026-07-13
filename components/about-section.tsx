'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const specialties = [
    { emoji: '🤖', title: 'Robotics & Automation' },
    { emoji: '🧠', title: 'AI & Machine Learning' },
    { emoji: '🎮', title: 'Game Development' },
    { emoji: '⚡', title: 'Embedded Systems' },
    { emoji: '🎨', title: 'UI/UX Design' },
    { emoji: '👁️', title: 'Computer Vision' },
    { emoji: '🔧', title: 'Mechanical Design & CAD' },
    { emoji: '📊', title: 'Data Analytics' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">About</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              Final-year Electronics & Communication Engineering student at PES University, Bengaluru, with a Minor in Computer Science. I'm a multidisciplinary engineer who builds across robotics, AI, game development, and full-stack applications — working at the intersection of hardware, software, and design.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              From designing autonomous robots with ROS and Jetson Nano, to training ML models and building agentic AI pipelines, to creating game environments in Unreal Engine and Godot, to crafting UI/UX in Figma — I bring a unique breadth of technical skills that lets me tackle problems from multiple angles.
            </p>
          </motion.div>

          {/* Right Column - Specialty Cards Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base card-hover p-4 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {specialty.emoji}
                </div>
                <div className="text-sm font-medium text-gray-200">{specialty.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
