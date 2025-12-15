// components/Counter.jsx
"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - end: number | string (e.g. 500, "500+", "99%")
 *  - duration: milliseconds (default 2000)
 */
export default function Counter({ end = 0, duration = 2000 }) {
  const [display, setDisplay] = useState(() => (typeof end === "string" ? end : String(end)));
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // extract numeric part and suffix
    const s = String(end).trim();

    // match first contiguous digits/decimal/comma group
    const match = s.match(/[\d,.]+/);
    const numeric = match ? Number(match[0].replace(/,/g, "")) : NaN;
    const suffix = match ? s.replace(match[0], "") : s.replace(/[\d,.]/g, "");

    // if not a number, just show raw string (no animation)
    if (!isFinite(numeric)) {
      setDisplay(s);
      return;
    }

    const start = 0;
    const target = numeric;
    const startTimeRef = { value: null };

    const step = (timestamp) => {
      if (!startTimeRef.value) startTimeRef.value = timestamp;
      const elapsed = timestamp - startTimeRef.value;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * ease);
      setDisplay(String(current) + suffix);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure final value exactly equals target
        setDisplay(String(target) + suffix);
        cancelAnimationFrame(rafRef.current);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  return <span>{display}</span>;
}
