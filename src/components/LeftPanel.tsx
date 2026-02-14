"use client";

import React, { useState } from "react";

/* ── Icon SVGs (inline, no deps) ── */
const icons = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  analysis: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  watchlist: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  events: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  decisions: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  reports: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  news: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  stocks: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  sub: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  chevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: { key: string; label: string }[];
}

const MENU: MenuItem[] = [
  { key: "home", label: "Home", icon: icons.home },
  {
    key: "stocks",
    label: "Stocks",
    icon: icons.stocks,
    children: [
      { key: "byIndustry", label: "By Industry" },
    ],
  },
  {
    key: "analysis",
    label: "Analysis",
    icon: icons.analysis,
    children: [
      { key: "screener", label: "Stock Screener" },
      { key: "comparison", label: "Comparison Tool" },
      { key: "earnings", label: "Earnings Calendar" },
    ],
  },
  { key: "watchlist", label: "Watchlist", icon: icons.watchlist },
  { key: "events", label: "Events", icon: icons.events },
  { key: "decisions", label: "Decisions", icon: icons.decisions },
  { key: "reports", label: "Reports", icon: icons.reports },
  { key: "news", label: "News", icon: icons.news },
  { key: "techchart", label: "Technical Chart", icon: icons.chart },
  { key: "settings", label: "Settings", icon: icons.settings },
];

export default function LeftPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState("analysis");
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(
    () => new Set(["analysis"])
  );

  const toggleSubmenu = (key: string) => {
    setExpandedMenus((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleClick = (item: MenuItem) => {
    setActiveKey(item.key);
    if (item.children) {
      toggleSubmenu(item.key);
    }
  };

  const w = collapsed ? "w-[56px]" : "w-[220px]";

  return (
    <nav
      className={`${w} shrink-0 bg-[#0f172a] border-r border-gray-800 flex flex-col transition-all duration-200 overflow-hidden select-none`}
    >
      {/* Menu items */}
      <div className="flex-1 overflow-y-auto py-2">
        {MENU.map((item) => {
          const isActive = activeKey === item.key;
          const isExpanded = expandedMenus.has(item.key);
          const hasChildren = !!item.children;

          return (
            <div key={item.key}>
              {/* Main menu item */}
              <button
                onClick={() => handleClick(item)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "text-white bg-white/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left truncate">
                      {item.label}
                    </span>
                    {hasChildren && (
                      <span
                        className={`shrink-0 transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      >
                        {icons.chevron}
                      </span>
                    )}
                  </>
                )}
              </button>

              {/* Sub-menu items */}
              {hasChildren && isExpanded && !collapsed && (
                <div className="ml-4 border-l border-gray-800">
                  {item.children!.map((child) => (
                    <button
                      key={child.key}
                      onClick={() => setActiveKey(child.key)}
                      className={`w-full flex items-center gap-2.5 pl-4 pr-4 py-2 text-xs transition-colors ${
                        activeKey === child.key
                          ? "text-white bg-white/5"
                          : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <span className="shrink-0">{icons.sub}</span>
                      <span className="truncate">{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Collapse / Expand toggle */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        className="flex items-center justify-center gap-2 px-4 py-3 text-xs text-gray-500 hover:text-gray-300 hover:bg-white/5 border-t border-gray-800 transition-colors"
      >
        {collapsed ? (
          <span className="text-base">&raquo;</span>
        ) : (
          <>
            <span className="text-base">&laquo;</span>
            <span>Collapse</span>
          </>
        )}
      </button>
    </nav>
  );
}
