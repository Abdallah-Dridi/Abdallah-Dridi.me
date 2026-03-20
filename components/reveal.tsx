"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { revealSoft, revealUp } from "@/lib/motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  variant?: "soft" | "up";
  delay?: number;
}>;

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variant === "soft" ? revealSoft : revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
