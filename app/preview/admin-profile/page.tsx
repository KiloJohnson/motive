"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";
import { Badge, Button } from "flowbite-react";
import { HiPencilAlt, HiLocationMarker, HiBriefcase, HiGlobeAlt, HiStar } from "react-icons/hi";

const tabs = ["Overview", "Notifications", "Projects", "Invoice", "Account"];

const skills = ["Figma", "React", "Tailwind CSS", "Design Systems", "Accessibility", "TypeScript"];

const experience = [
  { role: "UX Architect", company: "Scripps Health", period: "2022 – Present", logo: "S", color: "#005EB8" },
  { role: "Senior UX Designer", company: "Skype", period: "2019 – 2022", logo: "Sk", color: "#00AFF0" },
  { role: "UI Designer", company: "Amazon", period: "2017 – 2019", logo: "A", color: "#FF9900" },
];

const education = [
  { school: "Stanford University", dept: "Computer Science and Engineering", period: "2009 – 2014", logo: "SU", color: "#8c1515" },
  { school: "Thomas Jeff High School", dept: "Business Management", period: "2005 – 2009", logo: "TJ", color: "#374151" },
];

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <PreviewShell variant="admin" title="Profile">
      <div className="p-6 max-w-5xl mx-auto space-y-6">

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex gap-1 -mb-px">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === t
                    ? "border-primary-600 text-primary-600 dark:text-primary-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "Overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

              {/* Left — profile card */}
              <div className="xl:col-span-1 space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-bold mb-3">KJ</div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Kilo Johnson</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">UX Architect</p>
                    <Button size="xs" className="mt-3">
                      <HiPencilAlt className="mr-1.5 h-3 w-3" />Edit
                    </Button>
                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700 space-y-2.5 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiLocationMarker className="h-4 w-4 shrink-0" />
                      <span>San Diego, California, United States</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiBriefcase className="h-4 w-4 shrink-0" />
                      <span>Freelance Developer</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiGlobeAlt className="h-4 w-4 shrink-0" />
                      <span>Languages: English, French, Spanish</span>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="mt-4 flex items-center justify-center gap-3">
                    {["f", "tw", "in", "gh", "yt"].map((s) => (
                      <button key={s} className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Timezone</span>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">UTC-08:00</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-right">Pacific Standard Time</p>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <Label>Language</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Choose your account type</p>
                    </div>
                    <div>
                      <Label>Date of birth</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Select date</p>
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Choose your gender</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4" size="sm">Save</Button>
                </div>
              </div>

              {/* Right — personal info */}
              <div className="xl:col-span-2 space-y-4">

                {/* Bio */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Personal information ⓘ</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Full name</p>
                      <p className="font-medium text-gray-900 dark:text-white">Kilo Johnson</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Email Address</p>
                      <p className="font-medium text-gray-900 dark:text-white">kilo@scrippshealth.org</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Phone Number</p>
                      <p className="font-medium text-gray-900 dark:text-white">+1 (619) 555-0100</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Website Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {skills.map((s) => (
                          <Badge key={s} color="gray" size="xs">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Biography</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      I am Joseph McFall, a recent explorer navigating the intricate pathways of web design, driven by a passion for the principles of Flat Design 3 and Artificial Intelligence. From the early days of tinkering with computers to my current standing as a web designer, my journey is a testimony of a dynamic evolution marked by a relentless pursuit of innovation.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5"><HiLocationMarker className="h-4 w-4" /> California, United States of America</div>
                  </div>

                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Job Title</span>
                    <span className="font-medium text-gray-900 dark:text-white">Frontend Developer</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" color="alternative"><HiPencilAlt className="mr-1.5 h-3.5 w-3.5" />Edit</Button>
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Education &amp; experience ⓘ</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Experience</h4>
                      <div className="space-y-4">
                        {experience.map((e) => (
                          <div key={e.company} className="flex items-start gap-3">
                            <div className="h-9 w-9 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: e.color }}>
                              {e.logo}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{e.role}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{e.company} · {e.period}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Education</h4>
                      <div className="space-y-4">
                        {education.map((e) => (
                          <div key={e.school} className="flex items-start gap-3">
                            <div className="h-9 w-9 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: e.color }}>
                              {e.logo}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{e.school}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{e.dept}</p>
                              <p className="text-xs text-gray-400 dark:text-gray-500">{e.period}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button size="sm" color="alternative" className="mt-4"><HiPencilAlt className="mr-1.5 h-3.5 w-3.5" />Edit</Button>
                </div>

              </div>
            </div>
          </div>
        )}

        {activeTab !== "Overview" && (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">{activeTab} tab — coming soon</p>
          </div>
        )}

      </div>
    </PreviewShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{children}</p>;
}
