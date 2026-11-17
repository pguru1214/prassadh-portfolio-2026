"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionProjectCard({ children, className, id, index }: { children: ReactNode; className: string; id: string; index: number }) {
  const reducedMotion = useReducedMotion();
  return <motion.article className={className} id={id}
    initial={false}
    whileInView={reducedMotion ? undefined : { opacity: [0.65, 1], y: [12, 0] }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.35, delay: reducedMotion ? 0 : (index % 3) * 0.045 }}
    whileHover={reducedMotion ? undefined : { y: -4, transition: { duration: 0.2, delay: 0 } }}
  >{children}</motion.article>;
}
