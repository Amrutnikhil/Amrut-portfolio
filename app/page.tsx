import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Certifications from '@/components/certifications';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
