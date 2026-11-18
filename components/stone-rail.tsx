"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { stageIds, type StageId } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { scrollToTarget } from "@/lib/scroll";

type Point = { x: number; y: number };
type Geometry = {
  width: number;
  height: number;
  points: Point[];
  lengths: number[];
  total: number;
  mobile: boolean;
};

const SAMPLES = 160;
const DESKTOP_QUERY = "(min-width: 1024px)";

/** The rail's curve in pixels. t = 0 is the foot, t = 1 the summit. */
function curve(t: number, width: number, height: number, mobile: boolean): Point {
  if (mobile) {
    const pad = 18;
    return {
      x: pad + t * (width - pad * 2),
      y: height * 0.72 - Math.pow(t, 1.4) * height * 0.44,
    };
  }
  const pad = 56;
  return {
    x: width * 0.5 + width * 0.18 * Math.sin(t * Math.PI * 1.6 + 0.4),
    y: height - pad - t * (height - pad * 2),
  };
}

function buildGeometry(width: number, height: number, mobile: boolean): Geometry {
  const points: Point[] = [];
  const lengths: number[] = [0];
  for (let i = 0; i <= SAMPLES; i += 1) {
    points.push(curve(i / SAMPLES, width, height, mobile));
    if (i > 0) {
      const a = points[i - 1];
      const b = points[i];
      lengths.push(lengths[i - 1] + Math.hypot(b.x - a.x, b.y - a.y));
    }
  }
  return { width, height, points, lengths, total: lengths[SAMPLES], mobile };
}

/** Point at a fraction of the arc length, so the stone moves at an even pace. */
function pointAt(geo: Geometry, fraction: number): Point {
  const target = Math.min(Math.max(fraction, 0), 1) * geo.total;
  let i = 1;
  while (i < geo.lengths.length - 1 && geo.lengths[i] < target) i += 1;
  const segment = geo.lengths[i] - geo.lengths[i - 1] || 1;
  const k = (target - geo.lengths[i - 1]) / segment;
  const a = geo.points[i - 1];
  const b = geo.points[i];
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
}

function scrollMax() {
  return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
}

function stageFractions(): Record<StageId, number> {
  const max = scrollMax();
  const result = {} as Record<StageId, number>;
  for (const id of stageIds) {
    const element = document.getElementById(id);
    const top = element ? element.getBoundingClientRect().top + window.scrollY : 0;
    result[id] = Math.min(top / max, 1);
  }
  return result;
}

export function StoneRail() {
  const { dictionary } = useI18n();
  const railRef = useRef<HTMLElement>(null);
  const stoneRef = useRef<HTMLSpanElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);
  const [fractions, setFractions] = useState<Record<StageId, number> | null>(null);
  const [active, setActive] = useState<StageId>("foot");

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const rect = rail.getBoundingClientRect();
    const mobile = !window.matchMedia(DESKTOP_QUERY).matches;
    setGeo(buildGeometry(rect.width, rect.height, mobile));
    setFractions(stageFractions());
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (!geo) return;
    let frame = 0;
    const radius = geo.mobile ? 11 : 15;

    const update = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / scrollMax(), 1);
      const point = pointAt(geo, progress);
      const rolled = (progress * geo.total) / radius;
      if (stoneRef.current) {
        stoneRef.current.style.transform = `translate(${point.x}px, ${point.y}px) translate(-50%, -100%) rotate(${geo.mobile ? rolled : -rolled}rad)`;
      }
      const line = window.scrollY + window.innerHeight * 0.4;
      let current: StageId = "foot";
      for (const id of stageIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }
      if (progress > 0.995) current = "summit";
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [geo]);

  const path = geo
    ? geo.points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ")
    : "";

  return (
    <nav className="rail" ref={railRef} aria-label={dictionary.rail.aria}>
      {geo ? (
        <svg
          className="rail__line"
          width={geo.width}
          height={geo.height}
          viewBox={`0 0 ${geo.width} ${geo.height}`}
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      ) : null}
      {geo && fractions
        ? stageIds.map((id) => {
            const point = pointAt(geo, fractions[id]);
            const label = dictionary.rail.stages[id];
            return (
              <button
                key={id}
                type="button"
                className={`rail__marker${id === "summit" ? " rail__marker--summit" : ""}`}
                style={{ left: point.x, top: point.y }}
                aria-label={`${dictionary.rail.goTo} ${label}`}
                aria-current={active === id ? "step" : undefined}
                onClick={() => {
                  const element = document.getElementById(id);
                  if (element) scrollToTarget(element);
                }}
              >
                <span className="rail__dot" aria-hidden="true" />
                <span className="rail__label" aria-hidden="true">
                  {label}
                </span>
              </button>
            );
          })
        : null}
      <span className="rail__stone" ref={stoneRef} aria-hidden="true" />
    </nav>
  );
}
