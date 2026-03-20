"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "text";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateCapability = () => setEnabled(mediaQuery.matches);

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);

    return () => mediaQuery.removeEventListener("change", updateCapability);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const moveCursor = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(moveCursor);
    };

    const handleMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!visibleRef.current) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) {
        setMode("default");
        return;
      }

      const explicitMode = target.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;

      if (explicitMode === "link" || explicitMode === "text") {
        setMode(explicitMode);
        return;
      }

      if (target.closest("a, button")) {
        setMode("link");
        return;
      }

      setMode("default");
    };

    const handleLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    frameRef.current = window.requestAnimationFrame(moveCursor);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    window.addEventListener("blur", handleLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("blur", handleLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`custom-cursor-ring ${visible ? "opacity-100" : "opacity-0"} ${
          mode === "link"
            ? "h-14 w-14"
            : mode === "text"
              ? "h-12 w-12"
              : "h-9 w-9"
        }`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`custom-cursor-dot ${visible ? "opacity-100" : "opacity-0"} ${
          mode === "text" ? "scale-75" : "scale-100"
        }`}
      />
    </>
  );
}
