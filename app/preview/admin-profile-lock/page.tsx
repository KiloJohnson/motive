import { Button, Label, TextInput } from "flowbite-react";
import { HiLockClosed } from "react-icons/hi";
import { Avatar } from "flowbite-react";

export default function AdminProfileLockPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-8 w-auto" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">

          {/* Locked user */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-3">
              <Avatar placeholderInitials="KJ" rounded size="lg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-900 dark:bg-gray-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                <HiLockClosed className="h-3 w-3 text-white" />
              </div>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Kilo Johnson</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">kilo@scrippshealth.org</p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-5">
            Your session has been locked. Re-enter your password to continue.
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">Password</Label>
              <TextInput id="password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>
            <Button type="submit" className="w-full">Unlock</Button>
          </form>

          <div className="flex items-center justify-between mt-5">
            <a href="/preview/admin-forgot-password" className="text-sm text-primary-700 dark:text-primary-400 hover:underline">
              Forgot password?
            </a>
            <a href="/preview/admin-signin" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
              Switch account
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          © 2025 Scripps Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}
