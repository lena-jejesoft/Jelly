"use client";

import React from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative mb-4">
      {/* 돋보기 아이콘 */}
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="이벤트 검색 (제목, 타입, 내용, 출처 등)"
        className="w-full bg-[#0f172a] text-gray-200 border border-gray-800 rounded-[10px] pl-9 pr-8 py-2 text-sm outline-none placeholder:text-gray-600 focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-colors"
      />

      {/* ✕ 클리어 버튼 */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-sm leading-none"
        >
          ✕
        </button>
      )}
    </div>
  );
}
