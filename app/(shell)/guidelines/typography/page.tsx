import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
});

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-red-hat-text",
});

type TypeToken = {
  name: string;
  family: string;
  weight: string;
  size: string;
  lineHeight: string;
  preview: string;
  style?: React.CSSProperties;
  isLink?: boolean;
};

type TypeGroup = {
  label: string;
  description: string;
  tokens: TypeToken[];
};

const PREVIEW = "The quick brown fox jumps over the lazy dog";
const PREVIEW_SHORT = "Compassionate care, every step of the way";

const groups: TypeGroup[] = [
  {
    label: "Headings — Desktop",
    description: "Red Hat Display. Used for page titles and major section headers.",
    tokens: [
      { name: "H0", family: "Red Hat Display", weight: "Black (900)", size: "80px", lineHeight: "90px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "80px", lineHeight: "90px", fontWeight: 900 } },
      { name: "H1", family: "Red Hat Display", weight: "ExtraBold (800)", size: "56px", lineHeight: "72px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "56px", lineHeight: "72px", fontWeight: 800 } },
      { name: "H2", family: "Red Hat Display", weight: "Bold (700)", size: "40px", lineHeight: "56px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "40px", lineHeight: "56px", fontWeight: 700 } },
      { name: "H3", family: "Red Hat Display", weight: "ExtraBold (800)", size: "28px", lineHeight: "40px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "28px", lineHeight: "40px", fontWeight: 800 } },
      { name: "H4", family: "Red Hat Display", weight: "Bold (700)", size: "24px", lineHeight: "36px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "24px", lineHeight: "36px", fontWeight: 700 } },
      { name: "H5", family: "Red Hat Display", weight: "ExtraBold (800)", size: "22px", lineHeight: "28px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "22px", lineHeight: "28px", fontWeight: 800 } },
    ],
  },
  {
    label: "Headings — Mobile",
    description: "Scaled-down heading styles for small screens.",
    tokens: [
      { name: "H0 [mobile]", family: "Red Hat Display", weight: "Black (900)", size: "40px", lineHeight: "48px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "40px", lineHeight: "48px", fontWeight: 900 } },
      { name: "H1 [mobile]", family: "Red Hat Display", weight: "ExtraBold (800)", size: "36px", lineHeight: "44px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "36px", lineHeight: "44px", fontWeight: 800 } },
      { name: "H2 [mobile]", family: "Red Hat Display", weight: "Bold (700)", size: "28px", lineHeight: "34px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "28px", lineHeight: "34px", fontWeight: 700 } },
      { name: "H3 [mobile]", family: "Red Hat Display", weight: "ExtraBold (800)", size: "22px", lineHeight: "28px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "22px", lineHeight: "28px", fontWeight: 800 } },
      { name: "H4 [mobile]", family: "Red Hat Display", weight: "Bold (700)", size: "20px", lineHeight: "28px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "20px", lineHeight: "28px", fontWeight: 700 } },
      { name: "H5 [mobile]", family: "Red Hat Display", weight: "ExtraBold (800)", size: "18px", lineHeight: "24px", preview: PREVIEW_SHORT, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "18px", lineHeight: "24px", fontWeight: 800 } },
    ],
  },
  {
    label: "Summary",
    description: "Red Hat Display SemiBold. For callouts, pull quotes, and intro paragraphs.",
    tokens: [
      { name: "Summary", family: "Red Hat Display", weight: "SemiBold (600)", size: "24px", lineHeight: "40px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "24px", lineHeight: "40px", fontWeight: 600 } },
      { name: "Summary [mobile]", family: "Red Hat Display", weight: "SemiBold (600)", size: "20px", lineHeight: "32px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "20px", lineHeight: "32px", fontWeight: 600 } },
    ],
  },
  {
    label: "Body",
    description: "Red Hat Text. Primary reading text at 20px.",
    tokens: [
      { name: "Body/Bold", family: "Red Hat Text", weight: "Bold (700)", size: "20px", lineHeight: "28px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "20px", lineHeight: "28px", fontWeight: 700 } },
      { name: "Body/Semibold", family: "Red Hat Text", weight: "SemiBold (600)", size: "20px", lineHeight: "32px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "20px", lineHeight: "32px", fontWeight: 600 } },
      { name: "Body/Standard", family: "Red Hat Text", weight: "Regular (400)", size: "20px", lineHeight: "32px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "20px", lineHeight: "32px", fontWeight: 400 } },
      { name: "Body/Link", family: "Red Hat Text", weight: "Regular (400)", size: "20px", lineHeight: "32px", preview: PREVIEW, isLink: true, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "20px", lineHeight: "32px", fontWeight: 400 } },
    ],
  },
  {
    label: "Utility",
    description: "Red Hat Text at 18px. Labels, captions, form text.",
    tokens: [
      { name: "Utility/Bold", family: "Red Hat Text", weight: "Bold (700)", size: "18px", lineHeight: "24px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "18px", lineHeight: "24px", fontWeight: 700 } },
      { name: "Utility/Semibold", family: "Red Hat Text", weight: "SemiBold (600)", size: "18px", lineHeight: "24px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "18px", lineHeight: "24px", fontWeight: 600 } },
      { name: "Utility/Standard", family: "Red Hat Text", weight: "Regular (400)", size: "18px", lineHeight: "32px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "18px", lineHeight: "32px", fontWeight: 400 } },
      { name: "Utility/Link", family: "Red Hat Display", weight: "Regular (400)", size: "18px", lineHeight: "24px", preview: PREVIEW, isLink: true, style: { fontFamily: "var(--font-red-hat-display)", fontSize: "18px", lineHeight: "24px", fontWeight: 400 } },
    ],
  },
  {
    label: "Small",
    description: "14px text. Tags, metadata, secondary labels. Bold uses Frutiger LT Std (licensed).",
    tokens: [
      { name: "Small/Bold", family: "Frutiger LT Std", weight: "75 Black", size: "14px", lineHeight: "20px", preview: PREVIEW, style: { fontSize: "14px", lineHeight: "20px", fontWeight: 700 } },
      { name: "Small/Semibold", family: "Red Hat Text", weight: "SemiBold (600)", size: "14px", lineHeight: "22px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "14px", lineHeight: "22px", fontWeight: 600 } },
      { name: "Small/Standard", family: "Red Hat Text", weight: "Regular (400)", size: "14px", lineHeight: "22px", preview: PREVIEW, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "14px", lineHeight: "22px", fontWeight: 400 } },
      { name: "Small/Link", family: "Red Hat Text", weight: "SemiBold (600)", size: "14px", lineHeight: "22px", preview: PREVIEW, isLink: true, style: { fontFamily: "var(--font-red-hat-text)", fontSize: "14px", lineHeight: "22px", fontWeight: 600 } },
    ],
  },
  {
    label: "Footnote",
    description: "12px text. Legal copy, disclaimers, fine print. Uses Frutiger LT Std (licensed).",
    tokens: [
      { name: "Footnote/Bold", family: "Frutiger LT Std", weight: "75 Black", size: "12px", lineHeight: "16px", preview: PREVIEW, style: { fontSize: "12px", lineHeight: "16px", fontWeight: 900 } },
      { name: "Footnote/Medium", family: "Frutiger LT Std", weight: "65 Bold", size: "12px", lineHeight: "16px", preview: PREVIEW, style: { fontSize: "12px", lineHeight: "16px", fontWeight: 700 } },
      { name: "Footnote/Regular", family: "Frutiger LT Std", weight: "55 Roman", size: "12px", lineHeight: "16px", preview: PREVIEW, style: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 } },
    ],
  },
];

function TypeRow({ token }: { token: TypeToken }) {
  return (
    <div className="grid grid-cols-[180px_220px_160px_1fr] gap-6 items-center py-5 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{token.name}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">{token.family}</p>
        <p className="text-xs text-gray-400">{token.weight}</p>
      </div>
      <div>
        <p className="text-xs font-mono text-gray-500">{token.size} / {token.lineHeight}</p>
      </div>
      <div className="overflow-hidden">
        <p
          style={token.style}
          className={token.isLink ? "underline cursor-pointer" : ""}
          color={token.isLink ? "#005FCF" : undefined}
        >
          <span style={token.isLink ? { color: "#005FCF" } : undefined}>
            {token.preview}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div
      className={`min-h-full ${redHatDisplay.variable} ${redHatText.variable}`}
    >
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Guidelines
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Typography</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Motive uses <strong className="text-gray-700">Red Hat Display</strong> for headings and{" "}
          <strong className="text-gray-700">Red Hat Text</strong> for body copy, with{" "}
          <strong className="text-gray-700">Frutiger LT Std</strong> for small and footnote styles.
          Use the token name to apply the correct style in code and Figma.
        </p>
      </div>

      <div className="px-16 py-12 space-y-14">
        {groups.map((group) => (
          <section key={group.label}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{group.label}</h2>
              <p className="text-sm text-gray-500">{group.description}</p>
            </div>
            <div className="border border-gray-100 rounded">
              <div className="grid grid-cols-[180px_220px_160px_1fr] gap-6 px-6 py-3 bg-gray-50 border-b border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Token</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Family / Weight</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Size / Line Height</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Preview</p>
              </div>
              <div className="px-6">
                {group.tokens.map((token) => (
                  <TypeRow key={token.name} token={token} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
