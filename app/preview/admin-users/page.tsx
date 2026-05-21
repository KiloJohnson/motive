"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Badge, Button, Checkbox, TextInput, Select } from "flowbite-react";
import { HiSearch, HiPlus, HiPencilAlt, HiTrash, HiDotsVertical, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const users = [
  { id: 1, name: "Neil Sims",          email: "neil@company.com",    role: "Administrator", country: "United States", status: "Active",   initials: "NS" },
  { id: 2, name: "Bonnie Green",        email: "bonnie@company.com",  role: "Editor",        country: "Australia",     status: "Active",   initials: "BG" },
  { id: 3, name: "Jese Leos",          email: "jese@company.com",    role: "Viewer",        country: "Italy",         status: "Inactive", initials: "JL" },
  { id: 4, name: "Leslie Livingston",   email: "leslie@company.com",  role: "Editor",        country: "Canada",        status: "Active",   initials: "LL" },
  { id: 5, name: "Roberta Casas",      email: "roberta@company.com", role: "Administrator", country: "Spain",         status: "Active",   initials: "RC" },
  { id: 6, name: "Thomas Lean",        email: "thomas@company.com",  role: "Viewer",        country: "Germany",       status: "Inactive", initials: "TL" },
  { id: 7, name: "Karen Nelson",       email: "karen@company.com",   role: "Editor",        country: "France",        status: "Active",   initials: "KN" },
  { id: 8, name: "Joseph McFall",      email: "joseph@company.com",  role: "Viewer",        country: "Mexico",        status: "Active",   initials: "JM" },
];

export default function AdminUsersPage() {
  return (
    <PreviewShell variant="admin" title="Users">
      <div className="p-6 space-y-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">All Users</h1>
          <Button size="sm">
            <HiPlus className="mr-1.5 h-4 w-4" />Add user
          </Button>
        </div>

        {/* Table card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <TextInput placeholder="Search users..." icon={HiSearch} sizing="sm" className="w-64" />
              <Select sizing="sm" className="w-32">
                <option>All roles</option>
                <option>Administrator</option>
                <option>Editor</option>
                <option>Viewer</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button color="alternative" size="sm">Export CSV</Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3 w-8">
                    <Checkbox />
                  </th>
                  {["Name", "Role", "Country", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3">
                      <Checkbox />
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar placeholderInitials={user.initials} rounded size="sm" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{user.role}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{user.country}</td>
                    <td className="px-5 py-3">
                      <Badge color={user.status === "Active" ? "success" : "gray"} size="xs">{user.status}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600"><HiPencilAlt className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-500"><HiTrash className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600"><HiDotsVertical className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing <strong className="text-gray-900 dark:text-white">1-8</strong> of <strong className="text-gray-900 dark:text-white">2,340</strong>
            </span>
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40">
                <HiChevronLeft className="h-4 w-4" />Prev
              </button>
              {[1,2,3].map((n) => (
                <button key={n} className={`w-8 h-8 rounded-lg text-sm ${n === 1 ? "bg-primary-600 text-white font-medium" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                Next<HiChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
