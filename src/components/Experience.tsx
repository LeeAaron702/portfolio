"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const JOBS = [
  {
    company: "Inside Edge",
    url: "https://www.inside-edge.com",
    logo: null as string | null,
    role: "Software Developer & Data Analyst (Contract)",
    period: "Apr 2026 — Present",
    bullets: [
      "Sports analytics platform serving MLB, NFL, and NBA teams with real-time data pipelines",
      "Building and maintaining matchup data processing systems for daily game analysis",
      "Working with proprietary database systems and custom sports analytics tooling",
    ],
  },
  {
    company: "Hidden Blueprint",
    url: "https://www.hiddenblueprint.com",
    logo: "/hidden-blueprint-logo-new.svg",
    logoDark: true,
    role: "VP of Engineering & Software Development",
    period: "May 2023 — Present",
    bullets: [
      "Ran the GoHighLevel CRM — built all marketing automations, lead nurturing workflows, and client onboarding sequences",
      "Developed a conversational Voice AI demo with ElevenLabs + React for live client demonstrations",
      "Served as both marketing automation specialist and developer — bridging strategy and technical implementation across all client accounts",
      "Managed deployment lifecycle: Docker, CI/CD, Cloudflare DNS/SSL, dedicated infrastructure",
    ],
  },
  {
    company: "Professor Color",
    url: "https://www.professorcolor.com",
    logo: "/professor-color-logo.jpg",
    logoDark: false,
    role: "Software Engineer & Automation Lead",
    period: "Sept 2020 — Present",
    bullets: [
      "Built GPT-4o Vision OCR pipeline that reduced 8hrs/day manual data entry to under 1 hour, processing hundreds of labels daily",
      "Built eBay arbitrage monitor supporting $5K+/day in purchasing decisions, replacing manual sourcing",
      "Built QR-based customer service system serving 125+ product catalog, reducing support tickets",
      "Automated inventory sync between Amazon FBA, eBay, and internal systems",
    ],
  },
  {
    company: "Detailers of Las Vegas",
    url: null,
    logo: "/detailers-of-las-vegas-logo.webp",
    logoDark: false,
    role: "Operations Manager",
    period: "2018 — 2020",
    bullets: [
      "Managed day-to-day operations for a mobile auto detailing business across the Las Vegas valley",
      "Built scheduling and dispatch systems to coordinate a team of detailers across multiple locations",
      "Handled client acquisition, pricing strategy, and service quality standards",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Experience
          </span>
        </ScrollReveal>

        <div className="mt-14 space-y-16">
          {JOBS.map((job, i) => (
            <ScrollReveal
              key={job.company}
              delay={0.1 + i * 0.08}
              animation={i % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div
                className="relative pl-6"
                style={{
                  borderLeft: `2px solid ${i === 0 ? "var(--color-accent-warm)" : "var(--color-border)"}`,
                }}
              >
                {/* Current role indicator */}
                {i === 0 && (
                  <span
                    className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent-warm)" }}
                  />
                )}
                {job.logo && (
                  <div
                    className="mb-4 inline-block rounded-lg overflow-hidden"
                    style={
                      job.logoDark
                        ? {}
                        : {
                            background: "rgba(255,255,255,0.95)",
                            padding: "6px 10px",
                          }
                    }
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                )}
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {job.period}
                  </span>
                </div>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {job.role}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        className="mt-2 block w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--color-accent)" }}
                      />
                      {b}
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
