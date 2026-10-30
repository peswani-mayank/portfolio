import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/50 backdrop-blur-md border-t border-teal-100/80 py-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Identity & Subtitle */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-xs font-mono text-teal-800 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-300/60 font-semibold">
                {personalInfo.initials}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              {personalInfo.headline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-teal-300 transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-sky-300 transition-colors shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-teal-50 hover:bg-gradient-to-r hover:from-teal-500 hover:to-sky-600 hover:text-white text-teal-700 transition-all ml-3 group border border-teal-200/80 shadow-xs"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-teal-700">
            <span>My Digital Twin — An Interactive Developer Universe</span>
          </div>
        </div>

      </div>
    </footer>
  );
}