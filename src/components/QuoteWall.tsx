import type { ExecQuote, ThemeId } from "../types";
import { QuoteCard } from "./ui/QuoteCard";
import { useState } from "react";
import { cn } from "../lib/utils";

const themeAccents: Record<string, "emerald" | "amber" | "rose" | "violet" | "cyan" | "blue" | "orange" | "yellow"> = {
  "ai-power": "emerald",
  "consumer-bifurcation": "amber",
  "tariff-reset": "rose",
  "capital-discipline": "violet",
  default: "blue",
};

export function QuoteWall({ quotes, themes }: { quotes: ExecQuote[]; themes: { id: ThemeId; title: string }[] }) {
  const [filter, setFilter] = useState<ThemeId | "all">("all");
  const filtered = filter === "all" ? quotes : quotes.filter((q) => q.themeTag === filter);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mr-3">Filter</div>
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "px-3 py-1 rounded-md text-xs transition-colors",
            filter === "all" ? "bg-slate-800 text-slate-100 ring-1 ring-slate-700" : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          )}
        >
          All ({quotes.length})
        </button>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={cn(
              "px-3 py-1 rounded-md text-xs transition-colors",
              filter === t.id ? "bg-slate-800 text-slate-100 ring-1 ring-slate-700" : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            )}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((q, i) => (
          <QuoteCard
            key={i}
            ticker={q.ticker}
            speaker={q.speaker}
            role={q.role}
            quote={q.quote}
            accent={themeAccents[q.themeTag ?? "default"]}
          />
        ))}
      </div>
    </div>
  );
}
