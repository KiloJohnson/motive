# Motive™ — Scripps Health Design System
## Context for Claude (read this first, every session)

---

## What This Is

**Motive™** is the official Scripps Health design system — a standalone documentation and component site modeled after IBM's Carbon Design System. It is the canonical reference for how digital products at Scripps Health are designed and built.

This is not a side project. It is the spinal cord of how UX is done at Scripps Health going forward.

---

## The Person You're Working With

**Kilo Johnson** — UX Designer at Scripps Health. His primary role is now "keeper of the digital design guides." He is responsible for building, maintaining, and continuously expanding Motive.

- Comfortable in VS Code, terminal, `npm run dev`, git commits
- Designs in Figma and Adobe tools
- Not a developer, but learns fast and wants to get better
- He doesn't memorize commands — you provide them. His job is to understand *what* they do.
- Sharp instincts on copy, tone, and visual direction — trust them
- When he says "yer boi can be taught" — he means it. Don't oversimplify.

---

## The Vision

A standalone doc site like [carbondesignsystem.com](https://carbondesignsystem.com) that:

- Is the **single source of truth** for Scripps digital design — colors, typography, spacing, components, patterns, accessibility, guidelines
- Has **shareable external links** (stakeholders, contractors, partners can access it)
- Hosts **live component demos** and **interactive prototypes** for tickets, stakeholder approvals, and demos
- Is structured for **AI-assisted workflows** — the audience isn't just human designers/developers, it's people prompting Claude to build things. Motive needs to guide that.
- Can be **continuously tended by one person** (Kilo) without a team of engineers

**Current constraint:** Local only. Scripps management is building a hosting solution. When that's ready, this deploys externally. Build everything as if it will be public.

---

## The Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Components | Flowbite React 0.12.17 |
| Fonts | Red Hat Display (headings) + Red Hat Text (body) |
| Dark mode | next-themes (`attribute="class"`) |
| Version control | Git (local, `main` branch) |
| Future deploy | Vercel (when Scripps hosting ready) |

**Project location:** `/Users/kilojohnson_scripps/Documents/sites/motive`
**Dev command:** `npm run dev` → `http://localhost:3000`

---

## Current State (as of v2 commit)

Motive is past v1. All sidebar pages have real content. The theme system, dark mode, and context switcher are fully implemented.

### What's built

**Umbrella home** (`/`) — "On brand by default." — non-technical, myth-busting, three audience paths (Leaders, Designers, Developers). Written to sell the room, not just explain the product.

**Audience pages:**
- `/about/leaders` — For the executive with veto power. No jargon.
- `/about/designers` — Figma workflow, tokens, accessibility baseline.
- `/about/developers` — Skip-to-components shortcut, Q&A format (why not Bootstrap, what accessible by default means).

**Context homes:**
- `/marketing` — Marketing context landing (Scripps.org / consumer-facing)
- `/application` — Application context landing ("Production-ready components for every application pattern")
- `/myscripps` — My Scripps (Epic) coming soon
- `/scrippsconnect` — ScrippsConnect (SharePoint) coming soon

**Guidelines:** Colors, Themes, Typography, Icons (654 Sparkle icons, live searchable), Page Structure, Grid & Breakpoints, Dark Mode, Elevation, Spacing, Images, Motion, Accessibility

**Patterns:** Navigation, Header, Footer, Breadcrumbs, Banners, Search Panel

**Sections:** Hero Search, Featured Links, Featured Specialties, App Promo, Map Pins

**Flows:** Find a Doctor, Omnisearch Bar, Facet Panel, List Items, Filter Chips, Results Header, Insurance Selector, Insurance Popover, Facet Menus, Appointment Slots, Availability Table, Date Tiles, Availability Modal, Provider Result, Profile Header, Insurance Banner, Ratings & Reviews, Profile Details, Related Providers, Booking, Decision Trees

**Components:** Buttons, Tabs, Avatars, Forms, Pickers, Toggle, Selectors, Accordion, Content Cards, Dropdown, Modals, Notifications, Tags & Labels, Search, Switchers, Breadcrumbs, Pagination

---

## Architecture

### Theme system (two independent axes)

**Mode (light/dark):** `[☀/☾]` toggle in TopBar. `next-themes` adds/removes `.dark` class on `<html>`. Gray scale inverted inside `.dark .motive-content` using Tailwind v4's `--gray-*` variables (no `color-` prefix — critical). `--color-white` also remapped.

**Brand theme:** `[Theme ▾]` dropdown in TopBar. Sets `data-theme` attribute on `<html>` via `BrandThemeContext.tsx`, persists to localStorage. Four themes: Scripps Main ✅, Qualcomm (placeholder — assets needed), Giving (placeholder — assets needed), ScrippsConnect (placeholder — assets needed). Assets needed: primary hex, secondary hex, logo SVG, font.

**Key Tailwind v4 insight:** Color utilities reference `--gray-*` (NOT `--color-gray-*`). White uses `--color-white`. Inline `style={{ color: "#1a1a1a" }}` punches through CSS variables — use `undefined` or `inherit` instead.

### Context switcher (sidebar)

Five contexts in an inline expandable panel at top of sidebar (CSS grid-rows animation, no z-index issues):
- **About Motive** → `/`
- **Marketing Pages** → `/marketing`
- **Application** → `/application`
- **My Scripps (Epic)** → `/myscripps` (stub)
- **ScrippsConnect** → `/scrippsconnect` (stub)

Animated Scripps-blue ping dot draws eye to the switcher. Switching navigates to context home + swaps nav. When `pathname === "/"`, sidebar shows umbrella nav regardless of active context.

### Sidebar
Collapsible via hamburger (TopBar) — shared via `SidebarContext`. Sections collapse individually with chevron — CSS grid-rows animation. All sections start expanded.

### Flowbite strategy
Use Flowbite React from npm directly — no forking, no copying. Override with Scripps tokens via CSS custom properties. Motive documents the white-labeled patterns. The Application context showcases these — lead with value (production-ready components), not the tool name (Flowbite).

---

## Key Files

| File | Purpose |
|---|---|
| `app/components/BrandThemeContext.tsx` | Brand theme state, `data-theme` on `<html>`, localStorage |
| `app/components/ThemeDropdown.tsx` | `[Theme ▾]` dropdown in TopBar |
| `app/components/ThemeToggle.tsx` | `[☀/☾]` light/dark toggle |
| `app/components/SidebarContext.tsx` | Sidebar open/close + activeContext state |
| `app/components/Providers.tsx` | ThemeProvider → BrandThemeProvider → SidebarProvider |
| `app/components/TopBar.tsx` | Client component — hamburger, ThemeDropdown, ThemeToggle |
| `app/components/Sidebar.tsx` | Collapsible nav + inline context switcher |
| `app/globals.css` | CSS vars, dark mode gray remap, brand theme blocks, Flowbite plugin import |

---

## Design Language

**Brand color:** `#005EB8` (Scripps blue) — `var(--motive-primary)` throughout, never hardcoded
**Typography:** Red Hat Display (headings, `font-family: var(--font-red-hat-display)`), Red Hat Text (body)
**Sidebar:** Always dark (`#111827`) — unaffected by light/dark mode
**Grid:** 8px base (Carbon standard)
**Accessibility:** WCAG 2.1 AA minimum — baked in, not a checkbox

**Brand voice:**
- Headline: "On brand by default." — confident, empowering, not aggressive
- Tagline: "Design that holds up."
- Tone: Clear, direct, no jargon, slightly editorial. Speaks to skeptics, not converts.

**Art direction (future):** Kilo has full Scripps brand photo library. Visual direction = San Diego, Southern California coastal, premium-but-unsaid, human. Avoid: generic doctor-smiling stock, literal luxury tropes. The La Jolla / Geisel / Scripps connection is interesting territory.

---

## Figma & MCP Workflow

```
Kilo shares Figma URL → Claude reads via Figma MCP → builds page/component → Kilo reviews → commit
```

**Figma MCP:** Connected as `johnson.kilo@scrippshealth.org` (Scripps account). Kilo's Bethel account (`kijohnson@bethel.jw.org`) is NOT for Motive.

**Flowbite Pro Figma:** `https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn/flowbite-pro-figma-v2.10.0` — licensed, use as Application context layout reference.

**Flowbite MCP:** At `Desktop/! UX/Flowbite/1 mcp/flowbite-mcp-pro-1.0.0/` — built and registered ✅. Command: `node "/Users/kilojohnson_scripps/Desktop/! UX/Flowbite/1 mcp/flowbite-mcp-pro-1.0.0/build/index.js"`. Active on session start.

**Figma Code Connect:** Future step — maps finished Motive components back to Figma so devs see real code on inspect. Do this after Application context components are stable.

**Motive is the authority.** Figma references Motive, never the other way around.

---

## Principles

1. **Motive is the source of truth.** Everything else references it.
2. **AI-first documentation.** Guidelines are written to be useful to someone prompting Claude, not just reading them.
3. **Accessibility is baked in.** Components meet AA from day one.
4. **Consistency earns trust.** Every Scripps touchpoint using Motive creates a recognizable, trustworthy experience.
5. **One keeper, continuous tending.** Built to be maintained by Kilo solo, with Claude as the build partner.
6. **Local first, deployable always.** Every page should work as if it will be public tomorrow.
7. **Lead with value, not tools.** Don't say "Flowbite" on first impression — say what the user gets.

---

## What To Do At The Start of Every Session

1. Read this file
2. Read the memory file (check `.claude/projects/.../memory/MEMORY.md`)
3. Check current project state (`ls app/`)
4. Ask Kilo what he wants to work on, or resume from where we left off
5. If building from Figma: ask for the URL, read via MCP, then build
6. Commit at the end of every session

---

## What's Next — CURRENT PRIORITY

**The Application context is the immediate focus.** The goal: build a full working dashboard shell using Flowbite components with Motive/Scripps tokens applied. This serves three purposes simultaneously:
1. Motive Application context documentation — living component library
2. PIMC back office skeleton — devs can use this as their reference/starting point
3. The argument to the dev team — "here's Motive-themed Flowbite, here's what the app looks like"

### Step 1 — Dashboard shell (do this first)
Build the skeleton everything else sits inside:
- Persistent sidebar nav (collapsible, dark, Scripps blue active states)
- Top bar (breadcrumb, user avatar, notifications)
- Main content area with layout grid
- This should feel like opening a real admin app

Route: `/application` already exists as the context landing. Build the shell as a sub-route or inline demo.

### Step 2 — Core components (add one by one)
Priority order for PIMC back office:
1. Data table (customer list, invoice list, waitlist)
2. Forms + inputs (create customer, record payment)
3. Modal (payment confirmation, record cash/check)
4. Status badges (subscription status, payment status)
5. Cards (customer detail, stats/KPIs)
6. Pagination, search, filters

### Flowbite MCP — CONNECTED ✅
- Built and registered: `node "/Users/kilojohnson_scripps/Desktop/! UX/Flowbite/1 mcp/flowbite-mcp-pro-1.0.0/build/index.js"`
- Registered via `claude mcp add` — active on next session start
- Figma file: `https://www.figma.com/design/UlY5rSIqwMznWXgYETcwTn/flowbite-pro-figma-v2.10.0`
- Workflow: Flowbite MCP reads component → build with Scripps tokens → document in Motive

### Why this matters right now
Scripps PIMC admin project brief has landed. 10 .NET devs building the backend. Kilo owns the two React frontends (customer portal + back office). The Application context in Motive IS the PIMC back office design system. Get it built before the devs start on frontend — that's the whole play. See `/Users/kilojohnson_scripps/Documents/sites/scripps-pimc-admin/CLAUDE.md` for full context.

---

**Theme assets needed (to complete stub themes):**
- Qualcomm: primary hex, secondary hex, logo SVG, font name
- Giving: same
- ScrippsConnect: same

**Later:**
- Figma Code Connect (once Application context components are stable)
- Art direction pass on umbrella home (photography, mood)
- Deploy to Vercel (when Scripps hosting ready)

---

## Git Status

- Latest commit: `"v2 — theme system, dark mode, context switcher, umbrella home"`
- Branch: `main` (local only, not pushed)
- Dev port: `localhost:3000` (or `--port 3001` if 3000 is taken by scripps-giving)
- Commit at the end of every session

---

## Notes

- `compdef` warning in terminal — harmless zsh autocomplete warning, ignore
- `npm audit` moderate vulnerabilities from Flowbite — ignore for now
- Provider photos: `public/images/providers/` (provider-1.png through provider-5.png + video.png)
- Toggle bug pattern: `<label>` wrapping `<button>` causes double-fire — use `<div onClick>` + `<div role="switch">` instead
- Port conflict: scripps-giving also runs on 3000 — use `npm run dev -- --port 3001` if needed
