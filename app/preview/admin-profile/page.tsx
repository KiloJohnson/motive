"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Badge, Button, Tabs, TabsRef } from "flowbite-react";
import { useRef } from "react";
import { HiPencilAlt, HiLocationMarker, HiLink, HiCalendar, HiHeart, HiChatAlt, HiShare } from "react-icons/hi";

const activity = [
  { type: "comment", text: "Commented on Dashboard redesign PR", time: "2 hours ago", icon: HiChatAlt, color: "bg-blue-100 text-blue-600" },
  { type: "liked",   text: "Liked the Q2 sales report",          time: "5 hours ago", icon: HiHeart,   color: "bg-red-100 text-red-600" },
  { type: "shared",  text: "Shared the new onboarding flow",     time: "Yesterday",   icon: HiShare,   color: "bg-green-100 text-green-600" },
  { type: "comment", text: "Commented on kanban sprint review",  time: "2 days ago",  icon: HiChatAlt, color: "bg-blue-100 text-blue-600" },
  { type: "liked",   text: "Liked the PIMC architecture doc",    time: "3 days ago",  icon: HiHeart,   color: "bg-red-100 text-red-600" },
];

export default function AdminProfilePage() {
  const tabsRef = useRef<TabsRef>(null);

  return (
    <PreviewShell variant="admin" title="Profile">
      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {/* Cover + avatar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-primary-600 to-primary-800" />
          <div className="px-6 pb-6">
            <div className="flex items-end justify-between -mt-10 mb-4">
              <div className="relative">
                <Avatar placeholderInitials="KJ" rounded size="xl" className="ring-4 ring-white dark:ring-gray-800" />
                <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
              </div>
              <Button size="sm" color="alternative">
                <HiPencilAlt className="mr-1.5 h-4 w-4" />Edit profile
              </Button>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Kilo Johnson</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">UX Architect · Scripps Health</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1.5"><HiLocationMarker className="h-4 w-4" />San Diego, CA</span>
              <span className="flex items-center gap-1.5"><HiLink className="h-4 w-4" />scrippshealth.org</span>
              <span className="flex items-center gap-1.5"><HiCalendar className="h-4 w-4" />Joined January 2021</span>
            </div>
            <div className="flex gap-6">
              {[{ label: "Posts", value: "142" }, { label: "Following", value: "38" }, { label: "Followers", value: "247" }].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* About + skills */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">About</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                UX Architect at Scripps Health building Motive™ — the official design system for all Scripps digital products. Focused on bridging design and development at scale.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["Figma", "React", "Tailwind CSS", "Design Systems", "Accessibility", "UX Research"].map((s) => (
                  <Badge key={s} color="indigo" size="xs">{s}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Activity feed */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`p-2 rounded-lg shrink-0 ${a.color}`}>
                    <a.icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{a.text}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
