import React, { useState } from 'react';
import { 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Sun, 
  Sparkles, 
  Bot, 
  Layers, 
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
    <section id="projects" className="py-24 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
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
                className="rounded-3xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 group text-left"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReverse ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl bg-[#0b111e] border border-slate-800 p-4 sm:p-5 shadow-xl overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                      
                      {/* Decorative ambient gradient inside card */}
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.themeColor} rounded-full blur-2xl pointer-events-none`} />

                      {/* Travel Project Visual: Urban Tourism Optimizer */}
                      {project.visualType === 'travel' && (
                        <div className="space-y-3.5 relative z-10 font-sans text-xs">
                          {/* Mini browser top bar */}
                          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              <span className="ml-2 text-cyan-400">urban-tour-optimizer.app</span>
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
                                <MapPin className="w-3 h-3 text-cyan-400" />
                                <span>Multi-Point Proximity & Route Cache</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                              <Sparkles className="w-3 h-3" />
                              <span>Gemini AI Ranked</span>
                            </div>
                          </div>

                          {/* Itinerary Timeline Stops */}
                          <div className="space-y-2">
                            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
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
                                <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                                  02
                                </span>
                                <div>
                                  <div className="font-semibold text-slate-200">Artisan Market & Culinary Walk</div>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                                    <span className="flex items-center gap-0.5"><Navigation className="w-3 h-3 text-cyan-400" /> 1.2 km (8 min transit)</span>
                                    <span>•</span>
                                    <span>Geoapify Optimized</span>
                                  </div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                                Proximity Top Pick
                              </span>
                            </div>
                          </div>

                          {/* API Integration Tags Footer */}
                          <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>APIs: Geoapify • Google Places • OpenWeather</span>
                            <span className="text-cyan-400 font-semibold">JWT Protected</span>
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
                              <span className="ml-2 text-violet-400">VOIDRA DevAssist v1.0</span>
                            </div>
                            <span className="text-violet-400 font-semibold flex items-center gap-1">
                              <Bot className="w-3 h-3" />
                              Gemini Flash + Llama 3
                            </span>
                          </div>

                          {/* 3 Modular Components Switcher */}
                          <div className="grid grid-cols-3 gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-[11px] text-center">
                            <div className="py-1.5 rounded-lg bg-violet-600 text-white font-semibold shadow-sm">
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
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-violet-500/30 space-y-2">
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
                            <span className="text-violet-300">Context-Aware LLM Runtime</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Category & Status Bar */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${project.accentBadge}`}>
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{project.date}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mt-1">
                        {project.summary}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Key Features Chips (Top 4) */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Key Features & Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
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
                            className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60"
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
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span 
                          title="Configure live demo URL in src/data/projects.js"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/60 cursor-default"
                        >
                          <span className="w-2 h-2 rounded-full bg-slate-500" />
                          <span>Live Demo (Configurable)</span>
                        </span>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                        <span>GitHub</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all"
                      >
                        <Info className="w-3.5 h-3.5" />
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
