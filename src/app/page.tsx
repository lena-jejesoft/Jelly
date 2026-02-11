"use client";

import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import type { EventItem, Decision, Scenario } from "@/lib/data";
import { genPriceSeries, genEvents, DAY } from "@/lib/data";

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

  const [filterType, setFilterType] = useState("ALL");
  const [filterImpact, setFilterImpact] = useState(2);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [scenario, setScenario] = useState<Scenario>("BASE");
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
    <div className="max-w-[1200px] mx-auto px-4 py-6 pb-12">
      <h1 className="text-lg font-bold mb-3.5">
        Event-driven Chart Bench (Highcharts Stock) — 비교용 3종
      </h1>
      <div className="text-gray-500 text-[13px] mb-4 leading-relaxed">
        - (1) Price + 이벤트 플래그 + 카테고리 필터
        <br />
        - (2) 이벤트 클릭 → Before/After 자동 비교 (D-30~D, D~D+60)
        <br />- (3){" "}
        <span className="font-bold text-gray-300">미래 시점</span> 시나리오 밴드
        + 팀 판단(Decision) 히스토리 마커 (메모 입력)
      </div>

      <PriceEventChart
        price={price}
        events={events}
        filterType={filterType}
        filterImpact={filterImpact}
        onFilterTypeChange={setFilterType}
        onFilterImpactChange={setFilterImpact}
        onEventClick={setSelectedEvent}
      />

      <CompareCharts
        selectedEvent={selectedEvent}
        price={price}
        onReset={() => setSelectedEvent(null)}
      />

      <ScenarioChart
        price={price}
        events={events}
        scenario={scenario}
        decisions={decisions}
        onScenarioChange={setScenario}
        onAddDecision={handleAddDecision}
      />
    </div>
  );
}
