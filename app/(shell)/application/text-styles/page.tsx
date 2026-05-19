"use client";

const sizes = [
  { label: "text-xs",   cls: "text-xs",   size: "12px", lh: "16px" },
  { label: "text-sm",   cls: "text-sm",   size: "14px", lh: "20px" },
  { label: "text-base", cls: "text-base", size: "16px", lh: "24px" },
  { label: "text-lg",   cls: "text-lg",   size: "18px", lh: "28px" },
  { label: "text-xl",   cls: "text-xl",   size: "20px", lh: "28px" },
  { label: "text-2xl",  cls: "text-2xl",  size: "24px", lh: "32px" },
  { label: "text-3xl",  cls: "text-3xl",  size: "30px", lh: "36px" },
  { label: "text-4xl",  cls: "text-4xl",  size: "36px", lh: "40px" },
];

const grays = [
  { label: "gray-900", cls: "text-gray-900", darkCls: "text-gray-100" },
  { label: "gray-800", cls: "text-gray-800", darkCls: "text-gray-200" },
  { label: "gray-700", cls: "text-gray-700", darkCls: "text-gray-300" },
  { label: "gray-600", cls: "text-gray-600", darkCls: "text-gray-400" },
  { label: "gray-500", cls: "text-gray-500", darkCls: "text-gray-500" },
  { label: "gray-400", cls: "text-gray-400", darkCls: "text-gray-600" },
  { label: "gray-300", cls: "text-gray-300", darkCls: "text-gray-700" },
];

const usages = [
  { gray: "gray-900", light: "Page titles, primary headings" },
  { gray: "gray-800", light: "Secondary headings, strong body" },
  { gray: "gray-700", light: "Body copy (primary)" },
  { gray: "gray-600", light: "Body copy (secondary)" },
  { gray: "gray-500", light: "Descriptions, subtitles" },
  { gray: "gray-400", light: "Section labels, helper text, captions" },
  { gray: "gray-300", light: "Disabled text, placeholder" },
];

