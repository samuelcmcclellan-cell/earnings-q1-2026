import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";
import type { CompanyEarnings } from "../../types";

export function BeatMissBars({ companies }: { companies: CompanyEarnings[] }) {
  const data = [...companies]
    .sort((a, b) => b.epsSurprisePct - a.epsSurprisePct)
    .map((c) => ({ ticker: c.ticker, surprise: c.epsSurprisePct }));
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">EPS Surprise (%)</div>
          <div className="text-base font-medium text-slate-200 mt-1">Beat / Miss Ladder</div>
        </div>
        <div className="text-[11px] text-slate-500">Sorted by surprise magnitude</div>
      </div>
      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 24, bottom: 5, left: 8 }}>
            <CartesianGrid horizontal={false} stroke="#1f2a44" />
            <XAxis type="number" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} unit="%" />
            <YAxis dataKey="ticker" type="category" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} width={56} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.08)" }}
              formatter={(v: number) => [`${v.toFixed(1)}%`, "EPS Surprise"]}
            />
            <Bar dataKey="surprise" radius={[0, 4, 4, 0]}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.surprise >= 0 ? "#10b981" : "#f43f5e"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
