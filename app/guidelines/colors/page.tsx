type ColorToken = {
  name: string;
  hex: string;
  token: string;
};

type ColorGroup = {
  label: string;
  description: string;
  colors: ColorToken[];
};

const groups: ColorGroup[] = [
  {
    label: "Base",
    description: "Core semantic colors used across all Scripps digital products.",
    colors: [
      { name: "brand-accent", hex: "#FFCE34", token: "color/base/brand-accent" },
      { name: "brand-primary", hex: "#005FCF", token: "color/base/brand-primary" },
      { name: "brand-secondary", hex: "#17A2B8", token: "color/base/brand-secondary" },
      { name: "primary", hex: "#3C3C3C", token: "color/base/primary" },
      { name: "secondary", hex: "#63666A", token: "color/base/secondary" },
      { name: "tertiary", hex: "#A7A8A9", token: "color/base/tertiary" },
    ],
  },
  {
    label: "Broadcast",
    description: "Used for status messages, alerts, and system feedback.",
    colors: [
      { name: "info", hex: "#D9EBF4", token: "color/broadcast/info" },
      { name: "negative", hex: "#E2C2BD", token: "color/broadcast/negative" },
      { name: "positive", hex: "#DCF0D1", token: "color/broadcast/positive" },
      { name: "warning", hex: "#FBF193", token: "color/broadcast/warning" },
    ],
  },
  {
    label: "Tint",
    description: "Lighter surface-level colors for backgrounds, hover states, and containers.",
    colors: [
      { name: "brand-primary", hex: "#F3F8FB", token: "color/tint/brand-primary" },
      { name: "brand-primary-hover", hex: "#004DA6", token: "color/tint/brand-primary-hover" },
      { name: "brand-secondary", hex: "#F3F1ED", token: "color/tint/brand-secondary" },
      { name: "error", hex: "#FDF3F3", token: "color/tint/error" },
      { name: "primary", hex: "#F4F5F5", token: "color/tint/primary" },
      { name: "secondary", hex: "#DADBDB", token: "color/tint/secondary" },
    ],
  },
  {
    label: "Utility",
    description: "Functional colors for states, actions, and accessibility needs.",
    colors: [
      { name: "Error", hex: "#A94442", token: "color/utility/error" },
      { name: "Open", hex: "#427100", token: "color/utility/open" },
      { name: "Progress", hex: "#589600", token: "color/utility/progress" },
      { name: "disabled", hex: "#9D9E9F", token: "color/utility/disabled" },
      { name: "neutral-black", hex: "#000000", token: "color/utility/neutral-black" },
      { name: "neutral-white", hex: "#FFFFFF", token: "color/utility/neutral-white" },
    ],
  },
];

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function ColorSwatch({ color }: { color: ColorToken }) {
  const light = isLight(color.hex);
  return (
    <div className="border border-gray-100 rounded overflow-hidden">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: color.hex, border: color.hex === "#FFFFFF" ? "1px solid #e5e7eb" : undefined }}
      />
      <div className="p-3">
        <p className="text-sm font-medium text-gray-900 mb-1">{color.name}</p>
        <p className="text-xs text-gray-400 font-mono mb-1">{color.hex}</p>
        <p className="text-xs text-gray-400 leading-snug">{color.token}</p>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Guidelines
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Colors</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Motive color tokens define the visual language of Scripps Health digital products. Each token maps to a
          specific semantic role — use the token name, not the raw hex, in your designs and code.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">
        {groups.map((group) => (
          <section key={group.label}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{group.label}</h2>
              <p className="text-sm text-gray-500">{group.description}</p>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {group.colors.map((color) => (
                <ColorSwatch key={color.token} color={color} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
