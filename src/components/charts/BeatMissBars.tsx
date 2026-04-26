import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceLine } from "recharts";
import type { Sector } from "../../types";

const SP500_BEAT_RATE = 84; // FactSet 4/24/2026 — S&P 500 EPS beat rate

export function BeatMissBars({ sectors }: { sectors: Sector[] }) {
  const data = sectors
    .filter((s) => s.epsBeatRate !== null)
    .map((s) => ({
      name: s.shortName,
      rate: s.epsBeatRate as number,
    }))
    .sort((a, b) => b.rate - a.rate);

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">FactSet 4/24/2026</div>
          <div className="text-base font-medium text-slate-200 mt-1">EPS Beat Rate by Sector (%)</div>
        </div>
        <div className="text-[11px] text-slate-500">S&P 500 = 84%</div>
      </div>
      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 24, bottom: 5, left: 8 }}>
            <CartesianGrid horizontal={false} stroke="#1f2a44" />
            <XAxis
              type="number"
              stroke="#6b7894"
              fontSize={11}
              tick={{ fill: "#9aa7c2" }}
              unit="%"
              domain={[0, 100]}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#6b7894"
              fontSize={11}
              tick={{ fill: "#9aa7c2" }}
              width={110}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.08)" }}
              formatter={(v: number) => [`${v.toFixed(0)}%`, "EPS Beat Rate"]}
            />
            <ReferenceLine
              x={SP500_BEAT_RATE}
              stroke="#94a3b8"
              strokeDasharray="3 3"
              label={{ value: `S&P ${SP500_BEAT_RATE}%`, position: "top", fill: "#94a3b8", fontSize: 10 }}
            />
            <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
              {data.map((d, i) => (
                <Cell
                  key={i}
                  fill={
                    d.rate >= SP500_BEAT_RATE ? "#10b981" :
                    d.rate >= 75 ? "#3b82f6" :
                    "#f59e0b"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Energy, Health Care, Real Estate, Utilities all printing 100% beat rates. Consumer Discretionary 69% — the lowest in the index.
      </div>
    </div>
  );
}
