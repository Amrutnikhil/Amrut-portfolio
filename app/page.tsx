import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import CertificationsSection from '@/components/certifications-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
