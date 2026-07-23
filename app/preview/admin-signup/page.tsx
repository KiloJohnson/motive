"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { PreviewShell } from "../PreviewShell";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";

export default function AdminSignUpPage() {
  return (
    <PreviewShell title="Auth" variant="admin">
    <div className="min-h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-6">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_light.svg`} alt="Scripps Health" className="h-8 w-auto dark:hidden" />
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`} alt="Scripps Health" className="h-8 w-auto hidden dark:block" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">Create account</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Start your free trial — no credit card required
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="first" className="mb-2 block dark:text-white">First name</Label>
                <TextInput id="first" placeholder="Bonnie" icon={HiUser} required />
              </div>
              <div>
                <Label htmlFor="last" className="mb-2 block dark:text-white">Last name</Label>
                <TextInput id="last" placeholder="Green" required />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block dark:text-white">Email</Label>
              <TextInput id="email" type="email" placeholder="name@company.com" icon={HiMail} required />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">Password</Label>
              <TextInput id="password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>
            <div>
              <Label htmlFor="confirm" className="mb-2 block dark:text-white">Confirm password</Label>
              <TextInput id="confirm" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-0.5" required />
              <Label htmlFor="terms" className="text-sm text-gray-500 dark:text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-primary-700 dark:text-primary-400 hover:underline font-medium">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary-700 dark:text-primary-400 hover:underline font-medium">Privacy Policy</a>
              </Label>
            </div>
            <Button type="submit" className="w-full">Create account</Button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
            Already have an account?{" "}
            <a href="/preview/admin-signin" className="text-primary-700 dark:text-primary-400 font-medium hover:underline">
              Sign in
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
