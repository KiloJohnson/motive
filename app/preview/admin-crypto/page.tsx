"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY = "#1A56DB";
const SUCCESS = "#0E9F6E";

// Portfolio chart — datetime series (trimmed to a representative subset for performance)
const portfolioSeries = [
  {
    name: "Portfolio value",
    color: PRIMARY,
    data: [
      [1327359600000, 730678.95],
      [1327446000000, 731846.34],
      [1327532400000, 731234.18],
      [1327618800000, 731243.05],
      [1327878000000, 731957.0],
      [1327964400000, 730735.95],
      [1328050800000, 731735.24],
      [1328137200000, 731126.29],
      [1328223600000, 731745.85],
      [1328482800000, 731068.86],
      [1328569200000, 732845.28],
      [1328655600000, 737352.1],
      [1328742000000, 732869.65],
      [1328828400000, 732427.21],
      [1329087600000, 737582.35],
      [1329174000000, 732445.44],
      [1329260400000, 732334.46],
      [1329346800000, 732456.86],
      [1329433200000, 732334.75],
      [1329778800000, 732100.54],
      [1329865200000, 732355.33],
      [1329951600000, 732869.97],
      [1330038000000, 733399.41],
      [1330297200000, 733483.27],
      [1330383600000, 733293.27],
      [1330470000000, 732947.89],
      [1330556400000, 733947.1],
      [1330642800000, 733234.73],
      [1330902000000, 733342.22],
      [1330988400000, 731947.99],
      [1331074800000, 732836.41],
      [1331161200000, 733867.05],
      [1331247600000, 733375.64],
      [1331506800000, 733068.56],
      [1331593200000, 734746.22],
      [1331679600000, 733475.77],
      [1331766000000, 734345.17],
      [1331852400000, 733947.82],
      [1332111600000, 734264.51],
      [1332198000000, 733843.16],
      [1332284400000, 733247.56],
      [1332370800000, 733624.71],
      [1332457200000, 733134.81],
      [1332712800000, 734589.4],
      [1332799200000, 734964.63],
      [1332885600000, 734274.46],
      [1332972000000, 734368.48],
      [1333058400000, 734958.31],
      [1333317600000, 734845.7],
      [1333404000000, 734346.31],
      [1333490400000, 733374.46],
      [1333576800000, 733058.59],
      [1333922400000, 733346.22],
      [1334008800000, 732967.61],
      [1334095200000, 733485.01],
      [1334181600000, 733836.55],
      [1345500000000, 733468.75],
      [1345586400000, 733473.84],
      [1345672800000, 733383.5],
      [1345759200000, 732998.26],
      [1346018400000, 732448.32],
      [1346104800000, 732746.06],
      [1346191200000, 731382.96],
      [1346277600000, 731038.46],
      [1346364000000, 731271.27],
      [1346709600000, 731949.43],
      [1346796000000, 732826.26],
      [1346882400000, 732184.79],
      [1346968800000, 732222.46],
      [1347228000000, 732776.13],
      [1347314400000, 732123.43],
      [1347400800000, 732353.42],
      [1347487200000, 732758.81],
      [1347573600000, 733222.34],
      [1347832800000, 733427.41],
      [1347919200000, 732275.57],
      [1348005600000, 733267.12],
      [1348092000000, 734273.53],
      [1348178400000, 733837.83],
      [1348437600000, 733333.41],
      [1348524000000, 732435.9],
      [1348610400000, 732333.53],
      [1348696800000, 732567.8],
      [1348783200000, 732262.44],
      [1349042400000, 732836.62],
      [1349128800000, 732746.57],
      [1349215200000, 732246.6],
      [1349301600000, 732235.68],
      [1349388000000, 732523.47],
      [1349647200000, 732997.23],
      [1349733600000, 731346.68],
      [1349820000000, 731222.51],
      [1349906400000, 731324.78],
      [1349992800000, 731444.94],
      [1350252000000, 732384.33],
      [1350338400000, 733374.24],
      [1350424800000, 733746.44],
      [1350511200000, 733847.48],
      [1350597600000, 733343.24],
      [1355094000000, 735564.75],
      [1355180400000, 735235.54],
      [1355266800000, 735238.96],
      [1355353200000, 735856.53],
      [1355439600000, 737493.56],
      [1355698800000, 737273.42],
      [1355785200000, 737111.49],
      [1355871600000, 738234.09],
      [1355958000000, 737434.87],
      [1356044400000, 737345.71],
      [1357081200000, 738456.34],
      [1357167600000, 737444.75],
      [1357254000000, 738567.13],
      [1357513200000, 737435.94],
      [1357599600000, 738786.14],
      [1357686000000, 738333.66],
      [1357772400000, 738998.62],
      [1357858800000, 738667.09],
      [1358118000000, 738125.16],
      [1358204400000, 738686.15],
      [1358290800000, 737234.88],
      [1358377200000, 737567.73],
      [1358463600000, 737333.98],
      [1358809200000, 737457.95],
      [1358895600000, 738234.25],
      [1358982000000, 738637.1],
      [1359068400000, 738918.32],
      [1359327600000, 738391.24],
      [1359414000000, 738847.52],
      [1359500400000, 737347.94],
      [1359586800000, 737234.83],
      [1359673200000, 738222.34],
      [1359932400000, 738464.1],
      [1360018800000, 738321.51],
      [1360105200000, 737835.4],
      [1360191600000, 738123.07],
      [1360278000000, 739468.12],
      [1361228400000, 738978.99],
      [1361314800000, 738979.77],
      [1361401200000, 738345.34],
      [1361487600000, 738989.55],
      [1361746800000, 738990.11],
      [1361833200000, 738991.59],
      [1361919600000, 739992.6],
    ],
  },
];

