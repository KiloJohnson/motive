export default function MyScrippsPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-4"
        >
          My Scripps (Epic)
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Coming soon.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Design guidelines and component patterns for My Scripps — the patient-facing Epic portal.
          This context will cover portal UI conventions, Epic-specific interaction patterns,
          and how Motive tokens apply within Epic constraints.
        </p>
      </section>

      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Planned coverage
        </h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-2xl">
          {[
            "Portal navigation patterns",
            "Appointment scheduling flows",
            "Messaging and notifications",
            "Health record views",
            "Epic component overrides",
            "Accessibility requirements",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
