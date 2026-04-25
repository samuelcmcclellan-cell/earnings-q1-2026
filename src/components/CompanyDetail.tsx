import { X } from "lucide-react";
import type { CompanyEarnings } from "../types";
import { fmtPct, fmtBn } from "../lib/utils";
import { Badge } from "./ui/Badge";

export function CompanyDetail({ c, onClose }: { c: CompanyEarnings; onClose: () => void }) {
  const guidanceMap: Record<string, "emerald" | "rose" | "amber" | "blue" | "slate"> = {
    raised: "emerald",
    reaffirmed: "blue",
    lowered: "rose",
    withdrawn: "rose",
    mixed: "amber",
    initiated: "blue",
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto" onClick={onClose}>
      <div
        className="relative max-w-3xl w-full glass rounded-2xl p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-100"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-baseline gap-3">
          <div className="text-2xl font-semibold num text-slate-50">{c.ticker}</div>
          <div className="text-sm text-slate-400">{c.name}</div>
          <Badge tone="blue">{c.sector}</Badge>
        </div>
        <div className="mt-1 text-xs text-slate-500">
          {c.fiscalPeriod} · Reported {c.reportDate}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">EPS</div>
            <div className="text-base num font-medium text-slate-100 mt-0.5">${c.epsActual.toFixed(2)}</div>
            <div className="text-[10px] text-slate-500 num">est ${c.epsEstimate.toFixed(2)}</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">EPS Surp</div>
            <div className={`text-base num font-medium mt-0.5 ${c.epsSurprisePct >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {fmtPct(c.epsSurprisePct, 1)}
            </div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Revenue</div>
            <div className="text-base num font-medium text-slate-100 mt-0.5">{fmtBn(c.revenueActualBn)}</div>
            <div className={`text-[10px] num ${c.revenueGrowthYoY >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {fmtPct(c.revenueGrowthYoY, 1)} YoY
            </div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Day-1 Move</div>
            <div className={`text-base num font-medium mt-0.5 ${c.stockReaction1d >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {fmtPct(c.stockReaction1d, 1)}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Guidance</div>
            <Badge tone={guidanceMap[c.guidance]}>{c.guidance}</Badge>
          </div>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">{c.guidanceNote}</p>
        </div>

        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">Top Quote</div>
          <blockquote className="border-l-2 border-blue-500/60 pl-4 italic text-slate-200 leading-relaxed">
            &ldquo;{c.topQuote.quote}&rdquo;
          </blockquote>
          <div className="mt-2 text-xs text-slate-500">— {c.topQuote.speaker}, {c.topQuote.role}</div>
        </div>

        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">Takeaways</div>
          <ul className="space-y-2 text-sm text-slate-300">
            {c.takeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="num text-slate-500 mt-1 text-[10px]">▍</span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
