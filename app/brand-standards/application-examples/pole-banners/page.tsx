export default function PoleBannersPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Pole Banners</h1>
        <p className="text-sm text-gray-400">Page 41</p>
      </section>
      <section className="px-16 py-12 max-w-5xl">
        <ol className="space-y-3 mb-8">
          {[
            "For applications with limited space, use a white veil bar. This allows the logo to maximize the staging area. Use judgement on what opacity percentage works best with the image.",
            "On banners where space is limited, the logo can be centered. This will allow the logo to be as large as possible, providing maximum visibility on a pole banner.",
          ].map((r, i) => (
            <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
        <img src="/brand-standards/04-application-examples/03-pole-banners/page-41.jpg" alt="Two pole banner examples — logo bottom with white veil, and logo centered with blue wave overlay" className="w-full h-auto rounded border border-gray-100" />
      </section>
    </div>
  );
}
