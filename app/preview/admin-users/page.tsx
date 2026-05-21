"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, TextInput, Select } from "flowbite-react";
import { HiSearch, HiPlus, HiDownload, HiStar } from "react-icons/hi";

const users = [
  { name: "Jose Leos",         email: "jose@scripps.com",     role: "Administrator", type: "PRO",  rating: 4.7, country: "United States", status: "Active",   avatar: "JL", color: "#6366f1" },
  { name: "Karen Gilman",      email: "karen@scripps.com",    role: "Viewer",        type: "PRO",  rating: 4.8, country: "Australia",      status: "Active",   avatar: "KG", color: "#8b5cf6" },
  { name: "Leslie Livingston", email: "leslie@scripps.com",   role: "Moderator",     type: "PRO",  rating: 4.8, country: "France",         status: "Inactive", avatar: "LL", color: "#f59e0b" },
  { name: "Michael McFall",    email: "michael@scripps.com",  role: "Viewer",        type: "Basic",rating: 4.2, country: "England",        status: "Active",   avatar: "MM", color: "#10b981" },
  { name: "Joseph McFall",     email: "joseph@scripps.com",   role: "Viewer",        type: "PRO",  rating: 4.3, country: "United States",  status: "Active",   avatar: "JM", color: "#3b82f6" },
  { name: "Karen Nelson",      email: "karenN@scripps.com",   role: "Moderator",     type: "PRO",  rating: 4.1, country: "Canada",         status: "Inactive", avatar: "KN", color: "#ec4899" },
  { name: "Bonnie Green",      email: "bonnie@scripps.com",   role: "Viewer",        type: "PRO",  rating: 2.3, country: "United States",  status: "Active",   avatar: "BG", color: "#14b8a6" },
  { name: "Michael Gough",     email: "mgough@scripps.com",   role: "Moderator",     type: "PRO",  rating: 5,   country: "France",         status: "Active",   avatar: "MG", color: "#f97316" },
  { name: "Neil Sims",         email: "neil@scripps.com",     role: "Administrator", type: "PRO",  rating: 4.5, country: "Canada",         status: "Active",   avatar: "NS", color: "#6366f1" },
  { name: "Robert Brown",      email: "rbrown@scripps.com",   role: "Viewer",        type: "PRO",  rating: 4.8, country: "Australia",      status: "Inactive", avatar: "RB", color: "#8b5cf6" },
  { name: "Alexander Mcfly",   email: "amcfly@scripps.com",   role: "Viewer",        type: "PRO",  rating: 4.9, country: "United States",  status: "Active",   avatar: "AM", color: "#0ea5e9" },
  { name: "Jane Leos",         email: "jane@scripps.com",     role: "Moderator",     type: "PRO",  rating: 2.3, country: "Australia",      status: "Inactive", avatar: "JL", color: "#d946ef" },
];

const roleColor: Record<string, string> = {
  Administrator: "indigo",
  Moderator: "warning",
  Viewer: "gray",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <HiStar className="h-3.5 w-3.5 text-yellow-400" />
      <span className="text-sm font-medium text-gray-900 dark:text-white">{rating}</span>
    </div>
  );
}

export default function AdminUsersPage() {
  return (
    <PreviewShell variant="admin" title="All Users">
      <div className="p-6 space-y-5">

        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">Platform</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Users</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">All Users</h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-sm text-gray-500 dark:text-gray-400">Show</span>
              {["All", "User Role", "Account Type", "Status", "Rating"].map((t, i) => (
                <button key={t} className={`px-3 py-1 rounded-lg text-xs font-medium ${i === 0 ? "bg-primary-600 text-white" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>{t}</button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 ml-auto">
              <TextInput placeholder="Search users..." icon={HiSearch} sizing="sm" className="w-48" />
              <Select sizing="sm" className="w-32"><option>Status</option><option>Active</option><option>Inactive</option></Select>
              <Select sizing="sm" className="w-28"><option>Type</option><option>PRO</option><option>Basic</option></Select>
              <Select sizing="sm" className="w-28"><option>Rating</option><option>5 stars</option><option>4+ stars</option></Select>
              <Select sizing="sm" className="w-36"><option>Country</option><option>United States</option><option>Canada</option><option>Australia</option></Select>
              <Button size="sm"><HiPlus className="mr-1.5 h-3.5 w-3.5" />Add new user</Button>
              <Select sizing="sm" className="w-28"><option>Actions</option><option>Edit</option><option>Delete</option></Select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 w-8"><Checkbox /></th>
                  {["User", "User Role", "Account Type", "Rating", "Country", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {users.map((u) => (
                  <tr key={u.email} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: u.color }}>{u.avatar}</div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white whitespace-nowrap">{u.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3"><Badge color={roleColor[u.role] as any} size="xs">{u.role}</Badge></td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{u.type}</td>
                    <td className="px-4 py-3"><StarRating rating={u.rating} /></td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">{u.country}</td>
                    <td className="px-4 py-3"><Badge color={u.status === "Active" ? "success" : "failure"} size="xs">{u.status}</Badge></td>
                    <td className="px-4 py-3">
                      <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline">Edit user</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total users: <span className="font-semibold text-gray-900 dark:text-white">1,567</span>
            </span>
            <Button color="alternative" size="sm">
              <HiDownload className="mr-1.5 h-3.5 w-3.5" />Download CSV
            </Button>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
