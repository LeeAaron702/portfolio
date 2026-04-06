"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextScramble from "./TextScramble";
import HeroMesh from "./HeroMesh";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLDivElement>(null);
  const nameBlockRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const meshWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    // Mesh fades in first
    tl.fromTo(
      meshWrapRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.8, ease: "power2.out" }
    )
      // Photo: clip-path reveal from bottom + slight scale
      .fromTo(
        photoRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
        },
        0.3
      )
      .fromTo(
        photoImgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.4, ease: "power3.out" },
        "<"
      )
      // Name block
      .fromTo(
        nameBlockRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
        "-=0.8"
      )
      // Tag slides in from right
      .fromTo(
        tagRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      // Status dot
      .fromTo(
        statusRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      // Scroll line
      .fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.6, ease: "power2.out" },
        "-=0.1"
      );

    // Parallax on scroll
    if (sectionRef.current && photoRef.current && nameBlockRef.current) {
      gsap.to(photoRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
      gsap.to(nameBlockRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center px-6 overflow-hidden"
    >
      {/* 3D Mesh background */}
      <div ref={meshWrapRef} className="opacity-0">
        <HeroMesh />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "50vw",
          height: "60vh",
          top: "30%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left — Portrait */}
        <div
          ref={photoRef}
          className="relative rounded-2xl overflow-hidden order-2 md:order-1"
          style={{
            clipPath: "inset(100% 0% 0% 0%)",
            aspectRatio: "3/4",
            maxHeight: "60vh",
            border: "1px solid var(--color-border)",
          }}
        >
          <div ref={photoImgRef} className="w-full h-full">
            <Image
              src="/lee-hero.png"
              alt="Lee Seaver"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Subtle blue edge light on right side */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(0,102,255,0.08) 0%, transparent 30%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, var(--color-bg) 0%, transparent 20%)",
            }}
          />
        </div>

        {/* Right — Name + Info */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <div ref={nameBlockRef} className="opacity-0">
            <h1
              className="font-display font-extrabold tracking-tighter leading-[0.9]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--color-text-primary)",
              }}
            >
              <TextScramble text="LEE" delay={0.6} duration={0.8} />
              <br />
              <TextScramble text="SEAVER" delay={0.9} duration={1.0} />
            </h1>
          </div>

          <p
            ref={tagRef}
            className="mt-6 font-mono text-sm tracking-wider uppercase opacity-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Full-Stack Engineer &amp; AI Integration
          </p>

          <div
            ref={statusRef}
            className="mt-6 flex items-center gap-2 opacity-0"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--color-accent-warm)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "var(--color-accent-warm)" }}
              />
            </span>
            <span
              className="font-mono text-xs tracking-wider"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              Open to contract &amp; freelance
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Scroll
        </span>
        <div
          ref={lineRef}
          className="origin-top"
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--color-text-tertiary), transparent)",
            transformOrigin: "top",
          }}
        />
      </div>
    </section>
  );
}
