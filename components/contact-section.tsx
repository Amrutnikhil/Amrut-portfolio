'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Briefcase, GitBranch, Download } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amrutnikhil2004@gmail.com',
      link: 'mailto:amrutnikhil2004@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8019383723',
      link: 'tel:+918019383723',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'linkedin.com/in/amrut-badri-524651277',
      link: 'https://linkedin.com/in/amrut-badri-524651277',
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/amrut',
      link: 'https://github.com/amrut',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#050505]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#00D4FF] text-sm tracking-widest uppercase mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something Together</h2>
          <p className="text-gray-400 text-lg mb-12">Open to opportunities in robotics, AI, game development, and engineering</p>
        </motion.div>

        <motion.div className="card-base p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <motion.div
            className="space-y-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                  variants={itemVariants}
                >
                  <Icon className="w-5 h-5 text-[#00D4FF] group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.label}</div>
                    <div className="text-sm text-white group-hover:text-[#00D4FF] transition-colors duration-200">{contact.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-[#00D4FF] text-black font-semibold rounded-lg px-8 py-3 hover:bg-[#00D4FF]/90 transition-all duration-200 flex items-center justify-center gap-2 inline-flex mt-4"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
