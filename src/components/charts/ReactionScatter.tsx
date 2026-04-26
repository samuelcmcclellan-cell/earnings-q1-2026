import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";
import type { MacroStats } from "../../types";

export function ReactionScatter({ m }: { m: MacroStats }) {
  // Compares Q1 2026 vs 5-year averages on four FactSet metrics.
  const data = [
    { metric: "EPS Beat %", current: m.epsBeatPct, avg: 77, unit: "%" },        // 5yr avg ~77% per FactSet historical
    { metric: "Surprise %", current: m.epsSurprisePct, avg: m.epsSurprise5yr, unit: "%" },
    { metric: "Beat Reaction", current: m.beatReaction, avg: m.beatReaction5yr, unit: "%" },
    { metric: "Miss Reaction", current: m.missReaction, avg: m.missReaction5yr, unit: "%" },
  ];

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">FactSet 4/24/2026</div>
          <div className="text-base font-medium text-slate-200 mt-1">This Season vs 5-Year Average</div>
        </div>
        <div className="text-[11px] text-slate-500">Bigger beats, softer reactions</div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 60, bottom: 5, left: 8 }}>
            <CartesianGrid horizontal={false} stroke="#1f2a44" />
            <XAxis type="number" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} unit="%" />
            <YAxis dataKey="metric" type="category" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} width={104} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.06)" }}
              formatter={(v: number, name: string) => [`${v.toFixed(1)}%`, name === "current" ? "Q1 2026" : "5-yr avg"]}
            />
            <Bar dataKey="avg" name="5yr avg" fill="#475569" radius={[0, 4, 4, 0]} barSize={10} />
            <Bar dataKey="current" name="Q1 2026" radius={[0, 4, 4, 0]} barSize={18}>
              {data.map((d, i) => (
                <Cell
                  key={i}
                  fill={
                    d.metric === "Miss Reaction"
                      ? d.current > d.avg ? "#10b981" : "#f43f5e"
                      : d.current >= d.avg ? "#10b981" : "#f43f5e"
                  }
                />
              ))}
              <LabelList dataKey="current" position="right" fill="#cbd5e1" fontSize={11} formatter={(v: number) => `${v.toFixed(1)}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Surprise magnitude is +12.3% vs the 5-yr +7.3% — beats are bigger. But the reward (+0.9% vs +1.0% 5yr) is slightly smaller. The market has front-run the result.
      </div>
    </div>
  );
}
