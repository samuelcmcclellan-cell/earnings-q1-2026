export type ThemeId =
  | "ai-power"
  | "consumer-bifurcation"
  | "tariff-reset"
  | "capital-discipline"
  | "margin-record";

export type SectorId =
  | "info-tech"
  | "materials"
  | "financials"
  | "industrials"
  | "consumer-discretionary"
  | "consumer-staples"
  | "real-estate"
  | "utilities"
  | "communication-services"
  | "health-care"
  | "energy";

export type Accent =
  | "emerald"
  | "amber"
  | "rose"
  | "violet"
  | "cyan"
  | "blue"
  | "orange"
  | "yellow"
  | "sky"
  | "fuchsia"
  | "lime";

export interface Theme {
  id: ThemeId;
  number: string;
  title: string;
  tagline: string;
  hook: string;
  body: string;
  evidence: { ticker: string; point: string }[];
  accent: Accent;
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
  sectorId: SectorId;
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
  gaapNote?: string;
  factsetSourced?: boolean;
}

export interface Sector {
  id: SectorId;
  name: string;
  shortName: string;
  accent: Accent;
  icon: string;
  earningsGrowth: number | null; // FactSet blended Q1 2026 (%); null if not text-extractable
  revenueGrowth: number | null;
  epsBeatRate: number | null; // % of cos. above EPS estimates
  revBeatRate: number | null;
  marginQ1: number | null;
  marginYoY: number | null; // year-ago margin
  margin5yr: number | null; // 5-yr avg margin
  fwdPE: number | null;
  buyRatingPct: number | null;
  targetUpsidePct: number | null; // bottom-up target vs. current
  drivers: string[]; // narrative drivers/exclusions from FactSet
  notableCompanies: string[]; // tickers FactSet specifically called out
}

export interface MacroStat {
  label: string;
  value: string;
  comparator?: string;
  trend?: "up" | "down" | "flat";
}

export interface MacroStats {
  asOf: string;
  pctReporting: number;
  epsBeatPct: number;
  revBeatPct: number;
  epsSurprisePct: number;
  epsSurprise5yr: number;
  epsSurprise10yr: number;
  revSurprisePct: number;
  revSurprise5yr: number;
  revSurprise10yr: number;
  earningsGrowth: number;
  earningsGrowthLastWeek: number;
  earningsGrowthMar31: number;
  revenueGrowth: number;
  revenueGrowthLastWeek: number;
  revenueGrowthMar31: number;
  netMargin: number;
  netMarginPriorRecord: number;
  netMarginYearAgo: number;
  netMargin5yr: number;
  beatReaction: number;
  beatReaction5yr: number;
  missReaction: number;
  missReaction5yr: number;
  q2EarningsGrowth: number;
  q2RevenueGrowth: number;
  q3EarningsGrowth: number;
  q3RevenueGrowth: number;
  q4EarningsGrowth: number;
  q4RevenueGrowth: number;
  cy26EarningsGrowth: number;
  cy26RevenueGrowth: number;
  q2NegativeGuide: number;
  q2PositiveGuide: number;
  q2GuideNegPct: number;
  q2GuideNegPct5yr: number;
  q2GuideNegPct10yr: number;
  fyNegativeGuide: number;
  fyPositiveGuide: number;
  fwdPE: number;
  fwdPE5yr: number;
  fwdPE10yr: number;
  fwdPEMar31: number;
  trailingPE: number;
  trailingPE5yr: number;
  trailingPE10yr: number;
  bottomUpTarget: number;
  indexClose: number;
  targetUpsidePct: number;
  indexChangeSinceMar31: number;
  fwdEpsChangeSinceMar31: number;
  consecDoubleDigitGrowthQuarters: number;
  consecPositiveGrowthQuarters: number;
}
