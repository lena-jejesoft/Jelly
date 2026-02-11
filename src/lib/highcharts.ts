// @ts-nocheck — Highcharts ES module masters lack type declarations
// Import both from es-modules path so they share the same Globals instance
import Highcharts from "highcharts/es-modules/masters/highstock.src.js";
import "highcharts/es-modules/masters/highcharts-more.src.js";

Highcharts.setOptions({
  chart: {
    backgroundColor: "transparent",
  },
  title: { text: undefined },
  credits: { enabled: false },
  legend: { enabled: false },
  xAxis: {
    gridLineColor: "rgba(255,255,255,0.06)",
    lineColor: "rgba(255,255,255,0.12)",
    labels: { style: { color: "#9ca3af" } },
  },
  yAxis: {
    gridLineColor: "rgba(255,255,255,0.06)",
    labels: { style: { color: "#9ca3af" } },
    title: { text: undefined },
  },
  tooltip: {
    backgroundColor: "rgba(17,24,39,0.92)",
    borderColor: "rgba(255,255,255,0.12)",
    style: { color: "#e5e7eb" },
  },
  navigator: {
    outlineColor: "rgba(255,255,255,0.18)",
    maskFill: "rgba(255,255,255,0.05)",
    series: { color: "#6366f1" },
    xAxis: { labels: { style: { color: "#9ca3af" } } },
  },
  rangeSelector: {
    buttonTheme: {
      fill: "rgba(255,255,255,0.06)",
      stroke: "rgba(255,255,255,0.12)",
      style: { color: "#9ca3af" },
      states: {
        hover: { fill: "rgba(255,255,255,0.12)" },
        select: { fill: "rgba(99,102,241,0.3)", style: { color: "#e5e7eb" } },
      },
    },
    inputStyle: { color: "#e5e7eb", backgroundColor: "rgba(255,255,255,0.06)" },
    labelStyle: { color: "#9ca3af" },
  },
  scrollbar: {
    barBackgroundColor: "rgba(255,255,255,0.12)",
    trackBackgroundColor: "rgba(255,255,255,0.04)",
    buttonBackgroundColor: "rgba(255,255,255,0.06)",
  },
});

export default Highcharts;
