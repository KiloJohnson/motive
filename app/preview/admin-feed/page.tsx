"use client";

import { PreviewShell } from "../PreviewShell";

// ── Static data ────────────────────────────────────────────────────────────

const members = [
  { id: "user-1",   src: "/images/users/jese-leos.png",      alt: "Jese avatar",    name: "Jese Leos",       count: 435,   checked: false },
  { id: "user-2",   src: "/images/users/bonnie-green.png",   alt: "Bonnie avatar",  name: "Bonnie Green",    count: 46,    checked: false },
  { id: "user-3",   src: "/images/users/joseph-mcfall.png",  alt: "Joseph avatar",  name: "Joseph Mcfall",   count: 102,   checked: false },
  { id: "user-103", src: "/images/users/neil-sims.png",      alt: "Neil avatar",    name: "Neil Sims",       count: 475,   checked: true  },
  { id: "user-4",   src: "/images/users/avatar-4.png",       alt: "Lana avatar",    name: "Lana Byrd",       count: 234,   checked: false },
  { id: "user-52",  src: "/images/users/avatar-5.png",       alt: "Thomas avatar",  name: "Thomas Lean",     count: 1028,  checked: false },
  { id: "user-8",   src: "/images/users/roberta-casas.png",  alt: "Roberta avatar", name: "Roberta Casas",   count: 945,   checked: true  },
  { id: "user-67",  src: "/images/users/robert-brown.png",   alt: "Robert avatar",  name: "Robert Brown",    count: 89,    checked: false },
  { id: "user-7",   src: "/images/users/michael-gough.png",  alt: "Michael avatar", name: "Micheal Gough",   count: 654,   checked: false },
  { id: "user-9",   src: "/images/users/karen-nelson.png",   alt: "Karen avatar",   name: "Karen Nelson",    count: 44,    checked: false },
];

const groups = [
  {
    id: "group-1",
    avatars: [
      { src: "/images/users/jese-leos.png",     alt: "Jese avatar"   },
      { src: "/images/users/bonnie-green.png",  alt: "Bonnie avatar" },
    ],
    name: "Flowbite Dev",
    count: 2756,
  },
  {
    id: "group-2",
    avatars: [
      { src: "/images/users/avatar-4.png",       alt: "Lana avatar"   },
      { src: "/images/users/joseph-mcfall.png",  alt: "Joseph avatar" },
    ],
    name: "Design Team",
    count: 1033,
  },
  {
    id: "group-3",
    avatars: [
      { src: "/images/users/robert-brown.png",  alt: "Robert avatar"  },
      { src: "/images/users/roberta-casas.png", alt: "Roberta avatar" },
    ],
    name: "React Devs",
    count: 961,
  },
  {
    id: "group-4",
    avatars: [
      { src: "/images/users/michael-gough.png", alt: "Michael avatar" },
      { src: "/images/users/robert-brown.png",  alt: "Robert avatar"  },
    ],
    name: "Finance Team",
    count: 961,
  },
  {
    id: "group-5",
    avatars: [
      { src: "/images/users/neil-sims.png",     alt: "Neil avatar"    },
      { src: "/images/users/roberta-casas.png", alt: "Roberta avatar" },
    ],
    name: "Funny Weekend",
    count: 961,
  },
];

