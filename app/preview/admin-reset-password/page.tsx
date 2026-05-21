import { Button, Label, TextInput } from "flowbite-react";
import { HiLockClosed, HiArrowLeft } from "react-icons/hi";

export default function AdminResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-8 w-auto" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center">
              <HiLockClosed className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Set new password</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Your new password must be at least 8 characters and different from your previous one.
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

            {/* Password strength */}
            <div className="space-y-1.5">
              <p className="text-xs text-gray-500 dark:text-gray-400">Password strength</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={`flex-1 h-1.5 rounded-full ${n <= 3 ? "bg-yellow-400" : "bg-gray-200 dark:bg-gray-700"}`} />
                ))}
              </div>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">Medium — add symbols to strengthen</p>
            </div>

            <Button type="submit" className="w-full">Reset password</Button>
          </form>

          <a href="/preview/admin-signin" className="flex items-center justify-center gap-1.5 mt-5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <HiArrowLeft className="h-4 w-4" />Back to sign in
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          © 2025 Scripps Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}
