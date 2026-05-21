import Link from "next/link";

const dashboardPreviews = [
  {
    slug: "/preview/dashboard-primary-care",
    label: "Primary Care",
    accent: "#005EB8",
    description: "Patient volume, provider utilization, appointment type mix, and no-show rate across all Scripps Clinic primary care locations.",
    screens: ["Patient volume", "Provider util.", "Appt types"],
  },
  {
    slug: "/preview/dashboard-cancer",
    label: "Cancer Care",
    accent: "#0d9488",
    description: "Weekly treatment volume by modality, cancer type mix, and tumor board case queue for Scripps Cancer Center oncology teams.",
    screens: ["Treatment volume", "Cancer types", "Tumor board"],
  },
  {
    slug: "/preview/dashboard-heart",
    label: "Heart Care",
    accent: "#dc2626",
    description: "Cardiac procedure volume, cath lab utilization, 30-day readmission trend vs. national benchmark, and tomorrow's procedure schedule.",
    screens: ["Procedures", "Readmission trend", "OR schedule"],
  },
  {
    slug: "/preview/dashboard-ortho",
    label: "Orthopedics",
    accent: "#475569",
    description: "Surgical volume by procedure type, OR utilization, post-op follow-up compliance, and today's operating room schedule.",
    screens: ["Surgical volume", "OR schedule", "PT conversion"],
  },
  {
    slug: "/preview/dashboard-healthexpress",
    label: "HealthExpress Walk-In",
    accent: "#16a34a",
    description: "Live patient queue with color-coded wait status, wait time by hour of day, and check-in method breakdown. The standout.",
    screens: ["Live queue", "Wait trend", "Check-in method"],
  },
  {
    slug: "/preview/dashboard-urgentcare",
    label: "Urgent Care",
    accent: "#d97706",
    description: "Census, door-to-doctor time, LWBS rate, divert status, hourly arrivals, ESI acuity mix, disposition donut, and current patient list.",
    screens: ["Census", "Arrivals", "ESI acuity", "Patients"],
  },
];

function DashboardCard({ p }: { p: typeof dashboardPreviews[0] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="h-36 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: `${p.accent}18` }}>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${p.accent} 0%, transparent 70%)`, opacity: 0.12 }} />
        <div className="text-center z-10 px-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" style={{ backgroundColor: p.accent, color: "#fff" }}>
            Scripps Health
          </div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">{p.label}</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {p.screens.map((s) => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full text-white/80" style={{ backgroundColor: `${p.accent}33` }}>{s}</span>
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
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: p.accent }}
        >
          Open dashboard ↗
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
          Six Scripps service-line dashboards, a fully connected 17-page admin sample app, and the PIMC back office.
        </p>
      </section>

      {/* Medical dashboards */}
      <section className="px-16 py-10 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Scripps Service-Line Dashboards</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
          Six clinical dashboards — one per Scripps service line. Each uses real-world KPIs, Recharts data visualizations,
          and service-line accent colors. These are the argument for what Motive-powered analytics can look like.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {dashboardPreviews.map((p) => <DashboardCard key={p.slug} p={p} />)}
        </div>
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

      {/* PIMC hero */}
      <section className="px-16 pb-12 pt-10">
        <div className="flex items-start justify-between gap-8 max-w-3xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PIMC Back Office</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              Scripps PIMC-specific back office shell — Dashboard, Invoices, Member Management, and Waitlist.
              A product-specific implementation built on Motive.
              Will become a standalone project when the PIMC front end ships.
            </p>
            <Link
              href="/preview/pimc-backoffice"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#544329" }}
            >
              Open PIMC App ↗
            </Link>
          </div>
          <div className="hidden lg:flex shrink-0 items-center gap-1.5 flex-wrap w-56">
            {["Dashboard","Invoices","Members","Waitlist","Payments","Analytics"].map((s) => (
              <span key={s} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
