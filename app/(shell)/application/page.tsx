
const upcoming = [
  {
    title: "Dashboards",
    description: "KPI cards, charts, data tables, and maps — full dashboard layouts styled with Scripps tokens.",
    items: ["Analytics Dashboard", "E-commerce Dashboard"],
  },
  {
    title: "Data Tables",
    description: "Sortable, filterable, paginated tables for patient data, provider lists, appointment records, and admin views.",
    items: ["Basic Table", "Filterable Table", "Inline Edit"],
  },
  {
    title: "Forms",
    description: "Complex form layouts with validation — appointments, patient intake, admin configuration.",
    items: ["Form Layouts", "Validation States", "Multi-step Forms"],
  },
  {
    title: "Authentication",
    description: "Sign-in, sign-up, and password recovery screens using Flowbite Auth components with Scripps branding.",
    items: ["Sign In", "Sign Up", "Forgot Password"],
  },
];

export default function ApplicationPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-20">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-4"
        >
          Application Context
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-2xl leading-tight mb-6">
          Production-ready components for every application pattern.
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
          Dashboards, data tables, forms, authentication — fully-featured application
          components styled with Scripps tokens, documented, and ready to build with.
        </p>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            In progress
          </span>
        </div>
      </section>

      <section className="px-16 py-16 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          What&apos;s coming
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {upcoming.map((block) => (
            <div key={block.title} className="p-6 border border-gray-100 dark:border-gray-700 rounded">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{block.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{block.description}</p>
              <ul className="space-y-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-gray-300 dark:text-gray-600">✳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          How it works
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-3xl">
          {[
            { step: "01", title: "Built on a solid foundation", body: "Components come from a best-in-class React library used directly from npm — no forking, no copying. Library updates are inherited automatically." },
            { step: "02", title: "Scripps tokens override", body: "CSS custom properties replace Flowbite's default blue with Scripps blue, and Red Hat fonts replace the default typeface globally." },
            { step: "03", title: "Motive documents it", body: "Each pattern page shows the live component, the token overrides, and the code snippet — the canonical reference for Scripps app development." },
          ].map((item) => (
            <div key={item.step}>
              <p style={{ color: "var(--motive-primary)" }} className="text-xs font-mono font-semibold mb-3">{item.step}</p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
