"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSidebar } from "./SidebarContext";

// ── Nav data ──────────────────────────────────────────────────────────────

type NavLink = { label: string; href: string; stub?: boolean; newTab?: boolean };
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
      { label: "Buttons", href: "/marketing/components/buttons" },
      { label: "Tabs", href: "/marketing/components/tabs" },
      { label: "Avatars", href: "/marketing/components/avatars" },
      { label: "Forms", href: "/marketing/components/forms" },
      { label: "Pickers", href: "/marketing/components/pickers" },
      { label: "Toggle", href: "/marketing/components/toggle" },
      { label: "Selectors", href: "/marketing/components/selectors" },
      { label: "Accordion", href: "/marketing/components/accordion" },
      { label: "Content Cards", href: "/marketing/components/content-cards" },
      { label: "Dropdown", href: "/marketing/components/dropdown" },
      { label: "Modals", href: "/marketing/components/modals" },
      { label: "Notifications", href: "/marketing/components/notifications" },
      { label: "Tag & Labels", href: "/marketing/components/tags" },
      { label: "Breadcrumbs", href: "/marketing/components/breadcrumbs" },
      { label: "Search", href: "/marketing/components/search" },
      { label: "Switchers", href: "/marketing/components/switchers" },
      { label: "Pagination", href: "/marketing/components/pagination" },
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
    section: "Foundations",
    items: [
      { label: "Text Styles", href: "/application/text-styles" },
    ],
  },
  {
    section: "Layout",
    items: [
      { label: "App Shell", href: "/application/app-shell" },
    ],
  },
  {
    section: "Data",
    items: [
      { label: "Tables",     href: "/application/tables" },
      { label: "Charts",     href: "/application/charts" },
      { label: "Analytics",  href: "/application/dashboard-analytics" },
      { label: "E-commerce", href: "/application/dashboard-ecommerce" },
    ],
  },
  {
    section: "Forms",
    items: [
      { label: "Form Layouts", href: "/application/form-layouts" },
      { label: "Validation", href: "/application/form-validation" },
    ],
  },
  {
    section: "Auth",
    items: [
      { label: "Sign In", href: "/application/auth-signin" },
      { label: "Register", href: "/application/auth-signup" },
      { label: "Forgot Password", href: "/application/auth-forgot" },
    ],
  },
  {
    section: "Blocks",
    items: [
      { label: "Overview", href: "/application/blocks" },
      { label: "Navbars", href: "/application/blocks/navbars" },
      { label: "Side Navigation", href: "/application/blocks/side-navigation" },
      { label: "CRUD Layouts", href: "/application/blocks/crud-layouts" },
      { label: "Table Headers", href: "/application/blocks/table-headers" },
      { label: "Table Footers", href: "/application/blocks/table-footers" },
      { label: "Create Forms", href: "/application/blocks/create-forms" },
      { label: "Create Modals", href: "/application/blocks/create-modals" },
      { label: "Read Drawers", href: "/application/blocks/read-drawers" },
      { label: "Update Forms", href: "/application/blocks/update-forms" },
      { label: "Delete Confirm", href: "/application/blocks/delete-confirm" },
    ],
  },
  {
    section: "Dashboards",
    items: [
      { label: "Overview",    href: "/application/ui-previews" },
      { label: "Sample App",  href: "/preview/admin-dashboard", newTab: true },
    ],
  },
  {
    section: "PIMC",
    items: [
      { label: "PIMC Dashboard",    href: "/preview/pimc-backoffice", newTab: true },
      { label: "Analytics",         href: "/preview/dashboard-analytics", newTab: true },
      { label: "E-commerce",        href: "/preview/dashboard-ecommerce", newTab: true },
      { label: "Member Management", href: "/preview/member-list", newTab: true },
      { label: "Waitlist",          href: "/preview/waitlist", newTab: true },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Buttons", href: "/application/components/buttons" },
      { label: "Badge", href: "/application/components/badge" },
      { label: "Alert", href: "/application/components/alert" },
      { label: "Modal", href: "/application/components/modal" },
      { label: "Dropdown", href: "/application/components/dropdown" },
      { label: "Tabs", href: "/application/components/tabs" },
      { label: "Avatar", href: "/application/components/avatar" },
      { label: "Spinner", href: "/application/components/spinner" },
      { label: "Toast", href: "/application/components/toast" },
      { label: "Tooltip", href: "/application/components/tooltip" },
      { label: "Progress", href: "/application/components/progress" },
    ],
  },
];

