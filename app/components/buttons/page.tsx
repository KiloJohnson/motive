type ButtonType = "primary" | "outline" | "text";
type ButtonSize = "hero" | "large" | "medium";

type MotiveButtonProps = {
  label?: string;
  type?: ButtonType;
  size?: ButtonSize;
  icon?: "none" | "left" | "right";
  disabled?: boolean;
  className?: string;
};

const sizeStyles: Record<ButtonSize, string> = {
  hero:   "px-8 py-4 text-lg",
  large:  "px-8 py-[14px] text-[18px]",
  medium: "px-6 py-[10px] text-[16px]",
};

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all cursor-pointer select-none disabled:cursor-not-allowed";

function typeStyles(t: ButtonType, disabled: boolean): string {
  if (disabled) {
    if (t === "primary") return "bg-gray-300 text-gray-400";
    if (t === "outline") return "border border-gray-300 text-gray-400 bg-transparent";
    return "text-gray-400 bg-transparent";
  }
  if (t === "primary") return "bg-[#005FCF] text-white hover:bg-[#004DA6] active:bg-[#003D8A] focus:ring-2 focus:ring-[#005FCF] focus:ring-offset-2";
  if (t === "outline") return "border border-[#005FCF] text-[#005FCF] bg-transparent hover:bg-[#F3F8FB] active:bg-[#E0EFFF] focus:ring-2 focus:ring-[#005FCF] focus:ring-offset-2";
  return "text-[#005FCF] bg-transparent hover:underline active:opacity-70 focus:ring-2 focus:ring-[#005FCF] focus:ring-offset-2";
}

function IconLeft() {
  return <span className="text-current leading-none">+</span>;
}

function IconRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MotiveButton({ label = "Button", type = "primary", size = "large", icon = "none", disabled = false }: MotiveButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${typeStyles(type, disabled)}`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}
    >
      {icon === "left" && <IconLeft />}
      {label}
      {icon === "right" && <IconRight />}
    </button>
  );
}

// --- Page sections ---

const states = [
  { label: "Enabled",  disabled: false, note: "Default interactive state." },
  { label: "Disabled", disabled: true,  note: "Not available for interaction." },
];

const types: { type: ButtonType; label: string; description: string }[] = [
  { type: "primary", label: "Primary", description: "For the most important action on a screen. Use once per section." },
  { type: "outline", label: "Outline", description: "Secondary actions. Pairs with Primary when two actions are needed." },
  { type: "text",    label: "Text",    description: "Low-emphasis actions, inline links, or tertiary actions." },
];

const sizes: { size: ButtonSize; label: string; usage: string }[] = [
  { size: "hero",   label: "Hero",   usage: "Hero sections, page headers, prominent CTAs." },
  { size: "large",  label: "Large",  usage: "Standard use across most UI contexts." },
  { size: "medium", label: "Medium", usage: "Compact spaces, tables, cards, inline actions." },
];

export default function ButtonsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Buttons</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Buttons trigger actions. Use the correct type to communicate the importance of the action,
          the correct size for the context, and always pair a label with intent.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Types */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Types</h2>
            <p className="text-sm text-gray-500">Three button types communicate action hierarchy.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {types.map(({ type, label, description }) => (
              <div key={type} className="grid grid-cols-[160px_1fr_1fr] gap-6 items-center px-6 py-5">
                <div>
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{description}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <MotiveButton label="Enabled"  type={type} />
                  <MotiveButton label="Hovered"  type={type} className="hover" />
                  <MotiveButton label="Disabled" type={type} disabled />
                </div>
                <div className="flex flex-wrap gap-4">
                  <MotiveButton label="+ Enabled"  type={type} icon="left" />
                  <MotiveButton label="Enabled"    type={type} icon="right" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Sizes</h2>
            <p className="text-sm text-gray-500">Three sizes for different UI contexts. Default is Large.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {sizes.map(({ size, label, usage }) => (
              <div key={size} className="grid grid-cols-[160px_1fr] gap-6 items-center px-6 py-6">
                <div>
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{usage}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <MotiveButton label="Primary"  type="primary" size={size} />
                  <MotiveButton label="Outline"  type="outline" size={size} />
                  <MotiveButton label="Text"     type="text"    size={size} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icon variants */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Icon Variants</h2>
            <p className="text-sm text-gray-500">Icons can appear on the left (for actions like add/create) or right (for dropdowns and navigation).</p>
          </div>
          <div className="flex flex-wrap gap-4 p-6 border border-gray-100 rounded">
            <MotiveButton label="No icon"    type="primary" icon="none" />
            <MotiveButton label="Left icon"  type="primary" icon="left" />
            <MotiveButton label="Right icon" type="primary" icon="right" />
            <MotiveButton label="No icon"    type="outline" icon="none" />
            <MotiveButton label="Left icon"  type="outline" icon="left" />
            <MotiveButton label="Right icon" type="outline" icon="right" />
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Use one Primary button per section — it marks the most important action.",
                  "Use Outline or Text for secondary and tertiary actions.",
                  "Write button labels as verbs: 'Get Care', 'Schedule', 'Learn More'.",
                  "Use the Hero size for page-level CTAs only.",
                  "Disable a button only when the action is temporarily unavailable — always explain why nearby.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't use more than two buttons side-by-side (Primary + Outline max).",
                  "Don't use vague labels like 'Click Here' or 'Submit'.",
                  "Don't use the Hero size inside cards, tables, or compact UI.",
                  "Don't mix button types at the same hierarchy level.",
                  "Don't use buttons for navigation — use links instead.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tokens */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tokens</h2>
            <p className="text-sm text-gray-500">Color tokens used by the button component.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {[
              { token: "color/base/brand-primary",      hex: "#005FCF", usage: "Primary background (enabled)" },
              { token: "color/tint/brand-primary-hover", hex: "#004DA6", usage: "Primary background (hovered)" },
              { token: "color/utility/neutral-white",   hex: "#FFFFFF", usage: "Primary label" },
              { token: "color/tint/brand-primary",      hex: "#F3F8FB", usage: "Outline background (hovered)" },
              { token: "color/utility/disabled",        hex: "#9D9E9F", usage: "Disabled state" },
            ].map((row) => (
              <div key={row.token} className="grid grid-cols-[260px_80px_1fr] gap-4 items-center px-6 py-3">
                <p className="text-xs font-mono text-gray-600">{row.token}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border border-gray-200 shrink-0" style={{ backgroundColor: row.hex }} />
                  <span className="text-xs font-mono text-gray-400">{row.hex}</span>
                </div>
                <p className="text-sm text-gray-500">{row.usage}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
