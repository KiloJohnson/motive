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
        <Link
          href={p.slug}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors"
          style={{ backgroundColor: "var(--motive-primary)" }}
        >
          Open in new tab ↗
        </Link>
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
          Open the Sample App to explore a fully connected admin dashboard with 17 pages and internal navigation.
        </p>
      </section>

      {/* Sample App hero */}
      <section className="px-16 py-10 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between gap-8 max-w-3xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sample App</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              A complete Scripps-ified admin dashboard — 17 pages, fully connected internal navigation.
              Dashboard, E-Commerce, Users, Kanban, Mailing, Auth pages, and more.
              Demonstrates the full breadth of what Motive can produce.
            </p>
            <Link
              href="/preview/admin-dashboard"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--motive-primary)" }}
            >
              Open Sample App ↗
            </Link>
          </div>
          <div className="hidden lg:flex shrink-0 items-center gap-1.5 flex-wrap w-56">
            {["Dashboard","Kanban","Mailing","Users","Products","Billing","Invoice","Profile","Settings","Sign In","Sign Up","Pricing","404"].map((s) => (
              <span key={s} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-16 py-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
          Individual Pages
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {adminPreviews.map((p) => <PreviewCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="px-16 pb-12 border-t border-gray-100 dark:border-gray-700 pt-10">
        <div className="flex items-start justify-between gap-8 max-w-3xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PIMC Back Office</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              Scripps PIMC-specific back office shell — Dashboard, Analytics, E-commerce,
              Member Management, and Waitlist. A product-specific implementation built on Motive.
              Will become a standalone project when the PIMC front end ships.
            </p>
            <Link
              href="/preview/pimc-backoffice"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--motive-primary)" }}
            >
              Open PIMC App ↗
            </Link>
          </div>
          <div className="hidden lg:flex shrink-0 items-center gap-1.5 flex-wrap w-56">
            {["Dashboard","Analytics","E-commerce","Members","Waitlist","Invoices","Payments","Reports"].map((s) => (
              <span key={s} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
