"use client";

import ScrollReveal from "./ScrollReveal";

const COLUMNS = [
  {
    label: "Frontend",
    accent: "var(--color-accent)",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SwiftUI"],
  },
  {
    label: "Backend",
    accent: "var(--color-accent-warm)",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    label: "AI & ML",
    accent: "var(--color-accent)",
    skills: ["OpenAI API", "GPT-4 Vision", "Whisper", "Ollama", "ElevenLabs"],
  },
  {
    label: "DevOps",
    accent: "var(--color-accent-warm)",
    skills: ["Docker", "Cloudflare", "Git", "CI/CD", "Stripe"],
  },
];

export default function Skills() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Stack
          </span>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {COLUMNS.map((col, ci) => (
            <ScrollReveal key={col.label} delay={0.08 + ci * 0.1} animation="scale-up">
              <div
                className="rounded-xl p-5 h-full transition-all duration-500 hover:translate-y-[-4px]"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-mono text-sm md:text-base tracking-widest uppercase mb-5 pb-3"
                  style={{
                    color: col.accent,
                    borderBottom: `1px solid ${col.accent}33`,
                  }}
                >
                  {col.label}
                </h3>
                <ul className="space-y-2.5">
                  {col.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm flex items-center gap-2 transition-colors duration-300 hover:text-text-primary"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: col.accent }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="section-divider mt-20" />
      </div>
    </section>
  );
}
