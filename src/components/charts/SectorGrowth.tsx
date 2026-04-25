import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";
import type { CompanyEarnings } from "../../types";

export function SectorGrowth({ companies }: { companies: CompanyEarnings[] }) {
  const map = new Map<string, { sum: number; count: number }>();
  companies.forEach((c) => {
    const cur = map.get(c.sector) ?? { sum: 0, count: 0 };
    cur.sum += c.revenueGrowthYoY;
    cur.count += 1;
    map.set(c.sector, cur);
  });
  const data = Array.from(map.entries())
    .map(([sector, v]) => ({ sector, growth: v.sum / v.count }))
    .sort((a, b) => b.growth - a.growth);

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Avg YoY Revenue Growth</div>
          <div className="text-base font-medium text-slate-200 mt-1">By Sector</div>
        </div>
        <div className="text-[11px] text-slate-500">Simple average within sample</div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 16, bottom: 30, left: 8 }}>
            <CartesianGrid vertical={false} stroke="#1f2a44" />
            <XAxis dataKey="sector" stroke="#6b7894" fontSize={10} tick={{ fill: "#9aa7c2" }} angle={-25} textAnchor="end" height={50} interval={0} />
            <YAxis stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} unit="%" />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.08)" }}
              formatter={(v: number) => [`${v.toFixed(1)}%`, "Avg YoY"]}
            />
            <Bar dataKey="growth" radius={[4, 4, 0, 0]}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.growth >= 0 ? "#10b981" : "#f43f5e"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
