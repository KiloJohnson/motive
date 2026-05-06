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

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) | Full React, supports demos + prototypes, deployes to Vercel |
| Styling | Tailwind CSS | Token-friendly, utility-first, pairs with Flowbite |
| Components | Flowbite React | Component foundation, Scripps-customized on top |
| Fonts | Geist (Next.js default) | Clean, professional — can swap later |
| Version control | Git (local) | Committed after every working session |
| Future deploy | Vercel (when ready) | Free tier, zero config for Next.js |

**Project location:** `/Users/kilojohnson_scripps/Desktop/! WORK/! KJ, Aethoria/01 UX/motive`

**Dev command:** `npm run dev` → `http://localhost:3000`

---

## What's Already Built

The shell is complete and git committed ("initial Motive shell — layout, sidebar, home page"):

- **Top bar** — Scripps blue (`#005EB8`), Motive™ branding
- **Sidebar** — dark (`#111827`), full nav with active state indicator
- **Home page** — hero, "What's in Motive" cards, "Why Motive" section
- **Layout** — Carbon-style: fixed top bar, fixed sidebar, scrollable main content

### Sidebar nav (already mapped, pages are 404s):

**Guidelines:** Page Structure, Grid & Breakpoints, Colors, Palettes, Dark Mode, Icons, Typography, Elevation, Spacing, Images, Blobs, Motion

**Components:** Buttons, Avatars, Text Inputs, Forms (Simple / Errors / Complex Errors / Warnings), Number Inputs, Pickers, Toggle, Selectors, Accordion, Dropdown, Modals, Notifications, Tag & Labels, Breadcrumbs, Search, Switchers, Pagination

**Top-level:** Home, Accessibility

---

## Content Sources

The content for all these pages already exists — it's been built but lives in the wrong place:

1. **SharePoint** — `https://scrippshealth.sharepoint.com/sites/DesignSystem/SitePages/TrainingHome.aspx` (internal only). Has mature documentation for all sections above.
2. **Figma files** — Multiple files. The flagship Scripps.org redesign has its own internal design system. Flowbite is the component baseline.
3. **Flowbite** — `https://flowbite.com` — the open-source component library Motive is built on top of.

The job is migration + elevation: take what exists, bring it into Motive's format, make it better.

---

## The Figma → Motive Workflow

This is the core build loop:

```
Kilo designs / specs something in Figma (Scripps account)
        ↓
Claude reads the design via Figma MCP
        ↓
Claude generates the component code or doc page
        ↓
It goes live on the Motive site
        ↓
Kilo reviews, approves, commits
```

**Figma MCP is connected** as `johnson.kilo@scrippshealth.org` (Scripps account). Kilo also has a Bethel account (`kijohnson@bethel.jw.org`) for volunteer work — that is NOT for Motive.

**Figma Code Connect** is the future piece: maps Figma components to their real Motive code counterparts so developers inspecting a component in Figma see the actual code snippet, not AI guesses. Set this up once components are stable.

**Figma Make** is for exploration and stakeholder demos. It is NOT the authority. **Motive is the authority.** Figma Make references Motive, never the other way around.

**Write access to Figma** — not enabled yet (current token is read-only). Enable later, carefully. Don't push to shared Figma files without Kilo reviewing first.

---

## Design Language

**Brand color:** Scripps blue `#005EB8`
**Background:** White content area, dark sidebar (`#111827`)
**Typography:** Geist (current), may migrate to a Scripps-aligned typeface
**Grid:** 8px base (Carbon standard)
**Accessibility:** WCAG 2.1 AA minimum — this is a baseline, not a checkbox

---

## Principles

1. **Motive is the source of truth.** Everything else references it.
2. **AI-first documentation.** Guidelines are written to be useful to someone prompting Claude, not just reading them. Include prompt examples where relevant.
3. **Accessibility is baked in.** Not a section to fill in later — components meet AA from day one.
4. **Consistency earns trust.** Every Scripps touchpoint using Motive creates a recognizable, trustworthy experience.
5. **One keeper, continuous tending.** Built to be maintained by Kilo solo, with Claude as the build partner.
6. **Local first, deployable always.** Every page should work as if it will be public tomorrow.

---

## What To Do At The Start of Every Session

1. Read this file
2. Check the current state of the project (`ls app/` — what pages exist?)
3. Ask Kilo what he wants to work on, or resume from where we left off
4. If building from Figma: ask for the URL, read the design via MCP, then build
5. Commit at the end of every working session: `git add -A && git commit -m "..."`

---

## What's Next (as of session 1)

- [ ] First content page: **Colors** or **Typography** (establishes the template for all foundation pages)
- [ ] First component page: **Buttons** (most visual, best for stakeholder demos, simplest component)
- [ ] Set up MDX for doc pages (lets Kilo edit content without touching code)
- [ ] Figma Code Connect (once 3-5 components are stable)
- [ ] Deploy to Vercel (when Scripps hosting solution is ready)

---

## Git Status

- Initial commit: `"initial Motive shell — layout, sidebar, home page"` ✓
- All work should be committed at the end of each session
- Branch: `main` (local only, not pushed anywhere)

---

## Notes

- The `compdef` warning in terminal (`/dev/fd/13:25: command not found: compdef`) is a harmless zsh autocomplete warning — ignore it
- Vulnerability warnings from `npm audit` on Flowbite install — moderate severity, ignore for now
- The folder had to be renamed `Motive` → `motive` (lowercase) due to npm naming restrictions
