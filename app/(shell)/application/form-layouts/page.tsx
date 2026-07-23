"use client";

import { TextInput, Select, Textarea, Label, Checkbox, ToggleSwitch, Button } from "flowbite-react";
import { HiUser, HiMail, HiPhone, HiSearch } from "react-icons/hi";
import { useState } from "react";

export default function FormLayoutsPage() {
  const [smsOptIn, setSmsOptIn] = useState(false);

  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Forms</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Form Layouts</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React form components — <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">TextInput</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Select</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Textarea</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">ToggleSwitch</code> —
          composed into PIMC back office form patterns.
        </p>
      </section>

      {/* ── Create / edit member ────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Create / edit member</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Two-column layout for member records. Used in both the creation flow and the edit drawer.</p>
        <div className="max-w-2xl p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="firstName" className="mb-2 block">First name</Label>
              <TextInput id="firstName" placeholder="Maria" icon={HiUser} />
            </div>
            <div>
              <Label htmlFor="lastName" className="mb-2 block">Last name</Label>
              <TextInput id="lastName" placeholder="Garcia" />
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="mb-2 block">Email address</Label>
            <TextInput id="email" type="email" placeholder="maria.garcia@email.com" icon={HiMail} />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone" className="mb-2 block">Phone number</Label>
            <TextInput id="phone" type="tel" placeholder="(619) 555-0100" icon={HiPhone} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="tier" className="mb-2 block">Membership tier</Label>
              <Select id="tier">
                <option value="">Select tier</option>
                <option>Gold — $3,780/yr</option>
                <option>Diamond — $4,660/yr</option>
                <option>Diamond+ — $4,660/yr</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="billing" className="mb-2 block">Billing cycle</Label>
              <Select id="billing">
                <option>Annual</option>
                <option>Semi-annual</option>
                <option>Monthly</option>
              </Select>
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="notes" className="mb-2 block">Internal notes</Label>
            <Textarea id="notes" placeholder="Referred by Dr. Chen. Prefers email contact." rows={3} />
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button color="default">Save member</Button>
            <Button color="alternative">Cancel</Button>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<div className="grid grid-cols-2 gap-4">
  <div>
    <Label htmlFor="firstName" className="mb-2 block">First name</Label>
    <TextInput id="firstName" placeholder="Maria" icon={HiUser} />
  </div>
  <div>
    <Label htmlFor="lastName" className="mb-2 block">Last name</Label>
    <TextInput id="lastName" placeholder="Garcia" />
  </div>
</div>
<Label htmlFor="tier" className="mb-2 block">Membership tier</Label>
<Select id="tier">
  <option>Gold — $3,780/yr</option>
  <option>Diamond — $4,660/yr</option>
</Select>`}</pre>
      </section>

      {/* ── SMS preferences ─────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">SMS preferences</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Opt-in is <strong>unchecked by default</strong> per SMS compliance requirements. The toggle state must be saved to <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">SmsOptInLog</code>.
        </p>
        <div className="max-w-md p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="space-y-4">
            <ToggleSwitch
              checked={smsOptIn}
              label="SMS billing reminders"
              onChange={setSmsOptIn}
            />
            {smsOptIn && (
              <p className="text-xs text-gray-400 dark:text-gray-500 ml-14">
                Reminders sent 30, 14, and 7 days before renewal. Quiet hours 8am–9pm. Reply STOP to opt out.
              </p>
            )}
            <div className="flex items-start gap-3 pt-2">
              <Checkbox id="smsConsent" className="mt-0.5" />
              <Label htmlFor="smsConsent" className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                Member has verbally consented to receive SMS messages from Scripps PIMC.
              </Label>
            </div>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`// Opt-in unchecked by default — SMS compliance requirement
<ToggleSwitch
  checked={smsOptIn}
  label="SMS billing reminders"
  onChange={setSmsOptIn}
/>`}</pre>
      </section>

      {/* ── Search / filter bar ─────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Search + filter toolbar</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">The standard toolbar above data tables — search input + status filter + tier filter + primary action.</p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="flex items-center gap-3">
            <TextInput
              icon={HiSearch}
              placeholder="Search members…"
              className="flex-1 max-w-xs"
            />
            <Select className="w-40">
              <option>All statuses</option>
              <option>Active</option>
              <option>Overdue</option>
              <option>Cancelled</option>
            </Select>
            <Select className="w-36">
              <option>All tiers</option>
              <option>Gold</option>
              <option>Diamond</option>
              <option>Diamond+</option>
            </Select>
            <Button color="default" className="ml-auto">+ New member</Button>
          </div>
        </div>
      </section>

      {/* ── Inline field sizing ─────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Input sizes</h2>
        <div className="space-y-3 max-w-sm p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs font-mono text-gray-400 mb-1">sizing="{size}"</p>
              <TextInput sizing={size} placeholder={`Size ${size}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Label every input",  note: "Always use Label with htmlFor matching the input id. Never rely on placeholder text as a label — it disappears when the user starts typing." },
            { label: "Two-column max",     note: "Forms in application UI use a maximum of 2 columns. More than that creates scanning difficulty on smaller screens." },
            { label: "SMS default",        note: "ToggleSwitch for SMS opt-in must default to unchecked (false). This is a compliance requirement, not a preference." },
            { label: "No card fields",     note: "Never build card number / CVV / expiry inputs. All card capture uses a PCI-compliant hosted iframe. Building these yourself would break SAQ A compliance." },
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
