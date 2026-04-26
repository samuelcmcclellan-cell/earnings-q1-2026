import type { MacroStats } from "../types";
import { fmtPct } from "../lib/utils";

export function Scoreboard({ m }: { m: MacroStats }) {
  const items = [
    {
      label: "S&P 500 Reporting",
      value: `${m.pctReporting}%`,
      sub: `Through ${m.asOf}`,
      tone: "blue" as const,
    },
    {
      label: "EPS Beat Rate",
      value: `${m.epsBeatPct}%`,
      sub: `${m.revBeatPct}% beat revenue`,
      tone: "emerald" as const,
    },
    {
      label: "EPS Surprise",
      value: fmtPct(m.epsSurprisePct, 1),
      sub: `5yr avg ${fmtPct(m.epsSurprise5yr, 1)} · 10yr ${fmtPct(m.epsSurprise10yr, 1)}`,
      tone: "emerald" as const,
    },
    {
      label: "Earnings Growth",
      value: fmtPct(m.earningsGrowth, 1),
      sub: `${fmtPct(m.earningsGrowthMar31, 1)} on Mar 31 · ${m.consecDoubleDigitGrowthQuarters}th straight double-digit Q`,
      tone: "violet" as const,
    },
    {
      label: "Revenue Growth",
      value: fmtPct(m.revenueGrowth, 1),
      sub: `Highest since Q3 2022 · was ${fmtPct(m.revenueGrowthMar31, 1)} Mar 31`,
      tone: "cyan" as const,
    },
    {
      label: "Net Profit Margin",
      value: `${m.netMargin.toFixed(1)}%`,
      sub: `RECORD · prior ${m.netMarginPriorRecord}% · 5yr avg ${m.netMargin5yr}%`,
      tone: "amber" as const,
    },
  ];

  const accentBg: Record<string, string> = {
    blue: "from-blue-500/25",
    emerald: "from-emerald-500/25",
    violet: "from-violet-500/25",
    cyan: "from-cyan-500/25",
    amber: "from-amber-500/25",
  };
  const accentText: Record<string, string> = {
    blue: "text-blue-300",
    emerald: "text-emerald-300",
    violet: "text-violet-300",
    cyan: "text-cyan-300",
    amber: "text-amber-300",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {items.map((i) => (
        <div key={i.label} className="relative glass rounded-lg p-4 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${accentBg[i.tone]} to-transparent opacity-60 pointer-events-none`} />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{i.label}</div>
            <div className={`mt-2 text-2xl num font-semibold ${accentText[i.tone]}`}>{i.value}</div>
            <div className="mt-1.5 text-[10px] text-slate-500 leading-snug">{i.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
