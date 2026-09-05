import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';
import { educations } from '../data/education';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { certifications } from '../data/certifications';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Mayank_Peswani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0d1322] border border-slate-700/80 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm sm:text-base">Mayank_Peswani_CV.pdf</span>
            <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              Verified Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#090d16] text-slate-200 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-cyan-400 mt-1">
              {personalInfo.primaryTitle} • {personalInfo.secondaryTitles}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {educations.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">{edu.degree} in {edu.field}</span>
                    <div className="text-slate-400">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                    <span className="text-emerald-400 font-bold">{edu.score}</span>
                    <div className="text-slate-500">{edu.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="font-bold text-slate-200 block mb-1">{cat.title}:</span>
                  <span className="text-slate-400 font-mono leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Experience
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <span className="font-bold text-white">{exp.role} — <span className="text-cyan-400">{exp.organization}</span></span>
                    <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs mt-2">
                    {exp.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400">{proj.date}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                  <div className="text-[11px] font-mono text-cyan-400">
                    <span className="text-slate-400">Tech: </span>
                    {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{c.title}</div>
                    <div className="text-slate-400">{c.issuer}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">{c.date}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
