"use client";

import { PreviewShell } from "../PreviewShell";

// ── Shared context-menu items ──────────────────────────────────────────────
const MsgContextMenu = ({ id }: { id: string }) => (
  <div
    id={`dropdownDots${id}`}
    className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
  >
    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
      {[
        { label: "Reply",   icon: <path d="M14.502 7.046h-2.5v-.928a2.122 2.122 0 0 0-1.199-1.954 1.827 1.827 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.829 1.829 0 0 0 1.985.31 2.121 2.121 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961 6.59 6.59 0 0 0 4.662-7.22 6.593 6.593 0 0 0-6.437-5.695Z"/> },
        { label: "Forward", icon: <path d="M5.027 10.9a8.729 8.729 0 0 1 6.422-3.62v-1.2A2.061 2.061 0 0 1 12.61 4.2a1.986 1.986 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.109 2.109 0 0 1-.588.734l-5.489 4.308a1.983 1.983 0 0 1-2.104.228 2.065 2.065 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1.003 1.003 0 0 1-.955-.7A10.221 10.221 0 0 1 5.027 10.9Z"/> },
        { label: "Copy",    icon: <><path fillRule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clipRule="evenodd"/><path fillRule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clipRule="evenodd"/></> },
        { label: "Report",  icon: <path d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z"/> },
      ].map(({ label, icon }) => (
        <li key={label}>
          <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
            {label}
          </a>
        </li>
      ))}
      <li>
        <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600">
          <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
          </svg>
          Delete
        </a>
      </li>
    </ul>
  </div>
);

const MsgMenuBtn = ({ id }: { id: string }) => (
  <button
    type="button"
    className="inline-flex items-center self-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-900 opacity-0 transition-opacity hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 group-hover:opacity-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-600"
  >
    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
    </svg>
  </button>
);

// ── Phone icon (call) ──────────────────────────────────────────────────────
const PhoneIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
  </svg>
);

const MicIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
    <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z"/>
  </svg>
);

const ImageIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
    <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clipRule="evenodd"/>
  </svg>
);

const IncomingCallIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.8 4.8 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677H7.31a2.685 2.685 0 0 0 2.685-2.684v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.645c0 .712.284 1.395.787 1.898.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z"/>
  </svg>
);

