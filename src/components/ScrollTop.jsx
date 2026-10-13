import useScrollProgress from "../hooks/useScrollProgress.js";
import { ArrowUpIcon } from "./Icons.jsx";

const R = 21;
const C = 2 * Math.PI * R;

// Back-to-top button whose ring fills as the page scrolls.
export default function ScrollTop() {
  const { progress, y } = useScrollProgress();

  return (
    <a href="#top" className={`to-top ${y > 600 ? "to-top--show" : ""}`} aria-label="Back to top">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="to-top__track" cx="24" cy="24" r={R} />
        <circle
          className="to-top__bar"
          cx="24"
          cy="24"
          r={R}
          style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }}
        />
      </svg>
      <ArrowUpIcon />
    </a>
  );
}
