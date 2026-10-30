import React, { useState } from 'react';
import { 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Bot, 
  Info,
  CheckCircle2,
  Navigation,
  Clock,
  Terminal
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Full-stack architectures and AI-integrated applications built with modern engineering workflows, external APIs, and practical problem solving.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group text-left"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReverse ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 to-[#0b1320] border border-teal-900/60 p-4 sm:p-5 shadow-2xl overflow-hidden group-hover:border-teal-400/50 transition-colors">
                      
                      {/* Decorative ambient gradient inside card */}
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.themeColor} rounded-full blur-2xl opacity-40 pointer-events-none`} />

                      {/* Travel Project Visual: Urban Tourism Optimizer */}
                      {project.visualType === 'travel' && (
                        <div className="space-y-3.5 relative z-10 font-sans text-xs">
                          {/* Mini browser top bar */}
                          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              <span className="ml-2 text-teal-300">urban-tour-optimizer.app</span>
                            </div>
                            <span className="text-emerald-400 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live Dynamic Engine
                            </span>
                          </div>

                          {/* Itinerary Overview Header */}
                          <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                            <div>
                              <div className="font-bold text-white text-sm">Day-Wise Optimized Itinerary</div>
                              <div className="text-slate-400 flex items-center gap-1 text-[11px] mt-0.5">
                                <MapPin className="w-3 h-3 text-teal-400" />
                                <span>Multi-Point Proximity & Route Cache</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-[11px]">
                              <Sparkles className="w-3 h-3" />
                              <span>Gemini AI Ranked</span>
                            </div>
                          </div>

                          {/* Itinerary Timeline Stops */}
                          <div className="space-y-2">
                            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                                  01
                                </span>
                                <div>
                                  <div className="font-semibold text-slate-200">Heritage Cultural Quarter</div>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                                    <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> 09:30 AM - 11:30 AM</span>
                                    <span>•</span>
                                    <span>⭐ 4.8 Rating</span>
                                  </div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                                OpenWeather: 24°C
                              </span>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs">
                                  02
                                </span>
                                <div>
                                  <div className="font-semibold text-slate-200">Artisan Market & Culinary Walk</div>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                                    <span className="flex items-center gap-0.5"><Navigation className="w-3 h-3 text-teal-400" /> 1.2 km (8 min transit)</span>
                                    <span>•</span>
                                    <span>Geoapify Optimized</span>
                                  </div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-teal-300 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                                Proximity Top Pick
                              </span>
                            </div>
                          </div>

                          {/* API Integration Tags Footer */}
                          <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>APIs: Geoapify • Google Places • OpenWeather</span>
                            <span className="text-teal-300 font-semibold">JWT Protected</span>
                          </div>
                        </div>
                      )}

                      {/* AI Developer Assistant Visual: VOIDRA DevAssist */}
                      {project.visualType === 'ai-terminal' && (
                        <div className="space-y-3 relative z-10 font-mono text-xs">
                          {/* Mini browser top bar */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              <span className="ml-2 text-sky-300">VOIDRA DevAssist v1.0</span>
                            </div>
                            <span className="text-sky-300 font-semibold flex items-center gap-1">
                              <Bot className="w-3 h-3" />
                              Gemini Flash + Llama 3
                            </span>
                          </div>

                          {/* 3 Modular Components Switcher */}
                          <div className="grid grid-cols-3 gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-[11px] text-center">
                            <div className="py-1.5 rounded-lg bg-teal-600 text-white font-semibold shadow-sm">
                              Code Debugger
                            </div>
                            <div className="py-1.5 rounded-lg text-slate-400 hover:text-white">
                              Code Upgrader
                            </div>
                            <div className="py-1.5 rounded-lg text-slate-400 hover:text-white">
                              Code Generator
                            </div>
                          </div>

                          {/* Root-cause Analysis Output */}
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-teal-500/30 space-y-2">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-amber-400 flex items-center gap-1 font-semibold">
                                <Terminal className="w-3 h-3" />
                                Root-Cause Diagnosed
                              </span>
                              <span className="text-emerald-400">Fix Confidence: 99.4%</span>
                            </div>
                            <div className="p-2 rounded bg-black/60 text-[11px] text-slate-300 leading-relaxed font-mono">
                              <div className="text-rose-400">- const memoized = cache.get(userQuery);</div>
                              <div className="text-emerald-400">+ const memoized = await cache.get(normalize(userQuery));</div>
                              <div className="text-slate-500 text-[10px] mt-1">// Automated Bug Fix & Context Persistence Applied</div>
                            </div>
                          </div>

                          {/* Status and 3D Interactive Tag */}
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                            <span>Three.js Visual Canvas</span>
                            <span className="text-sky-300">Context-Aware LLM Runtime</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Category & Status Bar */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-teal-500/10 border-teal-300/60 text-teal-900">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        <span>{project.date}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-teal-500/10 text-teal-800 border border-teal-300/60">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-teal-700 font-semibold mt-1">
                        {project.summary}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Key Features Chips (Top 4) */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                        Key Features & Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-teal-50/80 text-[11px] font-mono text-teal-900 border border-teal-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 shadow-md shadow-teal-500/20 transition-all hover:-translate-y-0.5"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span 
                          title="Configure live demo URL in src/data/projects.js"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 cursor-default"
                        >
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          <span>Live Demo (Configurable)</span>
                        </span>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white hover:text-teal-800 border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-600" />
                        <span>GitHub</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-teal-800 hover:text-teal-900 bg-teal-50/80 hover:bg-teal-100/90 border border-teal-200/80 transition-all shadow-xs"
                      >
                        <Info className="w-3.5 h-3.5 text-teal-600" />
                        <span>Technical Breakdown</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}