"use client";

import { Avatar, AvatarGroup, AvatarGroupCounter } from "flowbite-react";

export default function AppAvatarPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Avatar</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Avatar</code> for
          staff identity in the topbar, member initials in lists, and role indicators.
          Most PIMC users will render as initials — profile photos are not part of v1.
        </p>
      </section>

      {/* ── Initials (primary use case) ─────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Initials — primary use case</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          No profile photos in PIMC v1. Use initials with a placeholder. Staff avatars appear in the topbar and audit log.
        </p>
        <div className="flex flex-wrap items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Avatar placeholderInitials="KJ" rounded />
          <Avatar placeholderInitials="MG" rounded />
          <Avatar placeholderInitials="DR" rounded />
          <Avatar placeholderInitials="KJ" rounded size="lg" />
          <Avatar placeholderInitials="KJ" rounded size="xl" />
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Avatar placeholderInitials="KJ" rounded />
<Avatar placeholderInitials="KJ" rounded size="lg" />`}</pre>
      </section>

      {/* ── With status dot ─────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">With status indicator</h2>
        <div className="flex flex-wrap items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Avatar placeholderInitials="KJ" rounded status="online" statusPosition="bottom-right" />
          <Avatar placeholderInitials="MG" rounded status="away" statusPosition="bottom-right" />
          <Avatar placeholderInitials="DR" rounded status="offline" statusPosition="bottom-right" />
          <Avatar placeholderInitials="LN" rounded status="busy" statusPosition="bottom-right" />
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Avatar placeholderInitials="KJ" rounded status="online" statusPosition="bottom-right" />`}</pre>
      </section>

      {/* ── With label (topbar pattern) ─────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">With label — topbar identity</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Shows name and role in the topbar dropdown. The back office shows AD-authenticated staff name and their assigned role.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Avatar placeholderInitials="KJ" rounded bordered color="info">
            <div className="space-y-1 text-sm ml-3">
              <p className="font-medium text-gray-900 dark:text-white leading-none">Kilo Johnson</p>
              <p className="text-gray-400 dark:text-gray-500 leading-none">Staff</p>
            </div>
          </Avatar>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Avatar placeholderInitials="KJ" rounded bordered color="info">
  <div className="ml-3">
    <p className="font-medium">Kilo Johnson</p>
    <p className="text-gray-400">Staff</p>
  </div>
</Avatar>`}</pre>
      </section>

      {/* ── Avatar group ────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Avatar group</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <AvatarGroup>
            <Avatar placeholderInitials="KJ" rounded stacked />
            <Avatar placeholderInitials="MG" rounded stacked />
            <Avatar placeholderInitials="DR" rounded stacked />
            <Avatar placeholderInitials="LN" rounded stacked />
            <AvatarGroupCounter total={12} href="#" />
          </AvatarGroup>
        </div>
      </section>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Sizes</h2>
        <div className="flex flex-wrap items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar placeholderInitials="KJ" rounded size={size} />
              <span className="text-xs text-gray-400 font-mono">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Always rounded",  note: "Use rounded on all PIMC avatars. Square avatars are reserved for brand/org logos, not people." },
            { label: "Initials format", note: "Two characters: first initial + last initial. \"Kilo Johnson\" → \"KJ\". If the name is one word, use the first two characters." },
            { label: "Topbar size",     note: "Use size=\"sm\" in the topbar. The topbar height is 48px — a larger avatar creates uneven vertical rhythm." },
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