const brandStandardsNav: NavItem[] = [
  { label: "Overview", href: "/brand-standards" },
  {
    section: "Introduction",
    items: [
      { label: "Letter from Leadership", href: "/brand-standards/introduction/letter-from-leadership" },
      { label: "About Our Brand", href: "/brand-standards/introduction/about-our-brand" },
    ],
  },
  {
    section: "The Scripps Logo",
    items: [
      { label: "Introduction", href: "/brand-standards/scripps-logo/introduction" },
      { label: "Clear Space & Alignments", href: "/brand-standards/scripps-logo/clear-space" },
      { label: "Sizing", href: "/brand-standards/scripps-logo/sizing" },
      { label: "Color Variations", href: "/brand-standards/scripps-logo/color-variations" },
      { label: "Placement", href: "/brand-standards/scripps-logo/placement" },
      { label: "Architecture", href: "/brand-standards/scripps-logo/architecture" },
      { label: "Program & Event Visuals", href: "/brand-standards/scripps-logo/program-and-event-visuals" },
      { label: "Headline Scaling", href: "/brand-standards/scripps-logo/headline" },
      { label: "Scripps Clinic Logo", href: "/brand-standards/scripps-logo/scripps-clinic-logo" },
    ],
  },
  {
    section: "Design System",
    items: [
      { label: "Introduction", href: "/brand-standards/design-system/introduction" },
      { label: "Color Palette", href: "/brand-standards/design-system/color-palette" },
      { label: "Typography", href: "/brand-standards/design-system/typography" },
      { label: "Subgraphic Elements", href: "/brand-standards/design-system/subgraphic-elements" },
      { label: "Imagery", href: "/brand-standards/design-system/imagery" },
    ],
  },
  {
    section: "Application Examples",
    items: [
      { label: "Folders", href: "/brand-standards/application-examples/folders" },
      { label: "Brochures", href: "/brand-standards/application-examples/brochures" },
      { label: "Pole Banners", href: "/brand-standards/application-examples/pole-banners" },
      { label: "Invitations", href: "/brand-standards/application-examples/invitations" },
      { label: "Newsletter Header", href: "/brand-standards/application-examples/newsletter-header" },
      { label: "Physician Bios", href: "/brand-standards/application-examples/physician-bios" },
      { label: "Flyers", href: "/brand-standards/application-examples/flyers" },
      { label: "PowerPoint Templates", href: "/brand-standards/application-examples/powerpoint-templates" },
      { label: "Websites & Social Media", href: "/brand-standards/application-examples/websites-and-social-media" },
      { label: "Foundation Materials", href: "/brand-standards/application-examples/foundation-materials" },
    ],
  },
  {
    section: "Word Count",
    items: [
      { label: "Physician Bios", href: "/brand-standards/word-count/physician-bios" },
      { label: "4×9 Brochures", href: "/brand-standards/word-count/4x9-brochures" },
      { label: "Flyers", href: "/brand-standards/word-count/flyers" },
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
  "brand-standards": brandStandardsNav,
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
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noopener noreferrer" : undefined}
      style={active ? { borderLeftColor: "var(--motive-primary)" } : {}}
      className={`flex items-center justify-between px-4 py-2 text-sm border-l-2 transition-colors ${
        active
          ? "border-l-2 text-white bg-white/5 font-medium"
          : "border-transparent text-white hover:text-white hover:bg-white/5"
      }`}
    >
      <span>{item.label}</span>
      {item.newTab && (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 shrink-0">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
      {item.stub && <span className="text-gray-600 text-xs">✳</span>}
    </Link>
  );
}

// ── Context switcher ──────────────────────────────────────────────────────


// ── Sidebar ───────────────────────────────────────────────────────────────

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, activeContext, setActiveContext } = useSidebar();

  useEffect(() => {
    if (pathname === "/" && activeContext !== "about") {
      setActiveContext("about");
    }
  }, [pathname]);

  const nav = pathname === "/" ? homeNav : (navByContext[activeContext] ?? marketingNav);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

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
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
                      {item.section}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors mr-1">
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
