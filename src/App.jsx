import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Education from './components/Education';
import OpenSource from './components/OpenSource';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundEffect from './components/BackgroundEffect';
import HeroScene from './components/HeroScene';
export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f0fdfa] via-[#f0f9ff] to-[#ecfdf5] text-slate-800 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      {/* Ambient Arctic Mint & Glacier Blue lighting */}
      <BackgroundEffect />

      {/* Persistent single transparent 3D Canvas across the entire universe */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <HeroScene />
      </div>

      {/* Navigation - Fixed top bar above all content */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1 w-full">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Certifications />
        <Education />
        <OpenSource />
        <ResumeCTA onOpenResume={handleOpenResume} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
