'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';
import { AnimatedGrid } from '@/components/background/animated-grid';
import { CustomCursor } from '@/components/background/custom-cursor';

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background elements */}
      <AnimatedGrid />
      <CustomCursor />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2024 Robotics Engineer. Designed with Framer Motion, Three.js, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
