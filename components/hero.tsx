'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050505] section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex mb-8">
          <div className="badge-accent">ROBOTICS & EMBEDDED SYSTEMS ENGINEER</div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Designing Intelligent{' '}
          <span className="text-[#00D4FF]">Robotics Systems</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
          Robotics Engineer | Embedded Systems | Autonomous Systems | Product Development
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <a href="/resume.pdf" className="btn-secondary">
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-[#00D4FF]">10+</div>
            <div className="text-sm text-gray-400 mt-2">Technical Projects</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-[#00D4FF]">L&T</div>
            <div className="text-sm text-gray-400 mt-2">Funded Research</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-[#00D4FF]">IISc</div>
            <div className="text-sm text-gray-400 mt-2">UAV Research</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-[#00D4FF]">ROS</div>
            <div className="text-sm text-gray-400 mt-2">& Embedded Systems</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
