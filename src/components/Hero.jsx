import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Terminal, 
  Check, 
  Copy,
  Sparkles,
  Code2,
  User,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ onOpenResume }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeWindowTab, setActiveWindowTab] = useState('code'); // 'code' | 'photo'

  const codeSnippet = `const developer: Developer = {
  name: "${personalInfo.name}",
  title: "Software Developer",
  education: "B.Tech CSE @ Lovely Professional University",
  status: "Open to opportunities",
  focus: [
    "Full-Stack Web Development",
    "AI-Powered Applications",
    "Open Source Contribution"
  ],
  solveProblems: () => "Practical & Scalable"
};`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Mayank_Peswani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onOpenResume();
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Avatar & Status Row */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20 shrink-0 bg-slate-900 group">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Software Development Roles</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2 flex-wrap">
                <span>{personalInfo.headline}</span>
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>B.Tech CSE @ LPU</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all shadow-sm group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-slate-800/80 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Visual with Tabbed Photo & Code Views */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative subtle gradient border & glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-xl opacity-70 -z-10" />

              {/* Window Container */}
              <div className="rounded-2xl bg-[#0b101b] border border-slate-800 shadow-2xl overflow-hidden text-left">
                
                {/* Window Header with Tabs */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1424] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    
                    {/* View Switcher Tabs */}
                    <div className="ml-2 flex items-center gap-1">
                      <button
                        onClick={() => setActiveWindowTab('code')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeWindowTab === 'code'
                            ? 'bg-[#0b101b] text-cyan-400 border border-slate-800 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>DeveloperProfile.ts</span>
                      </button>

                      <button
                        onClick={() => setActiveWindowTab('photo')}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeWindowTab === 'photo'
                            ? 'bg-[#0b101b] text-cyan-400 border border-slate-800 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <User className="w-3 h-3" />
                        <span>Photo & Bio</span>
                      </button>
                    </div>
                  </div>

                  {activeWindowTab === 'code' && (
                    <button
                      onClick={copyCodeToClipboard}
                      aria-label="Copy code snippet"
                      className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800/60 transition-colors"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Tab 1: Code View */}
                {activeWindowTab === 'code' && (
                  <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                    <pre className="m-0">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">developer</span>:{' '}
                        <span className="text-yellow-300">Developer</span> = &#123;{'\n'}
                        {'  '}<span className="text-slate-400">name</span>:{' '}
                        <span className="text-emerald-300">"{personalInfo.name}"</span>,{'\n'}
                        {'  '}<span className="text-slate-400">title</span>:{' '}
                        <span className="text-emerald-300">"Software Developer"</span>,{'\n'}
                        {'  '}<span className="text-slate-400">education</span>:{' '}
                        <span className="text-emerald-300">"B.Tech CSE @ LPU"</span>,{'\n'}
                        {'  '}<span className="text-slate-400">location</span>:{' '}
                        <span className="text-emerald-300">"Sikar, Rajasthan"</span>,{'\n'}
                        {'  '}<span className="text-slate-400">status</span>:{' '}
                        <span className="text-cyan-300">"Open to opportunities"</span>,{'\n'}
                        {'  '}<span className="text-slate-400">focus</span>: [{'\n'}
                        {'    '}<span className="text-emerald-300">"Full-Stack Web Development"</span>,{'\n'}
                        {'    '}<span className="text-emerald-300">"AI-Powered Applications"</span>,{'\n'}
                        {'    '}<span className="text-emerald-300">"Open Source Contribution"</span>{'\n'}
                        {'  '}],{'\n'}
                        {'  '}<span className="text-blue-300">solveProblems</span>: () =&gt;{' '}
                        <span className="text-emerald-300">"Practical & Scalable"</span>{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </div>
                )}

                {/* Tab 2: Profile Photo & Verified Badges View */}
                {activeWindowTab === 'photo' && (
                  <div className="p-5 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl shadow-cyan-500/20 bg-slate-900">
                      <img
                        src="/profile.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        {personalInfo.primaryTitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Lovely Professional University • Sikar, Rajasthan
                      </p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2 text-left pt-1">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Status:</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Ready for SDE
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Open Source:</span>
                        <span className="text-cyan-400 font-semibold">SSoC Season 5</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terminal Bottom Output Banner */}
                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-400 text-[11px]">Ready to build impactful software</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Verified Developer
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
