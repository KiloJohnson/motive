"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };
type NavSection = { section: string; items: NavLink[] };
type NavItem = NavLink | NavSection;

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Accessibility", href: "/accessibility" },
  {
    section: "Guidelines",
    items: [
      { label: "Page Structure", href: "/guidelines/page-structure" },
      { label: "Grid & Breakpoints", href: "/guidelines/grid" },
      { label: "Colors", href: "/guidelines/colors" },
      { label: "Palettes", href: "/guidelines/palettes" },
      { label: "Dark Mode", href: "/guidelines/darkmode" },
      { label: "Icons", href: "/guidelines/icons" },
      { label: "Typography", href: "/guidelines/typography" },
      { label: "Elevation", href: "/guidelines/elevation" },
      { label: "Spacing", href: "/guidelines/spacing" },
      { label: "Images", href: "/guidelines/images" },
      { label: "Blobs", href: "/guidelines/blobs" },
      { label: "Motion", href: "/guidelines/motion" },
    ],
  },
  {
    section: "Patterns",
    items: [
      { label: "Navigation", href: "/patterns/navigation" },
      { label: "Header", href: "/patterns/header" },
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      style={{ width: "var(--motive-sidebar-width)", backgroundColor: "#111827" }}
      className="shrink-0 overflow-y-auto flex flex-col"
    >
      <ul className="py-4 pb-[100px]">
        {nav.map((item, i) => {
          if ("section" in item) {
            return (
              <li key={i}>
                <p className="px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  {item.section}
                </p>
                <ul>
                  {item.items.map((child) => {
                    const active = pathname === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          style={active ? { borderLeftColor: "#005EB8" } : {}}
                          className={`flex items-center px-4 py-2 text-sm border-l-2 transition-colors ${
                            active
                              ? "border-l-2 text-white bg-white/5 font-medium"
                              : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                style={active ? { borderLeftColor: "#005EB8" } : {}}
                className={`flex items-center px-4 py-2 text-sm border-l-2 transition-colors ${
                  active
                    ? "border-l-2 text-white bg-white/5 font-medium"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
