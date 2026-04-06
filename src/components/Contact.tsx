"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          honeypot: (document.getElementById("hp-field") as HTMLInputElement)
            ?.value,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Failed to send. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-right">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent-warm)" }}
          >
            Contact
          </span>
        </ScrollReveal>

        <div className="mt-8 grid md:grid-cols-2 gap-16 items-start">
          {/* Left — heading + links */}
          <div>
            <ScrollReveal delay={0.1} animation="fade-left">
              <h2
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                style={{ color: "var(--color-text-primary)" }}
              >
                Let&apos;s work
                <br />
                <span style={{ color: "var(--color-accent)" }}>together.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} animation="fade-up">
              <p
                className="mt-6 text-base max-w-lg"
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                I build full-stack apps, AI integrations, e-commerce platforms,
                and automation systems. If you have a project, I&apos;d like to
                hear about it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} animation="fade-up">
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="mailto:Lee.Seaver@gmail.com"
                  className="group inline-flex items-center gap-3 link-underline w-fit"
                >
                  <span
                    className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-accent"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Lee.Seaver@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/LeeAaron702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider uppercase link-underline transition-colors duration-300 hover:text-text-primary"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lee-aaron-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider uppercase link-underline transition-colors duration-300 hover:text-text-primary"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/Lee-Seaver-Resume.pdf"
                    download
                    className="font-mono text-xs tracking-wider uppercase link-underline transition-colors duration-300 hover:text-text-primary"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — contact form */}
          <ScrollReveal delay={0.2} animation="scale-up">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl p-6 md:p-8"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Honeypot — hidden from humans */}
              <input
                id="hp-field"
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  width: 0,
                }}
              />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs tracking-wider uppercase mb-2"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-300 focus:ring-1"
                    style={{
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      // @ts-expect-error CSS custom property for focus ring
                      "--tw-ring-color": "var(--color-accent)",
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs tracking-wider uppercase mb-2"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-300 focus:ring-1"
                    style={{
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      // @ts-expect-error CSS custom property for focus ring
                      "--tw-ring-color": "var(--color-accent)",
                    }}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs tracking-wider uppercase mb-2"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none focus:ring-1"
                    style={{
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      // @ts-expect-error CSS custom property for focus ring
                      "--tw-ring-color": "var(--color-accent)",
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-mono text-sm tracking-wider uppercase py-3 rounded-lg transition-all duration-300 hover:brightness-110 disabled:opacity-50"
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p
                    className="text-sm text-center"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Message sent. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-center" style={{ color: "#ef4444" }}>
                    {errorMsg}
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="mt-32 pb-8">
          <p
            className="font-mono text-xs"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Designed &amp; built by Lee Seaver &middot;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
