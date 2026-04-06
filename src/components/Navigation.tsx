"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div
          className="mt-4 flex items-center justify-between rounded-xl px-6 py-3"
          style={{
            background: "rgba(8, 9, 10, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--color-border)",
          }}
        >
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight text-text-primary"
          >
            LS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-all duration-300"
                style={{ letterSpacing: "0.02em" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden mt-2 rounded-xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(8, 9, 10, 0.95)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--color-border)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
