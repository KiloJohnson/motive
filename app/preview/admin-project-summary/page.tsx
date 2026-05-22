"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Commits heatmap — static data replacing generateData(53, {min:0,max:90}) ─

const commitsSeries = [
  {
    name: "Mon",
    data: [
      { x: "1",  y: 12 }, { x: "2",  y: 0  }, { x: "3",  y: 45 }, { x: "4",  y: 30 }, { x: "5",  y: 0  },
      { x: "6",  y: 72 }, { x: "7",  y: 18 }, { x: "8",  y: 0  }, { x: "9",  y: 55 }, { x: "10", y: 40 },
      { x: "11", y: 0  }, { x: "12", y: 82 }, { x: "13", y: 25 }, { x: "14", y: 60 }, { x: "15", y: 0  },
      { x: "16", y: 38 }, { x: "17", y: 70 }, { x: "18", y: 15 }, { x: "19", y: 0  }, { x: "20", y: 50 },
      { x: "21", y: 85 }, { x: "22", y: 5  }, { x: "23", y: 42 }, { x: "24", y: 0  }, { x: "25", y: 67 },
      { x: "26", y: 22 }, { x: "27", y: 0  }, { x: "28", y: 78 }, { x: "29", y: 35 }, { x: "30", y: 10 },
      { x: "31", y: 58 }, { x: "32", y: 0  }, { x: "33", y: 90 }, { x: "34", y: 28 }, { x: "35", y: 0  },
      { x: "36", y: 47 }, { x: "37", y: 63 }, { x: "38", y: 8  }, { x: "39", y: 0  }, { x: "40", y: 52 },
      { x: "41", y: 75 }, { x: "42", y: 0  }, { x: "43", y: 33 }, { x: "44", y: 20 }, { x: "45", y: 88 },
      { x: "46", y: 0  }, { x: "47", y: 44 }, { x: "48", y: 16 }, { x: "49", y: 0  }, { x: "50", y: 60 },
      { x: "51", y: 3  }, { x: "52", y: 71 }, { x: "53", y: 0  },
    ],
  },
  {
    name: "Tue",
    data: [
      { x: "1",  y: 0  }, { x: "2",  y: 55 }, { x: "3",  y: 20 }, { x: "4",  y: 0  }, { x: "5",  y: 80 },
      { x: "6",  y: 10 }, { x: "7",  y: 0  }, { x: "8",  y: 65 }, { x: "9",  y: 30 }, { x: "10", y: 48 },
      { x: "11", y: 0  }, { x: "12", y: 72 }, { x: "13", y: 5  }, { x: "14", y: 0  }, { x: "15", y: 88 },
      { x: "16", y: 25 }, { x: "17", y: 0  }, { x: "18", y: 60 }, { x: "19", y: 42 }, { x: "20", y: 0  },
      { x: "21", y: 35 }, { x: "22", y: 77 }, { x: "23", y: 0  }, { x: "24", y: 50 }, { x: "25", y: 15 },
      { x: "26", y: 0  }, { x: "27", y: 90 }, { x: "28", y: 22 }, { x: "29", y: 58 }, { x: "30", y: 0  },
      { x: "31", y: 40 }, { x: "32", y: 68 }, { x: "33", y: 0  }, { x: "34", y: 83 }, { x: "35", y: 12 },
      { x: "36", y: 0  }, { x: "37", y: 47 }, { x: "38", y: 73 }, { x: "39", y: 0  }, { x: "40", y: 28 },
      { x: "41", y: 56 }, { x: "42", y: 0  }, { x: "43", y: 85 }, { x: "44", y: 18 }, { x: "45", y: 0  },
      { x: "46", y: 64 }, { x: "47", y: 32 }, { x: "48", y: 0  }, { x: "49", y: 75 }, { x: "50", y: 8  },
      { x: "51", y: 0  }, { x: "52", y: 43 }, { x: "53", y: 60 },
    ],
  },
  {
    name: "Wed",
    data: [
      { x: "1",  y: 38 }, { x: "2",  y: 0  }, { x: "3",  y: 70 }, { x: "4",  y: 15 }, { x: "5",  y: 55 },
      { x: "6",  y: 0  }, { x: "7",  y: 82 }, { x: "8",  y: 28 }, { x: "9",  y: 0  }, { x: "10", y: 63 },
      { x: "11", y: 45 }, { x: "12", y: 0  }, { x: "13", y: 90 }, { x: "14", y: 20 }, { x: "15", y: 52 },
      { x: "16", y: 0  }, { x: "17", y: 75 }, { x: "18", y: 8  }, { x: "19", y: 48 }, { x: "20", y: 0  },
      { x: "21", y: 68 }, { x: "22", y: 30 }, { x: "23", y: 0  }, { x: "24", y: 85 }, { x: "25", y: 12 },
      { x: "26", y: 57 }, { x: "27", y: 0  }, { x: "28", y: 40 }, { x: "29", y: 72 }, { x: "30", y: 0  },
      { x: "31", y: 25 }, { x: "32", y: 60 }, { x: "33", y: 0  }, { x: "34", y: 78 }, { x: "35", y: 35 },
      { x: "36", y: 0  }, { x: "37", y: 50 }, { x: "38", y: 88 }, { x: "39", y: 5  }, { x: "40", y: 0  },
      { x: "41", y: 65 }, { x: "42", y: 22 }, { x: "43", y: 0  }, { x: "44", y: 80 }, { x: "45", y: 42 },
      { x: "46", y: 0  }, { x: "47", y: 18 }, { x: "48", y: 70 }, { x: "49", y: 0  }, { x: "50", y: 33 },
      { x: "51", y: 58 }, { x: "52", y: 0  }, { x: "53", y: 45 },
    ],
  },
  {
    name: "Thu",
    data: [
      { x: "1",  y: 0  }, { x: "2",  y: 62 }, { x: "3",  y: 0  }, { x: "4",  y: 88 }, { x: "5",  y: 25 },
      { x: "6",  y: 50 }, { x: "7",  y: 0  }, { x: "8",  y: 75 }, { x: "9",  y: 10 }, { x: "10", y: 0  },
      { x: "11", y: 55 }, { x: "12", y: 40 }, { x: "13", y: 0  }, { x: "14", y: 82 }, { x: "15", y: 18 },
      { x: "16", y: 65 }, { x: "17", y: 0  }, { x: "18", y: 45 }, { x: "19", y: 78 }, { x: "20", y: 0  },
      { x: "21", y: 32 }, { x: "22", y: 58 }, { x: "23", y: 0  }, { x: "24", y: 70 }, { x: "25", y: 22 },
      { x: "26", y: 0  }, { x: "27", y: 85 }, { x: "28", y: 15 }, { x: "29", y: 48 }, { x: "30", y: 0  },
      { x: "31", y: 72 }, { x: "32", y: 28 }, { x: "33", y: 60 }, { x: "34", y: 0  }, { x: "35", y: 90 },
      { x: "36", y: 35 }, { x: "37", y: 0  }, { x: "38", y: 55 }, { x: "39", y: 42 }, { x: "40", y: 0  },
      { x: "41", y: 80 }, { x: "42", y: 12 }, { x: "43", y: 68 }, { x: "44", y: 0  }, { x: "45", y: 38 },
      { x: "46", y: 75 }, { x: "47", y: 0  }, { x: "48", y: 50 }, { x: "49", y: 20 }, { x: "50", y: 0  },
      { x: "51", y: 83 }, { x: "52", y: 30 }, { x: "53", y: 0  },
    ],
  },
  {
    name: "Fri",
    data: [
      { x: "1",  y: 50 }, { x: "2",  y: 0  }, { x: "3",  y: 35 }, { x: "4",  y: 72 }, { x: "5",  y: 0  },
      { x: "6",  y: 28 }, { x: "7",  y: 60 }, { x: "8",  y: 0  }, { x: "9",  y: 85 }, { x: "10", y: 20 },
      { x: "11", y: 47 }, { x: "12", y: 0  }, { x: "13", y: 65 }, { x: "14", y: 40 }, { x: "15", y: 0  },
      { x: "16", y: 78 }, { x: "17", y: 10 }, { x: "18", y: 55 }, { x: "19", y: 0  }, { x: "20", y: 32 },
      { x: "21", y: 0  }, { x: "22", y: 88 }, { x: "23", y: 15 }, { x: "24", y: 0  }, { x: "25", y: 62 },
      { x: "26", y: 45 }, { x: "27", y: 0  }, { x: "28", y: 80 }, { x: "29", y: 25 }, { x: "30", y: 58 },
      { x: "31", y: 0  }, { x: "32", y: 70 }, { x: "33", y: 18 }, { x: "34", y: 42 }, { x: "35", y: 0  },
      { x: "36", y: 90 }, { x: "37", y: 30 }, { x: "38", y: 0  }, { x: "39", y: 67 }, { x: "40", y: 52 },
      { x: "41", y: 0  }, { x: "42", y: 75 }, { x: "43", y: 8  }, { x: "44", y: 38 }, { x: "45", y: 0  },
      { x: "46", y: 55 }, { x: "47", y: 22 }, { x: "48", y: 0  }, { x: "49", y: 85 }, { x: "50", y: 48 },
      { x: "51", y: 0  }, { x: "52", y: 60 }, { x: "53", y: 12 },
    ],
  },
  {
    name: "Sat",
    data: [
      { x: "1",  y: 0  }, { x: "2",  y: 20 }, { x: "3",  y: 0  }, { x: "4",  y: 48 }, { x: "5",  y: 0  },
      { x: "6",  y: 35 }, { x: "7",  y: 0  }, { x: "8",  y: 62 }, { x: "9",  y: 0  }, { x: "10", y: 15 },
      { x: "11", y: 0  }, { x: "12", y: 50 }, { x: "13", y: 0  }, { x: "14", y: 28 }, { x: "15", y: 0  },
      { x: "16", y: 70 }, { x: "17", y: 0  }, { x: "18", y: 10 }, { x: "19", y: 0  }, { x: "20", y: 45 },
      { x: "21", y: 0  }, { x: "22", y: 80 }, { x: "23", y: 0  }, { x: "24", y: 22 }, { x: "25", y: 0  },
      { x: "26", y: 58 }, { x: "27", y: 0  }, { x: "28", y: 38 }, { x: "29", y: 0  }, { x: "30", y: 72 },
      { x: "31", y: 0  }, { x: "32", y: 8  }, { x: "33", y: 0  }, { x: "34", y: 55 }, { x: "35", y: 0  },
      { x: "36", y: 30 }, { x: "37", y: 0  }, { x: "38", y: 85 }, { x: "39", y: 0  }, { x: "40", y: 18 },
      { x: "41", y: 0  }, { x: "42", y: 65 }, { x: "43", y: 0  }, { x: "44", y: 40 }, { x: "45", y: 0  },
      { x: "46", y: 78 }, { x: "47", y: 0  }, { x: "48", y: 25 }, { x: "49", y: 0  }, { x: "50", y: 52 },
      { x: "51", y: 0  }, { x: "52", y: 33 }, { x: "53", y: 0  },
    ],
  },
  {
    name: "Sun",
    data: [
      { x: "1",  y: 0  }, { x: "2",  y: 0  }, { x: "3",  y: 5  }, { x: "4",  y: 0  }, { x: "5",  y: 30 },
      { x: "6",  y: 0  }, { x: "7",  y: 0  }, { x: "8",  y: 18 }, { x: "9",  y: 0  }, { x: "10", y: 0  },
      { x: "11", y: 42 }, { x: "12", y: 0  }, { x: "13", y: 0  }, { x: "14", y: 65 }, { x: "15", y: 0  },
      { x: "16", y: 0  }, { x: "17", y: 25 }, { x: "18", y: 0  }, { x: "19", y: 0  }, { x: "20", y: 80 },
      { x: "21", y: 0  }, { x: "22", y: 0  }, { x: "23", y: 12 }, { x: "24", y: 0  }, { x: "25", y: 0  },
      { x: "26", y: 50 }, { x: "27", y: 0  }, { x: "28", y: 0  }, { x: "29", y: 35 }, { x: "30", y: 0  },
      { x: "31", y: 0  }, { x: "32", y: 72 }, { x: "33", y: 0  }, { x: "34", y: 0  }, { x: "35", y: 20 },
      { x: "36", y: 0  }, { x: "37", y: 0  }, { x: "38", y: 55 }, { x: "39", y: 0  }, { x: "40", y: 0  },
      { x: "41", y: 38 }, { x: "42", y: 0  }, { x: "43", y: 0  }, { x: "44", y: 88 }, { x: "45", y: 0  },
      { x: "46", y: 0  }, { x: "47", y: 15 }, { x: "48", y: 0  }, { x: "49", y: 0  }, { x: "50", y: 62 },
      { x: "51", y: 0  }, { x: "52", y: 0  }, { x: "53", y: 28 },
    ],
  },
];

