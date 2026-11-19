import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectGallery from './components/ProjectGallery';
import SkillsSection from './components/SkillsSection';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <AboutSection />
        <ProjectGallery />
        <SkillsSection />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
