import { skills } from "../data.js";
import { SparkIcon } from "./Icons.jsx";

const items = skills.flatMap((g) => g.items);

function Row() {
  // The list is doubled so the track can loop seamlessly at -50%.
  return [...items, ...items].map((item, i) => (
    <span key={i} className="marquee__item">
      <span>{item}</span>
      <SparkIcon />
    </span>
  ));
}

// Two crossing bands of skills scrolling in opposite directions. Decorative only;
// the Skills section lists the same items for screen readers.
export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee marquee--back">
        <div className="marquee__track marquee__track--reverse">
          <Row />
        </div>
      </div>
      <div className="marquee marquee--front">
        <div className="marquee__track">
          <Row />
        </div>
      </div>
    </div>
  );
}
