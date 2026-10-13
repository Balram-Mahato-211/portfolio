import { useEffect, useRef } from "react";
import { education } from "../data.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Education() {
  const listRef = useRef(null);

  // Fills the timeline line as the list scrolls through the viewport.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.7 - r.top) / r.height;
      el.style.setProperty("--progress", Math.min(1, Math.max(0, p)).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Section id="education" index={2} eyebrow="Education" title={<>Where I am <em>learning</em></>}>
      <ol className="timeline" ref={listRef}>
        {education.map((item, i) => (
          <li key={item.title} className="timeline__item">
            <Reveal delay={i * 90} variant="left">
              <div className="timeline__card spot">
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline__place">{item.place}</p>
                  <p className="timeline__meta">{item.detail}</p>
                </div>
                {item.period && <span className="timeline__period">{item.period}</span>}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
