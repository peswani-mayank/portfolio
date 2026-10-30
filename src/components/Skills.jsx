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
    <section id="skills" className="py-20 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>EXPERTISE & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Categorized technical capabilities, core computer science concepts, frameworks, and developer workflows.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold shadow-md shadow-teal-500/20'
                : 'bg-white/80 text-slate-700 hover:text-teal-900 hover:bg-white border border-teal-200/80 shadow-xs'
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
                  ? 'bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold shadow-md shadow-teal-500/20'
                  : 'bg-white/80 text-slate-700 hover:text-teal-900 hover:bg-white border border-teal-200/80 shadow-xs'
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
                className="rounded-2xl bg-white/70 backdrop-blur-md border border-teal-100/90 hover:border-teal-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl shadow-xs group text-left"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = skillIcons[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50/70 hover:bg-teal-100/80 border border-teal-200/60 hover:border-teal-300 text-slate-800 text-xs font-medium transition-all group/badge hover:-translate-y-0.5"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-teal-600 group-hover/badge:scale-110 transition-transform" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Verified Skillset</span>
                  <span className="text-teal-700 font-semibold">Ready to Deploy</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
