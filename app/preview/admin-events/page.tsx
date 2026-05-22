"use client";

import { PreviewShell } from "../PreviewShell";

// ── Shared SVG atoms ──────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const CalendarIconLg = () => (
  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.4 5H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.4a3 3 0 0 1-1.7-1.6l-3 3A3 3 0 1 1 10 9.8l3-3A3 3 0 0 1 11.4 5Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M13.2 4c0-.6.5-1 1-1H20c.6 0 1 .4 1 1v5.8a1 1 0 1 1-2 0V6.4l-6.2 6.2a1 1 0 0 1-1.4-1.4L17.6 5h-3.4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const EditIcon = () => (
  <>
    <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
  </>
);

const ViewIcon = () => (
  <path fillRule="evenodd" d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
);

const DeleteIconPath = () => (
  <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
);

const DotsIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
  </svg>
);

const PlusIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
  </svg>
);

const LocationIcon = () => (
  <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
  </svg>
);

// ── Row action dropdown (Edit / View / Delete) ─────────────────────────────

function RowDropdown({ id }: { id: number }) {
  return (
    <td className="px-4 py-2">
      <button
        type="button"
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <DotsIcon />
      </button>
      {/* Dropdown (static in preview — no JS) */}
      <div className="hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
        <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><EditIcon /></svg>
              Edit
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><ViewIcon /></svg>
              View
            </a>
          </li>
        </ul>
        <div className="p-2">
          <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600">
            <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><DeleteIconPath /></svg>
            Delete
          </button>
        </div>
      </div>
    </td>
  );
}

// ── Avatar stack ────────────────────────────────────────────────────────────

function AvatarStack({ avatars, extra }: { avatars: string[]; extra?: string }) {
  return (
    <div className="flex w-28 -space-x-4">
      {avatars.map((src, i) => (
        <img key={i} src={src} alt="Avatar" className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800" />
      ))}
      {extra && (
        <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
          {extra}
        </a>
      )}
    </div>
  );
}

// ── Seat progress bar ───────────────────────────────────────────────────────

type BarColor = "green" | "yellow" | "red";

function SeatBar({ label, pct, color }: { label: string; pct: number; color: BarColor }) {
  const colorClass: Record<BarColor, string> = {
    green:  "bg-green-500",
    yellow: "bg-yellow-300",
    red:    "bg-red-500",
  };
  return (
    <td className="whitespace-nowrap px-4 py-2 font-medium">
      <div className="mb-1 flex justify-end">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className={`h-1.5 rounded-full ${colorClass[color]}`} style={{ width: `${pct}%` }} />
      </div>
    </td>
  );
}

// ── Date badge ──────────────────────────────────────────────────────────────

function DateBadge({ date }: { date: string }) {
  return (
    <td className="whitespace-nowrap px-4 py-2">
      <span className="inline-flex items-center rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
        <CalendarIcon />
        {date}
      </span>
    </td>
  );
}

// ── Google Meet cell (link or "None" badge) ────────────────────────────────

function MeetCell({ url }: { url: string | null }) {
  if (!url) {
    return (
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
        <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">None</span>
      </td>
    );
  }
  return (
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
      <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
        <ExternalLinkIcon />
        {url}
      </a>
    </td>
  );
}

// ── Event data ──────────────────────────────────────────────────────────────

type BarColorType = "green" | "yellow" | "red";

