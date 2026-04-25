import { Quote } from "lucide-react";
import { cn } from "../../lib/utils";

export function QuoteCard({
  ticker,
  speaker,
  role,
  quote,
  accent = "blue",
}: {
  ticker: string;
  speaker: string;
  role: string;
  quote: string;
  accent?: "blue" | "emerald" | "rose" | "amber" | "violet" | "cyan" | "orange" | "yellow";
}) {
  const accents: Record<string, string> = {
    blue: "border-l-blue-500/60",
    emerald: "border-l-emerald-500/60",
    rose: "border-l-rose-500/60",
    amber: "border-l-amber-500/60",
    violet: "border-l-violet-500/60",
    cyan: "border-l-cyan-500/60",
    orange: "border-l-orange-500/60",
    yellow: "border-l-yellow-500/60",
  };
  return (
    <div className={cn("glass rounded-lg border-l-4 p-5 relative h-full flex flex-col", accents[accent])}>
      <Quote className="absolute top-3 right-3 w-4 h-4 text-slate-700" />
      <blockquote className="text-[15px] leading-relaxed text-slate-200 italic flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-baseline justify-between gap-3">
        <div>
          <div className="text-sm font-medium text-slate-100">{speaker}</div>
          <div className="text-[11px] text-slate-500">{role}</div>
        </div>
        <div className="text-[11px] num text-slate-400 tracking-wider">{ticker}</div>
      </div>
    </div>
  );
}
