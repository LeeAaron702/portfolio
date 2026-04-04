"use client";

import { useRef, useState, useEffect } from "react";

const IOS_APPS = [
  {
    name: "PouchPal",
    tagline: "Smart budgeting with widgets & Siri",
    description:
      "Personal finance tracker published on the App Store. Daily spending insights, home screen widgets for at-a-glance budgets, and Siri Shortcuts for voice-powered expense logging.",
    tech: ["SwiftUI", "WidgetKit", "Siri Shortcuts", "Core Data"],
    gradient: "linear-gradient(135deg, #14B8A6, #06B6D4)",
    features: ["Home Screen Widgets", "Siri Integration", "Daily Insights", "Core Data Sync"],
  },
  {
    name: "Speedometer",
    tagline: "Minimalist live GPS speed",
    description:
      "Clean, focused iOS app that displays real-time GPS speed with a beautiful analog-inspired interface. CoreLocation for precision, zero bloat.",
    tech: ["SwiftUI", "CoreLocation", "GPS"],
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    features: ["Live GPS Speed", "Minimal UI", "Speed Alerts", "Trip Logging"],
  },
];

export default function IOSShowcase() {
  const ref = useRef<HTMLDivElement>(null);
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
    <div ref={ref} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* iOS badge */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              background: "var(--gradient-accent-subtle)",
              color: "var(--color-blue)",
              border: "1px solid rgba(37,99,235,0.15)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            iOS Apps
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {IOS_APPS.map((app, i) => (
            <div
              key={app.name}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Gradient header */}
              <div
                className="px-8 py-8 text-white"
                style={{ background: app.gradient }}
              >
                <h3 className="font-display text-2xl font-bold">{app.name}</h3>
                <p className="text-sm opacity-90 mt-1">{app.tagline}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {app.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-6">
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-slate)" }}
                >
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </div>
  );
}
