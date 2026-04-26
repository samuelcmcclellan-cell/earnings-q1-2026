import { TrendingUp } from "lucide-react";

export function Header({ active, onNav }: { active: string; onNav: (k: string) => void }) {
  const items = [
    { key: "scoreboard", label: "Scoreboard" },
    { key: "themes", label: "Themes" },
    { key: "sectors", label: "Sectors" },
    { key: "data", label: "Charts" },
    { key: "quotes", label: "Quote Wall" },
    { key: "reports", label: "Reports" },
  ];
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-slate-950" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-50 leading-none">Q1 26 Earnings</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] leading-none mt-1">Deep Read</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {items.map((i) => (
            <button
              key={i.key}
              onClick={() => onNav(i.key)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                active === i.key
                  ? "text-slate-50 bg-slate-800/60"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              {i.label}
            </button>
          ))}
        </nav>
        <div className="text-[11px] text-slate-500 num hidden lg:block">As of 24 April 2026</div>
      </div>
    </header>
  );
}
