'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center pt-20 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="inline-block mb-6" variants={itemVariants}>
          <div className="border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-sm px-4 py-2 rounded-full uppercase tracking-wider">
            Engineer • Developer • Designer
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" variants={itemVariants}>
          Building Intelligent <br />
          <span className="text-[#00D4FF]">Systems & Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8" variants={itemVariants}>
          Robotics | AI & Machine Learning | Game Development | Embedded Systems | UI/UX Design | Product Development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-16" variants={itemVariants}>
          <a
            href="#projects"
            className="bg-[#00D4FF] text-black font-semibold rounded-lg px-6 py-3 hover:bg-[#00D4FF]/90 transition-all duration-200 inline-block"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="border border-white/20 text-white font-semibold rounded-lg px-6 py-3 hover:border-white/40 hover:bg-white/5 transition-all duration-200 inline-block"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white font-semibold rounded-lg px-6 py-3 hover:border-white/40 hover:bg-white/5 transition-all duration-200 inline-block"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16" variants={containerVariants}>
          {[
            { value: '10+', label: 'Technical Projects' },
            { value: 'L&T + IISc', label: 'Research Experience' },
            { value: 'AI/ML', label: '& Robotics' },
            { value: 'Full-Stack', label: 'Product Builder' },
          ].map((stat, i) => (
            <motion.div key={i} className="text-center" variants={itemVariants}>
              <div className="text-3xl md:text-4xl font-bold text-[#00D4FF] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
