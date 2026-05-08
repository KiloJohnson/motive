export default function ScrippsConnectPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-4"
        >
          ScrippsConnect (SharePoint)
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Coming soon.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Design guidelines and patterns for ScrippsConnect — the internal SharePoint intranet.
          This context will cover intranet UI conventions, SharePoint web part patterns,
          and how Motive tokens translate into the SharePoint environment.
        </p>
      </section>

      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Planned coverage
        </h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-2xl">
          {[
            "Intranet navigation patterns",
            "News and announcements",
            "Employee directory",
            "SharePoint web part library",
            "Document management UI",
            "Brand application within SharePoint",
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
