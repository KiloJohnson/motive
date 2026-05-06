import Link from "next/link";

function VariantTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
      {label}
    </span>
  );
}

function UsageList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-500">
          <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const levels = [
  {
    label: "Level 1",
    crumbs: [{ text: "Home", active: true }],
  },
  {
    label: "Level 2",
    crumbs: [{ text: "Home", active: false }, { text: "Doctors & Services", active: true }],
  },
  {
    label: "Level 3",
    crumbs: [{ text: "Home", active: false }, { text: "Doctors & Services", active: false }, { text: "Find a Doctor", active: true }],
  },
  {
    label: "Level 4 (collapsed)",
    crumbs: [{ text: "Home", active: false }, { text: "Doctors & Services", active: false }, { text: "...", active: false }, { text: "Dr. Jane Smith", active: true }],
  },
];

export default function BreadcrumbsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Breadcrumbs</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Breadcrumbs show users where they are within the site hierarchy and provide a path back to parent pages.
          The component supports up to 4 levels, with automatic collapsing at depth.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Part of <Link href="/patterns/navigation" className="underline" style={{ color: "#005EB8" }}>Navigation</Link>
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Live variants */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Variants</h2>
            <p className="text-sm text-gray-500">Four depth levels. The active (current) page is always the last crumb and is never a link.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {levels.map((level) => (
              <div key={level.label} className="flex items-center gap-8 px-6 py-5">
                <p className="text-xs font-mono text-gray-400 w-36 shrink-0">{level.label}</p>
                <div className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                  {level.crumbs.map((crumb, j) => (
                    <span key={j} className="flex items-center gap-1.5">
                      {j > 0 && <span className="text-gray-300 text-sm">/</span>}
                      <span
                        className={`text-sm ${
                          crumb.active
                            ? "font-semibold text-gray-900"
                            : crumb.text === "..."
                            ? "text-gray-400 cursor-default"
                            : "cursor-pointer underline"
                        }`}
                        style={!crumb.active && crumb.text !== "..." ? { color: "#005FCF" } : undefined}
                      >
                        {crumb.text}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Level=1", "Level=2", "Level=3", "Level=4"].map((v) => (
              <VariantTag key={v} label={v} />
            ))}
            <VariantTag label="State=Enabled" />
            <VariantTag label="State=Hovered" />
            <VariantTag label="State=Active" />
            <VariantTag label="State=Collapsed" />
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do</p>
              <UsageList items={[
                "Show breadcrumbs on all pages except the homepage.",
                "Make all crumbs except the last one clickable links.",
                "Collapse intermediate crumbs to '...' at 4+ levels deep.",
                "Use a forward slash ( / ) as the separator.",
                "Reflect the actual site hierarchy — not the user's navigation history.",
              ]} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Don't</p>
              <UsageList items={[
                "Don't show breadcrumbs on the homepage.",
                "Don't make the current page (last crumb) a link.",
                "Don't use chevrons, arrows, or other separator characters.",
                "Don't truncate crumb labels with ellipsis — use the collapse pattern instead.",
                "Don't show more than 4 visible crumbs at once.",
              ]} />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
