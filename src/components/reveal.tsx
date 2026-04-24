"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function MotionFeatures({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  x = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = m[as];

  if (reduce) {
    return (
      <Tag
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: "-10% 0px" }}
        transition={{ duration: 0.45, delay }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EDITORIAL_EASE }}
    >
      {children}
    </Tag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "section" | "ul" | "ol";
};

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
}: RevealStaggerProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

type RevealChildProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  as?: "div" | "span" | "li" | "article" | "section";
};

export function RevealChild({ children, className, y = 16, x = 0, as = "div" }: RevealChildProps) {
  const reduce = useReducedMotion();
  const Tag = m[as];
  const variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45 } } }
    : {
        hidden: { opacity: 0, y, x },
        show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: EDITORIAL_EASE } },
      };
  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
