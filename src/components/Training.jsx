import React from 'react';
import { Calendar, CheckCircle2, Code2, ArrowRight } from 'lucide-react';
import { trainings } from '../data/training';

export default function Training() {
  return (
    <section id="training" className="py-20 bg-white/35 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>STRUCTURED LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Training & Technical Development
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Intensive algorithmic problem solving and practical data structures implementation.
          </p>
        </div>

        {/* Training Cards */}
        <div className="max-w-5xl mx-auto">
          {trainings.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 p-6 sm:p-8 lg:p-10 shadow-xl transition-all group text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800">
                      {item.focus}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Project Highlight Box */}
                  <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-teal-800 uppercase tracking-wider font-semibold">
                        Capstone Project
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-sky-100 border border-sky-200 text-xs font-mono text-sky-800 font-semibold">
                        {item.project.language}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900">
                      {item.project.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.project.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {item.project.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
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
                        className="px-2.5 py-1 rounded-md bg-teal-50/80 text-[11px] font-mono text-teal-900 border border-teal-200/80"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right DSA Themed Visual */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-[#0c1424] border border-teal-900/60 p-5 font-mono text-xs space-y-4 shadow-xl text-slate-300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>DataStructures.cpp</span>
                      </div>
                      <span className="text-emerald-400">Compiled (g++ -O3)</span>
                    </div>

                    {/* Linked List Visualization */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Dynamic Task Node Chain</span>
                        <span className="text-teal-300 text-[10px]">O(1) Insertion</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] overflow-x-auto py-1">
                        <div className="px-2 py-1.5 rounded bg-teal-500/20 border border-teal-500/40 text-teal-200 font-bold">
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
                          <span className="text-teal-300 font-bold">O(1) Stack Operation</span>
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