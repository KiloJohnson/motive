import Link from "next/link";

const adminPreviews = [
  {
    slug: "/preview/admin-dashboard",
    label: "Dashboard",
    description: "KPI cards, weekly revenue area chart, traffic source bar chart, and recent transactions table.",
    screens: ["KPIs", "Area chart", "Transactions"],
  },
  {
    slug: "/preview/admin-kanban",
    label: "Kanban",
    description: "Four-column project board with labeled cards, assignee avatars, due dates, and attachment counts.",
    screens: ["To Do", "In Progress", "Review", "Done"],
  },
  {
    slug: "/preview/admin-mailing",
    label: "Mailing",
    description: "Full inbox layout — folder sidebar, email list with unread indicators, and a reading pane.",
    screens: ["Inbox", "Email list", "Reading pane"],
  },
  {
    slug: "/preview/admin-users",
    label: "Users",
    description: "Searchable, filterable user table with avatars, roles, country, status badges, and pagination.",
    screens: ["Search", "Table", "Pagination"],
  },
  {
    slug: "/preview/admin-profile",
    label: "User Profile",
    description: "Profile cover, avatar, stats, bio, skills badges, and a recent activity feed.",
    screens: ["Cover", "Stats", "Activity"],
  },
  {
    slug: "/preview/admin-settings",
    label: "Settings",
    description: "Multi-section settings panel: General info, Password, Notifications toggles, Sessions, and Delete account.",
    screens: ["General", "Password", "Notifications"],
  },
  {
    slug: "/preview/admin-products",
    label: "Products",
    description: "E-commerce product table with SKU, category, price, stock count, and status badges.",
    screens: ["Search", "Table", "Stock status"],
  },
  {
    slug: "/preview/admin-billing",
    label: "Billing",
    description: "Plan comparison cards, payment method management, and a downloadable billing history table.",
    screens: ["Plans", "Payment", "History"],
  },
  {
    slug: "/preview/admin-signin",
    label: "Sign In",
    description: "Centered authentication page with email/password, remember me, and forgot password flow.",
    screens: ["Email", "Password", "Remember me"],
  },
];

const pimcPreviews = [
  {
    slug: "/preview/pimc-backoffice",
    label: "PIMC Dashboard",
    description: "KPI cards, membership tier breakdown, and recent invoices. The opening view for PIMC back office staff.",
    screens: ["KPIs", "Tier breakdown", "Invoice table"],
  },
  {
    slug: "/preview/member-list",
    label: "Member Management",
    description: "Full member list with search, filters, row actions, create modal, and delete confirmation.",
    screens: ["List", "Create", "Delete confirm"],
  },
  {
    slug: "/preview/waitlist",
    label: "Waitlist",
    description: "Waitlist queue with position reordering, convert to member flow, and deposit refund.",
    screens: ["Queue", "Convert", "Decline & refund"],
  },
];

function PreviewCard({ p }: { p: { slug: string; label: string; description: string; screens: string[] } }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="h-36 bg-gray-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--motive-primary) 0%, transparent 70%)" }} />
        <div className="text-center z-10">
          <p className="text-white font-semibold mb-1">{p.label}</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {p.screens.map((s) => (
              <span key={s} className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">{p.label}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{p.description}</p>
        <div className="flex gap-2">
          <Link
            href={p.slug}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--motive-primary)" }}
          >
            Open →
          </Link>
          <Link
            href={p.slug}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Inline
          </Link>
        </div>
      </div>
    </div>
  );
}

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
          Complete, navigable application shells built with Motive tokens — live running code, not screenshots.
          Each preview is a standalone app with its own sidebar, topbar, and full interactions.
        </p>
      </section>

      <section className="px-16 py-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
          Admin Dashboard Gallery
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {adminPreviews.map((p) => <PreviewCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="px-16 pb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
          PIMC Back Office
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {pimcPreviews.map((p) => <PreviewCard key={p.slug} p={p} />)}
        </div>
      </section>

    </div>
  );
}
