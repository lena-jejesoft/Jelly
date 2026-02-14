"use client";

import React, { useRef, useCallback, useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "@/lib/highcharts";
import type { PricePoint, EventItem, Decision, Scenario } from "@/lib/data";
import { DAY, buildScenarioBands } from "@/lib/data";
import { Toolbar, Select, Button, ControlGroup } from "./Toolbar";

interface Props {
  price: PricePoint[];
  events: EventItem[];
  filterType: string;
  filterImpact: number;
  onFilterTypeChange: (v: string) => void;
  onFilterImpactChange: (v: number) => void;
  onEventClick: (evt: EventItem) => void;
  scenario: Scenario;
  decisions: Decision[];
  onScenarioChange: (v: Scenario) => void;
  onAddDecision: () => void;
}

export default function UnifiedChart({
  price,
  events,
  filterType,
  filterImpact,
  onFilterTypeChange,
  onFilterImpactChange,
  onEventClick,
  scenario,
  decisions,
  onScenarioChange,
  onAddDecision,
}: Props) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const lastX = price[price.length - 1][0];

  /* ── filtered event flags ── */
  const filteredFlags = useMemo(() => {
    return events
      .filter((e) => {
        const okType = filterType === "ALL" || e.type === filterType;
        const okImpact = e.impact >= filterImpact;
        return okType && okImpact;
      })
      .map((e) => ({ x: e.x, title: e.title, text: e.desc }));
  }, [events, filterType, filterImpact]);

  /* ── event click handler ── */
  const handleFlagClick = useCallback(
    function (this: Highcharts.Point) {
      const pt = this;
      const found =
        events.find((e) => e.x === pt.x && e.title === pt.options.title) ||
        events.find((e) => e.x === pt.x);
      if (found) onEventClick(found);
    },
    [events, onEventClick]
  );

  /* ── scenario band ── */
  const { band } = useMemo(
    () => buildScenarioBands(scenario, price),
    [scenario, price]
  );

  /* ── decision flags ── */
  const decisionFlags = useMemo(
    () =>
      decisions.map((d) => ({
        x: d.x,
        title: d.stance === "BUY" ? "B" : d.stance === "SELL" ? "S" : "H",
        text: `<b>${d.title}</b><br/>${d.note}<br/><span style="opacity:.85">by ${d.who} • ${d.stance}</span>`,
      })),
    [decisions]
  );

  /* ── Highcharts options ── */
  const options: Highcharts.Options = useMemo(
    () => ({
      rangeSelector: { enabled: true },
      tooltip: { shared: true },
      xAxis: {
        plotLines: [
          {
            value: lastX,
            width: 2,
            color: "rgba(255,255,255,0.35)",
            dashStyle: "ShortDash" as const,
            label: {
              text: "AS-OF",
              style: { color: "rgba(229,231,235,0.85)" },
              y: 12,
            },
            zIndex: 5,
          },
        ],
      },
      series: [
        {
          id: "price",
          name: "Price",
          type: "line" as const,
          data: price,
        },
        {
          id: "eventsFlags",
          type: "flags" as const,
          name: "Events",
          onSeries: "price",
          shape: "flag",
          data: filteredFlags,
          allowOverlapX: true,
          zIndex: 6,
          y: -30,
          point: {
            events: {
              click: handleFlagClick,
            },
          },
        },
        {
          id: "scenarioBand",
          type: "arearange" as const,
          name: "Scenario Band",
          data: band,
          color: "rgba(99,102,241,0.55)",
          fillOpacity: 0.35,
        },
        {
          id: "decisions",
          type: "flags" as const,
          onSeries: "price",
          shape: "circlepin",
          name: "Decisions",
          data: decisionFlags,
          allowOverlapX: true,
          zIndex: 5,
          y: -65,
        },
      ],
    }),
    [price, filteredFlags, handleFlagClick, band, decisionFlags, lastX]
  );

  /* ── zoom helpers ── */
  const jumpToNow = useCallback(() => {
    const chart = chartRef.current?.chart;
    if (chart) {
      chart.xAxis[0].setExtremes(lastX - 60 * DAY, lastX + 120 * DAY);
    }
  }, [lastX]);

  const resetZoom = useCallback(() => {
    const chart = chartRef.current?.chart;
    if (chart) chart.xAxis[0].setExtremes(undefined, undefined);
  }, []);

  /* ── initial zoom to show scenario band ── */
  const afterChartCreated = useCallback(
    (chart: Highcharts.Chart) => {
      chart.xAxis[0].setExtremes(lastX - 60 * DAY, lastX + 120 * DAY);
    },
    [lastX]
  );

  return (
    <div className="card">
      <h2 className="text-gray-100 text-2xl font-bold mb-5">Price &amp; Event Timeline</h2>
      {/* ── 방식 C: 단일 행 그룹핑 툴바 ── */}
      <Toolbar>
        <ControlGroup label="이벤트">
          <Select value={filterType} onChange={onFilterTypeChange}>
            <option value="ALL">전체</option>
            <option value="EARNINGS">실적</option>
            <option value="FUNDING">증자/자금조달</option>
            <option value="CONTRACT">수주/계약</option>
            <option value="REGULATION">규제/정책</option>
            <option value="INSIDER">오너/지배구조</option>
          </Select>
          <Select
            value={String(filterImpact)}
            onChange={(v) => onFilterImpactChange(Number(v))}
          >
            <option value="0">강도 0+</option>
            <option value="1">강도 1+</option>
            <option value="2">강도 2+</option>
            <option value="3">강도 3+</option>
          </Select>
        </ControlGroup>

        <ControlGroup label="시나리오">
          <Select
            value={scenario}
            onChange={(v) => onScenarioChange(v as Scenario)}
          >
            <option value="BASE">BASE (중립)</option>
            <option value="BULL">BULL (상방)</option>
            <option value="BEAR">BEAR (하방)</option>
          </Select>
          <Button onClick={jumpToNow}>현재/미래</Button>
          <Button onClick={onAddDecision}>판단 로그 추가 (메모)</Button>
        </ControlGroup>

        <Button onClick={resetZoom}>줌 리셋</Button>
      </Toolbar>

      {/* ── 통합 차트 ── */}
      <div className="h-full">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={options}
          ref={chartRef}
          containerProps={{ style: { height: "100%" } }}
          callback={afterChartCreated}
        />
      </div>
    </div>
  );
}
