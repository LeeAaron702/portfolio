"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TechIcon from "./TechIcon";

const STATS = [
  { value: "1,200+", label: "Products Indexed", color: "var(--color-accent-warm)" },
  { value: "GA4", label: "Analytics & Tracking", color: "var(--color-accent)" },
  { value: "SEO", label: "Optimized for Search", color: "var(--color-accent-warm)" },
  { value: "Ads", label: "Ready for Paid", color: "var(--color-accent)" },
];

const BUILT = [
  "Full SEO overhaul — structured URLs, metadata, and sitemap for every product and category",
  "Automated blog content pipeline to capture long-tail search traffic",
  "Google Analytics (GA4) + Tag Manager setup for conversion tracking",
  "Google Merchant Center product feeds for Shopping ad campaigns",
  "Cart abandonment email recovery system",
  "Product catalog search and filtering across 1,200+ parts",
];

export default function CaseStudy() {
  return (
    <section className="py-0">
      {/* Full-bleed accent background */}
      <div className="case-study-bg">
        <div
          className="relative"
          style={{
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="section-padding px-6">
            <div className="max-w-[1200px] mx-auto">
              <ScrollReveal animation="fade-right">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--color-accent-warm)" }}
                >
                  Ongoing Project
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1} animation="fade-right">
                <div className="mt-6 flex items-center gap-5">
                  <Image
                    src="/score-auto-parts-logo.jpg"
                    alt="Score Auto Parts logo"
                    width={200}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                  <div>
                    <h2
                      className="font-display text-3xl md:text-5xl font-bold tracking-tight"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Score Auto Parts
                    </h2>
                    <p
                      className="mt-1 text-lg"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      B2C e-commerce for remanufactured auto parts — actively building and maintaining
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats — large, with color accents */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={0.15 + i * 0.08} animation="scale-up">
                    <div
                      className="rounded-xl p-5"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="font-display text-4xl md:text-5xl font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="mt-2 font-mono text-xs tracking-wider uppercase"
                        style={{ color: "var(--color-text-tertiary)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-14">
                {/* Problem */}
                <ScrollReveal delay={0.2} animation="fade-left">
                  <div>
                    <h3
                      className="font-mono text-xs tracking-widest uppercase mb-4"
                      style={{ color: "var(--color-accent-warm)" }}
                    >
                      The Problem
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.8,
                      }}
                    >
                      Score Auto Parts sells remanufactured parts direct to
                      consumers. When I came on, there was no analytics, no
                      SEO, no ad infrastructure — nothing in place to actually
                      drive traffic or measure what was working.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Solution */}
                <ScrollReveal delay={0.3} animation="fade-right">
                  <div>
                    <h3
                      className="font-mono text-xs tracking-widest uppercase mb-4"
                      style={{ color: "var(--color-accent-warm)" }}
                    >
                      What I&apos;ve Built So Far
                    </h3>
                    <ul className="space-y-3">
                      {BUILT.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm"
                          style={{
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.7,
                          }}
                        >
                          <span
                            className="mt-2 block w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--color-accent-warm)" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Tech */}
              <ScrollReveal delay={0.3} animation="fade-up">
                <div className="mt-10 flex flex-wrap gap-1.5">
                  {[
                    "GA4",
                    "GTM",
                    "Google Merchant API",
                    "Python",
                    "Stripe",
                  ].map((t) => (
                    <TechIcon key={t} name={t} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
