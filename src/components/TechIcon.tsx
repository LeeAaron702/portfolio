"use client";

/* Maps tech names to devicon icon slugs + brand colors */
const TECH_MAP: Record<string, { icon: string; color: string }> = {
  // Languages
  Python: { icon: "python", color: "#3776AB" },
  TypeScript: { icon: "typescript", color: "#3178C6" },
  JavaScript: { icon: "javascript", color: "#F7DF1E" },
  Swift: { icon: "swift", color: "#FA7343" },

  // Frontend
  React: { icon: "react", color: "#61DAFB" },
  "Next.js": { icon: "nextjs", color: "#FFFFFF" },
  "Tailwind CSS": { icon: "tailwindcss", color: "#06B6D4" },
  Tailwind: { icon: "tailwindcss", color: "#06B6D4" },
  SwiftUI: { icon: "swift", color: "#FA7343" },

  // Backend
  FastAPI: { icon: "fastapi", color: "#009688" },
  "Node.js": { icon: "nodejs", color: "#339933" },
  PostgreSQL: { icon: "postgresql", color: "#4169E1" },
  MongoDB: { icon: "mongodb", color: "#47A248" },
  Prisma: { icon: "prisma", color: "#2D3748" },

  // AI/ML
  "OpenAI API": { icon: "openai", color: "#FFFFFF" },
  "GPT-4o": { icon: "openai", color: "#10A37F" },
  "GPT-4 Vision": { icon: "openai", color: "#10A37F" },
  Whisper: { icon: "openai", color: "#10A37F" },
  Ollama: { icon: "openai", color: "#FFFFFF" },
  ElevenLabs: { icon: "openai", color: "#FFFFFF" },

  // DevOps / Services
  Docker: { icon: "docker", color: "#2496ED" },
  Cloudflare: { icon: "cloudflare", color: "#F38020" },
  Git: { icon: "git", color: "#F05032" },
  Stripe: { icon: "stripe", color: "#635BFF" },

  // APIs
  "Telegram API": { icon: "telegram", color: "#26A5E4" },
  "eBay API": { icon: "ebay", color: "#E53238" },
  "Google Merchant API": { icon: "google", color: "#4285F4" },
  GA4: { icon: "google", color: "#E37400" },
  GTM: { icon: "google", color: "#246FDB" },

  // Misc
  "CI/CD": { icon: "githubactions", color: "#2088FF" },
};

export default function TechIcon({ name }: { name: string }) {
  const tech = TECH_MAP[name];

  if (!tech) {
    // Fallback to text badge
    return (
      <span
        className="font-mono text-xs px-2 py-1 rounded inline-flex items-center gap-1"
        style={{
          color: "var(--color-text-tertiary)",
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
        }}
      >
        {name}
      </span>
    );
  }

  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`;

  return (
    <span
      className="font-mono text-xs px-2.5 py-1.5 rounded inline-flex items-center gap-2"
      style={{
        color: tech.color,
        background: "var(--color-bg-subtle)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconUrl}
        alt={name}
        width={14}
        height={14}
        className="w-3.5 h-3.5"
        loading="lazy"
        onError={(e) => {
          // Hide broken images
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {name}
    </span>
  );
}
