import React from 'react';

/**
 * ResumeModal
 * 
 * Interactive preview & download dialog for Mohitha's resume.
 */
const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a structured printable / downloadable markdown resume as file
    const resumeText = `# MOHITHA - AIML Student Developer
Location: Bengaluru, India | Education: KS Institute of Technology
Degree: Bachelor of Engineering in Artificial Intelligence & Machine Learning (2nd Year)
Focus: Full-Stack Web Development, AI Systems, Intelligent Software

## Education
KS Institute of Technology (KSIT), Bengaluru
- B.E. in Artificial Intelligence & Machine Learning (2023 - 2027)

## Core Technical Skills
- Languages: Python, JavaScript, TypeScript, C++, HTML5/CSS3
- Frameworks & Libraries: React, Tailwind CSS, Node.js, Express, Next.js, PyTorch, scikit-learn
- Developer Tools: Git, GitHub, VS Code, Antigravity IDE, Docker, Vite

## Featured Projects & Highlights
- Autonomous Agent Workflows & Full-Stack Web Apps
- Neural Network Visualizers & Machine Learning Models
- Hackathon Competitor & Active Student Tech Community Member
`;
    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohitha_Resume_AIML_KSIT.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0d1117] border border-emerald-500/40 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.25)] p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Neon accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-mono text-base font-semibold text-white">
              Mohitha_Resume_2026.pdf
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-4 space-y-4 text-sm">
          <div className="p-3.5 rounded-xl bg-carbon-surface border border-carbon-border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-white font-semibold">Mohitha</h4>
                <p className="text-emerald-400 font-mono text-xs">2nd Year AIML Student @ KSIT</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Passionate about bridging cutting-edge Artificial Intelligence with intuitive, responsive web interfaces. Seeking software engineering and AIML internship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1 font-mono text-[11px]">Primary Domain:</span>
              <span className="text-lime-300 font-medium">AIML & Full-Stack</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1 font-mono text-[11px]">Institution:</span>
              <span className="text-emerald-300 font-medium">KS Institute of Technology</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-emerald-500/20">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV (Markdown / PDF)</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

