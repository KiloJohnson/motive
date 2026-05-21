"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Badge, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiInboxIn, HiStar, HiPaperAirplane, HiDocumentText, HiTrash, HiPencilAlt, HiSearch, HiPaperClip, HiReply, HiDotsVertical } from "react-icons/hi";

const folders = [
  { label: "Inbox",  icon: HiInboxIn,       count: 4, active: true },
  { label: "Starred", icon: HiStar,          count: 0 },
  { label: "Sent",    icon: HiPaperAirplane, count: 0 },
  { label: "Drafts",  icon: HiDocumentText,  count: 2 },
  { label: "Trash",   icon: HiTrash,         count: 0 },
];

const emails = [
  {
    id: 1, from: "Bonnie Green", initials: "BG", subject: "Q2 sales report — action required",
    preview: "Hi team, please review the attached Q2 report before Thursday's all-hands meeting. Key metrics are down 3% from...",
    date: "10:24 AM", unread: true, starred: false, attachments: true,
    body: `Hi team,

Please review the attached Q2 report before Thursday's all-hands meeting. Key metrics are down 3% from last quarter, but we're tracking ahead on new member acquisition.

Key takeaways:
• Revenue: $142,500 (↓3% QoQ)
• New members: 47 (↑12% QoQ)
• Churn rate: 2.1% (↓0.4% QoQ)

Let me know if you have questions.

— Bonnie`,
  },
  {
    id: 2, from: "Jese Leos", initials: "JL", subject: "Re: Dashboard redesign feedback",
    preview: "Looks great! The new color scheme aligns perfectly with the brand guidelines. One suggestion — the KPI cards could use a bit more...",
    date: "9:15 AM", unread: true, starred: true, attachments: false,
    body: `Looks great! The new color scheme aligns perfectly with the brand guidelines.

One suggestion — the KPI cards could use a bit more vertical padding on mobile. Otherwise this is exactly what we discussed in the sprint planning session.

Ship it!`,
  },
  {
    id: 3, from: "Leslie Livingston", initials: "LL", subject: "Invoice INV-2849 — payment confirmed",
    preview: "Your payment of $4,660.00 has been processed successfully. Your membership is active through...",
    date: "Yesterday", unread: false, starred: false, attachments: false,
    body: `Your payment of $4,660.00 has been processed successfully.

Your Diamond+ membership is now active through December 31, 2025.

Thank you for your continued membership.`,
  },
  {
    id: 4, from: "Roberta Casas", initials: "RC", subject: "Waitlist conversion — 3 new members",
    preview: "Three waitlist entries have been converted to active memberships this week. Deposit credits have been applied...",
    date: "Mon", unread: true, starred: false, attachments: true,
    body: `Three waitlist entries have been converted to active memberships this week.

Members converted:
• James Whitfield — Diamond
• Sarah Chen — Gold
• Marcus Rivera — Diamond+

Deposit credits have been applied to their first invoices. See attached for full details.`,
  },
];

export default function AdminMailingPage() {
  const [selected, setSelected] = useState(emails[0]);

  return (
    <PreviewShell variant="admin" title="Mailing">
      <div className="flex h-full overflow-hidden">

        {/* Folder sidebar */}
        <aside className="w-48 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
          <div className="p-4">
            <Button size="sm" className="w-full">
              <HiPencilAlt className="mr-2 h-4 w-4" />Compose
            </Button>
          </div>
          <nav className="flex-1 px-2 space-y-0.5">
            {folders.map((f) => (
              <button
                key={f.label}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  f.active ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium"
                           : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4" />
                  {f.label}
                </div>
                {f.count > 0 && (
                  <span className="text-xs bg-primary-600 text-white rounded-full px-1.5 py-0.5 leading-none">{f.count}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Email list */}
        <div className="w-72 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700">
            <TextInput placeholder="Search emails..." icon={HiSearch} sizing="sm" />
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
            {emails.map((email) => (
              <button
                key={email.id}
                onClick={() => setSelected(email)}
                className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                  selected.id === email.id ? "bg-primary-50 dark:bg-primary-900/10 border-l-2 border-primary-600" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar placeholderInitials={email.initials} rounded size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className={`text-sm truncate ${email.unread ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                        {email.from}
                      </span>
                      <span className="text-xs text-gray-400 shrink-0">{email.date}</span>
                    </div>
                    <p className={`text-xs truncate mb-1 ${email.unread ? "font-medium text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
                      {email.subject}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-2 leading-relaxed">{email.preview}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      {email.unread && <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />}
                      {email.starred && <HiStar className="h-3 w-3 text-yellow-400" />}
                      {email.attachments && <HiPaperClip className="h-3 w-3 text-gray-400" />}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Reading pane */}
        <div className="flex-1 bg-white dark:bg-gray-800 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">{selected.subject}</h2>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><HiStar className="h-4 w-4" /></button>
              <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><HiTrash className="h-4 w-4" /></button>
              <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><HiDotsVertical className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center gap-3 mb-6">
              <Avatar placeholderInitials={selected.initials} rounded size="md" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{selected.from}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">To: me · {selected.date}</p>
              </div>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {selected.body.split("\n").map((line, i) => (
                <p key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1">{line || <br />}</p>
              ))}
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700">
            <Button size="sm">
              <HiReply className="mr-2 h-4 w-4" />Reply
            </Button>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
