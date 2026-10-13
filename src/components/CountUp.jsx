import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "../lib/motion.js";

// Counts from 0 to `value` the first time it scrolls into view.
export default function CountUp({ value, decimals = 0, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const [n, setN] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          setN(value * (1 - (1 - t) ** 4));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="stat__value">
      <span className="sr-only">
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {n.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