const feedPosts = [
  {
    id: 1,
    avatar: "/images/users/bonnie-green.png",
    name: "Bonnie Green",
    postedOn: "Posted on April 1, 2025 at 5:52 PM",
    message:
      "Just shipped the new analytics dashboard — real-time metrics, customizable widgets, and dark mode support. The performance improvements are huge: 40% faster initial load. Check it out and let me know what you think!",
    images: [],
    comments: 12,
    likes: 47,
  },
  {
    id: 2,
    avatar: "/images/users/neil-sims.png",
    name: "Neil Sims",
    postedOn: "Posted on March 28, 2025 at 2:14 PM",
    message:
      "Finished refactoring the auth layer to JWT tokens with zero downtime. SSO integration is next on the list. Huge thanks to the backend team for the smooth rollout.",
    images: [],
    comments: 8,
    likes: 61,
  },
  {
    id: 3,
    avatar: "/images/users/jese-leos.png",
    name: "Jese Leos",
    postedOn: "Posted on March 24, 2025 at 10:05 AM",
    message:
      "Wrapped up the new onboarding flow designs this week. User research sessions really paid off — reduced the steps from 7 down to 4. Sharing the Figma link in the design channel now.",
    images: [],
    comments: 15,
    likes: 34,
  },
  {
    id: 4,
    avatar: "/images/users/roberta-casas.png",
    name: "Roberta Casas",
    postedOn: "Posted on March 20, 2025 at 8:47 AM",
    message:
      "Monthly metrics are in. Conversion rate is up 4.8% after the landing page redesign. Churn dropped to 2.1% — best quarter since launch. Full report shared in the analytics channel.",
    images: [],
    comments: 20,
    likes: 58,
  },
  {
    id: 5,
    avatar: "/images/users/michael-gough.png",
    name: "Michael Gough",
    postedOn: "Posted on March 18, 2025 at 3:30 PM",
    message:
      "Infrastructure migration to the new cloud region is complete. Latency down 30ms across the board. Uptime is holding steady at 99.98% over the last 30 days. Good work everyone.",
    images: [],
    comments: 5,
    likes: 29,
  },
  {
    id: 6,
    avatar: "/images/users/robert-brown.png",
    name: "Robert Brown",
    postedOn: "Posted on March 15, 2025 at 11:20 AM",
    message:
      "New component library release is live — 24 new components, improved accessibility across all existing ones, and full dark mode coverage. Docs updated at the design system site.",
    images: [],
    comments: 31,
    likes: 92,
  },
  {
    id: 7,
    avatar: "/images/users/karen-nelson.png",
    name: "Karen Nelson",
    postedOn: "Posted on March 12, 2025 at 9:10 AM",
    message:
      "Completed the full regression suite for the Q1 release. Zero critical bugs found. Two medium-priority items logged — both assigned and in sprint. We're good to ship.",
    images: [],
    comments: 0,
    likes: 18,
  },
  {
    id: 8,
    avatar: "/images/users/joseph-mcfall.png",
    name: "Joseph Mcfall",
    postedOn: "Posted on March 10, 2025 at 4:55 PM",
    message:
      "API v3 is now in public beta. Breaking changes from v2 are documented in the migration guide. We're giving teams 60 days before v2 is deprecated. Reach out if you have questions.",
    images: [],
    comments: 9,
    likes: 41,
  },
];

// ── Icons (inline SVG, matching source exactly) ────────────────────────────

function DotsIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd" />
    </svg>
  );
}

function LikeIcon() {
  return (
    <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
    </svg>
  );
}

function MessageInputIcon() {
  return (
    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
    </svg>
  );
}

function HideIcon() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
      <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
      <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z" />
    </svg>
  );
}

// ── Checkbox (controlled-look only — display only) ─────────────────────────

