"use client";

import { PreviewShell } from "../PreviewShell";
import { Button, Label, TextInput, Select, Textarea, ToggleSwitch, Checkbox } from "flowbite-react";
import { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";

export default function AdminSettingsPage() {
  const [linkedGithub, setLinkedGithub] = useState(true);
  const [linkedGoogle, setLinkedGoogle] = useState(true);
  const [linkedMailchimp, setLinkedMailchimp] = useState(false);
  const [notifFlowbite, setNotifFlowbite] = useState(true);
  const [notifActivity, setNotifActivity] = useState(true);
  const [notifPush, setNotifPush] = useState(false);
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifMeetups, setNotifMeetups] = useState(true);
  const [subNewsletter, setSubNewsletter] = useState(true);
  const [subProducts, setSubProducts] = useState(true);

  return (
    <PreviewShell variant="admin" title="Settings">
      <div className="p-6 space-y-6 max-w-6xl mx-auto">

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>

        {/* Row 1 — Account + Notifications */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* Account */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Account</h2>

            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-bold">KJ</div>
                <button className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm">
                  <HiOutlineCamera className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              <div className="flex gap-2">
                <Button size="xs">Upload</Button>
                <Button size="xs" color="alternative">Remove</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="a-first" className="mb-2 block dark:text-white text-sm">First name*</Label>
                <TextInput id="a-first" defaultValue="Kilo" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-last" className="mb-2 block dark:text-white text-sm">Last name*</Label>
                <TextInput id="a-last" defaultValue="Johnson" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-email" className="mb-2 block dark:text-white text-sm">Your email*</Label>
                <TextInput id="a-email" type="email" defaultValue="kilo@scrippshealth.org" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-phone" className="mb-2 block dark:text-white text-sm">Phone number</Label>
                <TextInput id="a-phone" type="tel" defaultValue="+1 (619) 555-0100" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-username" className="mb-2 block dark:text-white text-sm">Username</Label>
                <TextInput id="a-username" defaultValue="kilo.johnson" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-tz" className="mb-2 block dark:text-white text-sm">Timezone</Label>
                <Select id="a-tz" sizing="sm">
                  <option>GMT-8:00 Pacific Time (US &amp; Ca)</option>
                  <option>GMT-7:00 Mountain Time</option>
                  <option>GMT-5:00 Eastern Time</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="a-username2" className="mb-2 block dark:text-white text-sm">Username ID</Label>
                <TextInput id="a-username2" defaultValue="@kilojohnson" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="a-type" className="mb-2 block dark:text-white text-sm">Account type</Label>
                <Select id="a-type" sizing="sm">
                  <option>Choose your account type</option>
                  <option>Administrator</option>
                  <option>Moderator</option>
                  <option>Viewer</option>
                </Select>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Link your account to your profile information.
            </p>

            {/* Linked accounts */}
            <div className="space-y-3">
              {[
                { name: "GitHub", desc: "Integrate your account for GitHub", on: linkedGithub, set: setLinkedGithub, color: "#24292e" },
                { name: "Google", desc: "Integrate your account with your Google apps", on: linkedGoogle, set: setLinkedGoogle, color: "#4285f4" },
                { name: "Mailchimp", desc: "Messages that you share with your customers, such as emails or advertisements.", on: linkedMailchimp, set: setLinkedMailchimp, color: "#ffe01b" },
              ].map((l) => (
                <div key={l.name} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/40">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: l.color }}>
                      {l.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{l.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs leading-tight">{l.desc}</p>
                    </div>
                  </div>
                  <ToggleSwitch checked={l.on} onChange={l.set} label="" />
                </div>
              ))}
            </div>

            <Button>Save changes</Button>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>

            {/* Alerts */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Alerts &amp; Notifications</h3>
                <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Select all</button>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Flowbite Communications", desc: "Get Flowbite news, announcements, and product updates.", on: notifFlowbite, set: setNotifFlowbite },
                  { label: "Account Activity", desc: "Get important notifications about your account's activity you may have missed.", on: notifActivity, set: setNotifActivity },
                  { label: "Mobile push notifications", desc: "Receive push notifications on your mobile phone or tablet.", on: notifPush, set: setNotifPush },
                  { label: "Email notification", desc: "Get notified whenever company requires your attention.", on: notifEmail, set: setNotifEmail },
                ].map((n) => (
                  <div key={n.label} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{n.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{n.desc}</p>
                    </div>
                    <ToggleSwitch checked={n.on} onChange={n.set} label="" className="shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Meetups */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Meetups near me</h3>
                <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Select all</button>
              </div>
              <div className="space-y-2">
                {["Someone mentions me", "Someone adds me as a collaborator on one of their projects", "Someone invites me to a team from an invitation", "Anyone follows me", "Someone accepts my invitation"].map((item) => (
                  <label key={item} className="flex items-center gap-2.5 cursor-pointer">
                    <Checkbox defaultChecked className="shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Subscribe me to</h3>
                <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Select all</button>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Weekly newsletter", desc: "Tips and how-tos for Flowbite and Tailwind CSS", checked: subNewsletter, set: setSubNewsletter },
                  { label: "Products", desc: "A product has been created, published, or deleted.", checked: subProducts, set: setSubProducts },
                  { label: "Flowbite community", desc: "Flowbite news, design ideas & community highlights" },
                  { label: "Flowbite jobs", desc: "Friday digest, Friday curated Flowbite project opportunities" },
                ].map((s) => (
                  <label key={s.label} className="flex items-start gap-2.5 cursor-pointer">
                    <Checkbox defaultChecked={s.checked ?? false} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{s.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{s.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button>Save changes</Button>
          </div>
        </div>

        {/* General Information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">General information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="g-name" className="mb-2 block dark:text-white text-sm">Your name</Label>
              <TextInput id="g-name" defaultValue="Kilo Johnson" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-address" className="mb-2 block dark:text-white text-sm">Full address*</Label>
              <TextInput id="g-address" defaultValue="114 Scripps Way, San Diego, CA 92037" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-bio" className="mb-2 block dark:text-white text-sm">Biography</Label>
              <TextInput id="g-bio" defaultValue="Hello, my name is Kilo Johnson." sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-zip" className="mb-2 block dark:text-white text-sm">ZIP/Postal code</Label>
              <TextInput id="g-zip" defaultValue="92037" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-org" className="mb-2 block dark:text-white text-sm">Your organization</Label>
              <TextInput id="g-org" defaultValue="Scripps Health LLC" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-country" className="mb-2 block dark:text-white text-sm">Country</Label>
              <Select id="g-country" sizing="sm">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="g-dept" className="mb-2 block dark:text-white text-sm">Department</Label>
              <TextInput id="g-dept" defaultValue="Marketing" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-city" className="mb-2 block dark:text-white text-sm">Town/City*</Label>
              <TextInput id="g-city" defaultValue="San Diego" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="g-type" className="mb-2 block dark:text-white text-sm">Account Type ID</Label>
              <Select id="g-type" sizing="sm">
                <option>Choose an account type</option>
                <option>Administrator</option>
                <option>Staff</option>
              </Select>
            </div>
          </div>
          <Button className="mt-5">Save changes</Button>
        </div>

        {/* Social */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Social</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Facebook", placeholder: "Enter your Facebook account" },
              { label: "Dribbble", placeholder: "Enter your Dribbble account" },
              { label: "Twitter", placeholder: "Enter your Twitter account" },
              { label: "Behance", placeholder: "Enter your Behance account" },
              { label: "Github", placeholder: "Enter your GitHub account" },
              { label: "Pinterest", placeholder: "Enter your Pinterest account" },
              { label: "Instagram", placeholder: "Enter your Instagram account" },
              { label: "TikTok", placeholder: "Enter your TikTok account" },
            ].map((s) => (
              <div key={s.label}>
                <Label htmlFor={`s-${s.label}`} className="mb-2 block dark:text-white text-sm">{s.label}</Label>
                <TextInput id={`s-${s.label}`} placeholder={s.placeholder} sizing="sm" />
              </div>
            ))}
          </div>
          <Button className="mt-5">Save changes</Button>
        </div>

        {/* Password */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="p-current" className="mb-2 block dark:text-white text-sm">Current password</Label>
                <TextInput id="p-current" type="password" placeholder="Enter your current password" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="p-new" className="mb-2 block dark:text-white text-sm">Your new password</Label>
                <TextInput id="p-new" type="password" placeholder="Enter your new password" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="p-confirm" className="mb-2 block dark:text-white text-sm">Confirm new password</Label>
                <TextInput id="p-confirm" type="password" placeholder="Confirm your new password" sizing="sm" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">Password requirements:</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />At least 10 characters (and up to 100 characters)</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />At least one lowercase character</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />Inclusion of at least one special character, e.g., ! @ # ?</li>
                <li className="flex items-center gap-2 text-green-600 dark:text-green-400"><span className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />Significantly different from your previous password</li>
              </ul>
            </div>
          </div>
          <Button className="mt-5">Save all</Button>
        </div>

      </div>
    </PreviewShell>
  );
}
