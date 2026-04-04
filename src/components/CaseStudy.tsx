"use client";

import { useRef, useState, useEffect } from "react";

const STATS = [
  { value: "1,200+", label: "Products Listed" },
  { value: "95%", label: "Lighthouse Score" },
  { value: "SEO", label: "Blog Pipeline" },
  { value: "Full", label: "Merchant Feeds" },
];

const FEATURES = [
  "Custom e-commerce frontend with category browsing, search, and filtering across 1,200+ remanufactured parts",
  "SEO-optimized slug URLs for every product and category page \u2014 built for organic Google traffic",
  "Automated blog content pipeline generating keyword-targeted posts for long-tail search capture",
  "Google Merchant Center product feeds syncing the full catalog for Shopping ads",
  "Full analytics stack \u2014 Google Analytics 4 + Google Tag Manager for conversion tracking",
  "Cart abandonment recovery system to recapture lost sales",
];

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-blue">
            03 / Case Study
          </span>
        </div>

        <div
          className={`mt-8 glass-card rounded-3xl overflow-hidden transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ cursor: "default" }}
          onMouseEnter={() => {}}
        >
          {/* Header gradient */}
          <div
            className="px-8 md:px-12 py-10 md:py-14"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.06) 100%)",
            }}
          >
            <span
              className="inline-block text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{
                background: "rgba(37,99,235,0.1)",
                color: "var(--color-blue)",
              }}
            >
              Client Work
            </span>
            <h3
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2"
              style={{ color: "var(--color-navy)" }}
            >
              score-auto-parts
            </h3>
            <p className="text-lg" style={{ color: "var(--color-slate)" }}>
              B2C E-Commerce for Remanufactured Auto Parts
            </p>
          </div>

          <div className="px-8 md:px-12 py-10 md:py-12">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 rounded-xl transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    background: "var(--color-ice)",
                    border: "1px solid var(--color-border)",
                    transitionDelay: `${300 + i * 80}ms`,
                  }}
                >
                  <div className="font-display text-2xl font-bold gradient-accent-text">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem */}
            <div className="mb-10">
              <h4
                className="font-display text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-navy-muted)" }}
              >
                The Problem
              </h4>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                Score Auto Parts needed a modern storefront to sell
                remanufactured auto parts direct to consumers. The existing
                setup had no SEO presence, no structured catalog, and no
                scalable way to list 1,200+ parts with proper categorization.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <h4
                className="font-display text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-navy-muted)" }}
              >
                What I Built
              </h4>
              <ul className="space-y-3">
                {FEATURES.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-base leading-relaxed transition-all duration-500 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      color: "var(--color-slate)",
                      transitionDelay: `${500 + i * 60}ms`,
                    }}
                  >
                    <svg
                      className="mt-1.5 shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Google Merchant API",
                "GA4",
                "GTM",
                "Stripe",
              ].map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
