"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

import { easeOutExpo } from "@/lib/motion";

export function Providers({ children }: PropsWithChildren) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.8, ease: easeOutExpo }}
    >
      {children}
    </MotionConfig>
  );
}
