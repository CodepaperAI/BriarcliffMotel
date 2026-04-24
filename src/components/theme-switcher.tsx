"use client";

import { Check, Palette, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { defaultThemeId, themePresets, type ThemeId } from "@/lib/themes";

const STORAGE_KEY = "briarcliff-theme-preview-v1";

function applyTheme(themeId: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", themeId);
}

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ThemeId>(defaultThemeId);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as
      | ThemeId
      | null;
    const initial =
      stored && themePresets.some((preset) => preset.id === stored) ? stored : defaultThemeId;
    setSelected(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const handleChoose = useCallback((themeId: ThemeId) => {
    setSelected(themeId);
    applyTheme(themeId);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, themeId);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="briarcliff-theme-panel"
        className="fixed bottom-28 left-4 z-[60] inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15 bg-[var(--surface-card)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] shadow-[0_18px_40px_rgba(20,20,20,0.18)] backdrop-blur-xl transition hover:border-[var(--color-accent)] sm:bottom-6 sm:left-6"
      >
        <Palette className="h-4 w-4 text-[var(--color-accent-deep)]" />
        Theme
      </button>

      {isOpen ? (
        <div
          id="briarcliff-theme-panel"
          role="dialog"
          aria-label="Preview themes"
          className="fixed inset-x-4 bottom-48 z-[70] max-h-[70vh] overflow-y-auto rounded-[2rem] border border-[var(--color-ink)]/12 bg-[var(--surface-card)] p-5 shadow-[0_28px_70px_rgba(20,20,20,0.22)] sm:bottom-24 sm:left-6 sm:right-auto sm:w-[22rem]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-deep)]">
                Preview mode
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                Pick a palette
              </h2>
              <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                Click a swatch to preview across the whole site. Your choice is saved locally.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close theme picker"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {(["subtle", "bold"] as const).map((category) => {
            const group = themePresets.filter((preset) => preset.category === category);
            if (group.length === 0) return null;
            return (
              <div key={category} className="mt-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {category === "subtle" ? "Light & subtle" : "Bold & saturated"}
                </p>
                <ul className="space-y-3">
                  {group.map((preset) => {
                    const isActive = preset.id === selected;
                    return (
                      <li key={preset.id}>
                        <button
                          type="button"
                          onClick={() => handleChoose(preset.id)}
                          aria-pressed={isActive}
                          className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                            isActive
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/40"
                              : "border-[var(--color-ink)]/10 hover:border-[var(--color-accent)]/50"
                          }`}
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-black/10">
                            <div className="absolute inset-0" style={{ background: preset.swatches.base }} />
                            <div
                              className="absolute bottom-0 left-0 h-7 w-7"
                              style={{ background: preset.swatches.surface }}
                            />
                            <div
                              className="absolute right-1.5 top-1.5 h-5 w-5 rounded-full border border-black/10"
                              style={{ background: preset.swatches.accent }}
                            />
                            <div
                              className="absolute bottom-1.5 right-1.5 h-3 w-3 rounded-full"
                              style={{ background: preset.swatches.ink }}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)]">
                                {preset.name}
                              </p>
                              {preset.recommended ? (
                                <span className="rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                                  Recommended
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-0.5 text-xs font-medium text-[var(--color-accent-deep)]">
                              {preset.tagline}
                            </p>
                            <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                              {preset.description}
                            </p>
                          </div>

                          {isActive ? (
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-ink)]">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <p className="mt-5 text-[11px] leading-5 text-[var(--color-muted)]">
            Share the site with the client and they can tap this picker to audition each palette live.
            Remove the switcher from <code className="rounded bg-black/5 px-1 py-0.5">layout.tsx</code> when the final palette is confirmed.
          </p>
        </div>
      ) : null}
    </>
  );
}
