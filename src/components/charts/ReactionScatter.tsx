import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";
import type { CompanyEarnings } from "../../types";

export function ReactionScatter({ companies }: { companies: CompanyEarnings[] }) {
  const data = companies.map((c) => ({
    ticker: c.ticker,
    epsSurprise: c.epsSurprisePct,
    reaction: c.stockReaction1d,
    name: c.name,
  }));
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Reaction vs Surprise</div>
          <div className="text-base font-medium text-slate-200 mt-1">Beat ≠ Reward</div>
        </div>
        <div className="text-[11px] text-slate-500">Day-1 stock reaction (Y) vs EPS surprise (X)</div>
      </div>
      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
            <XAxis
              type="number"
              dataKey="epsSurprise"
              name="EPS Surprise"
              unit="%"
              stroke="#6b7894"
              fontSize={11}
              tick={{ fill: "#9aa7c2" }}
              label={{ value: "EPS Surprise (%)", position: "insideBottom", offset: -15, fill: "#6b7894", fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey="reaction"
              name="Reaction"
              unit="%"
              stroke="#6b7894"
              fontSize={11}
              tick={{ fill: "#9aa7c2" }}
              label={{ value: "Day-1 Reaction (%)", angle: -90, position: "insideLeft", fill: "#6b7894", fontSize: 11 }}
            />
            <ZAxis range={[80, 80]} />
            <ReferenceLine y={0} stroke="#2c3a5e" />
            <ReferenceLine x={0} stroke="#2c3a5e" />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(v: number, n) => [`${v.toFixed(1)}%`, n]}
              labelFormatter={() => ""}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs">
                      <div className="font-semibold text-slate-100 num">{p.ticker}</div>
                      <div className="text-slate-400">{p.name}</div>
                      <div className="mt-1 text-slate-300 num">EPS surp: {p.epsSurprise.toFixed(1)}%</div>
                      <div className="text-slate-300 num">Reaction: {p.reaction.toFixed(1)}%</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={data} fill="#3b82f6">
              {data.map((d, i) => (
                <circle key={i} r={6} fill={d.reaction >= 0 ? "#10b981" : "#f43f5e"} fillOpacity={0.85} stroke="#020617" strokeWidth={1} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
