export type ThemeId = "ai-power" | "consumer-bifurcation" | "tariff-reset" | "capital-discipline";

export interface Theme {
  id: ThemeId;
  number: string;
  title: string;
  tagline: string;
  hook: string;
  body: string;
  evidence: { ticker: string; point: string }[];
  accent: "emerald" | "amber" | "rose" | "violet" | "cyan" | "blue" | "orange" | "yellow";
  icon: string;
}

export interface ExecQuote {
  ticker: string;
  speaker: string;
  role: string;
  quote: string;
  themeTag?: ThemeId;
}

export interface CompanyEarnings {
  ticker: string;
  name: string;
  sector: string;
  reportDate: string;
  fiscalPeriod: string;
  epsActual: number;
  epsEstimate: number;
  epsSurprisePct: number;
  revenueActualBn: number;
  revenueEstimateBn: number;
  revenueGrowthYoY: number;
  stockReaction1d: number;
  guidance: "raised" | "reaffirmed" | "lowered" | "withdrawn" | "mixed" | "initiated";
  guidanceNote: string;
  takeaways: string[];
  topQuote: { speaker: string; role: string; quote: string };
  themeTags: ThemeId[];
  status: "beat" | "miss" | "mixed";
}
