"use server";

import { headers } from "next/headers";

import {
  type ContactInput,
  isLikelyBot,
  isRateLimited,
  sendInquiry,
  validateContactInput,
} from "@/lib/contact";
import type { ContactFormState } from "./form-state";

function readClientIp(forwardedFor: string | null, realIp: string | null): string {
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  if (realIp) return realIp.trim();
  return "";
}

export async function sendContactInquiry(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input: ContactInput = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    checkIn: String(formData.get("checkIn") ?? ""),
    checkOut: String(formData.get("checkOut") ?? ""),
    guests: String(formData.get("guests") ?? ""),
    message: String(formData.get("message") ?? ""),
    honeypot: String(formData.get("website") ?? ""),
    formRenderedAt: String(formData.get("formRenderedAt") ?? ""),
  };

  // Spam trap — silently pretend success.
  if (isLikelyBot(input)) {
    return { status: "success", message: "Thanks — we'll be in touch within 24 hours.", errors: {} };
  }

  const headerList = await headers();
  const ip = readClientIp(headerList.get("x-forwarded-for"), headerList.get("x-real-ip"));
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many submissions from this connection. Please try again in an hour or call us directly.",
      errors: {},
    };
  }

  const validation = validateContactInput(input);
  if (!validation.ok) {
    return {
      status: "error",
      message: "Please fix the highlighted fields below.",
      errors: validation.errors,
    };
  }

  const result = await sendInquiry(validation.data);
  if (!result.ok) {
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please call us at 1-603-356-5584 or email info@briarcliffmotel.com — we'll respond personally.",
      errors: {},
    };
  }

  return {
    status: "success",
    message: "Thanks — we'll be in touch within 24 hours.",
    errors: {},
  };
}
