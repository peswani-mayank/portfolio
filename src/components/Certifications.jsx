import React from 'react';
import { Award, Calendar, CheckCircle2, ShieldCheck, Database, Sparkles } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
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
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 group text-left flex flex-col justify-between"
              >
                <div>
                  {/* Top issuer row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.badgeColor} border ${cert.badgeBorder} flex items-center justify-center ${cert.badgeText}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                          {cert.issuer}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {cert.credentialType}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer status */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Credential
                  </span>
                  <span className="text-slate-500">Official Exam / Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
