"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { PreviewShell } from "../PreviewShell";
import { HiLockClosed } from "react-icons/hi";

export default function AdminProfileLockPage() {
  return (
    <PreviewShell title="Auth" variant="admin">
    <div className="min-h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_light.svg`} alt="Scripps Health" className="h-8 w-auto dark:hidden" />
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`} alt="Scripps Health" className="h-8 w-auto hidden dark:block" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">

          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-bold mb-3 shadow-sm">
              KJ
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">Kilo Johnson</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">kilo@scrippshealth.org</p>
          </div>

          <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">Session locked</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Enter your password to continue.
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">Password</Label>
              <TextInput id="password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>
            <Button type="submit" className="w-full">Unlock</Button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
            Not you?{" "}
            <a href="/preview/admin-signin" className="text-primary-700 dark:text-primary-400 font-medium hover:underline">
              Sign in with a different account
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          © 2025 Scripps Health. All rights reserved.
        </p>
      </div>
    </div>
    </PreviewShell>
  );
}
