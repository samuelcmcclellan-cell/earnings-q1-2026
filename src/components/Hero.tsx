import { Activity } from "lucide-react";

export function Hero({
  asOfDate,
  reportCount,
}: {
  asOfDate: string;
  reportCount: number;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 -left-20 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Live · {asOfDate}</span>
          <span className="text-slate-700">·</span>
          <span>{reportCount} mega-cap reports</span>
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-slate-50">
          The earnings season that <span className="text-emerald-400">refused</span> to confirm <br className="hidden md:block" />
          a single market narrative.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          Nineteen mega-caps. Six weeks. One season that simultaneously priced an industrial super-cycle, a tariff-driven margin reset,
          a bifurcating consumer, and a market that paid up for AI-power infrastructure while punishing nearly everything else.
          We read the transcripts so you don&apos;t have to. Below: four themes, every quote, and the data underneath.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Source: official transcripts &amp; 8-Ks</span>
          </div>
          <div className="px-3 py-1.5 rounded-full glass">No Motley Fool. No Yahoo. No paraphrasing.</div>
        </div>
      </div>
    </section>
  );
}
