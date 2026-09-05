import React from 'react';
import { Brain, Layers, Cpu, GitBranch, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const highlightIcons = {
  Brain: Brain,
  Layers: Layers,
  Cpu: Cpu,
  GitBranch: GitBranch
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Photo Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 max-w-6xl mx-auto text-left">
          
          {/* Left: Professional Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Subtle ambient lighting effect */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 group-hover:border-cyan-500/50 shadow-2xl bg-[#0b111e] transition-all">
                {/* Image */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-900">
                  <img
                    src="/images/mayank-peswani.jpg"
                    alt="Mayank Peswani — Software Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Badge Card */}
                <div className="p-5 bg-gradient-to-b from-slate-900/95 to-[#0b111e] border-t border-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        {personalInfo.primaryTitle}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      🟢 Active SDE
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                      <span>LPU CSE '28</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Sikar • Phagwara</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ASPIRING SOFTWARE DEVELOPER & CONTINUOUS LEARNER</span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                I am a Computer Science and Engineering student at Lovely Professional University with a strong interest in software development and practical engineering.
              </p>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                My hands-on experience centers on full-stack web development and AI-powered applications, combined with active open-source contributions. I focus on building practical software solutions that solve real-world problems and continuously strive to improve my programming, algorithmic, and architectural problem-solving skills.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  Full-Stack Applications
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  AI/ML & LLM Integrations
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  SSoC Open Source
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.aboutHighlights.map((item, index) => {
            const IconComponent = highlightIcons[item.icon] || Brain;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
