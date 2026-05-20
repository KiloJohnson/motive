"use client";

import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-8">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

export default function CreateFormsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Create Forms</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Full-page form layouts for adding new records. Two-column grids with labels, inputs, selects,
          and textareas. Pair with a Create Modal when you need the form inline without a page transition.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/create-forms/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — add a new product"
          code={`<form>
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div className="sm:col-span-2">
      <Label htmlFor="name" className="mb-2 block">Product Name</Label>
      <TextInput id="name" placeholder="Type product name" required />
    </div>
    <div>
      <Label htmlFor="brand" className="mb-2 block">Brand</Label>
      <TextInput id="brand" placeholder="Product brand" required />
    </div>
    <div>
      <Label htmlFor="price" className="mb-2 block">Price</Label>
      <TextInput id="price" placeholder="$2999" type="number" required />
    </div>
    <div>
      <Label htmlFor="category" className="mb-2 block">Category</Label>
      <Select id="category">
        <option>Select category</option>
        <option value="TV">TV/Monitors</option>
        <option value="PC">PC</option>
      </Select>
    </div>
    <div>
      <Label htmlFor="weight" className="mb-2 block">Item Weight (kg)</Label>
      <TextInput id="weight" placeholder="12" type="number" required />
    </div>
    <div className="sm:col-span-2">
      <Label htmlFor="description" className="mb-2 block">Description</Label>
      <Textarea id="description" placeholder="Your description here" rows={8} />
    </div>
  </div>
  <Button type="submit" className="mt-6">Add product</Button>
</form>`}
        >
          <div className="mx-auto max-w-2xl bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
            <form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="cf-name" className="mb-2 block dark:text-white">Product Name</Label>
                  <TextInput id="cf-name" placeholder="Type product name" required />
                </div>
                <div>
                  <Label htmlFor="cf-brand" className="mb-2 block dark:text-white">Brand</Label>
                  <TextInput id="cf-brand" placeholder="Product brand" required />
                </div>
                <div>
                  <Label htmlFor="cf-price" className="mb-2 block dark:text-white">Price</Label>
                  <TextInput id="cf-price" placeholder="$2999" type="number" required />
                </div>
                <div>
                  <Label htmlFor="cf-cat" className="mb-2 block dark:text-white">Category</Label>
                  <Select id="cf-cat">
                    <option>Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cf-weight" className="mb-2 block dark:text-white">Item Weight (kg)</Label>
                  <TextInput id="cf-weight" placeholder="12" type="number" required />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cf-desc" className="mb-2 block dark:text-white">Description</Label>
                  <Textarea id="cf-desc" placeholder="Your description here" rows={5} className="text-sm" />
                </div>
              </div>
              <Button type="submit" className="mt-6">Add product</Button>
            </form>
          </div>
        </BlockPreview>

        <BlockPreview
          label="User — add a new user"
          code={`<form>
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div>
      <Label htmlFor="first-name" className="mb-2 block">First Name</Label>
      <TextInput id="first-name" placeholder="First name" required />
    </div>
    <div>
      <Label htmlFor="last-name" className="mb-2 block">Last Name</Label>
      <TextInput id="last-name" placeholder="Last name" required />
    </div>
    <div>
      <Label htmlFor="password" className="mb-2 block">Password</Label>
      <TextInput id="password" type="password" placeholder="•••••••••" required />
    </div>
    <div>
      <Label htmlFor="confirm-password" className="mb-2 block">Confirm password</Label>
      <TextInput id="confirm-password" type="password" placeholder="•••••••••" required />
    </div>
    <div className="sm:col-span-2">
      <Label htmlFor="biography" className="mb-2 block">Biography</Label>
      <Textarea id="biography" placeholder="Your description here" rows={8} />
    </div>
  </div>
  <Button type="submit" className="mt-6">Add user</Button>
</form>`}
        >
          <div className="mx-auto max-w-2xl bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new user</h2>
            <form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <Label htmlFor="uf-first" className="mb-2 block dark:text-white">First Name</Label>
                  <TextInput id="uf-first" placeholder="First name" required />
                </div>
                <div>
                  <Label htmlFor="uf-last" className="mb-2 block dark:text-white">Last Name</Label>
                  <TextInput id="uf-last" placeholder="Last name" required />
                </div>
                <div>
                  <Label htmlFor="uf-pw" className="mb-2 block dark:text-white">Password</Label>
                  <TextInput id="uf-pw" type="password" placeholder="•••••••••" required />
                </div>
                <div>
                  <Label htmlFor="uf-cpw" className="mb-2 block dark:text-white">Confirm password</Label>
                  <TextInput id="uf-cpw" type="password" placeholder="•••••••••" required />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="uf-bio" className="mb-2 block dark:text-white">Biography</Label>
                  <Textarea id="uf-bio" placeholder="Your description here" rows={5} className="text-sm" />
                </div>
              </div>
              <Button type="submit" className="mt-6">Add user</Button>
            </form>
          </div>
        </BlockPreview>

      </section>
    </div>
  );
}
