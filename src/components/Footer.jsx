import { profile } from "../data.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

const initials = profile.name.split(" ").map((w) => w[0]).join("");

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="nav__logo" aria-label="Back to top">
          <span className="nav__mark">{initials}</span>
          <span>{profile.name}</span>
        </a>
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React and Vite.
        </p>
        <div className="socials socials--small">
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
    </footer>
  );
}
