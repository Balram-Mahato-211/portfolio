import Reveal from "./Reveal.jsx";

// `title` can hold an <em> to give one word the moving gradient.
export default function Section({ id, index, eyebrow, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">
            <span>{String(index).padStart(2, "0")}</span>
            {eyebrow}
          </p>
          <h2 className="section__title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
