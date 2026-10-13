import { useState } from "react";
import { navLinks, profile } from "../data.js";
import useActiveSection from "../hooks/useActiveSection.js";
import useScrollProgress from "../hooks/useScrollProgress.js";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons.jsx";

const ids = navLinks.map((l) => l.id);
const initials = profile.name.split(" ").map((w) => w[0]).join("");

export default function Navbar({ theme, onToggleTheme }) {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const { progress, y } = useScrollProgress();

  const close = () => setOpen(false);

  return (
    <header className={`nav ${y > 24 ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={close} aria-label="Back to top">
          <span className="nav__mark">{initials}</span>
          <span className="nav__brand">{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
