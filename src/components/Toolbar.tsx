"use client";

import React from "react";

export function Toolbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[34px] flex-wrap items-center mb-2.5">{children}</div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#0b1220] border border-gray-800 rounded-full px-2.5 py-1.5 text-xs text-gray-200">
      {children}
    </span>
  );
}

export function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#0f172a] text-gray-200 border border-gray-800 rounded-[10px] px-2.5 py-2 text-xs outline-none"
    >
      {children}
    </select>
  );
}

export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[#0f172a] text-gray-200 border border-gray-800 rounded-[10px] px-2.5 py-2 text-xs cursor-pointer hover:brightness-110"
    >
      {children}
    </button>
  );
}

export function ControlGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5 border border-gray-700/60 rounded-xl px-2.5 py-1">
      <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mr-0.5">
        {label}
      </span>
      {children}
    </div>
  );
}

export function TabBar({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: { key: string; label: string }[];
  activeTab: string;
  onTabChange: (key: string) => void;
}) {
  return (
    <div className="flex items-center gap-0 border-b border-gray-800 bg-[#0b0f17] shrink-0">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? "text-indigo-400"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {tab.label}
          {activeTab === tab.key && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500" />
          )}
        </button>
      ))}
    </div>
  );
}
