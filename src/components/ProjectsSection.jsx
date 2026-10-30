import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

/**
 * ProjectsSection
 * 
 * Featured Projects Showcase:
 * - Positioned directly below the intro section
 * - Filter pill row above the grid ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * - Responsive 3-column grid with 3D perspective tilt cards
 * - Glass panel styling, lift effect, soft emerald glow, and cursor shine
 */
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    { label: 'All', value: 'All' },
    { label: 'Web Apps', value: 'Web Apps' },
    { label: 'AI / ML', value: 'AI / ML' },
    { label: 'Mini-Projects', value: 'Mini-Projects' },
  ];

  // Project data featuring the user requested items + full category coverage
  const allProjects = [
    {
      id: 'PROJ_01',
      title: 'Campus Event Finder',
      category: 'Web Apps',
      categoryLabel: 'Full-Stack Web App',
      description:
        'Centralizes scattered college hackathons, club workshops, and cultural fests into an interactive, real-time campus calendar. Eliminates missed registration deadlines with instant RSVP notifications and automated Google Calendar synchronization.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
      demoUrl: 'https://example.com/demo/campus-finder',
      githubUrl: 'https://github.com/mohitha/campus-event-finder',
      featured: true,
    },
    {
      id: 'PROJ_02',
      title: 'Smart Attendance Tracker',
      category: 'AI / ML',
      categoryLabel: 'Computer Vision AI',
      description:
        'Replaces cumbersome paper attendance in university lecture halls with real-time OpenCV facial verification and edge inference. Accurately verifies student presence in under 3 seconds and generates automated attendance analytics for faculty.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      demoUrl: 'https://example.com/demo/smart-attendance',
      githubUrl: 'https://github.com/mohitha/smart-attendance-tracker',
      featured: true,
    },
    {
      id: 'PROJ_03',
      title: 'Student Notes Marketplace',
      category: 'Web Apps',
      categoryLabel: 'Academic Peer Hub',
      description:
        'Provides a structured student marketplace where engineering peers upload, review, and exchange verified semester lecture notes and past question papers. Features instant PDF previewing, tag-based semantic search, and an interactive peer reputation system.',
      tags: ['Tailwind', 'Node.js', 'Express', 'MongoDB', 'React'],
      demoUrl: 'https://example.com/demo/notes-marketplace',
      githubUrl: 'https://github.com/mohitha/student-notes-marketplace',
      featured: true,
    },
    {
      id: 'PROJ_04',
      title: 'NeuralVision Classifier',
      category: 'AI / ML',
      categoryLabel: 'Deep Learning Model',
      description:
        'An interactive neural network diagnostic tool evaluating medical and object image datasets with real-time gradient heatmaps. Provides visual explainability and confidence scoring through an optimized FastAPI microservice.',
      tags: ['PyTorch', 'Python', 'scikit-learn', 'Streamlit'],
      demoUrl: 'https://example.com/demo/neural-vision',
      githubUrl: 'https://github.com/mohitha/neural-vision-classifier',
      featured: false,
    },
    {
      id: 'PROJ_05',
      title: 'CyberMatrix Physics Canvas',
      category: 'Mini-Projects',
      categoryLabel: 'Interactive Canvas',
      description:
        'A lightweight HTML5 Canvas particle & 3D mesh engine reacting dynamically to cursor perturbation waves and inertial drag. Built with pure trigonometry and zero heavyweight dependencies for sub-60fps web animation.',
      tags: ['TypeScript', 'HTML5 Canvas', 'Math Algorithms', 'Vite'],
      demoUrl: 'https://example.com/demo/cyber-matrix',
      githubUrl: 'https://github.com/mohitha/cyber-matrix-canvas',
      featured: false,
    },
    {
      id: 'PROJ_06',
      title: 'Terminal CLI Portfolio Kit',
      category: 'Mini-Projects',
      categoryLabel: 'Developer Tooling',
      description:
        'A retro-futuristic terminal CLI package that renders interactive developer profiles, project logs, and ascii badges in any shell terminal. Published to npm with custom color themes and command autocomplete.',
      tags: ['Node.js', 'CLI', 'Chalk', 'JavaScript'],
      demoUrl: 'https://example.com/demo/terminal-cli',
      githubUrl: 'https://github.com/mohitha/terminal-cli-portfolio',
      featured: false,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle bg-[#0d1117]/60"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Showcase Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 01 FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-400 max-w-sm">
            Hand-crafted engineering builds merging high-performance web interfaces with intelligent algorithms.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            const count =
              tab.value === 'All'
                ? allProjects.length
                : allProjects.filter((p) => p.category === tab.value).length;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                    : 'text-slate-400 hover:text-white bg-[#161b22]/80 hover:bg-[#161b22] border border-[#30363d] hover:border-emerald-500/40'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-black/25 text-black'
                      : 'bg-carbon-deep text-slate-400 group-hover:text-emerald-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Responsive Grid with 3D Tilt Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Extra Bottom Stat / GitHub Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-carbon-surface/50 border border-carbon-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
              ⚡
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">
                Looking for more experiments & hackathon repos?
              </h4>
              <p className="text-slate-400 text-xs">
                Check out all 10+ public repositories and machine learning notebooks on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-emerald-300 bg-carbon-deep hover:bg-emerald-950/60 border border-emerald-500/30 hover:border-lime-400 transition-all hover:text-white"
          >
            <span>Explore All on GitHub</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
