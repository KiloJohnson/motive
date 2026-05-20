"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle, HiExclamation, HiCheckCircle, HiXCircle } from "react-icons/hi";

export default function AppAlertPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Alert</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Alert</code> for
          inline status messages, payment failure notices, and compliance warnings.
          Alerts are persistent — for transient feedback, use Toast.
        </p>
      </section>

      {/* ── PIMC scenarios ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">PIMC scenarios</h2>
        <div className="space-y-3 max-w-2xl">

          <Alert color="failure" icon={HiXCircle}>
            <span className="font-semibold">Payment failed.</span> Card ending in 4242 was declined on May 14. Day 7 retry scheduled for May 21.
          </Alert>

          <Alert color="warning" icon={HiExclamation}>
            <span className="font-semibold">Renewal coming up.</span> This membership renews on June 1. SMS reminder sent 30 days out.
          </Alert>

          <Alert color="success" icon={HiCheckCircle}>
            <span className="font-semibold">Payment recorded.</span> Cash payment of $3,780 applied to INV-2851. Invoice marked paid.
          </Alert>

          <Alert color="info" icon={HiInformationCircle}>
            <span className="font-semibold">SMS opt-out on file.</span> This member replied STOP on April 3, 2026. No automated SMS will be sent.
          </Alert>

        </div>
      </section>

      {/* ── With dismiss ────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Dismissible</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Add <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">onDismiss</code> for alerts the user can clear once acknowledged.</p>
        <div className="space-y-3 max-w-2xl">
          <Alert color="info" icon={HiInformationCircle} onDismiss={() => {}}>
            Waitlist applicant <strong>Chen, David</strong> has been on the list for 47 days. Consider converting or declining.
          </Alert>
          <Alert color="warning" icon={HiExclamation} onDismiss={() => {}}>
            Card on file for <strong>Patel, Susan</strong> expires next month. Send update reminder?
          </Alert>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`<Alert color="info" icon={HiInformationCircle} onDismiss={() => setVisible(false)}>
  Waitlist applicant has been waiting 47 days.
</Alert>`}</pre>
      </section>

      {/* ── All colors ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">All colors</h2>
        <div className="space-y-3 max-w-2xl">
          {([
            { color: "info",    icon: HiInformationCircle, label: "info",    text: "Neutral information. Use for context, not urgency." },
            { color: "success", icon: HiCheckCircle,       label: "success", text: "Action completed. Payment recorded, member converted." },
            { color: "warning", icon: HiExclamation,       label: "warning", text: "Attention needed but not broken. Upcoming renewal, expiring card." },
            { color: "failure", icon: HiXCircle,           label: "failure", text: "Something failed. Payment declined, SMS delivery failed." },
          ] as const).map(({ color, icon, label, text }) => (
            <Alert key={color} color={color} icon={icon}>
              <span className="font-semibold capitalize">{label} —</span> {text}
            </Alert>
          ))}
        </div>
      </section>

      {/* ── With action ─────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">With action button</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Use <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">additionalContent</code> to
          add a CTA inside the alert. Use for actionable failures — payment retry, card update, resend link.
        </p>
        <div className="space-y-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Alert color="failure" icon={HiXCircle}
            additionalContent={
              <div className="mt-2 flex gap-2">
                <button className="text-xs font-medium text-red-700 dark:text-red-400 underline hover:no-underline">Update card</button>
                <button className="text-xs font-medium text-red-700 dark:text-red-400 underline hover:no-underline">Resend payment link</button>
              </div>
            }>
            <span className="font-semibold">Payment failed</span> — Card ending in 4242 was declined. Day 7 retry scheduled.
          </Alert>
          <Alert color="warning" icon={HiExclamation}
            additionalContent={
              <div className="mt-2">
                <button className="text-xs font-medium text-yellow-700 dark:text-yellow-400 underline hover:no-underline">Review SMS settings</button>
              </div>
            }>
            <span className="font-semibold">SMS opt-in required</span> — This member will not receive billing reminders until they opt in.
          </Alert>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Alert color="failure" icon={HiXCircle}
  additionalContent={
    <div className="mt-2 flex gap-2">
      <button className="text-xs font-medium text-red-700 underline">Update card</button>
      <button className="text-xs font-medium text-red-700 underline">Resend payment link</button>
    </div>
  }>
  <span className="font-semibold">Payment failed</span> — Card declined.
</Alert>`}</pre>
      </section>

      {/* ── With list ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">With list — validation errors</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Use for form validation summaries — list all errors at the top of the form so the user can see everything at once.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Alert color="failure" icon={HiXCircle}
            additionalContent={
              <ul className="mt-2 list-disc list-inside text-sm text-red-700 dark:text-red-400 space-y-1">
                <li>Email address is required</li>
                <li>Phone number format is invalid</li>
                <li>Membership tier must be selected</li>
              </ul>
            }>
            <span className="font-semibold">Fix 3 errors before saving</span>
          </Alert>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Alert color="failure" icon={HiXCircle}
  additionalContent={
    <ul className="mt-2 list-disc list-inside text-sm text-red-700 space-y-1">
      <li>Email address is required</li>
      <li>Phone number format is invalid</li>
    </ul>
  }>
  <span className="font-semibold">Fix 3 errors before saving</span>
</Alert>`}</pre>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Alert vs Toast",   note: "Alert is persistent — it stays until the user acts or the condition clears. Toast is transient — it auto-dismisses. Use Alert for actionable states (payment failed), Toast for confirmations (payment saved)." },
            { label: "Icon required",    note: "Always pass the icon prop. Color alone doesn't communicate status accessibly." },
            { label: "One per section",  note: "Don't stack more than one alert of the same color. If multiple failures exist, summarize them in one alert." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
