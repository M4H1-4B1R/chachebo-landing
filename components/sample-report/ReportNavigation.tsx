"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Report Summary", id: "report-summary" },
  { label: "Vehicle Overview", id: "vehicle-overview" },
  { label: "Overall Evaluation", id: "overall-evaluation" },
  { label: "Vehicle Identity", id: "vehicle-identity" },
  { label: "Body & Structural", id: "body-structural" },
  { label: "Accident Records", id: "accident-records" },
  { label: "Mileage Records", id: "mileage-records" },
  { label: "Maintenance History", id: "maintenance-history" },
];

export function ReportNavigation() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:block w-52 shrink-0">
      <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-28">
        <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-4">
          Report Navigation
        </h3>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`text-[13px] w-full text-left px-3 py-1.5 rounded-md transition-colors ${
                  activeId === item.id
                    ? "text-[#FF7A00] font-medium bg-orange-50"
                    : "text-gray-500 hover:text-[#FF7A00]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
