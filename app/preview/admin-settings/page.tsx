"use client";

import { PreviewShell } from "../PreviewShell";
import { Button, Label, TextInput, Select, Textarea, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { HiUser, HiLockClosed, HiBell, HiDesktopComputer, HiTrash } from "react-icons/hi";

const sections = [
  { id: "general",  label: "General",       icon: HiUser },
  { id: "password", label: "Password",      icon: HiLockClosed },
  { id: "notifs",   label: "Notifications", icon: HiBell },
  { id: "sessions", label: "Sessions",      icon: HiDesktopComputer },
  { id: "delete",   label: "Delete account",icon: HiTrash },
];

export default function AdminSettingsPage() {
  const [active, setActive] = useState("general");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);
  const [marketingNotifs, setMarketingNotifs] = useState(true);

  return (
    <PreviewShell variant="admin" title="Settings">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex gap-6">

          {/* Settings nav */}
          <aside className="w-44 shrink-0">
            <nav className="space-y-0.5">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active === s.id
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <s.icon className="h-4 w-4 shrink-0" />
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Settings content */}
          <div className="flex-1">

            {active === "general" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">General Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="s-first" className="mb-2 block dark:text-white">First Name</Label>
                    <TextInput id="s-first" defaultValue="Kilo" />
                  </div>
                  <div>
                    <Label htmlFor="s-last" className="mb-2 block dark:text-white">Last Name</Label>
                    <TextInput id="s-last" defaultValue="Johnson" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="s-email" className="mb-2 block dark:text-white">Email</Label>
                    <TextInput id="s-email" defaultValue="kilo@scrippshealth.org" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="s-role" className="mb-2 block dark:text-white">Role</Label>
                    <TextInput id="s-role" defaultValue="UX Architect" />
                  </div>
                  <div>
                    <Label htmlFor="s-org" className="mb-2 block dark:text-white">Organization</Label>
                    <TextInput id="s-org" defaultValue="Scripps Health" />
                  </div>
                  <div>
                    <Label htmlFor="s-country" className="mb-2 block dark:text-white">Country</Label>
                    <Select id="s-country">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="s-tz" className="mb-2 block dark:text-white">Timezone</Label>
                    <Select id="s-tz">
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Eastern Time (ET)</option>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="s-bio" className="mb-2 block dark:text-white">Bio</Label>
                    <Textarea id="s-bio" defaultValue="UX Architect at Scripps Health building Motive™ — the official design system for all Scripps digital products." rows={3} className="text-sm" />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="submit">Save changes</Button>
                  <Button color="alternative">Cancel</Button>
                </div>
              </div>
            )}

            {active === "password" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="s-current" className="mb-2 block dark:text-white">Current Password</Label>
                    <TextInput id="s-current" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <Label htmlFor="s-new" className="mb-2 block dark:text-white">New Password</Label>
                    <TextInput id="s-new" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <Label htmlFor="s-confirm" className="mb-2 block dark:text-white">Confirm New Password</Label>
                    <TextInput id="s-confirm" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <Button type="submit">Update password</Button>
              </div>
            )}

            {active === "notifs" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
                <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-700">
                  {[
                    { label: "Email notifications", desc: "Receive email updates for new activity", val: emailNotifs, set: setEmailNotifs },
                    { label: "SMS notifications",   desc: "Receive text messages for urgent alerts", val: smsNotifs,   set: setSmsNotifs },
                    { label: "Marketing emails",    desc: "Product updates and announcements",       val: marketingNotifs, set: setMarketingNotifs },
                  ].map((n) => (
                    <div key={n.label} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{n.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.desc}</p>
                      </div>
                      <ToggleSwitch checked={n.val} onChange={n.set} label="" />
                    </div>
                  ))}
                </div>
                <Button type="submit">Save preferences</Button>
              </div>
            )}

            {(active === "sessions" || active === "delete") && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {active === "sessions" ? "Active Sessions" : "Delete Account"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {active === "sessions"
                    ? "Manage devices where you're currently logged in."
                    : "Permanently delete your account and all associated data."}
                </p>
                {active === "sessions" && (
                  <div className="mt-4 space-y-3">
                    {[
                      { device: "MacBook Pro — Chrome", location: "San Diego, CA", active: true },
                      { device: "iPhone 15 — Safari",   location: "San Diego, CA", active: false },
                    ].map((s) => (
                      <div key={s.device} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{s.device}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{s.location}</p>
                        </div>
                        {s.active
                          ? <span className="text-xs text-green-600 dark:text-green-400 font-medium">Current</span>
                          : <Button size="xs" color="failure" outline>Revoke</Button>
                        }
                      </div>
                    ))}
                  </div>
                )}
                {active === "delete" && (
                  <div className="mt-4">
                    <Button color="failure">Delete my account</Button>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
