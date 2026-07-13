'use client';

import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      icon: '🎓',
      school: 'PES University, Bengaluru, Karnataka',
      degree: 'B.Tech in Electronics & Communication Engineering (Major) with Minor in Computer Science',
      year: '2022 — 2026',
    },
    {
      icon: '🏫',
      school: 'NRI Junior College, Guntur',
      degree: 'Andhra Pradesh Board of Education',
      year: '2020 — 2022',
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
    <section id="education" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Education</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Education</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} className="card-base card-hover p-6" variants={itemVariants}>
              <div className="text-3xl mb-4">{edu.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{edu.school}</h3>
              <p className="text-gray-300 text-sm mb-3">{edu.degree}</p>
              <p className="text-xs text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
