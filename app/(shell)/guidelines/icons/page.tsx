import { readdirSync } from "fs";
import { join } from "path";
import IconsClient from "./IconsClient";

function getIcons() {
  const iconsDir = join(process.cwd(), "public", "icons");
  try {
    const files = readdirSync(iconsDir).filter(f => f.endsWith(".svg"));

    // Group by base name (strip -filled, -color suffixes)
    const map = new Map<string, { outline?: string; filled?: string; color?: string }>();

    for (const file of files) {
      const name = file.replace(".svg", "");
      if (name.endsWith("-color")) {
        const base = name.replace("-color", "");
        const entry = map.get(base) || {};
        entry.color = `/icons/${file}`;
        map.set(base, entry);
      } else if (name.endsWith("-filled")) {
        const base = name.replace("-filled", "");
        const entry = map.get(base) || {};
        entry.filled = `/icons/${file}`;
        map.set(base, entry);
      } else {
        const entry = map.get(name) || {};
        entry.outline = `/icons/${file}`;
        map.set(name, entry);
      }
    }

    return Array.from(map.entries()).map(([name, styles]) => ({ name, ...styles }));
  } catch {
    return [];
  }
}

export default function IconsPage() {
  const icons = getIcons();
  return <IconsClient icons={icons} />;
}
