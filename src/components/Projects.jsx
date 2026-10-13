import { projects } from "../data.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Projects() {
  return (
    <Section id="projects" index={4} eyebrow="Projects" title={<>Things I have <em>built</em></>}>
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 120}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
