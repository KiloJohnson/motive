import Link from "next/link";

const previews = [
  {
    slug: "/application/preview/pimc-backoffice",
    label: "PIMC Dashboard",
    description: "KPI cards, membership tier breakdown, recent invoices. The opening view for back office staff.",
    screens: ["Dashboard", "Analytics", "Overview"],
  },
  {
    slug: "/application/preview/member-list",
    label: "Member Management",
    description: "Full member list with search, filters, row actions, create modal, and delete confirmation.",
    screens: ["List", "Create", "Delete confirm"],
  },
  {
    slug: "/application/preview/waitlist",
    label: "Waitlist Management",
    description: "Waitlist queue with position reordering, convert to member flow, and deposit refund.",
    screens: ["Queue", "Convert", "Decline & refund"],
  },
];

export default function UIPreviewsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · UI Previews
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          UI Previews
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Complete, navigable application shells — Scripps-ified with Motive tokens and real PIMC data.
          Each preview is a standalone app with its own sidebar, topbar, and full interactions.
          Open in a new tab to explore without the Motive chrome.
        </p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {previews.map((p) => (
            <div key={p.slug} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

              {/* Preview thumbnail area */}
              <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--motive-primary) 0%, transparent 70%)" }} />
                <div className="text-center z-10">
                  <p className="text-white font-semibold text-lg mb-1">{p.label}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {p.screens.map((s) => (
                      <span key={s} className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{p.label}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.description}</p>
                <div className="flex gap-3">
                  <Link
                    href={p.slug}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                    style={{ backgroundColor: "var(--motive-primary)" }}
                  >
                    Open preview →
                  </Link>
                  <Link
                    href={p.slug}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Open inline
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