const portfolioOptions = {
  chart: {
    height: "520px",
    maxWidth: "100%",
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: 0 },
  },
  xaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      offsetY: 0,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
    type: "datetime" as const,
    min: new Date("01 Mar 2012").getTime(),
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      align: "right" as const,
      minWidth: 60,
      maxWidth: 60,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      offsetX: -20,
      rotate: 0,
      formatter: (val: number) => (val >= 1000 ? "$" + (val / 1000).toFixed(0) + "k" : "$" + val),
    },
  },
  tooltip: { x: { format: "dd MMM yyyy" } },
  fill: {
    type: "gradient" as const,
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: PRIMARY,
      gradientToColors: [PRIMARY],
    },
  },
};

// Coin chart (Bitcoin price sparkline)
const coinSeries = [
  {
    name: "Price",
    data: [2450, 2550, 2578, 2590, 2756, 3020, 3150],
    color: SUCCESS,
  },
];

const coinOptions = {
  chart: {
    height: "360px",
    maxWidth: "100%",
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: true } },
  fill: {
    type: "gradient" as const,
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: SUCCESS,
      gradientToColors: [SUCCESS],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: 0 },
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    labels: {
      show: true,
      trim: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      offsetY: 4,
    },
    axisBorder: { show: false },
    axisTicks: { show: true },
  },
  yaxis: {
    show: true,
    labels: {
      show: false,
      formatter: (val: number) => (val >= 1000 ? "$" + val / 1000 + "k" : "$" + val),
    },
  },
};

// ── Static data ─────────────────────────────────────────────────────────────

const kpis = [
  {
    label: "Total balance",
    value: "$739.9k",
    delta: "7%",
    up: true,
    note: "vs last 24h",
    icon: (
      <svg className="h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "24h portfolio change",
    value: "$82.1k",
    delta: "8.8%",
    up: true,
    note: "vs last 24h",
    icon: (
      <svg className="h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
      </svg>
    ),
  },
  {
    label: "Total Profit/Loss",
    value: "$81.3k",
    delta: "2.5%",
    up: false,
    note: "vs last month",
    icon: (
      <svg className="h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
      </svg>
    ),
  },
  {
    label: "No. of profit days",
    value: "67",
    delta: "5%",
    up: true,
    note: "vs last month",
    icon: (
      <svg className="h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
      </svg>
    ),
  },
];

// Coin SVGs — inlined from source
const BitcoinSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.5211 19.8706C29.3839 28.442 20.7014 33.6585 12.128 31.521C3.55811 29.384 -1.65895 20.7021 0.479281 12.1312C2.61551 3.55876 11.2979 -1.65819 19.8688 0.478793C28.4418 2.61577 33.6583 11.2987 31.5211 19.8706Z" fill="#F7931A" />
    <path d="M23.0552 13.7206C23.3737 11.5916 21.7525 10.4471 19.5358 9.68361L20.2549 6.79963L18.4992 6.36214L17.7991 9.17011C17.3376 9.05511 16.8635 8.94662 16.3924 8.83912L17.0975 6.01264L15.3428 5.57514L14.6233 8.45811C14.2412 8.37111 13.8662 8.28512 13.5021 8.19462L13.5041 8.18562L11.0829 7.58112L10.6158 9.4561C10.6158 9.4561 11.9185 9.7546 11.891 9.7731C12.602 9.95059 12.7306 10.4211 12.7091 10.7941L11.89 14.0796C11.939 14.0921 12.0025 14.1101 12.0725 14.1381C12.014 14.1236 11.9515 14.1076 11.887 14.0921L10.7388 18.6945C10.6518 18.9105 10.4313 19.2345 9.93427 19.1115C9.95177 19.137 8.65813 18.793 8.65813 18.793L7.78654 20.8025L10.0713 21.372C10.4963 21.4785 10.9129 21.59 11.3229 21.695L10.5963 24.612L12.35 25.0494L13.0696 22.1635C13.5486 22.2935 14.0137 22.4135 14.4687 22.5265L13.7517 25.3989L15.5074 25.8364L16.2339 22.925C19.2278 23.4915 21.479 23.263 22.4266 20.5555C23.1902 18.3755 22.3886 17.118 20.8134 16.298C21.9605 16.0335 22.8246 15.2791 23.0552 13.7206ZM19.0437 19.345C18.5012 21.525 14.8303 20.3465 13.6402 20.051L14.6043 16.1865C15.7944 16.4835 19.6108 17.0715 19.0437 19.345ZM19.5868 13.6891C19.0917 15.672 16.0364 14.6645 15.0453 14.4176L15.9194 10.9126C16.9105 11.1596 20.1023 11.6206 19.5868 13.6891Z" fill="white" />
  </svg>
);

const EthereumSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#F6F6F6" />
    <path d="M15.9989 5.71429L15.8574 6.18309V19.7854L15.9989 19.9231L22.4722 16.1909L15.9989 5.71429Z" fill="#343434" />
    <path d="M15.9973 5.71429L9.52381 16.1909L15.9973 19.9231V13.3209V5.71429Z" fill="#8C8C8C" />
    <path d="M15.9989 21.1184L15.9192 21.2133V26.0586L15.9989 26.2857L22.4762 17.3882L15.9989 21.1184Z" fill="#3C3C3B" />
    <path d="M15.9973 26.2857V21.1184L9.52381 17.3882L15.9973 26.2857Z" fill="#8C8C8C" />
    <path d="M15.9964 19.9228L22.4697 16.1906L15.9964 13.3207V19.9228Z" fill="#141414" />
    <path d="M9.52381 16.1909L15.9973 19.9231V13.3209L9.52381 16.1909Z" fill="#393939" />
  </svg>
);

const LitecoinSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#ltc-clip)">
      <path d="M31.9998 15.9999C31.9998 24.8365 24.8365 32 16 32C7.1634 32 0 24.8365 0 15.9999C0 7.1634 7.1634 0 16 0C24.8364 0 31.9998 7.1634 31.9998 15.9999Z" fill="#BEBEBE" />
      <path d="M28.6029 16.0001C28.6029 22.9601 22.9604 28.603 16 28.603C9.03973 28.603 3.39685 22.9601 3.39685 16.0001C3.39685 9.03951 9.03973 3.39693 16 3.39693C22.9605 3.39693 28.6029 9.03942 28.6029 16.0001Z" fill="#BEBEBE" />
      <path d="M15.0651 20.2743L16.1043 16.3611L18.5647 15.4622L19.1767 13.1624L19.1558 13.1054L16.7339 13.9902L18.4789 7.41943H13.53L11.2479 15.9944L9.34248 16.6905L8.71289 19.0614L10.6168 18.3659L9.27182 23.4195H22.4429L23.2873 20.2743H15.0651Z" fill="white" />
    </g>
    <defs>
      <clipPath id="ltc-clip"><rect width="32" height="32" fill="white" /></clipPath>
    </defs>
  </svg>
);

const DashSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#dash-clip)">
      <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2573C2" />
      <path d="M26.4416 11.7888C26.4201 11.4303 26.3149 11.0817 26.1344 10.7712C25.9744 10.4512 25.6896 10.2016 25.3568 10.0736C25.0174 9.90446 24.6414 9.822 24.2624 9.8336H10.0608L9.0432 12.8832H21.9104L19.8784 19.1168H7.0144L5.9968 22.1664H20.2656C20.6908 22.1541 21.1111 22.073 21.5104 21.9264C21.9104 21.6992 22.368 21.4688 22.7552 21.1488C23.1332 20.8508 23.4748 20.5092 23.7728 20.1312C24.0192 19.7608 24.2292 19.3675 24.4 18.9568L26.2848 13.0304C26.4563 12.6405 26.5107 12.2091 26.4416 11.7888Z" fill="white" />
      <path d="M14.1152 14.5856H6.544L5.5264 17.4048H13.1744L14.1152 14.5856Z" fill="white" />
    </g>
    <defs>
      <clipPath id="dash-clip"><rect width="32" height="32" fill="white" /></clipPath>
    </defs>
  </svg>
);

const DogecoinSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#C2A633" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.7091 24.3699H16.2329C16.2329 24.3699 24 25.0313 24 16.1348C24 7.58322 16.9073 7.61355 15.5365 7.61941C15.5044 7.61955 15.4755 7.61967 15.4498 7.61967H10.7089V15.0812H8.7619V16.9088H10.7091V24.3699ZM13.8204 10.7158H15.9997C16.8148 10.7158 20.9157 11.0491 20.9223 16.1951C20.9288 21.2798 16.7941 21.2745 16.129 21.2737C16.121 21.2736 16.1135 21.2736 16.1065 21.2736H13.8204V16.9087H17.2491V15.081H13.8204V10.7158Z" fill="white" />
  </svg>
);

const USDTSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#50AF95" />
    <path d="M16.0785 6.76678C18.5536 6.76678 20.9297 6.76678 23.4048 6.76678C23.6028 6.76678 23.7018 6.86705 23.7018 6.96733C25.0879 10.0758 26.4739 13.0841 27.959 16.0923C28.058 16.1926 27.959 16.2928 27.86 16.3931C26.1769 18.0978 24.4939 19.8024 22.7118 21.5071C20.5337 23.6128 18.2566 25.8189 16.0785 27.9246C15.8805 28.0249 15.8805 28.0249 15.7815 27.9246C13.6034 25.8189 11.4253 23.7131 9.24722 21.5071C7.56415 19.8024 5.78207 18.0978 4.099 16.3931C4 16.2928 4 16.1926 4 16.0923C4.69303 14.4879 5.48506 12.9838 6.17809 11.3794C6.87112 9.87528 7.56415 8.47144 8.25718 6.96733C8.35618 6.76678 8.45518 6.6665 8.7522 6.6665C11.2273 6.76678 13.6034 6.6665 16.0785 6.76678Z" fill="white" />
  </svg>
);

const BNBSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#F3BA2F" />
    <path d="M18.2226 23.931V26.6207L15.8778 28L13.6019 26.6207V23.931L15.8778 25.3103L18.2226 23.931ZM5.6709 14.6207L7.94676 16V20.6207L11.8778 22.9655V25.6552L5.6709 22V14.6207ZM26.0847 14.6207V22L19.8088 25.6552V22.9655L23.7399 20.6207V16L26.0847 14.6207ZM19.8088 10.9655L22.1537 12.3448V15.0345L18.2226 17.3793V22.069L15.9468 23.4483L13.6709 22.069V17.3793L9.60193 15.0345V12.3448L11.9468 10.9655L15.8778 13.3103L19.8088 10.9655ZM9.60193 16.9655L11.8778 18.3448V21.0345L9.60193 19.6552V16.9655ZM22.1537 16.9655V19.6552L19.8778 21.0345V18.3448L22.1537 16.9655ZM7.94676 8.62069L10.2916 10L7.94676 11.3793V14.069L5.6709 12.6897V10L7.94676 8.62069ZM23.8088 8.62069L26.1537 10V12.6897L23.8088 14.069V11.3793L21.533 10L23.8088 8.62069ZM15.8778 8.62069L18.2226 10L15.8778 11.3793L13.6019 10L15.8778 8.62069ZM15.8778 4L22.1537 7.65517L19.8778 9.03448L15.9468 6.68965L11.9468 9.03448L9.6709 7.65517L15.8778 4Z" fill="white" />
  </svg>
);

const SolanaSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="black" />
    <path d="M10.5995 20.2105C10.696 20.0873 10.8288 20.0155 10.9696 20.0155H23.7377C23.971 20.0155 24.0877 20.3747 23.9228 20.5852L21.4005 23.8033C21.304 23.9265 21.1712 23.9984 21.0304 23.9984H8.26229C8.02897 23.9984 7.91231 23.6391 8.07724 23.4287L10.5995 20.2105Z" fill="url(#sol-grad0)" />
    <path d="M10.5995 8.19504C10.7001 8.07186 10.8328 8 10.9696 8H23.7377C23.971 8 24.0877 8.35928 23.9228 8.56972L21.4005 11.7879C21.304 11.9111 21.1712 11.9829 21.0304 11.9829H8.26229C8.02897 11.9829 7.91231 11.6236 8.07724 11.4132L10.5995 8.19504Z" fill="url(#sol-grad1)" />
    <path d="M21.4005 14.1643C21.304 14.0411 21.1712 13.9692 21.0304 13.9692H8.26229C8.02897 13.9692 7.91231 14.3285 8.07724 14.539L10.5995 17.7571C10.696 17.8803 10.8288 17.9522 10.9696 17.9522H23.7377C23.971 17.9522 24.0877 17.5929 23.9228 17.3824L21.4005 14.1643Z" fill="url(#sol-grad2)" />
    <defs>
      <linearGradient id="sol-grad0" x1="22.518" y1="-47.9851" x2="-13.6815" y2="-34.456" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" /><stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="sol-grad1" x1="18.6542" y1="-10.0603" x2="-17.5454" y2="3.46879" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" /><stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="sol-grad2" x1="20.5738" y1="4.78253" x2="7.89382" y2="23.8178" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" /><stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);

