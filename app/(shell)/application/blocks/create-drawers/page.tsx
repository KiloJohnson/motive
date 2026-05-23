"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

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

/* ─── Default create product drawer (simple) ─── */
function DefaultCreateDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[600px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="NEW PRODUCT" titleIcon={() => <></>} />
        <DrawerItems>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label htmlFor="dp-name" className="mb-2 block">Name</Label>
                <TextInput id="dp-name" name="name" placeholder="Type product name" required />
              </div>
              <div>
                <Label htmlFor="dp-brand" className="mb-2 block">Brand</Label>
                <TextInput id="dp-brand" name="brand" placeholder="Product brand" required />
              </div>
              <div>
                <Label htmlFor="dp-price" className="mb-2 block">Price</Label>
                <TextInput id="dp-price" name="price" placeholder="$2999" required type="number" />
              </div>
              <div>
                <Label htmlFor="dp-category" className="mb-2 block">Category</Label>
                <Select id="dp-category" name="category" defaultValue="">
                  <option value="" disabled>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="dp-description" className="mb-2 block">Description</Label>
                <Textarea id="dp-description" name="description" placeholder="Enter product description here" rows={4} />
              </div>
              <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                <Button type="submit" className="w-full">Add product</Button>
                <Button
                  color="light"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg aria-hidden className="-ml-1 h-5 w-5 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

/* ─── Create user drawer (simple) ─── */
function CreateUserDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[500px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="NEW USER" titleIcon={() => <></>} />
        <DrawerItems className="mt-5">
          <form action="#">
            <div className="space-y-4">
              <div>
                <Label htmlFor="cu-username" className="mb-2 block">Username</Label>
                <TextInput id="cu-username" name="username" placeholder="Username" required />
              </div>
              <div>
                <Label htmlFor="cu-email" className="mb-2 block">Email</Label>
                <TextInput id="cu-email" name="email" placeholder="name@company.com" required type="email" />
              </div>
              <div>
                <Label htmlFor="cu-password" className="mb-2 block">Password</Label>
                <TextInput id="cu-password" name="password" placeholder="•••••••••" required type="password" />
              </div>
              <div>
                <Label htmlFor="cu-confirm-password" className="mb-2 block">Confirm password</Label>
                <TextInput id="cu-confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
              </div>
              <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:px-4">
                <Button type="submit" className="inline-flex w-full">Add user</Button>
                <Button
                  color="light"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg aria-hidden className="-ml-1 mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </Button>
              </div>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

/* ─── Advanced create user drawer (avatar upload + roles) ─── */
function AdvancedCreateUserDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[640px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="NEW USER" titleIcon={() => <></>} />
        <DrawerItems>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block" htmlFor="au-file">Upload avatar</Label>
                <div>
                  <Avatar
                    alt="Joseph avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    rounded
                    size="lg"
                    className="mb-4 justify-start"
                  />
                  <div className="w-full">
                    <input
                      className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                      id="au-file"
                      name="au-file"
                      type="file"
                    />
                    <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="au-first-name" className="mb-2 block">First Name</Label>
                <TextInput id="au-first-name" name="first-name" placeholder="John" required type="text" />
              </div>
              <div>
                <Label htmlFor="au-last-name" className="mb-2 block">Last Name</Label>
                <TextInput id="au-last-name" name="last-name" placeholder="Doe" required type="text" />
              </div>
              <div>
                <Label htmlFor="au-email" className="mb-2 block">Email</Label>
                <TextInput id="au-email" name="email" placeholder="name@company.com" required type="email" />
              </div>
              <div>
                <Label htmlFor="au-password" className="mb-2 block">Password</Label>
                <TextInput id="au-password" name="password" placeholder="•••••••••" required type="password" />
              </div>
              <div>
                <Label htmlFor="au-confirm-password" className="mb-2 block">Confirm password</Label>
                <TextInput id="au-confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="au-role">Assign Role</Label>
                <div className="space-y-3">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="au-role-admin" name="user_role" />
                    <Label htmlFor="au-role-admin" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="au-role-member" name="user_role" />
                    <Label htmlFor="au-role-member" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Member</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox defaultChecked id="au-role-viewer" name="user_role" />
                    <Label htmlFor="au-role-viewer" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
              <Button type="submit" className="w-full">Add user</Button>
              <Button
                color="light"
                onClick={() => setOpen(false)}
                className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg aria-hidden className="-ml-1 mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </Button>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

/* ─── Create event drawer ─── */
function CreateEventDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[680px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="NEW EVENT" titleIcon={() => <></>} />
        <DrawerItems>
          <form action="#">
            <div className="space-y-4">
              <div>
                <Label htmlFor="ev-title" className="mb-2 block">Title</Label>
                <TextInput id="ev-title" name="title" placeholder="Add title here" required />
              </div>
              <div>
                <Label htmlFor="ev-description" className="mb-2 block">Description</Label>
                <Textarea id="ev-description" rows={4} />
              </div>
              <div>
                <Label htmlFor="ev-start-date" className="mb-2 block">Start date</Label>
                <TextInput id="ev-start-date" name="start-date" type="date" />
              </div>
              <div>
                <Label htmlFor="ev-end-date" className="mb-2 block">End date</Label>
                <TextInput id="ev-end-date" name="end-date" type="date" />
              </div>
              <div>
                <Label htmlFor="ev-location" className="mb-2 block">Location</Label>
                <TextInput id="ev-location" name="location" placeholder="Enter location" />
              </div>
              <div>
                <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tag Color</div>
                <div className="flex items-center space-x-2">
                  <button type="button" className="h-6 w-6 rounded-sm bg-purple-500" aria-label="Purple" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-indigo-500" aria-label="Indigo" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-blue-600" aria-label="Blue" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-pink-500" aria-label="Pink" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-teal-400" aria-label="Teal" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-green-400" aria-label="Green" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-yellow-300" aria-label="Yellow" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-orange-400" aria-label="Orange" />
                  <button type="button" className="h-6 w-6 rounded-sm bg-red-500" aria-label="Red" />
                </div>
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="ev-guest-permission">Guest Permissions</Label>
                <div className="space-y-3">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="ev-perm-1" name="guest-permission" />
                    <Label htmlFor="ev-perm-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modify event</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="ev-perm-2" name="guest-permission" />
                    <Label htmlFor="ev-perm-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Invite others</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox defaultChecked id="ev-perm-3" name="guest-permission" />
                    <Label htmlFor="ev-perm-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">See guest list</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
              <Button type="submit" className="w-full">Add event</Button>
              <Button
                color="light"
                onClick={() => setOpen(false)}
                className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg aria-hidden className="-ml-1 mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </Button>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

export default function CreateDrawersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Create Drawers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Slide-out panel forms for creating new records — members, products, transactions — without navigating away from the current view.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/create-drawers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — create product"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create product</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="NEW PRODUCT" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#" className="mt-5">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="mb-2 block">Name</Label>
          <TextInput id="name" name="name" placeholder="Type product name" required />
        </div>
        <div>
          <Label htmlFor="brand" className="mb-2 block">Brand</Label>
          <TextInput id="brand" name="brand" placeholder="Product brand" required />
        </div>
        <div>
          <Label htmlFor="price" className="mb-2 block">Price</Label>
          <TextInput id="price" name="price" placeholder="$2999" required type="number" />
        </div>
        <div>
          <Label htmlFor="category" className="mb-2 block">Category</Label>
          <Select id="category" name="category" defaultValue="">
            <option value="" disabled>Select category</option>
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" name="description" placeholder="Enter product description here" rows={4} />
        </div>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
          <Button type="submit" className="w-full">Add product</Button>
          <Button color="light" onClick={() => setOpen(false)} className="inline-flex w-full">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <DefaultCreateDrawer />
        </BlockPreview>

        <BlockPreview
          label="Create user"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create user</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="NEW USER" titleIcon={() => <></>} />
  <DrawerItems className="mt-5">
    <form action="#">
      <div className="space-y-4">
        <div>
          <Label htmlFor="username" className="mb-2 block">Username</Label>
          <TextInput id="username" name="username" placeholder="Username" required />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">Email</Label>
          <TextInput id="email" name="email" placeholder="name@company.com" required type="email" />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2 block">Password</Label>
          <TextInput id="password" name="password" placeholder="•••••••••" required type="password" />
        </div>
        <div>
          <Label htmlFor="confirm-password" className="mb-2 block">Confirm password</Label>
          <TextInput id="confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
        </div>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:px-4">
          <Button type="submit" className="inline-flex w-full">Add user</Button>
          <Button color="light" onClick={() => setOpen(false)} className="inline-flex w-full">Close</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <CreateUserDrawer />
        </BlockPreview>

        <BlockPreview
          label="Advanced create user — avatar upload + role assignment"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create user</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="NEW USER" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#" className="mt-5">
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block" htmlFor="file">Upload avatar</Label>
          <Avatar
            alt="User avatar"
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            rounded size="lg" className="mb-4 justify-start"
          />
          <input className="w-full cursor-pointer rounded-lg border ..." id="file" name="file" type="file" />
        </div>
        <div>
          <Label htmlFor="first-name" className="mb-2 block">First Name</Label>
          <TextInput id="first-name" name="first-name" placeholder="John" required type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">Email</Label>
          <TextInput id="email" name="email" placeholder="name@company.com" required type="email" />
        </div>
        <div>
          <Label className="mb-2 block">Assign Role</Label>
          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="role-admin" name="user_role" />
              <Label htmlFor="role-admin" className="ml-2 text-sm">Administrator</Label>
            </div>
            <div className="flex items-center">
              <Checkbox defaultChecked id="role-viewer" name="user_role" />
              <Label htmlFor="role-viewer" className="ml-2 text-sm">Viewer</Label>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
          <Button type="submit" className="w-full">Add user</Button>
          <Button color="light" onClick={() => setOpen(false)} className="inline-flex w-full">Close</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <AdvancedCreateUserDrawer />
        </BlockPreview>

        <BlockPreview
          label="Create event — date pickers, tag color, guest permissions"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create event</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="NEW EVENT" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="mb-2 block">Title</Label>
          <TextInput id="title" name="title" placeholder="Add title here" required />
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" rows={4} />
        </div>
        <div>
          <Label htmlFor="start-date" className="mb-2 block">Start date</Label>
          <TextInput id="start-date" name="start-date" type="date" />
        </div>
        <div>
          <Label htmlFor="end-date" className="mb-2 block">End date</Label>
          <TextInput id="end-date" name="end-date" type="date" />
        </div>
        <div>
          <Label htmlFor="location" className="mb-2 block">Location</Label>
          <TextInput id="location" name="location" placeholder="Enter location" />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag Color</div>
          <div className="flex items-center space-x-2">
            <button type="button" className="h-6 w-6 rounded-sm bg-purple-500" />
            <button type="button" className="h-6 w-6 rounded-sm bg-blue-600" />
            <button type="button" className="h-6 w-6 rounded-sm bg-red-500" />
          </div>
        </div>
        <div>
          <Label className="mb-2 block">Guest Permissions</Label>
          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="perm-1" name="guest-permission" />
              <Label htmlFor="perm-1" className="ml-2 text-sm">Modify event</Label>
            </div>
            <div className="flex items-center">
              <Checkbox defaultChecked id="perm-3" name="guest-permission" />
              <Label htmlFor="perm-3" className="ml-2 text-sm">See guest list</Label>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
          <Button type="submit" className="w-full">Add event</Button>
          <Button color="light" onClick={() => setOpen(false)} className="inline-flex w-full">Close</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <CreateEventDrawer />
        </BlockPreview>

      </section>
    </div>
  );
}
