import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Scroll to an element (or the top) using Lenis when it's running, native scroll otherwise. */
export function scrollToTarget(
  target: HTMLElement | number,
  options: { duration?: number } = {},
) {
  const reduced = prefersReducedMotion();

  if (instance && !reduced) {
    instance.scrollTo(target, {
      duration: options.duration ?? 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    return;
  }

  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}
