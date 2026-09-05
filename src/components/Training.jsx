import React from 'react';
import { BookOpen, Calendar, CheckCircle2, Code2, Cpu, ArrowRight } from 'lucide-react';
import { trainings } from '../data/training';

export default function Training() {
  return (
    <section id="training" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>STRUCTURED LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Training & Technical Development
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Intensive algorithmic problem solving and practical data structures implementation.
          </p>
        </div>

        {/* Training Cards */}
        <div className="max-w-5xl mx-auto">
          {trainings.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all group text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-medium text-cyan-400">
                      {item.focus}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Project Highlight Box */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                        Capstone Project
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
                        {item.project.language}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {item.project.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.project.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {item.project.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Topics Covered Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.project.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right DSA Themed Visual */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#0b101c] border border-slate-800 p-5 font-mono text-xs space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>DataStructures.cpp</span>
                      </div>
                      <span className="text-emerald-400">Compiled (g++ -O3)</span>
                    </div>

                    {/* Linked List Visualization */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Dynamic Task Node Chain</span>
                        <span className="text-cyan-400 text-[10px]">O(1) Insertion</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] overflow-x-auto py-1">
                        <div className="px-2 py-1.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold">
                          Head
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                        <div className="px-2 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
                          Task[0]
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                        <div className="px-2 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
                          Task[1]
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                        <div className="px-2 py-1.5 rounded bg-slate-800/60 border border-dashed border-slate-700 text-slate-400">
                          Null
                        </div>
                      </div>
                    </div>

                    {/* Algorithm Efficiency Breakdown */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="text-[11px] font-bold text-slate-300">Complexity Benchmarks</div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded bg-black/40 border border-slate-800">
                          <span className="text-slate-400 block">Task Search:</span>
                          <span className="text-emerald-400 font-bold">O(log n) Binary Search</span>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-slate-800">
                          <span className="text-slate-400 block">Undo / Redo:</span>
                          <span className="text-cyan-400 font-bold">O(1) Stack Operation</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 pt-1 flex items-center justify-between">
                      <span>Memory: Stack & Heap Profiling</span>
                      <span className="text-emerald-400">Zero Leaks</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
