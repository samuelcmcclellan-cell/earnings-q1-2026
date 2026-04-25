import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import type { CompanyEarnings } from "../types";
import { cn, fmtPct } from "../lib/utils";
import { Badge } from "./ui/Badge";

export function CompanyTile({
  c,
  onClick,
  active,
}: {
  c: CompanyEarnings;
  onClick?: () => void;
  active?: boolean;
}) {
  const reactionTone = c.stockReaction1d >= 0 ? "emerald" : "rose";
  const guidanceMap: Record<string, "emerald" | "rose" | "amber" | "blue" | "slate"> = {
    raised: "emerald",
    reaffirmed: "blue",
    lowered: "rose",
    withdrawn: "rose",
    mixed: "amber",
    initiated: "blue",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left glass rounded-xl p-4 hover:border-slate-600 transition-all group h-full flex flex-col",
        active && "ring-2 ring-blue-500/50 border-blue-500/50"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold num text-slate-50">{c.ticker}</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">{c.sector}</span>
          </div>
          <div className="text-xs text-slate-400 truncate mt-0.5">{c.name}</div>
        </div>
        <div className={cn("flex items-center gap-1 text-sm num font-medium",
          reactionTone === "emerald" ? "text-emerald-400" : "text-rose-400")}>
          {c.stockReaction1d > 0 ? <ArrowUp className="w-3.5 h-3.5" /> :
           c.stockReaction1d < 0 ? <ArrowDown className="w-3.5 h-3.5" /> :
           <Minus className="w-3.5 h-3.5" />}
          {fmtPct(c.stockReaction1d, 1)}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded bg-slate-900/60 px-2 py-1.5">
          <div className="text-[9px] uppercase tracking-wider text-slate-500">EPS surp</div>
          <div className={cn("text-sm num font-medium",
            c.epsSurprisePct >= 0 ? "text-emerald-400" : "text-rose-400")}>
            {fmtPct(c.epsSurprisePct, 1)}
          </div>
        </div>
        <div className="rounded bg-slate-900/60 px-2 py-1.5">
          <div className="text-[9px] uppercase tracking-wider text-slate-500">Rev YoY</div>
          <div className={cn("text-sm num font-medium",
            c.revenueGrowthYoY >= 0 ? "text-emerald-400" : "text-rose-400")}>
            {fmtPct(c.revenueGrowthYoY, 1)}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <Badge tone={guidanceMap[c.guidance]}>{c.guidance}</Badge>
        <div className="text-[10px] text-slate-500 num">{c.reportDate}</div>
      </div>

      <p className="mt-3 text-[11px] text-slate-400 leading-relaxed line-clamp-3 flex-1">
        &ldquo;{c.topQuote.quote}&rdquo;
      </p>
      <div className="mt-2 text-[10px] text-slate-500">
        — {c.topQuote.speaker}, {c.topQuote.role}
      </div>
    </button>
  );
}