export default function TextStylesPage() {
  return (
    <div className="min-h-full">

      {/* Header */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Text Styles
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          All text sizes and color levels used across Motive. Colors must meet WCAG 2.1 AA minimum
          (4.5:1 contrast for normal text, 3:1 for large text ≥ 18px regular or 14px bold).
        </p>
      </section>

      {/* Type Scale */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          Type Scale
        </h2>
        <div className="space-y-1">
          {sizes.map(({ label, cls, size, lh }) => (
            <div key={label} className="flex items-baseline gap-8 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="w-24 shrink-0">
                <code className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded font-mono">
                  {label}
                </code>
              </div>
              <div className="w-28 shrink-0 text-xs text-gray-400 dark:text-gray-500 font-mono">
                {size} / {lh}
              </div>
              <p className={`${cls} text-gray-900 dark:text-white leading-tight`}>
                Compassionate care, every time.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weight Scale */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          Font Weight Scale
        </h2>

        {/* Red Hat Display */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--motive-primary)" }}>
          Red Hat Display — Headings
        </p>
        <div className="space-y-1 mb-12">
          {[
            { label: "font-light",    weight: "300", cls: "font-light"    },
            { label: "font-normal",   weight: "400", cls: "font-normal"   },
            { label: "font-medium",   weight: "500", cls: "font-medium"   },
            { label: "font-semibold", weight: "600", cls: "font-semibold" },
            { label: "font-bold",     weight: "700", cls: "font-bold"     },
            { label: "font-black",    weight: "900", cls: "font-black"    },
          ].map(({ label, weight, cls }) => (
            <div key={label} className="flex items-baseline gap-8 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="w-32 shrink-0">
                <code className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded font-mono">
                  {label}
                </code>
              </div>
              <div className="w-16 shrink-0 text-xs text-gray-400 dark:text-gray-500 font-mono">
                {weight}
              </div>
              <p className={`text-3xl ${cls} text-gray-900 dark:text-white`}
                style={{ fontFamily: "var(--font-red-hat-display), sans-serif" }}>
                Compassionate care, every time.
              </p>
            </div>
          ))}
        </div>

        {/* Red Hat Text */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--motive-primary)" }}>
          Red Hat Text — Body
        </p>
        <div className="space-y-1">
          {[
            { label: "font-light",    weight: "300", cls: "font-light"    },
            { label: "font-normal",   weight: "400", cls: "font-normal"   },
            { label: "font-medium",   weight: "500", cls: "font-medium"   },
            { label: "font-semibold", weight: "600", cls: "font-semibold" },
            { label: "font-bold",     weight: "700", cls: "font-bold"     },
          ].map(({ label, weight, cls }) => (
            <div key={label} className="flex items-baseline gap-8 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="w-32 shrink-0">
                <code className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded font-mono">
                  {label}
                </code>
              </div>
              <div className="w-16 shrink-0 text-xs text-gray-400 dark:text-gray-500 font-mono">
                {weight}
              </div>
              <p className={`text-xl ${cls} text-gray-900 dark:text-white`}
                style={{ fontFamily: "var(--font-red-hat-text), sans-serif" }}>
                Compassionate care, every time.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Text Color Scale — Light Mode */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
          Text Color Scale — Light Mode
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Rendered on white background. Current hex values from Motive globals.
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header row */}
          <div className="grid grid-cols-12 bg-gray-50 dark:bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700">
            <div className="col-span-2">Class</div>
            <div className="col-span-2">Hex</div>
            <div className="col-span-1">AA</div>
            <div className="col-span-3">Sample</div>
            <div className="col-span-4">Typical use</div>
          </div>

          {/* Light mode rows — force white bg */}
          <div className="bg-white">
            {grays.map(({ label, cls }, i) => (
              <GrayRow key={label} label={label} cls={cls} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Text Color Scale — Dark Mode */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
          Text Color Scale — Dark Mode
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Rendered on dark background (#111111). Shows how grays are remapped in dark mode.
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header row */}
          <div className="grid grid-cols-12 bg-gray-50 dark:bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700">
            <div className="col-span-2">Class</div>
            <div className="col-span-2">Hex</div>
            <div className="col-span-1">AA</div>
            <div className="col-span-3">Sample</div>
            <div className="col-span-4">Typical use</div>
          </div>

          {/* Dark rows — forced dark bg */}
          <div style={{ backgroundColor: "#111111" }}>
            {grays.map(({ label, cls }, i) => (
              <DarkGrayRow key={label} label={label} cls={cls} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Body color token */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          Base Text Token
        </h2>
        <div className="flex items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 shrink-0"
            style={{ backgroundColor: "var(--motive-content-fg)" }} />
          <div>
            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">--motive-content-fg</code>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Applied to <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">body</code> —
              inherited by all unstyled text. Override with explicit Tailwind classes for hierarchy.
            </p>
          </div>
          <ContentFgValue />
        </div>
      </section>

    </div>
  );
}

// Reads the computed CSS var at runtime and shows the hex
function ContentFgValue() {
  if (typeof window === "undefined") return null;
  const val = getComputedStyle(document.documentElement)
    .getPropertyValue("--motive-content-fg").trim();
  return (
    <code className="text-sm font-mono text-gray-500 dark:text-gray-400 ml-auto">
      {val || "—"}
    </code>
  );
}

function GrayRow({ label, cls, index }: { label: string; cls: string; index: number }) {
  return (
    <div className={`grid grid-cols-12 px-6 py-4 items-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-b border-gray-100 last:border-0`}>
      <div className="col-span-2">
        <code className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {cls}
        </code>
      </div>
      <div className="col-span-2">
        <ComputedHex varName={`--gray-${label.split("-")[1]}`} dark={false} />
      </div>
      <div className="col-span-1">
        <ContrastBadge varName={`--gray-${label.split("-")[1]}`} bgHex="#ffffff" />
      </div>
      <div className="col-span-3">
        <span className={`${cls} text-sm`}>Sample text</span>
      </div>
      <div className="col-span-4">
        <span className="text-xs text-gray-500">
          {usages.find(u => u.gray === label)?.light ?? "—"}
        </span>
      </div>
    </div>
  );
}

function DarkGrayRow({ label, cls, index }: { label: string; cls: string; index: number }) {
  return (
    <div className={`grid grid-cols-12 px-6 py-4 items-center border-b border-white/5 last:border-0`}
      style={{ backgroundColor: index % 2 === 0 ? "#111111" : "#161616" }}>
      <div className="col-span-2">
        <code className="text-xs font-mono px-2 py-1 rounded" style={{ color: "#9ca3af", backgroundColor: "#1f2937" }}>
          {cls}
        </code>
      </div>
      <div className="col-span-2">
        <ComputedHex varName={`--gray-${label.split("-")[1]}`} dark={true} />
      </div>
      <div className="col-span-1">
        <ContrastBadge varName={`--gray-${label.split("-")[1]}`} bgHex="#111111" />
      </div>
      <div className="col-span-3">
        <span className={`${cls} text-sm`} style={{ color: `var(--gray-${label.split("-")[1]})` }}>
          Sample text
        </span>
      </div>
      <div className="col-span-4">
        <span className="text-xs" style={{ color: "#6b7280" }}>
          {usages.find(u => u.gray === label)?.light ?? "—"}
        </span>
      </div>
    </div>
  );
}

function ComputedHex({ varName, dark }: { varName: string; dark: boolean }) {
  if (typeof window === "undefined") return <span className="text-xs font-mono text-gray-400">—</span>;

  // For dark mode rows, check the remapped value from .dark .motive-content
  // by reading directly from a scoped element if possible, otherwise read root
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  const hex = rgbToHex(raw) || raw;

  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-sm border border-gray-200 shrink-0"
        style={{ backgroundColor: raw || "transparent", borderColor: dark ? "#374151" : undefined }} />
      <code className="text-xs font-mono" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>
        {hex}
      </code>
    </div>
  );
}

function ContrastBadge({ varName, bgHex }: { varName: string; bgHex: string }) {
  if (typeof window === "undefined") return null;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  if (!raw) return <span className="text-xs text-gray-400">—</span>;

  const ratio = contrastRatio(raw, bgHex);
  const passes = ratio >= 4.5;
  const passesLarge = ratio >= 3;

  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
      passes
        ? "bg-green-100 text-green-700"
        : passesLarge
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    }`}>
      {ratio.toFixed(1)}:1
    </span>
  );
}

// Utilities
function rgbToHex(rgb: string): string {
  const m = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!m) return rgb;
  return "#" + [m[1], m[2], m[3]]
    .map(n => parseInt(n).toString(16).padStart(2, "0"))
    .join("");
}

function luminance(hex: string): number {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const lin = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrastRatio(fgRaw: string, bgHex: string): number {
  const fg = rgbToHex(fgRaw);
  const l1 = luminance(fg);
  const l2 = luminance(bgHex);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
