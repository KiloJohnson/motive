import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p
          style={{ color: "#005EB8" }}
          className="text-xs font-semibold uppercase tracking-widest mb-4"
        >
          Welcome to Motive™
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          The Scripps Health Design System
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          Motive provides a unified design language, component library, and
          guidelines for building digital products and services at Scripps Health.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/guidelines/page-structure"
            style={{ backgroundColor: "#005EB8" }}
            className="px-6 py-3 text-sm font-medium text-white rounded hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <Link
            href="/components/buttons"
            className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
          >
            Component Library
          </Link>
        </div>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          What&apos;s in Motive
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              title: "Foundations",
              description:
                "Color, typography, spacing, motion — the core tokens that define Scripps digital experiences.",
              href: "/guidelines/colors",
            },
            {
              title: "Guidelines",
              description:
                "Page structure, grid systems, accessibility standards, and usage patterns.",
              href: "/guidelines/page-structure",
            },
            {
              title: "Components",
              description:
                "A library of reusable UI components built on Flowbite, customized for Scripps.",
              href: "/components/buttons",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block p-6 border border-gray-100 hover:border-gray-300 transition-colors rounded"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Why Motive
        </h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 max-w-3xl">
          {[
            {
              title: "Make experiences consistent",
              body: "Products built with Motive share a common visual language that earns trust across every Scripps touchpoint.",
            },
            {
              title: "Build accessibility in",
              body: "Components meet WCAG 2.1 AA standards. Accessibility is a baseline, not a feature.",
            },
            {
              title: "Design for AI workflows",
              body: "Guidelines and tokens are structured to support AI-assisted creation — for designers, developers, and stakeholders.",
            },
            {
              title: "Move faster",
              body: "A shared system means teams stop solving the same problems. Focus on new challenges instead.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
