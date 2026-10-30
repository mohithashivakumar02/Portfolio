import React from 'react';

/**
 * EducationJourneySection
 * 
 * Education & Campus Journey:
 * - Interactive vertical milestone timeline connected by an illuminated emerald line with glowing nodal dots
 * - 3 Milestones: 2026 (Current), 2025, 2024
 * - Compact 2x2 Achievement Badges grid with subtle hover highlights
 */
const EducationJourneySection = () => {
  const milestones = [
    {
      year: '2026',
      badge: 'CURRENT MILESTONE',
      badgeColor: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40',
      nodeGlow: 'border-emerald-400 shadow-[0_0_20px_#10b981]',
      ping: true,
      title: 'Pre-Final Year B.Tech & Hackathon Finalist',
      institution: 'KS Institute of Technology, Bengaluru',
      description:
        'Deepening specialization in Artificial Intelligence & Machine Learning while actively competing and qualifying as a finalist in 24-hour inter-college hackathons.',
      highlights: ['AIML Specialization', 'Neural Network Research', 'Hackathon Finalist'],
    },
    {
      year: '2025',
      badge: 'YEAR 02',
      badgeColor: 'bg-lime-950/70 text-lime-300 border-lime-500/40',
      nodeGlow: 'border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.4)]',
      ping: false,
      title: 'Core Technical Club Member / Web Lead',
      institution: 'Developer Student Circle @ KSIT',
      description:
        'Spearheaded hands-on web development bootcamps for 80+ junior peers and engineered modern internal web interfaces for KSIT campus tech symposiums.',
      highlights: ['Student Tech Lead', 'Peer Mentoring', 'Full-Stack Workflows'],
    },
    {
      year: '2024',
      badge: 'YEAR 01',
      badgeColor: 'bg-teal-950/70 text-teal-300 border-teal-500/40',
      nodeGlow: 'border-teal-400/80 shadow-[0_0_12px_rgba(45,212,191,0.3)]',
      ping: false,
      title: 'Began Degree & Built First Web App',
      institution: 'Commenced B.E. in AIML',
      description:
        'Admitted to KS Institute of Technology, mastering foundational Data Structures & Algorithms in C++ and deploying my very first responsive web applications.',
      highlights: ['Admitted to KSIT', 'C++ Mastery', 'First Production Web App'],
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '1st Place - University Hackathon',
      subtitle: 'Flagship 24-hr Campus Sprint',
      description: 'Built and pitched an AI-powered student utility prototype competing against 40+ engineering teams.',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      subtitle: 'Algorithmic Problem Solving',
      description: 'Continuous streak focusing on Data Structures, binary trees, dynamic programming, and graph algorithms.',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'KSIT Student Community',
      description: 'Led technical workshops, coordinated coding rounds, and mentored newcomers in web fundamentals.',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'React & Modern Backend',
      description: 'Completed rigorous curriculum in React architecture, RESTful APIs, Tailwind CSS, and database modeling.',
    },
  ];

  return (
    <section
      id="campus-life"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle bg-[#0d1117]/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 03 ACADEMIC &amp; STUDENT TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; Campus Journey
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-400 max-w-sm">
            Milestones and student leadership milestones across my engineering degree at KS Institute of Technology.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Timeline (7 cols) & Achievement Badges (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Milestone Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 sm:pl-10">
              
              {/* Illuminated Emerald Vertical Line */}
              <div 
                className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-400 to-lime-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                aria-hidden="true"
              />

              <div className="space-y-10 sm:space-y-12">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Glowing Nodal Dot */}
                    <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 flex items-center justify-center">
                      <div
                        className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0d1117] border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${item.nodeGlow}`}
                      >
                        {item.ping && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                      </div>
                    </div>

                    {/* Milestone Card */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#121720]/80 backdrop-blur-md border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:shadow-[0_12px_35px_-10px_rgba(16,185,129,0.25)] transition-all duration-300">
                      
                      {/* Milestone Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.year}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-lime-400">
                          {item.institution}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Brief 1-Line Note */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* Micro Highlights Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#21262d]">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#070a0e] text-slate-300 border border-[#30363d] group-hover:border-emerald-500/30 transition-colors"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: College Overview & 2x2 Achievement Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* College Credentials Card */}
            <div className="p-6 rounded-2xl bg-[#161b22]/90 border border-emerald-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                  ACADEMIC AFFILIATION
                </span>
                <span className="font-mono text-xs text-slate-400">VTU • B.E.</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">
                KS Institute of Technology
              </h4>
              <p className="text-xs font-mono text-lime-400 mb-3">
                Dept. of Artificial Intelligence &amp; Machine Learning
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                Currently advancing through the 2nd Year B.E. curriculum with an emphasis on Data Structures, Object-Oriented System Design, Discrete Mathematics, and Applied Neural Networks.
              </p>

              <div className="mt-4 pt-4 border-t border-[#30363d] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Batch: <strong className="text-white">2023 - 2027</strong></span>
                <span>Location: <strong className="text-white">Bengaluru, IN</strong></span>
              </div>
            </div>

            {/* Achievement Badges: Compact 2x2 Grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Key Accomplishments &amp; Recognition
                </h4>
                <span className="font-mono text-[11px] text-emerald-400">2x2 Matrix</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {achievements.map((badge, idx) => (
                  <div
                    key={idx}
                    className="group/badge p-4 rounded-xl bg-[#121720]/80 border border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-950/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-2xl mb-2 transform group-hover/badge:scale-110 transition-transform">
                        {badge.icon}
                      </div>
                      <h5 className="font-bold text-white text-xs sm:text-[13px] group-hover/badge:text-emerald-300 transition-colors mb-1">
                        {badge.title}
                      </h5>
                      <span className="font-mono text-[10px] text-lime-400 block mb-1.5">
                        {badge.subtitle}
                      </span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationJourneySection;

