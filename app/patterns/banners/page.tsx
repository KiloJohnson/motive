"use client";

import { useState } from "react";

// --- Icons ---
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 8v5M9 6v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M9 2L1 16h16L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 8v4M9 13.5v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 6l6 6M12 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function SuccessIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// --- Broadcast Banner ---
type BannerType = "info" | "warning" | "error" | "success";

const bannerConfig: Record<BannerType, { bg: string; text: string; icon: React.ReactNode; label: string }> = {
  info:    { bg: "#D9EBF4", text: "#1a3a4a", icon: <InfoIcon />,    label: "Info" },
  warning: { bg: "#FBF193", text: "#3a3000", icon: <WarningIcon />, label: "Warning" },
  error:   { bg: "#E2C2BD", text: "#5a1a14", icon: <ErrorIcon />,   label: "Error" },
  success: { bg: "#DCF0D1", text: "#1a3a14", icon: <SuccessIcon />, label: "Success" },
};

function BroadcastBanner({
  type,
  dismissable,
  message,
  mobile = false,
}: {
  type: BannerType;
  dismissable: boolean;
  message: string;
  mobile?: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  const { bg, text, icon } = bannerConfig[type];

  if (dismissed) {
    return (
      <div className="flex items-center justify-center h-10 text-xs text-gray-400 border border-dashed border-gray-200 rounded">
        Banner dismissed
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 px-4 ${mobile ? "py-3 rounded text-xs" : "py-4 text-sm"}`}
      style={{ backgroundColor: bg, color: text }}
    >
      <span style={{ color: text }}>{icon}</span>
      <p className="flex-1 font-medium" style={{ fontFamily: "var(--font-red-hat-text)", color: text }}>
        {message}
      </p>
      {dismissable && (
        <button onClick={() => setDismissed(true)} className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: text }}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

// --- Map Banner ---
function MapBanner() {
  return (
    <div className="flex items-center justify-between rounded overflow-hidden" style={{ backgroundColor: "#D9EBF4" }}>
      <div className="px-6 py-4 flex-1">
        <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          Looking for doctors near you? Try{" "}
          <span className="underline cursor-pointer" style={{ color: "#005FCF" }}>map view</span>
        </p>
      </div>
      <div className="w-48 h-14 bg-gray-200 flex items-center justify-center shrink-0 overflow-hidden">
        <div className="w-full h-full relative" style={{ background: "linear-gradient(135deg, #c8dfc8 0%, #a8c8a8 30%, #d4e8d4 60%, #b8d4b8 100%)" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg">📍</div>
              <p className="text-xs font-semibold text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>San Diego</p>
            </div>
          </div>
          <div className="absolute top-1 left-2 w-6 h-0.5 bg-gray-400 opacity-40" />
          <div className="absolute top-3 left-4 w-8 h-0.5 bg-gray-400 opacity-30" />
          <div className="absolute top-5 left-1 w-10 h-0.5 bg-gray-400 opacity-30" />
          <div className="absolute top-8 left-3 w-7 h-0.5 bg-gray-400 opacity-30" />
          <div className="absolute top-10 left-0 w-12 h-0.5 bg-gray-400 opacity-30" />
        </div>
      </div>
    </div>
  );
}

// --- Page ---
const broadcastTypes: BannerType[] = ["info", "warning", "error", "success"];

export default function BannersPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Banners</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Banners communicate page-level messages. Scripps has two types: the Map Banner for contextual
          location prompts, and the Broadcast Banner for system-level alerts in four semantic variants.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Map Banner */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Map Banner</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              A contextual banner that appears on search result pages to promote the map view.
              Uses the info tint color and a thumbnail of the map on the right.
            </p>
          </div>
          <MapBanner />
          <ul className="mt-4 space-y-1">
            {[
              "Appears below the search results header, above the result list.",
              "The link ('map view') uses brand-primary and is always underlined.",
              "Do not use for general announcements — use Broadcast Banner instead.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Broadcast Banner — Desktop */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Broadcast Banner — Desktop</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Full-width banners for system-level messages. Four semantic types — each maps directly to
              a broadcast color token. Dismissable and persistent variants. Click × to dismiss.
            </p>
          </div>
          <div className="space-y-2">
            {broadcastTypes.map(type => (
              <div key={type} className="space-y-1">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    {type === "info" && <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Dismissable</p>}
                    <BroadcastBanner type={type} dismissable message={`I'm ${type === "error" ? "an" : "a"} ${type} alert. This message contains important information.`} />
                  </div>
                  <div>
                    {type === "info" && <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Persistent</p>}
                    <BroadcastBanner type={type} dismissable={false} message={`I'm ${type === "error" ? "an" : "a"} ${type} alert. This message cannot be dismissed.`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Broadcast Banner — Mobile */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Broadcast Banner — Mobile</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Compact mobile variants. Same semantic types and dismissable behavior, reduced height and font size.
            </p>
          </div>
          <div className="max-w-sm space-y-2">
            {broadcastTypes.map(type => (
              <BroadcastBanner key={type} type={type} dismissable message={`I'm ${type === "error" ? "an" : "a"} ${type} alert.`} mobile />
            ))}
          </div>
        </section>

        {/* Token reference */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Color Tokens</h2>
            <p className="text-sm text-gray-500">Broadcast banners use the broadcast color tokens defined in the Colors foundation.</p>
          </div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-[120px_160px_80px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Type</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Token</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Value</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Usage</p>
            </div>
            {[
              { type: "Info",    token: "color/broadcast/info",     hex: "#D9EBF4", usage: "System info, neutral announcements" },
              { type: "Warning", token: "color/broadcast/warning",  hex: "#FBF193", usage: "Caution, time-sensitive notices" },
              { type: "Error",   token: "color/broadcast/negative", hex: "#E2C2BD", usage: "Errors, failures, critical alerts" },
              { type: "Success", token: "color/broadcast/positive", hex: "#DCF0D1", usage: "Confirmations, completed actions" },
            ].map((row) => (
              <div key={row.type} className="grid grid-cols-[120px_160px_80px_1fr] px-6 py-3 border-b border-gray-100 last:border-0 items-center">
                <p className="text-sm font-medium text-gray-900">{row.type}</p>
                <p className="text-xs font-mono text-gray-500">{row.token}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border border-gray-200" style={{ backgroundColor: row.hex }} />
                  <span className="text-xs font-mono text-gray-400">{row.hex}</span>
                </div>
                <p className="text-sm text-gray-500">{row.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Place Broadcast Banners at the very top of the page, above the header.",
                  "Use the correct semantic type — Info for neutral, Warning for caution, Error for failure, Success for confirmation.",
                  "Keep banner copy short — one sentence max.",
                  "Use dismissable banners for transient messages; persistent for ongoing conditions.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't stack multiple Broadcast Banners — show the most critical one only.",
                  "Don't use banners for marketing messages — use the appropriate promotional component.",
                  "Don't use Error banners for validation — use inline field errors instead.",
                  "Don't use the Map Banner outside of search result contexts.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
