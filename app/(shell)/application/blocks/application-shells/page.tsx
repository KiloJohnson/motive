"use client";

import { useState } from "react";
import { Avatar, TextInput } from "flowbite-react";
import {
  HiBell,
  HiChartPie,
  HiClipboard,
  HiCog,
  HiCollection,
  HiDocument,
  HiFolderDownload,
  HiHome,
  HiInformationCircle,
  HiLockClosed,
  HiMenuAlt1,
  HiSearch,
  HiShoppingBag,
  HiUsers,
  HiViewGrid,
  HiCalendar,
  HiLightBulb,
  HiClipboardCheck,
  HiVideoCamera,
  HiPresentationChartBar,
  HiLocationMarker,
  HiPlus,
} from "react-icons/hi";

function BlockPreview({
  children,
  label,
  code,
}: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        {label}
      </h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-800 min-h-[400px] relative">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

// ─── Shell 1: Sidebar + Navbar ────────────────────────────────────────────────

function SidebarNavbarShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-[400px] overflow-hidden">
      {/* Top navbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <HiMenuAlt1 className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Scripps Health
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TextInput
            icon={HiSearch}
            placeholder="Search..."
            sizing="sm"
            className="w-48 hidden sm:block"
          />
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiBell className="h-5 w-5" />
          </button>
          <Avatar
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            rounded
            size="sm"
          />
        </div>
      </div>

      {/* Layout body */}
      <div className="flex" style={{ minHeight: 352 }}>
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-56 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col py-3 px-2 gap-1">
            <NavItem icon={<HiChartPie />} label="Overview" active />
            <NavItem icon={<HiDocument />} label="Pages" />
            <NavItem icon={<HiShoppingBag />} label="Sales" />
            <NavItem icon={<HiFolderDownload />} label="Messages" badge="4" />
            <NavItem icon={<HiLockClosed />} label="Authentication" />
            <div className="my-2 border-t border-gray-100 dark:border-gray-700" />
            <NavItem icon={<HiClipboard />} label="Docs" />
            <NavItem icon={<HiCollection />} label="Components" />
            <NavItem icon={<HiInformationCircle />} label="Help" />
            <div className="mt-auto pt-3 flex justify-center gap-2">
              <button className="rounded p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiCog className="h-5 w-5" />
              </button>
            </div>
          </aside>
        )}

        {/* Content area */}
        <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900">
          <div className="grid grid-cols-4 gap-3 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600"
              />
            ))}
          </div>
          <div className="h-36 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 mb-3" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-24 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600" />
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── Shell 2: Double Sidebar (left nav + right utility rail) ─────────────────