const events: {
  name: string;
  avatars: string[];
  extra?: string;
  seats: string;
  seatPct: number;
  seatColor: BarColorType;
  meet: string | null;
  date: string;
  duration: string;
  rowId: number;
}[] = [
  {
    name: "MTech Expo",
    avatars: ["/images/users/avatar-10.png", "/images/users/avatar-1.png", "/images/users/avatar-3.png"],
    extra: "+5",
    seats: "875/1023", seatPct: 75, seatColor: "green",
    meet: "https://meet.google.com/vek...",
    date: "02 Dec 2025", duration: "3 days", rowId: 1,
  },
  {
    name: "Mobilefest",
    avatars: ["/images/users/avatar-5.png", "/images/users/avatar-6.png", "/images/users/avatar-7.png"],
    extra: "+5",
    seats: "2000/2000", seatPct: 100, seatColor: "green",
    meet: "https://meet.google.com/mob...",
    date: "17 Jan 2025", duration: "1 day", rowId: 2,
  },
  {
    name: "IFEX",
    avatars: ["/images/users/avatar-9.png", "/images/users/avatar-8.png", "/images/users/avatar-7.png"],
    seats: "240/500", seatPct: 50, seatColor: "yellow",
    meet: null,
    date: "05 Feb 2025", duration: "5 days", rowId: 3,
  },
  {
    name: "Bio-IT World Conference",
    avatars: ["/images/users/avatar-2.png", "/images/users/avatar-7.png", "/images/users/avatar-1.png"],
    seats: "756/800", seatPct: 95, seatColor: "green",
    meet: "https://meet.google.com/bio",
    date: "28 Feb 2025", duration: "8 hours", rowId: 4,
  },
  {
    name: "Value-Based Care Summit",
    avatars: ["/images/users/avatar-3.png", "/images/users/avatar-8.png"],
    seats: "175/997", seatPct: 20, seatColor: "red",
    meet: "https://meet.google.com/meet",
    date: "14 Mar 2025", duration: "3 days", rowId: 5,
  },
  {
    name: "Antibody Engineering & Tech",
    avatars: ["/images/users/avatar-1.png", "/images/users/avatar-9.png", "/images/users/avatar-4.png"],
    extra: "+20",
    seats: "45/200", seatPct: 45, seatColor: "yellow",
    meet: null,
    date: "18 Apr 2025", duration: "1 day", rowId: 6,
  },
  {
    name: "Electrocom Expo",
    avatars: ["/images/users/avatar-5.png", "/images/users/avatar-4.png"],
    seats: "75/1023", seatPct: 15, seatColor: "red",
    meet: "https://meet.google.com/electro",
    date: "29 Jun 2025", duration: "1 week", rowId: 7,
  },
  {
    name: "The 4th Digital Transformation",
    avatars: ["/images/users/avatar-1.png", "/images/users/avatar-4.png", "/images/users/avatar-10.png"],
    extra: "+35",
    seats: "4076/10546", seatPct: 40, seatColor: "yellow",
    meet: "https://meet.google.com/tdt4",
    date: "01 Aug 2025", duration: "2 weeks", rowId: 8,
  },
  {
    name: "ANME Trade Show",
    avatars: ["/images/users/avatar-7.png", "/images/users/avatar-2.png", "/images/users/avatar-3.png"],
    seats: "875/1023", seatPct: 75, seatColor: "green",
    meet: "https://meet.google.com/anme",
    date: "04 Aug 2025", duration: "1 days", rowId: 9,
  },
  {
    name: "USA Art Festival",
    avatars: ["/images/users/avatar-9.png", "/images/users/avatar-8.png", "/images/users/avatar-7.png"],
    seats: "245/998", seatPct: 25, seatColor: "yellow",
    meet: "https://meet.google.com/meet12",
    date: "14 Sep 2025", duration: "3 days", rowId: 10,
  },
  {
    name: "AMTech Expo",
    avatars: ["/images/users/avatar-10.png", "/images/users/avatar-1.png", "/images/users/avatar-3.png"],
    extra: "+5",
    seats: "875/1023", seatPct: 75, seatColor: "green",
    meet: "https://meet.google.com/vek...",
    date: "02 Dec 2025", duration: "3 days", rowId: 11,
  },
  {
    name: "Mobilefest",
    avatars: ["/images/users/avatar-5.png", "/images/users/avatar-6.png", "/images/users/avatar-7.png"],
    extra: "+5",
    seats: "2000/2000", seatPct: 100, seatColor: "green",
    meet: "https://meet.google.com/mob...",
    date: "17 Jan 2025", duration: "1 day", rowId: 12,
  },
  {
    name: "IFEX",
    avatars: ["/images/users/avatar-9.png", "/images/users/avatar-8.png", "/images/users/avatar-7.png"],
    seats: "240/500", seatPct: 50, seatColor: "yellow",
    meet: null,
    date: "05 Feb 2025", duration: "5 days", rowId: 13,
  },
  {
    name: "Bio-IT World Conference",
    avatars: ["/images/users/avatar-2.png", "/images/users/avatar-7.png", "/images/users/avatar-1.png"],
    seats: "756/800", seatPct: 95, seatColor: "green",
    meet: "https://meet.google.com/bio",
    date: "28 Feb 2025", duration: "8 hours", rowId: 14,
  },
  {
    name: "Value-Based Care Summit",
    avatars: ["/images/users/avatar-3.png", "/images/users/avatar-8.png"],
    seats: "175/997", seatPct: 20, seatColor: "red",
    meet: "https://meet.google.com/meet",
    date: "14 Mar 2025", duration: "3 days", rowId: 15,
  },
];

