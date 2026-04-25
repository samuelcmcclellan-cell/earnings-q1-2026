import { cn } from "../../lib/utils";

type Tone = "emerald" | "rose" | "amber" | "blue" | "violet" | "slate" | "cyan" | "orange" | "yellow";

const tones: Record<Tone, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  slate: "bg-slate-500/10 text-slate-300 border-slate-500/30",
};

export function Badge({
  tone = "slate",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-medium border",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
