import React, { useState } from 'react';
import ResumeModal from './ResumeModal';

/**
 * Hero Component
 * 
 * Opening 'Hero' intro screen for Mohitha's portfolio.
 * - Theme: 'Cyber-Emerald / Dark Mode' (#0d1117 carbon background with neon emerald & lime)
 * - Animated radar pill: '🟢 Student Developer // Open for Internships'
 * - Headline: 'Hey, I am Mohitha— Building the Future of Tech.'
 * - Bio: '2nd Year AIML student at KS Institute of Technology passionate about web development, AI, and building real-world projects.'
 * - Action Buttons: Glowing emerald primary button ('View My Projects') + outline secondary button ('Download Resume / CV')
 * - Cyber interactive terminal HUD card with live tab switching
 */
const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('profile');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('mohitha.aiml.ksit@gmail.com');
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2200);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Cyber Glow Orbs in the background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text, Status Badge, & CTA Actions (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge: Animated Blinking Radar Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/35 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-6 transition-all hover:border-lime-400/70 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]">
              {/* Radar Ping Animation */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              </span>
              
              {/* Badge Text */}
              <span className="font-mono text-xs sm:text-[13px] font-medium text-emerald-300 tracking-wide">
                🟢 Student Developer // Open for Internships
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Hey, I am <span className="text-white">Mohitha</span>—{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                Building the Future of Tech.
              </span>
            </h1>

            {/* Student Bio */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              <span className="text-white font-medium">2nd Year AIML student</span> at{' '}
              <span className="text-emerald-300 font-semibold underline decoration-emerald-500/40 underline-offset-4">
                KS Institute of Technology
              </span>{' '}
              passionate about{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 font-mono text-xs sm:text-sm border border-emerald-500/25">
                web development
              </span>
              ,{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-lime-950/60 text-lime-300 font-mono text-xs sm:text-sm border border-lime-500/25">
                AI
              </span>
              , and building real-world projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              
              {/* Glowing Emerald Primary Button: 'View My Projects' */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#070a0e] bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 hover:from-emerald-300 hover:via-emerald-400 hover:to-lime-300 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(163,230,53,0.55)] cursor-pointer"
              >
                <span>View My Projects</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {/* Subtle Inner Sheen */}
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>

              {/* Outline Secondary Button: 'Download Resume / CV' */}
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-emerald-300 hover:text-white bg-[#161b22]/70 hover:bg-emerald-950/40 border border-emerald-500/35 hover:border-lime-400/80 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <svg
                  className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transform group-hover:translate-y-0.5 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume / CV</span>
                <span className="px-1.5 py-0.5 text-[10px] font-sans font-semibold rounded bg-emerald-900/60 text-emerald-200 border border-emerald-500/20">
                  PDF
                </span>
              </button>
            </div>

            {/* Quick Metrics / Student Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-surface/80 border border-carbon-border">
                <span className="text-emerald-400">⚡</span>
                <span>Focus: AI + Full-Stack</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-surface/80 border border-carbon-border">
                <span className="text-lime-400">📍</span>
                <span>Bengaluru, IN</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-surface/80 border border-carbon-border">
                <span className="text-emerald-400">🎓</span>
                <span>KSIT '27 Batch</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Cyber Terminal & Live HUD Card (5 cols on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer Cyber Gradient Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-lime-400/20 to-teal-500/30 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Terminal Window Container */}
              <div className="relative rounded-2xl bg-[#0d1117] border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Terminal Window Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-carbon-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
                    <span className="ml-2 font-mono text-xs text-slate-400">mohitha@ksit-terminal:~</span>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('profile')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === 'profile'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('stack')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeCodeTab === 'stack'
                          ? 'bg-emerald-950/80 text-lime-300 border border-lime-500/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      skills.ts
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 bg-[#070a0e]/90">
                  {activeCodeTab === 'profile' ? (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Student Profile & Credentials</p>
                      <p>
                        <span className="text-emerald-400">const</span>{' '}
                        <span className="text-lime-300">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-emerald-300">'Mohitha'</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">education:</span>{' '}
                        <span className="text-emerald-300">'KS Institute of Technology'</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">year:</span>{' '}
                        <span className="text-lime-400">'2nd Year (2023-2027)'</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">major:</span>{' '}
                        <span className="text-emerald-300">'AI & Machine Learning (AIML)'</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">status:</span>{' '}
                        <span className="text-lime-300">'Open for Summer Internships'</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">interests:</span> [
                        <span className="text-teal-300">'Generative AI'</span>,{' '}
                        <span className="text-teal-300">'Full-Stack Web'</span>,{' '}
                        <span className="text-teal-300">'Neural Networks'</span>]
                      </p>
                      <p>&#125;;</p>
                      <p className="pt-2 text-slate-500">
                        <span className="text-emerald-400">&gt;</span> developer.buildFuture()
                      </p>
                      <p className="text-lime-400 flex items-center gap-1.5 font-semibold">
                        <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                        <span>Ready to innovate.</span>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Core Engineering Stack</p>
                      <p>
                        <span className="text-emerald-400">interface</span>{' '}
                        <span className="text-lime-300">TechStack</span> &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">languages:</span> [
                        <span className="text-emerald-300">'Python'</span>,{' '}
                        <span className="text-emerald-300">'JavaScript'</span>,{' '}
                        <span className="text-emerald-300">'TypeScript'</span>,{' '}
                        <span className="text-emerald-300">'C++'</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">frontend:</span> [
                        <span className="text-lime-400">'React.js'</span>,{' '}
                        <span className="text-lime-400">'Tailwind CSS'</span>,{' '}
                        <span className="text-lime-400">'Next.js'</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">ai_ml:</span> [
                        <span className="text-teal-300">'PyTorch'</span>,{' '}
                        <span className="text-teal-300">'scikit-learn'</span>,{' '}
                        <span className="text-teal-300">'OpenAI/Gemini APIs'</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">tools:</span> [
                        <span className="text-slate-300">'Git'</span>,{' '}
                        <span className="text-slate-300">'Antigravity IDE'</span>,{' '}
                        <span className="text-slate-300">'VS Code'</span>]
                      </p>
                      <p>&#125;</p>
                      <p className="pt-2 text-slate-500">
                        // Continuously shipping code
                      </p>
                    </div>
                  )}
                </div>

                {/* Terminal Footer Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-t border-carbon-border text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>KSIT_AIML_CORE :: ACTIVE</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="hover:text-lime-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedNotification ? (
                      <span className="text-lime-300 font-semibold">✓ Copied!</span>
                    ) : (
                      <>
                        <span>copy contact</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Preview & Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;

