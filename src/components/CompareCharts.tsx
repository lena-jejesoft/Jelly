"use client";

import React, { useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "@/lib/highcharts";
import type { PricePoint, EventItem } from "@/lib/data";
import {
  DAY,
  sliceByRange,
  pct,
  fmtPct,
  volApprox,
  EVENT_TYPES,
} from "@/lib/data";
import { Toolbar, Chip, Button } from "./Toolbar";

interface Props {
  selectedEvent: EventItem | null;
  price: PricePoint[];
  onReset: () => void;
}

function makeCompareOptions(
  data: PricePoint[],
  eventFlag: { x: number; title: string; text: string } | null
): Highcharts.Options {
  return {
    rangeSelector: { enabled: false },
    navigator: { enabled: false },
    scrollbar: { enabled: false },
    tooltip: { shared: true },
    series: [
      {
        id: "cmpPrice",
        type: "line" as const,
        name: "Price",
        data,
      },
      {
        id: "cmpEvent",
        type: "flags" as const,
        onSeries: "cmpPrice",
        shape: "circlepin",
        data: eventFlag ? [eventFlag] : [],
      },
    ],
  };
}

export default function CompareCharts({
  selectedEvent,
  price,
  onReset,
}: Props) {
  const { beforeData, afterData, flag } = useMemo(() => {
    if (!selectedEvent) return { beforeData: [], afterData: [], flag: null };
    const x = selectedEvent.x;
    return {
      beforeData: sliceByRange(price, x - 30 * DAY, x),
      afterData: sliceByRange(price, x, x + 60 * DAY),
      flag: { x, title: selectedEvent.title, text: selectedEvent.desc },
    };
  }, [selectedEvent, price]);

  const beforeOpts = useMemo(
    () => makeCompareOptions(beforeData, flag),
    [beforeData, flag]
  );
  const afterOpts = useMemo(
    () => makeCompareOptions(afterData, flag),
    [afterData, flag]
  );

  const kpis = useMemo(() => {
    if (!selectedEvent)
      return { event: "-", before: "-", after: "-", vol: "-" };

    const b0 = beforeData[0]?.[1];
    const b1 = beforeData[beforeData.length - 1]?.[1];
    const a0 = afterData[0]?.[1];
    const a1 = afterData[afterData.length - 1]?.[1];
    const v = volApprox(afterData);

    return {
      event: `${EVENT_TYPES[selectedEvent.type].name} / ${selectedEvent.text}`,
      before: fmtPct(pct(b0, b1)),
      after: fmtPct(pct(a0, a1)),
      vol: v == null ? "-" : v.toFixed(2) + "%",
    };
  }, [selectedEvent, beforeData, afterData]);

  const leftTitle = selectedEvent
    ? `Before: D-30 ~ D (${selectedEvent.text})`
    : "Before (선택 전)";
  const rightTitle = selectedEvent
    ? `After: D ~ D+60 (${selectedEvent.text})`
    : "After (선택 전)";

  return (
    <div className="card mt-3">
      <h2 className="text-sm font-bold my-1 mb-2.5">
        2) 이벤트 클릭 → Before / After 자동 비교
      </h2>
      <Toolbar>
        <Chip>클릭한 이벤트 기준</Chip>
        <Chip>D-30~D</Chip>
        <Chip>D~D+60</Chip>
        <Button onClick={onReset}>선택 해제</Button>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Chip>{leftTitle}</Chip>
          <div className="h-[360px] mt-2">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="stockChart"
              options={beforeOpts}
              containerProps={{ style: { height: "100%" } }}
            />
          </div>
        </div>
        <div>
          <Chip>{rightTitle}</Chip>
          <div className="h-[360px] mt-2">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="stockChart"
              options={afterOpts}
              containerProps={{ style: { height: "100%" } }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2.5">
        <KpiBox label="선택 이벤트" value={kpis.event} />
        <KpiBox label="Before 수익률" value={kpis.before} />
        <KpiBox label="After 수익률" value={kpis.after} />
        <KpiBox label="After 변동성(대략)" value={kpis.vol} />
      </div>

      <p className="text-gray-500 text-xs mt-2 leading-relaxed">
        이벤트 클릭 → 전후 구간을 자동으로 잘라 비교합니다.
      </p>
    </div>
  );
}

function KpiBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-800 rounded-xl p-2 bg-black/15">
      <div className="text-[11px] text-gray-500">{label}</div>
      <div className="text-[13px] font-bold mt-0.5">{value}</div>
    </div>
  );
}
