"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Static data ────────────────────────────────────────────────────────────

type KeyStatus = "Active" | "Inactive";

interface ApiKey {
  id: string;
  platform: string;
  key: string;
  renewalDate: string;
  status: KeyStatus;
  enabled: boolean;
}

const apiKeys: ApiKey[] = [
  { id: "1",  platform: "Amazon AWS",  key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "20 Feb 2025", status: "Active",   enabled: false },
  { id: "2",  platform: "Mailchimp",   key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "20 Feb 2025", status: "Active",   enabled: true  },
  { id: "3",  platform: "Upwork",      key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "31 Mar 2025", status: "Active",   enabled: false },
  { id: "4",  platform: "Google",      key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "07 Apr 2025", status: "Inactive", enabled: true  },
  { id: "5",  platform: "Facebook",    key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "15 Apr 2025", status: "Active",   enabled: true  },
  { id: "6",  platform: "Twitter",     key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "01 May 2025", status: "Active",   enabled: false },
  { id: "7",  platform: "Zapier",      key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "15 May 2025", status: "Active",   enabled: false },
  { id: "8",  platform: "Algolia",     key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "30 May 2025", status: "Inactive", enabled: false },
  { id: "9",  platform: "Node JS",     key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "30 May 2025", status: "Inactive", enabled: true  },
  { id: "10", platform: "Flowbite",    key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "01 Jul 2025", status: "Active",   enabled: true  },
  { id: "11", platform: "Asana",       key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "15 Jul 2025", status: "Active",   enabled: false },
  { id: "12", platform: "Salesforce",  key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "30 Jul 2025", status: "Active",   enabled: true  },
  { id: "13", platform: "Bitbucket",   key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "01 Aug 2025", status: "Active",   enabled: false },
  { id: "14", platform: "Jira",        key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "01 Sep 2025", status: "Inactive", enabled: false },
  { id: "15", platform: "Instagram",   key: "3aec8277-da8a-44cd-9249-031519c5a521", renewalDate: "15 Sep 2025", status: "Active",   enabled: false },
];

const serpResults = [
  { pos: 1, title: "Top 10 Tailwind CSS Libraries for 2025 & Design Assets", url: "https://flowbite.com/blocks/marketing/hero/", da: 95, pa: 54, ed: "14,535" },
  { pos: 2, title: "Flowbite CSS - A Responsive Frontend Framework", url: "https://flowbite.com/docs/components/bottom-navigation/", da: 93, pa: 59, ed: "12,950" },
  { pos: 3, title: "Best Practices for Integrating CSS Libraries into Your Project", url: "https://flowbite.com/docs/getting-started/react/", da: 90, pa: 41, ed: "8,946" },
  { pos: 4, title: "Most Popular UI Libraries for Modern Web Design", url: "https://flowbite.com/blog/e-commerce-ui-has-been-launched/", da: 89, pa: 52, ed: "5,394" },
  { pos: 5, title: "Best CSS Frameworks and Libraries for Responsive Design", url: "https://flowbite.com/blocks/marketing/hero/", da: 87, pa: 48, ed: "1,027" },
];

// ── SVG icons ─────────────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
  </svg>
);

const EyeIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12 4.7 4.5 9.3-9" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
  </svg>
);

const EditIcon = () => (
  <>
    <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
  </>
);

const TrashIcon = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6m0 12L6 6" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4" />
  </svg>
);

const ExportIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v9.293l-2-2a1 1 0 0 0-1.414 1.414l.293.293h-6.586a1 1 0 1 0 0 2h6.586l-.293.293A1 1 0 0 0 18 16.707l2-2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
  </svg>
);

// ── Sub-components ─────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: KeyStatus }) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
        <CheckIcon />
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
      <EyeOffIcon />
      Inactive
    </span>
  );
}

function Toggle({ checked }: { checked: boolean }) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" defaultChecked={checked} className="peer sr-only" />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-600 dark:peer-focus:ring-blue-800" />
    </label>
  );
}

function CopyableKeyInput({ id, value }: { id: string; value: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">API Key</label>
      <input
        id={id}
        type="text"
        className="col-span-6 block w-[320px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 pr-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        defaultValue={value}
        disabled
        readOnly
      />
      <button
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy to clipboard"}
        className="absolute end-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      >
        {copied ? (
          <svg className="h-3.5 w-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5.917 5.724 10.5 15 1.5" />
          </svg>
        ) : (
          <ClipboardIcon />
        )}
      </button>
    </div>
  );
}

