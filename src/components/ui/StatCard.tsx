import { cn } from "../../lib/utils";

export function StatCard({
  label,
  value,
  delta,
  sublabel,
  accent = "blue",
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  sublabel?: string;
  accent?: "blue" | "emerald" | "rose" | "amber" | "violet" | "cyan";
  className?: string;
}) {
  const accents: Record<string, string> = {
    blue: "from-blue-500/30 to-transparent",
    emerald: "from-emerald-500/30 to-transparent",
    rose: "from-rose-500/30 to-transparent",
    amber: "from-amber-500/30 to-transparent",
    violet: "from-violet-500/30 to-transparent",
    cyan: "from-cyan-500/30 to-transparent",
  };
  return (
    <div className={cn("relative glass rounded-xl p-4 overflow-hidden", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none", accents[accent])} />
      <div className="relative">
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
        <div className="mt-2 text-2xl font-semibold num text-slate-50">{value}</div>
        {delta && (
          <div className={cn("mt-1 text-xs num", delta.startsWith("-") ? "text-rose-400" : "text-emerald-400")}>
            {delta}
          </div>
        )}
        {sublabel && <div className="mt-2 text-[11px] text-slate-500">{sublabel}</div>}
      </div>
    </div>
  );
}
