"use client";

import { useState } from "react";

// --- Shared shell ---

function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    />
  );
}

function ModalShell({
  title,
  onClose,
  children,
  width = "max-w-xl",
}: {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none`}>
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full ${width} pointer-events-auto`}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <p className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{title}</p>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-lg hover:bg-gray-100 bg-white/80"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

// --- 1. Video modal (live site pattern) ---
function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalShell title="Robert Elliott, DO" onClose={onClose} width="max-w-2xl">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <img src="/images/providers/provider-2.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                  <path d="M2 2l16 10L2 22V2z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-red-hat-text)" }}>Meet Robert Elliott, DO</p>
              <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Internal Medicine · Scripps Coastal Medical Center</p>
            </div>
          </div>
        </div>
      </ModalShell>
    </>
  );
}

// --- 2. Confirmation modal ---
function ConfirmModal({ open, onClose, variant = "default" }: { open: boolean; onClose: () => void; variant?: "default" | "destructive" }) {
  if (!open) return null;
  const destructive = variant === "destructive";
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalShell onClose={onClose} width="max-w-sm">
        <div className="p-8 text-center">
          <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${destructive ? "bg-red-50" : "bg-blue-50"}`}>
            {destructive ? "⚠️" : "✓"}
          </div>
          <p className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>
            {destructive ? "Cancel this appointment?" : "Confirm appointment"}
          </p>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            {destructive
              ? "This will cancel your appointment with Dr. Nathwani on Wednesday, Oct 14 at 1:30 PM. This cannot be undone."
              : "You're about to book an appointment with Dr. Nathwani on Wednesday, Oct 14 at 1:30 PM."}
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full border-2 text-sm font-semibold transition-colors"
              style={{ borderColor: "#005FCF", color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
            >
              {destructive ? "Keep it" : "Go back"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: destructive ? "#991b1b" : "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
            >
              {destructive ? "Yes, cancel" : "Confirm"}
            </button>
          </div>
        </div>
      </ModalShell>
    </>
  );
}

// --- 3. Form modal ---
function FormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalShell title="Contact us" onClose={onClose} width="max-w-lg">
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Your name</label>
            <input
              type="text"
              placeholder="First and last name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#005FCF] transition-colors"
              style={{ fontFamily: "var(--font-red-hat-text)" }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Email address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#005FCF] transition-colors"
              style={{ fontFamily: "var(--font-red-hat-text)" }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Message</label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#005FCF] transition-colors resize-none"
              style={{ fontFamily: "var(--font-red-hat-text)" }}
            />
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 text-sm font-semibold"
            style={{ borderColor: "#005FCF", color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
          >
            Send message
          </button>
        </div>
      </ModalShell>
    </>
  );
}

// --- Page ---
export default function ModalsPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [destructiveOpen, setDestructiveOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-full">

      {/* Active modals */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <ConfirmModal open={confirmOpen} onClose={() => setConfirmOpen(false)} />
      <ConfirmModal open={destructiveOpen} onClose={() => setDestructiveOpen(false)} variant="destructive" />
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />

      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Modals</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Overlay dialogs that interrupt the current flow to focus user attention. Three patterns cover the Scripps use cases — video, confirmation, and form. The full modal catalog is in Flowbite Pro.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Flowbite callout */}
        <div className="flex gap-4 p-5 rounded-xl border border-blue-100 bg-blue-50/50">
          <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ backgroundColor: "#005FCF" }}>i</div>
          <div>
            <p className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Application context modals use Flowbite Pro</p>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              The patterns below are the core marketing and patient-facing modal types. For application-context modals — data tables, multi-step wizards, image galleries, size variants — refer to Flowbite Pro. Scripps tokens are applied globally so all Flowbite modals render with the correct font, radius, and brand color.
            </p>
          </div>
        </div>

        {/* Video modal */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Video Modal</h2>
          <p className="text-sm text-gray-500 mb-2">The primary marketing modal. Triggered from the play button on a provider avatar. Shows the provider's intro video with their name as the modal title.</p>
          <p className="text-xs text-gray-400 mb-6" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Live example: <span className="italic">scripps.org → any provider profile → play button on photo</span>
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex items-center gap-6">
            <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden w-72">
              <div className="relative h-40 bg-gray-900 overflow-hidden">
                <img src="/images/providers/provider-2.png" alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow">
                    <svg width="14" height="18" viewBox="0 0 20 24" fill="white"><path d="M2 2l16 10L2 22V2z" /></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>Robert Elliott, DO</p>
                <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Internal Medicine</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Clicking the play button opens the video modal.</p>
              <button
                onClick={() => setVideoOpen(true)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
              >
                Open video modal ↗
              </button>
            </div>
          </div>
        </section>

        {/* Confirmation modal */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Confirmation Modal</h2>
          <p className="text-sm text-gray-500 mb-6">Used when an action needs explicit patient confirmation before proceeding. Two variants — standard (confirm a positive action) and destructive (confirm a cancellation or deletion).</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex gap-4 flex-wrap">
            <button
              onClick={() => setConfirmOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
            >
              Confirm appointment
            </button>
            <button
              onClick={() => setDestructiveOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#991b1b", fontFamily: "var(--font-red-hat-text)" }}
            >
              Cancel appointment
            </button>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "The safe/cancel action is always on the left. The primary/destructive action is on the right.",
              "Destructive actions use red (#991b1b) for the confirm button — never blue.",
              "Keep body copy to 1–2 sentences. If it takes more to explain, reconsider the UX flow.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />{t}
              </li>
            ))}
          </ul>
        </section>

        {/* Form modal */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Form Modal</h2>
          <p className="text-sm text-gray-500 mb-6">A contained form in a modal — used for contact, feedback, or lightweight data entry that doesn't warrant a full page. Footer has Cancel + primary CTA.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50">
            <button
              onClick={() => setFormOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
            >
              Open form modal
            </button>
          </div>
        </section>

        {/* Anatomy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Anatomy</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[160px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Part", "Spec"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { part: "Backdrop",  spec: "Black at 60% opacity (bg-black/60). Clicking it closes the modal — unless the action is critical and can't be accidentally dismissed." },
              { part: "Panel",     spec: "White, rounded-2xl, shadow-2xl. Max-width varies: sm (384px) for confirmation, md (512px) for forms, lg (672px) for video." },
              { part: "Header",    spec: "Title (Red Hat Display, bold) + × close button. Always present except on standalone confirmation modals." },
              { part: "Body",      spec: "Padded content area. Scrolls independently if content overflows — the header and footer stay fixed." },
              { part: "Footer",    spec: "Optional. Used for form modals: right-aligned Cancel + primary CTA. Separated from body by a top border." },
              { part: "Close",     spec: "× in the header, Escape key, and backdrop click all dismiss the modal. All three must work." },
            ].map((row, i) => (
              <div key={row.part} className={`grid grid-cols-[160px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.part}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.spec}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Use modals sparingly — they interrupt the user's flow. If the content can live on its own page, put it there.",
              "Never open a modal from another modal. Flatten the flow instead.",
              "Always return focus to the trigger element when the modal closes.",
              "On mobile, modals should slide up from the bottom as a sheet — not appear as a centered overlay.",
              "Don't put navigation inside a modal. Modals are for focused tasks, not exploration.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />{t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
