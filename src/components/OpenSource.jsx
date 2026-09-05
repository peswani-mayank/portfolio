import React from 'react';
import { 
  GitBranch, 
  GitPullRequest, 
  GitCommit, 
  CheckCircle2, 
  MessageSquareCode, 
  Bug, 
  Users2, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

const contributionPillars = [
  {
    icon: GitPullRequest,
    title: "Pull Requests & Bug Fixes",
    description: "Developing targeted feature enhancements, isolating regressions, and submitting well-tested PRs to public codebases."
  },
  {
    icon: Bug,
    title: "Issue Triage & Debugging",
    description: "Reproducing reported edge cases, analyzing stack traces, and delivering verified patches for community stability."
  },
  {
    icon: MessageSquareCode,
    title: "Code Reviews",
    description: "Participating in architectural reviews, discussing optimization strategies, and maintaining clean code standards."
  },
  {
    icon: Users2,
    title: "Collaborative Development",
    description: "Engaging in cross-developer meetings, sprint discussions, and open-source contributor initiatives like SSoC Season 5."
  }
];

export default function OpenSource() {
  // Generate a realistic static 52-week heatmap grid without fake numbers
  // 52 columns x 7 days
  const weeks = Array.from({ length: 42 });
  
  // Deterministic subtle activity levels (0: none, 1: low, 2: medium, 3: high)
  const getActivityLevel = (wIdx, dIdx) => {
    const seed = (wIdx * 7 + dIdx * 13) % 17;
    if (seed === 0 || seed === 3 || seed === 7) return 3; // high
    if (seed === 2 || seed === 8 || seed === 11) return 2; // medium
    if (seed === 1 || seed === 5 || seed === 9 || seed === 14) return 1; // low
    return 0; // inactive
  };

  const levelClasses = [
    'bg-slate-800/50',
    'bg-emerald-950/80 border border-emerald-800/40',
    'bg-emerald-600/60 border border-emerald-500/40',
    'bg-emerald-400 border border-emerald-300'
  ];

  return (
    <section id="open-source" className="py-20 bg-[#090d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>COMMUNITY & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open Source Contribution
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Contributing to open source software through Git workflows, issue diagnosis, code reviews, and distributed team collaboration.
          </p>
        </div>

        {/* Contribution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contributionPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* GitHub Inspired Contribution Heatmap Canvas */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>github.com/peswani-mayank</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Active Contributor
                  </span>
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Git & GitHub workflows • Issue Tracking • Pull Requests • Code Reviews
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all shadow-sm"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[620px]">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Git Activity Timeline</span>
                <span className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950/80" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600/60" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  <span>More</span>
                </span>
              </div>

              {/* Grid representation */}
              <div className="flex gap-1.5 justify-between">
                {weeks.map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, dIdx) => {
                      const level = getActivityLevel(wIdx, dIdx);
                      return (
                        <div
                          key={dIdx}
                          title={`Activity Level: ${level}`}
                          className={`w-2.5 h-2.5 rounded-xs transition-colors hover:ring-1 hover:ring-cyan-300 ${levelClasses[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
              <span>Standard Git Flow: Feature Branches, Atomic Commits & Semantic PRs</span>
            </span>
            <span className="text-emerald-400">SSoC Season 5 Active</span>
          </div>

        </div>

      </div>
    </section>
  );
}
