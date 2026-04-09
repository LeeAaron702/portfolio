"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            About
          </span>
        </ScrollReveal>

        <div className="mt-8 max-w-3xl">
          <ScrollReveal delay={0.1} animation="fade-left">
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              I build software{" "}
              <span style={{ color: "var(--color-accent-warm)" }}>
                that ships.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} animation="fade-up">
            <p
              className="mt-8 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{
                color: "var(--color-text-primary)",
                opacity: 0.7,
                lineHeight: 1.8,
              }}
            >
              I started writing code to solve problems no one had built a
              solution for yet. Now I turn manual work into software. I build
              it. I deploy it. I run it.
              <br />
              <br />
              Full-stack developer. Las Vegas. Hack Reactor &apos;23.
            </p>
          </ScrollReveal>
        </div>

        <div className="section-divider mt-14" />
      </div>
    </section>
  );
}
