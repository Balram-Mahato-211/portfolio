import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  ServerIcon,
  TerminalIcon,
} from "./Icons.jsx";

const icons = {
  code: CodeIcon,
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  terminal: TerminalIcon,
  cloud: CloudIcon,
};

export default function Skills() {
  return (
    <Section id="skills" index={3} eyebrow="Skills" title={<>My <em>toolkit</em></>}>
      <div className="skills">
        {skills.map((row, i) => {
          const Icon = icons[row.icon] || CodeIcon;
          return (
            <Reveal key={row.group} delay={(i % 3) * 90}>
              <div className="skill spot">
                <span className="skill__icon">
                  <Icon />
                </span>
                <h3>{row.group}</h3>
                <ul className="stagger">
                  {row.items.map((item, j) => (
                    <li key={item} className="chip" style={{ "--i": j }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
