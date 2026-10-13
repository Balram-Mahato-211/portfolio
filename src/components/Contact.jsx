import { profile } from "../data.js";
import Magnetic from "./Magnetic.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import {
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons.jsx";

export default function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
    { label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}`, icon: <PhoneIcon /> },
    { label: "GitHub", value: "Balram-Mahato-211", href: profile.github, icon: <GithubIcon />, external: true },
    { label: "LinkedIn", value: "Balram Mahato", href: profile.linkedin, icon: <LinkedinIcon />, external: true },
  ];

  return (
    <Section id="contact" index={5} eyebrow="Contact" title={<>Let’s <em>work together</em></>}>
      <Reveal>
        <p className="contact__lead">
          I am open to software developer internships and placement opportunities. The quickest way to reach me is email.
        </p>
      </Reveal>

      <div className="contact">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 80} variant="scale">
            <a
              className="contact__item spot"
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact__icon">{item.icon}</span>
              <span className="contact__text">
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </span>
              <span className="contact__go" aria-hidden="true">
                <ExternalIcon />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="contact__resume">
          <Magnetic>
            <a className="btn btn--primary" href={profile.resume} download>
              <DownloadIcon /> Download resume
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