const commitsOptions = {
  colors: ["#1A56DB"],
  chart: {
    width: "100%" as const,
    height: 350,
    type: "heatmap" as const,
    toolbar: { show: false },
  },
  grid: {
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  dataLabels: { enabled: false },
  yaxis: {
    show: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
  },
  tooltip: {
    shared: false,
    followCursor: true,
    fillSeriesColor: true,
    style: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
    y: {
      formatter: (value: number) => value + " commits",
    },
  },
  xaxis: {
    type: "category" as const,
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    floating: false,
    labels: {
      show: true,
      trim: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        yaxis: { labels: { show: false } },
      },
    },
  ],
};

// ── File table data ────────────────────────────────────────────────────────

const files = [
  {
    name: "Flowbite Pro Terms & Conditions",
    icon: "pdf",
    details: "12 pages · 18 MB · PDF",
    user: "Roberta Casas",
    date: "Today",
  },
  {
    name: "HeroImage.jpg",
    icon: "img",
    details: "5.6 MB · JPG",
    user: "Bonnie Green",
    date: "1 day ago",
  },
  {
    name: "FlowbiteMusic.mp3",
    icon: "audio",
    details: "4.7 MB · MP3",
    user: "Leslie Livingston",
    date: "1 day ago",
  },
  {
    name: "ProjectPresentation.ppt",
    icon: "ppt",
    details: "47 Pages · 5 MB · PPT",
    user: "Micheal Gough",
    date: "3 days ago",
  },
  {
    name: "HomepageVideo.mp4",
    icon: "video",
    details: "123 MB · MP4",
    user: "Joseph McFall",
    date: "3 days ago",
  },
  {
    name: "ProjectData.csv",
    icon: "csv",
    details: "1 MB · CSV",
    user: "Robert Brown",
    date: "3 days ago",
  },
  {
    name: "FlowbiteMusic.mp4",
    icon: "audio",
    details: "18 MB · MP4",
    user: "Karen Nelson",
    date: "6 days ago",
  },
  {
    name: "PortfolioImages.zip",
    icon: "zip",
    details: "50 Files · 37 MB · ZIP",
    user: "Helene Engels",
    date: "1 week ago",
  },
  {
    name: "Flowbite Pro Terms & Conditions",
    icon: "pdf",
    details: "12 pages · 18 MB · PDF",
    user: "Neils Sims",
    date: "1 week ago",
  },
  {
    name: "HeroImage.jpg",
    icon: "img",
    details: "5.6 MB · JPG",
    user: "Bonnie Green",
    date: "1 week ago",
  },
];

