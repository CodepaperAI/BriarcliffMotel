"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type HeroParallaxProps = {
  src: string;
  alt: string;
  overlay?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function HeroParallax({ src, alt, overlay, children, className }: HeroParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const disableParallax = reduce || isTouch;

  return (
    <section ref={ref} className={className ?? "relative isolate overflow-hidden"}>
      <div className="absolute inset-0">
        <m.div
          className="absolute inset-0"
          style={disableParallax ? undefined : { y, willChange: "transform" }}
        >
          <Image
            alt={alt}
            fill
            priority
            sizes="100vw"
            src={src}
            className="object-cover [filter:brightness(1.08)_saturate(1.04)]"
          />
        </m.div>
        {overlay}
      </div>
      {children}
    </section>
  );
}