// ── Drawer form fields ──────────────────────────────────────────────────────

function GuestAvatars() {
  const guests = [
    { src: "/images/users/helene-engels.png", alt: "helene avatar" },
    { src: "/images/users/bonnie-green.png",  alt: "bonnie avatar" },
    { src: "/images/users/robert-brown.png",  alt: "robert avatar" },
    { src: "/images/users/jese-leos.png",     alt: "jese avatar" },
  ];
  return (
    <div className="mb-5 mt-2 flex space-x-1">
      {guests.map((g, i) => (
        <div key={i} className="relative">
          <img className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src={g.src} alt={g.alt} />
          <button type="button" className="absolute left-5 top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 dark:border-gray-800">
            <svg aria-hidden="true" className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Remove user</span>
          </button>
        </div>
      ))}
      <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-600">+7</button>
    </div>
  );
}

function TagColorPicker() {
  const colors = ["bg-purple-500", "bg-indigo-500", "bg-primary-600", "bg-pink-500", "bg-teal-400", "bg-green-400", "bg-yellow-300", "bg-orange-400", "bg-red-500"];
  return (
    <div>
      <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tag Color</div>
      <div className="flex items-center space-x-2">
        {colors.map((c) => (
          <button key={c} type="button" className={`h-6 w-6 rounded-xs ${c}`} />
        ))}
      </div>
    </div>
  );
}

