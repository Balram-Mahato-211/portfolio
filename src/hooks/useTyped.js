import { useEffect, useState } from "react";

// Types each phrase, pauses, deletes it, then moves to the next one.
// With reduced motion enabled it shows the first phrase without animation.
export default function useTyped(phrases, { type = 70, erase = 35, hold = 1600 } = {}) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduced ? phrases[0] : "");

  useEffect(() => {
    if (reduced) return;
    let index = 0;
    let count = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = phrases[index];
      if (!deleting) {
        count += 1;
        setText(word.slice(0, count));
        if (count === word.length) {
          deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, type);
      } else {
        count -= 1;
        setText(word.slice(0, count));
        if (count === 0) {
          deleting = false;
          index = (index + 1) % phrases.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, erase);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [phrases, type, erase, hold, reduced]);

  return text;
}
