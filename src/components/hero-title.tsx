"use client";

import { m, useReducedMotion } from "framer-motion";

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function HeroTitle({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <m.h1
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </m.h1>
    );
  }

  return (
    <m.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
      }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden px-[0.04em] pt-[0.12em] pb-[0.06em] align-baseline"
        >
          <m.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.9, ease: EDITORIAL_EASE } },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </m.span>
        </span>
      ))}
    </m.h1>
  );
}