const checkboxCls =
  "me-3 h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600";

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminFeedPage() {
  return (
    <PreviewShell variant="admin" title="Activity">
      <div className="feed-container relative items-start overflow-y-hidden md:flex" style={{ minHeight: "100%" }}>

        {/* ── Left sidebar: Members + Groups ── */}
        <aside className="hidden h-full min-w-80 overflow-y-scroll border-e border-gray-200 bg-white px-4 py-6 dark:border-gray-700 dark:bg-gray-800 md:sticky md:mb-0 md:block md:pb-0">

          {/* Members header */}
          <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4 text-sm dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Members<span className="ms-1 font-normal text-gray-500 dark:text-gray-400">3,456</span>
            </h3>
            <h4 className="text-gray-500 dark:text-gray-400">Activities</h4>
          </div>

          {/* Members list */}
          <ul className="mb-4 space-y-4">
            {members.map((m) => (
              <li key={m.id} className="flex items-center">
                <input
                  id={m.id}
                  type="checkbox"
                  defaultChecked={m.checked}
                  className={checkboxCls}
                  readOnly
                />
                <img className="me-2 h-5 w-5 rounded-full" src={m.src} alt={m.alt} />
                <label htmlFor={m.id} className="flex items-center font-medium text-gray-900 dark:text-gray-100">
                  {m.name}
                </label>
                <span className="ms-auto text-sm text-gray-500 dark:text-gray-400">
                  {m.count.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>

          <button type="button" className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500">
            Show more...
          </button>

          {/* Groups header */}
          <div className="mb-4 mt-4 flex items-center justify-between border-b border-t border-gray-200 py-4 text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Groups<span className="ms-1 font-normal text-gray-500 dark:text-gray-400">48</span>
            </h3>
            <h4 className="text-gray-500 dark:text-gray-400">Activities</h4>
          </div>

          {/* Groups list */}
          <ul className="mb-4 space-y-4">
            {groups.map((g) => (
              <li key={g.id} className="flex items-center">
                <input
                  id={g.id}
                  type="checkbox"
                  className={checkboxCls}
                  readOnly
                />
                <div className="me-2 flex -space-x-3">
                  {g.avatars.map((a, i) => (
                    <img
                      key={i}
                      className="h-5 w-5 rounded-full border-2 border-white dark:border-gray-800"
                      src={a.src}
                      alt={a.alt}
                    />
                  ))}
                </div>
                <label htmlFor={g.id} className="flex items-center font-medium text-gray-900 dark:text-gray-100">
                  {g.name}
                </label>
                <span className="ms-auto text-sm text-gray-500 dark:text-gray-400">
                  {g.count.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>

          <button type="button" className="mb-4 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500">
            Show more...
          </button>
        </aside>

        {/* ── Feed posts ── */}
        <div className="mb-5 h-full w-full overflow-hidden overflow-y-auto p-4">
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="mb-4 space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 lg:space-y-6 2xl:p-6"
            >
              {/* Post header */}
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <img
                    className="h-10 w-10 rounded-lg"
                    src={post.avatar}
                    alt={post.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="truncate font-semibold text-gray-900 hover:underline dark:text-white"
                  >
                    {post.name}
                  </a>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {post.postedOn}
                  </p>
                </div>

                {/* Dropdown trigger */}
                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <DotsIcon />
                  </button>
                  {/* Dropdown menu (static, no JS toggle) */}
                  <div className="absolute inset-e-0 z-10 mt-1 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <BookmarkIcon />
                          Save post
                        </button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HideIcon />
                          Hide post
                        </button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <ReportIcon />
                          Report post
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post body */}
              <div className="space-y-4">
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {post.message}
                </p>
                {post.images.length > 0 && (
                  <div className="flex">
                    {post.images.map((img, i) => (
                      <img
                        key={i}
                        className="mr-4 h-32 w-32 rounded-lg sm:h-40 sm:w-40"
                        src={`/images/feed/${img}`}
                        alt="post image"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Engagement bar */}
              <div className="flex space-x-6 border-b border-t border-gray-200 py-3 dark:border-gray-700">
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  <CommentIcon />
                  {post.comments > 0 ? `${post.comments} Comments` : "No comments"}
                </a>
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  <LikeIcon />
                  {post.likes > 0 ? `${post.likes} Likes` : "No likes"}
                </a>
              </div>

              {/* Reply input */}
              <div>
                <form action="#">
                  <label htmlFor={`write-message-${post.id}`} className="sr-only">
                    Write message
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 inset-s-0 flex items-center ps-3.5">
                      <MessageInputIcon />
                    </div>
                    <input
                      type="text"
                      id={`write-message-${post.id}`}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Write your response"
                    />
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}
