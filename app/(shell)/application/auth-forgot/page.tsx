"use client";

import { TextInput, Label, Button } from "flowbite-react";
import { HiMail, HiLockClosed, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";

export default function AuthForgotPage() {
  const [step, setStep] = useState<"email" | "code" | "reset" | "done">("email");

  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Auth</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Forgot Password</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Password reset flow for the <strong>customer portal</strong> only.
          Back office staff reset passwords through the Scripps AD admin — this UI is never shown to them.
        </p>
      </section>

      {/* ── Multi-step flow ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Customer portal reset flow</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
          3-step flow: verify email → enter reset code → set new password. Use the buttons below to preview each step.
        </p>
        <div className="flex gap-2 mb-8">
          {(["email", "code", "reset", "done"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${step === s ? "text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
              style={step === s ? { backgroundColor: "var(--motive-primary)" } : {}}
            >
              {s === "email" ? "1. Enter email" : s === "code" ? "2. Enter code" : s === "reset" ? "3. New password" : "✓ Done"}
            </button>
          ))}
        </div>

        <div className="flex justify-start">
          <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">

            {step === "email" && (
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Forgot your password?</h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Enter your email and we'll send a reset code.</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="forgotEmail" value="Email address" className="mb-2 block" />
                    <TextInput id="forgotEmail" type="email" placeholder="you@email.com" icon={HiMail} />
                  </div>
                  <Button color="default" className="w-full" onClick={() => setStep("code")}>Send reset code</Button>
                  <p className="text-center text-sm">
                    <a href="#" style={{ color: "var(--motive-primary)" }}>← Back to sign in</a>
                  </p>
                </div>
              </>
            )}

            {step === "code" && (
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Check your email</h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
                  We sent a 6-digit code to <strong>m.garcia@email.com</strong>. It expires in 15 minutes.
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="resetCode" value="Reset code" className="mb-2 block" />
                    <TextInput id="resetCode" placeholder="000000" maxLength={6} className="text-center tracking-widest font-mono text-lg" />
                  </div>
                  <Button color="default" className="w-full" onClick={() => setStep("reset")}>Verify code</Button>
                  <p className="text-center text-xs text-gray-400">
                    Didn't get it?{" "}
                    <button className="font-medium" style={{ color: "var(--motive-primary)" }}>Resend code</button>
                  </p>
                </div>
              </>
            )}

            {step === "reset" && (
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Set new password</h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Must be at least 8 characters.</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="newPw" value="New password" className="mb-2 block" />
                    <TextInput id="newPw" type="password" placeholder="••••••••" icon={HiLockClosed} />
                  </div>
                  <div>
                    <Label htmlFor="confirmPw" value="Confirm password" className="mb-2 block" />
                    <TextInput id="confirmPw" type="password" placeholder="••••••••" icon={HiLockClosed} />
                  </div>
                  <Button color="default" className="w-full" onClick={() => setStep("done")}>Reset password</Button>
                </div>
              </>
            )}

            {step === "done" && (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <HiCheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Password updated</h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">You can now sign in with your new password.</p>
                <Button color="default" className="w-full" onClick={() => setStep("email")}>Back to sign in</Button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Portal only",       note: "This flow is for the customer portal only. Back office staff use Windows AD password reset — they never see this UI." },
            { label: "Code expiry",       note: "Reset codes expire in 15 minutes. Communicate this clearly on the code entry screen — it prevents confusing errors when the user is slow." },
            { label: "Success state",     note: "Show a clear success confirmation with a green icon before redirecting. Never redirect immediately after a password reset — give the user a moment to understand it worked." },
            { label: "No security hints", note: "Don't reveal whether an email exists in the system when the user submits the first step. Always show 'If an account exists, we sent a code' to prevent user enumeration." },
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
