"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ end = 0, duration = 2000 }) {
  const [display, setDisplay] = useState(() => (typeof end === "string" ? end : String(end)));
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const s = String(end).trim();

    const match = s.match(/[\d,.]+/);
    const numeric = match ? Number(match[0].replace(/,/g, "")) : NaN;
    const suffix = match ? s.replace(match[0], "") : s.replace(/[\d,.]/g, "");

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
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * ease);
      setDisplay(String(current) + suffix);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
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
