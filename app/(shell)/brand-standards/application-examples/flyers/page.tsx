export default function FlyersPage() {
  const sections = [
    {
      title: "Event Flyer with Doctor Bio",
      img: "/brand-standards/04-application-examples/07-flyers/page-46.jpg",
      alt: "Event flyer with physician bio sheet",
      rules: [
        "To emphasize the date, typography may be placed inside the Wave Graphic.",
        "0.5 pt. line rules may be used to break up sections or blocks of copy and give more emphasis to the call-to-action.",
        "Placing the physician portrait and photo inside the Veil Column helps separate it from the event information.",
        "Titles can include a subtitle for serial events.",
      ],
    },
    {
      title: "Large Image",
      img: "/brand-standards/04-application-examples/07-flyers/page-47.jpg",
      alt: "Large-image flyers — full-bleed photo with Wave Graphic headline strip",
      rules: [
        "To emphasize a headline or name, type may be placed in the Wave Graphic.",
        "0.5 pt. line rules may be used to break up blocks of copy and give more emphasis to certain information on the page.",
        "On content-heavy applications there may not be room for a large photo. In such cases, images can be placed in the Veil Column.",
        "Placing copy inside the Veil Column can help distinguish it from the rest of the content.",
        "On applications with limited content, using a large image can help bring the subject to life.",
      ],
    },
    {
      title: "Content-Heavy Flyer",
      img: "/brand-standards/04-application-examples/07-flyers/page-48.png",
      alt: "Content-heavy flyer — no image, orange Wave Graphic headline, 3-column text layout",
      rules: [
        "To emphasize a headline or name, typography may be placed inside the Wave Graphic.",
        "0.5 pt. line rules may be used to break up sections or blocks of copy and give more emphasis to certain information on the page.",
        "Apply color to the subheads to add visual interest when imagery is absent.",
      ],
    },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Flyers</h1>
        <p className="text-sm text-gray-400">Pages 46–48</p>
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
