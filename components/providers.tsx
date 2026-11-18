"use client";

import Lenis from "lenis";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import { I18nProvider } from "@/lib/i18n";
import { prefersReducedMotion, setLenis } from "@/lib/scroll";

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    setLenis(lenis);
    let frame = 0;

    const tick = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return <I18nProvider>{children}</I18nProvider>;
}
