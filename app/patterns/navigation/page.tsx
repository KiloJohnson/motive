
function SectionHeader({ label, description }: { label: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">{label}</h2>
      <p className="text-sm text-gray-500 max-w-2xl">{description}</p>
    </div>
  );
}

function VariantTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
      {label}
    </span>
  );
}

function UsageList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-500">
          <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// --- Previews ---

function DesktopHeaderPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <div className="bg-white flex items-center justify-between px-6 py-3 shadow-sm">
        <div className="flex items-center">
          <img src="/logos/scripps.svg" alt="Scripps" className="h-5 w-auto" />
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Patients &amp; Visitors</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
        <button className="px-4 py-1.5 text-sm font-medium text-white rounded" style={{ backgroundColor: "#005FCF" }}>
          Get Care
        </button>
      </div>
    </div>
  );
}

function StickyHeaderPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden space-y-0">
      <div className="bg-white flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <img src="/logos/scripps.svg" alt="Scripps" className="h-5 w-auto" />
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Patients &amp; Visitors</span>
        </nav>
        <button className="px-4 py-1.5 text-sm font-medium text-white rounded" style={{ backgroundColor: "#005FCF" }}>
          Get Care
        </button>
      </div>
      <div className="bg-gray-50 flex items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
          <span className="text-xs font-medium text-gray-500">Market 2</span>
        </div>
        <nav className="flex items-center gap-5 text-xs text-gray-400">
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Contact</span>
        </nav>
        <button className="px-3 py-1 text-xs font-medium text-white rounded bg-gray-400">
          Get Care
        </button>
      </div>
    </div>
  );
}

function MobileHeaderPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-sm">
      <div className="bg-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-blue-600" />
          <span className="text-sm font-semibold text-blue-700">Scripps</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: "#005FCF" }}>
            Get Care
          </button>
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbPreview() {
  return (
    <div className="border border-gray-200 rounded p-4 space-y-3 bg-white">
      {[
        [{ text: "Home", active: false }],
        [{ text: "Home", active: false }, { text: "Level 2", active: true }],
        [{ text: "Home", active: false }, { text: "Level 2", active: false }, { text: "Level 3", active: true }],
        [{ text: "Home", active: false }, { text: "Level 2", active: false }, { text: "...", active: false }, { text: "Level 4", active: true }],
      ].map((crumbs, i) => (
        <div key={i} className="flex items-center gap-1.5">
          {crumbs.map((crumb, j) => (
            <span key={j} className="flex items-center gap-1.5">
              {j > 0 && <span className="text-gray-300 text-xs">/</span>}
              <span
                className={`text-sm ${crumb.active ? "font-semibold text-gray-900" : "text-blue-600 hover:underline cursor-pointer"}`}
              >
                {crumb.text}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function FooterPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <div className="bg-white px-6 py-5 grid grid-cols-3 gap-6 border-b border-gray-100">
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">📞 Contact Us</p>
          <p className="text-xs text-gray-500">1-800-SCRIPPS · Mon–Fri, 7am–7pm</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">📬 Get Connected</p>
          <p className="text-xs text-gray-500">Subscribe to the Scripps Health email newsletter.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">❤️ Give to Scripps</p>
          <p className="text-xs text-gray-500">Support the Scripps Health Foundation.</p>
        </div>
      </div>
      <div className="px-6 py-4" style={{ backgroundColor: "#005FCF" }}>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {["Find a Doctor", "Locations", "Patients & Visitors", "Medical Services", "About Us"].map((col) => (
            <div key={col}>
              <p className="text-xs font-semibold text-white mb-1">{col}</p>
              <div className="space-y-0.5">
                {["Link", "Link", "Link"].map((l, i) => (
                  <p key={i} className="text-xs text-blue-200">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-400 pt-3 flex items-center justify-between">
          <p className="text-xs text-blue-200">© 2025 Scripps Health. All rights reserved.</p>
          <div className="flex gap-3 text-xs text-blue-200">
            <span>Policies</span>
            <span>Privacy Policy</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoPreview() {
  return (
    <div className="border border-gray-200 rounded p-6 bg-white flex flex-wrap items-center gap-10">
      <div className="flex flex-col items-start gap-2">
        <img src="/logos/scripps.svg" alt="Scripps" className="w-[130px] h-auto" />
        <p className="text-xs text-gray-400">Market=Scripps</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <img src="/logos/myscripps.svg" alt="MyScripps" className="w-[130px] h-auto" />
        <p className="text-xs text-gray-400">PatientPortal</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <img src="/logos/sandiegohealth.png" alt="Scripps San Diego Health" className="w-[200px] h-auto" />
        <p className="text-xs text-gray-400">Market=SanDiegoHealth</p>
      </div>
    </div>
  );
}

// --- Page ---

export default function NavigationPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Navigation</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The Scripps navigation system spans desktop and mobile, supports multiple brands under the Scripps
          umbrella, and includes global header, footer, breadcrumbs, and logo variants.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Logos */}
        <section>
          <SectionHeader
            label="Logos"
            description="Each brand under the Scripps umbrella has its own logo lockup. Use the correct Market variant for the product context."
          />
          <LogoPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            {["Market=Scripps", "Market=SanDiegoHealth", "PatientPortal"].map((v) => (
              <VariantTag key={v} label={v} />
            ))}
          </div>
          <UsageList items={[
            "Always use the logo from the correct Market variant — never mix brand lockups.",
            "The Scripps wordmark is primary. Co-brand lockups follow separate guidelines.",
            "Do not modify logo colors, proportions, or spacing.",
          ]} />
        </section>

        {/* Desktop Header */}
        <section>
          <SectionHeader
            label="Header — Desktop"
            description="The primary global header. Contains the logo, main navigation, and the Get Care CTA."
          />
          <DesktopHeaderPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
          </div>
          <UsageList items={[
            "Appears at the top of every desktop page.",
            "Navigation items reflect the primary site IA — do not add one-off links.",
            "Get Care CTA is always present and uses brand-primary.",
          ]} />
        </section>

        {/* Sticky Header */}
        <section>
          <SectionHeader
            label="Sticky Header — Desktop"
            description="A compressed header that sticks to the top of the viewport on scroll. Supports multiple market rows."
          />
          <StickyHeaderPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
            <VariantTag label="Market=Market2" />
          </div>
          <UsageList items={[
            "Replaces the standard header after the user scrolls past the hero area.",
            "When two markets are present, the primary market row appears on top.",
            "Maintains full navigation access without taking up full header height.",
          ]} />
        </section>

        {/* Mobile Header */}
        <section>
          <SectionHeader
            label="Header — Mobile"
            description="Condensed header for small screens. Logo, Get Care CTA, and a hamburger menu trigger."
          />
          <MobileHeaderPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
            <VariantTag label="Mobile" />
          </div>
          <UsageList items={[
            "The hamburger menu opens a full-screen nav drawer.",
            "Get Care is always visible — it is the primary patient action.",
            "Search and menu icons sit to the right of the CTA.",
          ]} />
        </section>

        {/* Breadcrumbs */}
        <section>
          <SectionHeader
            label="Breadcrumbs"
            description="Shows the user's location in the site hierarchy. Supports up to 4 levels with automatic collapsing."
          />
          <BreadcrumbPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            {["Level=1", "Level=2", "Level=3", "Level=4"].map((v) => (
              <VariantTag key={v} label={v} />
            ))}
          </div>
          <UsageList items={[
            "The current page is always the last crumb and is not a link.",
            "At 4+ levels deep, intermediate crumbs collapse to '...'",
            "Do not show breadcrumbs on the homepage.",
            "Separator uses a forward slash — do not substitute chevrons or arrows.",
          ]} />
        </section>

        {/* Footer */}
        <section>
          <SectionHeader
            label="Footer"
            description="Global footer with utility links, contact info, social links, and legal copy. Desktop and mobile variants."
          />
          <FooterPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Theme=Desktop" />
            <VariantTag label="Domain=Scripps" />
            <VariantTag label="Mobile" />
          </div>
          <UsageList items={[
            "The top band (Contact, Get Connected, Give to Scripps) is consistent across all pages.",
            "Footer nav columns mirror the primary site IA.",
            "Blue background (#005FCF) is always used for the footer nav band.",
            "Legal links and copyright appear in the bottom bar of the footer.",
            "Social icons are present on desktop; condensed on mobile.",
          ]} />
        </section>

      </div>
    </div>
  );
}