// ── Modal components ───────────────────────────────────────────────────────

function GenerateKeyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="flex items-center justify-between px-5 py-4">
          <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Generate API key</h3>
          <button
            onClick={onClose}
            className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            To connect securely to web services, your tool or application needs an API key with permission to access resources such as S3 buckets.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="my-4">
              <label htmlFor="app-name-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Name your application
              </label>
              <input
                type="text"
                id="app-name-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
                placeholder="Application name"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Providing the application name will help you identify your API key later.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Generate API key
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function EditKeyModal({ platform, onClose }: { platform: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="flex items-center justify-between px-5 py-4">
          <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Edit API key</h3>
          <button
            onClick={onClose}
            className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            To connect securely to web services, your tool or application needs an API key with permission to access resources.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="mb-4 mt-2">
              <label htmlFor="app-key-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Your {platform} API key
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="app-key-input"
                  className="block w-full rounded-s-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  defaultValue="3aec8277-da8a-44cd-9249-031519c5a521"
                  placeholder="Application name"
                />
                <button
                  type="submit"
                  className="h-full rounded-e-lg border border-blue-700 bg-blue-700 p-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <RefreshIcon />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function DeleteModal({ platform, onClose }: { platform: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="flex items-center justify-between px-5 py-4">
          <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Are you sure?</h3>
          <button
            onClick={onClose}
            className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <p className="border-b border-t border-orange-200 bg-orange-100 px-5 py-4 font-light text-orange-700 dark:border-gray-600 dark:bg-gray-700 dark:text-orange-300">
          This action <span className="font-semibold">CANNOT</span> be undone.
        </p>
        <div className="px-5 py-5">
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
            This will permanently delete the{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {platform.toLowerCase().replace(/\s/g, "-")}/{platform.toLowerCase().replace(/\s/g, "-")}-key
            </span>{" "}
            and everything associated with this key will be permanently deleted.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full justify-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            I understand, delete this key
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewSerpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-4xl rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800">
        <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-5 dark:border-gray-700">
          <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">SERP</h3>
          <button
            onClick={onClose}
            className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="rounded-l-md px-6 py-3"><span className="sr-only">Position</span></th>
                <th scope="col" className="px-6 py-3">Results</th>
                <th scope="col" className="px-6 py-3">DA</th>
                <th scope="col" className="px-6 py-3">PA</th>
                <th scope="col" className="whitespace-nowrap rounded-r-md px-6 py-3">ED</th>
              </tr>
            </thead>
            <tbody>
              {serpResults.map((row) => (
                <tr key={row.pos} className="border-b bg-white text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <td className="px-6 py-4">{row.pos}</td>
                  <th scope="row" className="whitespace-nowrap px-6 py-4">
                    <div className="space-y-0.5">
                      <a href="#" className="block font-medium text-blue-700 hover:underline dark:text-blue-500">{row.title}</a>
                      <a href="#" className="block text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">{row.url}</a>
                    </div>
                  </th>
                  <td className="px-6 py-4">{row.da}</td>
                  <td className="px-6 py-4">{row.pa}</td>
                  <td className="px-6 py-4">{row.ed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex items-center space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Close
          </button>
          <button
            type="button"
            className="flex items-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <ExportIcon />
            Export to Excel
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

type ModalState =
  | { type: "none" }
  | { type: "generate" }
  | { type: "edit"; platform: string }
  | { type: "delete"; platform: string }
  | { type: "serp" };

export default function AdminApiPage() {
  const [modal, setModal] = useState<ModalState>({ type: "none" });
  const [bulkOpen, setBulkOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"Active" | "Inactive" | "Renewal Date">("Active");

  const closeModal = () => setModal({ type: "none" });

  return (
    <PreviewShell variant="admin" title="API Keys">

      {/* ── Modals ── */}
      {modal.type === "generate" && <GenerateKeyModal onClose={closeModal} />}
      {modal.type === "edit" && <EditKeyModal platform={modal.platform} onClose={closeModal} />}
      {modal.type === "delete" && <DeleteModal platform={modal.platform} onClose={closeModal} />}
      {modal.type === "serp" && <ViewSerpModal onClose={closeModal} />}

      <div className="grid grid-cols-12 gap-4 bg-white dark:bg-gray-900">
        <div className="relative col-span-full">
          <div className="px-4 pt-4">

            {/* ── Header row ── */}
            <div className="flex flex-col space-y-4 border-b border-gray-200 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
              <div>
                {/* Breadcrumb */}
                <nav className="mb-4 flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
                        <HomeIcon />
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <ChevronRightIcon />
                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">API</a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <ChevronRightIcon />
                        <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">API Keys</span>
                      </div>
                    </li>
                  </ol>
                </nav>

                <div className="flex flex-1 items-center space-x-2">
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white">My API Keys</h5>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setModal({ type: "serp" })}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <EyeIcon />
                  View SERP
                </button>
                <button
                  type="button"
                  onClick={() => setModal({ type: "generate" })}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                  Generate Key
                </button>
              </div>
            </div>

            {/* ── Filter row ── */}
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 sm:flex-row sm:items-center sm:space-y-0">
              <div className="block items-center space-y-2 sm:flex sm:space-y-0">
                <div className="shrink-0 font-semibold dark:text-white">Filter by:</div>
                <div className="flex items-center">
                  {/* Mobile select */}
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value as typeof activeFilter)}
                    className="mr-4 block w-full min-w-40 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:mx-4 lg:hidden"
                  >
                    <option>Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Renewal Date">Renewal Date</option>
                  </select>

                  {/* Desktop button group */}
                  <div className="mx-4 hidden w-full flex-col rounded-md shadow-xs md:w-auto md:flex-row lg:inline-flex" role="group">
                    {(["Active", "Inactive", "Renewal Date"] as const).map((f, i) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setActiveFilter(f)}
                        className={[
                          "border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500",
                          i === 0 ? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none" : "",
                          i === 1 ? "border-x border-gray-200 md:border-x-0 md:border-b md:border-t" : "",
                          i === 2 ? "rounded-r-lg" : "",
                          activeFilter === f ? "bg-blue-50 text-blue-700 dark:bg-gray-600 dark:text-white" : "",
                        ].filter(Boolean).join(" ")}
                      >
                        {f}
                      </button>
                    ))}
                  </div>

                  <a href="#" className="flex shrink-0 items-center text-sm font-medium text-blue-700 hover:underline dark:text-blue-500">
                    <PlusCircleIcon />
                    More options
                  </a>
                </div>
              </div>

              {/* Bulk actions */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setBulkOpen(!bulkOpen)}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  Bulk Actions
                  <ChevronDownIcon />
                </button>
                {bulkOpen && (
                  <div className="absolute right-0 z-10 mt-1 w-40 rounded-lg bg-white shadow-sm dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <button
                          onClick={() => setBulkOpen(false)}
                          className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12 4.7 4.5 9.3-9" />
                          </svg>
                          Activate all
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setBulkOpen(false)}
                          className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6m0 12L6 6" />
                          </svg>
                          Deactivate all
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setBulkOpen(false)}
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <TrashIcon />
                          Delete all
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Table ── */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Platform</th>
                  <th scope="col" className="w-96 px-4 py-3 font-semibold whitespace-nowrap">Api Key</th>
                  <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Renewal date</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Disable/Enable</th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((row) => (
                  <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-${row.id}`}
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label htmlFor={`checkbox-${row.id}`} className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      {row.platform}
                    </th>
                    <td className="px-4 py-2">
                      <CopyableKeyInput id={`key-${row.id}`} value={row.key} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-500 dark:text-gray-400">
                      {row.renewalDate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <Toggle checked={row.enabled} />
                    </td>
                    <td className="space-x-2 whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          className="inline-flex rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          Regenerate
                        </button>
                        <button
                          type="button"
                          onClick={() => setModal({ type: "edit", platform: row.platform })}
                          className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <EditIcon />
                          </svg>
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setModal({ type: "delete", platform: row.platform })}
                          className="inline-flex rounded-lg bg-red-700 px-3 py-2 text-xs font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── Pagination ── */}
            <nav
              className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">1-15</span>
                {" "}of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">235</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                {[1, 2, 3, "...", 10].map((page, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      aria-current={page === 3 ? "page" : undefined}
                      className={
                        page === 3
                          ? "z-10 flex items-center justify-center border border-blue-300 bg-blue-50 px-3 py-2 text-sm leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {page}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </PreviewShell>
  );
}
