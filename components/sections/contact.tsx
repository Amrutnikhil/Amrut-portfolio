'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks';
import { Mail, Briefcase, GitBranch, Download, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: 'from-electric-blue to-blue-500',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com/yourprofile',
      color: 'from-cyan-400 to-teal-500',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-dark-gray to-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <div className="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <div className="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
          >
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>

          {/* Main contact card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 mb-8 border-2 border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300"
          >
            {/* Contact methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contacts.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-electric-blue/50 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center group-hover:from-electric-blue/40 group-hover:to-electric-blue/20 transition-all">
                        <Icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{contact.label}</p>
                        <p className="text-white font-semibold group-hover:text-electric-blue transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="relative px-8 py-4 text-white font-semibold rounded-lg overflow-hidden group flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]" />
                <span className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </motion.a>

              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.02 }}
                className="relative px-8 py-4 text-electric-blue font-semibold rounded-lg border-2 border-electric-blue/50 hover:border-electric-blue transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                  Send Email
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Or explore my work directly on my GitHub and LinkedIn profiles.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              >
                <GitBranch className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              >
                <Briefcase className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-electric-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
