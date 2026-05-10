export default function PowerPointPage() {
  const sections = [
    {
      title: "Cover Slide — Image",
      img: "/brand-standards/04-application-examples/08-powerpoint-templates/page-49.jpg",
      alt: "PowerPoint image cover slide — full-bleed patient photo, blue Wave Graphic with presentation title",
      intro: "The image-based PowerPoint template may be used for high visibility presentations to external and internal audiences. Imagery can help infuse the presentation with an emotional appeal. Pick the image carefully to reflect the Scripps image style while remaining relevant to the subject of the presentation.",
      rules: [
        "The Scripps logo should be a prominent element on the cover slide of every PowerPoint presentation.",
        "Emphasize the presentation title by placing it inside the Wave Graphic. Always use preferred logo alignments when possible.",
        "Insert an image into the cover slide that applies to the presentation subject matter.",
      ],
    },
    {
      title: "Cover Slide — Graphic",
      img: "/brand-standards/04-application-examples/08-powerpoint-templates/page-50.png",
      alt: "PowerPoint graphic cover slide — no photo, green Wave Graphic with title text",
      intro: "The graphic PowerPoint template may be used when a photographic treatment is either not suitable or relevant to the topic. It provides a neutral and sophisticated alternative to imagery.",
      rules: [
        "The Scripps logo should be a prominent element on the cover slide of every PowerPoint presentation.",
        "Emphasize the presentation title by placing it on top of the Wave Graphic. Always use preferred logo alignments when possible.",
      ],
    },
    {
      title: "Information Slide",
      img: "/brand-standards/04-application-examples/08-powerpoint-templates/page-51.png",
      alt: "PowerPoint information slide — Wave Graphic header bar with slide title, bullet list body, logo in footer",
      intro: null,
      rules: [
        "The slide title can be placed on the Wave Graphic at the top of each slide.",
        "Align slide title and content to the Scripps logo using the preferred logo alignments whenever possible.",
        "When multiple sections are in a presentation, the Wave Graphic color should be coordinated by section.",
      ],
    },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">PowerPoint Templates</h1>
        <p className="text-sm text-gray-400">Pages 49–51</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">
        {sections.map((s) => (
          <div key={s.title} className="border-t border-gray-100 pt-10 first:border-0 first:pt-0">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">{s.title}</h2>
            {s.intro && <p className="text-base text-gray-600 leading-relaxed mb-5">{s.intro}</p>}
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
