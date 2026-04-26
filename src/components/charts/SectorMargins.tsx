import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Scatter, Legend } from "recharts";
import type { Sector } from "../../types";

export function SectorMargins({ sectors }: { sectors: Sector[] }) {
  const data = sectors
    .filter((s) => s.marginQ1 !== null)
    .map((s) => ({
      name: s.shortName,
      q1: s.marginQ1 as number,
      benchmark: s.margin5yr ?? s.marginYoY ?? null,
      benchLabel: s.margin5yr !== null ? "5yr avg" : s.marginYoY !== null ? "YoY" : "—",
    }))
    .sort((a, b) => b.q1 - a.q1);

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">FactSet 4/24/2026</div>
          <div className="text-base font-medium text-slate-200 mt-1">Sector Net Profit Margin (%)</div>
        </div>
        <div className="text-[11px] text-slate-500">Q1 2026 bar · benchmark dot</div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 16, bottom: 36, left: 8 }}>
            <CartesianGrid vertical={false} stroke="#1f2a44" />
            <XAxis
              dataKey="name"
              stroke="#6b7894"
              fontSize={10}
              tick={{ fill: "#9aa7c2" }}
              angle={-25}
              textAnchor="end"
              height={56}
              interval={0}
            />
            <YAxis stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} unit="%" />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.06)" }}
              formatter={(v, name) => {
                const num = typeof v === "number" ? v : null;
                return [num === null ? "n/a" : `${num.toFixed(1)}%`, String(name) === "q1" ? "Q1 2026" : "Benchmark"];
              }}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: "#9aa7c2" }} />
            <Bar dataKey="q1" name="Q1 2026" radius={[4, 4, 0, 0]}>
              {data.map((d, i) => (
                <Cell key={i} fill={
                  d.benchmark !== null && d.q1 < d.benchmark ? "#f43f5e" :
                  d.q1 > 20 ? "#10b981" :
                  "#3b82f6"
                } />
              ))}
            </Bar>
            <Scatter dataKey="benchmark" name="Benchmark" fill="#f59e0b" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Info Tech 29.1% (vs 25.3% 5yr) is the index leader. Energy 6.6% (vs 9.6% 5yr) is the only sector materially below trend.
      </div>
    </div>
  );
}
