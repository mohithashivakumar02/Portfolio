import React from 'react';

/**
 * CampusLifeSection
 * 
 * Highlights Mohitha's student life, hackathons, and activities at KS Institute of Technology.
 */
const CampusLifeSection = () => {
  const activities = [
    {
      role: 'Hackathon Contender',
      org: 'KSIT Tech Club / Inter-College Hackathons',
      period: '2024 - Present',
      description: 'Collaborating in 24-hour sprint builds, pitching prototypes, and converting AI algorithms into functional user-facing web tools.',
      tag: 'Innovation',
    },
    {
      role: 'AIML Research & Lab Practice',
      org: 'Department of AIML, KSIT',
      period: '2nd Year (Ongoing)',
      description: 'Hands-on experimentation with neural network architectures, matrix computation, and data preprocessing pipelines in college computer labs.',
      tag: 'Academics',
    },
    {
      role: 'Student Tech Community',
      org: 'Developer Student Circle KSIT',
      period: '2024 - Present',
      description: 'Mentoring 1st-year peers in web dev basics, participating in open-source workshops, and organizing campus tech showcases.',
      tag: 'Community',
    },
  ];

  return (
    <section id="campus-life" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-emerald-400">// 04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Campus Life & Culture @ KSIT
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/40 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-carbon-surface/60 border border-carbon-border hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-slate-400">{item.period}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{item.role}</h3>
              <p className="font-mono text-xs text-lime-400 mb-3">{item.org}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;

