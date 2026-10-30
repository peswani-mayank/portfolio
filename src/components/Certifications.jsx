import React from 'react';
import { Calendar, ShieldCheck, Database, Sparkles } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Verified industry qualifications in Artificial Intelligence, Cloud Infrastructure, and Database Management Systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => {
            const isOracle = cert.issuer === 'Oracle';
            const Icon = isOracle ? Sparkles : Database;

            return (
              <div
                key={cert.id}
                className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 group text-left flex flex-col justify-between"
              >
                <div>
                  {/* Top issuer row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.badgeColor} border ${cert.badgeBorder} flex items-center justify-center ${cert.badgeText} shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-teal-800 font-semibold uppercase tracking-wider">
                          {cert.issuer}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {cert.credentialType}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-4">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-teal-50/80 text-[11px] font-mono text-teal-900 border border-teal-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer status */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-teal-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    Verified Credential
                  </span>
                  <span className="text-slate-400">Official Exam / Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}