import Link from "next/link";

const sections = [
  {
    title: "Guidelines",
    description: "The foundational decisions — color, typography, spacing, motion, and more. Start here before building anything.",
    links: [
      { label: "Colors", href: "/guidelines/colors" },
      { label: "Typography", href: "/guidelines/typography" },
      { label: "Spacing", href: "/guidelines/spacing" },
      { label: "Icons", href: "/guidelines/icons" },
    ],
  },
  {
    title: "Patterns",
    description: "Reusable page-level structures — navigation, headers, footers, search, banners.",
    links: [
      { label: "Navigation", href: "/patterns/navigation" },
      { label: "Header", href: "/patterns/header" },
      { label: "Footer", href: "/patterns/footer" },
      { label: "Banners", href: "/patterns/banners" },
    ],
  },
  {
    title: "Flows",
    description: "End-to-end user flows specific to Scripps.org — finding a doctor, booking appointments, provider profiles.",
    links: [
      { label: "Find a Doctor", href: "/flows/find-a-doctor" },
      { label: "Provider Result", href: "/flows/provider-result" },
      { label: "Booking", href: "/flows/booking" },
      { label: "Omnisearch Bar", href: "/flows/omnisearch-bar" },
    ],
  },
  {
    title: "Components",
    description: "The atomic UI components — buttons, forms, modals, and more. Accessible, Scripps-branded, documented.",
    links: [
      { label: "Buttons", href: "/components/buttons" },
      { label: "Forms", href: "/components/forms" },
      { label: "Modals", href: "/components/modals" },
      { label: "Notifications", href: "/components/notifications" },
    ],
  },
];

export default function MarketingPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
          Marketing Context
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Scripps.org and consumer-facing products.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Guidelines, patterns, flows, and components for the Scripps marketing web —
          the public-facing experience patients and prospective patients encounter first.
        </p>
      </section>

      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          What&apos;s in this context
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {sections.map((section) => (
            <div key={section.title} className="p-8 border border-gray-100 rounded">
              <h3 className="text-base font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{section.description}</p>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "var(--motive-primary)" }}
                      className="text-sm font-medium hover:underline"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