function DoubleSidebarShell() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-[400px] overflow-hidden">
      {/* Top navbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <HiMenuAlt1 className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Scripps Health
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiBell className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiViewGrid className="h-5 w-5" />
          </button>
          <Avatar
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            rounded
            size="sm"
          />
        </div>
      </div>

      {/* Layout body */}
      <div className="flex" style={{ minHeight: 352 }}>
        {/* Left sidebar */}
        <aside className="w-56 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col py-3 px-2 gap-1">
          <NavItem icon={<HiChartPie />} label="Overview" active />
          <NavItem icon={<HiShoppingBag />} label="Sales" />
          <NavItem icon={<HiFolderDownload />} label="Messages" badge="12" />
          <NavItem icon={<HiLockClosed />} label="Authentication" />
          <div className="my-2 border-t border-gray-100 dark:border-gray-700" />
          <NavItem icon={<HiClipboard />} label="Docs" />
          <NavItem icon={<HiCollection />} label="Components" />
          <NavItem icon={<HiInformationCircle />} label="Help" />
        </aside>

        {/* Content area */}
        <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600"
              />
            ))}
          </div>
          <div className="h-36 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 mb-3" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-24 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600" />
          </div>
        </main>

        {/* Right utility rail */}
        <aside className="w-14 shrink-0 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col items-center py-4 gap-3">
          {[
            HiCalendar,
            HiLightBulb,
            HiClipboardCheck,
            HiUsers,
            HiVideoCamera,
            HiPresentationChartBar,
            HiLocationMarker,
            HiPlus,
          ].map((Icon, i) => (
            <button
              key={i}
              className="rounded p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </aside>
      </div>
    </div>
  );
}

// ─── Shell 3: Collapsible sidebar (icon rail + expanded panel) ───────────────

function CollapsibleSidebarShell() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-[400px] overflow-hidden">
      {/* Top navbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Scripps Health
          </span>
          <TextInput
            icon={HiSearch}
            placeholder="Search..."
            sizing="sm"
            className="w-64 hidden lg:block"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiBell className="h-5 w-5" />
          </button>
          <Avatar
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            rounded
            size="sm"
          />
        </div>
      </div>

      {/* Layout body */}
      <div className="flex" style={{ minHeight: 352 }}>
        {/* Icon rail (always visible) */}
        <aside className="w-14 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col items-center py-3 gap-1">
          {[HiHome, HiUsers, HiChartPie, HiFolderDownload, HiLockClosed].map(
            (Icon, i) => (
              <button
                key={i}
                className={`rounded p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ${i === 0 ? "text-blue-600 bg-blue-50 dark:bg-gray-700" : ""}`}
              >
                <Icon className="h-5 w-5" />
              </button>
            )
          )}
          <div className="mt-auto">
            <button
              onClick={() => setExpanded(!expanded)}
              className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              title={expanded ? "Collapse panel" : "Expand panel"}
            >
              <svg
                className={`h-5 w-5 transition-transform ${expanded ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </aside>

        {/* Expanded nav panel */}
        {expanded && (
          <aside className="w-48 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col py-3 px-2 gap-1 text-sm">
            <NavItem icon={null} label="Home" active />
            <p className="px-2 pt-4 pb-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reports
            </p>
            <NavItem icon={null} label="Realtime" />
            <NavItem icon={null} label="Acquisition" />
            <NavItem icon={null} label="Audience" />
            <NavItem icon={null} label="Behavior" />
            <div className="my-2 border-t border-gray-100 dark:border-gray-700" />
            <NavItem icon={null} label="Docs" />
            <NavItem icon={null} label="Components" />
            <NavItem icon={null} label="Help" />
          </aside>
        )}

        {/* Content area */}
        <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900">
          <div className="grid grid-cols-4 gap-3 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── Shell 4: Stacked layout with secondary navbar ───────────────────────────

function StackedSecondaryNavbarShell() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Sales", "Billing", "Team", "Resources", "Messages", "Support"];

  return (
    <div className="relative bg-white dark:bg-gray-800 min-h-[400px] overflow-hidden">
      {/* Primary navbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3.5">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Scripps Health
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            My profile
          </a>
          <span className="text-gray-200 dark:text-gray-600">|</span>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            Logout
          </a>
        </div>
      </div>

      {/* Secondary tab navbar */}
      <div className="flex items-center gap-1 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-4 py-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <main className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600"
              />
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-3">
            <div className="h-28 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
            <div className="h-28 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
          </div>
        </div>
        <div className="h-24 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600" />
      </main>
    </div>
  );
}

// ─── Shell 5: Stacked layout with multiple navbars (contextual sub-nav) ──────

function StackedMultiNavbarShell() {
  const [activeSection, setActiveSection] = useState("Overview");
  const sections = ["Overview", "Resources", "Deploy", "Metrics", "Activity", "Settings"];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-[400px] overflow-hidden">
      {/* Primary navbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Scripps Health
          </span>
          <TextInput
            icon={HiSearch}
            placeholder="Jump to Favorites, Apps, Pipelines..."
            sizing="sm"
            className="w-72 hidden lg:block"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiBell className="h-5 w-5" />
          </button>
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
            size="sm"
          />
        </div>
      </div>

      {/* Contextual navbar (breadcrumb-style workspace switcher + CTA) */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-6 py-2.5">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-900 dark:text-white">Personal</span>
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="font-medium text-gray-900 dark:text-white">scrippshealth.org</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-white"
            style={{ backgroundColor: "var(--motive-primary)" }}
          >
            Open app
          </button>
          <button className="rounded-lg border border-blue-600 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-600 hover:text-white">
            More
          </button>
        </div>
      </div>

      {/* Tab navbar */}
      <div className="flex items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeSection === section
                ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                : "border-transparent text-gray-500 hover:border-blue-600 hover:text-blue-600 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-500"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content area */}
      <main className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-36 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600" />
          <div className="h-36 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600" />
          <div className="h-24 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600" />
          <div className="h-24 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600" />
        </div>
      </main>
    </div>
  );
}

// ─── Shared helper ────────────────────────────────────────────────────────────

function NavItem({
  icon,
  label,
  active,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2.5 rounded-lg px-3 py-2 text-sm cursor-pointer ${
        active
          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      <div className="flex items-center gap-2.5">
        {icon && <span className="h-4 w-4 shrink-0">{icon}</span>}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-0.5">
          {badge}
        </span>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ApplicationShellsPage() {
  return (
    <div className="min-h-full">
      {/* Page header */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
        >
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Application Shells
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Full-page layout scaffolding — sidebar, navbar, and content area
          combinations that form the structural foundation of any admin
          application.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/application-shells/
          </code>
        </p>
      </section>

      {/* Previews */}
      <section className="px-16 py-12">

        <BlockPreview
          label="Sidebar + Navbar — standard collapsible"
          code={`// Fixed top navbar + collapsible sidebar drawer + main content area
<div className="bg-gray-50 dark:bg-gray-900">
  {/* Top navbar */}
  <Navbar fluid className="fixed top-0 z-50 w-full border-b bg-white dark:bg-gray-800">
    <div className="flex items-center justify-between w-full p-3">
      <div className="flex items-center gap-3">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}><HiMenuAlt1 /></button>
        <Navbar.Brand>Scripps Health</Navbar.Brand>
        <TextInput icon={HiSearch} placeholder="Search..." />
      </div>
      <div className="flex items-center gap-2">
        <Dropdown arrowIcon={false} inline label={<HiBell />}>{/* notifications */}</Dropdown>
        <Dropdown arrowIcon={false} inline label={<Avatar img="..." rounded size="sm" />}>
          <Dropdown.Header>Neil Sims · neil@example.com</Dropdown.Header>
          <DropdownItem>My profile</DropdownItem>
          <DropdownItem>Account settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </div>
  </Navbar>

  {/* Sidebar via Drawer */}
  <Drawer open={sidebarOpen} onClose={() => setSidebarOpen(false)}
    className="top-16 h-[calc(100vh-4rem)] w-64 border-r dark:border-gray-700">
    <DrawerItems>
      <Sidebar className="w-full [&>div]:bg-transparent [&>div]:p-0">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>Overview</Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Sales">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Billing</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiFolderDownload} className="pr-0 [&>span]:pr-2">
              <div className="flex items-center justify-between">
                Messages <Badge className="rounded-full">4</Badge>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </DrawerItems>
  </Drawer>

  {/* Main content offset by sidebar + navbar */}
  <main className="mt-16 p-4 md:ml-64">
    <div className="grid grid-cols-4 gap-4 mb-4">{/* stat cards */}</div>
    <div className="h-96 rounded-lg border-2 border-dashed border-gray-300">{/* chart */}</div>
  </main>
</div>`}
        >
          <SidebarNavbarShell />
        </BlockPreview>

        <BlockPreview
          label="Double Sidebar — left nav + right utility rail"
          code={`// Two sidebars: left full nav, right collapsed icon rail
<div className="bg-gray-50 dark:bg-gray-900">
  <Navbar fluid className="fixed top-0 z-50 w-full border-b bg-white dark:bg-gray-800">
    {/* navbar contents */}
  </Navbar>

  {/* Left sidebar */}
  <Drawer open={sidebarOpen} onClose={() => setSidebarOpen(false)}
    className="top-16 w-64 border-r dark:border-gray-700">
    <DrawerItems>
      <Sidebar className="w-full [&>div]:bg-transparent [&>div]:p-0">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>Overview</Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Sales">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiFolderDownload} className="pr-0 [&>span]:pr-2">
              <div className="flex items-center justify-between">
                Messages <Badge className="rounded-full">12</Badge>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </DrawerItems>
  </Drawer>

  {/* Main content between both sidebars */}
  <main className="mt-16 p-4 md:ml-64 lg:mr-16">
    {/* content grid */}
  </main>

  {/* Right utility rail */}
  <Sidebar collapsed className="fixed right-0 top-16 border-l dark:border-gray-700
    lg:flex [&>div]:bg-white [&_[role=tooltip]]:px-0">
    <Sidebar.ItemGroup>
      <Sidebar.Item href="#" icon={HiCalendar} label="Calendar">Calendar</Sidebar.Item>
      <Sidebar.Item href="#" icon={HiLightBulb} label="Notes">Notes</Sidebar.Item>
      <Sidebar.Item href="#" icon={HiClipboardCheck} label="To-do list">To-do list</Sidebar.Item>
    </Sidebar.ItemGroup>
  </Sidebar>
</div>`}
        >
          <DoubleSidebarShell />
        </BlockPreview>

        <BlockPreview
          label="Collapsible sidebar — icon rail + expandable panel"
          code={`// Collapsed icon rail always visible; clicking expands a full panel alongside
<div className="bg-gray-50 dark:bg-gray-900">
  <Navbar fluid className="fixed top-0 z-50 w-full border-b bg-white dark:bg-gray-800">
    {/* navbar */}
  </Navbar>

  {/* Persistent icon rail */}
  <Sidebar collapsed className="fixed top-16 z-50 border-r dark:border-gray-700
    [&>div]:bg-white [&>div]:py-3"
    style={{ display: isSidebarOpen ? 'block' : 'none' }}>
    <Sidebar.ItemGroup className="[&_[role=tooltip]]:hidden [&_svg]:text-gray-400">
      <Sidebar.Item href="#" icon={HiHome} />
      <Sidebar.Item href="#" icon={HiUsers} />
      <Sidebar.Item href="#" icon={HiChartPie} />
    </Sidebar.ItemGroup>
  </Sidebar>

  {/* Expanded panel via Drawer — offset to the right of the icon rail */}
  <Drawer open={isSidebarOpen} onClose={() => setSidebarOpen(false)}
    className="left-16 top-16 max-h-[calc(100vh-4.2rem)] w-64 border-r dark:border-gray-700">
    <DrawerItems>
      <Sidebar className="w-full [&>div]:bg-transparent [&>div]:p-0">
        <Sidebar.Items className="[&_*]:font-medium">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" className="pl-0 [&>span]:pl-2">Home</Sidebar.Item>
            <Sidebar.Collapse label="Reports" className="[&>span]:ml-0">
              <Sidebar.Item href="#">Realtime</Sidebar.Item>
              <Sidebar.Item href="#">Acquisition</Sidebar.Item>
              <Sidebar.Item href="#">Audience</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </DrawerItems>
  </Drawer>

  {/* Content — offset by both rails */}
  <main className="mt-16 p-4 md:ml-80 lg:mr-16">
    {/* content grid */}
  </main>

  {/* Collapse toggle button */}
  <button onClick={() => setSidebarOpen(!isSidebarOpen)}
    className="absolute bottom-4 left-20 hidden lg:inline-flex rounded-full bg-white p-2
    text-gray-500 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700">
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4
        a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  </button>
</div>`}
        >
          <CollapsibleSidebarShell />
        </BlockPreview>

        <BlockPreview
          label="Stacked layout — secondary navbar with tabs"
          code={`// No sidebar — two stacked navbars: primary branding bar + secondary tab nav
<div className="bg-white dark:bg-gray-800">
  <Navbar fluid theme={{ root: { base: "border-b bg-white dark:border-gray-700" } }}>
    {/* Primary bar: logo + profile/logout links */}
    <div className="w-full px-4 py-3.5">
      <div className="flex items-center justify-between">
        <a href="#">Scripps Health</a>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-blue-600">My profile</a>
          <span className="text-gray-200">|</span>
          <a href="#" className="text-sm font-medium text-blue-600">Logout</a>
        </div>
      </div>
    </div>

    {/* Secondary tab bar */}
    <Navbar.Collapse theme={{ list: "mt-0 flex w-full bg-gray-50 dark:bg-gray-700 px-6 py-2" }}>
      <Navbar.Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium">Overview</Navbar.Link>
      <Navbar.Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium">Sales</Navbar.Link>
      <Navbar.Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium">Billing</Navbar.Link>
      <Navbar.Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium">Team</Navbar.Link>
      <Navbar.Link href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium">Resources</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>

  {/* Full-width content — no sidebar offset needed */}
  <main className="flex-1 space-y-4 p-4">
    <div className="grid grid-cols-3 gap-4">
      {/* content panels */}
    </div>
  </main>
</div>`}
        >
          <StackedSecondaryNavbarShell />
        </BlockPreview>

        <BlockPreview
          label="Stacked layout — multiple navbars with contextual sub-nav"
          code={`// Three-level nav stack: primary bar + workspace/breadcrumb bar + section tab bar
<div className="bg-gray-50 dark:bg-gray-900">
  <Navbar fluid theme={{ root: { inner: { base: "flex flex-col" } } }} className="pb-0">

    {/* Level 1 — primary: logo, search, user */}
    <div className="border-b bg-white dark:bg-gray-800 px-6 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#">Scripps Health</a>
          <TextInput icon={HiSearch} placeholder="Jump to Favorites, Apps, Pipelines..." />
        </div>
        <div className="flex items-center gap-2">
          <Dropdown inline label={<HiBell />}>{/* notifications */}</Dropdown>
          <Dropdown inline label={<img src="..." className="h-8 w-8 rounded-full" />}>
            <DropdownItem>My profile</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>

    {/* Level 2 — contextual: workspace switcher + primary CTA */}
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Dropdown inline label="Personal">{/* workspace list */}</Dropdown>
          <svg className="h-3 w-3 text-gray-400">{/* chevron */}</svg>
          <Dropdown inline label="scrippshealth.org">{/* site list */}</Dropdown>
        </div>
        <div className="flex gap-2">
          <Button>Open app</Button>
          <Dropdown label="More">{/* extra actions */}</Dropdown>
        </div>
      </div>
    </nav>

    {/* Level 3 — section tabs */}
    <Navbar.Collapse className="border-b border-gray-200 dark:border-gray-800">
      <div className="flex w-full bg-white dark:bg-gray-900">
        <Navbar.Link href="#">
          <span className="border-b-2 border-primary-600 px-4 py-3 text-sm text-primary-600">
            Overview
          </span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="border-b-2 border-transparent px-4 py-3 text-sm text-gray-500
            hover:border-primary-600 hover:text-primary-600">
            Resources
          </span>
        </Navbar.Link>
        {/* … more tabs … */}
      </div>
    </Navbar.Collapse>
  </Navbar>

  {/* Full-width content grid */}
  <main className="grid grid-cols-2 gap-5 p-4">
    {/* content panels */}
  </main>
</div>`}
        >
          <StackedMultiNavbarShell />
        </BlockPreview>

      </section>
    </div>
  );
}
