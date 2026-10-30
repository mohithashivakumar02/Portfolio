import React, { useState, useRef } from 'react';

/**
 * MagneticButton
 * 
 * Interactive icon button with magnetic cursor-attraction physics.
 */
const MagneticButton = ({ href, ariaLabel, icon, label, onClick }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Magnetic pull dampening factor
    setPosition({
      x: dx * 0.35,
      y: dy * 0.35,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovered
          ? 'transform 0.1s ease-out, border-color 0.2s ease, box-shadow 0.2s ease'
          : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#161b22]/90 border border-[#30363d] backdrop-blur-md cursor-pointer select-none ${
        isHovered
          ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] text-white'
          : 'text-slate-300 hover:border-emerald-500/40'
      }`}
    >
      <span className="w-5 h-5 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 transition-colors">
        {icon}
      </span>
      <span className="font-mono text-xs sm:text-sm font-semibold tracking-tight">
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return <div className="inline-block">{content}</div>;
};

/**
 * ContactSection Component
 * 
 * Student-friendly 'Get In Touch' section:
 * - Headline: 'Let’s Collaborate & Build'
 * - Subtitle: 'Open for summer internships, open-source projects, or tech chats. Drop me a message!'
 * - Interactive Form: Clean input fields for 'Your Name', 'Your Email', and 'Your Message'
 * - Submit Button: 'Send Message' -> emerald loading spinner -> 'Message Sent! 🚀'
 * - Direct Links: Sleek magnetic hover buttons for GitHub, LinkedIn, and Email
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'mohitha.aiml.ksit@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger emerald loading state
    setSubmitStatus('loading');

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset feedback after 4 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 4000);
    }, 1200);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // SVGs for Magnetic Buttons
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-carbon-borderSubtle bg-[#0d1117] overflow-hidden"
    >
      {/* Background Neon Ambient Glows */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Main Contact Card Container */}
        <div className="rounded-3xl bg-[#121720]/85 backdrop-blur-xl border border-emerald-500/25 p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Top Cyber Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/35 text-emerald-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// INBOX OPEN FOR OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let’s Collaborate &amp; Build
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Open for summer internships, open-source projects, or tech chats. Drop me a message!
            </p>
          </div>

          {/* Form & Direct Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Interactive Form (7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
              
              {/* Name Field */}
              <div>
                <label className="block font-mono text-xs text-slate-300 mb-1.5 font-medium">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-[#070a0e] border border-[#30363d] text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder-slate-600 font-sans"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-mono text-xs text-slate-300 mb-1.5 font-medium">
                  Your Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#070a0e] border border-[#30363d] text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder-slate-600 font-sans"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-mono text-xs text-slate-300 mb-1.5 font-medium">
                  Your Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your internship opening, project idea, or say hi..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070a0e] border border-[#30363d] text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder-slate-600 resize-none font-sans"
                />
              </div>

              {/* Submit Button with Loading Spinner & Sent Feedback */}
              <button
                type="submit"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className={`relative w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-bold transition-all duration-300 transform active:scale-[0.98] cursor-pointer ${
                  submitStatus === 'success'
                    ? 'bg-gradient-to-r from-emerald-400 to-lime-400 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                    : submitStatus === 'loading'
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 cursor-wait'
                    : 'bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 text-black shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(163,230,53,0.45)]'
                }`}
              >
                {submitStatus === 'loading' ? (
                  <>
                    {/* Emerald Loading Spinner */}
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Dispatch...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>Message Sent! 🚀</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Direct Links with Magnetic Hover Effect (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-4">
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-lime-400 mb-2">
                  Direct Radar Channels
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Prefer direct channels? Reach out across professional networks or click below to trigger direct copy.
                </p>

                {/* Magnetic Hover Buttons Column */}
                <div className="flex flex-col gap-3.5">
                  {/* GitHub */}
                  <MagneticButton
                    href="https://github.com/mohitha"
                    ariaLabel="Mohitha on GitHub"
                    icon={icons.github}
                    label="GitHub // mohitha"
                  />

                  {/* LinkedIn */}
                  <MagneticButton
                    href="https://linkedin.com/in/mohitha"
                    ariaLabel="Mohitha on LinkedIn"
                    icon={icons.linkedin}
                    label="LinkedIn // in/mohitha"
                  />

                  {/* Direct Email with Magnetic Physics */}
                  <MagneticButton
                    href={`mailto:${directEmail}`}
                    ariaLabel="Send direct email to Mohitha"
                    icon={icons.email}
                    label="Email // ksit.aiml"
                    onClick={() => {}}
                  />
                </div>
              </div>

              {/* Quick Copy Pill */}
              <div className="p-4 rounded-2xl bg-[#070a0e]/90 border border-[#30363d] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 overflow-hidden text-ellipsis">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-slate-300 truncate">{directEmail}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 px-2.5 py-1 rounded-lg text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 transition-colors"
                >
                  {copiedEmail ? '✓ Copied' : 'Copy'}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
