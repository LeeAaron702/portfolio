"use client";

import { useRef, useState, useEffect } from "react";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SwiftUI", "React Three Fiber"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "AI & ML",
    skills: ["OpenAI API", "GPT-4 Vision", "Whisper", "Ollama", "ElevenLabs", "Vector Embeddings"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Cloudflare", "Git", "CI/CD", "Stripe", "Telegram Bot API"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-blue">
            04 / Skills
          </span>
        </div>

        <h2
          className={`font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: "var(--color-navy)" }}
        >
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.label}
              className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + gi * 100}ms` }}
            >
              <h3
                className="font-display text-lg font-bold mb-5 flex items-center gap-3"
                style={{ color: "var(--color-navy)" }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-white"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  {String(gi + 1).padStart(2, "0")}
                </span>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={`tech-badge transition-all duration-500 ${
                      visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${300 + gi * 100 + si * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
