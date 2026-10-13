import { ExternalIcon, GithubIcon } from "./Icons.jsx";

// The outer div carries the tilt angles (set by usePointerEffects);
// the card reads them, and `spot` adds the glow that follows the pointer.
export default function ProjectCard({ project, index }) {
  return (
    <div className="tilt" data-tilt="7">
      <article className="card spot">
        <div className="card__body">
          <div className="card__top">
            <span className="card__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="card__arrow" aria-hidden="true">
              <ExternalIcon />
            </span>
          </div>
          <h3 className="card__name">{project.name}</h3>
          <p className="card__subtitle">{project.subtitle}</p>
          <p className="card__desc">{project.description}</p>

          {project.tech.length > 0 && (
            <ul className="card__tech">
              {project.tech.map((t) => (
                <li key={t} className="chip chip--small">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card__links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
