'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Briefcase, GitBranch } from 'lucide-react';

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
    link: 'https://www.linkedin.com/in/amrut-badri-524651277',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/amrut',
    link: 'https://github.com/dashboard',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] section-padding section-divider">
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-label">CONTACT</div>
        <h2 className="section-heading">Let&apos;s Build Something Together</h2>
        <p className="text-gray-400 mt-4">
          Open to opportunities in robotics, embedded systems, and engineering
        </p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-base p-8 mt-12"
        >
          <div className="space-y-4 text-left mb-8">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <Icon size={20} className="text-[#00D4FF] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-[#00D4FF] transition-colors">
                      {contact.label}
                    </div>
                    <div className="text-sm mt-1 group-hover:text-[#00D4FF] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            className="btn-primary w-full text-center block"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
