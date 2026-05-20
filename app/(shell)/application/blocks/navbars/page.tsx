"use client";

import { Dropdown, TextInput, Avatar } from "flowbite-react";
import { HiSearch, HiBell, HiMenu, HiCog, HiLogout, HiUser, HiViewGrid } from "react-icons/hi";

// ── Shared block preview wrapper ─────────────────────────────────────────────

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-900">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

// ── Block 1 — Default navbar ──────────────────────────────────────────────────

function DefaultNavbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiMenu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <img src="/logos/scripps.svg" alt="Scripps" className="h-7 w-auto" />
            <span className="text-sm font-semibold text-gray-800 dark:text-white hidden sm:block">
              PIMC Back Office
            </span>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiBell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <Dropdown label="" renderTrigger={() => (
            <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Avatar placeholderInitials="KJ" rounded size="sm" />
            </button>
          )}>
            <Dropdown.Header>
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
              <span className="block text-xs text-gray-500 truncate">kilo@scrippshealth.org</span>
            </Dropdown.Header>
            <Dropdown.Item icon={HiUser}>My profile</Dropdown.Item>
            <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

// ── Block 2 — Navbar with search ─────────────────────────────────────────────

function NavbarWithSearch() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiMenu className="h-5 w-5" />
          </button>
          <img src="/logos/scripps.svg" alt="Scripps" className="h-7 w-auto" />
        </div>
        {/* Center search */}
        <div className="flex-1 max-w-md">
          <TextInput
            placeholder="Search members, invoices..."
            icon={HiSearch}
            sizing="sm"
          />
        </div>
        {/* Right */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiBell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <Dropdown label="" renderTrigger={() => (
            <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Avatar placeholderInitials="KJ" rounded size="sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:block">Kilo Johnson</span>
            </button>
          )}>
            <Dropdown.Header>
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
              <span className="block text-xs text-gray-500 truncate">kilo@scrippshealth.org · Staff</span>
            </Dropdown.Header>
            <Dropdown.Item icon={HiUser}>My profile</Dropdown.Item>
            <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

// ── Block 3 — Navbar with breadcrumb ─────────────────────────────────────────

function NavbarWithBreadcrumb() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Top row */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-3">
          <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiMenu className="h-5 w-5" />
          </button>
          <img src="/logos/scripps.svg" alt="Scripps" className="h-7 w-auto" />
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiBell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
            <HiViewGrid className="h-5 w-5" />
          </button>
          <Dropdown label="" renderTrigger={() => (
            <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Avatar placeholderInitials="KJ" rounded size="sm" />
            </button>
          )}>
            <Dropdown.Header>
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
              <span className="block text-xs text-gray-500">kilo@scrippshealth.org</span>
            </Dropdown.Header>
            <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      {/* Breadcrumb row */}
      <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <nav className="flex text-xs text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Home</a></li>
            <li className="text-gray-300 dark:text-gray-600">/</li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Members</a></li>
            <li className="text-gray-300 dark:text-gray-600">/</li>
            <li className="text-gray-800 dark:text-gray-200 font-medium">Garcia, Maria</li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function NavbarsBlockPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Navbars</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Top bar patterns for PIMC back office and application shells. All include the user identity
          dropdown and notification bell. Scripps logo replaces Flowbite branding.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/dashboard-navbars/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — logo + user menu"
          code={`<nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <button className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100">
        <HiMenu className="h-5 w-5" />
      </button>
      <img src="/logos/scripps.svg" alt="Scripps" className="h-7 w-auto" />
      <span className="text-sm font-semibold text-gray-800">PIMC Back Office</span>
    </div>
    <div className="flex items-center gap-2">
      <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100">
        <HiBell className="h-5 w-5" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
      </button>
      <Dropdown label="" renderTrigger={() => <Avatar placeholderInitials="KJ" rounded size="sm" />}>
        <Dropdown.Header>
          <span className="block text-sm font-semibold">Kilo Johnson</span>
          <span className="block text-xs text-gray-500">kilo@scrippshealth.org</span>
        </Dropdown.Header>
        <Dropdown.Item icon={HiUser}>My profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  </div>
</nav>`}
        >
          <DefaultNavbar />
        </BlockPreview>

        <BlockPreview
          label="With search — inline search bar"
          code={`<nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5">
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-3 shrink-0">
      <button><HiMenu className="h-5 w-5" /></button>
      <img src="/logos/scripps.svg" alt="Scripps" className="h-7 w-auto" />
    </div>
    <div className="flex-1 max-w-md">
      <TextInput placeholder="Search members, invoices..." icon={HiSearch} sizing="sm" />
    </div>
    <div className="flex items-center gap-2 shrink-0">
      <button><HiBell className="h-5 w-5" /></button>
      <Avatar placeholderInitials="KJ" rounded size="sm" />
    </div>
  </div>
</nav>`}
        >
          <NavbarWithSearch />
        </BlockPreview>

        <BlockPreview
          label="With breadcrumb — double row"
          code={`<nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
  {/* Top row — logo + actions */}
  <div className="flex items-center justify-between px-4 py-2.5">
    {/* ... logo, bells, avatar */}
  </div>
  {/* Breadcrumb row */}
  <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 dark:bg-gray-900">
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-xs text-gray-500">
        <li><a href="/">Home</a></li>
        <li>/</li>
        <li><a href="/members">Members</a></li>
        <li>/</li>
        <li className="text-gray-800 font-medium">Garcia, Maria</li>
      </ol>
    </nav>
  </div>
</nav>`}
        >
          <NavbarWithBreadcrumb />
        </BlockPreview>

      </section>
    </div>
  );
}
