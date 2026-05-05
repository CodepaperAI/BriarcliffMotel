"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { sendContactInquiry } from "./actions";
import { initialContactState } from "./form-state";
import { BOOKING_URL } from "@/lib/content/site";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)]";
const inputBase =
  "mt-2 w-full rounded-2xl border border-black/10 bg-[var(--surface-card)] px-4 py-3 text-[15px] text-[var(--color-ink)] shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(217,162,74,0.18)] placeholder:text-[var(--color-muted)]/70";
const errorClass = "mt-1 text-xs font-medium text-[#a83232]";

function inputClass(hasError?: boolean) {
  return hasError
    ? `${inputBase} border-[#c84a4a] focus:border-[#a83232] focus:shadow-[0_0_0_4px_rgba(168,50,50,0.15)]`
    : inputBase;
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactInquiry, initialContactState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [renderedAt, setRenderedAt] = useState<string>("");

  useEffect(() => {
    setRenderedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (state.status === "success" && formRef.current) {
      formRef.current.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="rounded-[1.75rem] border border-[var(--color-accent)]/30 bg-gradient-to-br from-[var(--color-cream-soft)] to-[var(--color-accent-soft)]/40 p-8 text-center shadow-[0_18px_50px_rgba(199,154,82,0.15)] sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]">
          <CheckCircle2 className="h-7 w-7 text-[var(--color-ink)]" strokeWidth={2.2} />
        </div>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]">
          Message received
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-[2rem]">
          {state.message || "Thanks — we'll be in touch within 24 hours."}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[var(--color-ink-soft)]">
          Stephanie reads every inquiry personally. While you wait, peek at the rooms or lock in your stay.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/rooms-amenities"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[var(--surface-card)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
          >
            Explore rooms
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white"
          >
            Book now
          </a>
        </div>
      </div>
    );
  }

  const errors = state.errors;

  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      className="rounded-[1.75rem] border border-black/8 bg-[var(--surface-card)] p-6 shadow-[0_18px_50px_rgba(31,36,31,0.06)] sm:p-8"
    >
      <input type="hidden" name="formRenderedAt" value={renderedAt} />
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="mb-6 rounded-2xl border border-[#c84a4a]/30 bg-[#fdf3f3] px-4 py-3 text-sm text-[#a83232]"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-name">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={pending}
            className={inputClass(Boolean(errors.name))}
            placeholder="Jane Doe"
          />
          {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={pending}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
          {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-phone">
            Phone <span className="text-[var(--color-muted)] normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={pending}
            className={inputClass(Boolean(errors.phone))}
            placeholder="(603) 555-0140"
          />
          {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-checkin">
            Check-in <span className="text-[var(--color-muted)] normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="cf-checkin"
            name="checkIn"
            type="date"
            disabled={pending}
            className={inputClass(Boolean(errors.checkIn))}
          />
          {errors.checkIn ? <p className={errorClass}>{errors.checkIn}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-checkout">
            Check-out <span className="text-[var(--color-muted)] normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="cf-checkout"
            name="checkOut"
            type="date"
            disabled={pending}
            className={inputClass(Boolean(errors.checkOut))}
          />
          {errors.checkOut ? <p className={errorClass}>{errors.checkOut}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-guests">
            Guests <span className="text-[var(--color-muted)] normal-case tracking-normal">(optional)</span>
          </label>
          <select
            id="cf-guests"
            name="guests"
            disabled={pending}
            defaultValue=""
            className={inputClass(Boolean(errors.guests))}
          >
            <option value="">Select party size</option>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="7">7 or more</option>
          </select>
          {errors.guests ? <p className={errorClass}>{errors.guests}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="cf-message">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            disabled={pending}
            className={`${inputClass(Boolean(errors.message))} resize-y leading-7`}
            placeholder="Tell us about your trip — dates, group size, special requests."
          />
          {errors.message ? <p className={errorClass}>{errors.message}</p> : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-[var(--color-muted)]">
          We&apos;ll never share your details. Replies come straight from our front desk.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-accent-deep)]/10 bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(199,154,82,0.28)] transition hover:bg-[var(--color-accent-deep)] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
