import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GitPullRequest, Users2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white/35 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work & Contribution Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Hands-on open-source development, collaborative engineering, and community leadership experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central guide line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-teal-500 via-sky-400 to-teal-200" />

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
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-teal-500 text-teal-700 shadow-md shadow-teal-500/20 z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 text-left">
                    <div className="p-6 sm:p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      
                      {/* Badge and Duration */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          exp.badge === 'Active' 
                            ? 'bg-teal-500/10 text-teal-800 border border-teal-300/60 font-semibold'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}>
                          {exp.type} • {exp.badge}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-teal-600" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-medium text-teal-700 mb-4 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.organization}</span>
                      </h4>

                      {/* Bullet points strictly as specified */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech / Skills Badges */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-teal-50/80 text-[11px] font-mono text-teal-900 border border-teal-200/80"
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