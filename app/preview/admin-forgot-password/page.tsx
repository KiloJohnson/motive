"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { HiMail, HiArrowLeft } from "react-icons/hi";

export default function AdminForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-8 w-auto" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center">
              <HiMail className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Forgot password?</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            No worries — enter your email and we'll send you reset instructions.
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-2 block dark:text-white">Email</Label>
              <TextInput id="email" type="email" placeholder="name@company.com" icon={HiMail} required />
            </div>
            <Button type="submit" className="w-full">Send reset link</Button>
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
