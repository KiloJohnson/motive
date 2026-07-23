export default function FoldersPage() {
  const rules = [
    "Scripps logo must always be placed on a white background.",
    "Headlines should be featured in Scripps blue whenever possible to reinforce the Scripps identity.",
    "These are graphic applications so the wave is featured using the non image–based color treatment (see page 25 for reference).",
    "The image or graphic does not always need to extend down to the bottom of the page. Allowing negative space to be used as part of the composition reinforces a balanced, simple and unique appearance.",
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application Examples
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Folders</h1>
        <p className="text-sm text-gray-400">Page 34</p>
      </section>
      <section className="px-16 py-12 max-w-5xl">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Graphic Designs</h2>
        <ol className="space-y-3 mb-8">
          {rules.map((r, i) => (
            <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/04-application-examples/01-folders/page-34.png`} alt="Two folder cover designs — one Veil Column and one Wave-only graphic design" className="w-full h-auto rounded border border-gray-100" />
      </section>
    </div>
  );
}
