'use client';

import { motion } from 'framer-motion';

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

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#050505] section-padding section-divider"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label">EDUCATION</div>
        <h2 className="section-heading">Education</h2>

        <div className="space-y-6 mt-12 max-w-3xl">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-base p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{edu.school}</h3>
                  <p className="text-gray-400 text-sm mt-2">{edu.degree}</p>
                  <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">
                    {edu.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