const XRPSvg = () => (
  <svg className="me-2 h-6 w-6" aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#F5F5F5" />
    <path d="M21.6562 8H23.9688L19.1562 13.754C17.4134 15.8366 14.5878 15.8366 12.8438 13.754L8.02938 8H10.3438L14 12.3709C14.5327 13.0049 15.2506 13.3604 15.9986 13.3604C16.7466 13.3604 17.4645 13.0049 17.9972 12.3709L21.6562 8Z" fill="#23292F" />
    <path d="M10.3141 24H8L12.8438 18.2106C14.5866 16.1279 17.4122 16.1279 19.1562 18.2106L24 24H21.6875L18 19.5936C17.4673 18.9596 16.7494 18.6042 16.0014 18.6042C15.2534 18.6042 14.5355 18.9596 14.0028 19.5936L10.3141 24Z" fill="#23292F" />
  </svg>
);

const portfolio = [
  { name: "Bitcoin", symbol: "BTC", icon: <BitcoinSvg />, price: "$65,759", mcap: "$7,118,022,957", vol: "$72,796,784", change: "+1.21%", up: true },
  { name: "Ethereum", symbol: "ETH", icon: <EthereumSvg />, price: "$4,356", mcap: "$845,638,365", vol: "$21,510,606", change: "-3.6%", up: false },
  { name: "Litecoin", symbol: "LTC", icon: <LitecoinSvg />, price: "$30.82", mcap: "$163,746,003", vol: "$680,335", change: "+0.38%", up: true },
  { name: "Dash", symbol: "", icon: <DashSvg />, price: "$634.77", mcap: "$45,756,182", vol: "$1,899,061", change: "+2.31%", up: true },
  { name: "Dogecoin", symbol: "", icon: <DogecoinSvg />, price: "$0.0002345", mcap: "$145,358,445", vol: "$215,622", change: "-0.03%", up: false },
  { name: "USDT", symbol: "ThetherUS", icon: <USDTSvg />, price: "$0.293", mcap: "$10,857,204", vol: "$150,293", change: "+0.25%", up: true },
  { name: "BNB", symbol: "", icon: <BNBSvg />, price: "$103", mcap: "$5,203,391", vol: "$15,903", change: "+0.023%", up: true },
  { name: "Solana", symbol: "", icon: <SolanaSvg />, price: "$24.15", mcap: "$60,968,229", vol: "$92,161", change: "-0.0002%", up: false },
  { name: "XPR Ripple", symbol: "", icon: <XRPSvg />, price: "$0.6399", mcap: "$3,023,948", vol: "$2,796,784", change: "+75.44%", up: true },
];

const recentTxns = [
  { type: "Deposit", date: "02-09-2025 17:43", amount: "+5.01885337 EGLD", status: "Completed", statusColor: "bg-green-500" },
  { type: "Transfer", date: "02-09-2025 17:43", amount: "0.85337 BTC", status: "Waiting", statusColor: "bg-orange-400" },
  { type: "Deposit", date: "15-07-2025 12:03", amount: "+10 ETH", status: "Completed", statusColor: "bg-green-500" },
  { type: "Deposit", date: "18-07-2025 22:17", amount: "+5.2253 EGLD", status: "Cancelled", statusColor: "bg-red-600 dark:bg-red-500" },
  { type: "Sell", date: "10-06-2025 19:09", amount: "-4.1846 BTC", status: "Completed", statusColor: "bg-green-500" },
];

