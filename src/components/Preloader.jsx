import { useEffect, useRef, useState } from "react";
import { profile } from "../data.js";

const DURATION = 1200;
const initials = profile.name.split(" ").map((w) => w[0]).join("");

// Short intro: counts to 100, then the curtain lifts and the hero animates in.
export default function Preloader({ onReveal }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("loading");
  const revealRef = useRef(onReveal);
  revealRef.current = onReveal;

  useEffect(() => {
    let raf = 0;
    let timer = 0;
    const start = performance.now();

    const step = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setCount(Math.round((1 - (1 - t) ** 3) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(step);
        return;
      }
      setPhase("leaving");
      revealRef.current();
      timer = setTimeout(() => setPhase("done"), 1100);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "preloader--leave" : ""}`} aria-hidden="true">
      <div className="preloader__inner">
        <span className="preloader__mark">{initials}</span>
        <span className="preloader__name">{profile.name}</span>
        <span className="preloader__bar">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </span>
      </div>
      <span className="preloader__count">{count}</span>
    </div>
  );
}
