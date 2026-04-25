import type { CompanyEarnings } from "../types";
import { fmtPct } from "../lib/utils";

export function Scoreboard({ companies }: { companies: CompanyEarnings[] }) {
  const beatCount = companies.filter((c) => c.epsSurprisePct > 0).length;
  const missCount = companies.filter((c) => c.epsSurprisePct < 0).length;
  const avgEpsBeat = companies.reduce((s, c) => s + c.epsSurprisePct, 0) / companies.length;
  const avgRevGrowth = companies.reduce((s, c) => s + c.revenueGrowthYoY, 0) / companies.length;
  const avgReaction = companies.reduce((s, c) => s + c.stockReaction1d, 0) / companies.length;
  const raised = companies.filter((c) => c.guidance === "raised").length;
  const lowered = companies.filter((c) => c.guidance === "lowered" || c.guidance === "withdrawn").length;
  const reactPositive = companies.filter((c) => c.stockReaction1d > 0).length;

  const items = [
    { label: "Reports", value: `${companies.length}`, sub: "Mar 20 – Apr 24" },
    { label: "EPS Beats", value: `${beatCount}`, sub: `${missCount} miss · ${companies.length - beatCount - missCount} in-line` },
    { label: "Avg EPS Surp", value: fmtPct(avgEpsBeat, 1), sub: "headline beat" },
    { label: "Avg Rev Growth", value: fmtPct(avgRevGrowth, 1), sub: "YoY blended" },
    { label: "Avg Day-1 Move", value: fmtPct(avgReaction, 1), sub: `${reactPositive}/${companies.length} positive` },
    { label: "Raised Guide", value: `${raised}`, sub: `${lowered} cut/withdrew` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {items.map((i) => (
        <div key={i.label} className="glass rounded-lg px-4 py-3.5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{i.label}</div>
          <div className="mt-2 text-xl num font-semibold text-slate-50">{i.value}</div>
          <div className="mt-1 text-[10px] text-slate-500">{i.sub}</div>
        </div>
      ))}
    </div>
  );
}
