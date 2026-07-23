// --- Shared card shell ---
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden flex flex-col w-[320px] shrink-0"
      style={{ boxShadow: "0px 6px 24px rgba(39,41,55,0.1)" }}
    >
      {children}
    </div>
  );
}

function CardImage({ overlay, title }: { overlay?: boolean; title?: string }) {
  return (
    <div className="relative h-44 bg-gray-200 shrink-0">
      {/* Placeholder image — swap for real photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <span className="text-gray-500 text-xs" style={{ fontFamily: "var(--font-red-hat-text)" }}>Photo</span>
      </div>
      {overlay && title && (
        <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55))" }}>
          <p className="text-white text-base font-extrabold px-5 pb-4 leading-snug" style={{ fontFamily: "var(--font-red-hat-display)" }}>
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6 p-6 flex-1">{children}</div>;
}

function CardTitle({ text, color = "#0D6C9D" }: { text: string; color?: string }) {
  return (
    <p className="text-xl font-extrabold leading-tight" style={{ color, fontFamily: "var(--font-red-hat-display)" }}>
      {text}
    </p>
  );
}

function CardBody_Text({ text }: { text: string }) {
  return (
    <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {text}
    </p>
  );
}

function CardAction({ label = "Action", text = false }: { label?: string; text?: boolean }) {
  if (text) {
    return (
      <p className="text-sm font-semibold cursor-pointer hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        {label}
      </p>
    );
  }
  return (
    <button
      className="self-start px-6 py-3 text-sm font-semibold text-white rounded-full transition-colors hover:opacity-90"
      style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
    >
      {label}
    </button>
  );
}

function EventMeta({ date, location }: { date: string; location: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <rect x="1" y="2" width="14" height="13" rx="2" stroke="#005FCF" strokeWidth="1.3"/>
          <path d="M1 6h14M5 1v2M11 1v2" stroke="#005FCF" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        <p className="text-xs font-bold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>{date}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="shrink-0">
          <circle cx="7" cy="6.5" r="4" stroke="#005FCF" strokeWidth="1.3"/>
          <path d="M7 10.5V15" stroke="#005FCF" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        <p className="text-xs font-bold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>{location}</p>
      </div>
    </div>
  );
}

const TITLE = "6 Reasons to Schedule Your Annual Checkup";
const BODY = "Annual checkups set health baselines, review medications, update vaccinations and strengthen doctor-patient relationships.";
const EVENT_TITLE = "Restorative Yoga and Sound Therapy for Cancer Patients and Caregivers";

// --- Card types ---
function EventCard() {
  return (
    <Card>
      <CardImage overlay title={TITLE} />
      <CardBody>
        <CardTitle text={EVENT_TITLE} />
        <EventMeta date="Tues, Jul 9, 2025 · 10 a.m.–noon ET" location="In-Person Class · Scripps Memorial Hospital Encinitas" />
        <CardBody_Text text={BODY} />
      </CardBody>
    </Card>
  );
}

function EventActionCard() {
  return (
    <Card>
      <CardImage overlay title={TITLE} />
      <CardBody>
        <CardTitle text={EVENT_TITLE} />
        <EventMeta date="Tues, Jul 9, 2025 · 10 a.m.–noon ET" location="In-Person Class · Scripps Memorial Hospital Encinitas" />
        <CardAction label="Action" />
      </CardBody>
    </Card>
  );
}

function NewsCard() {
  return (
    <Card>
      <CardImage overlay title={TITLE} />
      <CardBody>
        <CardBody_Text text={BODY} />
        <div className="flex items-center gap-1 mt-auto">
          <p className="text-sm font-semibold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>Learn more</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#005FCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </CardBody>
    </Card>
  );
}

function ActionCard() {
  return (
    <Card>
      <CardImage />
      <CardBody>
        <CardTitle text="Action Card" />
        <CardBody_Text text="Lorem ipsum dolor sit amet consectetur. Dui quis sed sollicitudin elit ultricies fermentum feugiat sollicitudin. Mollis tempus cum tristique vel." />
        <CardAction label="Action" />
      </CardBody>
    </Card>
  );
}

function IconCard() {
  return (
    <Card>
      <CardBody>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icons/doctor-finder.svg`} alt="Service icon" className="w-12 h-12" />
        <CardTitle text="Action Card" color="#005FCF" />
        <CardBody_Text text="Lorem ipsum dolor sit amet consectetur. Dui quis sed sollicitudin elit ultricies fermentum feugiat sollicitudin. Mollis tempus cum tristique vel." />
        <CardAction label="Action" text />
      </CardBody>
    </Card>
  );
}

const cards = [
  {
    type: "Event",
    desc: "Image with title overlay (dark gradient). Below: teal event title, date + location metadata with icons, body text.",
    usage: "Classes, wellness events, community programs.",
    component: <EventCard />,
  },
  {
    type: "Event Action",
    desc: "Same as Event but replaces body text with a primary CTA button.",
    usage: "Events with a direct registration or sign-up action.",
    component: <EventActionCard />,
  },
  {
    type: "News",
    desc: "Image with title overlay. Below: body text and a 'Learn more ›' link.",
    usage: "Blog posts, health articles, news announcements.",
    component: <NewsCard />,
  },
  {
    type: "Action",
    desc: "Image on top (no overlay). Below: teal headline, body text, primary CTA button.",
    usage: "Service promotions, campaign cards, general CTAs.",
    component: <ActionCard />,
  },
  {
    type: "Icon",
    desc: "No image. Starts with a Sparkle icon, blue headline, body text, and a text-only action link.",
    usage: "Service categories, feature highlights, icon-driven navigation.",
    component: <IconCard />,
  },
];

export default function ContentCardsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Content Cards</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Five card types for surfacing content across Scripps pages. Each type has a defined role —
          choose based on content type, not visual preference.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-2xl">

        {/* Individual docs */}
        {cards.map(c => (
          <section key={c.type}>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{c.type}</h2>
            <p className="text-sm text-gray-500 mb-2 leading-relaxed">{c.desc}</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Use for</span>
              <span className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>{c.usage}</span>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-100 rounded">
              {c.component}
            </div>
          </section>
        ))}

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Choose the card type based on the content — don't force content into the wrong type.",
                  "Use real photography — placeholder images should never ship.",
                  "Keep card titles concise — the overlay on Event/News cards can only hold 2–3 lines.",
                  "Icon cards should use a Sparkle icon that meaningfully represents the service.",
                  "Cards in a grid should be the same type — don't mix Event and Action cards in the same row.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't use the Event type for non-time-bound content — date/location metadata must be real.",
                  "Don't use Icon cards for content that has a strong photographic story.",
                  "Don't change card width — the 464px (full) / 320px (compact) widths are intentional.",
                  "Don't add extra elements — each card type has a fixed structure.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
