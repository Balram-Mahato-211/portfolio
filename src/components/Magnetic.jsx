import { useRef } from "react";
import { finePointer, reducedMotion } from "../lib/motion.js";

const active = finePointer && !reducedMotion;

// Pulls its child a little toward the pointer while hovered.
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    // Measure from the resting position, not the already shifted one.
    const cx = r.left - offset.current.x + r.width / 2;
    const cy = r.top - offset.current.y + r.height / 2;
    const x = (e.clientX - cx) * strength;
    const y = (e.clientY - cy) * strength;
    offset.current = { x, y };
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    offset.current = { x: 0, y: 0 };
    ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      className="magnetic"
      onMouseMove={active ? onMove : undefined}
      onMouseLeave={active ? onLeave : undefined}
    >
      {children}
    </span>
  );
}
