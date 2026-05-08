"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motiveContexts, useSidebar } from "./SidebarContext";

// ── Nav data ──────────────────────────────────────────────────────────────

type NavLink = { label: string; href: string; stub?: boolean };
type NavSection = { section: string; items: NavLink[] };
type NavItem = NavLink | NavSection;

const marketingNav: NavItem[] = [
  { label: "Overview", href: "/marketing" },
  { label: "Accessibility", href: "/accessibility" },
  {
    section: "Guidelines",
    items: [
      { label: "Page Structure", href: "/guidelines/page-structure" },
      { label: "Grid & Breakpoints", href: "/guidelines/grid" },
      { label: "Colors", href: "/guidelines/colors" },
      { label: "Themes", href: "/guidelines/themes" },
      { label: "Dark Mode", href: "/guidelines/darkmode" },
      { label: "Icons", href: "/guidelines/icons" },
      { label: "Typography", href: "/guidelines/typography" },
      { label: "Elevation", href: "/guidelines/elevation" },
      { label: "Spacing", href: "/guidelines/spacing" },
      { label: "Images", href: "/guidelines/images" },
      { label: "Motion", href: "/guidelines/motion" },
    ],
  },
  {
    section: "Patterns",
    items: [
      { label: "Navigation", href: "/patterns/navigation" },
      { label: "Header", href: "/patterns/header" },
      { label: "Search Panel", href: "/patterns/search-panel" },
      { label: "Footer", href: "/patterns/footer" },
      { label: "Breadcrumbs", href: "/patterns/breadcrumbs" },
      { label: "Banners", href: "/patterns/banners" },
    ],
  },
  {
    section: "Flows",
    items: [
      { label: "Find a Doctor", href: "/flows/find-a-doctor" },
      { label: "Omnisearch Bar", href: "/flows/omnisearch-bar" },
      { label: "Facet Panel", href: "/flows/facet-panel" },
      { label: "List Items", href: "/flows/list-items" },
      { label: "Filter Chips", href: "/flows/filter-chips" },
      { label: "Results Header", href: "/flows/results-header" },
      { label: "Insurance Selector", href: "/flows/insurance-selector" },
      { label: "Insurance Popover", href: "/flows/insurance-popover" },
      { label: "Facet Menus", href: "/flows/facet-menus" },
      { label: "Provider Result", href: "/flows/provider-result" },
      { label: "Profile Header", href: "/flows/profile-header" },
      { label: "Insurance Banner", href: "/flows/insurance-banner" },
      { label: "Ratings & Reviews", href: "/flows/ratings-reviews" },
      { label: "Profile Details", href: "/flows/profile-details" },
      { label: "Related Providers", href: "/flows/related-providers" },
      { label: "Appointment Slots", href: "/flows/appointment-slots" },
      { label: "Availability Table", href: "/flows/availability-table" },
      { label: "Date Tiles", href: "/flows/date-tiles" },
      { label: "Availability Modal", href: "/flows/availability-modal" },
      { label: "Booking", href: "/flows/booking" },
      { label: "Decision Trees", href: "/flows/decision-trees" },
    ],
  },
  {
    section: "Sections",
    items: [
      { label: "Hero Search", href: "/sections/hero-search" },
      { label: "Featured Links", href: "/sections/featured-links" },
      { label: "Featured Specialties", href: "/sections/featured-specialties" },
      { label: "App Promo", href: "/sections/app-promo" },
      { label: "Map Pins", href: "/sections/map-pins" },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Buttons", href: "/components/buttons" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Avatars", href: "/components/avatars" },
      { label: "Forms", href: "/components/forms" },
      { label: "Pickers", href: "/components/pickers" },
      { label: "Toggle", href: "/components/toggle" },
      { label: "Selectors", href: "/components/selectors" },
      { label: "Accordion", href: "/components/accordion" },
      { label: "Content Cards", href: "/components/content-cards" },
      { label: "Dropdown", href: "/components/dropdown" },
      { label: "Modals", href: "/components/modals" },
      { label: "Notifications", href: "/components/notifications" },
      { label: "Tag & Labels", href: "/components/tags" },
      { label: "Breadcrumbs", href: "/components/breadcrumbs" },
      { label: "Search", href: "/components/search" },
      { label: "Switchers", href: "/components/switchers" },
      { label: "Pagination", href: "/components/pagination" },
    ],
  },
];

const homeNav: NavItem[] = [
  { label: "What is a design system?", href: "/#what-is" },
  { label: "For Leaders", href: "/about/leaders" },
  { label: "For Designers", href: "/about/designers" },
  { label: "For Developers", href: "/about/developers" },
];

