import React, { useState } from 'react';

/**
 * SkillBadge Component
 * 
 * Interactive pill badge for tech skills:
 * - Small official tech logo/icon
 * - Scales up slightly (scale-105) on hover
 * - Glows with an emerald border and soft shadow
 * - Tiny tooltip indicating comfort level ('Proficient', 'Familiar', or 'Currently Learning')
 */
const SkillBadge = ({ skill }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const levelConfigs = {
    Proficient: {
      dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
      badge: 'text-emerald-300 border-emerald-500/40 bg-[#0d1117]/95',
      glow: 'shadow-[0_0_18px_rgba(16,185,129,0.35)] border-emerald-400',
    },
    Familiar: {
      dot: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
      badge: 'text-lime-300 border-lime-500/40 bg-[#0d1117]/95',
      glow: 'shadow-[0_0_18px_rgba(163,230,53,0.35)] border-lime-400',
    },
    'Currently Learning': {
      dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
      badge: 'text-cyan-300 border-cyan-500/40 bg-[#0d1117]/95',
      glow: 'shadow-[0_0_18px_rgba(34,211,238,0.35)] border-cyan-400',
    },
  };

  const currentLevel = levelConfigs[skill.level] || levelConfigs.Proficient;

  return (
    <div
      className="relative group/skill inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="button"
      aria-label={`${skill.name} - ${skill.level}`}
    >
      {/* Interactive Pill Badge */}
      <div
        className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium bg-[#161b22]/90 border border-[#30363d] text-slate-200 transition-all duration-200 cursor-pointer select-none group-hover/skill:scale-105 group-hover/skill:text-white ${
          showTooltip
            ? currentLevel.glow
            : 'hover:border-emerald-500/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Official Tech Icon */}
        <span className="w-4 h-4 flex items-center justify-center shrink-0">
          {skill.icon}
        </span>
        <span className="tracking-tight">{skill.name}</span>
      </div>

      {/* Tiny Comfort Level Tooltip */}
      <div
        className={`pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 transition-all duration-200 ${
          showTooltip
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap backdrop-blur-md border shadow-xl ${currentLevel.badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${currentLevel.dot}`} />
          <span className="font-semibold">{skill.level}</span>
        </div>
        {/* Downward triangle pointer */}
        <div className="w-2 h-2 -mt-1 mx-auto rotate-45 bg-[#0d1117] border-r border-b border-emerald-500/40" />
      </div>
    </div>
  );
};

/**
 * SkillsSection Component
 * 
 * Clean, categorized Tech Stack & Skills showcase directly below Projects:
 * 1. Languages
 * 2. Frameworks & Tools
 * 3. Core CS Concepts
 */
const SkillsSection = () => {
  // SVG Icons
  const icons = {
    cpp: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.378 14.52l-2.032-3.52 2.032-3.52c.24-.416.24-.928 0-1.344l-5.696-9.856c-.24-.416-.688-.672-1.168-.672H4.074c-.48 0-.928.256-1.168.672L.03 6.136c-.24.416-.24.928 0 1.344l2.876 4.976L.03 17.432c-.24.416-.24.928 0 1.344l5.696 9.856c.24.416.688.672 1.168.672h11.44c.48 0 .928-.256 1.168-.672l5.696-9.856c.24-.416.24-.928 0-1.344l-1.82-3.112zM12.01 19.36c-4.048 0-7.344-3.296-7.344-7.344s3.296-7.344 7.344-7.344c2.656 0 4.992 1.408 6.272 3.536l-2.736 1.584c-.768-1.28-2.096-2.112-3.536-2.112-2.384 0-4.336 1.952-4.336 4.336s1.952 4.336 4.336 4.336c1.44 0 2.768-.832 3.536-2.112l2.736 1.584c-1.28 2.128-3.616 3.536-6.272 3.536zm7.2-6.24h-1.44v1.44h-.96v-1.44h-1.44v-.96h1.44v-1.44h.96v1.44h1.44v.96zm4.32 0h-1.44v1.44h-.96v-1.44h-1.44v-.96h1.44v-1.44h.96v1.44h1.44v.96z" />
      </svg>
    ),
    python: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.808v.826H3.854S0 5.79 0 11.922c0 6.136 3.376 5.925 3.376 5.925h2.015v-2.825s-.11-3.377 3.313-3.377h5.688v-.85s.312-3.08-3.478-3.08zm-2.07 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm2.242 22.17c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.808v-.826h8.16s3.854.442 3.854-5.69c0-6.136-3.376-5.925-3.376-5.925h-2.015v2.825s.11 3.377-3.313 3.377H10.65v.85s-.312 3.08 3.478 3.08zm2.07-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
      </svg>
    ),
    javascript: (
      <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm13.784 14.544c1.8 0 3.036-.888 3.036-2.52 0-1.632-.972-2.292-2.628-2.988l-.576-.252c-.876-.372-1.284-.696-1.284-1.296 0-.588.468-1.02 1.236-1.02.744 0 1.188.3 1.5 1.008l1.716-.996c-.636-1.344-1.74-1.8-3.156-1.8-1.764 0-2.976.984-2.976 2.472 0 1.572 1.02 2.244 2.544 2.892l.576.252c.984.42 1.392.744 1.392 1.404 0 .696-.6 1.152-1.512 1.152-.96 0-1.548-.492-1.932-1.284l-1.776.996c.648 1.476 1.848 2.052 3.864 2.052zm-6.66 0c1.02 0 1.884-.36 2.376-1.188.168-.288.24-.552.24-1.116V9.264H10.74v5.856c0 .54-.204.792-.684.792-.492 0-.744-.276-.984-.756l-1.656.984c.552 1.092 1.32 1.404 2.688 1.404z" />
      </svg>
    ),
    java: (
      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c2.259.259 3.52-.224 5.941-.758 0 0 .848.463 1.636.757-3.957 1.634-10.366.196-8.23-1.013zm-.516-2.529s-1.02.721.575.877c2.618.257 4.793-.15 7.643-.889 0 0 .546.368 1.168.611-4.78 1.632-11.83.33-9.386-.899zm5.228-5.321c.884.97-.241 1.942-.241 1.942s1.771-.97 1.002-2.222c-.82-1.334-2.536-1.921-1.309-3.79 0 0-4.004 1.488-.452 4.07zm-2.046 5.513c-2.47-.197-4.14-.949-1.982-1.464 2.33-.556 5.918-.517 7.766.108 0 0-.624-.378-1.547-.648-5.334-.787-12.062 1.144-6.425 2.115 5.093.877 10.993-.053 14.156-.884 0 0-.585.342-1.258.587-3.238.793-7.794.417-10.71.186zm6.305-6.842s.707.729-.271 1.745c-1.393 1.448-2.671 2.308-4.27 3.328 0 0 2.213-.771 3.541-2.181 1.246-1.325 1.0-2.892 1.0-2.892zm-8.879 12.164c4.372.298 9.076-.171 12.043-1.196.86-.297 1.549-.637 1.549-.637s-.461.352-1.082.593c-3.155 1.226-8.23 1.536-12.51.94 0 0-.581.166-.889.378-.857.591.319.882 1.299.782 1.206-.123 2.65-.295 4.09-.439 0 0-1.246.331-2.522.613-2.152.477-3.284.143-2.238-.59.721-.505 1.848-.829 1.848-.829s-1.226.155-1.589.385zm12.355-14.731s.754 1.411-1.378 3.585c-1.638 1.67-2.614 2.457-4.526 3.864 0 0 2.434-.844 4.032-2.736 1.516-1.796 1.872-4.713 1.872-4.713z" />
      </svg>
    ),
    typescript: (
      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.74 8.784h6.082v2.51h-2.162v8.667h-2.923v-8.667h-2.162V8.784h1.165zm-7.66 2.438c-.37-.066-.75-.098-1.137-.098-1.066 0-1.895.275-2.488.825-.592.55-.888 1.3-.888 2.25 0 .97.31 1.737.93 2.302.62.565 1.514.847 2.68.847.388 0 .768-.032 1.14-.098v2.24a7.99 7.99 0 0 1-1.878.217c-1.93 0-3.418-.54-4.464-1.62-1.045-1.08-1.568-2.55-1.568-4.41 0-1.89.528-3.375 1.583-4.455 1.056-1.08 2.53-1.62 4.422-1.62.634 0 1.233.064 1.797.193v2.44z" />
      </svg>
    ),
    sql: (
      <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    react: (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.09a2.91 2.91 0 1 0 0 5.82 2.91 2.91 0 0 0 0-5.82zm0-2.18c-3.79 0-7.23.82-9.42 2.12-.34.2-.64.42-.9.66 1.13 2.7 3.96 4.67 7.37 5.42-.23-.68-.37-1.42-.37-2.19 0-1.43.46-2.75 1.24-3.83-2.16-.08-4.22-.44-5.92-1.04 1.83-1.03 4.66-1.67 8-1.67s6.17.64 8 1.67c-1.7.6-3.76.96-5.92 1.04.78 1.08 1.24 2.4 1.24 3.83 0 .77-.14 1.51-.37 2.19 3.41-.75 6.24-2.72 7.37-5.42-.26-.24-.56-.46-.9-.66-2.19-1.3-5.63-2.12-9.42-2.12zm0 10.36c-2.34 0-4.48-.48-6.07-1.28.24.62.58 1.2 1.01 1.72 1.45.39 3.16.63 5.06.63s3.61-.24 5.06-.63c.43-.52.77-1.1 1.01-1.72-1.59.8-3.73 1.28-6.07 1.28z" />
      </svg>
    ),
    tailwind: (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
    node: (
      <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm-.066 3.018l7.632 4.41-3.66 2.112-7.632-4.41 3.66-2.112zm-8.814 5.094l7.632 4.41v4.224l-7.632-4.41V8.112zm17.562 7.788l-7.632 4.41v-4.224l7.632-4.41v4.224z" />
      </svg>
    ),
    git: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.529-.527-.667-1.291-.414-1.944L12.756 8.95v5.797c.207.112.396.262.551.417.72.72.72 1.884 0 2.604-.719.719-1.881.719-2.6 0-.721-.72-.721-1.884 0-2.604.204-.204.444-.343.7-.428V8.924c-.256-.085-.496-.224-.7-.428-.535-.536-.669-1.312-.401-1.97L7.545 3.79.454 10.88c-.605.604-.605 1.581 0 2.186l10.479 10.48c.605.604 1.582.604 2.187 0l10.426-10.43c.606-.603.606-1.58 0-2.186" />
      </svg>
    ),
    pytorch: (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.766 0c-.22 0-.442.067-.633.201l-1.97 1.38c-.375.263-.464.781-.198 1.151.265.371.789.458 1.164.195l1.637-1.147 6.137 6.046a8.552 8.552 0 0 1 2.531 6.079c0 4.773-3.935 8.657-8.775 8.657-4.839 0-8.774-3.884-8.774-8.657 0-2.222.854-4.321 2.378-5.877l3.818-3.905c.325-.332.321-.865-.008-1.192-.33-.328-.868-.324-1.193.008l-3.829 3.917A10.155 10.155 0 0 0 2.399 13.9C2.399 19.468 6.993 24 12.659 24c5.666 0 10.26-4.532 10.26-10.1 0-2.736-1.107-5.321-3.08-7.228L13.399.201a1.082 1.082 0 0 0-.633-.201zm-3.235 6.07a1.352 1.352 0 1 0 0 2.704 1.352 1.352 0 0 0 0-2.704z" />
      </svg>
    ),
    vite: (
      <svg className="w-4 h-4 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.003 4.524l-10.42 18.66c-.227.406-.79.444-1.07.072L.95 9.07c-.31-.412-.03-.997.487-1.025l13.682-.74a.596.596 0 0 0 .546-.425l3.52-12.02c.162-.553.89-.66 1.198-.178l2.62 4.092a.598.598 0 0 1 0 .75z" />
      </svg>
    ),
    dsa: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M12 8v4m-3 2l-2 2m8-2l2 2" />
      </svg>
    ),
    oop: (
      <svg className="w-4 h-4 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    dbms: (
      <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    os: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3m6-3v3m-6 16v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" />
      </svg>
    ),
    networks: (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 8l3 3m2 2l3 3m0-8l-3 3m-2 2l-3 3" />
      </svg>
    ),
  };

  const categories = [
    {
      id: 'languages',
      title: 'Languages',
      badge: '// SYNTAX & LOGIC',
      description: 'Primary programming languages for system development, algorithmic problem solving, and modern web applications.',
      skills: [
        { name: 'C++', level: 'Proficient', icon: icons.cpp },
        { name: 'Python', level: 'Proficient', icon: icons.python },
        { name: 'JavaScript (ES6+)', level: 'Proficient', icon: icons.javascript },
        { name: 'Java', level: 'Familiar', icon: icons.java },
        { name: 'TypeScript', level: 'Familiar', icon: icons.typescript },
        { name: 'SQL', level: 'Proficient', icon: icons.sql },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Tools',
      badge: '// ECOSYSTEM & BUILD',
      description: 'Full-stack web libraries, development environments, and version control workflows.',
      skills: [
        { name: 'React', level: 'Proficient', icon: icons.react },
        { name: 'Tailwind CSS', level: 'Proficient', icon: icons.tailwind },
        { name: 'Node.js', level: 'Familiar', icon: icons.node },
        { name: 'Git & GitHub', level: 'Proficient', icon: icons.git },
        { name: 'PyTorch', level: 'Currently Learning', icon: icons.pytorch },
        { name: 'Vite', level: 'Proficient', icon: icons.vite },
      ],
    },
    {
      id: 'core-cs',
      title: 'Core CS Concepts',
      badge: '// ACADEMIC FOUNDATIONS',
      description: 'Foundational computer science principles honed through coursework and competitive coding at KSIT.',
      skills: [
        { name: 'Data Structures', level: 'Proficient', icon: icons.dsa },
        { name: 'OOP', level: 'Proficient', icon: icons.oop },
        { name: 'DBMS', level: 'Familiar', icon: icons.dbms },
        { name: 'Operating Systems', level: 'Familiar', icon: icons.os },
        { name: 'Computer Networks', level: 'Currently Learning', icon: icons.networks },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle bg-[#0d1117]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 02 TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Tech Stack &amp; Skills
            </h2>
          </div>

          {/* Comfort Level Legend */}
          <div className="flex items-center gap-3 sm:gap-4 p-2.5 rounded-xl bg-[#161b22]/70 border border-[#30363d] font-mono text-xs text-slate-300">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider hidden sm:inline">
              Legend:
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              <span className="text-xs">Proficient</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
              <span className="text-xs">Familiar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-xs">Learning</span>
            </div>
          </div>
        </div>

        {/* Categorized 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#121720]/80 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-lime-400 tracking-wider">
                    {category.badge}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {category.skills.length} Items
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {category.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                {/* Interactive Skill Badges Container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Terminal Accent */}
              <div className="pt-6 mt-6 border-t border-[#21262d] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>STATUS: VERIFIED</span>
                <span className="text-emerald-400/80">AIML_KSIT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
