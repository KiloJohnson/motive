"use client";

import { useState } from "react";
import {
  Footer,
  Tooltip,
  Progress,
  Pagination,
  Dropdown,
  DropdownItem,
  Button,
} from "flowbite-react";
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter, FaExternalLinkAlt, FaCog, FaSlidersH } from "react-icons/fa";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-6">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

// ─── US flag SVG (reused across language variants) ───────────────────────────
function FlagUS({ className = "h-3 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
          <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
        </g>
        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
      </g>
    </svg>
  );
}

function FlagDE({ className = "h-3.5 w-3.5 rounded-full" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
      <path d="M0 0h512v170.7H0z" />
      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
    </svg>
  );
}

function FlagIT({ className = "h-3.5 w-3.5 rounded-full" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009246" d="M0 0h170.7v512H0z" />
        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  );
}

// ─── 1. Default — copyright + social icons ───────────────────────────────────
function DefaultDashboardFooter() {
  return (
    <Footer container>
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; 2019–2024{" "}
        <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
      </p>
      <div className="flex items-center justify-center space-x-1">
        <Tooltip content="Facebook" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaFacebookF className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Twitter / X" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaTwitter className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="GitHub" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaGithub className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Dribbble" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaDribbble className="h-4 w-4" />
          </span>
        </Tooltip>
      </div>
    </Footer>
  );
}

// ─── 2. CTA + legal links ─────────────────────────────────────────────────────
function CTALinksFooter() {
  return (
    <Footer container className="md:block xl:flex xl:items-center xl:justify-between">
      <div className="mb-3 flex flex-row text-gray-500 dark:text-gray-400 md:items-center xl:mb-0">
        <p>Looking for language selection?</p>
        <a href="#" className="ml-1 flex shrink-0 items-center font-medium text-gray-900 hover:underline dark:text-white">
          Unified Settings
          <FaExternalLinkAlt className="ml-1 h-3.5 w-3.5" />
        </a>
      </div>
      <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <ul className="flex flex-wrap items-center">
          <li>
            <a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6">Terms</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6">Privacy</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6">Cookies</a>
          </li>
        </ul>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Copyright &copy; 2024{" "}
          <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
        </p>
      </div>
    </Footer>
  );
}

