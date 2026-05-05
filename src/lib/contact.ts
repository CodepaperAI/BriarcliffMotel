import { Resend } from "resend";

import { siteSettings } from "@/lib/content/site";

export type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message: string;
  honeypot?: string;
  formRenderedAt?: string;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export type ValidationResult =
  | { ok: true; data: Required<Pick<ContactInput, "name" | "email" | "message">> & ContactInput }
  | { ok: false; errors: FieldErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()0-9\s\-.]{6,30}$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MIN_FILL_MS = 2000;

export function validateContactInput(input: ContactInput): ValidationResult {
  const errors: FieldErrors = {};

  const name = input.name?.trim() ?? "";
  if (name.length < 2) errors.name = "Please share your name.";
  else if (name.length > 100) errors.name = "Name is too long.";

  const email = input.email?.trim() ?? "";
  if (!email) errors.email = "We need an email to reply.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email doesn't look right.";

  const phone = input.phone?.trim() ?? "";
  if (phone && !PHONE_RE.test(phone)) errors.phone = "Phone format isn't recognized.";

  const checkIn = input.checkIn?.trim() ?? "";
  const checkOut = input.checkOut?.trim() ?? "";
  if (checkIn && !ISO_DATE_RE.test(checkIn)) errors.checkIn = "Use a valid date.";
  if (checkOut && !ISO_DATE_RE.test(checkOut)) errors.checkOut = "Use a valid date.";
  if (!errors.checkIn && !errors.checkOut && checkIn && checkOut && checkOut <= checkIn) {
    errors.checkOut = "Check-out should be after check-in.";
  }

  const guests = input.guests?.trim() ?? "";
  if (guests) {
    const n = Number(guests);
    if (!Number.isInteger(n) || n < 1 || n > 10) {
      errors.guests = "Choose between 1 and 10 guests.";
    }
  }

  const message = input.message?.trim() ?? "";
  if (message.length < 10) errors.message = "Tell us a little more (10+ characters).";
  else if (message.length > 2000) errors.message = "Message is too long.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone: phone || undefined,
      checkIn: checkIn || undefined,
      checkOut: checkOut || undefined,
      guests: guests || undefined,
      message,
      honeypot: input.honeypot,
      formRenderedAt: input.formRenderedAt,
    },
  };
}

export function isLikelyBot(input: ContactInput): boolean {
  if (input.honeypot && input.honeypot.trim().length > 0) return true;

  const renderedAtRaw = input.formRenderedAt;
  if (renderedAtRaw) {
    const renderedAt = Number(renderedAtRaw);
    if (Number.isFinite(renderedAt)) {
      const elapsed = Date.now() - renderedAt;
      if (elapsed >= 0 && elapsed < MIN_FILL_MS) return true;
    }
  }
  return false;
}

const rateLimitBucket = new Map<string, number[]>();
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX_PER_WINDOW = 5;

export function isRateLimited(ip: string): boolean {
  if (!ip) return false;
  const now = Date.now();
  const recent = (rateLimitBucket.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_PER_WINDOW) {
    rateLimitBucket.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitBucket.set(ip, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 14px;background:#faf6ee;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#4a423a;font-family:Helvetica,Arial,sans-serif;width:140px;border-bottom:1px solid #eadfc8;">${escapeHtml(label)}</td>
    <td style="padding:10px 16px;font-size:15px;color:#1f1a14;font-family:Helvetica,Arial,sans-serif;border-bottom:1px solid #eadfc8;">${escapeHtml(value)}</td>
  </tr>`;
}

type InquiryData = Required<Pick<ContactInput, "name" | "email" | "message">> & ContactInput;

export function buildInquiryEmail(data: InquiryData): {
  subject: string;
  html: string;
  text: string;
} {
  const subjectBits = [`New inquiry from ${data.name}`];
  if (data.checkIn) subjectBits.push(`arriving ${data.checkIn}`);
  const subject = subjectBits.join(" — ");

  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br/>");

  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#f2f6f1;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f6f1;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fffdf8;border-radius:24px;overflow:hidden;box-shadow:0 18px 50px rgba(31,36,31,0.08);">
        <tr><td style="background:#2d3b2e;padding:28px 32px;">
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#d9a24a;">${escapeHtml(siteSettings.name)}</p>
          <p style="margin:8px 0 0;font-family:Georgia,serif;font-size:26px;color:#fffdf8;line-height:1.2;">New inquiry from the website</p>
        </td></tr>

        <tr><td style="padding:28px 32px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-radius:16px;overflow:hidden;border:1px solid #eadfc8;">
            ${row("Name", data.name)}
            ${row("Email", data.email)}
            ${row("Phone", data.phone)}
            ${row("Check-in", data.checkIn)}
            ${row("Check-out", data.checkOut)}
            ${row("Guests", data.guests)}
          </table>
        </td></tr>

        <tr><td style="padding:8px 32px 32px;">
          <p style="margin:0 0 10px;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#4a423a;">Message</p>
          <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#1f1a14;background:#faf6ee;border-left:3px solid #d9a24a;border-radius:0 12px 12px 0;padding:16px 18px;">${messageHtml}</div>
        </td></tr>

        <tr><td style="padding:0 32px 28px;">
          <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#d9a24a;color:#1f1a14;font-family:Helvetica,Arial,sans-serif;font-weight:600;text-decoration:none;font-size:14px;padding:12px 22px;border-radius:9999px;">Reply to ${escapeHtml(data.name.split(" ")[0])}</a>
        </td></tr>

        <tr><td style="background:#faf6ee;padding:18px 32px;border-top:1px solid #eadfc8;">
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#4a423a;line-height:1.6;">Sent from the contact form at briarcliffmotel.com. Replies go directly to the visitor's inbox.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `New inquiry from ${data.name}`,
    "",
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    data.phone ? `Phone:    ${data.phone}` : null,
    data.checkIn ? `Check-in: ${data.checkIn}` : null,
    data.checkOut ? `Check-out:${data.checkOut}` : null,
    data.guests ? `Guests:   ${data.guests}` : null,
    "",
    "Message:",
    data.message,
    "",
    "— Sent from briarcliffmotel.com",
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}

export async function sendInquiry(data: InquiryData): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return { ok: false, reason: "Email service is not configured yet." };
  }

  try {
    const resend = new Resend(apiKey);
    const { subject, html, text } = buildInquiryEmail(data);

    const result = await resend.emails.send({
      from: `${siteSettings.name} <${from}>`,
      to: [to],
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      return { ok: false, reason: result.error.message ?? "Send failed." };
    }
    return { ok: true };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown error.";
    return { ok: false, reason };
  }
}
