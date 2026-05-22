"use client";

import { TextInput, Select, Textarea, Label, HelperText, Button } from "flowbite-react";
import { useState } from "react";

type FieldState = "default" | "success" | "failure";

export default function FormValidationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tier, setTier] = useState("");
  const [notes, setNotes] = useState("");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = phone.replace(/\D/g, "").length === 10;
  const tierValid = tier !== "";

  const emailState: FieldState = !submitted ? "default" : emailValid ? "success" : "failure";
  const phoneState: FieldState = !submitted ? "default" : phoneValid ? "success" : "failure";
  const tierState: FieldState = !submitted ? "default" : tierValid ? "success" : "failure";

  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Forms</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Form Validation</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Validation states for Flowbite React form inputs — success, failure, and helper text.
          Click "Validate" to see all states in action.
        </p>
      </section>

      {/* ── Live validation demo ────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Live demo — try it</h2>
        <div className="max-w-lg p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="space-y-4">

            <div>
              <Label htmlFor="valEmail" color={emailState} className="mb-2 block">Email address</Label>
              <TextInput
                id="valEmail"
                type="email"
                placeholder="maria.garcia@email.com"
                color={emailState}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {submitted && !emailValid && (
                <HelperText color="failure">Enter a valid email address.</HelperText>
              )}
              {submitted && emailValid && (
                <HelperText color="success">Looks good!</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="valPhone" color={phoneState} className="mb-2 block">Phone number (10 digits)</Label>
              <TextInput
                id="valPhone"
                type="tel"
                placeholder="6195550100"
                color={phoneState}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {submitted && !phoneValid && (
                <HelperText color="failure">Enter a 10-digit US phone number.</HelperText>
              )}
              {submitted && phoneValid && (
                <HelperText color="success">Valid phone number.</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="valTier" color={tierState} className="mb-2 block">Membership tier</Label>
              <Select
                id="valTier"
                color={tierState}
                value={tier}
                onChange={(e) => setTier(e.target.value)}
              >
                <option value="">Select a tier</option>
                <option>Gold — $3,780/yr</option>
                <option>Diamond — $4,660/yr</option>
                <option>Diamond+ — $4,660/yr</option>
              </Select>
              {submitted && !tierValid && (
                <HelperText color="failure">Select a membership tier to continue.</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="valNotes" className="mb-2 block">Internal notes (optional)</Label>
              <Textarea
                id="valNotes"
                placeholder="Referred by Dr. Chen…"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <HelperText>Not visible to the member. Max 500 characters.</HelperText>
            </div>

            <div className="flex gap-3 pt-2">
              <Button color="default" onClick={() => setSubmitted(true)}>Validate</Button>
              <Button color="alternative" onClick={() => { setSubmitted(false); setEmail(""); setPhone(""); setTier(""); setNotes(""); }}>
                Reset
              </Button>
            </div>
          </div>
        </div>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`// color prop drives the validation state on Label, TextInput, Select
<Label htmlFor="email" color={emailState} className="mb-2 block">Email</Label>
<TextInput
  id="email"
  color={emailState}   // "default" | "success" | "failure"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
{!emailValid && <HelperText color="failure">Enter a valid email address.</HelperText>}
{emailValid  && <HelperText color="success">Looks good!</HelperText>}`}</pre>
      </section>

      {/* ── Static states ───────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">All states</h2>
        <div className="grid grid-cols-3 gap-6 max-w-3xl">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-3">default</p>
            <Label htmlFor="s1" className="mb-2 block">Field label</Label>
            <TextInput id="s1" placeholder="Enter value" />
            <HelperText>Helper text goes here.</HelperText>
          </div>
          <div>
            <p className="text-xs font-mono text-gray-400 mb-3">success</p>
            <Label htmlFor="s2" color="success" className="mb-2 block">Field label</Label>
            <TextInput id="s2" color="success" value="Valid input" readOnly />
            <HelperText color="success">Looks good!</HelperText>
          </div>
          <div>
            <p className="text-xs font-mono text-gray-400 mb-3">failure</p>
            <Label htmlFor="s3" color="failure" className="mb-2 block">Field label</Label>
            <TextInput id="s3" color="failure" value="bad@" readOnly />
            <HelperText color="failure">Enter a valid email address.</HelperText>
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Validate on submit",  note: "Validate on submit, not on every keystroke. Showing errors as the user types is annoying. Show them when they've finished and tried to proceed." },
            { label: "color prop",          note: "Pass color=\"failure\" | \"success\" | \"default\" to Label, TextInput, Select, and Textarea. The same color value drives the border, icon tint, and text color consistently." },
            { label: "HelperText always",   note: "Always include a HelperText explaining what went wrong — never rely on color alone. \"Enter a valid email\" is better than red border only." },
            { label: "Required fields",     note: "Mark required fields visually with an asterisk (*) after the label. Don't use the HTML required attribute as your only validation signal." },
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
