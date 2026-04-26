import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Cell } from "recharts";
import type { MacroStats } from "../../types";

export function ForwardPE({ m }: { m: MacroStats }) {
  const data = [
    { label: "Now (4/24/26)", value: m.fwdPE, key: "now" },
    { label: "Mar 31, 2026", value: m.fwdPEMar31, key: "mar31" },
    { label: "5-yr avg", value: m.fwdPE5yr, key: "5yr" },
    { label: "10-yr avg", value: m.fwdPE10yr, key: "10yr" },
  ];

  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">FactSet 4/24/2026</div>
          <div className="text-base font-medium text-slate-200 mt-1">S&P 500 Forward 12-Month P/E</div>
        </div>
        <div className="text-[11px] text-slate-500">Index +{m.indexChangeSinceMar31}% · EPS +{m.fwdEpsChangeSinceMar31}% since Mar 31</div>
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 60, bottom: 5, left: 8 }}>
            <CartesianGrid horizontal={false} stroke="#1f2a44" />
            <XAxis type="number" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} unit="x" domain={[0, 24]} />
            <YAxis dataKey="label" type="category" stroke="#6b7894" fontSize={11} tick={{ fill: "#9aa7c2" }} width={106} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0c111c", border: "1px solid #2c3a5e", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(59,130,246,0.06)" }}
              formatter={(v: number) => [`${v.toFixed(1)}x`, "Forward P/E"]}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={26}>
              {data.map((d, i) => (
                <Cell
                  key={i}
                  fill={d.key === "now" ? "#a78bfa" : d.key === "mar31" ? "#3b82f6" : "#475569"}
                />
              ))}
              <LabelList dataKey="value" position="right" fill="#cbd5e1" fontSize={11} formatter={(v: number) => `${v.toFixed(1)}x`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded bg-slate-900/60 px-2 py-2 border border-slate-800">
          <div className="text-slate-500">Bottom-up Target</div>
          <div className="text-slate-200 num font-medium">${m.bottomUpTarget.toFixed(0)}</div>
        </div>
        <div className="rounded bg-slate-900/60 px-2 py-2 border border-slate-800">
          <div className="text-slate-500">Implied Upside</div>
          <div className="text-emerald-400 num font-medium">+{m.targetUpsidePct}%</div>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Forward P/E 20.9x is above the 5-yr (19.9x) and 10-yr (18.9x) averages. ~75% of the index gain since March 31 is multiple expansion, not estimate revision.
      </div>
    </div>
  );
}
