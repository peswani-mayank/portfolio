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
      setIsScrolled(window.scrollY > 15);

      // Track active section with viewport offset
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const navOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100/80 transition-all duration-300 ${
        isScrolled ? 'py-2.5 shadow-sm shadow-teal-900/5' : 'py-3.5 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* LEFT: Brand Identity (Never clipped) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl p-1"
          aria-label="Mayank Peswani Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-50 to-sky-100 border border-teal-300/80 group-hover:border-teal-500 transition-colors shadow-2xs shrink-0">
            <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600 font-mono">
              {personalInfo.initials}
            </span>
            <div className="absolute -inset-0.5 rounded-xl bg-teal-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
          
          <div className="text-left">
            <div className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors whitespace-nowrap">
              {personalInfo.name}
            </div>
            <div className="text-[11px] font-mono text-slate-500 leading-none whitespace-nowrap">
              {personalInfo.primaryTitle}
            </div>
          </div>
        </a>

        {/* CENTER: Desktop Navigation Links (Clean pill dock for large viewports) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-teal-100/90 shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 xl:px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-teal-900 bg-teal-500/15 border border-teal-300/60 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-teal-800 hover:bg-teal-50/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white/90 hover:bg-white hover:text-teal-700 border border-slate-200/90 hover:border-teal-300 shadow-2xs transition-all cursor-pointer"
            title="Open Resume Preview & Download"
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 rounded-xl shadow-sm shadow-teal-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-teal-800 bg-white/90 hover:bg-teal-50 border border-teal-200/80 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors shadow-2xs cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-teal-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-teal-100 px-5 py-5 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-900 border border-teal-300/60 font-semibold'
                      : 'text-slate-700 hover:bg-teal-50/70 hover:text-teal-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>View Resume</span>
            </button>
            
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 rounded-xl shadow-md shadow-teal-500/20"
            >
              <span>Get In Touch (Let's Talk)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}