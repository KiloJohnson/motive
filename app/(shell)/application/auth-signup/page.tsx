"use client";

import { TextInput, Label, Checkbox, Select, Button } from "flowbite-react";
import { HiUser, HiMail, HiPhone, HiLockClosed } from "react-icons/hi";

export default function AuthSignUpPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Auth</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Member Registration</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          New member account creation — used when a staff member converts a waitlist applicant
          or enrolls a new member directly. Members do not self-register; staff create accounts on their behalf.
        </p>
      </section>

      {/* ── Staff-initiated registration ────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Staff-initiated enrollment</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Staff create the account; the member receives a welcome email with a password-set link.
          No self-service signup flow exists in PIMC v1.
        </p>
        <div className="flex justify-start">
          <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Enroll new member</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">A welcome email will be sent to set their password.</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="regFirst" className="mb-2 block">First name *</Label>
                <TextInput id="regFirst" placeholder="Maria" icon={HiUser} />
              </div>
              <div>
                <Label htmlFor="regLast" className="mb-2 block">Last name *</Label>
                <TextInput id="regLast" placeholder="Garcia" />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="regEmail" className="mb-2 block">Email address *</Label>
              <TextInput id="regEmail" type="email" placeholder="maria.garcia@email.com" icon={HiMail} />
            </div>
            <div className="mb-4">
              <Label htmlFor="regPhone" className="mb-2 block">Mobile phone</Label>
              <TextInput id="regPhone" type="tel" placeholder="(619) 555-0100" icon={HiPhone} />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="regTier" className="mb-2 block">Membership tier *</Label>
                <Select id="regTier">
                  <option value="">Select tier</option>
                  <option>Gold — $3,780/yr</option>
                  <option>Diamond — $4,660/yr</option>
                  <option>Diamond+ — $4,660/yr</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="regCycle" className="mb-2 block">Billing cycle *</Label>
                <Select id="regCycle">
                  <option>Annual</option>
                  <option>Semi-annual</option>
                  <option>Monthly</option>
                </Select>
              </div>
            </div>
            <div className="space-y-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Consent</p>
              <div className="flex items-start gap-3">
                <Checkbox id="smsConsent" className="mt-0.5" />
                <Label htmlFor="smsConsent" className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  Member has consented to SMS billing reminders (optional — unchecked by default per compliance).
                </Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="termsConsent" />
                <Label htmlFor="termsConsent" className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  Member agreement reviewed and signed. *
                </Label>
              </div>
            </div>
            <Button color="default" className="w-full">Create account &amp; send welcome email</Button>
          </div>
        </div>
      </section>

      {/* ── Waitlist conversion ─────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Waitlist conversion flow</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          When converting a waitlist applicant, the form pre-fills from their waitlist entry.
          The deposit on file is automatically applied to their first invoice.
        </p>
        <div className="flex justify-start">
          <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-5 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <svg className="w-5 h-5 shrink-0" style={{ color: "var(--motive-primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Converting from waitlist. A <strong>$500 deposit</strong> is on file and will be applied to the first invoice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label className="mb-2 block">First name *</Label>
                <TextInput defaultValue="David" readOnly className="opacity-75" />
              </div>
              <div>
                <Label className="mb-2 block">Last name *</Label>
                <TextInput defaultValue="Chen" readOnly className="opacity-75" />
              </div>
            </div>
            <div className="mb-4">
              <Label className="mb-2 block">Email address *</Label>
              <TextInput type="email" defaultValue="david.chen@email.com" readOnly className="opacity-75" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="wlTier" className="mb-2 block">Membership tier *</Label>
                <Select id="wlTier">
                  <option>Gold — $3,780/yr</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="wlCycle" className="mb-2 block">Billing cycle *</Label>
                <Select id="wlCycle">
                  <option>Annual</option>
                  <option>Semi-annual</option>
                  <option>Monthly</option>
                </Select>
              </div>
            </div>
            <Button color="default" className="w-full">Convert &amp; apply deposit</Button>
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "No self-signup",    note: "Members do not create their own accounts. Staff enroll them. This is by design — the enrollment flow is staff-initiated." },
            { label: "Welcome email",     note: "Account creation triggers a welcome email with a password-set link. The member sets their own password before their first portal login." },
            { label: "Deposit handling",  note: "Waitlist deposits auto-apply to the first invoice on conversion. Staff don't need to do anything — the backend handles it. Surface this clearly in the UI so staff understand what's happening." },
            { label: "SMS default off",   note: "The SMS consent checkbox must be unchecked by default, even in the enrollment form. Staff must explicitly check it after the member verbally consents." },
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
