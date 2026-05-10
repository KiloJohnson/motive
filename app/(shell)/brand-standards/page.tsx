import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    pages: [
      { label: "Letter from Leadership", href: "/brand-standards/introduction/letter-from-leadership", desc: "A message from Don Stanziano, Corporate VP of Marketing and Communications, on the Scripps brand legacy." },
      { label: "About Our Brand", href: "/brand-standards/introduction/about-our-brand", desc: "Brand promise, positioning statement, pillars, and attributes that define the Scripps identity." },
    ],
  },
  {
    title: "The Scripps Logo",
    pages: [
      { label: "Introduction", href: "/brand-standards/scripps-logo/introduction", desc: "The symbol and logotype — what they represent, and their three defining colors." },
      { label: "Clear Space & Alignments", href: "/brand-standards/scripps-logo/clear-space", desc: "Minimum clear space rules and approved alignment positions for consistent placement." },
      { label: "Sizing", href: "/brand-standards/scripps-logo/sizing", desc: "Standard print and digital sizes from 1\" to 2\" and the 150px digital standard." },
      { label: "Color Variations", href: "/brand-standards/scripps-logo/color-variations", desc: "Full-color, one-color, reverse, and Foundation metallic treatments." },
      { label: "Placement", href: "/brand-standards/scripps-logo/placement", desc: "Precise placement specifications for print collateral, web, and mobile properties." },
      { label: "Architecture", href: "/brand-standards/scripps-logo/architecture", desc: "How entity names (hospitals, programs) relate to and are typeset alongside the logo." },
      { label: "Program & Event Visuals", href: "/brand-standards/scripps-logo/program-and-event-visuals", desc: "Guidelines for thematic visuals used in special programs and events." },
      { label: "Headline Scaling", href: "/brand-standards/scripps-logo/headline", desc: "The size relationship between the headline and the Scripps logo." },
      { label: "Scripps Clinic Logo", href: "/brand-standards/scripps-logo/scripps-clinic-logo", desc: "The one exception — when and how to use the Scripps Clinic logo." },
    ],
  },
  {
    title: "The Scripps Design System",
    pages: [
      { label: "Introduction", href: "/brand-standards/design-system/introduction", desc: "The four key elements — Logo, Wave Graphic, Veil Column, and Imagery — working in unison." },
      { label: "Color Palette", href: "/brand-standards/design-system/color-palette", desc: "The full 15-color Pantone palette with CMYK, RGB, and Web hex values." },
      { label: "Typography", href: "/brand-standards/design-system/typography", desc: "Frutiger as the primary typeface, plus Sabon Next, Myriad Pro, and Carto Gothic." },
      { label: "Subgraphic Elements", href: "/brand-standards/design-system/subgraphic-elements", desc: "The Wave Graphic and Veil Column — compositions, cropping, and color palettes." },
      { label: "Imagery", href: "/brand-standards/design-system/imagery", desc: "Photography standards — natural light, authentic expression, what to avoid." },
    ],
  },
  {
    title: "Application Examples",
    pages: [
      { label: "Folders", href: "/brand-standards/application-examples/folders", desc: "Graphic design standards for Scripps folder applications." },
      { label: "Brochures", href: "/brand-standards/application-examples/brochures", desc: "4×9\" and 9×12\" brochure covers and inside layouts." },
      { label: "Pole Banners", href: "/brand-standards/application-examples/pole-banners", desc: "Outdoor pole banner placement and logo staging." },
      { label: "Invitations", href: "/brand-standards/application-examples/invitations", desc: "Veil Column and typography placement for invitation design." },
      { label: "Newsletter Header", href: "/brand-standards/application-examples/newsletter-header", desc: "Periodical header layout with consistent logo and date placement." },
      { label: "Physician Bios", href: "/brand-standards/application-examples/physician-bios", desc: "8.5×11\" and 4×9\" physician bio sheet layouts." },
      { label: "Flyers", href: "/brand-standards/application-examples/flyers", desc: "Event flyers, large-image layouts, and content-heavy flyer designs." },
      { label: "PowerPoint Templates", href: "/brand-standards/application-examples/powerpoint-templates", desc: "Cover and information slide standards for presentations." },
      { label: "Websites & Social Media", href: "/brand-standards/application-examples/websites-and-social-media", desc: "Employee portal and Facebook brand application guidelines." },
      { label: "Foundation Materials", href: "/brand-standards/application-examples/foundation-materials", desc: "Invitations and postcards for Scripps Health Foundation events." },
    ],
  },
  {
    title: "Word Count Examples",
    pages: [
      { label: "Physician Bios", href: "/brand-standards/word-count/physician-bios", desc: "Word count reference for 8.5×11\" and 4×9\" physician bio formats." },
      { label: "4×9 Brochures", href: "/brand-standards/word-count/4x9-brochures", desc: "Panel-by-panel word counts for three-panel 4×9\" brochures." },
      { label: "Flyers", href: "/brand-standards/word-count/flyers", desc: "Word count reference for event flyers with physician bio sheets." },
    ],
  },
];

export default function BrandStandardsHome() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
          Brand Standards
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Scripps Health Brand Identity Guidelines
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          The official Scripps brand identity document — logo, color, typography, graphic system, and application examples. The print standard that defines the Scripps visual language and serves as the foundation for all Scripps communications.
        </p>
      </section>

      <section className="px-16 py-16">
        <div className="space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                {section.title}
              </h2>
              <div className="grid grid-cols-2 gap-4 max-w-4xl">
                {section.pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group block p-5 border border-gray-100 hover:border-gray-300 rounded transition-colors"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                      {page.label}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{page.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