// ── Page ───────────────────────────────────────────────────────────────────
export default function AdminChatRoomPage() {
  return (
    <PreviewShell variant="admin" title="Chat Room">
      <div className="flex h-[calc(100vh-8rem)]">

        {/* ── Left sidebar: conversations ────────────────────────────────── */}
        <div className="hidden w-full max-w-80 border-e border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:block">

          {/* Tabs: Chats / Latest calls */}
          <div className="mb-4 w-full border-b border-gray-200 dark:border-gray-700">
            <ul className="-mb-px grid grid-cols-2 text-center text-sm font-medium">
              <li>
                <button className="flex w-full items-center justify-center rounded-t-lg border-b-2 border-blue-600 px-4 py-5 text-blue-600 dark:border-blue-500 dark:text-blue-500">
                  <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd"/>
                  </svg>
                  Chats
                </button>
              </li>
              <li>
                <button className="flex w-full items-center justify-center rounded-t-lg border-b border-gray-200 px-4 py-5 text-gray-500 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-white">
                  <PhoneIcon className="me-2 h-5 w-5" />
                  Latest calls
                </button>
              </li>
            </ul>
          </div>

          {/* Chats panel */}
          <div>
            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-4">
              <h2 className="font-medium text-gray-900 dark:text-white">Latest chats</h2>
              <div className="flex items-center gap-1">
                {/* Options button */}
                <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                  </svg>
                  <span className="sr-only">Options chat</span>
                </button>
                {/* New conversation button */}
                <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">New conversation</span>
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="mb-4 px-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Search for messages or contacts"
                />
              </div>
            </div>

            {/* Chat list */}
            <div className="h-[calc(100vh-19.4rem)] overflow-y-auto">
              <ul>
                {[
                  { name: "Roberta Casas",    img: "roberta-casas",    online: true,  preview: "Typing...",                                        time: "18:05",      typing: true, unread: 0 },
                  { name: "Leslie Livingston", img: "leslie-livingston",online: true,  preview: "Yes, we can do this! 🔥",                          time: "14:23",      typing: false, unread: 0 },
                  { name: "Neil Sims",         img: "neil-sims",        online: false, preview: null,                                               time: "10:02",      typing: false, unread: 4, voiceMsg: true },
                  { name: "Michael Gough",     img: "michael-gough",    online: true,  preview: "Nevermind, I will grab the items from the station.", time: "07:45",      typing: false, unread: 0 },
                  { name: "Bonnie Green",      img: "bonnie-green",     online: false, preview: null,                                               time: "15h",        typing: false, unread: 0, imageMsg: true },
                  { name: "Lana Byrd",         img: "lana-byrd",        online: true,  preview: "🎉 Awesome, let's go!",                             time: "16h",        typing: false, unread: 0 },
                  { name: "Helene Engels",     img: "helene-engels",    online: false, preview: "Yes, we can do this! 🔥",                          time: "18h",        typing: false, unread: 0 },
                  { name: "Karen Nelson",      img: "karen-nelson",     online: true,  preview: "Are we still up for that coffee tomorrow?",        time: "yesterday",  typing: false, unread: 2 },
                  { name: "Thomas Lean",       img: "thomas-lean",      online: false, preview: null,                                               time: "2d",         typing: false, unread: 0, voiceMsg: true },
                  { name: "Robert Brown",      img: "robert-brown",     online: false, preview: "Long time no talk, what's up brother?",           time: "1w",         typing: false, unread: 0 },
                  { name: "Joseph McFall",     img: "joseph-mcfall",    online: true,  preview: "Let's do it next month",                           time: "04.03.2025", typing: false, unread: 0 },
                  { name: "Jese Leos",         img: "jese-leos",        online: true,  preview: "You hear about Flowbite? 👀",                       time: "04.03.2025", typing: false, unread: 0 },
                ].map((c) => (
                  <li key={c.name} className="flex items-start justify-between px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <img className="h-8 w-8 rounded-full" src={`/images/users/${c.img}.png`} alt={`${c.name} image`} />
                        <span className={`absolute start-6 top-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800 ${c.online ? "bg-green-400" : "bg-red-500"}`}></span>
                      </div>
                      <div className="leading-1.5 flex w-full flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">{c.name}</span>
                        {c.typing ? (
                          <p className="max-w-52 truncate text-sm font-normal text-blue-600 dark:text-blue-500">Typing...</p>
                        ) : c.voiceMsg ? (
                          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <MicIcon />
                            <span className="max-w-52 truncate font-medium text-gray-900 dark:text-white">Voice message</span>
                          </p>
                        ) : c.imageMsg ? (
                          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <ImageIcon />
                            <span className="max-w-52 truncate">Sent a photo</span>
                          </p>
                        ) : (
                          <p className={`max-w-52 truncate text-sm font-normal ${c.unread ? "font-medium text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>{c.preview}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end">
                      <span className={`${c.unread ? "mb-1" : ""} text-xs text-gray-500 dark:text-gray-400`}>{c.time}</span>
                      {c.unread > 0 && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 p-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">{c.unread}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Group conversations */}
              <div className="flex items-center justify-between border-t border-gray-200 px-4 py-4 dark:border-gray-700">
                <h3 className="font-medium text-gray-500 dark:text-gray-400">Group conversation</h3>
                <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                  </svg>
                  <span className="sr-only">New group conversation</span>
                </button>
              </div>
              <ul>
                {[
                  { name: "Business group", imgs: ["roberta-casas", "bonnie-green"],  preview: "Bonnie: Wait! What test? 😱", time: "18:05" },
                  { name: "Family group",   imgs: ["jese-leos", "helene-engels"],     preview: "Jese: Pizza is here! 🍕",       time: "18:05" },
                ].map((g) => (
                  <li key={g.name} className="flex items-start justify-between px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0 -space-x-4 rtl:space-x-reverse">
                        {g.imgs.map((img) => (
                          <img key={img} className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src={`/images/users/${img}.png`} alt="" />
                        ))}
                      </div>
                      <div className="leading-1.5 flex w-full flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">{g.name}</span>
                        <p className="max-w-52 truncate text-sm font-normal text-gray-500 dark:text-gray-400">{g.preview}</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{g.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Main chat area ─────────────────────────────────────────────── */}
        <div className="relative w-full">

          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/joseph-mcfall.png`} alt="Joseph image" />
              </div>
              <div className="leading-1.5 flex w-full flex-col">
                <span className="text-base font-medium text-gray-900 dark:text-white">Joseph McFall</span>
                <div className="flex items-center text-xs font-normal text-green-500">
                  <div className="me-1 h-2.5 w-2.5 rounded-full bg-green-400"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Phone call */}
              <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-blue-700 hover:bg-blue-50 dark:text-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <PhoneIcon className="h-6 w-6" />
                <span className="sr-only">Make a phone call</span>
              </button>
              {/* Video call */}
              <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-blue-700 hover:bg-blue-50 dark:text-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Make a video call</span>
              </button>
              {/* Info */}
              <button type="button" className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-blue-700 hover:bg-blue-50 dark:text-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Show contact information</span>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="h-[calc(100vh-18.5rem)] space-y-4 overflow-y-auto p-4">

            {/* Incoming — text */}
            <div className="group flex max-w-[404px] items-start gap-2.5">
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/roberta-casas.png`} alt="Roberta image" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Roberta Casas</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <div className="leading-1.5 ms-auto inline-flex flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                  <p className="text-sm font-normal text-gray-900 dark:text-white">That&apos;s awesome. I think our users will really appreciate the improvements.</p>
                </div>
              </div>
              <MsgMenuBtn id="1" />
              <MsgContextMenu id="1" />
            </div>

            {/* Incoming — voice message */}
            <div className="group flex max-w-[404px] items-start gap-2.5">
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/roberta-casas.png`} alt="Roberta image" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Roberta Casas</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:48</span>
                </div>
                <div className="leading-1.5 flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button type="button" className="inline-flex items-center self-center rounded-lg bg-gray-100 p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                      <svg className="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                        <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                      </svg>
                    </button>
                    {/* Waveform SVG */}
                    <svg className="w-[145px] md:h-[40px] md:w-[185px]" aria-hidden="true" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" className="dark:fill-white"/>
                      <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500"/>
                      <rect x="66" y="16" width="8" height="8" rx="4" fill="#1C64F2"/>
                    </svg>
                    <span className="inline-flex items-center self-center p-2 text-sm font-medium text-gray-900 dark:text-white">3:42</span>
                  </div>
                </div>
              </div>
              <MsgMenuBtn id="2" />
              <MsgContextMenu id="2" />
            </div>

            {/* Outgoing — multiple messages */}
            <div className="group ms-auto flex max-w-[404px] items-start justify-end gap-2.5">
              <MsgMenuBtn id="3" />
              <MsgContextMenu id="3" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Joseph McFall</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:48</span>
                </div>
                <div className="space-y-1 text-end">
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">I agree on this one and we should add it to the next sprint so that we can roll it out as soon as possible.</p>
                  </div>
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">Hey Roberta... forgot to ask, but can you please send me a pic of the new office?</p>
                  </div>
                  <div className="leading-1.5 ms-auto inline-flex rounded-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">Thanks! 🙏</p>
                  </div>
                </div>
              </div>
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/joseph-mcfall.png`} alt="Joseph image" />
            </div>

            {/* Incoming — photo */}
            <div className="group flex max-w-[404px] items-start gap-2.5">
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/roberta-casas.png`} alt="Roberta image" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">Roberta Casas</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
                  <p className="text-sm font-normal text-gray-900 dark:text-white">Here&apos;s the new office! 💙</p>
                  <div className="group relative my-2.5">
                    <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-gray-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:text-white">
                        <svg className="h-5 w-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                        </svg>
                      </button>
                    </div>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/blog/image-1.jpg`} className="rounded-lg" alt="New office" />
                  </div>
                </div>
              </div>
              <MsgMenuBtn id="4" />
              <MsgContextMenu id="4" />
            </div>

            {/* Outgoing — design system link */}
            <div className="group ms-auto flex max-w-[404px] items-start justify-end gap-2.5">
              <MsgMenuBtn id="5" />
              <MsgContextMenu id="5" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Joseph McFall</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">12:56</span>
                </div>
                <div className="space-y-1 text-end">
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">We&apos;ve been looking for a design system for a while now, I think that I have found a pretty good candidate.</p>
                  </div>
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">I&apos;ll send a link in a bit.</p>
                  </div>
                </div>
              </div>
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/joseph-mcfall.png`} alt="Joseph image" />
            </div>

            {/* Incoming — link preview */}
            <div className="group flex max-w-[404px] items-start gap-2.5">
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/roberta-casas.png`} alt="Roberta image" />
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">Roberta Casas</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <div className="leading-1.5 flex flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
                  <p className="pb-2.5 text-sm font-normal text-gray-900 dark:text-white">You mean this one? 🙃</p>
                  <p className="pb-2.5 text-sm font-normal text-gray-900 dark:text-white">
                    <a href="https://github.com/themesberg/flowbite" className="break-all font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">
                      https://github.com/themesberg/flowbite
                    </a>
                  </p>
                  <a href="#" className="mb-2 rounded-xl bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500">
                    <img src="https://flowbite.com/docs/images/og-image.png" className="mb-2 rounded-lg" alt="Flowbite preview" />
                    <span className="mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub - themesberg/flowbite: The most popular and open source libra ...</span>
                    <span className="text-xs font-normal text-gray-500 dark:text-gray-400">github.com</span>
                  </a>
                </div>
              </div>
              <MsgMenuBtn id="6" />
              <MsgContextMenu id="6" />
            </div>

            {/* Outgoing — surprise */}
            <div className="group ms-auto flex max-w-[404px] items-start justify-end gap-2.5">
              <MsgMenuBtn id="7" />
              <MsgContextMenu id="7" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Joseph McFall</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">13:02</span>
                </div>
                <div className="space-y-1 text-end">
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-s-xl rounded-ee-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">Wait... how did you know? 😱</p>
                  </div>
                </div>
              </div>
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/joseph-mcfall.png`} alt="Joseph image" />
            </div>

            {/* Incoming — last */}
            <div className="group flex max-w-[404px] items-start gap-2.5">
              <img className="h-8 w-8 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/roberta-casas.png`} alt="Roberta image" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:cursor-pointer hover:underline dark:text-white">Roberta Casas</a>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">13:04</span>
                </div>
                <div className="space-y-1 text-start">
                  <div className="leading-1.5 ms-auto inline-flex flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 text-start dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">I have been using it forever!</p>
                  </div>
                </div>
              </div>
              <MsgMenuBtn id="8" />
              <MsgContextMenu id="8" />
            </div>
          </div>

          {/* ── Message compose bar ─────────────────────────────────────── */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="w-full border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-700">
              {/* Text input row */}
              <div className="flex items-center gap-2 bg-white px-4 py-3 dark:bg-gray-800">
                <label htmlFor="chat-message-input" className="sr-only">Write message</label>
                <div
                  id="chat-message-input"
                  contentEditable
                  suppressContentEditableWarning
                  className="block min-h-[1.5rem] w-full border-0 bg-white px-0 text-sm text-gray-800 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                  data-placeholder="Type a message..."
                />
                <button type="submit" className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                  <svg className="h-4 w-4 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>

              {/* Formatting toolbar */}
              <div className="flex items-center justify-between border-t border-gray-200 px-2 py-2 dark:border-gray-600">
                <div className="flex flex-wrap items-center gap-0.5">
                  {/* Bold */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>
                    </svg>
                    <span className="sr-only">Bold</span>
                  </button>
                  {/* Italic */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/>
                    </svg>
                    <span className="sr-only">Italic</span>
                  </button>
                  {/* Underline */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/>
                    </svg>
                    <span className="sr-only">Underline</span>
                  </button>
                  {/* Strikethrough */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>
                    </svg>
                    <span className="sr-only">Strike</span>
                  </button>
                  {/* Code */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>
                    <span className="sr-only">Code</span>
                  </button>
                  {/* Text size */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/>
                    </svg>
                    <span className="sr-only">Text size</span>
                  </button>
                  {/* Text color */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z"/>
                    </svg>
                    <span className="sr-only">Text color</span>
                  </button>
                  {/* Font family */}
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z"/>
                    </svg>
                    <span className="sr-only">Font family</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}

      {/* New conversation modal */}
      <div id="new-conversation-modal" tabIndex={-1} aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
        <div className="relative max-h-full w-full max-w-sm p-4">
          <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
            <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">New message</h3>
              <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="mb-4">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <input type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="Search for contacts"/>
                </div>
              </div>
              <ul className="max-h-48 space-y-1 overflow-y-auto">
                {["jese-leos","bonnie-green","joseph-mcfall","robert-brown","leslie-livingston","lana-byrd"].map((img) => (
                  <li key={img}>
                    <button type="button" className="flex w-full items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <img className="me-2 h-6 w-6 rounded-full" src={`/images/users/${img}.png`} alt="" />
                      <span className="text-gray-900 dark:text-white capitalize">{img.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <button type="submit" className="w-full justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">New chat</button>
                <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New group conversation modal */}
      <div id="new-group-conversation-modal" tabIndex={-1} aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create new group</h3>
              <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Search by name"/>
                  </div>
                </div>
                <button type="button" className="col-span-1 w-full justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">Add member</button>
              </div>
              <ul className="max-h-48 space-y-3 overflow-y-auto">
                {[
                  { img: "jese-leos",          name: "Jese Leos",        role: "Admin"  },
                  { img: "bonnie-green",        name: "Bonnie Green",     role: "Member" },
                  { img: "joseph-mcfall",       name: "Joseph McFall",    role: "Member" },
                  { img: "robert-brown",        name: "Robert Brown",     role: "Member" },
                  { img: "leslie-livingston",   name: "Leslie Livingston",role: "Member" },
                ].map((m) => (
                  <li key={m.img} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img className="me-2 h-6 w-6 rounded-full" src={`/images/users/${m.img}.png`} alt="" />
                      <span className="text-gray-900 dark:text-white">{m.name}</span>
                    </div>
                    <div className="flex items-center">
                      <button type="button" className="me-2 flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {m.role}
                        <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                        </svg>
                      </button>
                      <button type="button" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-red-500 dark:hover:bg-gray-700">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex w-full items-center space-x-3">
                <button type="submit" className="justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">Create group</button>
                <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dial phone modal */}
      <div id="dial-phone-modal" tabIndex={-1} aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
        <div className="relative max-h-full w-full max-w-sm p-4">
          <div className="relative flex flex-col rounded-lg bg-white p-4 text-center shadow-sm dark:bg-gray-800 sm:p-5">
            <span className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">(+12) 3456 789</span>
            <button type="button" className="mb-6 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500">Add number</button>
            <div className="mx-auto mb-4 grid max-w-sm grid-cols-3 gap-4">
              {[
                { d: "1", s: "" }, { d: "2", s: "ABC" }, { d: "3", s: "DEF" },
                { d: "4", s: "GHI" }, { d: "5", s: "JKL" }, { d: "6", s: "MNO" },
                { d: "7", s: "PQRS" }, { d: "8", s: "TUV" }, { d: "9", s: "WXYZ" },
                { d: "*", s: "" }, { d: "0", s: "+" }, { d: "#", s: "" },
              ].map(({ d, s }) => (
                <button key={d + s} type="button" className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 text-lg text-gray-900 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                  <span className="leading-none">{d}</span>
                  {s && <span className="text-xs font-medium">{s}</span>}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button type="button" className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-green-500 text-lg text-white hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-400">
                <PhoneIcon className="h-6 w-6" />
                <span className="sr-only">Call number</span>
              </button>
              <button type="button" className="ms-2 flex h-10 w-10 flex-col items-center justify-center rounded-full text-lg text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
                <span className="sr-only">Remove digit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact info drawer (static preview) */}
      <div id="readUserDrawerAdvanced" className="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 px-3 transition-transform dark:bg-gray-800" tabIndex={-1} aria-hidden="true">
        <div className="mb-6 flex flex-col items-center justify-center">
          <img className="mb-4 h-20 w-20 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/joseph-mcfall.png`} alt="Joseph avatar" />
          <div className="text-center">
            <a href="#" className="group">
              <h4 className="mb-1 text-xl font-bold leading-none text-gray-900 group-hover:underline dark:text-white">Joseph McFall</h4>
            </a>
            <p className="text-gray-500 dark:text-gray-400">joseph@example.com</p>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-3">
          <a href="#" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <PhoneIcon className="me-2 h-4 w-4" />
            Audio call
          </a>
          <a href="#" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd"/>
            </svg>
            Video call
          </a>
        </div>
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Media</h3>
          <div className="grid grid-cols-3 gap-2">
            <button type="button" className="h-24 w-24">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/chat/image-1.png`} className="rounded-lg" alt="media 1" />
            </button>
            <button type="button" className="h-24 w-24">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/chat/image-2.png`} className="rounded-lg" alt="media 2" />
            </button>
            <button type="button" className="flex h-24 w-24 items-center justify-center rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <span className="text-sm font-semibold">+32</span>
            </button>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Files</h3>
          <div className="space-y-2">
            {[
              { name: "flowbite-presentation.pdf", meta: "12 Pages · 18 MB · PDF" },
              { name: "hero-image.jpg",             meta: "35 kB · JPG" },
              { name: "pink-floyd.mp3",             meta: "3.3 MB · MP3" },
            ].map((f) => (
              <div key={f.name} className="my-2.5 flex items-start justify-between rounded-xl bg-gray-50 p-2 dark:bg-gray-600">
                <div className="me-2">
                  <button type="button" className="flex items-center gap-2 pb-2 text-sm font-medium text-gray-900 hover:underline dark:text-white">
                    <svg className="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Z" clipRule="evenodd"/>
                    </svg>
                    {f.name}
                  </button>
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400">{f.meta}</span>
                </div>
                <button type="button" className="inline-flex items-center self-center rounded-lg bg-gray-50 p-2 text-gray-900 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span className="sr-only">Download file</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 space-y-2">
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">Mute notifications</span>
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">Disappearing messages</span>
          </label>
        </div>
        <div className="mb-6">
          <button type="button" className="flex w-full items-start gap-2 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-600">
            <svg className="h-6 w-6 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z" clipRule="evenodd"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Encryption</span>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">Messages and calls are end-to-end encrypted. Click to verify</span>
            </div>
            <div className="my-auto">
              <svg className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
              </svg>
            </div>
          </button>
        </div>
        <div className="space-y-4">
          {[
            { label: "Block user",  icon: <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/> },
            { label: "Report user", icon: <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/> },
            { label: "Delete chat", icon: <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/> },
          ].map(({ label, icon }) => (
            <button key={label} type="button" className="flex items-center text-sm font-medium text-red-700 hover:underline dark:text-red-500">
              <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
              {label}
            </button>
          ))}
        </div>
      </div>

    </PreviewShell>
  );
}
