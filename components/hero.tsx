'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 fade-in-up">
          <div className="border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-sm px-4 py-2 rounded-full">
            ENGINEER • DEVELOPER • DESIGNER
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
          Building Intelligent
          <br />
          <span className="text-[#00D4FF]">Systems & Experiences</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          Robotics | AI & Machine Learning | Game Development | Embedded Systems | UI/UX Design | Product Development
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn-secondary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '10+', label: 'Technical Projects' },
            { value: 'L&T + IISc', label: 'Research Experience' },
            { value: 'AI/ML', label: '& Robotics' },
            { value: 'Full-Stack', label: 'Product Builder' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
