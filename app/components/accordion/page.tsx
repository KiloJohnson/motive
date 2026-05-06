"use client";

import { useState } from "react";

// --- Icons ---
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// --- Landing Accordion ---
type LandingItem = { question: string; answer: string };

function LandingAccordion({ items }: { items: LandingItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left"
          >
            <span
              className="text-base font-semibold leading-snug"
              style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}
            >
              {item.question}
            </span>
            <span className="mt-0.5" style={{ color: "#005FCF" }}>
              {open === i ? <MinusIcon /> : <PlusIcon />}
            </span>
          </button>
          {open === i && (
            <div className="pb-5">
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// --- Simple Accordion ---
type SimpleItem = { headline: string; body: string };

function SimpleAccordion({ title, items }: { title?: string; items: SimpleItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-red-hat-display)" }}>
          {title}
        </h3>
      )}
      <div className="border border-gray-200 rounded divide-y divide-gray-200">
        {items.map((item, i) => (
          <div key={i} className={open === i ? "bg-white" : ""}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
            >
              <span
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: "var(--font-red-hat-text)" }}
              >
                {item.headline}
              </span>
              <span className="text-gray-500 shrink-0">
                {open === i ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            {open === i && (
              <div className="px-4 pb-5">
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                  {item.body}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Sample content ---
const landingItems: LandingItem[] = [
  {
    question: "Do you offer telehealth appointments?",
    answer: "Yes, Scripps offers telehealth video visits for many types of care. You can schedule a telehealth appointment through MyScripps or by calling your provider's office directly.",
  },
  {
    question: "How do I find a doctor who accepts my insurance?",
    answer: "Use the Find a Doctor tool on scripps.org and filter by insurance plan. You can also call 1-800-SCRIPPS and our team will help you find an in-network provider.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or referrals from previous providers.",
  },
  {
    question: "How do I access my medical records?",
    answer: "Your medical records are available through MyScripps, our secure patient portal. You can view test results, visit summaries, and request record transfers anytime.",
  },
];

const simpleItems: SimpleItem[] = [
  {
    headline: "Accordion item headline",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    headline: "Accordion item headline",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    headline: "Accordion item headline",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  },
  {
    headline: "Accordion item headline",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

// --- Page ---
export default function AccordionPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Accordion</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Accordions reveal content progressively, keeping pages scannable. Scripps has two styles —
          a bold landing variant for marketing pages and a compact simple variant for data-heavy content like FAQs.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Landing */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Landing Accordion</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Blue titles, + / − controls, generous spacing. Used on landing pages, service pages, and
              anywhere the content is the main focus — not surrounded by dense UI.
            </p>
          </div>
          <div className="border border-gray-100 rounded p-8 bg-white max-w-2xl">
            <LandingAccordion items={landingItems} />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Use for FAQs, service descriptions, and educational content on landing pages.",
              "Only one item should be open at a time — opening one closes the others.",
              "Question text uses Red Hat Display — treat it as a heading, not body copy.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Simple */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Simple Accordion</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Dark bold headlines, bordered rows, no color. Used on data-heavy pages where multiple
              accordions may appear together — provider profiles, condition pages, support centers.
            </p>
          </div>
          <div className="max-w-2xl">
            <SimpleAccordion title="Accordion Title" items={simpleItems} />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Use when accordions appear in a list or alongside other dense UI components.",
              "The section title ('Accordion Title') is optional — use when grouping multiple accordions.",
              "Body text can contain multiple paragraphs — separate with standard paragraph spacing.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* When to use which */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Choosing the right style</h2>
          </div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Style</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Use when</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Avoid when</p>
            </div>
            {[
              {
                style: "Landing",
                use: "FAQ sections on landing pages, service/condition pages, marketing content",
                avoid: "Inside cards, tables, or dense data interfaces",
              },
              {
                style: "Simple",
                use: "Provider profiles, support centers, data-heavy pages with many items",
                avoid: "Standalone FAQ sections where content is the hero",
              },
            ].map((row) => (
              <div key={row.style} className="grid grid-cols-3 px-6 py-4 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.style}</p>
                <p className="text-sm text-gray-500 pr-4">{row.use}</p>
                <p className="text-sm text-gray-400">{row.avoid}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
