"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "clip-up"
  | "clip-left";

const ANIMATION_MAP: Record<
  AnimationType,
  { from: gsap.TweenVars; to: gsap.TweenVars }
> = {
  "fade-up": {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  },
  "fade-left": {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
  },
  "fade-right": {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
  },
  "scale-up": {
    from: { opacity: 0, scale: 0.92 },
    to: { opacity: 1, scale: 1 },
  },
  "clip-up": {
    from: { clipPath: "inset(100% 0% 0% 0%)" },
    to: { clipPath: "inset(0% 0% 0% 0%)" },
  },
  "clip-left": {
    from: { clipPath: "inset(0% 100% 0% 0%)" },
    to: { clipPath: "inset(0% 0% 0% 0%)" },
  },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = ANIMATION_MAP[animation];
    gsap.set(el, anim.from);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          ...anim.to,
          duration,
          delay,
          ease: "power3.out",
          clearProps: "will-change",
        });
      },
    });

    return () => trigger.kill();
  }, [delay, duration, animation]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
