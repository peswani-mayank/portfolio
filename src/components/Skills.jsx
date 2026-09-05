import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  BrainCircuit, 
  Sparkles, 
  Users, 
  FileCode, 
  FileCode2, 
  Binary, 
  Terminal, 
  Coffee, 
  Cpu, 
  Layout, 
  Palette, 
  Atom, 
  Server, 
  Route, 
  Box, 
  Table, 
  GitBranch, 
  Monitor, 
  Network, 
  Boxes, 
  ServerCrash, 
  Wifi, 
  Webhook, 
  ShieldCheck, 
  Bot, 
  MessageSquareText, 
  CheckCircle2, 
  Lightbulb, 
  Users2, 
  RefreshCw, 
  MessageCircle 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillCategories } from '../data/skills';

const categoryIcons = {
  Code2,
  Layers,
  Database,
  BrainCircuit,
  Sparkles,
  Users
};

const skillIcons = {
  FileCode,
  FileCode2,
  Binary,
  Terminal,
  Coffee,
  Cpu,
  Layout,
  Palette,
  Atom,
  Server,
  Route,
  Box,
  Database,
  Table,
  GitBranch,
  Github: GithubIcon,
  Monitor,
  Network,
  Boxes,
  ServerCrash,
  Wifi,
  Webhook,
  ShieldCheck,
  Sparkles,
  Bot,
  MessageSquareText,
  CheckCircle2,
  Lightbulb,
  Users2,
  RefreshCw,
  MessageCircle
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>EXPERTISE & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Categorized technical capabilities, core computer science concepts, frameworks, and developer workflows.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const CatIcon = categoryIcons[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group text-left"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = skillIcons[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/40 text-slate-200 text-xs font-medium transition-all group/badge hover:-translate-y-0.5"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-cyan-400 group-hover/badge:scale-110 transition-transform" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Verified Skillset</span>
                  <span className="text-cyan-400/80">Ready to Deploy</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
