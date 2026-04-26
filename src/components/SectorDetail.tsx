import { X } from "lucide-react";
import type { Sector, CompanyEarnings } from "../types";
import { cn, fmtPct, fmtBn } from "../lib/utils";
import { Badge } from "./ui/Badge";

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

function numOrDash(v: number | null, digits = 1): string {
  if (v === null) return "—";
  return v.toFixed(digits);
}

export function SectorDetail({
  s,
  caseStudies,
  onClose,
}: {
  s: Sector;
  caseStudies: CompanyEarnings[];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto"
      onClick={onClose}
    >
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
          <div className={cn("text-2xl", accentText[s.accent])}>{s.icon}</div>
          <div>
            <div className="text-2xl font-semibold text-slate-50">{s.name}</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mt-0.5">
              GICS Sector · S&P 500 · FactSet 4/24/2026
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">EPS Growth</div>
            <div className={cn(
              "mt-0.5 text-lg num font-medium",
              s.earningsGrowth === null ? "text-slate-300" :
              s.earningsGrowth >= 0 ? "text-emerald-400" : "text-rose-400"
            )}>
              {pctOrDash(s.earningsGrowth)}
            </div>
            <div className="text-[10px] text-slate-500">YoY Q1 2026</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Rev Growth</div>
            <div className={cn(
              "mt-0.5 text-lg num font-medium",
              s.revenueGrowth === null ? "text-slate-300" :
              s.revenueGrowth >= 0 ? "text-emerald-400" : "text-rose-400"
            )}>
              {pctOrDash(s.revenueGrowth)}
            </div>
            <div className="text-[10px] text-slate-500">YoY Q1 2026</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">EPS Beat</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {rateOrDash(s.epsBeatRate)}
            </div>
            <div className="text-[10px] text-slate-500">% above estimate</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Rev Beat</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {rateOrDash(s.revBeatRate)}
            </div>
            <div className="text-[10px] text-slate-500">% above estimate</div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Net Margin</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {s.marginQ1 === null ? "—" : `${numOrDash(s.marginQ1)}%`}
            </div>
            <div className="text-[10px] text-slate-500">
              {s.marginYoY !== null ? `vs ${numOrDash(s.marginYoY)}% YoY` :
               s.margin5yr !== null ? `vs ${numOrDash(s.margin5yr)}% 5yr` : "Q1 2026"}
            </div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Fwd P/E</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {s.fwdPE === null ? "—" : `${numOrDash(s.fwdPE)}x`}
            </div>
            <div className="text-[10px] text-slate-500">12-month forward</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Buy Rating</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {rateOrDash(s.buyRatingPct)}
            </div>
            <div className="text-[10px] text-slate-500">Analyst Buys</div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Target Upside</div>
            <div className="mt-0.5 text-lg num font-medium text-slate-100">
              {pctOrDash(s.targetUpsidePct)}
            </div>
            <div className="text-[10px] text-slate-500">Bottom-up</div>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">
            FactSet Drivers
          </div>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {s.drivers.map((d, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className={cn("num mt-1 text-[10px] shrink-0", accentText[s.accent])}>▍</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {s.notableCompanies.length > 0 && (
          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">
              FactSet-Named Companies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {s.notableCompanies.map((t) => (
                <span key={t} className="num text-xs px-2 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {caseStudies.length > 0 && (
          <div className="mt-7 pt-6 border-t border-slate-800">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3">
              Case Studies — From Our Transcript Coverage
            </div>
            <div className="space-y-4">
              {caseStudies.map((c) => (
                <div key={c.ticker} className="rounded-lg bg-slate-900/40 border border-slate-800 p-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <div className="text-base font-semibold num text-slate-100">{c.ticker}</div>
                    <div className="text-xs text-slate-400">{c.name}</div>
                    {c.factsetSourced && <Badge tone="cyan">FactSet</Badge>}
                    {c.gaapNote && <Badge tone="amber">GAAP</Badge>}
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500">EPS </span>
                      <span className="num text-slate-200">${c.epsActual.toFixed(2)}</span>
                      <span className="text-slate-500"> vs ${c.epsEstimate.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Rev </span>
                      <span className="num text-slate-200">{fmtBn(c.revenueActualBn)}</span>
                      <span className="text-slate-500"> ({fmtPct(c.revenueGrowthYoY, 1)})</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Day-1 </span>
                      <span className={cn("num", c.stockReaction1d >= 0 ? "text-emerald-400" : "text-rose-400")}>
                        {fmtPct(c.stockReaction1d, 1)}
                      </span>
                    </div>
                  </div>

                  {c.gaapNote && (
                    <div className="mt-2 text-[10px] text-amber-300/80 leading-relaxed">
                      {c.gaapNote}
                    </div>
                  )}

                  <blockquote className={cn("mt-3 border-l-2 pl-3 text-xs text-slate-300 leading-relaxed italic", `border-${s.accent}-500/60`)}>
                    "{c.topQuote.quote}"
                  </blockquote>
                  <div className="mt-1 text-[10px] text-slate-500">— {c.topQuote.speaker}, {c.topQuote.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
