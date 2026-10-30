import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * 
 * An interactive HTML5 Canvas background featuring an animated matrix-dot grid.
 * - Subtly ripples and reacts to mouse movement / hover
 * - Gently shifts perspective / 3D tilt based on cursor coordinates
 * - Cyber-Emerald theme with deep carbon base, neon emerald (#10b981), and electric lime (#a3e635) accents
 * - Responsive to window resizing and retina displays
 */
const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
      speed: 0,
      lastMoveTime: Date.now()
    };

    // Parallax tilt angles
    let tiltX = 0;
    let tiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    // Grid spacing configuration
    const SPACING = 38; // Spacing between dots in pixels
    const INFLUENCE_RADIUS = 190; // Interaction radius around cursor
    const RIPPLE_SPEED = 3.5;

    // Handle high-DPI (Retina) screens
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
      mouse.lastMoveTime = Date.now();

      // Calculate subtle perspective tilt (-1 to 1)
      targetTiltX = (mouse.targetX / width - 0.5) * 18;
      targetTiltY = (mouse.targetY / height - 0.5) * 18;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      targetTiltX = 0;
      targetTiltY = 0;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = touch.clientX - rect.left;
        mouse.targetY = touch.clientY - rect.top;
        mouse.isHovering = true;
        mouse.lastMoveTime = Date.now();
        targetTiltX = (mouse.targetX / width - 0.5) * 12;
        targetTiltY = (mouse.targetY / height - 0.5) * 12;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;

    // Animation Loop
    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Smooth tilt interpolation
      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      // Clear with subtle trail or solid carbon background
      ctx.clearRect(0, 0, width, height);

      // Cyber ambient radial gradient beneath the grid
      const bgGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.65
      );
      bgGradient.addColorStop(0, 'rgba(16, 185, 129, 0.06)'); // Neon emerald center tint
      bgGradient.addColorStop(0.4, 'rgba(6, 78, 59, 0.03)');
      bgGradient.addColorStop(1, 'rgba(13, 17, 23, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const startX = -SPACING;
      const startY = -SPACING;

      // Store point positions to draw dynamic connection mesh when excited
      const pointsGrid = [];

      for (let r = 0; r < rows; r++) {
        pointsGrid[r] = [];
        for (let c = 0; c < cols; c++) {
          const originX = startX + c * SPACING;
          const originY = startY + r * SPACING;

          // Perspective offset calculation based on depth and mouse tilt
          const normDistFromCenter = Math.sqrt(
            Math.pow((originX - width / 2) / width, 2) +
            Math.pow((originY - height / 2) / height, 2)
          );
          
          const pShiftX = tiltX * (1 - normDistFromCenter * 0.5);
          const pShiftY = tiltY * (1 - normDistFromCenter * 0.5);

          // Subtle idle ambient wave traveling across the matrix
          const ambientWave =
            Math.sin(originX * 0.008 + originY * 0.008 + time * 1.5) * 3 +
            Math.cos(originX * 0.005 - time) * 2;

          // Distance to interactive mouse
          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let rippleOffset = 0;
          let intensity = 0;

          if (dist < INFLUENCE_RADIUS) {
            // Radial ripple wave
            const factor = 1 - dist / INFLUENCE_RADIUS;
            intensity = Math.pow(factor, 1.8);
            rippleOffset = Math.sin(dist * 0.07 - time * RIPPLE_SPEED) * factor * 14;
          }

          // Compute final displaced coordinate
          const angle = Math.atan2(dy, dx);
          const drawX = originX + pShiftX + Math.cos(angle) * rippleOffset;
          const drawY = originY + pShiftY + Math.sin(angle) * rippleOffset + ambientWave;

          pointsGrid[r][c] = {
            x: drawX,
            y: drawY,
            intensity,
            dist
          };
        }
      }

      // Draw faint connections between neighboring energized dots
      ctx.lineWidth = 0.75;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = pointsGrid[r][c];
          if (p.intensity > 0.15) {
            // Right neighbor
            if (c + 1 < cols) {
              const rightP = pointsGrid[r][c + 1];
              if (rightP.intensity > 0.1) {
                const alpha = Math.min(p.intensity, rightP.intensity) * 0.28;
                ctx.strokeStyle = `rgba(163, 230, 53, ${alpha})`; // Bright lime connection
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(rightP.x, rightP.y);
                ctx.stroke();
              }
            }
            // Bottom neighbor
            if (r + 1 < rows) {
              const bottomP = pointsGrid[r + 1][c];
              if (bottomP.intensity > 0.1) {
                const alpha = Math.min(p.intensity, bottomP.intensity) * 0.28;
                ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`; // Emerald connection
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(bottomP.x, bottomP.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Render Matrix Dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = pointsGrid[r][c];

          // Determine dot color & radius based on mouse proximity and intensity
          let radius = 1.2;
          let dotColor = 'rgba(16, 185, 129, 0.18)'; // Muted cyber emerald idle

          if (p.intensity > 0.05) {
            // Transition from emerald to bright neon lime when hovered
            radius = 1.2 + p.intensity * 2.8;
            if (p.intensity > 0.5) {
              // High intensity: Neon Lime glow
              dotColor = `rgba(163, 230, 53, ${0.4 + p.intensity * 0.6})`;
              ctx.shadowColor = '#a3e635';
              ctx.shadowBlur = 8 * p.intensity;
            } else {
              // Medium intensity: Crisp Emerald
              dotColor = `rgba(16, 185, 129, ${0.25 + p.intensity * 0.65})`;
              ctx.shadowColor = '#10b981';
              ctx.shadowBlur = 5 * p.intensity;
            }
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.6, radius), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      style={{ backgroundColor: '#0d1117' }}
      aria-hidden="true"
    />
  );
};

export default MatrixGridCanvas;

