"use client";

import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";

export default function AuthSignInPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Auth</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Sign In</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Two sign-in patterns for PIMC: the <strong>customer portal</strong> (email + password + SMS 2FA)
          and the <strong>back office</strong> (Windows AD SSO — staff never type credentials, AD handles it).
        </p>
      </section>

      {/* ── Customer portal sign in ──────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Customer portal — email + password</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Members sign in with email and password. After successful auth, a 2FA code is sent via SMS (if opted in).
          Premium feel — matches the PIMC site aesthetic.
        </p>
        <div className="flex justify-start">
          <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
            <div className="mb-6 text-center">
              <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "var(--motive-primary)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Member sign in</h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Scripps Private Internal Medicine Center</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="portalEmail" value="Email address" className="mb-2 block" />
                <TextInput id="portalEmail" type="email" placeholder="you@email.com" icon={HiMail} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="portalPassword" value="Password" />
                  <a href="#" className="text-xs font-medium" style={{ color: "var(--motive-primary)" }}>Forgot password?</a>
                </div>
                <TextInput id="portalPassword" type="password" placeholder="••••••••" icon={HiLockClosed} />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" value="Remember me for 30 days" className="font-normal text-sm" />
              </div>
              <Button color="default" className="w-full">Sign in</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2FA step ────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Customer portal — SMS 2FA step</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Shown after successful password entry. A 6-digit code is sent to the member's verified phone number.
        </p>
        <div className="flex justify-start">
          <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
            <div className="mb-6 text-center">
              <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Verify your identity</h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Code sent to (619) 555-••••</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="twofa" value="6-digit code" className="mb-2 block" />
                <TextInput id="twofa" placeholder="000000" maxLength={6} className="text-center tracking-widest text-lg font-mono" />
              </div>
              <Button color="default" className="w-full">Verify</Button>
              <p className="text-center text-xs text-gray-400">
                Didn't receive a code?{" "}
                <button className="font-medium" style={{ color: "var(--motive-primary)" }}>Resend</button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back office SSO ─────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Back office — Windows AD SSO</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Staff authenticate via Windows Active Directory SSO. The back office detects the AD session and logs in automatically —
          no form is shown. This screen appears only if the AD session has expired.
        </p>
        <div className="flex justify-start">
          <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm text-center">
            <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">PIMC Back Office</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Your Scripps network session has expired.</p>
            <Button color="default" className="w-full">Sign in with Scripps AD</Button>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              You'll be redirected to the Scripps identity provider.
            </p>
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Two auth systems",  note: "Customer portal uses ASP.NET Core Identity + JWT + SMS 2FA. Back office uses Windows AD SSO. These are separate auth flows — never mix them." },
            { label: "2FA is optional",   note: "SMS 2FA is only triggered if the member has a verified phone on file. Members without a phone number skip the 2FA step." },
            { label: "Back office SSO",   note: "In normal operation, staff never see a sign-in form — the app reads the AD session silently. Show the SSO button only as a fallback when the session has expired." },
            { label: "Portal feel",       note: "The customer portal sign-in should feel premium — it's the first thing a $4,660/yr member sees. Rounded card, centered layout, brand color on the CTA." },
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
