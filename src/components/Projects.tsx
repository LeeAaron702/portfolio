"use client";

import { useRef, useState, useEffect } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "ParcelParse",
    description:
      "OCR SaaS that extracts structured data from shipping labels. Snap a photo, get parseable JSON. Stripe metered billing.",
    impact: "95% OCR accuracy",
    tech: ["FastAPI", "React", "Stripe", "GPT-4o", "PostgreSQL"],
    liveUrl: "https://parcels.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/ParcelParse",
    gradient: "linear-gradient(135deg, #2563EB, #06B6D4)",
    icon: "\u{1F4E6}",
  },
  {
    title: "ResellPilot",
    description:
      "Telegram SaaS for eBay resellers. Real-time profit alerts, arbitrage detection, automated monitoring with subscription billing.",
    impact: "$5K+/day in deals monitored",
    tech: ["FastAPI", "Stripe", "Telegram API", "eBay API", "PostgreSQL"],
    liveUrl: "https://resellpilot.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/ResellPilot",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
    icon: "\u{1F4B0}",
  },
  {
    title: "Daedalus",
    description:
      "Multi-model AI SaaS with conversation management, token tracking, and usage-based billing. Supports GPT-4, Claude, and Gemini.",
    impact: "Full SaaS with Stripe billing",
    tech: ["Next.js", "Stripe", "OpenAI API", "Tailwind", "Prisma"],
    liveUrl: "https://daedalus.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/Daedalus",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    icon: "\u{1F9E0}",
  },
  {
    title: "Can I Camp Here?",
    description:
      "Geospatial tool that checks camping legality at any US coordinate using BLM federal land ownership data. Offline-first.",
    impact: "100K+ land parcels indexed",
    tech: ["Leaflet", "BLM SMA API", "JavaScript", "GeoJSON"],
    liveUrl: "https://camping.leeseaver.com",
    githubUrl: "https://github.com/LeeAaron702/can-i-camp-here",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    icon: "\u{26FA}",
  },
  {
    title: "Typhon",
    description:
      "Media processing suite \u2014 transcription via Whisper, summarization, and content generation from audio/video files.",
    impact: "4 AI models in one pipeline",
    tech: ["FastAPI", "React", "Whisper", "GPT-4", "ElevenLabs"],
    githubUrl: "https://github.com/LeeAaron702/Typhon",
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    icon: "\u{1F3AC}",
  },
  {
    title: "PouchPal",
    description:
      "iOS finance app with home screen widgets, Siri integration, and daily spending tracking. Published on the App Store.",
    impact: "Live on App Store",
    tech: ["SwiftUI", "WidgetKit", "Siri Shortcuts", "CoreData"],
    gradient: "linear-gradient(135deg, #14B8A6, #06B6D4)",
    icon: "\u{1F4F1}",
  },
  {
    title: "Proco Shipping Label OCR",
    description:
      "GPT-4o vision pipeline for warehouse label processing. Replaced 8 hours of manual data entry per day.",
    impact: "8hrs/day reduced to <1hr",
    tech: ["GPT-4o Vision", "Python", "FastAPI", "OCR"],
    gradient: "linear-gradient(135deg, #F97316, #EF4444)",
    icon: "\u{1F3F7}\uFE0F",
  },
  {
    title: "eBay Arbitrage Monitor",
    description:
      "Real-time cross-platform price monitoring for toner cartridge arbitrage. Detects profitable spreads instantly.",
    impact: "$5K+/day in volume detected",
    tech: ["Python", "eBay API", "Telegram", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
    icon: "\u{1F4CA}",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-blue">
            02 / Projects
          </span>
        </div>

        <h2
          className={`font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: "var(--color-navy)" }}
        >
          Featured Work
        </h2>
        <p
          className={`text-lg max-w-2xl mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: "var(--color-slate)" }}
        >
          Production systems tied to real revenue, real users, and real
          operational savings. Not side projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