const openOrders = [
  { dest: "Binance", date: "Oct 31, 2025", amount: "0.2746593BTC", type: "Buy", typeColor: "text-green-500 dark:text-green-400", status: "In progress", statusBadge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
  { dest: "ExchangeBTC", date: "Oct 23, 2025", amount: "1.33467 BTC", type: "Buy", typeColor: "text-green-500 dark:text-green-400", status: "Completed", statusBadge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
  { dest: "Binance", date: "Aug 18, 2025", amount: "3.274635ETH", type: "Sell", typeColor: "text-red-600 dark:text-red-500", status: "Cancelled", statusBadge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
  { dest: "ExchangeBTC", date: "Aug 18, 2025", amount: "12.7344459 ETH", type: "Buy", typeColor: "text-green-500 dark:text-green-400", status: "Completed", statusBadge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
  { dest: "Binance", date: "Aug 18, 2025", amount: "40 DOGE", type: "Sell", typeColor: "text-red-600 dark:text-red-500", status: "Cancelled", statusBadge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
  { dest: "ExchangeBTC", date: "Aug 15, 2025", amount: "0.0375693 BTC", type: "Buy", typeColor: "text-green-500 dark:text-green-400", status: "Completed", statusBadge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
];

// ── Sort icon (reusable) ─────────────────────────────────────────────────────
function SortIcon() {
  return (
    <svg className="ml-1 inline-block h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AdminCryptoPage() {
  return (
    <PreviewShell variant="admin" title="Crypto Dashboard">
      <div className="px-4">

        {/* 1 ── KPI cards */}
        <div className="my-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              {k.icon}
              <h3 className="mt-2 text-gray-500 dark:text-gray-400">{k.label}</h3>
              <span className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{k.value}</span>
              <p className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className={`mr-1.5 flex items-center text-sm font-medium sm:text-base ${k.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                  {k.up
                    ? <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
                    : <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" /></svg>
                  }
                  {k.delta}
                </span>
                {k.note}
              </p>
            </div>
          ))}
        </div>

        {/* 2 ── Portfolio balance chart */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="justify-between sm:mb-3 sm:flex">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-2 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white">
                $739,992
                <span className="ms-2 text-base font-semibold text-green-500 dark:text-green-400">+$7,452 (8.85%)</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Your portfolio balance</p>
            </div>
            <div>
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                </svg>
                Dec 31 - Jan 31
                <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <ReactApexChart options={portfolioOptions} series={portfolioSeries} type="area" height={520} />

          <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700 sm:pt-6">
            <button className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Last 7 days
              <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>
            <div className="shrink-0">
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Users Report
                <HiArrowRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 ── My Portfolio table */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
          <div className="relative mb-4 md:mb-6">
            <div className="flex pb-4 items-center justify-between">
              <h2 className="me-1.5 text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                My portfolio: <span className="ms-2 font-bold">$756,879</span>
              </h2>
              <button className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                USD
                <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
              </button>
            </div>

            {/* Filter selects */}
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:w-2/3">
              {["Market Cap", "Price", "Volume", "Change"].map((label) => (
                <div key={label} className="w-full">
                  <label className="sr-only">{label}</label>
                  <select className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                    <option>{label}</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Name</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Price <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Market Cap</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">24h volume <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">24h change <SortIcon /></th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((coin) => (
                  <tr key={coin.name} className="border-b hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 border-gray-200">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        {coin.icon}
                        {coin.name}
                        {coin.symbol && <span className="ms-1 text-gray-500 dark:text-gray-400">{coin.symbol}</span>}
                      </div>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{coin.price}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{coin.mcap}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-primary-700 dark:text-primary-500">{coin.vol}</td>
                    <td className={`whitespace-nowrap px-4 py-3 font-medium ${coin.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>{coin.change}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Details</button>
                        <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                          </svg>
                          Trade
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div className="relative overflow-hidden rounded-b-lg border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
            <nav className="flex flex-col items-start justify-between space-y-3 sm:flex-row sm:items-center sm:space-y-0" aria-label="Table navigation">
              <div className="flex items-center space-x-5 text-sm">
                <div>
                  <div className="mb-1 text-gray-500 dark:text-gray-400">Purchase price</div>
                  <div className="font-medium dark:text-white">$ 3,567,890</div>
                </div>
                <div>
                  <div className="mb-1 text-gray-500 dark:text-gray-400">Total selling price</div>
                  <div className="font-medium dark:text-white">$ 8,489,400</div>
                </div>
              </div>
              <ul className="inline-flex items-stretch -space-x-px">
                {["prev", "1", "2", "3", "...", "100", "next"].map((p, i) => (
                  <li key={i}>
                    <a href="#" className={`flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${p === "3" ? "z-10 border-primary-300 bg-primary-50 text-primary-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : ""} ${p === "prev" ? "rounded-l-lg px-3 py-1.5 h-full" : ""} ${p === "next" ? "rounded-r-lg px-3 py-1.5 h-full" : ""}`}>
                      {p === "prev" ? (
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
                      ) : p === "next" ? (
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                      ) : p}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* 4 ── Three-column row: Recent transactions / Exchange / Coin chart */}
        <div className="my-4 grid grid-cols-1 gap-4 2xl:grid-cols-3">

          {/* Recent transactions */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">Recent transactions</h2>
            <ul>
              {recentTxns.map((txn, i) => (
                <li key={i} className={`${i < recentTxns.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-4 mb-4" : "pt-0"}`}>
                  <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                      {txn.type === "Transfer" ? (
                        <svg className="h-6 w-6 rotate-90 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4" />
                        </svg>
                      ) : txn.type === "Sell" ? (
                        <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-gray-900 dark:text-white">{txn.type}</p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">{txn.date}</p>
                    </div>
                    <div className="flex items-center justify-between sm:block">
                      <p className="font-semibold text-gray-900 dark:text-white">{txn.amount}</p>
                      <div className="flex items-center justify-end text-gray-500 dark:text-gray-400">
                        <span className={`me-1 h-2.5 w-2.5 rounded-full ${txn.statusColor}`}></span>
                        {txn.status}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <button type="button" className="rounded-lg w-full sm:w-auto border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                View all
              </button>
            </div>
          </div>

          {/* Exchange */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Exchange</h2>
              <div className="ms-auto w-fit border-b border-gray-100 dark:border-gray-700">
                <ul className="-mb-px flex space-x-2 flex-wrap text-center text-sm font-medium">
                  <li>
                    <button className="inline-block bg-gray-100 rounded-t-lg px-3 py-2 dark:hover:bg-gray-700 hover:bg-gray-100 text-primary-600 dark:text-primary-500">Buy</button>
                  </li>
                  <li className="mr-2">
                    <button className="inline-block px-3 py-2 rounded-t-lg text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">Sell</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto mb-4 md:mb-6 max-w-3xl">
              <div className="block items-center space-y-4">
                {/* From (USD) */}
                <div className="mx-auto w-full max-w-md">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">From</label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                      <svg className="w-4 text-gray-900 dark:text-white" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#usd-clip)">
                          <path d="M13.8102 12.4801C13.6532 12.0964 13.4933 11.7126 13.3189 11.3347C13.1648 10.9975 12.9671 10.8986 12.5979 10.9829C12.1298 11.0905 11.6705 11.2329 11.2025 11.3289C10.2983 11.5178 9.39129 11.5353 8.49879 11.2533C7.37953 10.9015 6.78356 10.0904 6.41726 9.04384H9.45234C9.69072 9.04384 9.8826 8.85196 9.8826 8.61358V7.65712C9.8826 7.41873 9.69072 7.22686 9.45234 7.22686H6.12654C6.12654 6.9594 6.12363 6.70357 6.12654 6.44774H9.45234C9.69072 6.44774 9.8826 6.25586 9.8826 6.01748V5.06102C9.8826 4.82263 9.69072 4.63076 9.45234 4.63076H6.54517C6.89985 3.80803 7.4086 3.17136 8.24296 2.83994C9.21395 2.4562 10.2053 2.46492 11.2054 2.67133C11.6792 2.76726 12.1444 2.91262 12.6182 3.02019C12.9642 3.09868 13.1648 2.99693 13.313 2.67424C13.4846 2.30212 13.6416 1.92419 13.7985 1.54335C13.9468 1.18577 13.8596 0.932843 13.5224 0.735156C11.8595 0.0636002 10.4146 -0.139901 8.92323 0.0984862C7.87375 0.267102 6.89403 0.62759 6.04805 1.28461C4.98112 2.11025 4.28921 3.20043 3.88803 4.48249L3.8386 4.63076H2.34432C2.10594 4.63076 1.91406 4.82263 1.91406 5.06102V6.01748C1.91406 6.25586 2.10594 6.44774 2.34432 6.44774H3.52172V7.22686H2.34432C2.10594 7.22686 1.91406 7.41873 1.91406 7.65712V8.61358C1.91406 8.85196 2.10594 9.04384 2.34432 9.04384H3.76302C4.81541 11.8144 6.01898 13.047 7.83014 13.6343C9.32733 14.1197 10.8361 14.1052 12.345 13.6895C12.7374 13.5819 13.127 13.4424 13.4991 13.2709C13.8596 13.1051 13.9526 12.8261 13.8102 12.4801Z" fill="currentColor" />
                        </g>
                        <defs><clipPath id="usd-clip"><rect width="14" height="14" fill="white" transform="translate(0.894531)" /></clipPath></defs>
                      </svg>
                    </span>
                    <input type="number" className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="1000" />
                  </div>
                </div>
                {/* To (BTC) */}
                <div className="mx-auto w-full max-w-md">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">To</label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                      <svg className="h-4 w-4" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#btc-small-clip)">
                          <path d="M14.6837 8.69347C13.7487 12.4435 9.95037 14.7255 6.19989 13.7906C2.45117 12.8556 0.168953 9.05725 1.10411 5.30744C2.03861 1.55697 5.83677 -0.725463 9.58615 0.209474C13.3364 1.14441 15.6184 4.94322 14.6835 8.69347H14.6837Z" fill="#F7931A" />
                          <path d="M10.9803 6.00311C11.1194 5.07167 10.4102 4.57095 9.44053 4.23692L9.75509 2.97517L8.98684 2.78377L8.68059 4.01227C8.47891 3.96195 8.27153 3.91448 8.06547 3.86745L8.37391 2.63086L7.60631 2.43945L7.29153 3.70077C7.12441 3.6627 6.96034 3.62508 6.80109 3.58548L5.74278 3.31708L5.53847 4.13739C5.53847 4.13739 6.10831 4.26798 6.09628 4.27608C6.40734 4.35373 6.46378 4.55958 6.45416 4.72277L6.09584 6.16017C6.09475 6.16564 5.59228 8.17923 5.55422 8.27373C5.45775 8.41548 5.24031 8.36167 5.24797 8.37283L4.68206 8.22233L4.30078 9.1017L5.30047 9.35086C5.48641 9.39745 5.66862 9.44623 5.84778 9.49217L5.52994 10.7686L6.29709 10.96L6.61209 9.69736C6.82144 9.75423 7.02487 9.80673 7.22394 9.85617L6.91025 11.1129L7.67828 11.3043L7.99612 10.0305C9.30578 10.2784 10.2908 10.1784 10.7049 8.99408C11.0389 8.04033 10.6885 7.49017 9.99944 7.1312C10.5012 7.01505 10.8792 6.68495 10.9801 6.00311H10.9803Z" fill="white" />
                        </g>
                        <defs><clipPath id="btc-small-clip"><rect width="14" height="14" fill="white" transform="translate(0.894531)" /></clipPath></defs>
                      </svg>
                    </span>
                    <input type="number" className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="1000" />
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">1 BTC ≈ 37,104.85 EUR</p>
                </div>
              </div>
            </div>

            <div className="sm:flex items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <button type="button" className="inline-flex w-full sm:w-auto justify-center items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                Preview Conversion
              </button>
              <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 sm:w-auto">
                Exchange
              </button>
            </div>
          </div>

          {/* Coin chart */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <button className="mb-2 inline-flex items-center text-center font-medium text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white">
                  Bitcoin
                  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">$66,756</h2>
              </div>
              <span className="mr-1.5 flex items-center font-semibold text-green-500 dark:text-green-400">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                </svg>
                7%
              </span>
            </div>

            <ReactApexChart options={coinOptions} series={coinSeries} type="area" height={360} />

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days
                  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-600 dark:hover:bg-gray-700">
                  Full report
                  <HiArrowRight className="-me-0.5 ms-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5 ── Open orders table */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="relative mb-4 md:mb-6">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex pb-4 items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Open orders</h5>
                <div className="flex shrink-0 flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0 lg:justify-end">
                  <button type="button" className="inline-flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="me-2 h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                    </svg>
                    Table settings
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-stretch justify-between space-y-4 pt-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                <div className="w-full">
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="text" placeholder="Search for orders" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 md:max-w-md" />
                  </div>
                </div>
                <div className="flex w-full shrink-0 flex-col items-stretch space-y-2 sm:w-auto sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 md:justify-end">
                  <button type="button" className="flex w-full shrink-0 items-center justify-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 sm:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                    </svg>
                    Add new order
                  </button>
                  <button type="button" className="flex w-full shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                    </svg>
                    Filter options
                    <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
                  </button>
                  <button type="button" className="flex w-full shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                    Actions
                    <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <td className="w-4 px-4 py-3">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  </td>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Transaction</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Date & Time <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Amount <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Order Type <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {openOrders.map((order, i) => (
                  <tr key={i} className="border-b hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 border-gray-200">
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-normal text-gray-900 dark:text-white">
                      Order sent to <span className="font-medium">{order.dest}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-500 dark:text-gray-400">{order.date}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-gray-900 dark:text-white">{order.amount}</td>
                    <td className={`whitespace-nowrap px-4 py-3 font-medium ${order.typeColor}`}>{order.type}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={`rounded-sm px-2.5 py-0.5 text-xs font-medium ${order.statusBadge}`}>{order.status}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <button type="button" className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
