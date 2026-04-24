import type { ComponentType } from "react";

import { RevealChild, RevealStagger } from "@/components/reveal";

type EditorialItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
};

export function EditorialList({ items }: { items: EditorialItem[] }) {
  return (
    <RevealStagger className="mt-14 grid divide-y divide-[var(--color-ink)]/10 sm:grid-cols-2 sm:gap-x-14 sm:divide-y-0" stagger={0.05}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <RevealChild key={item.title} as="div">
            <article
              className={`group flex gap-5 py-7 sm:border-t sm:border-[var(--color-ink)]/10 ${
                index < 2 ? "sm:pt-10" : ""
              }`}
            >
              <div className="mt-1 shrink-0 text-[var(--color-accent-deep)] transition-colors duration-500 group-hover:text-[var(--color-forest)]">
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-[var(--color-ink-soft)]">{item.description}</p>
              </div>
            </article>
          </RevealChild>
        );
      })}
    </RevealStagger>
  );
}
