"use client";

import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { HiTrash } from "react-icons/hi";

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

export default function UpdateFormsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Update Forms</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Edit form layouts matching the Create Forms pattern — consistent data entry experience.
          Pre-populated fields with current values. Includes a Delete action alongside the save button.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/update-forms/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — update product"
          code={`<form>
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div className="sm:col-span-2">
      <Label htmlFor="name" className="mb-2 block">Product Name</Label>
      <TextInput id="name" defaultValue='Apple iMac 27"' required />
    </div>
    <div>
      <Label htmlFor="brand" className="mb-2 block">Brand</Label>
      <TextInput id="brand" defaultValue="Apple" required />
    </div>
    <div>
      <Label htmlFor="price" className="mb-2 block">Price</Label>
      <TextInput id="price" defaultValue="2999" type="number" required />
    </div>
    <div>
      <Label htmlFor="category" className="mb-2 block">Category</Label>
      <Select id="category"><option selected value="EC">Electronics</option>...</Select>
    </div>
    <div className="sm:col-span-2">
      <Textarea id="description" defaultValue="Standard glass, 3.8GHz 8-core..." rows={8} />
    </div>
  </div>
  <div className="mt-6 flex items-center space-x-4">
    <Button type="submit">Update product</Button>
    <Button color="failure" outline>Delete</Button>
  </div>
</form>`}
        >
          <div className="mx-auto max-w-2xl bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
            <form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="up-name" className="mb-2 block dark:text-white">Product Name</Label>
                  <TextInput id="up-name" defaultValue='Apple iMac 27"' required />
                </div>
                <div>
                  <Label htmlFor="up-brand" className="mb-2 block dark:text-white">Brand</Label>
                  <TextInput id="up-brand" defaultValue="Apple" required />
                </div>
                <div>
                  <Label htmlFor="up-price" className="mb-2 block dark:text-white">Price</Label>
                  <TextInput id="up-price" defaultValue="2999" type="number" required />
                </div>
                <div>
                  <Label htmlFor="up-cat" className="mb-2 block dark:text-white">Category</Label>
                  <Select id="up-cat">
                    <option value="EC">Electronics</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="up-weight" className="mb-2 block dark:text-white">Item Weight (kg)</Label>
                  <TextInput id="up-weight" defaultValue="15" type="number" required />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="up-desc" className="mb-2 block dark:text-white">Description</Label>
                  <Textarea
                    id="up-desc"
                    defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage."
                    rows={5}
                    className="text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <Button type="submit">Update product</Button>
                <Button color="failure" outline>
                  <HiTrash className="-ml-1 mr-1 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </BlockPreview>

        <BlockPreview
          label="User — update user"
          code={`<form>
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div>
      <Label htmlFor="first-name" className="mb-2 block">First Name</Label>
      <TextInput id="first-name" defaultValue="Helene" required />
    </div>
    <div>
      <Label htmlFor="last-name" className="mb-2 block">Last Name</Label>
      <TextInput id="last-name" defaultValue="Engels" required />
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
      <Textarea id="biography" defaultValue="Hello, I'm Helene Engels..." rows={8} />
    </div>
  </div>
  <div className="mt-6 flex items-center space-x-4">
    <Button type="submit">Update user</Button>
    <Button color="failure" outline>Delete</Button>
  </div>
</form>`}
        >
          <div className="mx-auto max-w-2xl bg-white dark:bg-gray-800 rounded-lg p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update user</h2>
            <form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <Label htmlFor="uu-first" className="mb-2 block dark:text-white">First Name</Label>
                  <TextInput id="uu-first" defaultValue="Helene" required />
                </div>
                <div>
                  <Label htmlFor="uu-last" className="mb-2 block dark:text-white">Last Name</Label>
                  <TextInput id="uu-last" defaultValue="Engels" required />
                </div>
                <div>
                  <Label htmlFor="uu-pw" className="mb-2 block dark:text-white">Password</Label>
                  <TextInput id="uu-pw" type="password" placeholder="•••••••••" required />
                </div>
                <div>
                  <Label htmlFor="uu-cpw" className="mb-2 block dark:text-white">Confirm password</Label>
                  <TextInput id="uu-cpw" type="password" placeholder="•••••••••" required />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="uu-bio" className="mb-2 block dark:text-white">Biography</Label>
                  <Textarea
                    id="uu-bio"
                    defaultValue="Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3."
                    rows={5}
                    className="text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <Button type="submit">Update user</Button>
                <Button color="failure" outline>
                  <HiTrash className="-ml-1 mr-1 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </BlockPreview>

      </section>
    </div>
  );
}
