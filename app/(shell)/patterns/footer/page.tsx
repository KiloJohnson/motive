import Link from "next/link";

function VariantTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
      {label}
    </span>
  );
}

function UsageList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-500">
          <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function DesktopFooterPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <div className="bg-white px-6 py-5 grid grid-cols-3 gap-6 border-b border-gray-100">
        {[
          { icon: "📞", title: "Contact Us", body: "1-800-SCRIPPS · Mon–Fri, 7am–7pm" },
          { icon: "📬", title: "Get Connected", body: "Subscribe to the Scripps Health email newsletter." },
          { icon: "❤️", title: "Give to Scripps", body: "Support the Scripps Health Foundation." },
        ].map((item) => (
          <div key={item.title}>
            <p className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>
              {item.icon} {item.title}
            </p>
            <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item.body}</p>
          </div>
        ))}
      </div>
      <div className="px-6 py-5" style={{ backgroundColor: "#005FCF" }}>
        <div className="grid grid-cols-5 gap-4 mb-5">
          {["Find a Doctor", "Locations", "Patients & Visitors", "Medical Services", "About Us"].map((col) => (
            <div key={col}>
              <p className="text-xs font-semibold text-white mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{col}</p>
              <div className="space-y-1">
                {["Link", "Link", "Link"].map((l, i) => (
                  <p key={i} className="text-xs text-blue-200" style={{ fontFamily: "var(--font-red-hat-text)" }}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-400 pt-3 flex items-center justify-between">
          <p className="text-xs text-blue-200" style={{ fontFamily: "var(--font-red-hat-text)" }}>© 2025 Scripps Health. All rights reserved.</p>
          <div className="flex gap-3 text-xs text-blue-200" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            <span>Policies</span><span>Privacy Policy</span><span>Accessibility</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFooterPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-sm">
      <div className="px-4 py-4" style={{ backgroundColor: "#005FCF" }}>
        <div className="space-y-3 mb-4">
          {["Doctors & Services", "Locations", "Patients & Visitors", "Wellness", "About", "Contact"].map((item) => (
            <p key={item} className="text-sm font-semibold text-white border-b border-blue-400 pb-2"
              style={{ fontFamily: "var(--font-red-hat-display)" }}>{item}</p>
          ))}
        </div>
        <div className="border-t border-blue-400 pt-3 space-y-1">
          {["Policies and Notices", "Privacy Policy", "Price Transparency", "Accessibility Statement"].map((item) => (
            <p key={item} className="text-xs text-blue-200" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item}</p>
          ))}
          <p className="text-xs text-blue-300 pt-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            © 2025 Scripps Health. A 501(c)(1) nonprofit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FooterPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Footer</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The global footer anchors every Scripps page with utility links, contact information, social connections,
          and legal copy. Desktop and mobile variants ensure consistent structure across screen sizes.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Part of <Link href="/patterns/navigation" className="underline" style={{ color: "#005EB8" }}>Navigation</Link>
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop Footer</h2>
            <p className="text-sm text-gray-500">Full-width footer with utility band, nav columns, and legal bar.</p>
          </div>
          <DesktopFooterPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Theme=Desktop" />
            <VariantTag label="Domain=Scripps" />
          </div>
          <UsageList items={[
            "The top utility band (Contact, Get Connected, Give to Scripps) is consistent across all pages.",
            "Footer nav columns mirror the primary site IA — do not customize per page.",
            "Background color for the nav band is always brand-primary (#005FCF).",
            "Legal links and copyright appear in the bottom bar — never remove them.",
            "Social icons appear on desktop only.",
          ]} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile Footer</h2>
            <p className="text-sm text-gray-500">Stacked accordion-style footer for small screens.</p>
          </div>
          <MobileFooterPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Domain=Scripps" />
            <VariantTag label="Mobile" />
          </div>
          <UsageList items={[
            "Navigation sections stack vertically and expand on tap.",
            "Legal links appear below the nav, always visible without expanding.",
            "Social icons are condensed — icons only, no labels.",
          ]} />
        </section>

      </div>
    </div>
  );
}