const applicationNav: NavItem[] = [
  { label: "Overview", href: "/application" },
  {
    section: "Layout",
    items: [
      { label: "App Shell", href: "/application/app-shell" },
    ],
  },
  {
    section: "Dashboards",
    items: [
      { label: "Analytics", href: "/application/dashboard-analytics", stub: true },
      { label: "E-commerce", href: "/application/dashboard-ecommerce", stub: true },
    ],
  },
  {
    section: "Data",
    items: [
      { label: "Tables", href: "/application/tables" },
      { label: "Charts", href: "/application/charts", stub: true },
    ],
  },
  {
    section: "Forms",
    items: [
      { label: "Form Layouts", href: "/application/form-layouts", stub: true },
      { label: "Validation", href: "/application/form-validation", stub: true },
    ],
  },
  {
    section: "Auth",
    items: [
      { label: "Sign In", href: "/application/auth-signin", stub: true },
      { label: "Sign Up", href: "/application/auth-signup", stub: true },
      { label: "Forgot Password", href: "/application/auth-forgot", stub: true },
    ],
  },
];

const myScrippsNav: NavItem[] = [
  { label: "Overview", href: "/myscripps" },
];

const scrippsConnectNav: NavItem[] = [
  { label: "Overview", href: "/scrippsconnect" },
];

const navByContext: Record<string, NavItem[]> = {
  about: homeNav,
  marketing: marketingNav,
  application: applicationNav,
  myscripps: myScrippsNav,
  scrippsconnect: scrippsConnectNav,
};

// ── Helpers ───────────────────────────────────────────────────────────────

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "transform 0.2s ease" }}
      className={expanded ? "rotate-90" : "rotate-0"}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function NavLink({ item, active }: { item: NavLink; active: boolean }) {
  return (
    <Link
      href={item.href}
      style={active ? { borderLeftColor: "var(--motive-primary)" } : {}}
      className={`flex items-center justify-between px-4 py-2 text-sm border-l-2 transition-colors ${
        active
          ? "border-l-2 text-white bg-white/5 font-medium"
          : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <span>{item.label}</span>
      {item.stub && <span className="text-gray-600 text-xs">✳</span>}
    </Link>
  );
}

// ── Context switcher ──────────────────────────────────────────────────────

function ContextSwitcher() {
  const { activeContext, setActiveContext } = useSidebar();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const current = motiveContexts.find((c) => c.id === activeContext)!;;

  const handleSelect = (c: typeof motiveContexts[0]) => {
    setActiveContext(c.id);
    setOpen(false);
    router.push(c.href);
  };

  return (
    <div className="px-3 py-3 border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 rounded text-sm text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ backgroundColor: "var(--motive-primary)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: "var(--motive-primary)" }}
            />
          </span>
          <span className="font-medium truncate">{current.label}</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "transform 0.2s ease", flexShrink: 0 }}
          className={open ? "rotate-180 ml-2" : "rotate-0 ml-2"}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Inline panel — uses grid-rows trick, no absolute positioning */}
      <div
        style={{ transition: "grid-template-rows 0.2s ease" }}
        className={`grid ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pt-1 pb-0.5 space-y-0.5">
            {motiveContexts.map((c) => {
              const isActive = c.id === activeContext;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${
                    isActive
                      ? "text-white bg-white/10 font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="truncate">{c.label}</span>
                  <span className="flex items-center gap-1.5 shrink-0 ml-2">
                    {c.stub && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gray-500">
                        soon
                      </span>
                    )}
                    {isActive && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, activeContext } = useSidebar();

  const nav = pathname === "/" ? homeNav : (navByContext[activeContext] ?? marketingNav);
  const sectionNames = nav
    .filter((item): item is NavSection => "section" in item)
    .map((item) => item.section);

  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(sectionNames)
  );

  const toggleSection = (section: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  return (
    <nav
      style={{
        width: isOpen ? "var(--motive-sidebar-width)" : "0px",
        minWidth: isOpen ? "var(--motive-sidebar-width)" : "0px",
        backgroundColor: "#111827",
        transition: "width 0.2s ease, min-width 0.2s ease",
      }}
      className="shrink-0 overflow-hidden flex flex-col"
    >
      <div className="w-(--motive-sidebar-width) flex flex-col flex-1 overflow-hidden">
        <ContextSwitcher />

        <ul className="py-4 pb-25 overflow-y-auto flex-1">
          {nav.map((item, i) => {
            if ("section" in item) {
              const isExpanded = expanded.has(item.section);
              return (
                <li key={i}>
                  <button
                    onClick={() => toggleSection(item.section)}
                    className="w-full flex items-center justify-between px-4 pt-6 pb-2 text-left group"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
                      {item.section}
                    </span>
                    <span className="text-gray-600 group-hover:text-gray-400 transition-colors mr-1">
                      <Chevron expanded={isExpanded} />
                    </span>
                  </button>
                  <div
                    style={{ transition: "grid-template-rows 0.2s ease" }}
                    className={`grid ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <ul className="overflow-hidden">
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <NavLink item={child} active={pathname === child.href} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <NavLink item={item as NavLink} active={pathname === item.href} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
