import React from 'react';
import { 
  GitPullRequest, 
  GitCommit, 
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
  const weeks = Array.from({ length: 42 });
  
  const getActivityLevel = (wIdx, dIdx) => {
    const seed = (wIdx * 7 + dIdx * 13) % 17;
    if (seed === 0 || seed === 3 || seed === 7) return 3; // high
    if (seed === 2 || seed === 8 || seed === 11) return 2; // medium
    if (seed === 1 || seed === 5 || seed === 9 || seed === 14) return 1; // low
    return 0; // inactive
  };

  const levelClasses = [
    'bg-slate-100 border border-slate-200/60',
    'bg-teal-200 border border-teal-300',
    'bg-teal-400 border border-teal-500',
    'bg-teal-600 border border-teal-700'
  ];

  return (
    <section id="open-source" className="py-20 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>COMMUNITY & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Open Source Contribution
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
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
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-100/90 hover:border-teal-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-sky-600 group-hover:text-white transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* GitHub Inspired Contribution Heatmap Canvas */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-teal-100/90 p-6 sm:p-8 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-800">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>github.com/peswani-mayank</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-800 border border-teal-300/60 font-semibold">
                    Active Contributor
                  </span>
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Git & GitHub workflows • Issue Tracking • Pull Requests • Code Reviews
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl transition-all shadow-xs"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-600" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[620px]">
              <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center justify-between">
                <span>Git Activity Timeline</span>
                <span className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 border border-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-teal-200 border border-teal-300" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-teal-400 border border-teal-500" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-teal-600 border border-teal-700" />
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
                          className={`w-2.5 h-2.5 rounded-xs transition-colors hover:ring-1 hover:ring-teal-400 ${levelClasses[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <GitCommit className="w-3.5 h-3.5 text-teal-600" />
              <span>Standard Git Flow: Feature Branches, Atomic Commits & Semantic PRs</span>
            </span>
            <span className="text-teal-700 font-semibold">SSoC Season 5 Active</span>
          </div>

        </div>

      </div>
    </section>
  );
}