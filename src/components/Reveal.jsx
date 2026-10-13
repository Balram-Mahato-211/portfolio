import { useEffect, useRef, useState } from "react";

// Animates children in once when they scroll into view.
// variant: "up" (default), "left", "right" or "scale".
// Children with the `stagger` class animate their own children one by one.
export default function Reveal({ children, delay = 0, variant = "up", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? "reveal--in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
