"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({ children, className, strength = 0.25 }: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { mass: 0.6, stiffness: 180, damping: 22 });
  const springY = useSpring(y, { mass: 0.6, stiffness: 180, damping: 22 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarsePointer(mq.matches);
    const listener = (event: MediaQueryListEvent) => setIsCoarsePointer(event.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const disabled = reduce || isCoarsePointer;

  if (disabled) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (event.clientX - centerX) * strength;
    const dy = (event.clientY - centerY) * strength;
    const cap = 6;
    x.set(Math.max(-cap, Math.min(cap, dx)));
    y.set(Math.max(-cap, Math.min(cap, dy)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`inline-block ${className ?? ""}`}
    >
      <m.span style={{ x: springX, y: springY, display: "inline-block" }}>{children}</m.span>
    </span>
  );
}
