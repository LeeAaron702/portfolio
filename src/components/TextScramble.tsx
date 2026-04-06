"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Text scramble/decode effect — characters cycle through random values
 * before settling on the real letter. Classic cipher-decode aesthetic.
 */
export default function TextScramble({
  text,
  delay = 0,
  duration = 1.2,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [display, setDisplay] = useState(() =>
    text
      .split("")
      .map((ch) => (ch === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join("")
  );
  const [started, setStarted] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const msPerChar = (duration * 1000) / text.length;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const resolved = Math.floor(elapsed / msPerChar);

      const result = text.split("").map((ch, i) => {
        if (ch === " ") return " ";
        if (i < resolved) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(result.join(""));

      if (resolved < text.length) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, text, duration]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
