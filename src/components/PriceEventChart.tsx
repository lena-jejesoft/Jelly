"use client";

import React, { useRef, useCallback, useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "@/lib/highcharts";
import type { PricePoint, EventItem } from "@/lib/data";
import { Toolbar, Chip, Select, Button } from "./Toolbar";

interface Props {
  price: PricePoint[];
  events: EventItem[];
  filterType: string;
  filterImpact: number;
  onFilterTypeChange: (v: string) => void;
  onFilterImpactChange: (v: number) => void;
  onEventClick: (evt: EventItem) => void;
}

export default function PriceEventChart({
  price,
  events,
  filterType,
  filterImpact,
  onFilterTypeChange,
  onFilterImpactChange,
  onEventClick,
}: Props) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const filteredFlags = useMemo(() => {
    return events
      .filter((e) => {
        const okType = filterType === "ALL" || e.type === filterType;
        const okImpact = e.impact >= filterImpact;
        return okType && okImpact;
      })
      .map((e) => ({ x: e.x, title: e.title, text: e.desc }));
  }, [events, filterType, filterImpact]);

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

  const options: Highcharts.Options = useMemo(
    () => ({
      rangeSelector: { selected: 2 },
      tooltip: { shared: true },
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
          point: {
            events: {
              click: handleFlagClick,
            },
          },
        },
      ],
    }),
    [price, filteredFlags, handleFlagClick]
  );

  const resetZoom = () => {
    const chart = chartRef.current?.chart;
    if (chart) chart.xAxis[0].setExtremes(undefined, undefined);
  };

  return (
    <div className="card">
      <h2 className="text-sm font-bold my-1 mb-2.5">
        1) Price + Event Flags + 카테고리 필터
      </h2>
      <Toolbar>
        <Chip>이벤트 표시:</Chip>
        <Select value={filterType} onChange={onFilterTypeChange}>
          <option value="ALL">전체</option>
          <option value="EARNINGS">실적</option>
          <option value="FUNDING">증자/자금조달</option>
          <option value="CONTRACT">수주/계약</option>
          <option value="REGULATION">규제/정책</option>
          <option value="INSIDER">오너/지배구조</option>
        </Select>
        <Chip>강도(Impact) 최소:</Chip>
        <Select
          value={String(filterImpact)}
          onChange={(v) => onFilterImpactChange(Number(v))}
        >
          <option value="0">0+</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </Select>
        <Button onClick={resetZoom}>줌 리셋</Button>
      </Toolbar>
      <div className="h-[420px]">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={options}
          ref={chartRef}
          containerProps={{ style: { height: "100%" } }}
        />
      </div>
    </div>
  );
}
