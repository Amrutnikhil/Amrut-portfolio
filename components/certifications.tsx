'use client';

import { motion } from 'framer-motion';

const certs = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning Certification',
    issuer: 'SMARTED',
    description:
      'Completed comprehensive AI and machine learning certification covering agentic AI workflows, model training, task automation, and intelligent system design. Applied learned concepts to build production-ready AI agent pipelines.',
  },
  {
    icon: '⚡',
    title: 'Static Timing Analysis (STA) Badge',
    issuer: 'Cadence Design Systems',
    description:
      'Earned the Cadence STA badge demonstrating proficiency in digital VLSI timing verification — including setup/hold analysis, clock network optimization, SDC constraints, timing closure with Cadence Tempus, and multi-mode multi-corner (MMMC) analysis for ASIC design signoff.',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#050505] section-padding section-divider"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label">CERTIFICATIONS</div>
        <h2 className="section-heading">Certifications & Badges</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-base p-6 card-hover"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{cert.issuer}</p>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
