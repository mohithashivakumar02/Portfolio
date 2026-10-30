import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * 
 * Floating frosted-glass navigation bar fixed at the top.
 * - Deep matte carbon background (#0d1117/80) with frosted glass blur
 * - Crisp neon emerald (#10b981) and bright lime accents
 * - Responsive desktop & mobile drawer with animated toggle
 * - Links: About, Projects, Skills, Campus Life, Contact
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Journey', href: '#campus-life' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll listener for sticky navbar styling & active link highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection (bottom to top)
      const sections = ['contact', 'about', 'campus-life', 'skills', 'projects'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.6)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/60 backdrop-blur-lg border border-emerald-500/15 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-white transition-all"
            aria-label="Mohitha Portfolio Home"
          >
            {/* High-tech Logo Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-carbon-surface border border-emerald-500/40 group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.35)] transition-all duration-300">
              <span className="font-mono text-emerald-400 group-hover:text-lime-300 font-bold text-base">
                M
              </span>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-emerald-400/80">&lt;</span>
                <span className="font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Mohitha
                </span>
                <span className="font-mono text-xs text-lime-400">/&gt;</span>
              </div>
              <span className="text-[11px] font-mono tracking-wider text-slate-400">
                AIML @ KSIT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-950/40 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full shadow-[0_0_8px_#10b981]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold text-emerald-300 border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/50 hover:border-lime-400 hover:text-lime-200 transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-lime-400 animate-pulse" />
              <span>Let's Talk</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 border border-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                // Close 'X' Icon
                <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Cyber Hamburger Icon
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h11M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-emerald-500/20 animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-lime-300 bg-emerald-950/50 border border-emerald-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-emerald-400/60">&gt;</span>
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-mono font-semibold text-emerald-300 border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/60 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Get in Touch // Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

