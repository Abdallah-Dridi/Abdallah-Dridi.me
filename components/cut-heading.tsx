"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Redaction cuts, from most degraded to clean. */
export type Cut = "100" | "70" | "50" | "35" | "20" | "10" | "clean";

type CutHeadingProps = {
  as?: "h1" | "h2" | "h3";
  from: Cut;
  to: Cut;
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * A heading that sharpens from one Redaction cut to a cleaner one when it
 * comes into view. The text never changes, only the typeface, so screen
 * readers and search engines always get the same words.
 */
export function CutHeading({ as: Tag = "h2", from, to, id, className, children }: CutHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [sharp, setSharp] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSharp(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`cut ${className ?? ""}`}
      data-cut={sharp ? to : from}
      data-sharp={sharp ? "true" : undefined}
    >
      {children}
    </Tag>
  );
}
