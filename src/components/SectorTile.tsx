import type { Sector } from "../types";
import { cn, fmtPct } from "../lib/utils";

const accentBg: Record<string, string> = {
  emerald: "from-emerald-500/20 via-emerald-500/5",
  amber: "from-amber-500/20 via-amber-500/5",
  rose: "from-rose-500/20 via-rose-500/5",
  violet: "from-violet-500/20 via-violet-500/5",
  cyan: "from-cyan-500/20 via-cyan-500/5",
  blue: "from-blue-500/20 via-blue-500/5",
  orange: "from-orange-500/20 via-orange-500/5",
  yellow: "from-yellow-500/20 via-yellow-500/5",
  sky: "from-sky-500/20 via-sky-500/5",
  fuchsia: "from-fuchsia-500/20 via-fuchsia-500/5",
  lime: "from-lime-500/20 via-lime-500/5",
};

const accentText: Record<string, string> = {
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  yellow: "text-yellow-300",
  sky: "text-sky-400",
  fuchsia: "text-fuchsia-400",
  lime: "text-lime-400",
};

function pctOrDash(v: number | null, digits = 1): string {
  if (v === null) return "—";
  return fmtPct(v, digits);
}

function rateOrDash(v: number | null): string {
  if (v === null) return "—";
  return `${v}%`;
}

export function SectorTile({
  s,
  onClick,
  active,
}: {
  s: Sector;
  onClick?: () => void;
  active?: boolean;
}) {
  const growthTone =
    s.earningsGrowth === null ? "text-slate-400" :
    s.earningsGrowth >= 0 ? "text-emerald-400" : "text-rose-400";
  const revTone =
    s.revenueGrowth === null ? "text-slate-400" :
    s.revenueGrowth >= 0 ? "text-emerald-400" : "text-rose-400";

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative text-left glass rounded-xl overflow-hidden hover:border-slate-600 transition-all group h-full flex flex-col",
        active && "ring-2 ring-blue-500/50 border-blue-500/50"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent pointer-events-none opacity-70", accentBg[s.accent])} />
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div>
            <div className={cn("text-[10px] uppercase tracking-[0.25em] font-medium", accentText[s.accent])}>
              {s.shortName}
            </div>
            <div className="mt-1 text-xs text-slate-500 leading-snug">{s.name}</div>
          </div>
          <div className={cn("text-2xl", accentText[s.accent])}>{s.icon}</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded bg-slate-900/60 px-2 py-2">
            <div className="text-[9px] uppercase tracking-wider text-slate-500">EPS Growth</div>
            <div className={cn("mt-0.5 text-base num font-semibold", growthTone)}>
              {pctOrDash(s.earningsGrowth)}
            </div>
          </div>
          <div className="rounded bg-slate-900/60 px-2 py-2">
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Rev Growth</div>
            <div className={cn("mt-0.5 text-base num font-semibold", revTone)}>
              {pctOrDash(s.revenueGrowth)}
            </div>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded bg-slate-900/40 px-2 py-1.5">
            <div className="text-[9px] uppercase tracking-wider text-slate-500">EPS Beat</div>
            <div className="text-xs num text-slate-200">{rateOrDash(s.epsBeatRate)}</div>
          </div>
          <div className="rounded bg-slate-900/40 px-2 py-1.5">
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Net Margin</div>
            <div className="text-xs num text-slate-200">
              {s.marginQ1 === null ? "—" : `${s.marginQ1}%`}
            </div>
          </div>
        </div>

        <div className="mt-3 flex-1">
          <div className="text-[10px] text-slate-400 leading-relaxed line-clamp-3">
            {s.drivers[0]}
          </div>
        </div>

        {s.notableCompanies.length > 0 && (
          <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
            {s.notableCompanies.slice(0, 5).map((t) => (
              <span key={t} className="text-[9px] num px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-400">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
