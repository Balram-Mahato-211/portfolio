import { profile } from "../data.js";
import useTyped from "../hooks/useTyped.js";
import Magnetic from "./Magnetic.jsx";
import ParticleField from "./ParticleField.jsx";
import {
  ArrowRightIcon,
  CapIcon,
  DownloadIcon,
  GithubIcon,
  LeafIcon,
  LinkedinIcon,
  MailIcon,
  NodeIcon,
  ReactIcon,
} from "./Icons.jsx";

// `ready` flips once the preloader lifts; CSS then plays the entrance.
// Elements with `enter` animate in order of their --d value.
export default function Hero({ ready }) {
  const typed = useTyped(profile.roles);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section className={`hero ${ready ? "hero--ready" : ""}`} id="top">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--purple" aria-hidden="true" />
      <ParticleField />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__status enter" style={{ "--d": 0 }}>
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </p>
          <p className="hero__hello enter" style={{ "--d": 1 }}>
            Hi, I am
          </p>
          <h1 className="hero__name">
            <span className="sr-only">{profile.name}</span>
            <span className="word" aria-hidden="true">
              <span style={{ "--d": 0 }}>{first}</span>
            </span>
            <span className="word" aria-hidden="true">
              <span className="shine" style={{ "--d": 1 }}>
                {rest.join(" ")}
              </span>
            </span>
          </h1>
          <p className="hero__role enter" style={{ "--d": 4 }} aria-live="off">
            <span>{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero__intro enter" style={{ "--d": 5 }}>
            {profile.intro}
          </p>

          <div className="hero__cta enter" style={{ "--d": 6 }}>
            <Magnetic>
              <a className="btn btn--primary" href="#projects">
                View projects
                <span className="btn__arrow">
                  <ArrowRightIcon />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href={profile.resume} download>
                <DownloadIcon /> Download resume
              </a>
            </Magnetic>
          </div>

          <div className="socials enter" style={{ "--d": 7 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="portrait" data-tilt="12">
          <div className="portrait__stage">
            <div className="portrait__aura" aria-hidden="true" />
            <span className="portrait__orbit" aria-hidden="true">
              <i />
            </span>
            <div className="portrait__frame">
              <img
                src={profile.photo}
                alt={profile.name}
                width="760"
                height="903"
                fetchpriority="high"
              />
              <span className="portrait__glare" aria-hidden="true" />
            </div>

            <div className="badge badge--a" aria-hidden="true">
              <ReactIcon /> React.js
            </div>
            <div className="badge badge--b" aria-hidden="true">
              <NodeIcon /> Node.js
            </div>
            <div className="badge badge--c" aria-hidden="true">
              <LeafIcon /> MongoDB
            </div>
            <div className="badge badge--d" aria-hidden="true">
              <span className="badge__icon">
                <CapIcon />
              </span>
              <span>
                <strong>B.Tech CSE</strong>
                <small>3rd year</small>
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll enter" style={{ "--d": 9 }} aria-label="Scroll to About">
        <span className="mouse" aria-hidden="true">
          <span />
        </span>
        <span aria-hidden="true">Scroll</span>
      </a>
    </section>
  );
}
