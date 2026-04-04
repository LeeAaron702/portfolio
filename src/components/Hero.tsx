"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(6,182,212,0.04) 0%, transparent 50%), " +
            "var(--color-ice)",
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 2]}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <span
            className="inline-block font-mono text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "var(--gradient-accent-subtle)",
              color: "var(--color-blue)",
              border: "1px solid rgba(37,99,235,0.15)",
            }}
          >
            Full-Stack &amp; AI Integration Engineer
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-display font-extrabold leading-none tracking-tight mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            transitionDelay: "500ms",
          }}
        >
          <span className="gradient-text">Lee Seaver</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            color: "var(--color-slate)",
            transitionDelay: "700ms",
          }}
        >
          I build production software that makes money. 30+ shipped projects
          across SaaS, AI, e-commerce, and mobile.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{
              background: "var(--gradient-accent)",
              boxShadow: "0 4px 20px rgba(37,99,235,0.25)",
            }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-ice-100"
            style={{
              color: "var(--color-navy-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`animate-float transition-all duration-700 ${
            visible ? "opacity-60" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-slate"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 7l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
