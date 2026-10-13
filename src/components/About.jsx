import { profile, stats } from "../data.js";
import CountUp from "./CountUp.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const code = `const balram = {
  role: "Student developer",
  college: "Ramgarh Engineering College",
  stack: [
    "React", "Node.js",
    "Express", "MongoDB"
  ],
  lookingFor: "Internships",
};`;
const lines = code.split("\n");

// Minimal syntax colouring: strings, the `const` keyword and object keys.
function highlight(line) {
  const re = /("[^"]*")|\b(const)\b|(\w+)(?=:)/g;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const cls = m[1] ? "tk-str" : m[2] ? "tk-kw" : "tk-key";
    out.push(
      <span key={m.index} className={cls}>
        {m[0]}
      </span>
    );
    last = re.lastIndex;
  }
  out.push(line.slice(last));
  return out;
}

export default function About() {
  return (
    <Section id="about" index={1} eyebrow="About me" title={<>Learning by <em>building</em></>}>
      <div className="about">
        <div className="about__text">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="right" delay={150}>
          <div className="codecard spot" aria-hidden="true">
            <div className="codecard__bar">
              <span /> <span /> <span />
              <em>balram.js</em>
            </div>
            <pre>
              <code className="stagger">
                {lines.map((line, i) => (
                  <span key={i} className="code-line" style={{ "--i": i }}>
                    {highlight(line)}
                    {i === lines.length - 1 && <span className="caret" />}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} variant="scale">
            <div className="stat spot">
              <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
              <span className="stat__label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
