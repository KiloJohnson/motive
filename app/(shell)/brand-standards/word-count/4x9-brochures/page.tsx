export default function WordCount4x9BrochuresPage() {
  const samples = [
    {
      title: "Word Count Sample 1",
      img: "/brand-standards/05-word-count/02-4x9-brochures/page-61.jpg",
      alt: "4×9 brochure word count sample 1 — full 3-panel layout with word counts per section",
      interior: [
        { section: "Left Interior", count: 206 },
        { section: "Center Interior", count: 232 },
        { section: "Veil", count: 220 },
      ],
      exterior: [
        { section: "Flap", count: 210 },
        { section: "Back", count: 45 },
      ],
    },
    {
      title: "Word Count Sample 2",
      img: "/brand-standards/05-word-count/02-4x9-brochures/page-62.jpg",
      alt: "4×9 brochure word count sample 2 — large photo version with reduced text counts",
      interior: [
        { section: "Left Interior", count: 146 },
        { section: "Center Interior", count: 190 },
        { section: "Veil", count: 220 },
      ],
      exterior: [
        { section: "Flap", count: 140 },
        { section: "Back", count: 0 },
      ],
    },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Word Count Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">4×9 Brochures</h1>
        <p className="text-sm text-gray-400">Pages 61–62</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            Before you begin writing and formatting copy for a three-panel 4×9 brochure, be sure to refer to the word counts in this guide, which will help you gauge the amount of copy for the space provided.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            Start with a Welcome and/or appropriate introduction. Depending on the topic or focus, you can include information about specific services, benefits, and treatments. Typically, you'll want to include some boilerplate information about Scripps.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            The back of the brochure is reserved for the call to action, contact information, a map and directions if needed, and our web address.
          </p>
        </div>

        {samples.map((s, idx) => (
          <div key={s.title} className={idx === 0 ? "" : "border-t border-gray-100 pt-10"}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">{s.title}</h2>
            <div className="flex gap-6 mb-8 flex-wrap">
              <div className="border border-gray-200 rounded overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Interior</span>
                </div>
                <table className="text-sm">
                  <tbody>
                    {s.interior.map((row) => (
                      <tr key={row.section} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-2 text-gray-600">{row.section}</td>
                        <td className="px-4 py-2 font-semibold text-gray-900 text-right">{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-gray-200 rounded overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Exterior</span>
                </div>
                <table className="text-sm">
                  <tbody>
                    {s.exterior.map((row) => (
                      <tr key={row.section} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-2 text-gray-600">{row.section}</td>
                        <td className="px-4 py-2 font-semibold text-gray-900 text-right">{row.count === 0 ? "—" : row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <img
              src={s.img}
              alt={s.alt}
              className="w-full h-auto rounded border border-gray-100"
            />
          </div>
        ))}

      </section>
    </div>
  );
}
