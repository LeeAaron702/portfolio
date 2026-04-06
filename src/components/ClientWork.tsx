"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const CASE_STUDIES = [
  {
    client: "BREATHE! Convention",
    tagline: "Web3 & AI tech convention — Las Vegas",
    description:
      "Built from zero digital presence to full marketing operation in 5 months. Webflow site, NFT ticketing, omni-channel ad campaigns.",
    metrics: [
      { value: "6x", label: "ROAS" },
      { value: "5,000+", label: "Monthly Visitors" },
      { value: "$25", label: "Cost / Ticket" },
    ],
    screenshot: "/screenshots/breathe-convention.png",
  },
  {
    client: "BioHarmonic Technologies",
    tagline: "Wellness technology — vibroacoustic therapy",
    description:
      "End-to-end marketing system, paid ads, email automation. 200% sales growth in 3 months, $44K email revenue, 250+ qualified leads at $2.50 CPL.",
    metrics: [
      { value: "+200%", label: "Sales Growth" },
      { value: "$44K", label: "Email Revenue" },
      { value: "+87%", label: "Database Growth" },
    ],
    screenshot: "/screenshots/bioharmonic.png",
  },
  {
    client: "Chezaray Photography",
    tagline: "Brand photography studio — Las Vegas",
    description:
      "Website redesign, automated lead gen and nurturing, Google Ads optimization, and database reactivation to convert past clients.",
    metrics: [
      { value: "Auto", label: "Lead Nurturing" },
      { value: "SEO", label: "Optimized" },
      { value: "Ads", label: "Google / Meta" },
    ],
    screenshot: "/screenshots/chezaray.png",
  },
];

export default function ClientWork() {
  return (
    <section className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Client Work
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1} animation="fade-left">
          <h2
            className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Hidden Blueprint Clients
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Marketing systems, web development, and growth campaigns I led as VP
            of Engineering.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.client} delay={0.1 + i * 0.1} animation="scale-up">
              <div
                className="group rounded-xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:translate-y-[-4px]"
                style={{
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-elevated)",
                }}
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.screenshot}
                    alt={`${study.client} case study`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: "20%",
                      background:
                        "linear-gradient(to top, var(--color-bg-elevated) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-display text-lg font-bold tracking-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {study.client}
                  </h3>
                  <p
                    className="mt-1 font-mono text-[10px] tracking-wider uppercase"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {study.tagline}
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed flex-1"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div
                    className="mt-4 pt-4 flex gap-4"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="font-mono text-base font-bold"
                          style={{ color: "var(--color-accent-warm)" }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="font-mono text-[9px] tracking-wider uppercase"
                          style={{ color: "var(--color-text-tertiary)" }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
