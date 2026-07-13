'use client';

import { motion } from 'framer-motion';

const CertificationsSection = () => {
  const certifications = [
    {
      icon: '🧠',
      title: 'AI & Machine Learning Certification',
      issuer: 'SMARTED',
      description: 'Comprehensive AI/ML certification covering agentic AI workflows, model training, task automation, and intelligent system design. Applied concepts to build production-ready AI agent pipelines.',
    },
    {
      icon: '⚡',
      title: 'Static Timing Analysis (STA) Badge',
      issuer: 'Cadence Design Systems',
      description: 'Proficiency in digital VLSI timing verification — setup/hold analysis, clock network optimization, SDC constraints, timing closure with Cadence Tempus, and multi-mode multi-corner (MMMC) analysis for ASIC design.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Certifications</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Certifications & Badges</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} className="card-base card-hover p-6" variants={itemVariants}>
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-[#00D4FF] font-semibold mb-3">{cert.issuer}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
