"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { PreviewShell } from "../PreviewShell";
import { HiMail, HiLockClosed } from "react-icons/hi";

export default function AdminSignInPage() {
  return (
    <PreviewShell title="Auth" variant="admin">
    <div className="min-h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logos/scripps_light.svg" alt="Scripps Health" className="h-8 w-auto dark:hidden" />
          <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-8 w-auto hidden dark:block" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">Sign in</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Enter your credentials to access Admin
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-2 block dark:text-white">Email</Label>
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                icon={HiMail}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">Password</Label>
              <TextInput
                id="password"
                type="password"
                placeholder="••••••••"
                icon={HiLockClosed}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-primary-700 dark:text-primary-400 hover:underline font-medium">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-gray-800 px-3 text-xs text-gray-400">or</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-primary-700 dark:text-primary-400 font-medium hover:underline">
              Create one
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
