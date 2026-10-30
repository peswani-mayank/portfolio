import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educations } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white/35 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Academic qualifications, coursework rigor, and scholastic performance history.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 -ml-px w-0.5 bg-gradient-to-b from-teal-400 via-sky-400 to-teal-200" />

          <div className="space-y-10">
            {educations.map((edu) => (
              <div key={edu.id} className="relative flex items-start pl-12 sm:pl-20 text-left">
                
                {/* Node icon */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-teal-500 text-teal-700 shadow-md shadow-teal-500/20">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="w-full p-6 sm:p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  
                  {/* Top row: Status & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-teal-500/10 text-teal-800 border border-teal-300/60">
                      {edu.degree}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-sky-600" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Institution & Field */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-medium text-slate-600 mb-4">
                    {edu.field}
                  </div>

                  {/* Score pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50/80 border border-teal-200/80 mb-4">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-mono text-slate-600">{edu.scoreLabel}:</span>
                    <span className="text-xs font-mono font-bold text-teal-800">{edu.score}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
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