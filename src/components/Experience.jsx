import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GitPullRequest, Users2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Contribution Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Hands-on open-source development, collaborative engineering, and community leadership experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central guide line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500/50 to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.type === 'Open Source' ? GitPullRequest : Users2;

              return (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-500/30 z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 text-left">
                    <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      
                      {/* Badge and Duration */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          exp.badge === 'Active' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {exp.type} • {exp.badge}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-medium text-cyan-400 mb-4 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.organization}</span>
                      </h4>

                      {/* Bullet points strictly as specified */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech / Skills Badges */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
