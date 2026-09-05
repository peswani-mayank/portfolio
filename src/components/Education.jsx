import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educations } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Academic qualifications, coursework rigor, and scholastic performance history.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 -ml-px w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800" />

          <div className="space-y-10">
            {educations.map((edu, index) => (
              <div key={edu.id} className="relative flex items-start pl-12 sm:pl-20 text-left">
                
                {/* Node icon */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-500/30">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="w-full p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  
                  {/* Top row: Status & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {edu.degree}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Institution & Field */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-medium text-slate-300 mb-4">
                    {edu.field}
                  </div>

                  {/* Score pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 mb-4">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-slate-400">{edu.scoreLabel}:</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{edu.score}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-slate-800/70 pt-3">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
