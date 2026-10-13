// Read once at startup: motion preference and whether the device has a real mouse.
const matches = (query) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const reducedMotion = matches("(prefers-reduced-motion: reduce)");
export const finePointer = matches("(hover: hover) and (pointer: fine)");
