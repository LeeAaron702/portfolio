"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TechIcon from "./TechIcon";

interface Project {
  name: string;
  description: string;
  tech: string[];
  screenshot?: string;
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

/* --- Top 2 get the full-width "hero" treatment --- */
const HERO_PROJECTS: Project[] = [
  {
    name: "eBay Arbitrage Monitor",
    description:
      "Real-time price monitoring for toner arbitrage. Tracks hundreds of listings, calculates profit margins, and sends Telegram alerts with matched Amazon listings and profit calculations.",
    tech: ["Python", "eBay API", "PostgreSQL", "FastAPI"],
    screenshots: [
      "/screenshots/ebay-monitor-2.jpg",
      "/screenshots/ebay-monitor-3.jpg",
    ],
    githubUrl: "https://github.com/LeeAaron702/ebay-arbitrage-monitor",
  },
  {
    name: "ResellPilot",
    description:
      "Telegram SaaS for eBay arbitrage. Real-time profit alerts and subscription billing. Scans live listings, calculates margins, sends instant Telegram notifications.",
    tech: ["FastAPI", "Telegram API", "eBay API", "Stripe", "PostgreSQL"],
    screenshot: "/screenshots/resellpilot.jpg",
    liveUrl: "https://resellpilot.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/ResellPilot",
  },
];

/* --- Rest go in the compact grid --- */
const GRID_PROJECTS: Project[] = [
  {
    name: "ChronosAI",
    description:
      "AI workspace for notes. Organize by project, ask AI questions about everything you've written.",
    tech: ["React", "Node.js", "MongoDB", "Ollama"],
    screenshot: "/screenshots/chronos-dashboard.jpg",
    liveUrl: "https://chronos.leeseaver.com",
  },
  {
    name: "ParcelParse",
    description:
      "OCR shipping label scanner — photograph a label, get structured data back. Stripe metered billing.",
    tech: ["FastAPI", "React", "GPT-4o", "Stripe", "PostgreSQL"],
    screenshot: "/screenshots/parcels.jpg",
    liveUrl: "https://parcels.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/ParcelParse",
  },
  {
    name: "Can I Camp Here?",
    description:
      "Camping legality checker. Cross-references federal land data with your GPS coordinates.",
    tech: ["React", "Node.js", "PostgreSQL"],
    screenshot: "/screenshots/camping.jpg",
    liveUrl: "https://camping.leeseaver.com",
  },
  {
    name: "IG Reel Analyzer",
    description:
      "Paste an Instagram Reel URL, get content analysis, hook breakdowns, and engagement predictions.",
    tech: ["React", "FastAPI", "GPT-4o", "Whisper"],
    screenshot: "/screenshots/reels.jpg",
    liveUrl: "https://reels.leeseaver.com",
  },
];

const MORE_PROJECTS = [
  {
    name: "Daedalus",
    desc: "Multi-model AI app — GPT-4, Claude, Gemini with token tracking",
    url: "https://daedalus.leeseaver.com",
  },
  {
    name: "NotionLite",
    desc: "AI-powered note-taking with search and chat — Next.js + MongoDB + Ollama",
    url: "https://notes.leeseaver.com",
  },
  {
    name: "Proco OCR",
    desc: "GPT-4o vision pipeline — 8hrs/day of manual data entry reduced to <1hr",
    url: null,
  },
  {
    name: "Typhon",
    desc: "Media processing — Whisper + GPT-4 Vision pipeline",
    url: "https://github.com/LeeAaron702/Typhon",
  },
  {
    name: "PouchPal",
    desc: "iOS finance app — App Store, widgets, Siri",
    url: null,
  },
];

/* Browser frame */
function BrowserFrame({
  url,
  src,
  alt,
  compact = false,
}: {
  url: string;
  src: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--color-border)",
        background: "var(--color-bg-elevated)",
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg-subtle)",
        }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div
          className="flex-1 text-center font-mono truncate"
          style={{ color: "var(--color-text-tertiary)", fontSize: "10px" }}
        >
          {url}
        </div>
      </div>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: compact ? "16/9" : "16/10" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes={compact ? "400px" : "600px"}
        />
        {/* Lighter bottom fade — only 15% height */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "15%",
            background:
              "linear-gradient(to top, var(--color-bg-elevated) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* iPhone frame with vertically scrolling Telegram messages */
function IPhoneFrame({ images }: { images: string[] }) {
  return (
    <div className="flex justify-center">
      <div
        className="relative rounded-[2.5rem] overflow-hidden"
        style={{
          width: "260px",
          height: "520px",
          border: "4px solid #2A2D33",
          background: "#1a1d27",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10"
          style={{ width: "120px", height: "24px", background: "#2A2D33" }}
        />
        {/* Status bar */}
        <div
          className="relative z-10 flex items-center justify-between px-6 pt-1"
          style={{ height: "44px" }}
        >
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            9:40 PM
          </span>
        </div>
        {/* Scrolling content */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ top: "44px", borderRadius: "inherit" }}
        >
          <div className="phone-scroll-animation">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Telegram message ${i + 1}`}
                width={520}
                height={1000}
                className="w-full h-auto"
                sizes="260px"
              />
            ))}
          </div>
        </div>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #1a1d27, transparent)" }}
        />
        {/* Home indicator */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full z-10"
          style={{ width: "100px", height: "4px", background: "rgba(255,255,255,0.2)" }}
        />
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-accent hover:text-white"
          style={{
            color: "var(--color-accent)",
            border: "1px solid var(--color-accent)",
          }}
        >
          Live
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-bg-subtle"
          style={{
            color: "var(--color-text-tertiary)",
            border: "1px solid var(--color-border)",
          }}
        >
          Source
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Work
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1} animation="fade-right">
          <h2
            className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Featured Projects
          </h2>
        </ScrollReveal>

        {/* --- Hero projects: full-width alternating --- */}
        <div className="mt-10 space-y-20">
          {HERO_PROJECTS.map((project, i) => (
            <ScrollReveal
              key={project.name}
              delay={0.1}
              animation={i % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div
                className="group grid md:grid-cols-2 gap-10 items-center rounded-2xl p-6 md:p-10 transition-colors duration-500"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <h3
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="mt-3 text-sm md:text-base leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <TechIcon key={t} name={t} />
                    ))}
                  </div>
                  <div className="mt-5">
                    <ProjectLinks project={project} />
                  </div>
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  {project.screenshots ? (
                    <IPhoneFrame images={project.screenshots} />
                  ) : project.screenshot ? (
                    <BrowserFrame
                      url={
                        project.liveUrl
                          ? project.liveUrl.replace("https://", "")
                          : project.name.toLowerCase().replace(/\s+/g, "")
                      }
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                    />
                  ) : null}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* --- Grid projects: 2-up --- */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {GRID_PROJECTS.map((project, i) => (
            <ScrollReveal
              key={project.name}
              delay={i % 2 === 0 ? 0 : 0.1}
              animation="scale-up"
            >
              <div
                className="group rounded-xl overflow-hidden transition-all duration-500 hover:translate-y-[-4px] h-full flex flex-col"
                style={{
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-elevated)",
                }}
              >
                {/* Screenshot */}
                {project.screenshot && (
                  <BrowserFrame
                    url={
                      project.liveUrl
                        ? project.liveUrl.replace("https://", "")
                        : project.name.toLowerCase().replace(/\s+/g, "")
                    }
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    compact
                  />
                )}

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-display text-lg font-bold tracking-tight group-hover:text-accent transition-colors duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed flex-1"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <TechIcon key={t} name={t} />
                    ))}
                  </div>
                  <div className="mt-4">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* More projects */}
        <div className="mt-16">
          <ScrollReveal animation="fade-right">
            <h3
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              More Work
            </h3>
          </ScrollReveal>
          <div className="space-y-3">
            {MORE_PROJECTS.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.05} animation="fade-left">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-3 min-w-0">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-base font-semibold link-underline shrink-0"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {p.name}
                      </a>
                    ) : (
                      <span
                        className="font-display text-base font-semibold shrink-0"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {p.name}
                      </span>
                    )}
                    <span
                      className="text-sm truncate hidden sm:inline"
                      style={{ color: "var(--color-text-tertiary)" }}
                    >
                      {p.desc}
                    </span>
                  </div>
                  <div
                    className="flex-1 border-b hidden sm:block"
                    style={{
                      borderColor: "var(--color-border)",
                      minWidth: "2rem",
                    }}
                  />
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs shrink-0"
                      style={{ color: "var(--color-text-tertiary)" }}
                    >
                      &rarr;
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
