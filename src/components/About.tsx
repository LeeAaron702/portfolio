"use client";

import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: "30+", label: "Projects Shipped" },
  { value: "2", label: "SaaS Platforms" },
  { value: "5", label: "Live Demos" },
  { value: "3+", label: "Years Building" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-blue">
            01 / About
          </span>
        </div>

        <div className="mt-8 grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: heading + bio */}
          <div className="md:col-span-3">
            <h2
              className={`font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ color: "var(--color-navy)" }}
            >
              I turn ideas into{" "}
              <span className="gradient-accent-text">shipped products</span>
              <br />— fast.
            </h2>
            <div
              className={`space-y-4 text-base leading-relaxed transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ color: "var(--color-slate)" }}
            >
              <p>
                Full-stack developer in Las Vegas. From OCR SaaS to iOS apps to
                real-time monitoring systems, I build the whole stack and put it
                in production.
              </p>
              <p>
                Hack Reactor &apos;23. I care about shipping — not credentials, not
                perfect code, not theoretical architecture. If it makes money or
                saves time, I&apos;ll build it.
              </p>
              <p>
                My infrastructure runs on my own hardware. I deploy with Docker,
                manage DNS through Cloudflare, and monitor everything myself.
                Full lifecycle ownership.
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className="font-display text-3xl md:text-4xl font-bold gradient-accent-text"
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
