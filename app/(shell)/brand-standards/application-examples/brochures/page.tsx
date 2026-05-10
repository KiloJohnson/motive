export default function BrochuresPage() {
  const sections = [
    {
      title: "Graphic and Image Designs",
      page: "35",
      img: "/brand-standards/04-application-examples/02-brochures/page-35.jpg",
      alt: "Brochure cover designs — graphic and image-based layouts",
      rules: [
        "Flexibility allows the logo to appear on the left or right side of the application, depending on layout needs.",
        "The multiply effect can be applied to the Wave Graphic to allow an image with a simple background to show through. This adds depth and interest to the design. Use judgment when applying the multiply effect — the Wave Graphic should always be readily apparent.",
        "Always use the correct sizing and treatments to display the hospital entity name (see page 14 for reference).",
      ],
    },
    {
      title: "Image Designs",
      page: "36",
      img: "/brand-standards/04-application-examples/02-brochures/page-36.jpg",
      alt: "Brochure image designs — wave multiply effect over portrait and landscape photos",
      rules: [
        "Study the colors in the image before deciding which color scheme to apply to the Wave Graphic. If there are blue accents, use a blue graphic to unify the color signal.",
        "The Wave Graphic can be placed at the bottom of an image to allow layout flexibility.",
        "On some applications, the Veil Column may become a solid color. When the bar is solid, the tint of the color should be 100%. The bar should always remain transparent over the Wave Graphic.",
        "When applying the Veil Column to applications, do not cover important aspects of the image. If covering key elements is unavoidable, use a lower opacity.",
      ],
    },
    {
      title: "4\"×9\" Brochures — Front and Back Covers",
      page: "37",
      img: "/brand-standards/04-application-examples/02-brochures/page-37.jpg",
      alt: "4x9 brochure front and back covers",
      rules: [
        "Because the horizontal space on brochures is often limited, the headline can be aligned to any of the approved logo alignments (see page 7 for reference).",
        "On applications where space is limited, use a white veil bar. This leaves the logo and headline area more open. Use judgement on what opacity percentage works best with the image.",
        "The Wave Graphic should wrap around to the back panel whenever possible.",
        "Highlighting the introduction invites the reader in and promotes visual interest and hierarchy on the page.",
        "All the headlines in brochures should appear in Scripps blue, regardless of wave colors in use.",
      ],
    },
    {
      title: "4×9 Brochures — Inside Layout",
      page: "38",
      img: "/brand-standards/04-application-examples/02-brochures/page-38.jpg",
      alt: "4x9 inside layout — vertical color bars, Veil Column, 2-column text grid",
      rules: [
        "Never use the Wave Graphic on the inside of communications. A vertical bar should be placed next to headlines to help identify sections and add a touch of color. The color of the bar should always correspond with the color of the Wave Graphic used on the cover page.",
        "The Veil Column is an optional treatment to help feature distinct information and add visual interest and color to the layout. The Veil is limited to the muted color range and should always appear in a light tonality to ensure readability.",
        "Images can span one, two or three columns. To ensure a simple and professional appearance, never use more than two images on an inside spread.",
        "To ensure optimum readability and consistency, always typeset the body copy in Frutiger Roman 11/15 pt. An InDesign template is available for a 4\"×9\" 3-panel and 4-panel brochure.",
      ],
    },
    {
      title: "9\"×12\" Brochures — Covers",
      page: "39",
      img: "/brand-standards/04-application-examples/02-brochures/page-39.jpg",
      alt: "9x12 brochure covers — front and back with wave wrap",
      rules: [
        "The Wave Graphic should wrap around to the back panel whenever possible.",
        "Highlighting the introduction invites the reader in and promotes visual interest and hierarchy on the page.",
        "All the headlines in brochures should appear in Scripps blue, regardless of wave colors.",
      ],
    },
    {
      title: "9\"×12\" Brochures — Inside Layouts",
      page: "40",
      img: "/brand-standards/04-application-examples/02-brochures/page-40.jpg",
      alt: "9x12 inside spread layouts — 4-column grid options",
      rules: [
        "Do not use the Wave Graphic on the inside of communications. A vertical bar should be placed next to headlines to help identify sections and add a touch of color.",
        "Headlines and small introduction copy can be placed on images to add variety to designs. Only place copy on simple backgrounds with sufficient contrast to ensure readability.",
        "Images can span one or all four columns of a spread. Never use more than two images on an inside spread.",
        "Always typeset body copy in Frutiger Roman 11/15 pt. An InDesign template is available for 9\"×12\" and 8.5\"×11\" brochures.",
      ],
    },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application Examples
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Brochures</h1>
        <p className="text-sm text-gray-400">Pages 35–40</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">
        {sections.map((s) => (
          <div key={s.page} className="border-t border-gray-100 pt-10 first:border-0 first:pt-0">
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
