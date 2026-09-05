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

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Ambient background effect */}
      <BackgroundEffect />

      {/* Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
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
