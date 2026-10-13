import { useEffect, useRef } from "react";
import { finePointer, reducedMotion } from "../lib/motion.js";

const enabled = finePointer && !reducedMotion;

// A soft glow under the pointer plus a ring that trails it and grows over links.
// Mouse only; the native cursor stays visible.
export default function Cursor() {
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const glow = glowRef.current;
    let x = -200;
    let y = -200;
    let rx = x;
    let ry = y;
    let gx = x;
    let gy = y;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      gx += (x - gx) * 0.08;
      gy += (y - gy) * 0.08;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      const settled = Math.abs(x - gx) < 0.3 && Math.abs(y - gy) < 0.3;
      raf = settled ? 0 : requestAnimationFrame(loop);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      ring.classList.add("is-visible");
      glow.classList.add("is-visible");
      kick();
    };
    const onOver = (e) => {
      const hit = e.target instanceof Element && e.target.closest("a, button, .chip");
      ring.classList.toggle("is-hover", Boolean(hit));
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      ring.classList.remove("is-visible");
      glow.classList.remove("is-visible");
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
    </>
  );
}
