"use client";

import React from "react";

export function Toolbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 flex-wrap items-center mb-2.5">{children}</div>
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
