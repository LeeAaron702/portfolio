"use client";

import { useEffect, useRef } from "react";

/**
 * Floating particle field — soft, drifting dots with depth-of-field blur.
 * No geometry/wireframe. Canvas-based for performance.
 */
export default function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;
    let scrollY = 0;

    const PARTICLE_COUNT = 80;
    const particles: {
      x: number;
      y: number;
      z: number; // depth 0-1
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * Math.min(devicePixelRatio, 2);
      canvas.height = height * Math.min(devicePixelRatio, 2);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(Math.min(devicePixelRatio, 2), Math.min(devicePixelRatio, 2));
    };

    const init = () => {
      resize();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
          size: 1 + Math.random() * 2.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Scroll fade
      const fade = Math.max(0, 1 - scrollY / (height * 0.8));
      if (fade <= 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      for (const p of particles) {
        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Depth-based properties
        const alpha = (0.15 + p.z * 0.45) * fade;
        const size = p.size * (0.5 + p.z * 0.5);

        // Blue tint — deeper particles are dimmer and cooler
        const blue = Math.round(180 + p.z * 75);
        const green = Math.round(80 + p.z * 40);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.round(p.z * 40)}, ${green}, ${blue}, ${alpha})`;
        ctx.fill();

        // Glow on larger, closer particles
        if (p.z > 0.6 && size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 102, 255, ${alpha * 0.08})`;
          ctx.fill();
        }
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineAlpha =
              (1 - dist / 120) * 0.06 * fade * Math.min(particles[i].z, particles[j].z);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    init();
    draw();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
