"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
    >
      {children}
    </m.div>
  );
}
