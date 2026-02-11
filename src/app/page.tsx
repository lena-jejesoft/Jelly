"use client";

import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import type { EventItem, Decision, Scenario } from "@/lib/data";
import { genPriceSeries, genEvents, DAY } from "@/lib/data";
import ResizeHandle from "@/components/ResizeHandle";

const PriceEventChart = dynamic(
  () => import("@/components/PriceEventChart"),
  { ssr: false }
);
const CompareCharts = dynamic(() => import("@/components/CompareCharts"), {
  ssr: false,
});
const ScenarioChart = dynamic(() => import("@/components/ScenarioChart"), {
  ssr: false,
});

const START = Date.UTC(2024, 0, 2);

export default function Home() {
  const price = useMemo(() => genPriceSeries(START, 380, 120), []);
  const events = useMemo(() => genEvents(price), [price]);

  const priceRange = useMemo(() => {
    const vals = price.map((p) => p[1]);
    return {
      min: Math.floor(Math.min(...vals) / 10) * 10,
      max: Math.ceil(Math.max(...vals) / 10) * 10,
    };
  }, [price]);

  const [filterType, setFilterType] = useState("ALL");
  const [filterImpact, setFilterImpact] = useState(2);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [scenario, setScenario] = useState<Scenario>("BASE");
  const [panelWidth, setPanelWidth] = useState(360);

  const handleResize = useCallback((delta: number) => {
    setPanelWidth((prev) => Math.min(700, Math.max(200, prev + delta)));
  }, []);

  const handleResizeEnd = useCallback(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  const [decisions, setDecisions] = useState<Decision[]>(() => [
    {
      x: events[3].x + 2 * DAY,
      title: "D1",
      note: "관망 → 리스크(희석) 우려",
      who: "PM",
      stance: "HOLD",
    },
    {
      x: events[5].x + 1 * DAY,
      title: "D2",
      note: "비중 소폭 편입 (과매도 판단)",
      who: "Analyst",
      stance: "BUY",
    },
  ]);

  const lastX = price[price.length - 1][0];

  const handleAddDecision = useCallback(() => {
    const stanceRaw = window.prompt("판단 (BUY / HOLD / SELL):", "BUY");
    if (!stanceRaw) return;
    const stance = stanceRaw.trim().toUpperCase();
    if (!["BUY", "HOLD", "SELL"].includes(stance)) {
      alert("BUY / HOLD / SELL 중 하나만 입력해주세요.");
      return;
    }

    const note = window.prompt("의견/메모를 입력하세요:", "근거를 간단히 작성");
    if (!note) return;

    const who = window.prompt("작성자(표시용):", "Team") || "Team";

    setDecisions((prev) => {
      const n = prev.length + 1;
      const x = lastX + (2 + Math.floor(Math.random() * 6)) * DAY;
      return [
        ...prev,
        {
          x,
          title: "D" + n,
          note: note.trim(),
          who: who.trim(),
          stance: stance as Decision["stance"],
        },
      ];
    });
  }, [lastX]);

  return (
    <div className="flex h-screen">
      {/* 좌측: 차트 영역 */}
      <main className="flex-1 min-w-0 overflow-y-auto pl-6 pr-4 py-6 pb-12">
        <PriceEventChart
          price={price}
          events={events}
          filterType={filterType}
          filterImpact={filterImpact}
          onFilterTypeChange={setFilterType}
          onFilterImpactChange={setFilterImpact}
          onEventClick={setSelectedEvent}
        />

        <ScenarioChart
          price={price}
          events={events}
          scenario={scenario}
          decisions={decisions}
          onScenarioChange={setScenario}
          onAddDecision={handleAddDecision}
        />
      </main>

      <ResizeHandle onResize={handleResize} onResizeEnd={handleResizeEnd} />

      {/* 우측: 이벤트 상세 패널 */}
      <aside
        className="shrink-0 border-l border-gray-800 bg-[#0f172a] h-screen overflow-y-auto"
        style={{ width: panelWidth }}
      >
        {selectedEvent ? (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-200">Event Detail</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-gray-300 text-xs"
              >
                ✕
              </button>
            </div>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-gray-500 text-xs">Title</dt>
                <dd className="text-gray-200">{selectedEvent.text}</dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">Type</dt>
                <dd className="text-gray-200">{selectedEvent.type}</dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">Date</dt>
                <dd className="text-gray-200">
                  {new Date(selectedEvent.x).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">Impact</dt>
                <dd className="text-gray-200">{"★".repeat(selectedEvent.impact)}</dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">Description</dt>
                <dd className="text-gray-300 leading-relaxed">{selectedEvent.desc}</dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">Detail</dt>
                <dd className="text-gray-300 leading-relaxed">{selectedEvent.content}</dd>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <dt className="text-gray-500 text-xs">출처</dt>
                <dd className="text-gray-400 text-xs">{selectedEvent.source}</dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs">출처 일자</dt>
                <dd className="text-gray-400 text-xs">{selectedEvent.sourceDate}</dd>
              </div>
            </dl>
            <div className="border-t border-gray-700 mt-4 pt-4">
              <CompareCharts
                selectedEvent={selectedEvent}
                price={price}
                onReset={() => setSelectedEvent(null)}
                compact
                priceRange={priceRange}
              />
            </div>
          </div>
        ) : (
          <div className="p-4 text-gray-600 text-sm">
            차트에서 이벤트를 클릭하면 상세 정보가 여기에 표시됩니다.
          </div>
        )}
      </aside>
    </div>
  );
}
