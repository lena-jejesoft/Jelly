import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SectorBook - Event-driven Chart Bench",
  description: "Event-driven Chart Bench with Highcharts Stock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
