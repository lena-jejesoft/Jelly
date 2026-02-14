"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import type { EventItem, Decision, Scenario, ReportDraft } from "@/lib/data";
import { genPriceSeries, genEvents, DAY, createDefaultReport } from "@/lib/data";
import ResizeHandle from "@/components/ResizeHandle";
import { TabBar } from "@/components/Toolbar";

const UnifiedChart = dynamic(() => import("@/components/UnifiedChart"), {
  ssr: false,
});
const CompareCharts = dynamic(() => import("@/components/CompareCharts"), {
  ssr: false,
});
const ComposeWorkspace = dynamic(
  () => import("@/components/ComposeWorkspace"),
  { ssr: false }
);

const START = Date.UTC(2024, 0, 2);

const TABS = [
  { key: "analysis", label: "Analysis" },
  { key: "compose", label: "리포트 작성" },
];

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

  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [modalStance, setModalStance] = useState<Decision["stance"]>("BUY");
  const [modalNote, setModalNote] = useState("");
  const [modalWho, setModalWho] = useState("Team");

  /* ── Tab state ── */
  const [activeTab, setActiveTab] = useState("analysis");
  const [reportDraft, setReportDraft] = useState<ReportDraft | null>(null);

  const handleTabChange = useCallback(
    (key: string) => {
      setActiveTab(key);
      if (key === "compose" && !reportDraft) {
        setReportDraft(createDefaultReport(events, decisions, price, scenario));
      }
    },
    [reportDraft, events, decisions, price, scenario]
  );

  const handleAddDecision = useCallback(() => {
    setModalStance("BUY");
    setModalNote("");
    setModalWho("Team");
    setShowDecisionModal(true);
  }, []);

  const handleModalSubmit = useCallback(() => {
    setDecisions((prev) => {
      const n = prev.length + 1;
      const x = lastX + (2 + Math.floor(Math.random() * 6)) * DAY;
      return [
        ...prev,
        {
          x,
          title: "D" + n,
          note: modalNote.trim() || "메모 없음",
          who: modalWho.trim() || "Team",
          stance: modalStance,
        },
      ];
    });
    setShowDecisionModal(false);
  }, [lastX, modalNote, modalWho, modalStance]);

  useEffect(() => {
    if (!showDecisionModal) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDecisionModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showDecisionModal]);

  return (
    <div className="flex flex-col h-screen">
      {/* ── Tab Bar ── */}
      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* ── Analysis Tab (display toggle to keep chart mounted) ── */}
      <div
        className="flex flex-1 min-h-0"
        style={{ display: activeTab === "analysis" ? "flex" : "none" }}
      >
        {/* 좌측: 차트 영역 */}
        <main className="flex-1 min-w-0 overflow-hidden pl-6 pr-4 pt-6">
          <UnifiedChart
            price={price}
            events={events}
            filterType={filterType}
            filterImpact={filterImpact}
            onFilterTypeChange={setFilterType}
            onFilterImpactChange={setFilterImpact}
            onEventClick={setSelectedEvent}
            scenario={scenario}
            decisions={decisions}
            onScenarioChange={setScenario}
            onAddDecision={handleAddDecision}
          />
        </main>

        <ResizeHandle onResize={handleResize} onResizeEnd={handleResizeEnd} />

        {/* 우측: 이벤트 상세 패널 */}
        <aside
          className="shrink-0 border-l border-gray-800 bg-[#0f172a] overflow-y-auto"
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

      {/* ── Compose Tab ── */}
      {activeTab === "compose" && reportDraft && (
        <div className="flex-1 min-h-0">
          <ComposeWorkspace
            price={price}
            events={events}
            decisions={decisions}
            scenario={scenario}
            priceRange={priceRange}
            draft={reportDraft}
            onDraftChange={setReportDraft}
          />
        </div>
      )}

      {/* 판단 로그 추가 모달 (탭 밖, 공유) */}
      {showDecisionModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowDecisionModal(false)}
        >
          <div
            className="bg-[#1e293b] rounded-lg shadow-xl p-6 w-[360px] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-gray-100 font-semibold text-base">판단 로그 추가</h3>

            <label className="block">
              <span className="text-gray-400 text-xs">판단</span>
              <select
                value={modalStance}
                onChange={(e) => setModalStance(e.target.value as Decision["stance"])}
                className="mt-1 block w-full rounded bg-[#0f172a] border border-gray-700 text-gray-200 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="BUY">BUY</option>
                <option value="HOLD">HOLD</option>
                <option value="SELL">SELL</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-400 text-xs">메모</span>
              <input
                type="text"
                value={modalNote}
                onChange={(e) => setModalNote(e.target.value)}
                placeholder="근거를 간단히 작성"
                className="mt-1 block w-full rounded bg-[#0f172a] border border-gray-700 text-gray-200 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </label>

            <label className="block">
              <span className="text-gray-400 text-xs">작성자</span>
              <input
                type="text"
                value={modalWho}
                onChange={(e) => setModalWho(e.target.value)}
                placeholder="Team"
                className="mt-1 block w-full rounded bg-[#0f172a] border border-gray-700 text-gray-200 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </label>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowDecisionModal(false)}
                className="px-4 py-1.5 rounded text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition"
              >
                취소
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-1.5 rounded text-sm bg-indigo-600 text-white hover:bg-indigo-500 transition"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
