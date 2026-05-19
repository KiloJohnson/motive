"use client";

import { useState } from "react";

type NotifVariant = "success" | "warning" | "error" | "info";

const variants: { variant: NotifVariant; label: string; color: string; bg: string; border: string; icon: string }[] = [
  { variant: "success", label: "Success",  color: "#166534", bg: "#f0fdf4", border: "#bbf7d0", icon: "✓" },
  { variant: "info",    label: "Info",     color: "#1e40af", bg: "#eff6ff", border: "#bfdbfe", icon: "ℹ" },
  { variant: "warning", label: "Warning",  color: "#92400e", bg: "#fffbeb", border: "#fde68a", icon: "⚠" },
  { variant: "error",   label: "Error",    color: "#991b1b", bg: "#fef2f2", border: "#fecaca", icon: "✕" },
];

function InlineAlert({
  variant,
  title,
  message,
  dismissable = false,
}: {
  variant: NotifVariant;
  title: string;
  message?: string;
  dismissable?: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  const v = variants.find(v => v.variant === variant)!;
  if (dismissed) return null;
  return (
    <div
      className="flex items-start gap-3 px-4 py-3.5 rounded-lg border"
      style={{ backgroundColor: v.bg, borderColor: v.border }}
    >
      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
        style={{ backgroundColor: v.color }}>
        {v.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold" style={{ color: v.color, fontFamily: "var(--font-red-hat-text)" }}>{title}</p>
        {message && <p className="text-sm mt-0.5 leading-relaxed" style={{ color: v.color, opacity: 0.8, fontFamily: "var(--font-red-hat-text)" }}>{message}</p>}
      </div>
      {dismissable && (
        <button onClick={() => setDismissed(true)} className="shrink-0 text-sm font-bold opacity-50 hover:opacity-100 transition-opacity" style={{ color: v.color }}>✕</button>
      )}
    </div>
  );
}

function Toast({ variant, message }: { variant: NotifVariant; message: string }) {
  const v = variants.find(v => v.variant === variant)!;
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border max-w-sm"
      style={{ backgroundColor: v.bg, borderColor: v.border }}
    >
      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ backgroundColor: v.color }}>
        {v.icon}
      </span>
      <p className="text-sm font-semibold flex-1" style={{ color: v.color, fontFamily: "var(--font-red-hat-text)" }}>{message}</p>
      <button className="shrink-0 text-xs opacity-40 hover:opacity-70 transition-opacity" style={{ color: v.color }}>✕</button>
    </div>
  );
}

function BannerAlert({ variant, message }: { variant: NotifVariant; message: string }) {
  const v = variants.find(vv => vv.variant === variant)!;
  return (
    <div className="flex items-center justify-center gap-3 px-6 py-3 w-full" style={{ backgroundColor: v.bg, borderBottom: `1px solid ${v.border}` }}>
      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
        style={{ backgroundColor: v.color }}>
        {v.icon}
      </span>
      <p className="text-sm font-semibold" style={{ color: v.color, fontFamily: "var(--font-red-hat-text)" }}>{message}</p>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Notifications</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Feedback messages that inform users of system status, confirm actions, or surface errors. Three formats — inline alert, toast, and sitewide banner — each for a different context.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-3xl">

        {/* Inline alerts */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Inline Alert</h2>
          <p className="text-sm text-gray-500 mb-6">Appears within the page content, adjacent to the relevant element — typically below a form or inside a card. Four semantic variants.</p>
          <div className="space-y-3">
            <InlineAlert variant="success" title="Appointment confirmed" message="Your appointment with Dr. Nathwani on Wednesday, Oct 14 at 1:30 PM has been booked." dismissable />
            <InlineAlert variant="info" title="Insurance verification in progress" message="We're checking your coverage. This usually takes less than a minute." dismissable />
            <InlineAlert variant="warning" title="Insurance not verified" message="We couldn't confirm your insurance. You may still book — contact the clinic to verify before your visit." dismissable />
            <InlineAlert variant="error" title="Booking failed" message="Something went wrong. Please try again or call 1-800-SCRIPPS for assistance." dismissable />
          </div>
        </section>

        {/* Toast */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Toast</h2>
          <p className="text-sm text-gray-500 mb-6">Temporary notification that appears in the corner of the screen, then auto-dismisses after 4–5 seconds. For confirmations and non-critical status updates.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex flex-col gap-3 items-start">
            <Toast variant="success" message="Appointment saved to your calendar" />
            <Toast variant="info" message="Your profile has been updated" />
            <Toast variant="warning" message="Session expiring in 2 minutes" />
            <Toast variant="error" message="Could not save changes — try again" />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Auto-dismiss after 4–5 seconds. Always provide a manual dismiss button too.",
              "Stack toasts vertically if multiple appear — newest on top.",
              "Position: bottom-right on desktop, bottom-center on mobile.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Sitewide banner */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Sitewide Banner</h2>
          <p className="text-sm text-gray-500 mb-6">Full-width strip at the very top of the page, above the site header. Reserved for urgent sitewide messages only — outages, emergency alerts, or major campaigns.</p>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <BannerAlert variant="info" message='Say thank you to your Scripps nurses this Nurses Week. Donate now and double your impact!' />
            <BannerAlert variant="warning" message="Scheduled maintenance tonight 11 PM – 2 AM. Online booking may be unavailable." />
            <BannerAlert variant="error" message="MyScripps is currently experiencing issues. Our team is working to restore access." />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "One banner at a time — never stack multiple sitewide messages.",
              "Use sparingly. If it appears on every page visit it loses meaning.",
              "Dismissable for campaigns; persistent for outages.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* When to use which */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">When to use which</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[120px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Format", "Use when"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { format: "Inline Alert", when: "The message is tied to a specific element — a form, a card, or a booking step." },
              { format: "Toast", when: "Confirming a completed action that doesn't require the user to change what they're doing." },
              { format: "Sitewide Banner", when: "The message is relevant to every user on every page — outages, urgent campaigns." },
            ].map(row => (
              <div key={row.format} className="grid grid-cols-[120px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 bg-white text-sm">
                <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.format}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.when}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
