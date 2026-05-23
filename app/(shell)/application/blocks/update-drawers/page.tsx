"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
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

function DefaultUpdateDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[480px] w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-start justify-end">
        <div className="h-full w-full max-w-xs overflow-y-auto border-l border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Update Product</div>
          <div>
            <form action="#" className="mt-5">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="default-name" className="mb-2 block">
                    Name
                  </Label>
                  <TextInput
                    defaultValue='Apple iMac 27"'
                    id="default-name"
                    name="name"
                    placeholder="Type product name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="default-brand" className="mb-2 block">
                    Brand
                  </Label>
                  <TextInput
                    defaultValue="Apple"
                    id="default-brand"
                    name="brand"
                    placeholder="Product brand"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="default-price" className="mb-2 block">
                    Price
                  </Label>
                  <TextInput
                    defaultValue={2999}
                    id="default-price"
                    name="price"
                    placeholder="$2999"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="default-category" className="mb-2 block">
                    Category
                  </Label>
                  <Select id="default-category" name="category">
                    <option>Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="default-description" className="mb-2 block">
                    Description
                  </Label>
                  <Textarea
                    defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage."
                    id="default-description"
                    name="description"
                    placeholder="Enter product description"
                    rows={4}
                  />
                </div>
                <div className="flex w-full justify-center space-x-4 pb-2">
                  <Button type="submit" className="w-full">
                    Update
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => {}}
                    className="inline-flex w-full"
                  >
                    <svg
                      aria-hidden
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateUserDrawer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[480px] w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-start justify-end">
        <div className="h-full w-full max-w-xs overflow-y-auto border-l border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Update User</div>
          <div className="mt-5">
            <form action="#">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="user-username" className="mb-2 block">
                    Username
                  </Label>
                  <TextInput
                    defaultValue="bonnie.green"
                    id="user-username"
                    name="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="user-email" className="mb-2 block">
                    Email
                  </Label>
                  <TextInput
                    defaultValue="bonnie.green@company.com"
                    id="user-email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <Label htmlFor="user-password" className="mb-2 block">
                    Password
                  </Label>
                  <TextInput
                    id="user-password"
                    name="password"
                    placeholder="•••••••••"
                    required
                    type="password"
                  />
                </div>
                <div>
                  <Label htmlFor="user-confirm-password" className="mb-2 block">
                    Confirm password
                  </Label>
                  <TextInput
                    id="user-confirm-password"
                    name="confirm-password"
                    placeholder="•••••••••"
                    required
                    type="password"
                  />
                </div>
                <div className="flex w-full justify-center space-x-4 pb-2">
                  <Button type="submit" className="inline-flex w-full">
                    Update user
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => {}}
                    className="inline-flex w-full"
                  >
                    <svg
                      aria-hidden
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedUserDrawer() {
  return (
    <div className="relative h-[560px] w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-start justify-end">
        <div className="h-full w-full max-w-xs overflow-y-auto border-l border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Update User</div>
          <div>
            <form action="#" className="mt-5">
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block" htmlFor="adv-file-input">
                    Upload avatar
                  </Label>
                  <div>
                    <Avatar
                      alt="Helene avatar"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                      rounded
                      size="lg"
                      className="mb-4 justify-start"
                    />
                    <div className="w-full">
                      <input
                        className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                        aria-describedby="adv-file-input-help"
                        id="adv-file-input"
                        name="file_input"
                        type="file"
                      />
                      <p
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        id="adv-file-input-help"
                      >
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                      </p>
                    </div>
                    <div className="mt-4 flex items-center space-x-2.5">
                      <Button size="sm" className="inline-flex items-center">
                        <svg
                          aria-hidden
                          className="-ml-1 mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Upload new picture
                      </Button>
                      <Button
                        color="light"
                        size="sm"
                        className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="adv-first-name" className="mb-2 block">
                    First Name
                  </Label>
                  <TextInput
                    defaultValue="Helene"
                    id="adv-first-name"
                    name="first-name"
                    placeholder="John"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="adv-last-name" className="mb-2 block">
                    Last Name
                  </Label>
                  <TextInput
                    defaultValue="Engels"
                    id="adv-last-name"
                    name="last-name"
                    placeholder="Doe"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <Label htmlFor="adv-email" className="mb-2 block">
                    Email
                  </Label>
                  <TextInput
                    defaultValue="helene@company.com"
                    id="adv-email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <Label className="mb-2 block" htmlFor="adv-role">
                    Assign Role
                  </Label>
                  <div className="space-y-3">
                    <div className="mr-4 flex items-center">
                      <Checkbox id="adv-role-admin" name="user_role" />
                      <Label
                        htmlFor="adv-role-admin"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Administrator
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox id="adv-role-member" name="user_role" />
                      <Label
                        htmlFor="adv-role-member"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Member
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        defaultChecked
                        id="adv-role-viewer"
                        name="user_role"
                      />
                      <Label
                        htmlFor="adv-role-viewer"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Viewer
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center space-x-4 pb-2">
                  <Button type="submit" className="w-full">
                    Update user
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => {}}
                    className="inline-flex w-full"
                  >
                    <svg
                      aria-hidden
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateEventDrawer() {
  return (
    <div className="relative h-[560px] w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-start justify-end">
        <div className="h-full w-full max-w-xs overflow-y-auto border-l border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Update Event</div>
          <div>
            <form action="#">
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="event-title" className="mb-2 block">
                    Title
                  </Label>
                  <TextInput
                    defaultValue="The 4th Digital Transformation"
                    id="event-title"
                    name="title"
                    placeholder="Add title here"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="event-description" className="mb-2 block">
                    Description
                  </Label>
                  <Textarea
                    defaultValue="The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT."
                    id="event-description"
                    name="description"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="event-location" className="mb-2 block">
                    Location
                  </Label>
                  <TextInput
                    defaultValue="Florida, USA"
                    id="event-location"
                    name="location"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <Label className="mb-2 block">
                    Tag Color
                  </Label>
                  <div className="flex items-center space-x-2">
                    <button type="button" className="h-6 w-6 rounded-sm bg-purple-500" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-indigo-500" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-blue-600" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-pink-500" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-teal-400" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-green-400" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-yellow-300" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-orange-400" />
                    <button type="button" className="h-6 w-6 rounded-sm bg-red-500" />
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block" htmlFor="event-perm">
                    Guest Permissions
                  </Label>
                  <div className="space-y-3">
                    <div className="mr-4 flex items-center">
                      <Checkbox id="event-perm-1" name="guest-permission" />
                      <Label
                        htmlFor="event-perm-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Modify event
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox id="event-perm-2" name="guest-permission" />
                      <Label
                        htmlFor="event-perm-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Invite others
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        defaultChecked
                        id="event-perm-3"
                        name="guest-permission"
                      />
                      <Label
                        htmlFor="event-perm-3"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        See guest list
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center space-x-4 pb-2">
                  <Button type="submit" className="w-full">
                    Update event
                  </Button>
                  <Button
                    color="failure"
                    onClick={() => {}}
                    className="inline-flex w-full"
                  >
                    <svg
                      aria-hidden
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpdateDrawersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Update Drawers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Slide-out edit panels for updating existing records — same form patterns as create drawers,
          pre-populated with current values. Opens from the right edge with an Update + Delete action pair at the bottom.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/update-drawers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — update product drawer"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Update product</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="UPDATE PRODUCT" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#" className="mt-5">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="mb-2 block">Name</Label>
          <TextInput defaultValue='Apple iMac 27"' id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="brand" className="mb-2 block">Brand</Label>
          <TextInput defaultValue="Apple" id="brand" name="brand" required />
        </div>
        <div>
          <Label htmlFor="price" className="mb-2 block">Price</Label>
          <TextInput defaultValue={2999} id="price" name="price" type="number" required />
        </div>
        <div>
          <Label htmlFor="category" className="mb-2 block">Category</Label>
          <Select id="category" name="category">
            <option value="Electronics">Electronics</option>
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" name="description" rows={8} />
        </div>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
          <Button type="submit" className="w-full">Update</Button>
          <Button color="failure" className="inline-flex w-full">Delete</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <DefaultUpdateDrawer />
        </BlockPreview>

        <BlockPreview
          label="Update user drawer"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Update user</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="UPDATE USER" titleIcon={() => <></>} />
  <DrawerItems className="mt-5">
    <form action="#">
      <div className="space-y-4">
        <div>
          <Label htmlFor="username" className="mb-2 block">Username</Label>
          <TextInput defaultValue="bonnie.green" id="username" name="username" required />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">Email</Label>
          <TextInput defaultValue="bonnie.green@company.com" id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2 block">Password</Label>
          <TextInput id="password" name="password" type="password" placeholder="•••••••••" required />
        </div>
        <div>
          <Label htmlFor="confirm-password" className="mb-2 block">Confirm password</Label>
          <TextInput id="confirm-password" name="confirm-password" type="password" placeholder="•••••••••" required />
        </div>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:px-4">
          <Button type="submit" className="inline-flex w-full">Update user</Button>
          <Button color="failure" className="inline-flex w-full">Delete</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <UpdateUserDrawer />
        </BlockPreview>

        <BlockPreview
          label="Advanced update user drawer — with avatar upload and role assignment"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Update user</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="UPDATE USER" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#" className="mt-5">
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block" htmlFor="file-input">Upload avatar</Label>
          <Avatar
            alt="Helene avatar"
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
            rounded size="lg" className="mb-4 justify-start"
          />
          <input id="file-input" name="file_input" type="file"
            className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm" />
        </div>
        <div>
          <Label htmlFor="first-name" className="mb-2 block">First Name</Label>
          <TextInput defaultValue="Helene" id="first-name" name="first-name" type="text" required />
        </div>
        <div>
          <Label htmlFor="last-name" className="mb-2 block">Last Name</Label>
          <TextInput defaultValue="Engels" id="last-name" name="last-name" type="text" required />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">Email</Label>
          <TextInput defaultValue="helene@company.com" id="email" name="email" type="email" required />
        </div>
        <div>
          <Label className="mb-2 block">Assign Role</Label>
          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="role-admin" name="user_role" />
              <Label htmlFor="role-admin" className="ml-2 text-sm">Administrator</Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="role-member" name="user_role" />
              <Label htmlFor="role-member" className="ml-2 text-sm">Member</Label>
            </div>
            <div className="flex items-center">
              <Checkbox defaultChecked id="role-viewer" name="user_role" />
              <Label htmlFor="role-viewer" className="ml-2 text-sm">Viewer</Label>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
          <Button type="submit" className="w-full">Update user</Button>
          <Button color="failure" className="inline-flex w-full">Delete</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <AdvancedUserDrawer />
        </BlockPreview>

        <BlockPreview
          label="Update event drawer — with description, location, tag color, and guest permissions"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Update event</Button>
<Drawer open={open} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="UPDATE EVENT" titleIcon={() => <></>} />
  <DrawerItems>
    <form action="#">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="mb-2 block">Title</Label>
          <TextInput defaultValue="The 4th Digital Transformation" id="title" name="title" required />
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea defaultValue="..." id="description" name="description" rows={6} />
        </div>
        <div>
          <Label htmlFor="location" className="mb-2 block">Location</Label>
          <TextInput defaultValue="Florida, USA" id="location" name="location" />
        </div>
        <div>
          <Label className="mb-2 block">Tag Color</Label>
          <div className="flex items-center space-x-2">
            <button type="button" className="h-6 w-6 rounded-sm bg-purple-500" />
            <button type="button" className="h-6 w-6 rounded-sm bg-indigo-500" />
            <button type="button" className="h-6 w-6 rounded-sm bg-blue-600" />
            <button type="button" className="h-6 w-6 rounded-sm bg-pink-500" />
            <button type="button" className="h-6 w-6 rounded-sm bg-teal-400" />
          </div>
        </div>
        <div>
          <Label className="mb-2 block">Guest Permissions</Label>
          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="perm-modify" name="guest-permission" />
              <Label htmlFor="perm-modify" className="ml-2 text-sm">Modify event</Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="perm-invite" name="guest-permission" />
              <Label htmlFor="perm-invite" className="ml-2 text-sm">Invite others</Label>
            </div>
            <div className="flex items-center">
              <Checkbox defaultChecked id="perm-see" name="guest-permission" />
              <Label htmlFor="perm-see" className="ml-2 text-sm">See guest list</Label>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
          <Button type="submit" className="w-full">Update event</Button>
          <Button color="failure" className="inline-flex w-full">Delete</Button>
        </div>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <UpdateEventDrawer />
        </BlockPreview>

      </section>
    </div>
  );
}
