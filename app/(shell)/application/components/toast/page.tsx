"use client";

import { useState } from "react";
import { Toast, ToastToggle, Button } from "flowbite-react";
import { HiCheck, HiX, HiExclamation, HiInformationCircle } from "react-icons/hi";

export default function AppToastPage() {
  const [toasts, setToasts] = useState<{ id: number; type: "success" | "error" | "warning" | "info"; message: string }[]>([]);
  let nextId = 0;

  const show = (type: "success" | "error" | "warning" | "info", message: string) => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  };

  const iconMap = { success: HiCheck, error: HiX, warning: HiExclamation, info: HiInformationCircle };
  const colorMap = { success: "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200", error: "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200", warning: "bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200", info: "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200" };

  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Toast</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Toast</code> for
          transient feedback after user actions. Toasts auto-dismiss — they are not
          for persistent errors. Use Alert for those.
        </p>
      </section>

      {/* ── Live demo ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Live demo — PIMC scenarios</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Click to trigger. Toasts auto-dismiss after 4 seconds.</p>
        <div className="flex flex-wrap gap-3 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <Button size="sm" color="default" onClick={() => show("success", "Payment of $4,660 recorded for Garcia, Maria.")}>
            Payment recorded
          </Button>
          <Button size="sm" color="default" onClick={() => show("success", "Payment link resent to maria.garcia@email.com.")}>
            Resend link
          </Button>
          <Button size="sm" color="alternative" onClick={() => show("info", "Waitlist applicant Chen, David converted to Gold member.")}>
            Convert waitlist
          </Button>
          <Button size="sm" color="alternative" onClick={() => show("warning", "SMS send failed for Patel, Susan. Will retry in 1 hour.")}>
            SMS failure
          </Button>
          <Button size="sm" color="red" onClick={() => show("error", "Failed to update card details. Please try again.")}>
            Card error
          </Button>
        </div>

        {/* Toast stack */}
        {toasts.length > 0 && (
          <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
            {toasts.map(({ id, type, message }) => {
              const Icon = iconMap[type];
              return (
                <Toast key={id}>
                  <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colorMap[type]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal text-gray-700 dark:text-gray-300 max-w-xs">{message}</div>
                  <ToastToggle onDismiss={() => setToasts((prev) => prev.filter((t) => t.id !== id))} />
                </Toast>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Static examples ─────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">All types</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Payment recorded successfully.</div>
            <ToastToggle />
          </Toast>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Failed to save changes. Try again.</div>
            <ToastToggle />
          </Toast>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">SMS delivery delayed. Will retry.</div>
            <ToastToggle />
          </Toast>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
              <HiInformationCircle className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Renewal reminder scheduled for 30 days out.</div>
            <ToastToggle />
          </Toast>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`<Toast>
  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
    <HiCheck className="h-5 w-5" />
  </div>
  <div className="ml-3 text-sm font-normal">Payment recorded successfully.</div>
  <Toast.Toggle />
</Toast>`}</pre>
      </section>

      {/* ── Stacked ─────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Stacked toasts</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          When multiple events fire close together — bulk payment recorded, SMS sent, member updated —
          stack toasts vertically with a small gap. Limit to 3 visible at once. The oldest dismisses first.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="flex flex-col gap-3 w-80">
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                <HiCheck className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">Payment of $4,660 recorded.</div>
              <ToastToggle />
            </Toast>
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500">
                <HiInformationCircle className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">SMS receipt sent to member.</div>
              <ToastToggle />
            </Toast>
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                <HiCheck className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">Invoice marked paid.</div>
              <ToastToggle />
            </Toast>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`// Position the stack — fixed bottom-right in production
<div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
  {toasts.map(toast => (
    <Toast key={toast.id}>
      {/* ... */}
      <ToastToggle onDismiss={() => removeToast(toast.id)} />
    </Toast>
  ))}
</div>`}</pre>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Toast vs Alert",  note: "Toast for transient confirmations (saved, sent, recorded). Alert for persistent states that require action (payment failed, card expired)." },
            { label: "Position",        note: "Bottom-right, fixed. Stack vertically with gap-2. Max 3 toasts visible at once — queue the rest." },
            { label: "Auto-dismiss",    note: "Success and info toasts: 4 seconds. Warning and error toasts: 6 seconds, or leave until dismissed manually." },
            { label: "Keep it short",   note: "Toast messages should be one sentence. If it needs more context, it's probably an Alert or a Modal, not a Toast." },
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
