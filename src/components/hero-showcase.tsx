"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type HeroShowcaseSlide = {
  src: string;
  alt: string;
};

type HeroShowcaseProps = {
  slides: HeroShowcaseSlide[];
  overlay?: ReactNode;
  children: ReactNode;
  intervalMs?: number;
};

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function HeroShowcase({ slides, overlay, children, intervalMs = 7000 }: HeroShowcaseProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const slideCount = slides.length;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (slideCount <= 1 || reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slideCount, reduce, intervalMs]);

  const disableParallax = reduce || isTouch;

  const handleDot = (next: number) => {
    setIndex(next);
  };

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88svh] overflow-hidden lg:min-h-[100svh]"
    >
      <div className="absolute inset-0">
        <m.div
          className="absolute inset-0"
          style={disableParallax ? undefined : { y: parallaxY, willChange: "transform" }}
        >
          {slides.map((slide, slideIndex) => {
            const isActive = slideIndex === index;
            return (
              <m.div
                key={`${slide.src}-${slideIndex}`}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: reduce ? 1 : isActive ? 1.06 : 1.02,
                }}
                transition={{
                  opacity: { duration: 1.6, ease: EDITORIAL_EASE },
                  scale: { duration: intervalMs / 1000 + 2, ease: "linear" },
                }}
                aria-hidden={!isActive}
              >
                <Image
                  alt={slide.alt}
                  fill
                  priority={slideIndex <= 1}
                  loading={slideIndex <= 1 ? "eager" : "lazy"}
                  sizes="100vw"
                  src={slide.src}
                  quality={88}
                  className="object-cover [filter:brightness(1.08)_saturate(1.04)]"
                />
              </m.div>
            );
          })}
        </m.div>
        {overlay}
      </div>

      <div className="relative flex min-h-[88svh] flex-col lg:min-h-[100svh]">
        <div className="flex-1" />
        <div className="mx-auto flex w-full max-w-7xl items-end px-4 pb-48 sm:px-6 sm:pb-40 lg:px-8 lg:pb-36">
          {children}
        </div>

        {slideCount > 1 ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-28 z-10 mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 sm:bottom-10 sm:gap-4 sm:px-6 lg:px-8">
            <div className="pointer-events-auto flex items-center gap-3">
              {slides.map((slide, slideIndex) => {
                const isActive = slideIndex === index;
                return (
                  <button
                    key={`${slide.src}-${slideIndex}`}
                    type="button"
                    aria-label={`Show slide ${slideIndex + 1} of ${slideCount}`}
                    onClick={() => handleDot(slideIndex)}
                    className="group flex h-6 items-center"
                  >
                    <span
                      className={`relative h-[2px] overflow-hidden rounded-full bg-white/30 transition-all duration-500 ${
                        isActive ? "w-12" : "w-6 group-hover:w-10"
                      }`}
                    >
                      {isActive ? (
                        <m.span
                          key={`fill-${index}`}
                          className="absolute inset-y-0 left-0 bg-[var(--color-accent)]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: reduce ? 0.3 : intervalMs / 1000,
                            ease: "linear",
                          }}
                        />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75">
              Scroll to explore
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