// ── Generic file icon ──────────────────────────────────────────────────────

function FileIcon({ type }: { type: string }) {
  // PDF
  if (type === "pdf") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h1.4a2.6 2.6 0 0 0 2.6-2.6v-1.8a2.6 2.6 0 0 0-2.6-2.6H11Zm1 5v-3h.4a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 1-.6.6H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
    </svg>
  );
  // Image
  if (type === "img") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
    </svg>
  );
  // Audio / music
  if (type === "audio") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2.3 0A1 1 0 0 0 12 8v5.3a4 4 0 0 0-1.5-.3C8.8 13 7 14.1 7 16s1.8 3 3.5 3 3.5-1.1 3.5-3V9.8a3 3 0 0 1 1 2.2 1 1 0 1 0 2 0 5 5 0 0 0-1.9-3.9 6.4 6.4 0 0 0-1.8-1ZM9 16c0-.4.5-1 1.5-1s1.5.6 1.5 1-.5 1-1.5 1S9 16.4 9 16Z" clipRule="evenodd" />
    </svg>
  );
  // PPT / presentation
  if (type === "ppt") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1 8.8A2.3 2.3 0 0 0 9.6 13a2.3 2.3 0 0 0 2.1 2.5h.7a.3.3 0 0 1 .2.4l-.4.1h-1a1 1 0 1 0 0 2h1c.5 0 1 0 1.4-.3a2 2 0 0 0 1-1.1 2.3 2.3 0 0 0-2.2-3l-.5-.1a.3.3 0 0 1-.3-.4.3.3 0 0 1 .4-.3h1a1 1 0 1 0 0-2h-1Zm8 1.5a1 1 0 1 0-2-.6l-.5 1.7-.5-1.7a1 1 0 0 0-2 .6l1.5 4.8a1 1 0 0 0 1.9 0l1.6-4.8Zm-13.8.9.4-.2h1a1 1 0 1 0 0-2h-1A2.6 2.6 0 0 0 4 13.6v1.8A2.6 2.6 0 0 0 6.6 18h1a1 1 0 1 0 0-2h-1a.6.6 0 0 1-.6-.6v-1.8c0-.1 0-.3.2-.4Z" clipRule="evenodd" />
    </svg>
  );
  // Video
  if (type === "video") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm8-.6a1 1 0 0 0-1.7-.7L14 13a1 1 0 0 0-.3.8v.7c0 .3.1.6.4.8l1.2 1a1 1 0 0 0 1.7-.8v-3Z" clipRule="evenodd" />
    </svg>
  );
  // CSV
  if (type === "csv") return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1 8.8A2.3 2.3 0 0 0 9.6 13a2.3 2.3 0 0 0 2.1 2.5h.7a.3.3 0 0 1 .2.4l-.4.1h-1a1 1 0 1 0 0 2h1c.5 0 1 0 1.4-.3a2 2 0 0 0 1-1.1 2.3 2.3 0 0 0-2.2-3l-.5-.1a.3.3 0 0 1-.3-.4.3.3 0 0 1 .4-.3h1a1 1 0 1 0 0-2h-1Zm8 1.5a1 1 0 1 0-2-.6l-.5 1.7-.5-1.7a1 1 0 0 0-2 .6l1.5 4.8a1 1 0 0 0 1.9 0l1.6-4.8Zm-13.8.9.4-.2h1a1 1 0 1 0 0-2h-1A2.6 2.6 0 0 0 4 13.6v1.8A2.6 2.6 0 0 0 6.6 18h1a1 1 0 1 0 0-2h-1a.6.6 0 0 1-.6-.6v-1.8c0-.1 0-.3.2-.4Z" clipRule="evenodd" />
    </svg>
  );
  // ZIP
  return (
    <svg className="me-1.5 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm3 2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4Z" clipRule="evenodd" />
    </svg>
  );
}

