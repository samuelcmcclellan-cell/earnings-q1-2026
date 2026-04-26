import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";
import type { MacroStats } from "../../types";

export function GuidanceSplit({ m }: { m: MacroStats }) {
  const data = [
    { window: "Q2 2026", positive: m.q2PositiveGuide, negative: m.q2NegativeGuide },
    { window: "FY 2026/27", positive: m.fyPositiveGuide, negative: m.fyNegativeGuide },
  ];

  const q2NegPctNow = m.q2GuideNegPct;
  const q2NegPct5yr = m.q2GuideNegPct5yr;

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">FactSet 4/24/2026</div>
          <div className="text-base font-medium text-slate-200 mt-1">EPS Guidance — Positive vs Negative</div>
        </div>
        <div className="text-[11px] text-slate-500">Number of S&P 500 issuers</div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, bottom: 5, left: 8 }}>
            <CartesianGrid vertical={false} stroke="#1f2a44" />
            <XAxis dataKey="window" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} />
            <YAxis stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.06)" }}
            />
            <Bar dataKey="positive" name="Positive" fill="#10b981" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="positive" position="top" fill="#10b981" fontSize={11} />
            </Bar>
            <Bar dataKey="negative" name="Negative" fill="#f43f5e" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill="#f43f5e" />
              ))}
              <LabelList dataKey="negative" position="top" fill="#f43f5e" fontSize={11} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        <div className="rounded bg-slate-900/60 px-2 py-2 border border-slate-800">
          <div className="text-slate-500">Q2 Negative %</div>
          <div className="text-emerald-400 num font-medium">{q2NegPctNow}%</div>
        </div>
        <div className="rounded bg-slate-900/60 px-2 py-2 border border-slate-800">
          <div className="text-slate-500">5-yr avg</div>
          <div className="text-slate-300 num">{q2NegPct5yr}%</div>
        </div>
        <div className="rounded bg-slate-900/60 px-2 py-2 border border-slate-800">
          <div className="text-slate-500">10-yr avg</div>
          <div className="text-slate-300 num">{m.q2GuideNegPct10yr}%</div>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Q2 2026: 11 negative vs 9 positive guides — 55% negative, slightly better than the 5-yr (58%) and 10-yr (60%) averages.
      </div>
    </div>
  );
}
