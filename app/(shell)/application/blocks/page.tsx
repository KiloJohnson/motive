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
    slug: "application-shells",
    label: "Application Shells",
    description: "Full-page layout scaffolding — sidebar, navbar, and content area combinations that form the structural foundation of any admin app.",
    count: 5,
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
    live: true,
  },
  {
    slug: "dashboard-footers",
    label: "Dashboard Footers",
    description: "Bottom-of-page footer patterns — link columns, legal text, social icons, and sitemap layouts.",
    count: 7,
    live: true,
  },
  {
    slug: "advanced-tables",
    label: "Advanced Tables",
    description: "Complex table patterns with sorting, filtering, expandable rows, and bulk actions for data-heavy interfaces.",
    count: 5,
    live: true,
  },
  {
    slug: "create-forms",
    label: "Create Forms",
    description: "Full-page form layouts for creating records — members, invoices, manual payments.",
    count: 6,
    live: true,
  },
  {
    slug: "create-modals",
    label: "Create Modals",
    description: "Modal-based creation flows for quick-add patterns without leaving the current page.",
    count: 5,
    live: true,
  },
  {
    slug: "create-drawers",
    label: "Create Drawers",
    description: "Slide-out panel forms for creating new records without navigating away from the current view.",
    count: 4,
    live: true,
  },
  {
    slug: "read-drawers",
    label: "Read Drawers",
    description: "Slide-out detail panels for reading record details without full navigation.",
    count: 7,
    live: true,
  },
  {
    slug: "read-modals",
    label: "Read Modals",
    description: "Modal patterns for displaying record details — user profiles, order summaries, product info.",
    count: 6,
    live: true,
  },
  {
    slug: "read-sections",
    label: "Read Sections",
    description: "Detail view sections for displaying record data — profile cards, stats grids, activity feeds, info panels.",
    count: 7,
    live: true,
  },
  {
    slug: "update-forms",
    label: "Update Forms",
    description: "Edit form layouts matching the create form patterns — consistent data entry experience.",
    count: 6,
    live: true,
  },
  {
    slug: "update-modals",
    label: "Update Modals",
    description: "Modal-based edit flows for updating records inline — pre-populated with existing data for quick edits.",
    count: 4,
    live: true,
  },
  {
    slug: "update-drawers",
    label: "Update Drawers",
    description: "Slide-out edit panels for updating existing records — same form patterns as create drawers, pre-populated.",
    count: 4,
    live: true,
  },
  {
    slug: "delete-confirm",
    label: "Delete Confirm",
    description: "Deletion confirmation patterns — modal and inline, with destructive action hierarchy.",
    count: 3,
    live: true,
  },
  {
    slug: "success-message",
    label: "Success Messages",
    description: "Confirmation and success state patterns — post-create, post-submit, and post-action feedback screens.",
    count: 5,
    live: true,
  },
  {
    slug: "dropdown-filters",
    label: "Dropdown Filters",
    description: "Filter menu patterns for narrowing data sets by category, date range, status, or custom criteria.",
    count: 7,
    live: true,
  },
  {
    slug: "faceted-search-drawers",
    label: "Faceted Search Drawers",
    description: "Slide-out filter panels with multiple facets — checkboxes, range sliders, tag selections for large data sets.",
    count: 4,
    live: true,
  },
  {
    slug: "faceted-search-modals",
    label: "Faceted Search Modals",
    description: "Modal-based filter overlays with multiple facets for focused filtering without leaving the current context.",
    count: 5,
    live: true,
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
