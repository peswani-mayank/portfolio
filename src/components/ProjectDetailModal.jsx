import React from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Calendar, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 border border-teal-200/90 shadow-2xl p-6 sm:p-8 text-left text-slate-800 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-teal-700 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-300/60 font-semibold">
            {project.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            {project.date}
          </span>
          <span>•</span>
          <span className="text-teal-800 font-semibold">{project.status}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-slate-200">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 shadow-md transition-all"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 text-xs font-mono">
              <span>Live Demo: Configurable in data/projects.js</span>
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

        {/* Technical Implementation Details */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-teal-800 font-mono mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-teal-600" />
            <span>Architecture & Technical Implementation</span>
          </h4>
          <div className="space-y-2.5 bg-teal-50/60 p-4 rounded-xl border border-teal-200/70">
            {project.technicalImplementation.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-mono mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Engineered Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 p-2.5 rounded-lg border border-slate-200/80">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">
            Technologies & APIs Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-teal-50/80 text-xs font-mono text-teal-900 border border-teal-200/80 font-medium"
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