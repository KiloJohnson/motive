"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { PreviewShell } from "../PreviewShell";
import { HiLockClosed } from "react-icons/hi";

export default function AdminResetPasswordPage() {
  return (
    <PreviewShell title="Auth" variant="admin">
    <div className="min-h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src="/logos/scripps_light.svg" alt="Scripps Health" className="h-8 w-auto dark:hidden" />
          <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-8 w-auto hidden dark:block" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">Reset password</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Choose a strong new password for your account.
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">New password</Label>
              <TextInput id="password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>
            <div>
              <Label htmlFor="confirm" className="mb-2 block dark:text-white">Confirm new password</Label>
              <TextInput id="confirm" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>

            <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 pt-1">
              <li className="flex items-center gap-1.5"><span className="text-gray-300 dark:text-gray-600">•</span> At least 8 characters</li>
              <li className="flex items-center gap-1.5"><span className="text-gray-300 dark:text-gray-600">•</span> One uppercase letter</li>
              <li className="flex items-center gap-1.5"><span className="text-gray-300 dark:text-gray-600">•</span> One number or special character</li>
            </ul>

            <Button type="submit" className="w-full">Set new password</Button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
            <a href="/preview/admin-signin" className="text-primary-700 dark:text-primary-400 font-medium hover:underline">
              ← Back to sign in
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
