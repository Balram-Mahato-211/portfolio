import { useEffect } from "react";
import { finePointer, reducedMotion } from "../lib/motion.js";

// One delegated pointer listener drives two effects across the page:
// - `.spot` elements get --mx/--my so their glow and border follow the pointer.
// - `[data-tilt]` elements get --rx/--ry (tilt) and --px/--py (glare position).
export default function usePointerEffects() {
  useEffect(() => {
    if (!finePointer) return;
    let tilted = null;

    const reset = (el) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMove = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      const spot = target.closest(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      if (reducedMotion) return;
      const tilt = target.closest("[data-tilt]");
      if (tilted && tilted !== tilt) reset(tilted);
      tilted = tilt;
      if (!tilt) return;

      const r = tilt.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const max = Number(tilt.dataset.tilt) || 6;
      tilt.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
      tilt.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
      tilt.style.setProperty("--px", px.toFixed(3));
      tilt.style.setProperty("--py", py.toFixed(3));
    };

    const onLeave = () => {
      if (tilted) reset(tilted);
      tilted = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);
}
