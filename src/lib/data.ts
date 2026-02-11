export type PricePoint = [number, number]; // [timestamp, price]

export interface EventItem {
  id: string;
  x: number;
  type: string;
  impact: number;
  title: string;
  text: string;
  desc: string;
}

export interface Decision {
  x: number;
  title: string;
  note: string;
  who: string;
  stance: "BUY" | "HOLD" | "SELL";
}

export type Scenario = "BASE" | "BULL" | "BEAR";

export const DAY = 24 * 3600 * 1000;

export function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function genPriceSeries(
  startTs: number,
  days: number,
  startPrice = 100
): PricePoint[] {
  const data: PricePoint[] = [];
  let p = startPrice;
  for (let i = 0; i < days; i++) {
    const t = startTs + i * DAY;
    const r = (seededRandom(i * 13.37) - 0.48) * 0.018;
    const shock = i % 57 === 0 ? (seededRandom(i * 7.77) - 0.5) * 0.12 : 0;
    p = Math.max(10, p * (1 + r + shock));
    data.push([t, +p.toFixed(2)]);
  }
  return data;
}

export const EVENT_TYPES: Record<string, { name: string; short: string }> = {
  EARNINGS: { name: "실적", short: "E" },
  FUNDING: { name: "증자/조달", short: "F" },
  CONTRACT: { name: "수주/계약", short: "C" },
  REGULATION: { name: "규제/정책", short: "R" },
  INSIDER: { name: "오너/지배", short: "I" },
};

export function genEvents(priceData: PricePoint[]): EventItem[] {
  const idxs = [25, 55, 90, 120, 150, 185, 210, 240, 275, 310];
  const types = ["EARNINGS", "FUNDING", "CONTRACT", "REGULATION", "INSIDER"];
  const titles: Record<string, string[]> = {
    EARNINGS: ["실적 서프라이즈", "실적 부진", "가이던스 상향", "가이던스 하향"],
    FUNDING: ["유상증자", "CB 발행", "BW 발행", "자사주 소각"],
    CONTRACT: ["대형 수주", "공급 계약", "파트너십", "계약 해지"],
    REGULATION: ["규제 완화", "규제 강화", "정책 수혜", "정책 불확실"],
    INSIDER: ["최대주주 변경", "경영권 이슈", "임원 매수", "임원 매도"],
  };

  return idxs.map((idx, k) => {
    const i = Math.min(idx, priceData.length - 1);
    const t = priceData[i][0];
    const type = types[k % types.length];
    const impact = 1 + (k % 3);
    const text = titles[type][k % titles[type].length];
    return {
      id: "EVT_" + k,
      x: t,
      type,
      impact,
      title: EVENT_TYPES[type].short,
      text,
      desc: `${EVENT_TYPES[type].name} • ${text} • Impact ${impact}`,
    };
  });
}

export function buildScenarioBands(
  scenario: Scenario,
  priceData: PricePoint[]
): { pivot: number; band: [number, number, number][] } {
  const lastVal = priceData[priceData.length - 1][1];
  const lastX = priceData[priceData.length - 1][0];
  const horizonDays = 120;
  const band: [number, number, number][] = [];

  for (let i = 0; i <= horizonDays; i++) {
    const x = lastX + i * DAY;
    let drift = 0.0006;
    if (scenario === "BULL") drift = 0.0012;
    if (scenario === "BEAR") drift = 0.0001;

    const mid = lastVal * Math.pow(1 + drift, i);
    const width =
      scenario === "BULL" ? 0.22 : scenario === "BEAR" ? 0.28 : 0.25;

    band.push([x, +(mid * (1 - width)).toFixed(2), +(mid * (1 + width)).toFixed(2)]);
  }

  return { pivot: lastX, band };
}

export function sliceByRange(
  series: PricePoint[],
  minX: number,
  maxX: number
): PricePoint[] {
  return series.filter((p) => p[0] >= minX && p[0] <= maxX);
}

export function volApprox(series: PricePoint[]): number | null {
  if (series.length < 3) return null;
  const rets: number[] = [];
  for (let i = 1; i < series.length; i++) {
    rets.push(series[i][1] / series[i - 1][1] - 1);
  }
  const mean = rets.reduce((a, b) => a + b, 0) / rets.length;
  const v = Math.sqrt(
    rets.reduce((a, b) => a + (b - mean) * (b - mean), 0) / rets.length
  );
  return v * 100;
}

export function pct(a: number | undefined, b: number | undefined): number | null {
  if (!a || !b) return null;
  return ((b - a) / a) * 100;
}

export function fmtPct(x: number | null | undefined): string {
  if (x === null || x === undefined || isNaN(x)) return "-";
  return (x >= 0 ? "+" : "") + x.toFixed(2) + "%";
}
