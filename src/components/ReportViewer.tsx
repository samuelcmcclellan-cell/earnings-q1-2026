import { useMemo, useState } from "react";
import { cn } from "../lib/utils";
import { Clock, FileText, Zap } from "lucide-react";

export type ReportTier = "hot" | "exec" | "deep";

const tiers: { id: ReportTier; label: string; words: string; icon: React.ReactNode; sub: string }[] = [
  { id: "hot", label: "Hot Take", words: "100 words", icon: <Zap className="w-3.5 h-3.5" />, sub: "Elevator pitch" },
  { id: "exec", label: "Executive Brief", words: "500 words", icon: <Clock className="w-3.5 h-3.5" />, sub: "5 min read" },
  { id: "deep", label: "Deep Read", words: "5,000 words", icon: <FileText className="w-3.5 h-3.5" />, sub: "Full report" },
];

export function ReportViewer({
  hot,
  exec,
  deep,
}: {
  hot: string;
  exec: string;
  deep: string;
}) {
  const [tier, setTier] = useState<ReportTier>("exec");
  const content = useMemo(() => (tier === "hot" ? hot : tier === "exec" ? exec : deep), [tier, hot, exec, deep]);

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="border-b border-slate-800 px-6 py-4 flex flex-wrap items-center gap-2">
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mr-3">Length</div>
        {tiers.map((t) => (
          <button
            key={t.id}
            onClick={() => setTier(t.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors",
              tier === t.id
                ? "bg-slate-800 text-slate-50 ring-1 ring-slate-700"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            )}
          >
            {t.icon}
            <span>{t.label}</span>
            <span className="text-[10px] text-slate-500 num">{t.words}</span>
          </button>
        ))}
      </div>
      <article
        className="report-prose px-6 md:px-10 py-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
