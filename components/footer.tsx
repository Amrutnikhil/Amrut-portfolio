'use client';

import { GitBranch, Mail, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-500 text-sm">
          © 2025 Amrut B Nargund
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/amrut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitBranch size={20} />
          </a>
          <a
            href="https://linkedin.com/in/amrut-badri-524651277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Briefcase size={20} />
          </a>
          <a
            href="mailto:amrutnikhil2004@gmail.com"
            className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
