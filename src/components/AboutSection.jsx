import React from 'react';

/**
 * AboutSection
 * 
 * Showcases Mohitha's journey as a 2nd year AIML engineering student at KSIT.
 */
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-lime-400">// 01</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/40 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-carbon-surface/60 border border-carbon-border hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold text-lg">
              🎓
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">KSIT AIML Scholar</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Currently pursuing a B.E. in Artificial Intelligence & Machine Learning at KS Institute of Technology, Bangalore. Immersed in algorithms, deep learning fundamentals, and software architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-surface/60 border border-carbon-border hover:border-lime-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-lime-950/60 border border-lime-500/30 flex items-center justify-center text-lime-400 mb-4 font-mono font-bold text-lg">
              💻
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Modern Web Craft</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Obsessed with high-performance user experiences, smooth canvas animations, reactive interfaces, and combining modern frontends (React, Tailwind) with AI intelligence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-surface/60 border border-carbon-border hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold text-lg">
              🚀
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Real-World Builder</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Believe in learning by building. From college tech fests to open-source contributions, I love turning complex algorithmic concepts into practical everyday web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

