import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import Cursor from "./components/Cursor.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import usePointerEffects from "./hooks/usePointerEffects.js";
import { reducedMotion } from "./lib/motion.js";

function getInitialTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  // With reduced motion there is no intro, so the hero shows straight away.
  const [ready, setReady] = useState(reducedMotion);
  usePointerEffects();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage can be blocked; the theme still works for this visit */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#06080F" : "#F5F6FB");
  }, [theme]);

  return (
    <>
      {!reducedMotion && <Preloader onReveal={() => setReady(true)} />}
      <Cursor />
      <div className="noise" aria-hidden="true" />
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
