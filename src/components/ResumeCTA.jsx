import React from 'react';
import { FileText, Download, ArrowRight, Eye } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumeCTA({ onOpenResume }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Mayank_Peswani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onOpenResume();
  };

  return (
    <section className="py-16 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle ambient light behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400">
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interested in my work?
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Explore my projects, technical experience and development journey.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 hover:border-slate-600 transition-all shadow-sm group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="pt-3 text-xs font-mono text-slate-500">
              Target File: <span className="text-slate-400">{personalInfo.resumePath}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
