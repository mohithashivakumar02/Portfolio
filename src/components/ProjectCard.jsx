import React, { useRef, useState } from 'react';

/**
 * ProjectCard Component
 * 
 * Interactive 3D perspective tilt card:
 * - Dark glass panel with thin border (border-emerald-500/20)
 * - 3D perspective tilt tracking cursor position
 * - Smooth translateY(-6px) lift on hover
 * - Soft glowing emerald edge shadow
 * - Sleek dynamic cursor-following shine effect
 * - Tech badges and dual action buttons ('Live Demo' and 'GitHub Code')
 */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates (-1 to 1)
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Subtly tilt based on cursor position (max 10 degrees)
    setTilt({
      x: -normY * 9,
      y: normX * 9,
    });

    setShine({
      x,
      y,
      opacity: 0.22,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShine((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered
          ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
          : 'transform 0.5s ease-out, box-shadow 0.5s ease, border-color 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#121720]/80 backdrop-blur-md border border-emerald-500/20 p-6 sm:p-7 overflow-hidden ${
        isHovered
          ? 'border-emerald-500/50 shadow-[0_20px_45px_-12px_rgba(16,185,129,0.32),0_0_25px_0_rgba(16,185,129,0.18)]'
          : 'shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
      }`}
    >
      {/* Sleek Dynamic Radial Shine Overlay following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 300px at ${shine.x}px ${shine.y}px, rgba(163, 230, 53, 0.18), transparent 75%)`,
          opacity: shine.opacity,
        }}
        aria-hidden="true"
      />

      {/* Cyber Corner Tech Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400 group-hover:border-lime-400 transition-colors" />
      </div>

      {/* Card Header & Content */}
      <div className="relative z-20">
        {/* Category Pill & Status */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.categoryLabel}
          </span>
          <span className="font-mono text-[11px] text-slate-500">
            {project.id}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-3">
          {project.title}
        </h3>

        {/* 2-Sentence Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#070a0e] text-slate-300 border border-[#30363d] group-hover:border-emerald-500/40 group-hover:text-emerald-200 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Clickable Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="relative z-20 pt-4 border-t border-carbon-borderSubtle grid grid-cols-2 gap-3">
        {/* Live Demo Button */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-mono text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all transform active:scale-95"
        >
          <span>Live Demo</span>
          <svg
            className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* GitHub Code Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-mono text-xs font-medium text-emerald-300 hover:text-white bg-[#161b22] hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400/80 transition-all transform active:scale-95"
        >
          <svg className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-lime-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

