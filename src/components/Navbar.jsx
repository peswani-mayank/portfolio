import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Training', href: '#training' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          aria-label="Mayank Peswani Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 group-hover:border-cyan-400/80 transition-colors shadow-sm">
            <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
              {personalInfo.initials}
            </span>
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </div>
            <div className="text-[11px] font-mono text-slate-400 leading-none">
              {personalInfo.primaryTitle}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-800/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Compact Desktop Navigation for Medium/Large Screens */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 bg-slate-900/50 px-2 py-1.5 rounded-full border border-slate-800/60 text-xs">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-cyan-300 bg-cyan-500/15'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-2.5 py-1 text-slate-400 hover:text-slate-200 rounded-full"
          >
            Contact
          </a>
        </nav>

        {/* Resume Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-cyan-300 border border-slate-700/70 hover:border-cyan-500/40 rounded-lg transition-all shadow-sm group"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-5 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md shadow-cyan-500/20"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
