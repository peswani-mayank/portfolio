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
    <section id="about" className="py-20 bg-white/35 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Photo Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 max-w-6xl mx-auto text-left">
          
          {/* Left: Professional Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Subtle ambient lighting effect */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-teal-400/25 via-sky-400/20 to-emerald-300/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-teal-200/90 group-hover:border-teal-400 shadow-xl bg-white/80 backdrop-blur-xl transition-all">
                {/* Image */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-teal-50/60">
                  <img
                    src="/images/mayank-peswani.jpg"
                    alt="Mayank Peswani — Software Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Badge Card */}
                <div className="p-5 bg-white/95 border-t border-teal-100">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-mono text-teal-700">
                        {personalInfo.primaryTitle}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-teal-500/10 text-teal-800 border border-teal-300/60 font-semibold">
                      🟢 Active SDE
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                      <span>LPU CSE '28</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-600" />
                      <span>Sikar • Phagwara</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-teal-100/90 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ASPIRING SOFTWARE DEVELOPER & CONTINUOUS LEARNER</span>
              </div>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                I am a Computer Science and Engineering student at Lovely Professional University with a strong interest in software development and practical engineering.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                My hands-on experience centers on full-stack web development and AI-powered applications, combined with active open-source contributions. I focus on building practical software solutions that solve real-world problems and continuously strive to improve my programming, algorithmic, and architectural problem-solving skills.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-teal-900">
                <span className="px-3 py-1.5 rounded-lg bg-teal-50/80 border border-teal-200">
                  Full-Stack Applications
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-50/80 border border-sky-200">
                  AI/ML & LLM Integrations
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200">
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
                className="group relative p-6 rounded-2xl bg-white/60 hover:bg-white/95 border border-teal-100/90 hover:border-teal-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-sky-600 group-hover:text-white group-hover:scale-110 transition-all mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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