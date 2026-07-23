"use client";

import { useState, useRef, useEffect } from "react";

// --- Shared ---

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  return { open, setOpen, ref };
}

function DropdownShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[180px]" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {children}
    </div>
  );
}

function MenuItem({ label, icon, danger = false, onClick }: { label: string; icon?: string; danger?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-gray-50"
      style={{ color: danger ? "#991b1b" : "#374151", fontFamily: "var(--font-red-hat-text)" }}
    >
      {icon && <span className="text-base leading-none">{icon}</span>}
      {label}
    </button>
  );
}

function Divider() {
  return <div className="my-1 border-t border-gray-100" />;
}

function TriggerButton({ label, open }: { label: string; open: boolean }) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-colors"
      style={{
        borderColor: open ? "#005FCF" : "#D1D5DB",
        color: open ? "#005FCF" : "#374151",
        backgroundColor: "white",
        fontFamily: "var(--font-red-hat-text)",
      }}
    >
      {label}
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// --- 1. Basic dropdown ---
function BasicDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen(o => !o)}>
        <TriggerButton label="Menu" open={open} />
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-1.5 z-20">
          <DropdownShell>
            <MenuItem label="Dashboard" />
            <MenuItem label="Settings" />
            <MenuItem label="Earnings" />
            <Divider />
            <MenuItem label="Sign out" danger />
          </DropdownShell>
        </div>
      )}
    </div>
  );
}

// --- 2. Dropdown with icons ---
function IconDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen(o => !o)}>
        <TriggerButton label="Actions" open={open} />
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-1.5 z-20">
          <DropdownShell>
            <MenuItem label="Edit record" icon="✏️" />
            <MenuItem label="Duplicate" icon="📋" />
            <MenuItem label="Export" icon="📤" />
            <Divider />
            <MenuItem label="Delete" icon="🗑️" danger />
          </DropdownShell>
        </div>
      )}
    </div>
  );
}

// --- 3. User profile dropdown ---
function UserDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="" className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform text-gray-500 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1.5 z-20">
          <DropdownShell>
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900">Kosha Nathwani, MD</p>
              <p className="text-xs text-gray-400 mt-0.5">kosha.nathwani@scrippshealth.org</p>
            </div>
            <MenuItem label="My Profile" icon="👤" />
            <MenuItem label="Settings" icon="⚙️" />
            <MenuItem label="Help" icon="❓" />
            <Divider />
            <MenuItem label="Sign out" danger />
          </DropdownShell>
        </div>
      )}
    </div>
  );
}

// --- 4. Notifications dropdown ---
const notifications = [
  { name: "James Rodriguez", action: "scheduled an appointment", time: "2 min ago", read: false, photo: "/images/providers/provider-2.png" },
  { name: "Sarah Chen", action: "updated their insurance information", time: "1 hr ago", read: false, photo: "/images/providers/provider-3.png" },
  { name: "System", action: "Maintenance window tonight 11 PM – 2 AM", time: "3 hr ago", read: true, photo: null },
];

