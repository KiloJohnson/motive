"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Badge, Button } from "flowbite-react";
import { HiPlus, HiPaperClip, HiChatAlt, HiDotsHorizontal, HiClock } from "react-icons/hi";

type Card = {
  id: string;
  title: string;
  label?: { text: string; color: string };
  attachments?: number;
  comments?: number;
  due?: string;
  initials: string[];
};

const columns: { id: string; title: string; count: number; cards: Card[] }[] = [
  {
    id: "todo", title: "To Do", count: 3,
    cards: [
      { id: "t1", title: "Update user onboarding flow with new brand guidelines", label: { text: "Design", color: "bg-purple-100 text-purple-700" }, attachments: 2, comments: 4, due: "Apr 30", initials: ["KJ", "LM"] },
      { id: "t2", title: "Migrate legacy authentication to JWT tokens", label: { text: "Backend", color: "bg-blue-100 text-blue-700" }, comments: 6, initials: ["RC"] },
      { id: "t3", title: "Write Q2 product roadmap documentation", label: { text: "Docs", color: "bg-gray-100 text-gray-700" }, attachments: 1, due: "May 5", initials: ["BG", "TL"] },
    ],
  },
  {
    id: "inprogress", title: "In Progress", count: 2,
    cards: [
      { id: "p1", title: "Build admin dashboard analytics overview page", label: { text: "Feature", color: "bg-green-100 text-green-700" }, attachments: 3, comments: 12, due: "Apr 28", initials: ["KJ"] },
      { id: "p2", title: "Integrate Orbital payment gateway for subscription billing", label: { text: "Backend", color: "bg-blue-100 text-blue-700" }, comments: 8, due: "May 1", initials: ["JM", "RC"] },
    ],
  },
  {
    id: "review", title: "In Review", count: 2,
    cards: [
      { id: "r1", title: "Redesign member profile page — mobile responsive", label: { text: "Design", color: "bg-purple-100 text-purple-700" }, attachments: 5, comments: 9, initials: ["LM", "KJ"] },
      { id: "r2", title: "Add CSV export to invoices and payment reports", label: { text: "Feature", color: "bg-green-100 text-green-700" }, comments: 3, due: "Apr 25", initials: ["BG"] },
    ],
  },
  {
    id: "done", title: "Done", count: 3,
    cards: [
      { id: "d1", title: "Set up Elasticsearch logging with Kibana dashboard", label: { text: "DevOps", color: "bg-orange-100 text-orange-700" }, attachments: 1, comments: 5, initials: ["TL"] },
      { id: "d2", title: "WCAG 2.1 AA accessibility audit and fixes", label: { text: "QA", color: "bg-red-100 text-red-700" }, comments: 14, initials: ["KJ", "LM", "RC"] },
      { id: "d3", title: "Configure IIS deployment pipeline for React builds", label: { text: "DevOps", color: "bg-orange-100 text-orange-700" }, attachments: 2, comments: 7, initials: ["JM"] },
    ],
  },
];

const colorDot: Record<string, string> = {
  "To Do": "bg-gray-400",
  "In Progress": "bg-blue-500",
  "In Review": "bg-yellow-400",
  "Done": "bg-green-500",
};

export default function AdminKanbanPage() {
  return (
    <PreviewShell variant="admin" title="Kanban">
      <div className="p-6 h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Project Board</h1>
          <Button size="sm">
            <HiPlus className="mr-1.5 h-4 w-4" />New card
          </Button>
        </div>

        {/* Board */}
        <div className="flex gap-5 overflow-x-auto pb-4">
          {columns.map((col) => (
            <div key={col.id} className="flex-shrink-0 w-72">

              {/* Column header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${colorDot[col.title]}`} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{col.title}</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5 font-medium">{col.count}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <HiDotsHorizontal className="h-4 w-4" />
                </button>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {col.cards.map((card) => (
                  <div key={card.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow">
                    {card.label && (
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${card.label.color}`}>
                        {card.label.text}
                      </span>
                    )}
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-snug mb-3">{card.title}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {card.initials.map((init, i) => (
                          <Avatar key={i} placeholderInitials={init} rounded size="xs" className="border-2 border-white dark:border-gray-800" />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                        {card.due && (
                          <span className="flex items-center gap-1"><HiClock className="h-3.5 w-3.5" />{card.due}</span>
                        )}
                        {card.attachments && (
                          <span className="flex items-center gap-1"><HiPaperClip className="h-3.5 w-3.5" />{card.attachments}</span>
                        )}
                        {card.comments && (
                          <span className="flex items-center gap-1"><HiChatAlt className="h-3.5 w-3.5" />{card.comments}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add card button */}
                <button className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-400 dark:text-gray-500 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border border-dashed border-gray-200 dark:border-gray-700">
                  <HiPlus className="h-4 w-4" />Add a card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}
