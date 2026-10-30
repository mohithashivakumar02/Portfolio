import React from 'react';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationJourneySection from './components/EducationJourneySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/**
 * Mohitha's Student Developer Portfolio
 * 
 * Theme: Cyber-Emerald / Dark Mode
 * Deep matte carbon background (#0d1117) with neon emerald (#10b981) and bright lime accents (#a3e635).
 */
function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Background Interactive Matrix-Dot Grid Canvas */}
      <MatrixGridCanvas />

      {/* Easter Egg: Subtle Custom Cursor Follower & Trailing Sparks */}
      <CustomCursor />

      {/* Cyber Grid Scanning & Vignette Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] cyber-grid-overlay opacity-30" 
        aria-hidden="true" 
      />

      {/* Floating Frosted-Glass Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Opening 'Hero' Intro Screen */}
        <Hero />

        {/* 2. Featured Projects Showcase (3D Perspective Tilt Physics) */}
        <ProjectsSection />

        {/* 3. Interactive Tech Stack & Skills (Official Tech Icons & Tooltips) */}
        <SkillsSection />

        {/* 4. Education & Campus Journey (Illuminated 2024-2026 Timeline + 2x2 Achievement Badges) */}
        <EducationJourneySection />

        {/* 5. About Section & Engineering Philosophy */}
        <AboutSection />

        {/* 6. Student-Friendly 'Get In Touch' Section (Magnetic Links + Loading Button) */}
        <ContactSection />
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}

export default App;
