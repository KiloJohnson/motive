"use client";

import { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-8 flex justify-center">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

function ProductDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Read product</Button>
      <Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-sm">
        <Drawer.Header title='Apple iMac 25"' titleIcon={() => <></>} />
        <Drawer.Items>
          <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">$2999</p>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to
              5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD.
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">Electronics/PC</dd>
          </dl>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
            <Button className="inline-flex w-full">
              <HiPencil className="-ml-1 mr-1 h-5 w-5" />
              Edit
            </Button>
            <Button color="failure" className="inline-flex w-full">
              <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
              Delete
            </Button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

function UserDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Read user</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Header title="Helene Engels" titleIcon={() => <></>} />
        <Drawer.Items>
          <dl className="mt-4 sm:mt-5">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe,
              Figma, Webflow and others, Daily design tips & resources, Exploring Web3.
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email</dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">helene@company.com</dd>
          </dl>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
            <Button className="inline-flex w-full">
              <HiPencil className="-ml-1 mr-1 h-5 w-5" />
              Edit
            </Button>
            <Button color="failure" className="inline-flex w-full">
              <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
              Delete
            </Button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default function ReadDrawersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Read Drawers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Slide-out detail panels for viewing records in context without a page transition.
          Opens from the right edge. Contains structured detail fields and Edit / Delete actions at the bottom.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/read-drawers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — read product drawer"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Read product</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-sm">
  <Drawer.Header title='Apple iMac 25"' titleIcon={() => <></>} />
  <Drawer.Items>
    <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">$2999</p>
    <dl>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Details</dt>
      <dd className="mb-4 font-light text-gray-500 dark:text-gray-400">...</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Category</dt>
      <dd className="mb-4 font-light text-gray-500 dark:text-gray-400">Electronics/PC</dd>
    </dl>
    <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
      <Button className="inline-flex w-full">Edit</Button>
      <Button color="failure" className="inline-flex w-full">Delete</Button>
    </div>
  </Drawer.Items>
</Drawer>`}
        >
          <ProductDrawer />
        </BlockPreview>

        <BlockPreview
          label="User — read user drawer"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Read user</Button>
<Drawer open={open} onClose={() => setOpen(false)}>
  <Drawer.Header title="Helene Engels" titleIcon={() => <></>} />
  <Drawer.Items>
    <dl className="mt-4 sm:mt-5">
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Biography</dt>
      <dd className="mb-4 font-light text-gray-500 dark:text-gray-400">...</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Email</dt>
      <dd className="mb-4 font-light text-gray-500 dark:text-gray-400">helene@company.com</dd>
    </dl>
    <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
      <Button className="inline-flex w-full">Edit</Button>
      <Button color="failure" className="inline-flex w-full">Delete</Button>
    </div>
  </Drawer.Items>
</Drawer>`}
        >
          <UserDrawer />
        </BlockPreview>

      </section>
    </div>
  );
}
