"use client";

import { PreviewShell } from "../PreviewShell";
import { Button, Badge } from "flowbite-react";
import { HiPlus, HiSearch, HiFilter, HiShare, HiAdjustments } from "react-icons/hi";

type Card = {
  title: string;
  desc: string;
  assignees: string[];
  colors: string[];
  due: string;
  dueColor: string;
  img?: boolean;
};

const columns: { id: string; label: string; cards: Card[] }[] = [
  {
    id: "todo", label: "To Do",
    cards: [
      { title: "Change charts javascript", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["KJ", "MG", "BG"], colors: ["#6366f1","#10b981","#f97316"], due: "5 days left", dueColor: "failure", img: true },
      { title: "Change homepage", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["KJ", "NS"], colors: ["#6366f1","#8b5cf6"], due: "7 days left", dueColor: "warning", img: true },
      { title: "Change charts javascript", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["MG", "LL", "KN"], colors: ["#f97316","#f59e0b","#ec4899"], due: "2 days left", dueColor: "failure" },
    ],
  },
  {
    id: "progress", label: "In Progress",
    cards: [
      { title: "Redesign tables card", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["KJ", "AM"], colors: ["#6366f1","#0ea5e9"], due: "4 days left", dueColor: "warning", img: true },
      { title: "Redesign tables card", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["RB", "JL", "KG"], colors: ["#8b5cf6","#d946ef","#8b5cf6"], due: "9 days left", dueColor: "success" },
    ],
  },
  {
    id: "done", label: "Done",
    cards: [
      { title: "Redesign tables card", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["NS", "BG"], colors: ["#6366f1","#14b8a6"], due: "3 days left", dueColor: "failure", img: true },
      { title: "Redesign tables card", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["JM", "MM", "LL"], colors: ["#3b82f6","#10b981","#f59e0b"], due: "12 days left", dueColor: "success" },
      { title: "Create JavaScript elements", desc: "In variables occuring the 873 you define Statsby variable. Each example of 'color-level' needs to be changed to 'color-user'.", assignees: ["KJ"], colors: ["#6366f1"], due: "8 days left", dueColor: "warning" },
    ],
  },
];

function KanbanCard({ card }: { card: Card }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4 space-y-3 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
      {card.img && (
        <div className="h-28 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
          <div className="h-full w-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs">Preview image</div>
        </div>
      )}
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{card.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-1.5">
          {card.assignees.map((a, i) => (
            <div key={i} className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: card.colors[i] }}>
              {a[0]}
            </div>
          ))}
        </div>
        <Badge color={card.dueColor as any} size="xs">{card.due}</Badge>
      </div>
    </div>
  );
}

export default function AdminKanbanPage() {
  return (
    <PreviewShell variant="admin" title="Kanban">
      <div className="p-6 space-y-5 h-full flex flex-col">

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mr-auto">
            <a href="#" className="hover:text-primary-600">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-primary-600">Project management</a>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Tasks</span>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><HiShare className="h-4 w-4" />Share</button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><HiFilter className="h-4 w-4" />Filter</button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><HiAdjustments className="h-4 w-4" />Group by: Status</button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><HiSearch className="h-4 w-4" />Search for tasks</button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Customize cards</button>
          </div>
        </div>

        {/* Board */}
        <div className="flex gap-4 overflow-x-auto flex-1 pb-4">
          {columns.map((col) => (
            <div key={col.id} className="flex-1 min-w-72 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{col.label}</h2>
                <button className="h-7 w-7 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <HiPlus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3 flex-1">
                {col.cards.map((card, i) => (
                  <KanbanCard key={i} card={card} />
                ))}
              </div>
              <button className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2">
                <HiPlus className="h-4 w-4" />Add new task
              </button>
            </div>
          ))}
        </div>

      </div>
    </PreviewShell>
  );
}
