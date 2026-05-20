import Link from "next/link";

const blocks = [
  {
    slug: "navbars",
    label: "Navbars",
    description: "Top bar patterns with search, notifications, user menu, and sidebar toggle.",
    count: 6,
    live: true,
  },
  {
    slug: "side-navigation",
    label: "Side Navigation",
    description: "Sidebar nav patterns — default, with sections, user switch, and notification states.",
    count: 12,
    live: true,
  },
  {
    slug: "crud-layouts",
    label: "CRUD Layouts",
    description: "Full-page layouts for list, create, read, and update flows. Wired for data tables.",
    count: 5,
    live: true,
  },
  {
    slug: "table-headers",
    label: "Table Headers",
    description: "Toolbar patterns above data tables — search, filter dropdowns, bulk actions, export.",
    count: 8,
    live: true,
  },
  {
    slug: "table-footers",
    label: "Table Footers",
    description: "Pagination, results count, and page-size selectors that sit below data tables.",
    count: 4,
    live: false,
  },
  {
    slug: "create-forms",
    label: "Create Forms",
    description: "Full-page form layouts for creating records — members, invoices, manual payments.",
    count: 6,
    live: false,
  },
  {
    slug: "create-modals",
    label: "Create Modals",
    description: "Modal-based creation flows for quick-add patterns without leaving the current page.",
    count: 5,
    live: false,
  },
  {
    slug: "read-drawers",
    label: "Read Drawers",
    description: "Slide-out detail panels for reading record details without full navigation.",
    count: 7,
    live: false,
  },
  {
    slug: "update-forms",
    label: "Update Forms",
    description: "Edit form layouts matching the create form patterns — consistent data entry experience.",
    count: 6,
    live: false,
  },
  {
    slug: "delete-confirm",
    label: "Delete Confirm",
    description: "Deletion confirmation patterns — modal and inline, with destructive action hierarchy.",
    count: 3,
    live: false,
  },
];

export default function BlocksLandingPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Blocks
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Pre-built multi-component sections — Scripps-ified with Motive tokens, WCAG AA compliant,
          and ready to drop into any application. Each block is a complete, copyable pattern.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Source: Flowbite Pro enterprise license ·{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {blocks.map((block) => (
            <Link
              key={block.slug}
              href={`/application/blocks/${block.slug}`}
              className="group relative flex flex-col gap-3 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {block.label}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  {block.live ? (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Live
                    </span>
                  ) : (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      Coming soon
                    </span>
                  )}
                  <span className="text-xs text-gray-400 font-mono">{block.count}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {block.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