// ─── 3. Pagination footer ─────────────────────────────────────────────────────
function PaginationFooter() {
  const [currentPage, setCurrentPage] = useState(3);
  return (
    <Footer container className="md:block xl:flex xl:items-center xl:justify-between">
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:mb-0 xl:text-center">
        &copy; 2024{" "}
        <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
      </p>
      <div className="items-center sm:flex sm:space-x-4 lg:space-x-6">
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          On every page{" "}
          <Dropdown inline label="100">
            <DropdownItem>200</DropdownItem>
            <DropdownItem>500</DropdownItem>
            <DropdownItem>1000</DropdownItem>
          </Dropdown>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0 xl:text-center">
          Show{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1–15</span>
          {" "}of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">987</span>
        </p>
        <Pagination
          currentPage={currentPage}
          nextLabel=""
          onPageChange={setCurrentPage}
          previousLabel=""
          showIcons
          totalPages={100}
        />
      </div>
    </Footer>
  );
}

// ─── 4. Progress bar footer ───────────────────────────────────────────────────
function ProgressBarFooter() {
  return (
    <Footer container className="md:block">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center xl:mb-0">
        <div className="order-1 mb-4 w-full sm:w-96 lg:mb-0">
          <Progress progress={40} size="sm" className="mb-1" />
          <div className="text-xs font-medium text-gray-500 dark:text-white">
            7.2 GB of 15 GB used
          </div>
        </div>
        <p className="order-3 text-sm text-gray-500 dark:text-gray-400 lg:order-2 xl:flex">
          Copyright &copy; 2024{" "}
          <a href="#" className="ml-1 hover:underline" rel="noreferrer">
            Scripps Health
          </a>. All rights reserved.
        </p>
        <div className="order-2 mb-4 text-sm text-gray-500 dark:text-gray-400 lg:order-3 lg:mb-0 lg:text-right">
          <p>Last account activity: 12 hours ago</p>
          <a href="#" className="font-medium underline hover:no-underline">Details</a>
        </div>
      </div>
    </Footer>
  );
}

// ─── 5. Sitemap links + language selector ─────────────────────────────────────
function SitemapLinksFooter() {
  return (
    <Footer container className="md:block">
      <div className="xl:flex xl:items-center xl:justify-between">
        <ul className="flex flex-wrap items-center justify-center">
          {["About", "Careers", "Newsroom", "Pricing", "Help", "Terms & Conditions", "Privacy", "Contact"].map((link) => (
            <li key={link}>
              <a href="#" className="mb-4 mr-6 inline-block text-gray-900 underline hover:no-underline dark:text-white last:mr-0">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <Dropdown
          inline
          label={
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
              <FlagUS className="mr-2 h-3 w-4" />
              English (US)
            </span>
          }
        >
          <DropdownItem>
            <FlagUS className="mr-2 h-3.5 w-3.5 rounded-full" />
            English (US)
          </DropdownItem>
          <DropdownItem>
            <FlagDE className="mr-2" />
            Deutsch
          </DropdownItem>
          <DropdownItem>
            <FlagIT className="mr-2" />
            Italiano
          </DropdownItem>
        </Dropdown>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 xl:mt-6">
        Copyright &copy; 2024{" "}
        <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
      </p>
    </Footer>
  );
}

// ─── 6. Language selector + settings icons ───────────────────────────────────
function LanguageSelectorFooter() {
  return (
    <Footer container>
      <div className="mb-4 md:mb-0 xl:flex xl:items-center xl:space-x-3">
        <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 xl:mb-0">
          &copy; 2024{" "}
          <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
        </p>
        <ul className="flex items-center justify-center">
          <li>
            <a href="#" className="mr-6 text-gray-900 underline hover:no-underline dark:text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="mr-6 text-gray-900 underline hover:no-underline dark:text-white">API</a>
          </li>
          <li>
            <a href="#" className="text-gray-900 underline hover:no-underline dark:text-white">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Dropdown
          inline
          label={
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
              <FlagUS className="mr-2 h-3 w-4" />
              English (US)
            </span>
          }
        >
          <DropdownItem>
            <FlagUS className="mr-2 h-3.5 w-3.5 rounded-full" />
            English (US)
          </DropdownItem>
          <DropdownItem>
            <FlagDE className="mr-2" />
            Deutsch
          </DropdownItem>
          <DropdownItem>
            <FlagIT className="mr-2" />
            Italiano
          </DropdownItem>
        </Dropdown>
        <Tooltip content="Settings" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaSlidersH className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Options" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaCog className="h-4 w-4" />
          </span>
        </Tooltip>
      </div>
    </Footer>
  );
}

// ─── 7. Action select — bulk action footer ────────────────────────────────────
function ActionSelectFooter() {
  return (
    <footer className="flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6">
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">1/150</span>
          {" "}items selected
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Dropdown color="gray" label="Select action" outline>
          <DropdownItem>Select All</DropdownItem>
          <DropdownItem>Archive</DropdownItem>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Delete</DropdownItem>
        </Dropdown>
        <Button>Apply</Button>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardFootersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Dashboard Footers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Bottom-of-page footer patterns for admin dashboards — link columns, legal text, social icons, and sitemap layouts.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/dashboard-footers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — copyright text with social icons"
          code={`<Footer container>
  <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
    &copy; 2024 <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
  </p>
  <div className="flex items-center justify-center space-x-1">
    <Tooltip content="Facebook" placement="bottom">
      <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
        <FaFacebookF className="h-4 w-4" />
      </span>
    </Tooltip>
    {/* ...more icons */}
  </div>
</Footer>`}
        >
          <DefaultDashboardFooter />
        </BlockPreview>

        <BlockPreview
          label="CTA + legal links — settings CTA with terms/privacy nav"
          code={`<Footer container className="md:block xl:flex xl:items-center xl:justify-between">
  <div className="mb-3 flex flex-row text-gray-500 dark:text-gray-400 md:items-center xl:mb-0">
    <p>Looking for language selection?</p>
    <a href="#" className="ml-1 flex shrink-0 items-center font-medium text-gray-900 hover:underline dark:text-white">
      Unified Settings
      <FaExternalLinkAlt className="ml-1 h-3.5 w-3.5" />
    </a>
  </div>
  <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
    <ul className="flex flex-wrap items-center">
      <li><a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white">Terms</a></li>
      <li><a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white">Privacy</a></li>
      <li><a href="#" className="mr-4 text-gray-900 underline hover:no-underline dark:text-white">Cookies</a></li>
    </ul>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Copyright &copy; 2024 <a href="#" className="hover:underline">Scripps Health</a>. All rights reserved.
    </p>
  </div>
</Footer>`}
        >
          <CTALinksFooter />
        </BlockPreview>

        <BlockPreview
          label="With pagination — copyright, per-page selector, and page nav"
          code={`const [currentPage, setCurrentPage] = useState(3);

<Footer container className="md:block xl:flex xl:items-center xl:justify-between">
  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:mb-0">
    &copy; 2024 Scripps Health. All rights reserved.
  </p>
  <div className="items-center sm:flex sm:space-x-4 lg:space-x-6">
    <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
      On every page{" "}
      <Dropdown inline label="100">
        <DropdownItem>200</DropdownItem>
        <DropdownItem>500</DropdownItem>
        <DropdownItem>1000</DropdownItem>
      </Dropdown>
    </div>
    <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
      Show <span className="font-semibold text-gray-900 dark:text-white">1–15</span> of{" "}
      <span className="font-semibold text-gray-900 dark:text-white">987</span>
    </p>
    <Pagination currentPage={currentPage} nextLabel="" onPageChange={setCurrentPage} previousLabel="" showIcons totalPages={100} />
  </div>
</Footer>`}
        >
          <PaginationFooter />
        </BlockPreview>

        <BlockPreview
          label="With progress bar — storage usage, copyright, and last activity"
          code={`<Footer container className="md:block">
  <div className="flex flex-col justify-between lg:flex-row lg:items-center">
    <div className="order-1 mb-4 w-full sm:w-96 lg:mb-0">
      <Progress progress={40} size="sm" className="mb-1" />
      <div className="text-xs font-medium text-gray-500 dark:text-white">7.2 GB of 15 GB used</div>
    </div>
    <p className="order-3 text-sm text-gray-500 dark:text-gray-400 lg:order-2">
      Copyright &copy; 2024 Scripps Health. All rights reserved.
    </p>
    <div className="order-2 mb-4 text-sm text-gray-500 dark:text-gray-400 lg:order-3 lg:mb-0 lg:text-right">
      <p>Last account activity: 12 hours ago</p>
      <a href="#" className="font-medium underline hover:no-underline">Details</a>
    </div>
  </div>
</Footer>`}
        >
          <ProgressBarFooter />
        </BlockPreview>

        <BlockPreview
          label="Sitemap links + language selector — full horizontal link row"
          code={`<Footer container className="md:block">
  <div className="xl:flex xl:items-center xl:justify-between">
    <ul className="flex flex-wrap items-center justify-center">
      {["About", "Careers", "Newsroom", "Pricing", "Help", "Terms & Conditions", "Privacy", "Contact"].map((link) => (
        <li key={link}>
          <a href="#" className="mb-4 mr-6 inline-block text-gray-900 underline hover:no-underline dark:text-white">
            {link}
          </a>
        </li>
      ))}
    </ul>
    <Dropdown inline label={<span className="flex items-center text-sm font-medium">🇺🇸 English (US)</span>}>
      <DropdownItem>🇺🇸 English (US)</DropdownItem>
      <DropdownItem>🇩🇪 Deutsch</DropdownItem>
      <DropdownItem>🇮🇹 Italiano</DropdownItem>
    </Dropdown>
  </div>
  <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 xl:mt-6">
    Copyright &copy; 2024 Scripps Health. All rights reserved.
  </p>
</Footer>`}
        >
          <SitemapLinksFooter />
        </BlockPreview>

        <BlockPreview
          label="Language selector + settings icons — compact footer with controls"
          code={`<Footer container>
  <div className="mb-4 md:mb-0 xl:flex xl:items-center xl:space-x-3">
    <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:mb-0">
      &copy; 2024 Scripps Health. All rights reserved.
    </p>
    <ul className="flex items-center justify-center">
      <li><a href="#" className="mr-6 text-gray-900 underline hover:no-underline dark:text-white">Privacy Policy</a></li>
      <li><a href="#" className="mr-6 text-gray-900 underline hover:no-underline dark:text-white">API</a></li>
      <li><a href="#" className="text-gray-900 underline hover:no-underline dark:text-white">Contact</a></li>
    </ul>
  </div>
  <div className="flex items-center justify-center space-x-3">
    <Dropdown inline label="🇺🇸 English (US)">
      <DropdownItem>🇺🇸 English (US)</DropdownItem>
      <DropdownItem>🇩🇪 Deutsch</DropdownItem>
      <DropdownItem>🇮🇹 Italiano</DropdownItem>
    </Dropdown>
    <Tooltip content="Settings" placement="bottom">
      <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
        <FaSlidersH className="h-4 w-4" />
      </span>
    </Tooltip>
    <Tooltip content="Options" placement="bottom">
      <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
        <FaCog className="h-4 w-4" />
      </span>
    </Tooltip>
  </div>
</Footer>`}
        >
          <LanguageSelectorFooter />
        </BlockPreview>

        <BlockPreview
          label="Action select — bulk operations footer for data tables"
          code={`<footer className="flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6">
  <p className="text-gray-500 dark:text-gray-400">
    <span className="font-semibold text-gray-900 dark:text-white">1/150</span> items selected
  </p>
  <div className="flex items-center space-x-3">
    <Dropdown color="gray" label="Select action" outline>
      <DropdownItem>Select All</DropdownItem>
      <DropdownItem>Archive</DropdownItem>
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
    <Button>Apply</Button>
  </div>
</footer>`}
        >
          <ActionSelectFooter />
        </BlockPreview>

      </section>
    </div>
  );
}
