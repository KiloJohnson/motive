"use client";

import { useState, useMemo } from "react";

type Icon = {
  name: string;
  outline?: string;
  filled?: string;
  color?: string;
};

type StyleFilter = "all" | "outline" | "filled" | "color";

function IconCard({ icon, style }: { icon: Icon; style: StyleFilter }) {
  const [copied, setCopied] = useState(false);

  const src =
    style === "filled" ? icon.filled :
    style === "color"  ? icon.color  :
    icon.outline;

  if (!src) return null;

  const copy = () => {
    navigator.clipboard.writeText(icon.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      title={icon.name}
      className="group flex flex-col items-center gap-2 p-4 rounded border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all text-center"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <img
          src={src}
          alt={icon.name}
          className={`w-8 h-8 object-contain ${style !== "color" ? "dark:invert" : ""}`}
        />
      </div>
      <p className="text-[10px] text-gray-700 leading-snug break-all group-hover:text-gray-900 transition-colors w-full" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        {copied ? <span className="text-green-600 font-semibold">copied!</span> : icon.name}
      </p>
    </button>
  );
}

function getFirstLetter(name: string) {
  return name.charAt(0).toUpperCase();
}

export default function IconsClient({ icons }: { icons: Icon[] }) {
  const [search, setSearch] = useState("");
  const [style, setStyle] = useState<StyleFilter>("outline");

  const filtered = useMemo(() =>
    icons.filter(i => i.name.toLowerCase().includes(search.toLowerCase())),
    [icons, search]
  );

  // Group by prefix
  const groups = useMemo(() => {
    const map = new Map<string, Icon[]>();
    for (const icon of filtered) {
      const prefix = getFirstLetter(icon.name);
      const group = map.get(prefix) || [];
      group.push(icon);
      map.set(prefix, group);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const styles: StyleFilter[] = ["outline", "filled", "color"];

  const isEmpty = icons.length === 0;

  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Guidelines
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Icons</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The Scripps icon library — {icons.length > 0 ? `${icons.length} icons` : "loading icons..."} across three styles.
          Click any icon to copy its name. Use the name to reference the correct file in code and design.
        </p>
      </div>

      {isEmpty ? (
        <div className="px-16 py-24 flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">📁</div>
          <p className="text-lg font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-display)" }}>
            Icons folder is empty
          </p>
          <p className="text-sm text-gray-400 max-w-sm" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Drop SVG files into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">public/icons/</code> and
            refresh. The grid will auto-populate.
          </p>
          <p className="text-xs text-gray-300 mt-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Expected naming: <code className="bg-gray-100 px-1 rounded">icon-name.svg</code> /
            <code className="bg-gray-100 px-1 rounded ml-1">icon-name-filled.svg</code> /
            <code className="bg-gray-100 px-1 rounded ml-1">icon-name-color.svg</code>
          </p>
        </div>
      ) : (
        <div className="px-16 py-8">

          {/* Controls */}
          <div className="flex items-center gap-4 mb-8 sticky top-0 bg-white py-4 border-b border-gray-100 z-10">
            <div className="flex items-center gap-2 flex-1 max-w-sm px-3 py-2.5 border border-gray-300 rounded">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400 shrink-0">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder:text-gray-400"
                placeholder="Search icons..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ fontFamily: "var(--font-red-hat-text)" }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
              )}
            </div>

            <div className="flex items-center rounded-full border border-[#005FCF] overflow-hidden">
              {styles.map(s => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                    style === s ? "bg-[#005FCF] text-[#ffffff]" : "text-[#005FCF] hover:bg-[#F3F8FB]"
                  }`}
                  style={{ fontFamily: "var(--font-red-hat-text)" }}
                >
                  {s}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-400 ml-auto" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              {filtered.length} icons
            </p>
          </div>

          {/* Icon grid grouped by prefix */}
          {groups.length === 0 ? (
            <p className="text-sm text-gray-400 py-12 text-center" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              No icons match &ldquo;{search}&rdquo;
            </p>
          ) : (
            <div className="space-y-10">
              {groups.map(([prefix, groupIcons]) => (
                <section key={prefix}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    {prefix}
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
                    {groupIcons.map(icon => (
                      <IconCard key={icon.name} icon={icon} style={style} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Style guide */}
          <div className="mt-16 border-t border-gray-100 pt-12 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>When to use each style</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { style: "Outline", desc: "Default for UI — navigation, buttons, form fields, toolbars. Clean and neutral.", color: "text-gray-700" },
                { style: "Filled",  desc: "Emphasis and active states — selected nav items, active filters, strong CTAs.", color: "text-gray-700" },
                { style: "Color",   desc: "Marketing and feature highlights — specialty cards, promotional sections, illustrated UI.", color: "text-gray-700" },
              ].map(row => (
                <div key={row.style} className="p-5 border border-gray-100 rounded">
                  <p className="text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.style}</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
