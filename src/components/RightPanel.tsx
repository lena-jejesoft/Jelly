"use client";

import React, { useMemo, useState, useEffect } from "react";
import type { PricePoint, EventItem, Decision } from "@/lib/data";
import {
  DAY,
  EVENT_TYPES,
  sliceByRange,
  pct,
  fmtPct,
  volApprox,
} from "@/lib/data";

interface Props {
  events: EventItem[];
  selectedEvent: EventItem | null;
  onEventClick: (e: EventItem | null) => void;
  price: PricePoint[];
  decisions: Decision[];
}

type PanelTab = "events" | "decisions";

export default function RightPanel({
  events,
  selectedEvent,
  onEventClick,
  price,
  decisions,
}: Props) {
  const [panelTab, setPanelTab] = useState<PanelTab>("events");
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);

  // 이벤트 선택 시 자동으로 이벤트 탭 전환
  useEffect(() => {
    if (selectedEvent) {
      setPanelTab("events");
    }
  }, [selectedEvent]);

  return (
    <div className="flex flex-col h-full">
      {/* 미니 탭 바 */}
      <div className="flex border-b border-gray-800 shrink-0">
        <button
          onClick={() => setPanelTab("events")}
          className={`flex-1 py-2 text-xs font-medium transition-colors relative ${
            panelTab === "events"
              ? "text-indigo-400"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          이벤트
          {panelTab === "events" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />
          )}
        </button>
        <button
          onClick={() => { setPanelTab("decisions"); setSelectedDecision(null); }}
          className={`flex-1 py-2 text-xs font-medium transition-colors relative ${
            panelTab === "decisions"
              ? "text-indigo-400"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          판단 로그
          {panelTab === "decisions" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />
          )}
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="flex-1 min-h-0">
        {panelTab === "events" ? (
          selectedEvent ? (
            <EventDetailView
              event={selectedEvent}
              price={price}
              onBack={() => onEventClick(null)}
            />
          ) : (
            <EventTimelineView events={events} onEventClick={onEventClick} />
          )
        ) : selectedDecision ? (
          <DecisionDetailView
            decision={selectedDecision}
            onBack={() => setSelectedDecision(null)}
          />
        ) : (
          <DecisionTimelineView
            decisions={decisions}
            onDecisionClick={setSelectedDecision}
          />
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Mode A — Event Timeline (list)
   ──────────────────────────────────────────── */

function EventTimelineView({
  events,
  onEventClick,
}: {
  events: EventItem[];
  onEventClick: (e: EventItem) => void;
}) {
  const sorted = useMemo(
    () => [...events].sort((a, b) => a.x - b.x),
    [events]
  );

  const highImpact = events.filter((e) => e.impact >= 3).length;
  const categories = new Set(events.map((e) => e.type)).size;

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-sm font-semibold text-gray-200 px-4 pt-4 pb-2 shrink-0">
        Event Timeline
      </h3>

      {/* 스크롤 리스트 */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4">
        {sorted.length === 0 ? (
          <p className="text-gray-600 text-xs py-6 text-center">
            검색 결과가 없습니다.
          </p>
        ) : (
          <ul className="space-y-1">
            {sorted.map((e) => (
              <li key={e.id}>
                <button
                  onClick={() => onEventClick(e)}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] text-gray-500">
                      {new Date(e.x).toISOString().slice(0, 10)}
                    </span>
                    <span className="text-[11px] text-yellow-500/80">
                      {"★".repeat(e.impact)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-200 group-hover:text-white leading-snug">
                    {e.text}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    {EVENT_TYPES[e.type]?.name ?? e.type}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 하단 요약 */}
      <div className="border-t border-gray-800 px-4 py-3 shrink-0">
        <div className="flex justify-between text-[11px] text-gray-500">
          <span>전체 {events.length}건</span>
          <span>고임팩트 {highImpact}건</span>
          <span>카테고리 {categories}종</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Mode B — Event Detail + Quick KPI
   ──────────────────────────────────────────── */

function EventDetailView({
  event,
  price,
  onBack,
}: {
  event: EventItem;
  price: PricePoint[];
  onBack: () => void;
}) {
  const rangeDays = 30;

  const kpi = useMemo(() => {
    const before = sliceByRange(price, event.x - rangeDays * DAY, event.x);
    const after = sliceByRange(price, event.x, event.x + rangeDays * DAY);

    const b0 = before[0]?.[1];
    const b1 = before[before.length - 1]?.[1];
    const a0 = after[0]?.[1];
    const a1 = after[after.length - 1]?.[1];
    const vBefore = volApprox(before);
    const vAfter = volApprox(after);

    return {
      beforeReturn: fmtPct(pct(b0, b1)),
      afterReturn: fmtPct(pct(a0, a1)),
      beforeVol: vBefore == null ? "-" : vBefore.toFixed(2) + "%",
      afterVol: vAfter == null ? "-" : vAfter.toFixed(2) + "%",
    };
  }, [event, price]);

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={onBack}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          &larr; Event Timeline
        </button>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-300 text-xs"
        >
          ✕
        </button>
      </div>

      {/* 스크롤 영역 */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4">
        <h3 className="text-sm font-semibold text-gray-200 mb-3">
          Event Detail
        </h3>

        <dl className="space-y-3 text-sm">
          <DetailRow label="Title" value={event.text} />
          <DetailRow
            label="Type"
            value={EVENT_TYPES[event.type]?.name ?? event.type}
          />
          <DetailRow
            label="Date"
            value={new Date(event.x).toISOString().slice(0, 10)}
          />
          <DetailRow
            label="Impact"
            value={"★".repeat(event.impact)}
            valueClass="text-yellow-500/80"
          />
          <DetailRow label="Description" value={event.desc} />
          <DetailRow label="Detail" value={event.content} />
          <DetailRow label="출처" value={event.source} small />
          <DetailRow label="출처 일자" value={event.sourceDate} small />
        </dl>

        {/* Quick Impact KPI */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Quick Impact (D-{rangeDays} / D+{rangeDays})
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <KpiCell label="Before 수익률" value={kpi.beforeReturn} />
            <KpiCell label="After 수익률" value={kpi.afterReturn} />
            <KpiCell label="Before 변동성" value={kpi.beforeVol} />
            <KpiCell label="After 변동성" value={kpi.afterVol} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── tiny helpers ── */

function DetailRow({
  label,
  value,
  valueClass,
  small,
}: {
  label: string;
  value: string;
  valueClass?: string;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="text-gray-500 text-xs">{label}</dt>
      <dd
        className={
          small
            ? "text-gray-400 text-xs mt-0.5"
            : `${valueClass ?? "text-gray-200"} leading-relaxed mt-0.5`
        }
      >
        {value}
      </dd>
    </div>
  );
}

function KpiCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-800 rounded-lg p-2 bg-black/15">
      <div className="text-[10px] text-gray-500">{label}</div>
      <div className="text-xs font-bold text-gray-200 mt-0.5">{value}</div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Mode C — Decision Timeline (list)
   ──────────────────────────────────────────── */

const STANCE_COLOR: Record<Decision["stance"], string> = {
  BUY: "bg-green-600/80 text-green-100",
  HOLD: "bg-yellow-600/80 text-yellow-100",
  SELL: "bg-red-600/80 text-red-100",
};

function DecisionTimelineView({
  decisions,
  onDecisionClick,
}: {
  decisions: Decision[];
  onDecisionClick: (d: Decision) => void;
}) {
  const sorted = useMemo(
    () => [...decisions].sort((a, b) => a.x - b.x),
    [decisions]
  );

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-sm font-semibold text-gray-200 px-4 pt-4 pb-2 shrink-0">
        판단 로그
      </h3>

      <div className="flex-1 min-h-0 overflow-y-auto px-4">
        {sorted.length === 0 ? (
          <p className="text-gray-600 text-xs py-6 text-center">
            판단 로그가 없습니다.
          </p>
        ) : (
          <ul className="space-y-1">
            {sorted.map((d, i) => (
              <li key={`${d.title}-${i}`}>
                <button
                  onClick={() => onDecisionClick(d)}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] text-gray-500">
                      {new Date(d.x).toISOString().slice(0, 10)}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${STANCE_COLOR[d.stance]}`}
                    >
                      {d.stance}
                    </span>
                  </div>
                  <div className="text-sm text-gray-200 group-hover:text-white leading-snug">
                    {d.title}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 truncate">
                    {d.note}
                  </div>
                  <div className="text-[11px] text-gray-600 mt-0.5">
                    {d.who}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-gray-800 px-4 py-3 shrink-0">
        <div className="text-[11px] text-gray-500">
          전체 {decisions.length}건
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Mode D — Decision Detail
   ──────────────────────────────────────────── */

function DecisionDetailView({
  decision,
  onBack,
}: {
  decision: Decision;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={onBack}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          &larr; 판단 로그
        </button>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-300 text-xs"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4">
        <h3 className="text-sm font-semibold text-gray-200 mb-3">
          판단 상세
        </h3>

        <dl className="space-y-3 text-sm">
          <DetailRow label="제목" value={decision.title} />
          <div>
            <dt className="text-gray-500 text-xs">판단</dt>
            <dd className="mt-0.5">
              <span
                className={`text-xs px-2 py-0.5 rounded font-medium ${STANCE_COLOR[decision.stance]}`}
              >
                {decision.stance}
              </span>
            </dd>
          </div>
          <DetailRow label="메모" value={decision.note} />
          <DetailRow label="작성자" value={decision.who} />
          <DetailRow
            label="날짜"
            value={new Date(decision.x).toISOString().slice(0, 10)}
          />
        </dl>
      </div>
    </div>
  );
}
