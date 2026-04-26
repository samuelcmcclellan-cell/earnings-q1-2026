import { cn } from "../lib/utils";
import type { Theme } from "../types";

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

export function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <div className="relative glass rounded-2xl overflow-hidden hover:border-slate-700 transition-colors h-full flex flex-col">
      <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent pointer-events-none", accentBg[theme.accent])} />
      <div className="relative p-7 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className={cn("text-[10px] uppercase tracking-[0.3em] font-medium", accentText[theme.accent])}>
            Theme {theme.number}
          </div>
          <div className={cn("text-3xl", accentText[theme.accent])}>{theme.icon}</div>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-50 leading-tight">{theme.title}</h3>
        <p className={cn("mt-2 text-sm font-medium", accentText[theme.accent])}>{theme.tagline}</p>
        <p className="mt-4 text-sm text-slate-300 leading-relaxed">{theme.hook}</p>
        <div className="mt-5 pt-5 border-t border-slate-800 space-y-2 flex-1">
          {theme.evidence.slice(0, 4).map((e, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="num text-slate-500 w-20 shrink-0 truncate" title={e.ticker}>{e.ticker}</span>
              <span className="text-slate-400 leading-relaxed">{e.point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