function NotificationsDropdown() {
  const { open, setOpen, ref } = useDropdown();
  const unread = notifications.filter(n => !n.read).length;
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {unread > 0 && (
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#005FCF]" />
        )}
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1.5 z-20 w-80">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900">Notifications</p>
              {unread > 0 && (
                <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: "#005FCF" }}>{unread} new</span>
              )}
            </div>
            <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
              {notifications.map((n, i) => (
                <div key={i} className={`flex items-start gap-3 px-4 py-3 ${!n.read ? "bg-blue-50/40" : ""}`}>
                  {n.photo ? (
                    <img src={n.photo} alt="" className="w-9 h-9 rounded-full object-cover shrink-0" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-sm">⚙️</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 leading-snug">
                      <span className="font-bold">{n.name}</span> {n.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                  {!n.read && <div className="w-2 h-2 rounded-full bg-[#005FCF] shrink-0 mt-1.5" />}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-gray-100">
              <button className="text-sm font-semibold w-full text-center" style={{ color: "#005FCF" }}>View all notifications</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Page ---
export default function DropdownPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Dropdown</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Contextual menus that appear on trigger. Used for actions, navigation, user settings, and notification feeds. Core patterns are documented here — the full catalog lives in Flowbite Pro.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Flowbite callout */}
        <div className="flex gap-4 p-5 rounded-xl border border-blue-100 bg-blue-50/50">
          <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ backgroundColor: "#005FCF" }}>i</div>
          <div>
            <p className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Application context dropdowns use Flowbite Pro</p>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              The patterns below cover the core use cases across Scripps experiences. For the complete dropdown catalog — multi-select, mega menus, grouped items, dark variants — refer to Flowbite Pro. Scripps tokens (Red Hat Text, brand blue, border radius) are applied globally via CSS override, so all Flowbite dropdowns render in the Scripps style automatically.
            </p>
          </div>
        </div>

        {/* Basic */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Basic Menu</h2>
          <p className="text-sm text-gray-500 mb-6">A simple list of actions. Use a divider to separate destructive actions from constructive ones. Click the trigger to open — click anywhere outside to close.</p>
          <div className="border border-gray-100 rounded-xl p-12 bg-gray-50 flex items-start gap-12">
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Default</p>
              <BasicDropdown />
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>With icons</p>
              <IconDropdown />
            </div>
          </div>
        </section>

        {/* User profile */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">User Profile</h2>
          <p className="text-sm text-gray-500 mb-6">Triggered from the user avatar in the app header. Shows the signed-in user's name and email, then navigation to profile, settings, and sign out.</p>
          <div className="border border-gray-100 rounded-xl p-12 bg-gray-50 flex justify-end">
            <UserDropdown />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Always show name and email in the header — users need to confirm they're signed in as the right account.",
              "Sign out is always last, separated by a divider, and styled as a destructive action.",
              "Align the dropdown to the right edge of the trigger on desktop — never let it clip off screen.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Notifications</h2>
          <p className="text-sm text-gray-500 mb-6">Rich dropdown triggered from the bell icon. Unread items have a blue background tint and a filled dot indicator. Click the bell below.</p>
          <div className="border border-gray-100 rounded-xl p-12 bg-gray-50 flex justify-end">
            <NotificationsDropdown />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Show unread count as a badge on the bell icon — only when there are unread items.",
              "Mark all as read when the dropdown opens, or provide an explicit 'Mark all read' action.",
              "Cap the dropdown height and scroll — never let it extend beyond the viewport.",
              "'View all' always links to a full notifications page, not another dropdown.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
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
              { part: "Trigger",       spec: "Button, avatar, or icon. Always has a visible focus state. Chevron rotates 180° when open." },
              { part: "Panel",         spec: "White background, border-gray-200, rounded-xl, shadow-lg. Min-width 180px." },
              { part: "Menu item",     spec: "Full-width, 40px min tap target, left-aligned text. Hover: bg-gray-50." },
              { part: "Divider",       spec: "1px border-gray-100. Used to separate logical groups — especially before destructive actions." },
              { part: "Destructive",   spec: "Red text (#991b1b). Never a red background — color alone is the signal." },
              { part: "Dismiss",       spec: "Click outside, press Escape, or select an item. All three must close the dropdown." },
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
              "Dropdowns are for actions or navigation — not for form inputs (use a Select component instead).",
              "Keep menus short. More than 8 items is a sign the menu needs restructuring, not scrolling.",
              "Always support keyboard: Tab to focus trigger, Enter/Space to open, arrow keys to navigate, Escape to close.",
              "Position the panel so it never clips outside the viewport — flip vertically or horizontally as needed.",
              "Don't nest dropdowns. If you need sub-menus, reconsider the information architecture.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
