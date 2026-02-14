"use client";

import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import type {
  PricePoint,
  EventItem,
  Decision,
  Scenario,
  ReportDraft,
  ReportBlock,
} from "@/lib/data";
import { pct, fmtPct, EVENT_TYPES } from "@/lib/data";
import { Button } from "./Toolbar";

const ReportChartEmbed = dynamic(() => import("./ReportChartEmbed"), {
  ssr: false,
});

interface Props {
  price: PricePoint[];
  events: EventItem[];
  decisions: Decision[];
  scenario: Scenario;
  priceRange: { min: number; max: number };
  draft: ReportDraft;
  onDraftChange: (draft: ReportDraft) => void;
}

export default function ComposeWorkspace({
  price,
  events,
  decisions,
  scenario,
  draft,
  onDraftChange,
}: Props) {
  const updateBlock = useCallback(
    (id: string, patch: Partial<ReportBlock>) => {
      onDraftChange({
        ...draft,
        lastModified: Date.now(),
        blocks: draft.blocks.map((b) =>
          b.id === id ? { ...b, ...patch } : b
        ),
      });
    },
    [draft, onDraftChange]
  );

  const addFreetextBlock = useCallback(() => {
    const maxOrder = Math.max(...draft.blocks.map((b) => b.order), 0);
    const newBlock: ReportBlock = {
      id: "blk_free_" + Date.now(),
      type: "freetext",
      content: "",
      visible: true,
      order: maxOrder + 1,
    };
    onDraftChange({
      ...draft,
      lastModified: Date.now(),
      blocks: [...draft.blocks, newBlock],
    });
  }, [draft, onDraftChange]);

  const sortedBlocks = [...draft.blocks].sort((a, b) => a.order - b.order);

  /* ── KPI calculations ── */
  const firstPrice = price[0]?.[1];
  const lastPrice = price[price.length - 1]?.[1];
  const returnPct = pct(firstPrice, lastPrice);
  const highImpactCount = events.filter((e) => e.impact >= 3).length;

  return (
    <div className="h-full overflow-y-auto px-8 py-6">
      <div className="max-w-[900px] mx-auto space-y-4">
        {/* Report Toolbar */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wide">
            Report Composer
          </h2>
          <Button onClick={addFreetextBlock}>+ 텍스트 블록 추가</Button>
        </div>

        {sortedBlocks.map((block) => {
          if (!block.visible) return null;

          switch (block.type) {
            case "title":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Title
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    className="w-full bg-transparent border-none outline-none text-gray-100 text-2xl font-bold placeholder-gray-600"
                    placeholder="리포트 제목을 입력하세요"
                  />
                </div>
              );

            case "summary":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Summary
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={6}
                    className="report-textarea"
                    placeholder="분석 요약을 작성하세요"
                  />
                </div>
              );

            case "kpi":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-600 uppercase">
                      KPI Summary
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-3 mb-3">
                    <KpiCard label="기간 수익률" value={fmtPct(returnPct)} />
                    <KpiCard label="이벤트 수" value={String(events.length)} />
                    <KpiCard
                      label="고임팩트"
                      value={String(highImpactCount)}
                    />
                    <KpiCard label="판단 건수" value={String(decisions.length)} />
                    <KpiCard label="시나리오" value={scenario} />
                  </div>
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={2}
                    className="report-textarea"
                    placeholder="KPI에 대한 코멘트 (선택)"
                  />
                </div>
              );

            case "chart":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Chart
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <ReportChartEmbed
                    price={price}
                    events={events}
                    decisions={decisions}
                    scenario={scenario}
                  />
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={2}
                    className="report-textarea mt-3"
                    placeholder="차트 캡션 (선택)"
                  />
                </div>
              );

            case "events":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Events
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-500 text-xs border-b border-gray-800">
                          <th className="text-left py-1.5 pr-3">날짜</th>
                          <th className="text-left py-1.5 pr-3">타입</th>
                          <th className="text-left py-1.5 pr-3">제목</th>
                          <th className="text-left py-1.5">강도</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((evt) => (
                          <tr
                            key={evt.id}
                            className="border-b border-gray-800/50 text-gray-300"
                          >
                            <td className="py-1.5 pr-3 text-xs text-gray-400">
                              {new Date(evt.x).toLocaleDateString()}
                            </td>
                            <td className="py-1.5 pr-3 text-xs">
                              {EVENT_TYPES[evt.type]?.name ?? evt.type}
                            </td>
                            <td className="py-1.5 pr-3">{evt.text}</td>
                            <td className="py-1.5">
                              {"★".repeat(evt.impact)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={2}
                    className="report-textarea mt-3"
                    placeholder="이벤트에 대한 코멘트 (선택)"
                  />
                </div>
              );

            case "decisions":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Decisions
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  {decisions.length === 0 ? (
                    <p className="text-gray-600 text-sm">
                      판단 로그가 없습니다.
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-gray-500 text-xs border-b border-gray-800">
                            <th className="text-left py-1.5 pr-3">날짜</th>
                            <th className="text-left py-1.5 pr-3">판단</th>
                            <th className="text-left py-1.5 pr-3">메모</th>
                            <th className="text-left py-1.5">작성자</th>
                          </tr>
                        </thead>
                        <tbody>
                          {decisions.map((d, i) => (
                            <tr
                              key={i}
                              className="border-b border-gray-800/50 text-gray-300"
                            >
                              <td className="py-1.5 pr-3 text-xs text-gray-400">
                                {new Date(d.x).toLocaleDateString()}
                              </td>
                              <td className="py-1.5 pr-3">
                                <span
                                  className={
                                    d.stance === "BUY"
                                      ? "text-green-400"
                                      : d.stance === "SELL"
                                      ? "text-red-400"
                                      : "text-yellow-400"
                                  }
                                >
                                  {d.stance}
                                </span>
                              </td>
                              <td className="py-1.5 pr-3">{d.note}</td>
                              <td className="py-1.5 text-xs text-gray-400">
                                {d.who}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={2}
                    className="report-textarea mt-3"
                    placeholder="판단에 대한 코멘트 (선택)"
                  />
                </div>
              );

            case "freetext":
              return (
                <div key={block.id} className="report-block">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-600 uppercase">
                      Free Text
                    </span>
                    <VisibilityToggle
                      visible={block.visible}
                      onToggle={(v) => updateBlock(block.id, { visible: v })}
                    />
                  </div>
                  <textarea
                    value={block.content}
                    onChange={(e) =>
                      updateBlock(block.id, { content: e.target.value })
                    }
                    rows={4}
                    className="report-textarea"
                    placeholder="자유 텍스트를 입력하세요"
                  />
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-lg px-3 py-2.5 text-center">
      <div className="text-[10px] text-gray-500 mb-1">{label}</div>
      <div className="text-sm font-semibold text-gray-200">{value}</div>
    </div>
  );
}

function VisibilityToggle({
  visible,
  onToggle,
}: {
  visible: boolean;
  onToggle: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onToggle(!visible)}
      className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors"
      title={visible ? "블록 숨기기" : "블록 보이기"}
    >
      {visible ? "hide" : "show"}
    </button>
  );
}
