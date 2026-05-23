"use client";

import { Avatar, AvatarGroup, AvatarGroupCounter, Badge, Button, Tooltip } from "flowbite-react";
import {
  HiBriefcase,
  HiCalendar,
  HiEye,
  HiLocationMarker,
  HiPencilAlt,
  HiPhone,
  HiStar,
  HiTrash,
} from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-800 px-5 py-6">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

export default function ReadSectionsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Read Sections</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Detail view sections for displaying record data — profile cards, stats grids, activity feeds,
          and info panels used on read/view pages.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/read-sections/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        {/* ── 1. Default read section ─────────────────────────────────────────── */}
        <BlockPreview
          label="Default — record detail with edit/delete actions"
          code={`<div className="max-w-2xl py-8">
  <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
    Marcus Reyes
  </h2>
  <p className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
    Member #00412
  </p>
  <dl>
    <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Notes</dt>
    <dd className="mb-4 text-gray-500 dark:text-gray-400">
      Referred by Dr. Chen. Prefers morning appointments. Has requested
      monthly billing cycle. Insurance verified through Aetna PPO.
    </dd>
  </dl>
  <dl className="flex items-center space-x-6">
    <div>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Tier</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">Diamond+</dd>
    </div>
    <div>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Since</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">Jan 2022</dd>
    </div>
  </dl>
  <div className="flex items-center space-x-4">
    <Button size="lg">
      <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit
    </Button>
    <Button color="failure" size="lg">
      <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete
    </Button>
  </div>
</div>`}
        >
          <div className="max-w-2xl py-2">
            <h2 className="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-white md:text-2xl">
              Marcus Reyes
            </h2>
            <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 dark:text-white md:text-2xl">
              Member #00412
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Notes
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Referred by Dr. Chen. Prefers morning appointments. Has requested
                monthly billing cycle. Insurance verified through Aetna PPO. No
                known allergies on file — confirm at next check-in.
              </dd>
            </dl>
            <dl className="flex items-center space-x-6">
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Tier
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  Diamond+
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Member since
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  Jan 2022
                </dd>
              </div>
            </dl>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 2. User profile read section ────────────────────────────────────── */}
        <BlockPreview
          label="User profile — biography, location, and actions"
          code={`<div className="max-w-2xl py-8">
  <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
    Dr. Sandra Ortiz
  </h2>
  <dl>
    <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Biography</dt>
    <dd className="mb-4 text-gray-500 dark:text-gray-400">
      Board-certified internist specializing in preventive care and
      chronic disease management. 12+ years at Scripps Clinic.
    </dd>
    <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Location</dt>
    <dd className="mb-4 flex items-center text-gray-900 dark:text-white">
      <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400" />
      <span className="font-medium">La Jolla, California</span>
    </dd>
  </dl>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-2xl py-2">
            <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white sm:mb-5 md:text-2xl">
              Dr. Sandra Ortiz
            </h2>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Biography
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Board-certified internist specializing in preventive care and
                chronic disease management. 12+ years at Scripps Clinic. Fluent
                in English and Spanish.
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Location
              </dt>
              <dd className="mb-4 flex items-center text-gray-900 dark:text-white sm:mb-5">
                <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <span className="font-medium">La Jolla, California</span>
              </dd>
            </dl>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 3. Advanced user profile ─────────────────────────────────────────── */}
        <BlockPreview
          label="Advanced user profile — avatar, badges, contact grid"
          code={`<div className="max-w-6xl py-8">
  <div className="mb-4 grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-12">
    <div className="sm:col-span-2">
      <div className="flex items-center space-x-4">
        <Avatar img="/images/providers/provider-1.png" rounded size="lg" />
        <div>
          <h2 className="mb-2 flex items-center text-xl font-bold text-gray-900 dark:text-white">
            Marcus Reyes
            <Badge color="gray" className="ml-3 uppercase">Pro</Badge>
          </h2>
          <Badge color="info" className="w-fit px-3">
            <HiEye className="mb-0.5 mr-1 h-3 w-3" />Active Member
          </Badge>
        </div>
      </div>
      <dl className="mt-4">
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Notes</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400">
          Referred by Dr. Chen. Prefers morning slots. Insurance verified.
        </dd>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Location</dt>
        <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400">
          <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400" />
          San Diego, California
        </dd>
      </dl>
    </div>
    <dl>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Email</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">m.reyes@example.com</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Phone</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">+1 (619) 555-0142</dd>
    </dl>
  </div>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="gray" size="lg">Preview</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-6xl py-2">
            <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
              <div className="sm:col-span-2">
                <div className="flex items-center space-x-4">
                  <Avatar
                    img="/images/providers/provider-1.png"
                    rounded
                    size="lg"
                  />
                  <div>
                    <h2 className="mb-2 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                      Marcus Reyes
                      <Badge color="gray" className="ml-3 text-base uppercase">
                        Pro
                      </Badge>
                    </h2>
                    <Badge color="info" className="w-fit px-3">
                      <HiEye className="mb-0.5 mr-1 h-3 w-3" />
                      Active Member
                    </Badge>
                  </div>
                </div>
                <dl className="mt-4">
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Notes
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    Referred by Dr. Chen. Prefers morning appointments. Insurance
                    verified through Aetna PPO. Has requested monthly billing
                    cycle.
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Location
                  </dt>
                  <dd className="mb-4 flex items-center text-gray-900 dark:text-white sm:mb-5">
                    <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-gray-500 dark:text-gray-400">
                      San Diego, California
                    </span>
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Membership Tier
                  </dt>
                  <dd className="flex items-center text-gray-900 dark:text-white">
                    <HiStar className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Diamond+
                    </span>
                  </dd>
                </dl>
              </div>
              <dl>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Email Address
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  m.reyes@example.com
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Home Address
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  4120 Torrey Pines Rd, La Jolla, CA 92037
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Phone Number
                </dt>
                <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
                  <HiPhone className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  +1 (619) 555-0142
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Primary Physician
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  Dr. Sandra Ortiz
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Insurance
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Aetna PPO — verified
                </dd>
              </dl>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button
                color="gray"
                size="lg"
                className="dark:bg-gray-800 [&>span]:text-sm"
              >
                Preview
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 4. Event / appointment read section ─────────────────────────────── */}
        <BlockPreview
          label="Event — appointment detail with date, location, and actions"
          code={`<div className="max-w-2xl py-8">
  <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
    Annual Wellness Exam — Marcus Reyes
  </h2>
  <dl className="mb-4 flex items-center space-x-4">
    <div>
      <dt className="sr-only">Date</dt>
      <dd className="flex items-center text-gray-900 dark:text-white">
        <HiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
        <span className="font-semibold">June 14, 2026 — 9:00 AM</span>
      </dd>
    </div>
    <div>
      <dt className="sr-only">Location</dt>
      <dd className="flex items-center text-gray-900 dark:text-white">
        <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400" />
        <span className="font-semibold">Scripps Clinic, La Jolla</span>
      </dd>
    </div>
  </dl>
  <dl className="mb-4">
    <dt className="mb-2 font-medium text-gray-900 dark:text-white">Details:</dt>
    <dd className="text-gray-500 dark:text-gray-400">
      Annual physical and preventive care review. Patient should arrive
      15 minutes early. Lab work ordered — fasting required.
    </dd>
  </dl>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="gray" size="lg">Preview</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-2xl py-2">
            <h2 className="mb-4 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:mb-5 sm:text-2xl">
              Annual Wellness Exam — Marcus Reyes
            </h2>
            <dl className="mb-4 flex items-center space-x-4 sm:mb-5">
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="flex items-center text-gray-900 dark:text-white">
                  <HiCalendar className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">June 14, 2026 — 9:00 AM</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center text-gray-900 dark:text-white">
                  <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">Scripps Clinic, La Jolla</span>
                </dd>
              </div>
            </dl>
            <dl className="mb-4 sm:mb-5">
              <dt className="mb-2 font-medium leading-none text-gray-900 dark:text-white">
                Details:
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Annual physical and preventive care review. Patient should arrive
                15 minutes early. Lab work ordered — fasting required. Physician:
                Dr. Sandra Ortiz.
              </dd>
            </dl>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button
                color="gray"
                size="lg"
                className="dark:bg-gray-800 [&>span]:text-sm"
              >
                Preview
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 5. Advanced event / appointment section ─────────────────────────── */}
        <BlockPreview
          label="Advanced event — appointment with participants sidebar panel"
          code={`<div className="max-w-6xl py-8">
  <div className="mb-4 grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-12">
    <div className="sm:col-span-2">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Annual Wellness Exam — Marcus Reyes
      </h2>
      <dl className="mb-4 flex items-center space-x-4">
        <div>
          <dt className="sr-only">Date</dt>
          <dd className="flex items-center text-gray-900 dark:text-white">
            <HiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
            <span className="font-semibold">June 14, 2026 — 9:00 AM</span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center text-gray-900 dark:text-white">
            <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400" />
            <span className="font-semibold">Scripps Clinic, La Jolla</span>
          </dd>
        </div>
      </dl>
      <dl>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Details:</dt>
        <dd className="text-gray-500 dark:text-gray-400">
          Annual physical and preventive care review. Fasting required.
          Lab work ordered. Physician: Dr. Sandra Ortiz.
        </dd>
      </dl>
    </div>
    <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
      <dt className="mb-2 text-gray-500 dark:text-gray-400">Care Team</dt>
      <dd className="mb-4">
        <Avatar.Group>
          <Avatar img="/images/providers/provider-1.png" rounded size="sm" stacked />
          <Avatar img="/images/providers/provider-2.png" rounded size="sm" stacked />
          <Avatar img="/images/providers/provider-3.png" rounded size="sm" stacked />
          <Avatar.Counter total={4} className="h-8 w-8 bg-gray-600" />
        </Avatar.Group>
      </dd>
      <dt className="mb-2 text-gray-500 dark:text-gray-400">Format</dt>
      <dd className="mb-4 font-medium text-gray-900 dark:text-white">In-person</dd>
      <dt className="mb-2 text-gray-500 dark:text-gray-400">Duration</dt>
      <dd className="font-medium text-gray-900 dark:text-white">60 minutes</dd>
    </dl>
  </div>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="gray" size="lg">Preview</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-6xl py-2">
            <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
              <div className="sm:col-span-2">
                <h2 className="mb-4 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:mb-5 sm:text-2xl">
                  Annual Wellness Exam — Marcus Reyes
                </h2>
                <dl className="mb-4 flex items-center space-x-4 sm:mb-5">
                  <div>
                    <dt className="sr-only">Date</dt>
                    <dd className="flex items-center text-gray-900 dark:text-white">
                      <HiCalendar className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="font-semibold">June 14, 2026 — 9:00 AM</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center text-gray-900 dark:text-white">
                      <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="font-semibold">Scripps Clinic, La Jolla</span>
                    </dd>
                  </div>
                </dl>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Details:
                  </dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Annual physical and preventive care review. Patient should
                    arrive 15 minutes early. Fasting required for lab work. All
                    vitals to be recorded in Epic. Physician: Dr. Sandra Ortiz.
                  </dd>
                </dl>
              </div>
              <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                  Care Team
                </dt>
                <dd className="mb-4 sm:mb-5">
                  <AvatarGroup>
                    <Avatar
                      alt="Provider 1"
                      img="/images/providers/provider-1.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <Avatar
                      alt="Provider 2"
                      img="/images/providers/provider-2.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <Avatar
                      alt="Provider 3"
                      img="/images/providers/provider-3.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <AvatarGroupCounter total={4} className="h-8 w-8 bg-gray-600" />
                  </AvatarGroup>
                </dd>
                <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                  Format
                </dt>
                <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
                  In-person
                </dd>
                <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                  Duration
                </dt>
                <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
                  60 minutes
                </dd>
                <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                  Status
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white">
                  Confirmed
                </dd>
              </dl>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button
                color="gray"
                size="lg"
                className="dark:bg-gray-800 [&>span]:text-sm"
              >
                Preview
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 6. Subscription / product detail read section ───────────────────── */}
        <BlockPreview
          label="Subscription plan — product detail with status badge and specs grid"
          code={`<div className="max-w-6xl py-8">
  <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
    Scripps PIMC Diamond+ Plan
  </h2>
  <p className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
    $299 / month
  </p>
  <div className="mb-4 grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-12">
    <div className="sm:col-span-2">
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        Comprehensive concierge membership with unlimited same-day access,
        annual physicals, priority specialist referrals, and 24/7 physician
        messaging. Includes lab work and imaging coordination.
      </p>
      <dl>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Includes</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400">
          Unlimited visits, annual physical, specialist coordination,
          lab orders, 24/7 messaging, same-day appointments.
        </dd>
      </dl>
    </div>
    <div>
      <dl>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Status</dt>
        <dd className="mb-4">
          <Badge color="success" className="w-fit px-3">
            <HiStar className="mr-1 h-3 w-3" />Active
          </Badge>
        </dd>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Billing</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400">Monthly</dd>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Tier</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400">Diamond+</dd>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Renewal</dt>
        <dd className="text-gray-500 dark:text-gray-400">July 1, 2026</dd>
      </dl>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="gray" size="lg">Preview</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-6xl py-2">
            <h2 className="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-white md:text-2xl">
              Scripps PIMC Diamond+ Plan
            </h2>
            <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 dark:text-white md:text-2xl">
              $299 / month
            </p>
            <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
              <div className="sm:col-span-2">
                <p className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  Comprehensive concierge membership with unlimited same-day
                  access, annual physicals, priority specialist referrals, and
                  24/7 physician messaging. Includes lab work and imaging
                  coordination.
                </p>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Includes
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    Unlimited visits, annual physical, specialist coordination,
                    lab orders, 24/7 messaging, same-day appointments.
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Notes
                  </dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Patient enrolled January 2022. Auto-renews monthly. No
                    cancellation fees after 90 days.
                  </dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Status
                  </dt>
                  <dd className="mb-4 sm:mb-5">
                    <Badge color="success" className="w-fit px-3">
                      <HiStar className="mr-1 h-3 w-3" />
                      Active
                    </Badge>
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Billing Cycle
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    Monthly
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Tier
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    Diamond+
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Renewal Date
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    July 1, 2026
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Member Since
                  </dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    January 15, 2022
                  </dd>
                </dl>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button
                color="gray"
                size="lg"
                className="dark:bg-gray-800 [&>span]:text-sm"
              >
                Preview
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* ── 7. Staff / provider profile with tooltip skills ─────────────────── */}
        <BlockPreview
          label="Provider profile — staff record with specialties and contact panel"
          code={`<div className="max-w-6xl py-8">
  <div className="mb-4 grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-12">
    <div className="sm:col-span-2">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar img="/images/providers/provider-2.png" rounded size="lg" />
        <div>
          <h2 className="mb-2 flex items-center text-xl font-bold text-gray-900 dark:text-white">
            Dr. Sandra Ortiz
            <Badge color="success" className="ml-3 uppercase">Active</Badge>
          </h2>
          <Badge color="gray" className="w-fit px-3">
            <HiBriefcase className="mb-0.5 mr-1 h-3 w-3" />Internal Medicine
          </Badge>
        </div>
      </div>
      <dl>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Biography</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400">
          Board-certified internist. 12+ years at Scripps Clinic.
          Fluent in English and Spanish. Focus on preventive care.
        </dd>
        <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Location</dt>
        <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400">
          <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400" />
          La Jolla, California
        </dd>
      </dl>
    </div>
    <dl>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">NPI Number</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">1234567890</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Department</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">Internal Medicine</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Direct Line</dt>
      <dd className="mb-4 text-gray-500 dark:text-gray-400">+1 (858) 555-0198</dd>
      <dt className="mb-2 font-semibold text-gray-900 dark:text-white">Languages</dt>
      <dd className="text-gray-500 dark:text-gray-400">English, Spanish</dd>
    </dl>
  </div>
  <div className="flex items-center space-x-4">
    <Button size="lg"><HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />Edit</Button>
    <Button color="gray" size="lg">View Schedule</Button>
    <Button color="failure" size="lg"><HiTrash className="-ml-1 mr-1.5 h-5 w-5" />Delete</Button>
  </div>
</div>`}
        >
          <div className="max-w-6xl py-2">
            <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
              <div className="sm:col-span-2">
                <div className="mb-4 flex items-center space-x-4">
                  <Avatar
                    img="/images/providers/provider-2.png"
                    rounded
                    size="lg"
                  />
                  <div>
                    <h2 className="mb-2 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                      Dr. Sandra Ortiz
                      <Badge color="success" className="ml-3 text-base uppercase">
                        Active
                      </Badge>
                    </h2>
                    <Badge color="gray" className="w-fit px-3">
                      <HiBriefcase className="mb-0.5 mr-1 h-3 w-3" />
                      Internal Medicine
                    </Badge>
                  </div>
                </div>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Biography
                  </dt>
                  <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                    Board-certified internist specializing in preventive care and
                    chronic disease management. 12+ years at Scripps Clinic.
                    Fluent in English and Spanish. Research focus: hypertension
                    and metabolic health.
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Location
                  </dt>
                  <dd className="mb-4 flex items-center text-gray-900 dark:text-white sm:mb-5">
                    <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-gray-500 dark:text-gray-400">
                      La Jolla, California
                    </span>
                  </dd>
                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                    Specialties
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    <Tooltip content="Preventive Medicine">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Preventive Medicine
                      </span>
                    </Tooltip>
                    <Tooltip content="Hypertension">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Hypertension
                      </span>
                    </Tooltip>
                    <Tooltip content="Metabolic Health">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Metabolic Health
                      </span>
                    </Tooltip>
                  </dd>
                </dl>
              </div>
              <dl>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  NPI Number
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  1234567890
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Department
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  Internal Medicine
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Direct Line
                </dt>
                <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
                  <HiPhone className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  +1 (858) 555-0198
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Languages
                </dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  English, Spanish
                </dd>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Accepting Patients
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Yes</dd>
              </dl>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
                Edit
              </Button>
              <Button
                color="gray"
                size="lg"
                className="dark:bg-gray-800 [&>span]:text-sm"
              >
                View Schedule
              </Button>
              <Button color="failure" size="lg" className="[&>span]:text-sm">
                <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
                Delete
              </Button>
            </div>
          </div>
        </BlockPreview>

      </section>
    </div>
  );
}
