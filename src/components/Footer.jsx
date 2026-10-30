import React from 'react';

/**
 * Footer Component
 * 
 * Clean cyber-styled footer:
 * - Centered line: 'Designed & Engineered by Mohitha • Class of 2027.'
 * - Quick back-to-top trigger and KSIT academic credential tag
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#21262d] bg-[#070a0e] text-slate-400 font-mono text-xs overflow-hidden">
      {/* Background Micro Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-emerald-500/5 blur-xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-emerald-400">&lt;</span>
          <span>Mohitha</span>
          <span className="text-lime-400">/&gt;</span>
          <span className="text-slate-600">::</span>
          <span className="text-[11px] text-slate-400">AIML @ KS Institute of Technology</span>
        </div>

        {/* Centered Required Line */}
        <p className="text-sm text-slate-300 font-medium tracking-wide">
          Designed &amp; Engineered by{' '}
          <span className="text-white font-bold">Mohitha</span> • Class of{' '}
          <span className="text-lime-300 font-bold">2027</span>.
        </p>

        {/* Status & Back to Top Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cyber-Emerald v3.0 • Production Ready</span>
          </span>

          <span className="text-slate-700">|</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-lime-300 text-slate-400 transition-colors flex items-center gap-1 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <span className="text-emerald-400">[^]</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
