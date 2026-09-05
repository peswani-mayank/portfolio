import React from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b111e] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            {project.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">{project.status}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-slate-800">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 text-xs font-mono">
              <span>Live Demo: Configurable in data/projects.js</span>
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

        {/* Technical Implementation Details */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Technical Implementation</span>
          </h4>
          <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            {project.technicalImplementation.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Engineered Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & APIs Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
