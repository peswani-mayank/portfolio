import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumeCTA({ onOpenResume }) {

  return (
    <section className="py-16 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-teal-50/90 via-white/95 to-sky-50/90 backdrop-blur-xl border border-teal-200/90 p-8 sm:p-12 shadow-xl overflow-hidden text-center">
          
          {/* Subtle ambient light behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-teal-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800">
              <FileText className="w-3.5 h-3.5 text-teal-600" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interested in my work?
            </h2>

            <p className="text-base sm:text-lg text-slate-600">
              Explore my projects, technical experience and development journey.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.resumePath}
                download="Mayank_Peswani_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-teal-800 border border-slate-200 hover:border-teal-300 transition-all shadow-xs group"
              >
                <Download className="w-4 h-4 text-teal-600 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="pt-3 text-xs font-mono text-slate-500">
              Target File: <span className="text-teal-700 font-semibold">{personalInfo.resumePath}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}