function GuestPermissions({ idPrefix }: { idPrefix: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Guest Permissions</label>
      <div className="space-y-3">
        {[
          { id: `${idPrefix}-1`, label: "Modify event", defaultChecked: false },
          { id: `${idPrefix}-2`, label: "Invite others",  defaultChecked: false },
          { id: `${idPrefix}-3`, label: "See guest list", defaultChecked: true  },
        ].map(({ id, label, defaultChecked }) => (
          <div key={id} className="mr-4 flex items-center">
            <input
              id={id}
              type="checkbox"
              defaultChecked={defaultChecked}
              className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
            />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

function DateInput({ id, label, defaultValue, placeholder }: { id: string; label: string; defaultValue?: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <CalendarIconLg />
        </div>
        <input
          id={id}
          name={id}
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        />
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function AdminEventsPage() {
  return (
    <PreviewShell variant="admin" title="Events">
      <div className="grid grid-cols-12 gap-4 bg-white dark:bg-gray-900">
        <div className="relative col-span-full">
          <div className="px-4 pt-4">

            {/* ── Top bar: breadcrumb + title + action buttons ─────────────── */}
            <div className="flex flex-col space-y-4 border-b border-gray-200 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
              <div>
                {/* Breadcrumb */}
                <nav className="mb-4 flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                      <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                        <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                        </svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Events</a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">All events</span>
                      </div>
                    </li>
                  </ol>
                </nav>

                {/* Title row */}
                <div className="flex flex-1 items-center space-x-2">
                  <h5>
                    <span className="font-semibold dark:text-white">All events</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">1567 Results</span>
                  </h5>
                  <button type="button" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">More info</span>
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
                >
                  <PlusIcon />
                  Create event
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v9.3l-2-2a1 1 0 0 0-1.4 1.4l.3.3h-6.6a1 1 0 1 0 0 2h6.6l-.3.3a1 1 0 0 0 1.4 1.4l2-2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                  </svg>
                  Export
                </button>
              </div>
            </div>

            {/* ── Sort/filter bar ─────────────────────────────────────────── */}
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 sm:flex-row sm:items-center sm:space-y-0">
              <div className="block items-center space-y-2 sm:flex sm:space-y-0">
                <div className="shrink-0 font-semibold dark:text-white">Sort:</div>
                <div className="flex items-center">
                  {/* Mobile select */}
                  <select className="mr-4 block w-full min-w-40 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:mx-4 lg:hidden">
                    <option>Current year</option>
                    <option>Past month</option>
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                  </select>
                  {/* Desktop button group */}
                  <div className="mx-4 hidden w-full flex-col rounded-md shadow-xs md:w-auto md:flex-row lg:inline-flex" role="group">
                    {["Current year", "Past month", "Last 30 days", "Last 7 days"].map((label, i) => {
                      const isFirst = i === 0;
                      const isLast  = i === 3;
                      let cls = "border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-primary-500";
                      if (isFirst) cls += " rounded-t-lg md:rounded-l-lg md:rounded-tr-none";
                      if (isLast)  cls += " rounded-b-lg md:rounded-r-lg md:rounded-bl-none";
                      if (!isFirst && !isLast) cls += " border-x md:border-x-0 md:border-b md:border-t";
                      return (
                        <button key={label} type="button" className={cls}>{label}</button>
                      );
                    })}
                  </div>
                  <a href="#" className="flex shrink-0 items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-500">
                    <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clipRule="evenodd" />
                    </svg>
                    More options
                  </a>
                </div>
              </div>

              {/* Actions dropdown button */}
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Actions
                <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* ── Events table ────────────────────────────────────────────── */}
            <div className="overflow-x-auto relative">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Event</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Speakers</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Remaining Seats</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Google meet</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Date</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Duration</th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                      {/* Checkbox */}
                      <td className="w-4 px-4 py-2">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-row-${ev.rowId}`}
                            type="checkbox"
                            className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label htmlFor={`checkbox-row-${ev.rowId}`} className="sr-only">checkbox</label>
                        </div>
                      </td>

                      {/* Event name */}
                      <th scope="row" className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                        <button type="button" className="hover:underline">{ev.name}</button>
                      </th>

                      {/* Speakers (avatar stack) */}
                      <td className="px-4 py-2">
                        <AvatarStack avatars={ev.avatars} extra={ev.extra} />
                      </td>

                      {/* Remaining seats */}
                      <SeatBar label={ev.seats} pct={ev.seatPct} color={ev.seatColor} />

                      {/* Google Meet */}
                      <MeetCell url={ev.meet} />

                      {/* Date badge */}
                      <DateBadge date={ev.date} />

                      {/* Duration */}
                      <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">{ev.duration}</td>

                      {/* Row actions */}
                      <RowDropdown id={ev.rowId} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ──────────────────────────────────────────────── */}
            <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="#" className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                {["1", "2"].map((n) => (
                  <li key={n}>
                    <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{n}</a>
                  </li>
                ))}
                <li>
                  <a href="#" aria-current="page" className="z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                </li>
                <li>
                  <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Create event drawer ─────────────────────────────────────────────── */}
      <div
        id="createEventDrawer"
        className="fixed right-0 top-0 z-40 h-screen w-full max-w-sm translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="create-event-drawer-label"
        aria-hidden="true"
      >
        <div className="mb-1.5 flex items-center justify-between">
          <h4 id="create-event-drawer-label" className="inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">New Event</h4>
          <button type="button" className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <CloseIcon />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <form>
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="create-title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input
                type="text"
                id="create-title"
                placeholder="Add title here"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>
            {/* Description */}
            <div>
              <label htmlFor="create-description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="create-description"
                rows={4}
                placeholder="Enter event description here"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>
            {/* Dates */}
            <DateInput id="create-start-date" label="Start date" placeholder="Start date" />
            <DateInput id="create-end-date"   label="End date"   placeholder="End date" />
            {/* Location */}
            <div>
              <label htmlFor="create-location" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Location</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LocationIcon />
                </div>
                <input
                  type="text"
                  id="create-location"
                  placeholder="Enter location"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
            </div>
            {/* Add guests */}
            <div>
              <label htmlFor="create-guests" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Add guests</label>
              <div className="relative">
                <input
                  type="search"
                  id="create-guests"
                  placeholder="Add guest email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-4 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <button
                  type="button"
                  className="absolute bottom-2.5 right-2.5 inline-flex items-center rounded-md bg-primary-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                  </svg>
                  Add
                </button>
              </div>
              <GuestAvatars />
            </div>
            {/* Tag color */}
            <TagColorPicker />
            {/* Guest permissions */}
            <GuestPermissions idPrefix="create-perm" />
          </div>
          <div className="mt-8 flex w-full justify-center space-x-3">
            <button
              type="submit"
              className="w-full justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add event
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
              </svg>
              Close
            </button>
          </div>
        </form>
      </div>

      {/* ── Update event drawer ─────────────────────────────────────────────── */}
      <div
        id="drawer-update-event"
        className="fixed right-0 top-0 z-40 h-screen w-full max-w-sm translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="update-event-drawer-label"
        aria-hidden="true"
      >
        <div className="mb-1.5 flex items-center justify-between">
          <h4 id="update-event-drawer-label" className="inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Update Event</h4>
          <button type="button" className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <CloseIcon />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <form>
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="update-title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input
                type="text"
                id="update-title"
                defaultValue="The 4th Digital Transformation"
                placeholder="Add title here"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>
            {/* Description */}
            <div>
              <label htmlFor="update-description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="update-description"
                rows={6}
                placeholder="Enter event description here..."
                defaultValue="The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>
            {/* Dates */}
            <DateInput id="update-start-date" label="Start date" defaultValue="26/08/2025" placeholder="Start date" />
            <DateInput id="update-end-date"   label="End date"   defaultValue="31/08/2025" placeholder="End date" />
            {/* Location */}
            <div>
              <label htmlFor="update-location" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Location</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LocationIcon />
                </div>
                <input
                  type="text"
                  id="update-location"
                  defaultValue="San Francisco, California"
                  placeholder="Enter location"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
            </div>
            {/* Add guests */}
            <div>
              <label htmlFor="update-guests" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Add guests</label>
              <div className="relative">
                <input
                  type="search"
                  id="update-guests"
                  placeholder="Add guest email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-4 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <button
                  type="button"
                  className="absolute bottom-2.5 right-2.5 inline-flex items-center rounded-md bg-primary-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                  </svg>
                  Add
                </button>
              </div>
              <GuestAvatars />
            </div>
            {/* Tag color */}
            <TagColorPicker />
            {/* Guest permissions */}
            <GuestPermissions idPrefix="update-perm" />
          </div>
          <div className="mt-8 flex w-full justify-center space-x-3">
            <button
              type="submit"
              className="w-full justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update event
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <DeleteIconPath />
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>

      {/* ── View event drawer ───────────────────────────────────────────────── */}
      <div
        id="readEventDrawerAdvanced"
        className="fixed right-0 top-0 z-40 h-screen w-full max-w-sm translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="read-event-drawer-label"
        aria-hidden="true"
      >
        <div className="mb-1.5 flex items-center justify-between">
          <h4 id="read-event-drawer-label" className="text-lg font-semibold leading-none text-gray-900 dark:text-white">The 4th Digital Transformation</h4>
          <button type="button" className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <CloseIcon />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Carousel placeholder */}
        <div className="relative my-4 w-full md:my-5">
          <div className="relative h-56 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-sm text-gray-400 dark:text-gray-500">Event images</span>
          </div>
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            {[0,1,2,3,4].map(i => (
              <button key={i} type="button" className={`h-3 w-3 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* Details */}
        <dl className="mt-4 sm:mt-5">
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
          </dd>
        </dl>

        {/* Date + location */}
        <dl className="flex items-center">
          <dt className="sr-only">Date</dt>
          <dd className="mb-4 mr-4 flex items-center space-x-1.5 text-gray-900 dark:text-white sm:mb-5">
            <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">26th August 2025</span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="mb-4 flex items-center space-x-1.5 text-gray-900 dark:text-white sm:mb-5">
            <LocationIcon />
            <span className="font-medium">California, USA</span>
          </dd>
        </dl>

        {/* Remaining seats */}
        <dl className="mb-4 md:mb-5">
          <dt className="mb-1 flex justify-between">
            <span className="text-base font-semibold text-gray-900 dark:text-white">Remaining seats</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">875/1023</span>
          </dt>
          <dd className="h-2 w-full rounded-xs bg-gray-200 dark:bg-gray-700">
            <div className="h-2 rounded-xs bg-green-500" style={{ width: "45%" }} />
          </dd>
        </dl>

        {/* Info grid */}
        <dl className="mb-4 grid grid-cols-2 gap-4">
          {[
            {
              label: "Participants",
              content: (
                <dd className="flex -space-x-3">
                  {["/images/users/helene-engels.png", "/images/users/bonnie-green.png", "/images/users/jese-leos.png"].map((src, i) => (
                    <img key={i} className="h-8 w-8 rounded-full border-2 border-gray-100 dark:border-gray-700" src={src} alt="" />
                  ))}
                  <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-100 bg-gray-700 text-xs font-medium text-white hover:bg-gray-500 dark:border-gray-700 dark:bg-gray-600">+7</button>
                </dd>
              ),
            },
            { label: "Online",       content: <dd className="text-gray-500 dark:text-gray-400">Google Meet</dd> },
            { label: "Duration",     content: <dd className="text-gray-500 dark:text-gray-400">All day</dd> },
            { label: "Notification", content: <dd className="text-gray-500 dark:text-gray-400">4 Days SMS</dd> },
          ].map(({ label, content }) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">{label}</dt>
              {content}
            </div>
          ))}
        </dl>

        {/* Drawer actions */}
        <div className="mt-8 flex w-full justify-center space-x-3">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <EditIcon />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <DeleteIconPath />
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* ── Delete event modal ──────────────────────────────────────────────── */}
      <div
        id="deleteEventModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <form className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <CloseIcon />
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Remove this event?</h3>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">If you delete this event, all notifications, reservations and payments for this event may be deleted.</p>
            <div className="mb-4 rounded-lg bg-gray-100 p-4 text-left text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:mb-5" role="alert">
              <div className="flex">
                <input
                  id="confirm-delete-checkbox"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded-sm border-gray-300 bg-gray-50 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                />
                <label htmlFor="confirm-delete-checkbox" className="ml-2 text-sm">
                  Also delete <span className="font-medium text-gray-900 dark:text-white">all posts, photos and videos</span> on Flowbite that this event may have published on your behalf.
                </label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
              >
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <DeleteIconPath />
                </svg>
                Yes, delete
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Archive event modal ─────────────────────────────────────────────── */}
      <div
        id="archiveModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white p-4 text-center shadow-sm dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <CloseIcon />
              <span className="sr-only">Close modal</span>
            </button>
            <svg className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
              <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
            </svg>
            <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to archive this event?</p>
            <div className="flex items-center justify-center space-x-4">
              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                No, cancel
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Yes, I do
              </button>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
