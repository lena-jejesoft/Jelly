"use client";

import React, { useRef, useMemo, useCallback } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "@/lib/highcharts";
import type { PricePoint, EventItem, Decision, Scenario } from "@/lib/data";
import { DAY, buildScenarioBands } from "@/lib/data";
import { Toolbar, Chip, Select, Button } from "./Toolbar";

interface Props {
  price: PricePoint[];
  events: EventItem[];
  scenario: Scenario;
  decisions: Decision[];
  onScenarioChange: (v: Scenario) => void;
  onAddDecision: () => void;
}

export default function ScenarioChart({
  price,
  events,
  scenario,
  decisions,
  onScenarioChange,
  onAddDecision,
}: Props) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const lastX = price[price.length - 1][0];

  const { band } = useMemo(
    () => buildScenarioBands(scenario, price),
    [scenario, price]
  );

  const eventFlags = useMemo(
    () => events.map((e) => ({ x: e.x, title: e.title, text: e.desc })),
    [events]
  );

  const decisionFlags = useMemo(
    () =>
      decisions.map((d) => ({
        x: d.x,
        title: d.stance === "BUY" ? "B" : d.stance === "SELL" ? "S" : "H",
        text: `<b>${d.title}</b><br/>${d.note}<br/><span style="opacity:.85">by ${d.who} • ${d.stance}</span>`,
      })),
    [decisions]
  );

  const options: Highcharts.Options = useMemo(
    () => ({
      rangeSelector: { selected: 2 },
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
          id: "p3",
          type: "line" as const,
          name: "Price",
          data: price,
        },
        {
          id: "events3",
          type: "flags" as const,
          onSeries: "p3",
          shape: "flag",
          data: eventFlags,
        },
        {
          id: "scenarioBand",
          type: "arearange" as const,
          name: "Scenario Band",
          data: band,
          color: "rgba(99,102,241,0.3)",
          fillOpacity: 0.2,
        },
        {
          id: "decisions",
          type: "flags" as const,
          onSeries: "p3",
          shape: "circlepin",
          data: decisionFlags,
        },
      ],
    }),
    [price, eventFlags, band, decisionFlags, lastX]
  );

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

  // After chart renders, set initial zoom to scenario view
  const afterChartCreated = useCallback(
    (chart: Highcharts.Chart) => {
      chart.xAxis[0].setExtremes(lastX - 60 * DAY, lastX + 120 * DAY);
    },
    [lastX]
  );

  return (
    <div className="card mt-3">
      <h2 className="text-sm font-bold my-1 mb-2.5">
        3){" "}
        <span className="font-bold">미래 시점</span> 시나리오 밴드 + 팀
        판단(Decision) 히스토리 (메모 입력)
      </h2>
      <Toolbar>
        <Chip>시나리오:</Chip>
        <Select
          value={scenario}
          onChange={(v) => onScenarioChange(v as Scenario)}
        >
          <option value="BASE">BASE (중립)</option>
          <option value="BULL">BULL (상방)</option>
          <option value="BEAR">BEAR (하방)</option>
        </Select>
        <Button onClick={jumpToNow}>현재/미래 보기</Button>
        <Button onClick={onAddDecision}>판단 로그 추가 (메모)</Button>
        <Button onClick={resetZoom}>줌 리셋</Button>
      </Toolbar>
      <div className="h-[420px]">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={options}
          ref={chartRef}
          containerProps={{ style: { height: "100%" } }}
          callback={afterChartCreated}
        />
      </div>
      <p className="text-gray-500 text-xs mt-2 leading-relaxed">
        &quot;판단 로그 추가&quot;를 누르면 BUY/HOLD/SELL + 메모를 입력하고,
        차트에 팀 판단 마커가 생성됩니다.
      </p>
    </div>
  );
}
