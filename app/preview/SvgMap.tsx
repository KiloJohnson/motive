"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import "svgmap/style.min";

type MapData = Record<string, { visitors: number; change: number }>;

const defaultData: MapData = {
  US: { visitors: 272109, change: 4.73  },
  CA: { visitors: 160064, change: 11.09 },
  DE: { visitors: 120048, change: -2.3  },
  GB: { visitors: 110048, change: 3.3   },
  FR: { visitors: 100048, change: 1.3   },
  ES: { visitors:  90048, change: 1.5   },
  JP: { visitors:  56022, change: 3.5   },
  IT: { visitors:  48019, change: 1     },
  NL: { visitors:  40016, change: 2     },
  RU: { visitors:  30016, change: 3.4   },
  CN: { visitors:  50016, change: 6     },
  IN: { visitors: 140016, change: 2     },
  BR: { visitors:  40016, change: 5     },
};

function initMap(id: string, dark: boolean, data: MapData) {
  return import("svgmap").then(({ default: SvgMapLib }) => {
    new (SvgMapLib as any)({
      targetElementID: id,
      colorMin: "#A4CAFE",
      colorMax: "#1A56DB",
      colorNoData: dark ? "#4B5563" : "#D1D5DB",
      flagType: "image",
      flagURL: "https://flowbite.com/application-ui/demo/images/flags/{0}.svg",
      data: {
        data: {
          visitors: { name: "Visitors:", format: "{0}", thousandSeparator: ",", thresholdMax: 500000, thresholdMin: 0 },
          change:   { name: "Change:",   format: "{0} %" },
        },
        applyData: "visitors",
        values: data,
      },
    });
  });
}

export function SvgMap({ data = defaultData }: { data?: MapData }) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<string>(`svgmap-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    if (!containerRef.current) return;
    const dark = resolvedTheme === "dark";

    // Clear any previous instance before reinitializing
    containerRef.current.innerHTML = "";
    containerRef.current.id = idRef.current;

    initMap(idRef.current, dark, data);
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="w-full [&_.svgMap-map-wrapper]:dark:bg-gray-900 [&_.svgMap-map-wrapper]:rounded-lg [&_.svgMap-tooltip]:dark:bg-gray-700 [&_.svgMap-tooltip]:dark:text-white [&_.svgMap-tooltip]:dark:border-gray-600"
    />
  );
}
