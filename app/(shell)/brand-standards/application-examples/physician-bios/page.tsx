export default function PhysicianBiosPage() {
  const sections = [
    {
      title: "8.5×11\"",
      img: "/brand-standards/04-application-examples/06-physician-bios/page-44.jpg",
      alt: "Two 8.5x11 physician bio layouts — photo in Veil Column, name in Wave Graphic",
      rules: [
        "On content-heavy applications, there may not be room for a large photo. In such cases, images can be placed in the Veil Column.",
        "To emphasize a headline or name, type may be placed in the Wave Graphic. Always ensure contrast is optimal.",
        "Placing copy inside the Veil Column can help emphasize it over the rest of the content.",
        "If a portrait is low resolution, or if it doesn't fit the full Veil Column area well, the photo can be inset and aligned with the document grid.",
      ],
    },
    {
      title: "4×9\" Front & Back",
      img: "/brand-standards/04-application-examples/06-physician-bios/page-45.jpg",
      alt: "4x9 physician bio front and back — photo, name in Wave Graphic, structured info list in Veil",
      rules: [
        "On content-heavy applications, there may not be room for a large photo. In such cases, images can be placed in the vertical column.",
        "To emphasize a headline or name, type may be placed in the Wave Graphic.",
        "Placing copy inside the Veil Column can help distinguish it from the rest of the content.",
      ],
    },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Physician Bios</h1>
        <p className="text-sm text-gray-400">Pages 44–45</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">
        {sections.map((s) => (
          <div key={s.title} className="border-t border-gray-100 pt-10 first:border-0 first:pt-0">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">{s.title}</h2>
            <ol className="space-y-3 mb-8">
              {s.rules.map((r, i) => (
                <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
                  <span>{r}</span>
                </li>
              ))}
            </ol>
            <img src={s.img} alt={s.alt} className="w-full h-auto rounded border border-gray-100" />
          </div>
        ))}
      </section>
    </div>
  );
}
