'use client';

import { GitBranch, Mail, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 Amrut B Nargund | Built with precision engineering
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amrut-badri-524651277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            >
              <Briefcase size={20} />
            </a>
            <a
              href="mailto:amrutnikhil2004@gmail.com"
              className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