// ── Dots menu icon ─────────────────────────────────────────────────────────

function DotsMenuIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
    </svg>
  );
}

// ── Tool icons ─────────────────────────────────────────────────────────────

function ToolIcons() {
  return (
    <dd className="flex items-center space-x-2 text-gray-900 dark:text-white">
      {/* Jira */}
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
        <path fill="#DC395F" d="M15.156.098H1.51C.676.098 0 .776 0 1.612v13.671c0 .836.676 1.514 1.51 1.514h13.646c.834 0 1.51-.678 1.51-1.514V1.612c0-.836-.676-1.514-1.51-1.514" />
        <path fill="#fff" fillRule="evenodd" d="M6.585 4.346c0 .57-.464 1.005-1.018 1.005a1.007 1.007 0 0 1-1.018-1.005c0-.57.464-1.005 1.018-1.005s1.018.435 1.018 1.005ZM3.366 11.49c0-.225.03-.5.09-.755L4.22 7.61H3.037l.36-1.329H6.24l-1.123 4.464a2.833 2.833 0 0 0-.105.686c0 .286.14.369.36.419.133.03 1.197.009 1.777-1.281l.737-2.96H6.69l.36-1.328h2.56l-.33 1.508c.45-.84 1.348-1.638 2.232-1.638.943 0 1.721.673 1.721 1.963 0 .33-.045.69-.164 1.094l-.48 1.725c-.044.18-.074.33-.074.465 0 .3.12.45.344.45.225 0 .51-.165.839-1.08l.658.255c-.389 1.365-1.093 1.935-1.976 1.935-1.033 0-1.527-.615-1.527-1.455 0-.24.03-.495.104-.75l.495-1.77a1.8 1.8 0 0 0 .074-.54c0-.57-.344-.916-.898-.916-.704 0-1.168.506-1.407 1.482l-.959 3.85H6.585l.3-1.21c-.492.812-1.177 1.314-2.021 1.314-1.018 0-1.498-.588-1.498-1.473Z" clipRule="evenodd" />
      </svg>
      {/* Sketch */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 18 17">
        <path fill="#FDB300" d="M4.297 1.301 8.985.798l4.688.503 3.629 4.952-8.317 9.844L.668 6.253l3.63-4.952Z" />
        <path fill="#EA6C00" d="m4.035 6.254 4.948 9.844L.667 6.254h3.368Z" />
        <path fill="#EA6C00" d="M13.929 6.254 8.98 16.098l8.316-9.844H13.93Z" />
        <path fill="#FDAD00" d="M4.034 6.254h9.896l-4.948 9.844-4.948-9.844Z" />
        <path fill="#FDD231" d="M8.984.798 4.296 1.3l-.26 4.952L8.984.798Z" />
        <path fill="#FDD231" d="m8.982.798 4.688.503.26 4.952L8.982.798Z" />
        <path fill="#FDAD00" d="M17.3 6.253 13.67 1.3l.26 4.952h3.37Zm-16.633 0L4.296 1.3l-.26 4.952H.665Z" />
        <path fill="#FEEEB7" d="M8.984.798 4.036 6.253h9.895L8.985.798Z" />
      </svg>
      {/* Figma */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 12 17">
        <path fill="#0ACF83" d="M3.08 16.795a2.781 2.781 0 0 0 2.777-2.783V11.23H3.08a2.781 2.781 0 0 0-2.778 2.782 2.781 2.781 0 0 0 2.778 2.783Z" />
        <path fill="#A259FF" d="M.302 8.448A2.781 2.781 0 0 1 3.08 5.665h2.777v5.565H3.08A2.781 2.781 0 0 1 .302 8.448Z" />
        <path fill="#F24E1E" d="M.302 2.883A2.781 2.781 0 0 1 3.08.1h2.777v5.565H3.08A2.781 2.781 0 0 1 .302 2.883Z" />
        <path fill="#FF7262" d="M5.858.1h2.778a2.781 2.781 0 0 1 2.778 2.783 2.781 2.781 0 0 1-2.778 2.782H5.858V.1Z" />
        <path fill="#1ABCFE" d="M11.414 8.448a2.781 2.781 0 0 1-2.778 2.782 2.781 2.781 0 0 1-2.778-2.782 2.781 2.781 0 0 1 2.778-2.783 2.781 2.781 0 0 1 2.778 2.783Z" />
      </svg>
      {/* HTML5 */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 13 19">
        <path fill="#000" fillRule="evenodd" d="M4.123 1.631H4.8v1.544h.767V1.63h.681V.86H4.123v.771ZM2.31.86h-.767v2.315h.774v-.772h.7v.772h.768V.86h-.768v.765H2.31V.86Zm4.274 0h.804l.494.815.493-.815h.804v2.315h-.767V2.027l-.537.832-.537-.832v1.148h-.754V.86Zm3.744 0H9.56v2.315h1.854V2.41h-1.087V.86Z" clipRule="evenodd" />
        <path fill="#E44D26" d="M1.515 16.66.415 4.234h12.102l-1.101 12.42-4.96 1.381" />
        <path fill="#F16529" d="M6.465 16.98V5.254h4.947l-.944 10.6" />
        <path fill="#EBEBEB" fillRule="evenodd" d="M6.467 6.774H2.664l.414 4.603h3.39v-1.52H4.464l-.14-1.56h2.142V6.774Zm-1.803 5.369H3.143l.213 2.391 3.11.873v-1.59L4.77 13.36l-.107-1.217Z" clipRule="evenodd" />
        <path fill="#fff" fillRule="evenodd" d="M6.459 6.774h3.796l-.14 1.523H6.46V6.774Zm-.002 3.084h3.52l-.418 4.676-3.102.866v-1.584l1.691-.456.177-1.98H6.457V9.859Z" clipRule="evenodd" />
      </svg>
      {/* CSS3 */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 16 15">
        <path fill="#2E001F" d="M13.274 14.765H3.037c-1.388 0-2.52-1.115-2.52-2.482v-9.67C.517 1.245 1.649.13 3.037.13h10.23c1.395 0 2.52 1.115 2.52 2.483v9.663c.007 1.374-1.125 2.49-2.514 2.49Z" />
        <path fill="#FFD9F2" fillRule="evenodd" d="m6.411 6.935 1.945 3.68c.035.054.014.109-.042.109H7.106c-.077 0-.111-.02-.146-.09l-.346-.7c-.333-.673-.67-1.356-1.015-2.076h-.014c-.417.917-.875 1.88-1.32 2.784-.034.054-.069.075-.124.075H2.995c-.07 0-.077-.055-.042-.096l1.903-3.57-1.84-3.61c-.042-.055 0-.097.041-.097h1.195c.07 0 .097.014.125.076.437.902.882 1.833 1.298 2.742h.014c.403-.903.847-1.84 1.278-2.735l.001-.002c.034-.054.055-.087.124-.087H8.21c.056 0 .076.04.042.095l-1.84 3.502ZM8.696 8.05c0-1.594 1.077-2.839 2.785-2.839.146 0 .222 0 .361.014V3.413a.07.07 0 0 1 .07-.069h1.097c.055 0 .07.021.07.055v6.278c0 .185 0 .417.034.67 0 .042-.014.055-.056.076a4.19 4.19 0 0 1-1.777.396c-1.507.007-2.584-.91-2.584-2.77Zm2.744-1.82c.167 0 .306.028.403.069v3.385a1.329 1.329 0 0 1-.48.075c-.784 0-1.409-.506-1.409-1.764 0-1.101.611-1.765 1.486-1.765Z" clipRule="evenodd" />
      </svg>
    </dd>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminProjectSummaryPage() {
  return (
    <PreviewShell variant="admin" title="Project Summary">

      {/* Breadcrumb + heading */}
      <div className="my-4 px-4">
        <nav className="mb-4 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Project summary</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Project summary</h1>
      </div>

      {/* Main content */}
      <div className="mb-4 grid gap-4 px-4">

        {/* 1 ── Commits heatmap */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div>
            <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Commits over time</h2>
            <p className="text-gray-500 dark:text-gray-400">Number of commits for this project</p>
          </div>
          <ReactApexChart options={commitsOptions} series={commitsSeries} type="heatmap" height={350} />
        </div>

        {/* 2 ── Project information */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">Project information</h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 2xl:gap-60">

            {/* Left column */}
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Project name</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">Flowbite Website</dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Description</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                From sleek and modern designs to functional and user-friendly interfaces, we ensure you that your website not only captivates visitors but also delivers an exceptional browsing experience across all devices.
              </dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Team</dt>
              <dd className="mb-4 flex -space-x-4 sm:mb-5 rtl:space-x-reverse">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-sm font-bold text-white dark:border-gray-800">HE</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-green-600 text-sm font-bold text-white dark:border-gray-800">JL</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-sm font-bold text-white dark:border-gray-800">BG</div>
                <a className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800" href="#">+2</a>
              </dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Duration</dt>
              <dd className="flex items-center text-gray-900 dark:text-white">
                <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">2 months</span>
              </dd>
            </dl>

            {/* Right column */}
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Project budget</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">$10,000 - $50,000</dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Beneficiary of the project</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">Flowbite LLC</dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Project priority</dt>
              <dd className="mb-4 sm:mb-5">
                <span className="me-2 inline-flex items-center rounded-sm bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.6 3.2a1 1 0 0 0-1.6 1 3.5 3.5 0 0 1-.8 3.6c-.6.8-4 5.6-1 10.7A7.7 7.7 0 0 0 12 22a8 8 0 0 0 7-3.8 7.8 7.8 0 0 0 .6-6.5 8.7 8.7 0 0 0-2.6-4 1 1 0 0 0-1.6.7 10 10 0 0 1-.8 3.4 9.9 9.9 0 0 0-2.2-5.5A14.4 14.4 0 0 0 9 3.5l-.4-.3Z" />
                  </svg>
                  High
                </span>
              </dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Tools</dt>
              <ToolIcons />
            </dl>
          </div>

          {/* Edit button */}
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:mt-5 sm:pt-5">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.8 1.3l-2.5 2.5A4 4 0 0 1 5 8Zm4 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h2.2a3 3 0 0 1-.1-1.6l.6-3.4a3 3 0 0 1 .9-1.5L9 13Zm9-5a3 3 0 0 0-2 .9l-6 6a1 1 0 0 0-.3.5L9 18.8a1 1 0 0 0 1.2 1.2l3.4-.7c.2 0 .3-.1.5-.3l6-6a3 3 0 0 0-2-5Z" clipRule="evenodd" />
              </svg>
              Edit
            </button>
          </div>
        </div>

        {/* 3 ── Files and assets table */}
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">

          {/* Table header */}
          <div className="flex-row items-start justify-between space-y-3 p-4 sm:flex sm:space-x-4 sm:space-y-0 sm:p-6">
            <div>
              <h2 className="me-3 text-xl font-bold dark:text-white">Files and assets</h2>
              <p className="text-gray-500 dark:text-gray-400">Manage all your existing users or add a new one</p>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
              </svg>
              Add new file
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold sm:px-6">File name</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold sm:px-6">Details</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold sm:px-6">User</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold sm:px-6">Date added</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white sm:px-6">
                      <div className="flex items-center">
                        <FileIcon type={file.icon} />
                        {file.name}
                      </div>
                    </th>
                    <td className="text-nowrap px-4 py-3 sm:px-6">{file.details}</td>
                    <td className="text-nowrap px-4 py-3 sm:px-6">
                      <div className="mr-3 flex items-center font-medium text-gray-900 dark:text-white">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600 dark:bg-gray-600 dark:text-gray-200">
                          {file.user.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        {file.user}
                      </div>
                    </td>
                    <td className="max-w-48 whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white sm:px-6">{file.date}</td>
                    <td className="flex items-center justify-end px-4 py-3 sm:px-6">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        aria-label="File actions"
                      >
                        <DotsMenuIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav className="flex flex-col items-start justify-between space-y-3 p-4 sm:p-6 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">78</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                  </svg>
                </a>
              </li>
              {["1", "2", "3", "...", "7"].map((pg, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`flex items-center justify-center border px-3 py-2 text-sm leading-tight ${
                      pg === "3"
                        ? "z-10 border-primary-300 bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                  >
                    {pg}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </PreviewShell>
  );
}
