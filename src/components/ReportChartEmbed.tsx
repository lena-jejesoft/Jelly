"use client";

import React, { useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "@/lib/highcharts";
import type { PricePoint, EventItem, Decision, Scenario } from "@/lib/data";
import { buildScenarioBands } from "@/lib/data";

interface Props {
  price: PricePoint[];
  events: EventItem[];
  decisions: Decision[];
  scenario: Scenario;
}

export default function ReportChartEmbed({
  price,
  events,
  decisions,
  scenario,
}: Props) {
  const lastX = price[price.length - 1][0];

  const eventFlags = useMemo(
    () => events.map((e) => ({ x: e.x, title: e.title, text: e.desc })),
    [events]
  );

  const { band } = useMemo(
    () => buildScenarioBands(scenario, price),
    [scenario, price]
  );

  const decisionFlags = useMemo(
    () =>
      decisions.map((d) => ({
        x: d.x,
        title: d.stance === "BUY" ? "B" : d.stance === "SELL" ? "S" : "H",
        text: `<b>${d.title}</b><br/>${d.note}<br/><span style="opacity:.85">by ${d.who}</span>`,
      })),
    [decisions]
  );

  const options: Highcharts.Options = useMemo(
    () => ({
      chart: { height: 360 },
      rangeSelector: { enabled: false },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
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
          data: eventFlags,
          allowOverlapX: true,
          zIndex: 6,
          y: -30,
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
    [price, eventFlags, band, decisionFlags, lastX]
  );

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
      containerProps={{ style: { width: "100%" } }}
    />
  );
}
