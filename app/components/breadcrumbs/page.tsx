"use client";

import { useState } from "react";

type Crumb = { label: string; href?: string };

function Separator() {
  return <span className="text-gray-300 text-sm select-none">/</span>;
}

function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <Separator />}
              {isLast ? (
                <span
                  className="text-sm font-semibold text-gray-900"
                  aria-current="page"
                  style={{ fontFamily: "var(--font-red-hat-text)" }}
                >
                  {crumb.label}
                </span>
              ) : crumb.label === "…" ? (
                <span className="text-sm text-gray-400 cursor-default" style={{ fontFamily: "var(--font-red-hat-text)" }}>…</span>
              ) : (
                <a
                  href={crumb.href ?? "#"}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
                >
                  {crumb.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Individual crumb states for the atom section
function CrumbAtom({ state }: { state: "default" | "hover" | "current" | "ellipsis" }) {
  const styles: Record<string, { text: string; className: string; extra?: string }> = {
    default:   { text: "Doctors & Services", className: "text-sm", extra: "underline" },
    hover:     { text: "Doctors & Services", className: "text-sm underline", extra: "" },
    current:   { text: "Find a Doctor",      className: "text-sm font-semibold text-gray-900", extra: "" },
    ellipsis:  { text: "…",                  className: "text-sm text-gray-400 cursor-default", extra: "" },
  };
  const s = styles[state];
  return (
    <span
      className={s.className}
      style={{
        color: state === "default" || state === "hover" ? "#005FCF" : undefined,
        textDecoration: state === "hover" ? "underline" : state === "default" ? "underline" : undefined,
        fontFamily: "var(--font-red-hat-text)",
      }}
    >
      {s.text}
    </span>
  );
}

export default function BreadcrumbsComponentPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Breadcrumbs</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The individual crumb atom — states, separator, and composition. For full navigation depth variants and usage rules, see the{" "}
          <a href="/patterns/breadcrumbs" className="underline font-semibold" style={{ color: "#005FCF" }}>
            Breadcrumbs pattern page
          </a>.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Crumb atom states */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Crumb States</h2>
          <p className="text-sm text-gray-500 mb-6">Each position in a breadcrumb trail uses one of four states. Only the last crumb is ever "Current" — it's never a link.</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[120px_200px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["State", "Appearance", "When used"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { state: "default" as const,   when: "Any crumb that links to a parent page. Blue underlined text." },
              { state: "hover" as const,     when: "Mouse over a link crumb. Same blue underline — reinforces interactivity." },
              { state: "current" as const,   when: "The last crumb — the current page. Bold, dark, no link, aria-current='page'." },
              { state: "ellipsis" as const,  when: "Collapsed intermediate crumbs at 4+ depth levels. Non-interactive." },
            ].map((row, i) => (
              <div key={row.state} className={`grid grid-cols-[120px_200px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="text-xs font-mono text-gray-500 capitalize">{row.state}</p>
                <CrumbAtom state={row.state} />
                <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.when}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Separator</h2>
          <p className="text-sm text-gray-500 mb-6">Always a forward slash ( / ) in gray-300. It's a visual spacer only — not interactive, not announced by screen readers.</p>
          <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex items-center gap-4">
            <span className="text-2xl text-gray-300 font-light select-none">/</span>
            <div className="text-sm space-y-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              <p className="text-gray-700"><span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">color</span> — gray-300 (#D1D5DB)</p>
              <p className="text-gray-700"><span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">aria-hidden</span> — true (hidden from screen readers)</p>
              <p className="text-gray-700"><span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">character</span> — / (forward slash, not ›, →, or •)</p>
            </div>
          </div>
        </section>

        {/* Composed examples */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Composed Examples</h2>
          <p className="text-sm text-gray-500 mb-6">Full breadcrumb trails at each depth level. All interactive — links are styled correctly.</p>
          <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden">
            {[
              {
                label: "1 level (homepage child)",
                crumbs: [{ label: "Home", href: "/" }, { label: "Doctors & Services" }],
              },
              {
                label: "2 levels",
                crumbs: [{ label: "Home", href: "/" }, { label: "Doctors & Services", href: "/services" }, { label: "Primary Care" }],
              },
              {
                label: "3 levels",
                crumbs: [{ label: "Home", href: "/" }, { label: "Doctors & Services", href: "/services" }, { label: "Find a Doctor", href: "/physicians/find" }, { label: "Kosha Nathwani, MD" }],
              },
              {
                label: "4 levels (collapsed)",
                crumbs: [{ label: "Home", href: "/" }, { label: "Doctors & Services", href: "/services" }, { label: "…" }, { label: "Kosha Nathwani, MD" }],
              },
            ].map(ex => (
              <div key={ex.label} className="flex items-center gap-8 px-6 py-5 bg-white">
                <p className="text-xs font-mono text-gray-400 w-40 shrink-0">{ex.label}</p>
                <Breadcrumb crumbs={ex.crumbs} />
              </div>
            ))}
          </div>
        </section>

        {/* On dark backgrounds */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">On Dark Backgrounds</h2>
          <p className="text-sm text-gray-500 mb-6">Breadcrumbs appear on the provider profile hero and search results header — both use a dark or brand-blue background. Links become white, current page becomes white/80.</p>
          <div className="rounded-xl p-8" style={{ backgroundColor: "#005EB8" }}>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                {[
                  { label: "Home", link: true },
                  { label: "Doctors & Services", link: true },
                  { label: "Kosha Nathwani, MD", link: false },
                ].map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-white/30 text-sm select-none">/</span>}
                    <span
                      className={`text-sm ${crumb.link ? "underline cursor-pointer" : "font-semibold"}`}
                      style={{ color: crumb.link ? "rgba(255,255,255,0.7)" : "white", fontFamily: "var(--font-red-hat-text)" }}
                    >
                      {crumb.label}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* Accessibility */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h2>
          <ul className="space-y-2">
            {[
              "Wrap in a <nav> element with aria-label='Breadcrumb' so screen readers announce it as a landmark.",
              "Use an <ol> for the crumb list — the ordered list communicates hierarchy to assistive tech.",
              "Add aria-current='page' to the last crumb (the current page item).",
              "The separator (/) must have aria-hidden='true' — it's visual only.",
              "The ellipsis (…) for collapsed crumbs is non-interactive and should also be aria-hidden.",
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
