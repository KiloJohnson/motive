"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Button, TextInput } from "flowbite-react";
import { HiHeart, HiChatAlt, HiShare, HiPhotograph, HiPaperClip, HiEmojiHappy, HiSearch } from "react-icons/hi";

const posts = [
  {
    id: 1, initials: "BG", name: "Bonnie Green", role: "Product Manager", time: "2 hours ago",
    content: "Just wrapped the Q2 planning session. Really excited about the roadmap ahead — new dashboard features shipping in 6 weeks. Thanks team for the great input!",
    image: null, likes: 24, comments: 8, liked: true,
  },
  {
    id: 2, initials: "JL", name: "Jese Leos", role: "Lead Developer", time: "5 hours ago",
    content: "Huge win today — migrated the entire auth layer to JWT tokens with zero downtime. SSO is next. 🎉",
    image: null, likes: 47, comments: 15, liked: false,
  },
  {
    id: 3, initials: "LL", name: "Leslie Livingston", role: "UX Designer", time: "Yesterday",
    content: "Finished the new onboarding flow designs. The user research sessions really paid off — reduced the steps from 7 down to 4. Sharing the Figma link in Slack.",
    image: null, likes: 31, comments: 12, liked: false,
  },
  {
    id: 4, initials: "RC", name: "Roberta Casas", role: "Data Analyst", time: "2 days ago",
    content: "Monthly metrics are in. Conversion rate is up 4.8% after the landing page redesign. Churn dropped to 2.1% — best quarter since launch.",
    image: null, likes: 58, comments: 20, liked: true,
  },
];

const suggestedUsers = [
  { initials: "TL", name: "Thomas Lean",   role: "DevOps Engineer" },
  { initials: "JM", name: "Joseph McFall", role: "Backend Dev" },
  { initials: "KN", name: "Karen Nelson",  role: "QA Engineer" },
];

export default function AdminFeedPage() {
  return (
    <PreviewShell variant="admin" title="Feed">
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main feed */}
          <div className="lg:col-span-2 space-y-4">

            {/* Compose */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <Avatar placeholderInitials="KJ" rounded size="sm" />
                <textarea
                  placeholder="What's on your mind?"
                  rows={2}
                  className="flex-1 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 resize-none text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <HiPhotograph className="h-4 w-4" />Photo
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <HiPaperClip className="h-4 w-4" />File
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <HiEmojiHappy className="h-4 w-4" />
                  </button>
                </div>
                <Button size="xs">Post</Button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar placeholderInitials={post.initials} rounded size="sm" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{post.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.role} · {post.time}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{post.content}</p>
                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-3">
                  <button className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${post.liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}>
                    <HiHeart className="h-4 w-4" />{post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <HiChatAlt className="h-4 w-4" />{post.comments}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <HiShare className="h-4 w-4" />Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Search */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <TextInput placeholder="Search feed..." icon={HiSearch} sizing="sm" />
            </div>

            {/* Suggested */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">People you may know</p>
              <div className="space-y-3">
                {suggestedUsers.map((u) => (
                  <div key={u.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Avatar placeholderInitials={u.initials} rounded size="xs" />
                      <div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{u.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{u.role}</p>
                      </div>
                    </div>
                    <Button size="xs" color="alternative">Follow</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Trending topics</p>
              <div className="space-y-2">
                {["#Q2Planning", "#ProductUpdate", "#DesignSystem", "#ReactJS", "#Accessibility"].map((tag) => (
                  <a key={tag} href="#" className="block text-sm text-primary-700 dark:text-primary-400 hover:underline">{tag}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
