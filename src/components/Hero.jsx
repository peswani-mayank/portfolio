import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ onOpenResume }) {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Mayank_Peswani_CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onOpenResume();
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const navOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate flex flex-col justify-center min-h-[100svh] pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Soft Arctic Mint & Glacier Blue ambient flares */}
      <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal-300/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-sky-300/20 blur-[140px]" />

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Introduction & Identity */}
          <div className="relative z-10 space-y-6 text-left lg:col-span-6 xl:col-span-6">
            
            {/* Concept badge & Availability */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/70 bg-white/80 px-3.5 py-1.5 text-xs font-mono font-medium text-teal-800 shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                <span>DIGITAL TWIN V1.0 // ONLINE</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-sky-800 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                <span>Open for SDE Roles</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 font-semibold">
                An Interactive Developer Universe
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl 2xl:text-7xl">
                {personalInfo.name}
              </h1>

              <p className="text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl">
                {personalInfo.headline}
              </p>
            </div>

            {/* Bio */}
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {personalInfo.bio}
            </p>

            {/* Location and education badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-teal-600" />
                <span>{personalInfo.location}</span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-teal-300 sm:inline-block" />

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-sky-600" />
                <span>B.Tech CSE @ LPU</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5 hover:from-teal-600 hover:to-sky-700 hover:shadow-teal-500/30 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="group inline-flex items-center gap-2 rounded-xl border border-teal-200/90 bg-white/80 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-teal-400 hover:bg-white hover:text-teal-700 shadow-xs cursor-pointer"
              >
                <Download className="h-4 w-4 text-teal-600 transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Connect
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="rounded-lg border border-teal-100 bg-white/80 p-3 text-slate-600 transition-all hover:border-teal-400 hover:text-teal-700 hover:shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-lg border border-teal-100 bg-white/80 p-3 text-slate-600 transition-all hover:border-sky-400 hover:text-[#0077b5] hover:shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="rounded-lg border border-teal-100 bg-white/80 p-3 text-slate-600 transition-all hover:border-teal-400 hover:text-teal-700 hover:shadow-sm"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Digital Twin Stage (Integrated with persistent R3F Canvas) */}
          <div className="relative flex items-center justify-center min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] w-full lg:col-span-6 xl:col-span-6 pointer-events-none">
            {/* Luminous soft ambient aura radiating behind the 3D digital twin */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-gradient-to-tr from-teal-300/15 via-sky-300/15 to-emerald-200/15 blur-3xl opacity-70" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}