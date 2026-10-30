import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor Component (Easter Egg)
 * 
 * Subtle custom cursor follower and gentle trailing light sparks:
 * - Smoothly tracks mouse position with spring/lerp easing
 * - Pointers never block interaction (pointer-events-none)
 * - Trailing spark ring that expands when hovering over interactive elements (buttons, links, inputs)
 * - Soft trailing particle trail for an authentic high-tech cyber glow
 */
const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const sparksCanvasRef = useRef(null);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const sparks = [];
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Add trailing micro spark particle on movement
      if (Math.random() > 0.45) {
        sparks.push({
          x: mouse.x + (Math.random() - 0.5) * 6,
          y: mouse.y + (Math.random() - 0.5) * 6,
          size: Math.random() * 2 + 1,
          alpha: 0.8,
          color: Math.random() > 0.4 ? '#10b981' : '#a3e635',
        });
      }

      // Check if hovering clickable element
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup Sparks Canvas
    const canvas = sparksCanvasRef.current;
    const ctx = canvas?.getContext('2d');

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Render loop for spring lerp ring and spark fading
    const animate = () => {
      // Direct placement of central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      // Smooth lerp for trailing halo ring
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      // Render sparks
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = sparks.length - 1; i >= 0; i--) {
          const s = sparks[i];
          s.alpha -= 0.035;
          s.y += 0.4; // subtle drift

          if (s.alpha <= 0) {
            sparks.splice(i, 1);
            continue;
          }

          ctx.fillStyle = s.color;
          ctx.globalAlpha = Math.max(0, s.alpha);
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Trailing sparks canvas */}
      <canvas
        ref={sparksCanvasRef}
        className="fixed inset-0 pointer-events-none z-[9990] block"
        aria-hidden="true"
      />

      {/* Main central pointer dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full bg-emerald-400 transition-all duration-150 ${
            isHoveringClickable
              ? 'w-1.5 h-1.5 bg-lime-300 shadow-[0_0_12px_#a3e635]'
              : 'w-2 h-2 shadow-[0_0_10px_#10b981]'
          }`}
        />
      </div>

      {/* Trailing illuminated halo ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHoveringClickable
              ? 'w-12 h-12 border-lime-400/80 bg-lime-400/10 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
              : 'w-8 h-8 border-emerald-400/40 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;

